import { Schema, model, type Document, type Types } from 'mongoose';


export interface IReporte extends Document {
    titulo: string;
    tipoReporte: string;
    generadoPor: Types.ObjectId;
    fechaGeneracion: Date;
    contenido: any; // O un tipo más específico si sabes la estructura
}

const reporteSchema = new Schema<IReporte>({
    titulo: String,
    tipoReporte: String,
    generadoPor: { type: Schema.Types.ObjectId, ref: 'Usuario' }, // Relación con User
    fechaGeneracion: { type: Date, default: Date.now },
    contenido: { type: Schema.Types.Mixed}
});

export default model('Reporte', reporteSchema);