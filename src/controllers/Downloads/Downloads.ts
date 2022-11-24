/** @format */

import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

import { BaseController } from "../_BaseController";
import { Download } from '../../models/Download'
import { IDownload } from "models/Download/Download";

export class DownloadsController implements BaseController {

    public async create(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ) {
        const validation = [];

        if (validation.length !== 0)
            return res
                .status(400)
                .send({ error: { validation: validation.toLocaleString() } });

        try {
            let download = await Download.create(req.body);
            download.save();
            download = await Download.findById(download._id);

            return res.status(201).send(download);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    public async read(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ) {
        const id = req?.params?.id;

        if (!id) return res.status(400).send({ error: "id not found." });

        try {
            const download = await Download.findById(id);
            return download
                ? res.status(200).send(download)
                : res.status(404).send({ error: "resource not found." });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    public async read_all(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ) {
        const query = {
            _id: { $exists: true }
        }

        try {
            const downloads = await Download.find(query);
            return res.status(200).send(downloads);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    public async update(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ) {
        const id = req.params?.id;

        const validation = [];

        if (validation.length !== 0)
            return res
                .status(400)
                .send({ error: { validation: validation.toLocaleString() } });

        try {
            let download = await Download.findById(id);
            for (const record in req.body) download[record] = req.body[record];
            download = await download.save();
            return res.status(200).send(download);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    public async delete(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ) {
        const id = req.params?.id;

        try {
            const response = await Download.deleteOne({
                _id: id,
            });
            return res.status(200).send(response);
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async count(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ) {
        const query = {
            _id: { $exists: true }
        }

        try {
            const downloads = await Download.find(query);
            return res.status(200).send({ "downloads": downloads.length });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

export const downloadsController = new DownloadsController();
