/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 4vv5d6E+p9sB2K7bKyPn7VloP7I6mUqF5oRxYGXL2YCa57LHPzUL3vjlsTw40Agp4etL5QRXYQwPH7Gv8F6W6w==
 */

/* eslint-disable */
// tslint:disable

interface RdsConfiguration {
  description: string
  name: string & {readonly __brand?: 'rds_configuration_name'}
  value: (string) | null
}
export default RdsConfiguration;

interface RdsConfiguration_InsertParameters {
  description: string
  name: string & {readonly __brand?: 'rds_configuration_name'}
  value?: (string) | null
}
export type {RdsConfiguration_InsertParameters}
