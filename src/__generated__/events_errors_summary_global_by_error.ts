/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: CkCWPVLmoQE/TkZkDuJpwJ+eRQaM1ib1bidqI7Z8GSMXqdxyyuKSYHZMWvOSkuOhS9c0vcukQsVXeKY1LlSuiA==
 */

/* eslint-disable */
// tslint:disable

interface EventsErrorsSummaryGlobalByError {
  ERROR_NAME: (string) | null
  ERROR_NUMBER: (number) | null
  FIRST_SEEN: ((string | Date)) | null
  LAST_SEEN: ((string | Date)) | null
  SQL_STATE: (string) | null
  SUM_ERROR_HANDLED: (string | number | BigInt)
  SUM_ERROR_RAISED: (string | number | BigInt)
}
export default EventsErrorsSummaryGlobalByError;

interface EventsErrorsSummaryGlobalByError_InsertParameters {
  ERROR_NAME?: (string) | null
  ERROR_NUMBER?: (number) | null
  FIRST_SEEN?: ((string | Date)) | null
  LAST_SEEN?: ((string | Date)) | null
  SQL_STATE?: (string) | null
  SUM_ERROR_HANDLED: (string | number | BigInt)
  SUM_ERROR_RAISED: (string | number | BigInt)
}
export type {EventsErrorsSummaryGlobalByError_InsertParameters}