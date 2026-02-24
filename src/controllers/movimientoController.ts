import type { Request, Response } from "express";
import Movimiento from "../models/Movimiento";

export const getAllMovimientos = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = search ? { identificadorSaco: { $regex: search, $options: "i" } } : {};
        
        const movimientos = await Movimiento.find(filtro).sort({ fecha: -1 });
        res.render('movimientos/movimientos', { movimientos, search });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const getMovimientoById = async (req: Request, res: Response) => {
    try {
        const movimiento = await Movimiento.findById(req.params.id);
        if (!movimiento) return res.status(404).send("Movimiento no encontrado");
        res.render('movimientos/edit', { movimiento });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const createMovimiento = async (req: Request, res: Response) => {
    try {
        await Movimiento.create(req.body);
        res.redirect('/movimientos');
    } catch (error: any) {
        res.status(400).send("Error en el registro de movimiento");
    }
};

export const updateMovimiento = async (req: Request, res: Response) => {
    try {
        await Movimiento.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/movimientos');
    } catch (error: any) {
        res.status(400).send("Error al actualizar");
    }
};

export const deleteMovimiento = async (req: Request, res: Response) => {
    try {
        await Movimiento.findByIdAndDelete(req.params.id);
        res.redirect('/movimientos');
    } catch (error: any) {
        res.status(500).send("Error al eliminar");
    }
};