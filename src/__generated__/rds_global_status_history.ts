/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 1aihO4jqvcRPVI1MZbhK10ItUHiZoKYOsC+7x9CwoIv3DrfAWoggr6rytb4ADNcCap5IyosIjcWjkjtk+MVrtw==
 */

/* eslint-disable */
// tslint:disable

interface RdsGlobalStatusHistory {
  /**
   * @default CURRENT_TIMESTAMP
   */
  collection_end: (string | Date) & {readonly __brand?: 'rds_global_status_history_collection_end'}
  collection_start: ((string | Date)) | null
  variable_delta: number
  variable_name: string & {readonly __brand?: 'rds_global_status_history_variable_name'}
  variable_value: string
}
export default RdsGlobalStatusHistory;

interface RdsGlobalStatusHistory_InsertParameters {
  /**
   * @default CURRENT_TIMESTAMP
   */
  collection_end?: (string | Date) & {readonly __brand?: 'rds_global_status_history_collection_end'}
  collection_start?: ((string | Date)) | null
  variable_delta: number
  variable_name: string & {readonly __brand?: 'rds_global_status_history_variable_name'}
  variable_value: string
}
export type {RdsGlobalStatusHistory_InsertParameters}
