import { Schema, model, type Document } from 'mongoose';

export interface ISemilla extends Document {
    nombreCientifico: string;
    variedad: string;
    codigoLote: string;
    origen: string;
    indiceGerminacion: number;
    fechaPrueba: Date;
}

const semillaSchema = new Schema<ISemilla>({
    nombreCientifico: String,
    variedad: String,
    codigoLote: String,
    origen: String,
    indiceGerminacion: Number,
    fechaPrueba: Date
});

export default model('Semilla', semillaSchema);