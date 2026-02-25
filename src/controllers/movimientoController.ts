import type { Request, Response } from "express";
import Movimiento from "../models/Movimiento";
import InventarioSaco from "../models/InventarioSaco"; 

// Lista todos los movimientos ordenados por fecha y carga los sacos para el selector
export const getAllMovimientos = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = search ? { identificadorSaco: { $regex: search, $options: "i" } } : {};
        
        const movimientos = await Movimiento.find(filtro).sort({ fecha: -1 });
        
        // Buscamos todos los sacos disponibles en el inventario
        const sacos = await InventarioSaco.find(); 

        // 3. AJUSTE: Pasamos la variable 'sacos' a la vista para que el <select> tenga datos
        res.render('movimientos/movimientos', { movimientos, sacos, search });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

// Recupera un movimiento y la lista de sacos para permitir su edición
export const getMovimientoById = async (req: Request, res: Response) => {
    try {
        const movimiento = await Movimiento.findById(req.params.id);
        if (!movimiento) return res.status(404).send("Movimiento no encontrado");

        // Buscamos los sacos aquí por si necesitas cambiar el producto al editar
        const sacos = await InventarioSaco.find();
        res.render('movimientos/edit', { movimiento, sacos });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

// Crea un nuevo registro de entrada o salida de mercancía en la bitácora
export const createMovimiento = async (req: Request, res: Response) => {
    try {
        await Movimiento.create(req.body);
        res.redirect('/movimientos');
    } catch (error: any) {
        res.status(400).send("Error en el registro de movimiento");
    }
};

// Modifica un registro de movimiento previo en el historial
export const updateMovimiento = async (req: Request, res: Response) => {
    try {
        await Movimiento.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/movimientos');
    } catch (error: any) {
        res.status(400).send("Error al actualizar");
    }
};

// Remueve un registro específico de la bitácora de movimientos
export const deleteMovimiento = async (req: Request, res: Response) => {
    try {
        await Movimiento.findByIdAndDelete(req.params.id);
        res.redirect('/movimientos');
    } catch (error: any) {
        res.status(500).send("Error al eliminar");
    }
};