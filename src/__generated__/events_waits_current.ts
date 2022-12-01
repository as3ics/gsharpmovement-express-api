/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 892d3PIGOoKVTKTID3kK1VAz/jw5+Gerc2xCr0VQ4V97rOow9YBJtFM1AmfrkJmQ3oM/ORk947E5pAaYwdruGA==
 */

/* eslint-disable */
// tslint:disable

interface EventsWaitsCurrent {
  END_EVENT_ID: ((string | number | BigInt)) | null
  EVENT_ID: (string | number | BigInt) & {readonly __brand?: 'events_waits_current_EVENT_ID'}
  EVENT_NAME: string
  FLAGS: (number) | null
  INDEX_NAME: (string) | null
  NESTING_EVENT_ID: ((string | number | BigInt)) | null
  NESTING_EVENT_TYPE: (("TRANSACTION" | "STATEMENT" | "STAGE" | "WAIT")) | null
  NUMBER_OF_BYTES: ((string | number | BigInt)) | null
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt)
  OBJECT_NAME: (string) | null
  OBJECT_SCHEMA: (string) | null
  OBJECT_TYPE: (string) | null
  OPERATION: string
  SOURCE: (string) | null
  SPINS: (number) | null
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_waits_current_THREAD_ID'}
  TIMER_END: ((string | number | BigInt)) | null
  TIMER_START: ((string | number | BigInt)) | null
  TIMER_WAIT: ((string | number | BigInt)) | null
}
export default EventsWaitsCurrent;

interface EventsWaitsCurrent_InsertParameters {
  END_EVENT_ID?: ((string | number | BigInt)) | null
  EVENT_ID: (string | number | BigInt) & {readonly __brand?: 'events_waits_current_EVENT_ID'}
  EVENT_NAME: string
  FLAGS?: (number) | null
  INDEX_NAME?: (string) | null
  NESTING_EVENT_ID?: ((string | number | BigInt)) | null
  NESTING_EVENT_TYPE?: (("TRANSACTION" | "STATEMENT" | "STAGE" | "WAIT")) | null
  NUMBER_OF_BYTES?: ((string | number | BigInt)) | null
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt)
  OBJECT_NAME?: (string) | null
  OBJECT_SCHEMA?: (string) | null
  OBJECT_TYPE?: (string) | null
  OPERATION: string
  SOURCE?: (string) | null
  SPINS?: (number) | null
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_waits_current_THREAD_ID'}
  TIMER_END?: ((string | number | BigInt)) | null
  TIMER_START?: ((string | number | BigInt)) | null
  TIMER_WAIT?: ((string | number | BigInt)) | null
}
export type {EventsWaitsCurrent_InsertParameters}