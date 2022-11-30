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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.server = exports.app = void 0;
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
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
        timestamp: new Date().toLocaleString(),
    };
    res.status(200).send(response);
});
exports.app.use("/email", routes_1.emailsRouter);
const start = async () => {
    exports.server = await exports.app.listen(config_1.APP_PORT, () => {
        /* tslint:disable-next-line no-console error */
        console.info(`Server is listening at http://localhost:${config_1.APP_PORT}`);
    });
};
exports.start = start;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7Ozs7QUFFSCxxQ0FBaUQ7QUFFakQsc0RBQThCO0FBRTlCLHFDQUF3QztBQUkzQixRQUFBLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUU3QixXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVoRCxXQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUN6QixJQUFJLG9CQUFXLEVBQUU7UUFDZiwrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDakQsK0NBQStDO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEIsTUFBTSxRQUFRLEdBQUc7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7UUFDakMsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO0tBQ3ZDLENBQUM7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVILFdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHFCQUFZLENBQUMsQ0FBQztBQUl6QixNQUFNLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRTtJQUM5QixjQUFNLEdBQUcsTUFBTSxXQUFHLENBQUMsTUFBTSxDQUFDLGlCQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLCtDQUErQztRQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxpQkFBUSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUxXLFFBQUEsS0FBSyxTQUtoQiJ9