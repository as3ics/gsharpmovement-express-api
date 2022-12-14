/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: FCvYpVL4PAnx22tAHzj0pwp7kINAF8KS/AYB7N6yrwV3Ybb+/ZiTmQQFzKzKmSFg0wA1a7p4Dr6kr1p60kCg3A==
 */

/* eslint-disable */
// tslint:disable

interface FileSummaryByInstance {
  AVG_TIMER_MISC: (string | number | BigInt)
  AVG_TIMER_READ: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  AVG_TIMER_WRITE: (string | number | BigInt)
  COUNT_MISC: (string | number | BigInt)
  COUNT_READ: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  COUNT_WRITE: (string | number | BigInt)
  EVENT_NAME: string
  FILE_NAME: string
  MAX_TIMER_MISC: (string | number | BigInt)
  MAX_TIMER_READ: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MAX_TIMER_WRITE: (string | number | BigInt)
  MIN_TIMER_MISC: (string | number | BigInt)
  MIN_TIMER_READ: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WRITE: (string | number | BigInt)
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt) & {readonly __brand?: 'file_summary_by_instance_OBJECT_INSTANCE_BEGIN'}
  SUM_NUMBER_OF_BYTES_READ: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_WRITE: (string | number | BigInt)
  SUM_TIMER_MISC: (string | number | BigInt)
  SUM_TIMER_READ: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WRITE: (string | number | BigInt)
}
export default FileSummaryByInstance;

interface FileSummaryByInstance_InsertParameters {
  AVG_TIMER_MISC: (string | number | BigInt)
  AVG_TIMER_READ: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  AVG_TIMER_WRITE: (string | number | BigInt)
  COUNT_MISC: (string | number | BigInt)
  COUNT_READ: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  COUNT_WRITE: (string | number | BigInt)
  EVENT_NAME: string
  FILE_NAME: string
  MAX_TIMER_MISC: (string | number | BigInt)
  MAX_TIMER_READ: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MAX_TIMER_WRITE: (string | number | BigInt)
  MIN_TIMER_MISC: (string | number | BigInt)
  MIN_TIMER_READ: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WRITE: (string | number | BigInt)
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt) & {readonly __brand?: 'file_summary_by_instance_OBJECT_INSTANCE_BEGIN'}
  SUM_NUMBER_OF_BYTES_READ: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_WRITE: (string | number | BigInt)
  SUM_TIMER_MISC: (string | number | BigInt)
  SUM_TIMER_READ: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WRITE: (string | number | BigInt)
}
export type {FileSummaryByInstance_InsertParameters}
