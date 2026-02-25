import mongoose, { Schema, model, type Document } from 'mongoose';

// Define la estructura de datos para el inventario de sacos en stock
export interface IInventarioSaco extends Document {
    codigoSaco: string;
    tipoProducto: string;
    pesoNetoKg: number;
    cantidadDisponible: number;
    ubicacion: string;
}

// Configura las reglas y validaciones del esquema de inventario
const sacoSchema = new Schema<IInventarioSaco>({
    codigoSaco: { type: String, required: true },
    tipoProducto: String,
    pesoNetoKg: Number,
    cantidadDisponible: Number,
    ubicacion: String
});

// Verifica si el modelo ya existe para evitar errores de duplicidad en tiempo de ejecución
const InventarioSaco = mongoose.models.InventarioSaco || model<IInventarioSaco>('InventarioSaco', sacoSchema);

export default InventarioSaco;