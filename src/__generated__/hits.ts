/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: uyvTswVeCfUA6nBsfg5zmvdPeQBlq6Y7nOujiYmgFUx0MUcOgNaw4vpmjcXC0pBi2zQQ+BR1YXm2NqNadJqlqg==
 */

/* eslint-disable */
// tslint:disable

interface Hits {
  city: (string) | null
  city_geoname_id: (number) | null
  connection: (string) | null
  continent: (string) | null
  continent_code: (string) | null
  continent_geoname_id: (number) | null
  country: (string) | null
  country_code: (string) | null
  country_geoname_id: (number) | null
  country_is_eu: ((boolean | number)) | null
  /**
   * @default CURRENT_TIMESTAMP
   */
  created_at: ((string | Date)) | null
  currency: (string) | null
  flag: (string) | null
  id: number & {readonly __brand?: 'hits_id'}
  ip_address: (string) | null
  latitude: (unknown) | null
  longitude: (unknown) | null
  postal_code: (string) | null
  region: (string) | null
  region_geoname_id: (number) | null
  region_iso_code: (string) | null
  security: (string) | null
  timezone: (string) | null
}
export default Hits;

interface Hits_InsertParameters {
  city?: (string) | null
  city_geoname_id?: (number) | null
  connection?: (string) | null
  continent?: (string) | null
  continent_code?: (string) | null
  continent_geoname_id?: (number) | null
  country?: (string) | null
  country_code?: (string) | null
  country_geoname_id?: (number) | null
  country_is_eu?: ((boolean | number)) | null
  /**
   * @default CURRENT_TIMESTAMP
   */
  created_at?: ((string | Date)) | null
  currency?: (string) | null
  flag?: (string) | null
  id: number & {readonly __brand?: 'hits_id'}
  ip_address?: (string) | null
  latitude?: (unknown) | null
  longitude?: (unknown) | null
  postal_code?: (string) | null
  region?: (string) | null
  region_geoname_id?: (number) | null
  region_iso_code?: (string) | null
  security?: (string) | null
  timezone?: (string) | null
}
export type {Hits_InsertParameters}
