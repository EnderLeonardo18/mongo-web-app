import type { Request, Response } from "express";
import Semilla from "../models/Semilla";

export const getAllSemillas = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = {};
        if (search) {
            filtro = {
                $or: [
                    { nombreCientifico: { $regex: search, $options: "i" } },
                    { variedad: { $regex: search, $options: "i" } }
                ]
            };
        }
        const semillas = await Semilla.find(filtro);
        res.render('semillas/semillas', { semillas, search });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const createSemilla = async (req: Request, res: Response) => {
    try {
        await Semilla.create(req.body);
        res.redirect('/semillas');
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};