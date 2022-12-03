/** @format */

import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { sql } from "@databases/mysql";

import { BaseController } from "../_BaseController";
import db, { hits } from "../../database";

export class HitsController implements BaseController {
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
      await hits(db).insert({
        ...req.body,
      });
      return res.status(201).send();
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
      const hit = await hits(db).findOne({ id: req.params.id });
      return hit
        ? res.status(200).send(hit)
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
      const hits = await db.query(sql`SELECT * FROM hits;`);
      return res.status(200).send(hits);
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
      let hit = await hits(db).findOne({ id: req.params.id });
      for (const record in req.body) hit[record] = req.body[record];
      await hits(db).update({ id: req.params.id }, { ...hit });
      return res.status(200).send(hit);
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
      const response = await hits(db).delete({
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
      const hits = await db.query(sql`SELECT * FROM hits;`);
      return res.status(200).send({ hits: hits.length });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export const hitsController = new HitsController();
