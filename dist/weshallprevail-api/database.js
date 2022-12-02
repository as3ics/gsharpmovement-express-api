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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emails = void 0;
const mysql_1 = __importDefault(require("@databases/mysql"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7O0FBRUgsNkRBQTZEO0FBQzdELHlFQUE0QztBQUM1QyxrREFBaUU7QUFDakUscUNBQXNDO0FBRXRDLE1BQU0sRUFBRSxHQUFHLElBQUEsZUFBb0IsRUFBQyxtQkFBVSxDQUFDLENBQUM7QUFDNUMsa0JBQWUsRUFBRSxDQUFDO0FBRWxCLHVEQUF1RDtBQUN2RCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBQSxxQkFBTSxFQUFpQjtJQUN4QyxjQUFjLEVBQWQsNkJBQWM7Q0FDZixDQUFDLENBQUM7QUFDTSx3QkFBTSJ9