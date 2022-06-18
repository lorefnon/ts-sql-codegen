import { DefaultTypeAdapter, TypeAdapter } from "ts-sql-query/TypeAdapter"
import { ChapterMetadataSchema } from "./types"

export const ChapterMetadataAdapter: TypeAdapter ={
    transformValueFromDB(value: any, type: string, next: DefaultTypeAdapter):  unknown {
        console.log('Transform from db: ', value)
        if (type === 'jsonb') {
            return ChapterMetadataSchema.parse(value)
        }
        return next.transformValueFromDB(value, type)
    },
    transformValueToDB(value: any, type: string, next: DefaultTypeAdapter): unknown {
        console.log('Transform to db: ', value)
        if (type === 'jsonb') {
            return value;
        }
        return next.transformValueToDB(value, type);
    }
}
