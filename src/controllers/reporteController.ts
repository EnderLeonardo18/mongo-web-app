import type { Request, Response } from "express";
import Reporte from "../models/Reporte";

// Obtiene el listado de reportes generados con opción de búsqueda por título
export const getAllReportes = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = search ? { titulo: { $regex: search, $options: "i" } } : {};

        const reportes = await Reporte.find(filtro).sort({ fechaGeneracion: -1 });
        res.render('reportes/reportes', { reportes, search });
    } catch (error: any) {
        res.status(500).send("Error en reportes: " + error.message);
    }
};

// Recupera un reporte específico por su ID para visualizar o editar su contenido
export const getReporteById = async (req: Request, res: Response) => {
    try {
        const reporte = await Reporte.findById(req.params.id);
        if (!reporte) return res.status(404).send("Reporte no encontrado");
        res.render('reportes/edit', { reporte });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

// Registra un nuevo informe técnico o estadístico en la base de datos
export const createReporte = async (req: Request, res: Response) => {
    try {
        await Reporte.create(req.body);
        res.redirect('/reportes');
    } catch (error: any) {
        res.status(400).send("Error al generar reporte: " + error.message);
    }
};

// Actualiza la información o las conclusiones de un reporte existente
export const updateReporte = async (req: Request, res: Response) => {
    try {
        await Reporte.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/reportes');
    } catch (error: any) {
        res.status(400).send("Error al actualizar");
    }
};

// Elimina un reporte del historial de forma permanente
export const deleteReporte = async (req: Request, res: Response) => {
    try {
        await Reporte.findByIdAndDelete(req.params.id);
        res.redirect('/reportes');
    } catch (error: any) {
        res.status(500).send("Error al eliminar reporte");
    }
};