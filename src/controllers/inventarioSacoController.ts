import type { Request, Response } from "express";
import InventarioSaco from "../models/InventarioSaco";

// Obtiene el listado de sacos aplicando filtros de búsqueda por código o producto
export const getAllSacos = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = {};
        if (search) {
            filtro = {
                $or: [
                    { codigoSaco: { $regex: search, $options: "i" } },
                    { tipoProducto: { $regex: search, $options: "i" } }
                ]
            };
        }
        const sacos = await InventarioSaco.find(filtro);
        res.render('sacos/sacos', { sacos, search });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

// Busca un saco específico por su ID para mostrar la vista de edición
export const getSacoById = async (req: Request, res: Response) => {
    try {
        const saco = await InventarioSaco.findById(req.params.id);
        if (!saco) return res.status(404).send("Saco no encontrado");
        res.render('sacos/edit', { saco });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

// Registra un nuevo lote de sacos en la base de datos y redirecciona al inventario
export const createSaco = async (req: Request, res: Response) => {
    try {
        await InventarioSaco.create(req.body);
        res.redirect('/sacos');
    } catch (error: any) {
        res.status(400).send("Error al crear: " + error.message);
    }
};

// Actualiza los datos de un saco existente validando la información enviada
export const updateSaco = async (req: Request, res: Response) => {
    try {
        await InventarioSaco.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/sacos');
    } catch (error: any) {
        res.status(400).send("Error al actualizar");
    }
};

// Elimina permanentemente un registro de saco del inventario
export const deleteSaco = async (req: Request, res: Response) => {
    try {
        await InventarioSaco.findByIdAndDelete(req.params.id);
        res.redirect('/sacos');
    } catch (error: any) {
        res.status(500).send("Error al eliminar");
    }
};