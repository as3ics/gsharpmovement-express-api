/**
 * databsase.ts
 *
 * api.goria.com
 * by AS3ICS
 *
 * Zach DeGeorge
 * zach@as3ics.com
 *
 * @format
 * @abstract Initializes the mongoose mongodb databse connection
 *
 */

import createConnectionPool, { sql } from "@databases/mysql";
import tables from "@databases/mysql-typed";
import DatabaseSchema, { serializeValue } from "./__generated__";
import { MYSQL_HOST, MONGODB_URL } from "./config";

export { sql };

const db = createConnectionPool(MYSQL_HOST);
export default db;

// You can list whatever tables you actually have here:
const { emails } = tables<DatabaseSchema>({
  serializeValue,
});
export { emails };
