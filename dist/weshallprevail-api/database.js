"use strict";
/**
 * databsase.ts
 *
 * api.goria.com
 * by AS3ICS
 *
 * Zach DeGeorge
 * zach@as3ics.com
 *
 * @format
 * @abstract Initializes the mongoose mongodb databse connection
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = exports.emails = exports.sql = void 0;
const mongoose_1 = require("mongoose");
const mysql_1 = __importStar(require("@databases/mysql"));
Object.defineProperty(exports, "sql", { enumerable: true, get: function () { return mysql_1.sql; } });
const mysql_typed_1 = __importDefault(require("@databases/mysql-typed"));
const __generated__1 = require("./__generated__");
const config_1 = require("./config");
const db = (0, mysql_1.default)(config_1.MYSQL_HOST);
exports.default = db;
// You can list whatever tables you actually have here:
const { emails } = (0, mysql_typed_1.default)({
    serializeValue: __generated__1.serializeValue,
});
exports.emails = emails;
/**
 *
 * @abstract Connects to the mongodb database or cluster using mongoose based on the MONGODB_URL environment variable
 *
 * @returns Promise<boolean>
 *
 */
const connectMongoDB = async () => {
    try {
        await (0, mongoose_1.connect)(config_1.MONGODB_URL);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.connectMongoDB = connectMongoDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCx1Q0FBdUQ7QUFFdkQsMERBQTZEO0FBS3BELG9GQUxzQixXQUFHLE9BS3RCO0FBSloseUVBQTRDO0FBQzVDLGtEQUFpRTtBQUNqRSxxQ0FBbUQ7QUFJbkQsTUFBTSxFQUFFLEdBQUcsSUFBQSxlQUFvQixFQUFDLG1CQUFVLENBQUMsQ0FBQztBQUM1QyxrQkFBZSxFQUFFLENBQUM7QUFFbEIsdURBQXVEO0FBQ3ZELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFBLHFCQUFNLEVBQWlCO0lBQ3hDLGNBQWMsRUFBZCw2QkFBYztDQUNmLENBQUMsQ0FBQztBQUNNLHdCQUFNO0FBRWY7Ozs7OztHQU1HO0FBQ0ksTUFBTSxjQUFjLEdBQUcsS0FBSyxJQUFzQixFQUFFO0lBQ3pELElBQUk7UUFDRixNQUFNLElBQUEsa0JBQWdCLEVBQUMsb0JBQVcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDLENBQUM7QUFQVyxRQUFBLGNBQWMsa0JBT3pCIn0=