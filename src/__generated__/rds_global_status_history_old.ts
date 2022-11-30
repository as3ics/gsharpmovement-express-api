/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: rqbtP4zMtvDs4DTiB4J7WxVAy9xsIAXtW5yD8no8iZeuvMG1Puy99wWOtBO2aWOyX33+NZOH8OLVchriwoyKog==
 */

/* eslint-disable */
// tslint:disable

interface RdsGlobalStatusHistoryOld {
  /**
   * @default CURRENT_TIMESTAMP
   */
  collection_end: (string | Date) & {readonly __brand?: 'rds_global_status_history_old_collection_end'}
  collection_start: ((string | Date)) | null
  variable_delta: number
  variable_name: string & {readonly __brand?: 'rds_global_status_history_old_variable_name'}
  variable_value: string
}
export default RdsGlobalStatusHistoryOld;

interface RdsGlobalStatusHistoryOld_InsertParameters {
  /**
   * @default CURRENT_TIMESTAMP
   */
  collection_end?: (string | Date) & {readonly __brand?: 'rds_global_status_history_old_collection_end'}
  collection_start?: ((string | Date)) | null
  variable_delta: number
  variable_name: string & {readonly __brand?: 'rds_global_status_history_old_variable_name'}
  variable_value: string
}
export type {RdsGlobalStatusHistoryOld_InsertParameters}
