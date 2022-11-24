/** @format */

// External dependencies

import mongoose, { Schema, model } from "mongoose";
import mongooseDeepPopulate from "mongoose-deep-populate";

// 1. Create an interface representing a document in MongoDB.
export interface IDownload {
  _id: Schema.Types.ObjectId;
  ip: string;
  _createdAt: Date;
  _updatedAt: Date;
  save(): IDownload | PromiseLike<IDownload>;
}

// 2. Create a Schema corresponding to the document interface.
const DownloadSchema = new Schema(
  {
    ip: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" },
  }
);

DownloadSchema.plugin(mongooseDeepPopulate(mongoose), {});

// 3. Create the Model.
export const Download = model<IDownload>("Download", DownloadSchema);
