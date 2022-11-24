/** @format */

// External dependencies

import mongoose, { Schema, model } from "mongoose";
import mongooseDeepPopulate from "mongoose-deep-populate";

// 1. Create an interface representing a document in MongoDB.
export interface IDownload {
  _id: Schema.Types.ObjectId;
  city: string,
  city_geoname_id: number,
  connection: Object | string,
  continent: string,
  continent_code: string,
  continent_geoname_id: number,
  country: string,
  country_code: string,
  country_geoname_id: string,
  country_is_eu: boolean,
  currency: Object | string,
  flag: Object | string,
  ip_address: string,
  latitude: number,
  longitude: number,
  postal_code: string,
  region: string,
  region_geoname_id: number,
  region_iso_code: string,
  security: Object | string,
  timezone: Object | string
  _createdAt: Date;
  _updatedAt: Date;
  save(): IDownload | PromiseLike<IDownload>;
}

// 2. Create a Schema corresponding to the document interface.
const DownloadSchema = new Schema(
  {
    city: { type: String },
    city_geoname_id: { type: Number },
    connection: { type: String },
    continent: { type: String },
    continent_code: { type: String },
    continent_geoname_id: { type: Number },
    country: { type: String },
    country_code: { type: String },
    country_geoname_id: { type: String },
    country_is_eu: { type: Boolean },
    currency: { type: String },
    flag: { type: String },
    ip_address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    postal_code: { type: String },
    region: { type: String },
    region_geoname_id: { type: Number },
    region_iso_code: { type: String },
    security: { type: String },
    timezone: { type: String }
  },
  {
    versionKey: false,
    timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" },
  }
);

DownloadSchema.plugin(mongooseDeepPopulate(mongoose), {});

// 3. Create the Model.
export const Download = model<IDownload>("Download", DownloadSchema);
