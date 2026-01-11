import path from "path";
import fs from "node:fs/promises";
import { FieldMapping, Generator } from "../src";
import { isEqual, omit } from "lodash";
import snap from "mocha-snap";
import assert from "assert";
import { getConnection } from "./helpers/connection-source";
import { extractColumnsFrom } from "ts-sql-query/extras/utils";

const schemaPath = path.join(__dirname, "data", "test.schema.yaml");
const connectionSourcePath = path.join(__dirname, "helpers", "connection-source");
const outputDirPath = path.join(__dirname, "generated");

const fieldMappings: FieldMapping[] = [
  {
    columnType: "genre",
    generatedField: {
      type: {
        kind: "enum",
        tsType: {
          name: "Genre",
          importPath: path.join(__dirname, "helpers", "types"),
        },
      },
    },
  },
  {
    tableName: "chapters",
    columnName: "metadata",
    generatedField: {
      type: {
        kind: "custom",
        dbType: { name: "jsonb" },
        tsType: {
          name: "ChapterMetadata",
          importPath: path.join(__dirname, "helpers", "types"),
        },
        adapter: {
          name: "ChapterMetadataAdapter",
          importPath: path.join(__dirname, "helpers", "adapters"),
        },
      },
    },
  },
];


describe("Generator", function () {
  this.timeout(10_1000)

  beforeEach(async () => {
    try {
      await fs.rm(outputDirPath, {
        force: true,
        recursive: true
      });
    } catch (e) {
      console.error(e)
    }
  });

  afterEach(async () => {
    try {
      await fs.rm(outputDirPath, {
        force: true,
        recursive: true
      });
    } catch (e) {
      console.error(e)
    }
  });

  [undefined, true, false].forEach((useQualifiedTableName) => {
    it(`generates code from schema with useQualifiedTablePrefix: ${useQualifiedTableName}`, async () => {
      const generator = new Generator({
        schemaPath,
        connectionSource: {
          path: "../helpers/connection-source",
          resolveRelative: false,
        },
        outputDirPath,
        fieldMappings,
        tableMapping: useQualifiedTableName ? {
          useQualifiedTableName
        } : undefined
      });
      await generator.generate();
      await snap(await readAllGenerated());
      if (process.env.DATABASE_URL) {
        const conn = getConnection();
        await conn
          .transaction(async () => {
            // prettier-ignore
            // @ts-ignore
            const { AuthorsTable } = await import("./generated/AuthorsTable");
            // prettier-ignore
            // @ts-ignore
            const { BooksTable } = await import("./generated/BooksTable");
            const authorsTable = new AuthorsTable();
            const { id } = await conn
              .insertInto(authorsTable)
              .set({
                id: 2,
                name: "Brandon Sanderson",
              })
              .returning({
                id: authorsTable.id,
              })
              .executeInsertOne();
            assert(id === 2);
            await conn
              .insertInto(new BooksTable())
              .set({
                name: "Mistborn",
                authorId: id,
              })
              .executeInsert();
            // prettier-ignore
            // @ts-ignore
            const { AuthorBooksTable } = await import("./generated/AuthorBooksTable");
            // prettier-ignore
            // @ts-ignore
            const { ChaptersTable } = await import("./generated/ChaptersTable");
            const authorBooksTable = new AuthorBooksTable();
            const authorBooks = await conn
              .selectFrom(authorBooksTable)
              .select(extractColumnsFrom(authorBooksTable) as any)
              .executeSelectMany();
            console.log(authorBooks.map((it) => omit(it, ["id"])));
            assert(
              isEqual(
                authorBooks.map((it) => omit(it, ["id"])),
                [
                  {
                    name: "Unsouled",
                    authorId: 1,
                    authorName: "Will Wight",
                  },
                  {
                    name: "Mistborn",
                    authorId: 2,
                    authorName: "Brandon Sanderson",
                  },
                ]
              )
            );
            const chaptersTable = new ChaptersTable();
            const chapters = await conn
              .selectFrom(chaptersTable)
              .select(extractColumnsFrom(chaptersTable) as any)
              .executeSelectMany();
            console.log("chapters:", chapters);
            assert(
              isEqual(
                chapters.map(({ bookId, ...it }) => it),
                [
                  {
                    id: 1,
                    name: "Chapter 01",
                    metadata: { a: "test" },
                  },
                ]
              )
            );
            const newChapter = { ...chapters[0] };
            delete newChapter.id;
            newChapter.name = "Chapter 02";
            await conn
              .insertInto(chaptersTable)
              .set(newChapter as any)
              .executeInsert();
            throw new Error("CANCEL_TRX");
          })
          .catch((e) => {
            if (e.message !== "CANCEL_TRX") throw e;
            console.info("Ignoring transaction error: ", e);
          });
      }
    });
  });
  it("allows exporting row types", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSource: {
        path: connectionSourcePath,
        resolveRelative: true,
      },
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        rowTypes: true
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });
  it("allows exporting value types", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        valuesTypes: true
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });
  it("allows exporting row types as interface", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        rowTypes: {
          asInterface: true
        }
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });
  it("allows exporting value types as interface", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        valuesTypes: {
          asInterface: true
        }
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });
  it("allows exporting crud repositories", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      fieldMappings,
      export: {
        crudRepository: true
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("allows omitting specific tables and fields", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: [/authors/, "books"],
      },
      tableMapping: {
        idPrefix: "Public",
      },
      fieldMappings: [
        ...fieldMappings,
        {
          tableName: "authors",
          columnName: "name",
          generatedField: false,
        },
        {
          tableName: "books",
          columnName: "time_to_read",
          generatedField: {
            type: {
              dbType: { name: "int" },
            },
            name: "readTime",
          },
        },
      ],
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("allows exporting instances", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings,
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("supports removal of extraneous files", async () => {
    const exPath = path.resolve(path.join(outputDirPath, 'extra/test.md'))
    await fs.mkdir(path.dirname(exPath), {
      recursive: true
    })
    await fs.writeFile(exPath, 'test')
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        rowTypes: true
      },
      removeExtraneous: 'all'
    });
    await generator.generate().catch(e => {
      console.error(e)
    });
    assert.rejects(async () => fs.stat(exPath), {
      code: "ENOENT"
    })
  })

  it("allows non-relative and default import paths", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "enum",
              tsType: {
                name: "Genre",
                importPath: path.join(__dirname, "helpers/types"),
                isDefault: true,
              },
            },
          },
        },
        {
          tableName: "chapters",
          columnName: "metadata",
          generatedField: {
            type: {
              kind: "custom",
              dbType: { name: "jsonb" },
              tsType: {
                name: "ChapterMetadata",
                importPath: "some-lib/ChapterMetadata",
                isDefault: true,
                isRelative: false,
              },
              adapter: {
                name: "ChapterMetadataAdapter",
                importPath: "some-other-lib",
                isRelative: false,
              },
            },
          },
        },
      ],
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("allows non-relative and default import paths with db type name", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "enum",
              tsType: {
                name: "Genre",
                importPath: path.join(__dirname, "helpers/types"),
                isDefault: true,
              },
            },
          },
        },
        {
          tableName: "chapters",
          columnName: "metadata",
          generatedField: {
            type: {
              kind: "custom",
              dbType: { name: "jsonb" },
              tsType: {
                name: "ChapterMetadata",
                importPath: "some-lib/ChapterMetadata",
                isDefault: true,
                isRelative: false,
              },
              adapter: {
                name: "ChapterMetadataAdapter",
                importPath: "some-other-lib",
                isRelative: false,
              },
            },
          },
        },
      ],
      includeDBTypeWhenIsOptional: true,
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("generates valid import on inner folder", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["author_books"],
      },
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "enum",
              tsType: {
                name: "Genre",
                importPath: path.join(outputDirPath, "enums", "Genre"),
                isDefault: true,
              },
            },
          },
        }
      ],
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("allows customizing naming", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      enums: {
        include: ["genre"],
      },
      export: {
        rowTypes: true,
        valuesTypes: true,
        extractedColumns: true,
        tableInstances: true,
        tableClasses: false,
      },
      naming: {
        enumConstantNamePrefix: 'ECNP',
        enumConstantNameSuffix: 'ECNS',
        enumTypeNamePrefix: 'ETNP',
        enumTypeNameSuffix: 'ETNS',
        insertableRowTypeNamePrefix: 'IRP',
        insertableRowTypeNameSuffix: 'IRS',
        insertableValuesTypeNamePrefix: 'IVP',
        insertableValuesTypeNameSuffix: 'IVS',
        selectedRowTypeNamePrefix: 'SRP',
        selectedRowTypeNameSuffix: 'SRS',
        selectedValuesTypeNamePrefix: 'SVP',
        selectedValuesTypeNameSuffix: 'SVS',
        tableClassNamePrefix: 'TCP',
        tableClassNameSuffix: 'TCS',
        tableColumnsNamePrefix: 'TCsP',
        tableColumnsNameSuffix: 'TCsS',
        tableInstanceNamePrefix: 'TIP',
        tableInstanceNameSuffix: 'TIS',
        updatableRowTypeNamePrefix: 'URP',
        updatableRowTypeNameSuffix: 'URS',
        updatableValuesTypeNamePrefix: 'UVP',
        updatableValuesTypeNameSuffix: 'UVS',
        viewClassNamePrefix: 'VCP',
        viewClassNameSuffix: 'VCS',
        viewColumnsNamePrefix: 'VCsP',
        viewColumnsNameSuffix: 'VCsS',
        viewInstanceNamePrefix: 'VIP',
        viewInstanceNameSuffix: 'VIS',
      },
      fieldMappings: [
        {
          tableName: "chapters",
          columnName: "metadata",
          generatedField: {
            type: {
              kind: "custom",
              dbType: { name: "jsonb" },
              tsType: {
                name: "ChapterMetadata",
                importPath: path.join(__dirname, "helpers", "types"),
              },
              adapter: {
                name: "ChapterMetadataAdapter",
                importPath: path.join(__dirname, "helpers", "adapters"),
              },
            },
          },
        },
      ]
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("supports custom comparable field", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["author_books"],
      },
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "customComparable",
              tsType: {
                name: "Genre",
                importPath: path.join(outputDirPath, "enums", "Genre"),
                isDefault: true,
              },
            },
          },
        }
      ],
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("supports custom comparable field with db type name", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["author_books"],
      },
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "customComparable",
              tsType: {
                name: "Genre",
                importPath: path.join(outputDirPath, "enums", "Genre"),
                isDefault: true,
              },
            },
          },
        }
      ],
      includeDBTypeWhenIsOptional: true,
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("supports generating column type mappings", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        columnTypeMappingInterface: true
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  })

  it("supports injection of raw content in generated files", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      rawContent: {
        before: `/* eslint-disable */`,
        after: `/* Generated on: 2020-10-10 */`
      }
    });
    await generator.generate();
    await snap(await readAllGenerated());
  })

  it("allows wrapping exported types", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: ["authors"],
      },
      export: {
        rowTypes: true,
        valuesTypes: true,
      },
      typeWrappers: [{
        typeName: /URow$/,
        wrapper: {
          name: 'EnforceUpdateProps',
          importPath: '../type-helpers'
        }
      }, {
        typeName: 'AuthorsIRow',
        wrapper: {
          name: 'EnforceAuthorInsertProps',
          importPath: '../type-helpers'
        }
      }]
    });
    await generator.generate();
    await snap(await readAllGenerated());
  })

  it('supports inclusions for enumeration generation', async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      enums: {
        include: ["public.genre"],
      },
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      tables: {
        include: ["author_books"],
      },
    });
    await generator.generate();
    await snap(await readAllGenerated());
  })

  it('supports exclusions for enumeration generation', async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      enums: {
        exclude: ["genre"],
      },
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "customLocalDateTime",
              tsType: {
                name: "Genre",
                importPath: path.join(outputDirPath, "enums", "Genre"),
                isDefault: true,
              },
            },
          },
        }
      ],
      tables: {
        include: ["author_books"],
      },
    });
    await generator.generate();
    await snap(await readAllGenerated());
  })

});

