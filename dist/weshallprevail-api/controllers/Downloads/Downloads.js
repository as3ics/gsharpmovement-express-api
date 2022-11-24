"use strict";
/** @format */
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
exports.downloadsController = exports.DownloadsController = void 0;
const Download_1 = require("../../models/Download");
class DownloadsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = [];
            if (validation.length !== 0)
                return res
                    .status(400)
                    .send({ error: { validation: validation.toLocaleString() } });
            try {
                let download = yield Download_1.Download.create({
                    ip: req.ipAddress
                });
                download.save();
                download = yield Download_1.Download.findById(download._id);
                return res.status(201).send(download);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    read(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            if (!id)
                return res.status(400).send({ error: "id not found." });
            try {
                const download = yield Download_1.Download.findById(id);
                return download
                    ? res.status(200).send(download)
                    : res.status(404).send({ error: "resource not found." });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    read_all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                _id: { $exists: true }
            };
            try {
                const downloads = yield Download_1.Download.find(query);
                return res.status(200).send(downloads);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    update(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const validation = [];
            if (validation.length !== 0)
                return res
                    .status(400)
                    .send({ error: { validation: validation.toLocaleString() } });
            try {
                let download = yield Download_1.Download.findById(id);
                for (const record in req.body)
                    download[record] = req.body[record];
                download = yield download.save();
                return res.status(200).send(download);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    delete(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const response = yield Download_1.Download.deleteOne({
                    _id: id,
                });
                return res.status(200).send(response);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    count(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                _id: { $exists: true }
            };
            try {
                const downloads = yield Download_1.Download.find(query);
                return res.status(200).send({ "downloads": downloads.length });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
}
exports.DownloadsController = DownloadsController;
exports.downloadsController = new DownloadsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG93bmxvYWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL0Rvd25sb2Fkcy9Eb3dubG9hZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGNBQWM7Ozs7Ozs7Ozs7OztBQU9kLG9EQUFnRDtBQUdoRCxNQUFhLG1CQUFtQjtJQUVmLE1BQU0sQ0FDZixHQUF1RSxFQUN2RSxHQUF1Qzs7WUFFdkMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXRCLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN2QixPQUFPLEdBQUc7cUJBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLElBQUk7Z0JBQ0EsSUFBSSxRQUFRLEdBQUcsTUFBTSxtQkFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDakMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxTQUFTO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixRQUFRLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQztLQUFBO0lBQ1ksSUFBSSxDQUNiLEdBQXVFLEVBQ3ZFLEdBQXVDOzs7WUFFdkMsTUFBTSxFQUFFLEdBQUcsTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxH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