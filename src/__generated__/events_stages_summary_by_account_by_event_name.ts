/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: C16sDpOw4mAfBYR2Ua/IPhWXrDJAb32MHZ/qTXhgtxBpIabGeeM+W8IzkRzHhHB1HQ8B499A00zt9g/pmVALJA==
 */

/* eslint-disable */
// tslint:disable

interface EventsStagesSummaryByAccountByEventName {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  HOST: (string) | null
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  USER: (string) | null
}
export default EventsStagesSummaryByAccountByEventName;

interface EventsStagesSummaryByAccountByEventName_InsertParameters {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  HOST?: (string) | null
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  USER?: (string) | null
}
export type {EventsStagesSummaryByAccountByEventName_InsertParameters}
