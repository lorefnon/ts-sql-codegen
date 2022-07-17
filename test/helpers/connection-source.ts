import { PostgreSqlConnection } from "ts-sql-query/connections/PostgreSqlConnection";
import { ConsoleLogQueryRunner } from "ts-sql-query/queryRunners/ConsoleLogQueryRunner";
import { PgPoolQueryRunner } from "ts-sql-query/queryRunners/PgPoolQueryRunner";
import { Pool } from "pg";
import memoize from "lodash/memoize";

export class DBConnection extends PostgreSqlConnection<"DBConnection"> {}

export const getPool = memoize(() => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    pool.on("error", (error: any) => {
        console.error("error from pg connection pool: ", error);
    });
    return pool;
});

export const getConnection = () =>
    new DBConnection(
        new ConsoleLogQueryRunner(new PgPoolQueryRunner(getPool()))
    );
