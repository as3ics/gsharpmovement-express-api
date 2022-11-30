/**
 * config.ts
 *
 * api.goria.com
 * by AS3ICS
 *
 * Zach DeGeorge
 * zach@as3ics.com
 *
 * @format
 * @abstract Initialize config values from environment file
 *
 */

/* tslint:disable-next-line  no-var-requires error*/
require("dotenv/config");

const defined = <T>(t: T): t is Exclude<T, undefined | null> =>
  t !== undefined && t !== null;

const trueVals = ["true", "1"];
const falseVals = ["false", "0"];

const env = (name: string): string | undefined => {
  const raw = process.env[name];

  return raw;
};

const boolEnv = (name: string, fallback?: boolean): boolean => {
  const raw = env(name);

  if (!defined(raw)) {
    return false;
  }

  const normalizedEnv = raw.toLowerCase();

  if (trueVals.some((val) => val === normalizedEnv)) {
    return true;
  }

  if (falseVals.some((val) => val === normalizedEnv)) {
    return false;
  }

  if (fallback !== undefined) {
    return fallback;
  }

  throw new Error("Expected boolean value for env var: " + name + ".");
};

const requireEnv = (name: string, fallback?: string): string => {
  const raw = env(name);

  if (defined(raw) && raw !== "") {
    return raw;
  }

  if (fallback === undefined) {
    throw new Error("Missing required env var: " + name + ".");
  }

  return fallback;
};

const numberEnv = (name: string, fallback?: number): number => {
  const raw = env(name);
  const num = Number(raw);

  if (!isNaN(num)) {
    return num;
  }

  if (fallback === undefined) {
    throw new Error(
      "Received " + raw + " for " + name + " but expected number."
    );
  }

  return fallback;
};

export const NODE_ENV = requireEnv("NODE_ENV", "development");
export const DEBUG = boolEnv("DEBUG", true);
export const ENVIRONMENT = requireEnv("ENVIRONMENT", "development");
export const PRODUCTION = boolEnv("PRODUCTION", false);
export const DEBUG_CACHE = boolEnv("DEBUG_CACHE", true);

export const APP_URL = requireEnv("APP_URL");
export const APP_NAME = requireEnv("APP_NAME");
export const APP_HOSTNAME = requireEnv("APP_HOSTNAME", "127.0.0.1");
export const APP_PORT = numberEnv("APP_PORT", 3000);
export const APP_VERSION = requireEnv("APP_VERSION", "0.0.1");
export const APP_LOGGING = boolEnv("APP_LOGGING", true);
export const MAX_FILESIZE_MB = numberEnv("MAX_FILESIZE_MB", 5);

export const MONGODB_URL = requireEnv("MONGODB_URL");
export const MONGODB_DATABASE = requireEnv("MONGODB_DATABASE");

export const MYSQL_HOST = requireEnv("MYSQL_HOST");
// export const MYSQL_USERNAME = requireEnv("MYSQL_USERNAME");
// export const MYSQL_PASSWORD = requireEnv("MYSQL_PASSWORD");
// export const MYSQL_PORT = requireEnv("MYSQL_PORT");
// export const MYSQL_DATABASE = requireEnv("MYSQL_DATABASE");

export const CONFIG = {
  server: {
    port: APP_PORT,
    hostname: APP_HOSTNAME,
    version: APP_VERSION,
    loggingEnabled: APP_LOGGING,
    max_file_size: MAX_FILESIZE_MB * 1024 * 1024,
  },
  database: {
    url: MONGODB_URL,
    salt_work_factor: 10,
  },
};
