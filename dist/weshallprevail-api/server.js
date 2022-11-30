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
exports.app.use("/email", routes_1.emailsRouter);
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
const start = async () => {
    exports.server = await exports.app.listen(config_1.APP_PORT, () => {
        /* tslint:disable-next-line no-console error */
        console.info(`Server is listening at http://localhost:${config_1.APP_PORT}`);
    });
};
exports.start = start;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7Ozs7QUFFSCxxQ0FBOEQ7QUFFOUQsc0RBQThCO0FBRTlCLHFDQUF3QztBQUkzQixRQUFBLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUU3QixXQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxxQkFBWSxDQUFDLENBQUM7QUFFaEMsV0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsV0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFaEQsV0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDekIsSUFBSSxvQkFBVyxFQUFFO1FBQ2YsK0NBQStDO1FBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ2pELCtDQUErQztZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtLQUNGO0lBRUQsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQztBQUVILFdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hCLE1BQU0sUUFBUSxHQUFHO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRO1FBQ2pDLE9BQU8sRUFBRSxvQkFBVztRQUNwQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUU7S0FDdkMsQ0FBQztJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBSUksTUFBTSxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDOUIsY0FBTSxHQUFHLE1BQU0sV0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBUSxFQUFFLEdBQUcsRUFBRTtRQUN2QywrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsaUJBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFMVyxRQUFBLEtBQUssU0FLaEIifQ==