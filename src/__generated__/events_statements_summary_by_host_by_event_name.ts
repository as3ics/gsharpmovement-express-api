/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: +QYNeDiGu7L/aGCLs0+tcrtc2adZaprMRWmi0QthF37jJN5KGAMs/0A29GcCIEDHXnHXR+TjWolilAaiBexynw==
 */

/* eslint-disable */
// tslint:disable

interface EventsStatementsSummaryByHostByEventName {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  HOST: (string) | null
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_CPU_TIME: (string | number | BigInt)
  SUM_CREATED_TMP_DISK_TABLES: (string | number | BigInt)
  SUM_CREATED_TMP_TABLES: (string | number | BigInt)
  SUM_ERRORS: (string | number | BigInt)
  SUM_LOCK_TIME: (string | number | BigInt)
  SUM_NO_GOOD_INDEX_USED: (string | number | BigInt)
  SUM_NO_INDEX_USED: (string | number | BigInt)
  SUM_ROWS_AFFECTED: (string | number | BigInt)
  SUM_ROWS_EXAMINED: (string | number | BigInt)
  SUM_ROWS_SENT: (string | number | BigInt)
  SUM_SELECT_FULL_JOIN: (string | number | BigInt)
  SUM_SELECT_FULL_RANGE_JOIN: (string | number | BigInt)
  SUM_SELECT_RANGE: (string | number | BigInt)
  SUM_SELECT_RANGE_CHECK: (string | number | BigInt)
  SUM_SELECT_SCAN: (string | number | BigInt)
  SUM_SORT_MERGE_PASSES: (string | number | BigInt)
  SUM_SORT_RANGE: (string | number | BigInt)
  SUM_SORT_ROWS: (string | number | BigInt)
  SUM_SORT_SCAN: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_WARNINGS: (string | number | BigInt)
}
export default EventsStatementsSummaryByHostByEventName;

interface EventsStatementsSummaryByHostByEventName_InsertParameters {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  HOST?: (string) | null
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_CPU_TIME: (string | number | BigInt)
  SUM_CREATED_TMP_DISK_TABLES: (string | number | BigInt)
  SUM_CREATED_TMP_TABLES: (string | number | BigInt)
  SUM_ERRORS: (string | number | BigInt)
  SUM_LOCK_TIME: (string | number | BigInt)
  SUM_NO_GOOD_INDEX_USED: (string | number | BigInt)
  SUM_NO_INDEX_USED: (string | number | BigInt)
  SUM_ROWS_AFFECTED: (string | number | BigInt)
  SUM_ROWS_EXAMINED: (string | number | BigInt)
  SUM_ROWS_SENT: (string | number | BigInt)
  SUM_SELECT_FULL_JOIN: (string | number | BigInt)
  SUM_SELECT_FULL_RANGE_JOIN: (string | number | BigInt)
  SUM_SELECT_RANGE: (string | number | BigInt)
  SUM_SELECT_RANGE_CHECK: (string | number | BigInt)
  SUM_SELECT_SCAN: (string | number | BigInt)
  SUM_SORT_MERGE_PASSES: (string | number | BigInt)
  SUM_SORT_RANGE: (string | number | BigInt)
  SUM_SORT_ROWS: (string | number | BigInt)
  SUM_SORT_SCAN: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_WARNINGS: (string | number | BigInt)
}
export type {EventsStatementsSummaryByHostByEventName_InsertParameters}
