/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: iB9u7K6Ul54nfrwk6qWj6LavNrv6CX5kQbiH/NDfIc7ludnJcyL5s7XFyBoznQR6ElejxJimbDLuj4nB5JvquA==
 */

/* eslint-disable */
// tslint:disable

interface EventsTransactionsSummaryByHostByEventName {
  AVG_TIMER_READ_ONLY: (string | number | BigInt)
  AVG_TIMER_READ_WRITE: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_READ_ONLY: (string | number | BigInt)
  COUNT_READ_WRITE: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  HOST: (string) | null
  MAX_TIMER_READ_ONLY: (string | number | BigInt)
  MAX_TIMER_READ_WRITE: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_READ_ONLY: (string | number | BigInt)
  MIN_TIMER_READ_WRITE: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_READ_ONLY: (string | number | BigInt)
  SUM_TIMER_READ_WRITE: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
}
export default EventsTransactionsSummaryByHostByEventName;

interface EventsTransactionsSummaryByHostByEventName_InsertParameters {
  AVG_TIMER_READ_ONLY: (string | number | BigInt)
  AVG_TIMER_READ_WRITE: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_READ_ONLY: (string | number | BigInt)
  COUNT_READ_WRITE: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  HOST?: (string) | null
  MAX_TIMER_READ_ONLY: (string | number | BigInt)
  MAX_TIMER_READ_WRITE: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_READ_ONLY: (string | number | BigInt)
  MIN_TIMER_READ_WRITE: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_READ_ONLY: (string | number | BigInt)
  SUM_TIMER_READ_WRITE: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
}
export type {EventsTransactionsSummaryByHostByEventName_InsertParameters}
