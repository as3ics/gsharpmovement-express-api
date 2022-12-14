/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: akprn19qLG3BOcEahqug9j7pgS6bVAPt7+jipKH9XVskx3iam/ZJCBqwunOKou46Gx/0+rxP55YXGXYoan82rw==
 */

/* eslint-disable */
// tslint:disable

interface EventsErrorsSummaryByHostByError {
  ERROR_NAME: (string) | null
  ERROR_NUMBER: (number) | null
  FIRST_SEEN: ((string | Date)) | null
  HOST: (string) | null
  LAST_SEEN: ((string | Date)) | null
  SQL_STATE: (string) | null
  SUM_ERROR_HANDLED: (string | number | BigInt)
  SUM_ERROR_RAISED: (string | number | BigInt)
}
export default EventsErrorsSummaryByHostByError;

interface EventsErrorsSummaryByHostByError_InsertParameters {
  ERROR_NAME?: (string) | null
  ERROR_NUMBER?: (number) | null
  FIRST_SEEN?: ((string | Date)) | null
  HOST?: (string) | null
  LAST_SEEN?: ((string | Date)) | null
  SQL_STATE?: (string) | null
  SUM_ERROR_HANDLED: (string | number | BigInt)
  SUM_ERROR_RAISED: (string | number | BigInt)
}
export type {EventsErrorsSummaryByHostByError_InsertParameters}
