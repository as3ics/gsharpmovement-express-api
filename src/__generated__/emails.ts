/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: Vz1UYRB9ZtR/ESYy8GIg42lOWfJ0GW4P/vXM6t8P/2YTXZEF88WHlw5e5uHbpVOX38MniMrV+1qkqcxy7Nf3dw==
 */

/* eslint-disable */
// tslint:disable

interface Emails {
  /**
   * @default CURRENT_TIMESTAMP
   */
  created_at: ((string | Date)) | null
  email: string
  id: number & {readonly __brand?: 'emails_id'}
}
export default Emails;

interface Emails_InsertParameters {
  /**
   * @default CURRENT_TIMESTAMP
   */
  created_at?: ((string | Date)) | null
  email: string
  id: number & {readonly __brand?: 'emails_id'}
}
export type {Emails_InsertParameters}
