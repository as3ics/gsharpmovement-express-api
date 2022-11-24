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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
/**
 *
 * @abstract Connects to the mongodb database or cluster using mongoose based on the MONGODB_URL environment variable
 *
 * @returns Promise<boolean>
 *
 */
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(config_1.MONGODB_URL);
        return true;
    }
    catch (error) {
        return false;
    }
});
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7Ozs7Ozs7O0FBRUgsdUNBQXVEO0FBRXZELHFDQUF1QztBQUV2Qzs7Ozs7O0dBTUc7QUFDSSxNQUFNLE9BQU8sR0FBRyxHQUEyQixFQUFFO0lBQ2hELElBQUk7UUFDQSxNQUFNLElBQUEsa0JBQWdCLEVBQUMsb0JBQVcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQyxDQUFBLENBQUM7QUFQVyxRQUFBLE9BQU8sV0FPbEIifQ==