"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
exports.router = express_1.default.Router({
    strict: true,
});
exports.router.post("/", (req, res) => {
    controllers_1.downloadsController.create(req, res);
});
exports.router.get("/", (req, res) => {
    controllers_1.downloadsController.read_all(req, res);
});
exports.router.get("/:id", (req, res) => {
    controllers_1.downloadsController.read(req, res);
});
exports.router.put("/:id", (req, res) => {
    controllers_1.downloadsController.update(req, res);
});
exports.router.delete("/:id", (req, res) => {
    controllers_1.downloadsController.delete(req, res);
});
exports.router.get("/count", (req, res) => {
    controllers_1.downloadsController.count(req, res);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG93bmxvYWQucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9Eb3dubG9hZHMvRG93bmxvYWQucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxjQUFjOzs7Ozs7QUFFZCxzREFBcUQ7QUFDckQsbURBQXdEO0FBRTNDLFFBQUEsTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pDLE1BQU0sRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDN0MsaUNBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVDLGlDQUFtQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvQyxpQ0FBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDL0MsaUNBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2xELGlDQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNqRCxpQ0FBbUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDIn0=