/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 5lkI1az92leyc2F8r9CQdcE5yth583iXpCO9Ofs+lQsT/zUVXTeSoIm3fbH4kbQ5de+QVv78UR9+PGvXN1o9VQ==
 */

/* eslint-disable */
// tslint:disable

interface EventsStatementsHistogramByDigest {
  BUCKET_NUMBER: number
  BUCKET_QUANTILE: number
  BUCKET_TIMER_HIGH: (string | number | BigInt)
  BUCKET_TIMER_LOW: (string | number | BigInt)
  COUNT_BUCKET: (string | number | BigInt)
  COUNT_BUCKET_AND_LOWER: (string | number | BigInt)
  DIGEST: (string) | null
  SCHEMA_NAME: (string) | null
}
export default EventsStatementsHistogramByDigest;

interface EventsStatementsHistogramByDigest_InsertParameters {
  BUCKET_NUMBER: number
  BUCKET_QUANTILE: number
  BUCKET_TIMER_HIGH: (string | number | BigInt)
  BUCKET_TIMER_LOW: (string | number | BigInt)
  COUNT_BUCKET: (string | number | BigInt)
  COUNT_BUCKET_AND_LOWER: (string | number | BigInt)
  DIGEST?: (string) | null
  SCHEMA_NAME?: (string) | null
}
export type {EventsStatementsHistogramByDigest_InsertParameters}
