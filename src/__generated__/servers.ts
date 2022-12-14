/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: hVyie23NdnRSRmcI5bbd+DtWDWkVRRLKrCASnbfsb2sVtOjUEIk6rDvSUqKWVmSN0/6k0xLKTMq0gQinctQdmg==
 */

/* eslint-disable */
// tslint:disable

/**
 * MySQL Foreign Servers table
 */
interface Servers {
  Db: string
  Host: string
  Owner: string
  Password: string
  /**
   * @default 0
   */
  Port: number
  Server_name: string & {readonly __brand?: 'servers_Server_name'}
  Socket: string
  Username: string
  Wrapper: string
}
export default Servers;

/**
 * MySQL Foreign Servers table
 */
interface Servers_InsertParameters {
  Db?: string
  Host?: string
  Owner?: string
  Password?: string
  /**
   * @default 0
   */
  Port?: number
  Server_name?: string & {readonly __brand?: 'servers_Server_name'}
  Socket?: string
  Username?: string
  Wrapper?: string
}
export type {Servers_InsertParameters}
