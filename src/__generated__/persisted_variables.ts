/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 2KHAc5zn/BlH2LoVKJ6rXucEs+2R9ps6neL78EdSgW3d20QYQZebyzO9Uqlw2r5fmP2mohb0VnGuqKjtQ9vW0w==
 */

/* eslint-disable */
// tslint:disable

interface PersistedVariables {
  VARIABLE_NAME: string & {readonly __brand?: 'persisted_variables_VARIABLE_NAME'}
  VARIABLE_VALUE: (string) | null
}
export default PersistedVariables;

interface PersistedVariables_InsertParameters {
  VARIABLE_NAME: string & {readonly __brand?: 'persisted_variables_VARIABLE_NAME'}
  VARIABLE_VALUE?: (string) | null
}
export type {PersistedVariables_InsertParameters}
