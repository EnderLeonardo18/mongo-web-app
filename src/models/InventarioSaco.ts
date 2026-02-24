import mongoose, { Schema, model, type Document } from 'mongoose';

export interface IInventarioSaco extends Document {
    codigoSaco: string;
    tipoProducto: string;
    pesoNetoKg: number;
    cantidadDisponible: number;
    ubicacion: string;
}

const sacoSchema = new Schema<IInventarioSaco>({
    codigoSaco: { type: String, required: true },
    tipoProducto: String,
    pesoNetoKg: Number,
    cantidadDisponible: Number,
    ubicacion: String
});

export default mongoose.models.InventarioSaco || model<IInventarioSaco>('InventarioSaco', sacoSchema);