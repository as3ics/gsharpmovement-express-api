/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: EsV4dxF/wx7oSXIlWyNZH//LbirNCHA+RpLw/Dirn6U4XjMoV+EA210bYIMM4yfd7p3oK4kM7ocyr1r9ihbo7g==
 */

/* eslint-disable */
// tslint:disable

interface RdsHeartbeat2 {
  id: number & {readonly __brand?: 'rds_heartbeat2_id'}
  value: ((string | number | BigInt)) | null
}
export default RdsHeartbeat2;

interface RdsHeartbeat2_InsertParameters {
  id: number & {readonly __brand?: 'rds_heartbeat2_id'}
  value?: ((string | number | BigInt)) | null
}
export type {RdsHeartbeat2_InsertParameters}
