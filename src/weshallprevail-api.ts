/** @format */
import * as dotenv from "dotenv";
dotenv.config();

import { start } from "./server";

async function go() {
  start();
}

go();
