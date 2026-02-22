import { Schema, model, type Document } from 'mongoose';

export interface IInventarioSaco extends Document {
    codigoSaco: string;
    tipoProducto: string;
    pesoNetoKg: number;
    cantidadDisponible: number;
    ubicacion: string;
    fechaEntrada: Date;
}

const sacoSchema = new Schema<IInventarioSaco>({
    codigoSaco: String,
    tipoProducto: String,
    pesoNetoKg: Number,
    cantidadDisponible: Number,
    ubicacion: String,
    fechaEntrada: Date
});

export default model('InventarioSaco', sacoSchema);