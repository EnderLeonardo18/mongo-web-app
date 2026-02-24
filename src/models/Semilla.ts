import mongoose, { Schema, model, type Document } from 'mongoose';

export interface ISemilla extends Document {
    nombreCientifico: string;
    variedad: string;
    codigoLote: string;
    origen: string;
    indiceGerminacion: number;
    fechaPrueba: Date;
}

const semillaSchema = new Schema<ISemilla>({
    nombreCientifico: { type: String, required: true },
    variedad: String,
    codigoLote: String,
    origen: String,
    indiceGerminacion: Number,
    fechaPrueba: { type: Date, default: Date.now }
});

export default mongoose.models.Semilla || model<ISemilla>('Semilla', semillaSchema);