/**
 * express.ts
 *
 * api.goria.com
 * by AS3ICS
 *
 * Zach DeGeorge
 * zach@as3ics.com
 *
 * @format
 * @abstract Initializes the express server
 *
 */

import { APP_PORT, APP_LOGGING } from "./config";

import express from "express";
import cors from "cors";

import { emailsRouter } from "./routes";

import { Server } from "http";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  if (APP_LOGGING) {
    /* tslint:disable-next-line no-console error */
    console.info(Date() + "\t\t" + req.method + " " + req.url);
    if (req.method === "POST" || req.method === "PUT") {
      /* tslint:disable-next-line no-console error */
      console.info(req.body);
    }
  }

  return next();
});

app.get("/", (req, res) => {
  const response = {
    status: "OK",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toLocaleString(),
  };

  res.status(200).send(response);
});

app.use("/email", emailsRouter);

export let server: Server;

export const start = async () => {
  server = await app.listen(APP_PORT, () => {
    /* tslint:disable-next-line no-console error */
    console.info(`Server is listening at http://localhost:${APP_PORT}`);
  });
};
