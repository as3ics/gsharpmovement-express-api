/** @format */

import express, { Request, Response } from "express";
import { emailsController } from "../../controllers";

export const router = express.Router({
  strict: true,
});

router.post("/", (req: Request, res: Response) => {
  emailsController.create(req, res);
});

router.get("/", (req: Request, res: Response) => {
  emailsController.read_all(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  emailsController.read(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
  emailsController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  emailsController.delete(req, res);
});

router.get("/count", (req: Request, res: Response) => {
  emailsController.count(req, res);
});
