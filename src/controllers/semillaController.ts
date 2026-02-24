import type { Request, Response } from "express";
import Semilla from "../models/Semilla";

export const getAllSemillas = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = search ? {
            $or: [
                { nombreCientifico: { $regex: search, $options: "i" } },
                { variedad: { $regex: search, $options: "i" } }
            ]
        } : {};
        const semillas = await Semilla.find(filtro);
        res.render('semillas/semillas', { semillas, search });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const getSemillaById = async (req: Request, res: Response) => {
    try {
        const semilla = await Semilla.findById(req.params.id);
        if (!semilla) return res.status(404).send("No encontrado");
        res.render('semillas/edit', { semilla });
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

export const updateSemilla = async (req: Request, res: Response) => {
    try {
        await Semilla.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/semillas');
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const deleteSemilla = async (req: Request, res: Response) => {
    try {
        await Semilla.findByIdAndDelete(req.params.id);
        res.redirect('/semillas');
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};