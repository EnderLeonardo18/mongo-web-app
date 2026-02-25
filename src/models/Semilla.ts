import mongoose, { Schema, model, type Document } from 'mongoose';

// Define la estructura de datos para el control de semillas certificadas
export interface ISemilla extends Document {
    nombreCientifico: string;
    variedad: string;
    codigoLote: string;
    origen: string;
    indiceGerminacion: number;
    fechaPrueba: Date;
}

// Configura las reglas y validaciones del esquema de semillas
const semillaSchema = new Schema<ISemilla>({
    nombreCientifico: { type: String, required: true },
    variedad: String,
    codigoLote: String,
    origen: String,
    indiceGerminacion: Number,
    fechaPrueba: { type: Date, default: Date.now }
});

// Verifica si el modelo ya existe para evitar errores de duplicidad en tiempo de ejecución
const Semilla = mongoose.models.Semilla || model<ISemilla>('Semilla', semillaSchema)

export default Semilla;