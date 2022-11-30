/** @format */

import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

import { BaseController } from "../_BaseController";
import db, { emails } from "../../database";

export class EmailsController implements BaseController {
  public async create(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    const validation = [];

    console.log(req.body);

    if (!req?.body?.email) validation.push("req.body.email");

    if (validation.length !== 0)
      return res
        .status(400)
        .send({ error: { validation: validation.toLocaleString() } });

    try {
      await emails(db).insert({
        email: req.body.email,
      });
      let email = await emails(db).findOne({ email: req.body.email });
      return res.status(201).send(email);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  public async read(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    const validation = [];

    if (!req?.params?.id) validation.push("req.params.id");

    if (validation.length !== 0)
      return res
        .status(400)
        .send({ error: { validation: validation.toLocaleString() } });

    try {
      const email = await emails(db).findOne({ id: req.params.id });
      return email
        ? res.status(200).send(email)
        : res.status(404).send({ error: "not found." });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  public async read_all(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    try {
      const mails = await emails(db).find({});
      return res.status(200).send(mails);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  public async update(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    const validation = [];

    if (!req?.params?.id) validation.push("req.params.id");

    if (validation.length !== 0)
      return res
        .status(400)
        .send({ error: { validation: validation.toLocaleString() } });

    try {
      let email = await emails(db).findOne({ id: req.params.id });
      for (const record in req.body) email[record] = req.body[record];
      await emails(db).update({ id: req.params.id }, { ...email });
      return res.status(200).send(email);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  public async delete(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    const validation = [];

    if (!req?.params?.id) validation.push("req.params.id");

    if (validation.length !== 0)
      return res
        .status(400)
        .send({ error: { validation: validation.toLocaleString() } });

    try {
      const response = await emails(db).delete({
        id: req.params.id,
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
    try {
      const mails = await emails(db).find({}).all;
      return res.status(200).send({ emails: mails.length });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export const emailsController = new EmailsController();
