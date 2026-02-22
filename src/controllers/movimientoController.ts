import type { Request, Response } from "express";
import Movimiento from "../models/Movimiento";

export const getAllMovimientos = async (req: Request, res: Response) => {
    try {
        // .populate trae los datos del Saco y del Usuario relacionados
        const movimientos = await Movimiento.find()
            .populate('sacoId')
            .populate('usuarioId')
            .sort({ fecha: -1 });
        
        res.render('movimientos/movimientos', { movimientos });
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