const readAllGenerated = async () => {
  const fList = await fs.readdir(outputDirPath);
  return (
    await Promise.all(
      fList.map(async (fName) => {
        const content = await fs.readFile(
          path.join(outputDirPath, fName),
          "utf8"
        );
        return [`// ${fName} :\n${content}`];
      })
    )
  ).join("\n\n");
};

it("supports custom int field", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customInt",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom int field with db type name", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customInt",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
    includeDBTypeWhenIsOptional: true,
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom double field", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customDouble",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom double field with db type name", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customDouble",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
    includeDBTypeWhenIsOptional: true,
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom UUID field", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customUuid",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom UUID field with db type name", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customUuid",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
    includeDBTypeWhenIsOptional: true,
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom local date field", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customLocalDate",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom local date field with db type name", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customLocalDate",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
    includeDBTypeWhenIsOptional: true,
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom local time field", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customLocalTime",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom local time field with db type name", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customLocalTime",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
    includeDBTypeWhenIsOptional: true,
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom local date time field", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customLocalDateTime",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
  });
  await generator.generate();
  await snap(await readAllGenerated());
});

it("supports custom local date time field with db type name", async () => {
  const generator = new Generator({
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
      include: ["author_books"],
    },
    export: {
      tableInstances: true,
      tableClasses: false,
    },
    fieldMappings: [
      {
        columnType: "genre",
        generatedField: {
          type: {
            kind: "customLocalDateTime",
            tsType: {
              name: "Genre",
              importPath: path.join(outputDirPath, "enums", "Genre"),
              isDefault: true,
            },
          },
        },
      }
    ],
    includeDBTypeWhenIsOptional: true,
  });
  await generator.generate();
  await snap(await readAllGenerated());
});
