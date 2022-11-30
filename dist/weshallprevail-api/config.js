"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = exports.MYSQL_HOST = exports.MONGODB_DATABASE = exports.MONGODB_URL = exports.MAX_FILESIZE_MB = exports.APP_LOGGING = exports.APP_VERSION = exports.APP_PORT = exports.APP_HOSTNAME = exports.APP_NAME = exports.APP_URL = exports.DEBUG_CACHE = exports.PRODUCTION = exports.ENVIRONMENT = exports.DEBUG = exports.NODE_ENV = void 0;
/* tslint:disable-next-line  no-var-requires error*/
require("dotenv/config");
const defined = (t) => t !== undefined && t !== null;
const trueVals = ["true", "1"];
const falseVals = ["false", "0"];
const env = (name) => {
    const raw = process.env[name];
    return raw;
};
const boolEnv = (name, fallback) => {
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
const requireEnv = (name, fallback) => {
    const raw = env(name);
    if (defined(raw) && raw !== "") {
        return raw;
    }
    if (fallback === undefined) {
        throw new Error("Missing required env var: " + name + ".");
    }
    return fallback;
};
const numberEnv = (name, fallback) => {
    const raw = env(name);
    const num = Number(raw);
    if (!isNaN(num)) {
        return num;
    }
    if (fallback === undefined) {
        throw new Error("Received " + raw + " for " + name + " but expected number.");
    }
    return fallback;
};
exports.NODE_ENV = requireEnv("NODE_ENV", "development");
exports.DEBUG = boolEnv("DEBUG", true);
exports.ENVIRONMENT = requireEnv("ENVIRONMENT", "development");
exports.PRODUCTION = boolEnv("PRODUCTION", false);
exports.DEBUG_CACHE = boolEnv("DEBUG_CACHE", true);
exports.APP_URL = requireEnv("APP_URL");
exports.APP_NAME = requireEnv("APP_NAME");
exports.APP_HOSTNAME = requireEnv("APP_HOSTNAME", "127.0.0.1");
exports.APP_PORT = numberEnv("APP_PORT", 3000);
exports.APP_VERSION = requireEnv("APP_VERSION", "0.0.1");
exports.APP_LOGGING = boolEnv("APP_LOGGING", true);
exports.MAX_FILESIZE_MB = numberEnv("MAX_FILESIZE_MB", 5);
exports.MONGODB_URL = requireEnv("MONGODB_URL");
exports.MONGODB_DATABASE = requireEnv("MONGODB_DATABASE");
exports.MYSQL_HOST = requireEnv("MYSQL_HOST");
// export const MYSQL_USERNAME = requireEnv("MYSQL_USERNAME");
// export const MYSQL_PASSWORD = requireEnv("MYSQL_PASSWORD");
// export const MYSQL_PORT = requireEnv("MYSQL_PORT");
// export const MYSQL_DATABASE = requireEnv("MYSQL_DATABASE");
exports.CONFIG = {
    server: {
        port: exports.APP_PORT,
        hostname: exports.APP_HOSTNAME,
        version: exports.APP_VERSION,
        loggingEnabled: exports.APP_LOGGING,
        max_file_size: exports.MAX_FILESIZE_MB * 1024 * 1024,
    },
    database: {
        url: exports.MONGODB_URL,
        salt_work_factor: 10,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7QUFFSCxvREFBb0Q7QUFDcEQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpCLE1BQU0sT0FBTyxHQUFHLENBQUksQ0FBSSxFQUFxQyxFQUFFLENBQzdELENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztBQUVoQyxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixNQUFNLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVqQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQVksRUFBc0IsRUFBRTtJQUMvQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFZLEVBQUUsUUFBa0IsRUFBVyxFQUFFO0lBQzVELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLEVBQUU7UUFDakQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQyxFQUFFO1FBQ2xELE9B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