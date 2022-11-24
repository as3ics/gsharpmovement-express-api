/** @format */

import express, { Request, Response } from "express";
import { downloadsController } from "../../controllers";

export const router = express.Router({
    strict: true,
});

router.post("/", (req: Request, res: Response) => {
    downloadsController.create(req, res);
});

router.get("/", (req: Request, res: Response) => {
    downloadsController.read_all(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
    downloadsController.read(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
    downloadsController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
    downloadsController.delete(req, res);
});

router.get("/count", (req: Request, res: Response) => {
    downloadsController.count(req, res);
});
