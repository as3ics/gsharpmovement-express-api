/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: BCDhW+/9KjlKIQE1C4VAEN801qxWkU1ZJhzzfL4AqsZ5bphyG+ADL5gP2GGJDkMmyZjWuLBgmqmCP0WqxbRP3A==
 */

/* eslint-disable */
// tslint:disable

/**
 * Slow log
 */
interface SlowLogTemplate {
  db: string
  insert_id: number
  last_insert_id: number
  lock_time: string
  query_time: string
  rows_examined: number
  rows_sent: number
  server_id: number
  sql_text: unknown
  /**
   * @default CURRENT_TIMESTAMP(6)
   */
  start_time: (string | Date)
  thread_id: (string | number | BigInt)
  user_host: string
}
export default SlowLogTemplate;

/**
 * Slow log
 */
interface SlowLogTemplate_InsertParameters {
  db: string
  insert_id: number
  last_insert_id: number
  lock_time: string
  query_time: string
  rows_examined: number
  rows_sent: number
  server_id: number
  sql_text: unknown
  /**
   * @default CURRENT_TIMESTAMP(6)
   */
  start_time?: (string | Date)
  thread_id: (string | number | BigInt)
  user_host: string
}
export type {SlowLogTemplate_InsertParameters}