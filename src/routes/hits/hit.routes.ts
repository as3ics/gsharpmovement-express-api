/** @format */

import express, { Request, Response } from "express";
import { hitsController } from "../../controllers";

export const router = express.Router({
  strict: true,
});

router.post("/", (req: Request, res: Response) => {
  hitsController.create(req, res);
});

router.get("/", (req: Request, res: Response) => {
  hitsController.read_all(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  hitsController.read(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
  hitsController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  hitsController.delete(req, res);
});

router.get("/count", (req: Request, res: Response) => {
  hitsController.count(req, res);
});
