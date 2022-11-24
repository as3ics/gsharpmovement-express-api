"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const config_1 = require("./config");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((req, res, next) => {
    if (config_1.APP_LOGGING) {
        /* tslint:disable-next-line no-console error */
        console.info(Date() + "\t\t" + req.method + " " + req.url);
        if (req.method === "POST" || req.method === "PUT") {
            /* tslint:disable-next-line no-console error */
            console.info(req.body);
        }
    }
    return next();
});
exports.app.get("/", (req, res) => {
    const response = {
        status: "OK",
        environment: process.env.NODE_ENV,
        version: config_1.APP_VERSION,
        timestamp: new Date().toLocaleString(),
    };
    res.status(200).send(response);
});
exports.app.use("/downloads", routes_1.downloadsRouter);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.server = yield exports.app.listen(config_1.APP_PORT, () => {
        /* tslint:disable-next-line no-console error */
        console.info(`Server is listening at http://localhost:${config_1.APP_PORT}`);
    });
});
exports.start = start;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7Ozs7Ozs7Ozs7Ozs7QUFFSCxzREFBOEI7QUFFOUIscUNBRWtCO0FBRWxCLHFDQUE4RDtBQUdqRCxRQUFBLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUU3QixXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVoRCxXQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUN2QixJQUFJLG9CQUFXLEVBQUU7UUFDYiwrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDL0MsK0NBQStDO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0tBQ0o7SUFFRCxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxRQUFRLEdBQUc7UUFDYixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7UUFDakMsT0FBTyxFQUFFLG9CQUFXO1FBQ3BCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtLQUN6QyxDQUFDO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFHSCxXQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSx3QkFBZSxDQUFDLENBQUM7QUFJaEMsTUFBTSxLQUFLLEdBQUcsR0FBUyxFQUFFO0lBQzVCLGNBQU0sR0FBRyxNQUFNLFdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQVEsRUFBRSxHQUFHLEVBQUU7UUFDckMsK0NBQStDO1FBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLGlCQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUM7QUFMVyxRQUFBLEtBQUssU0FLaEIifQ==