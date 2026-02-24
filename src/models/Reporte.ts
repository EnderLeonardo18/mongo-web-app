import mongoose, { Schema, model, type Document } from 'mongoose';

export interface IReporte extends Document {
    titulo: string;
    tipoReporte: string;
    autor: string;
    fechaGeneracion: Date;
    contenido: string;
}

const reporteSchema = new Schema<IReporte>({
    titulo: String,
    tipoReporte: String,
    autor: String,
    fechaGeneracion: { type: Date, default: Date.now },
    contenido: String
});

export default mongoose.models.Reporte || model<IReporte>('Reporte', reporteSchema);