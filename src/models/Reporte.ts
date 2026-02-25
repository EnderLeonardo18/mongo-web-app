import mongoose, { Schema, model, type Document } from 'mongoose';

// Define la estructura de datos para la gestión de informes y reportes
export interface IReporte extends Document {
    titulo: string;
    tipoReporte: string;
    autor: string;
    fechaGeneracion: Date;
    contenido: string;
}

// Configura las reglas y validaciones del esquema de reportes
const reporteSchema = new Schema<IReporte>({
    titulo: String,
    tipoReporte: String,
    autor: String,
    fechaGeneracion: { type: Date, default: Date.now },
    contenido: String
});

// Verifica si el modelo ya existe para evitar errores de duplicidad en tiempo de ejecución
const Reporte = mongoose.models.Reporte || model<IReporte>('Reporte', reporteSchema);

export default Reporte;