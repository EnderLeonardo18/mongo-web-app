import type { Request, Response } from "express";
import Reporte from "../models/Reporte";

export const getAllReportes = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = {};

        if (search) {
            filtro = { titulo: { $regex: search, $options: "i" } };
        }

        // Traemos el reporte y poblamos quién lo generó
        const reportes = await Reporte.find(filtro)
            .populate('generadoPor', 'nombre') 
            .sort({ fechaGeneracion: -1 });

        res.render('reportes/reportes', { reportes, search });
    } catch (error: any) {
        res.status(500).send("Error en reportes: " + error.message);
    }
};

export const getReporteById = async (req: Request, res: Response) => {
    try {
        const reporte = await Reporte.findById(req.params.id).populate('generadoPor', 'nombre');
        if (!reporte) return res.status(404).send("Reporte no encontrado");
        
        res.render('reportes/show', { reporte });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const createReporte = async (req: Request, res: Response) => {
    try {
        await Reporte.create(req.body);
        res.redirect('/reportes');
    } catch (error: any) {
        res.status(400).send("Error al generar reporte: " + error.message);
    }
};

export const deleteReporte = async (req: Request, res: Response) => {
    try {
        await Reporte.findByIdAndDelete(req.params.id);
        res.redirect('/reportes');
    } catch (error: any) {
        res.status(500).send("Error al eliminar reporte");
    }
};