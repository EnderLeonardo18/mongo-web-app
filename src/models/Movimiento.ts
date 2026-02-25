import mongoose, { Schema, model, type Document } from 'mongoose';

// Define la estructura de datos para la bitácora de entradas y salidas
export interface IMovimiento extends Document {
    identificadorSaco: string; 
    nombreUsuario: string;     
    tipo: 'Entrada' | 'Salida';
    cantidad: number;
    fecha: Date;
}

// Configura las reglas y validaciones del esquema de movimientos
const movimientoSchema = new Schema<IMovimiento>({
    identificadorSaco: String,
    nombreUsuario: String,
    tipo: { type: String, enum: ['Entrada', 'Salida'] },
    cantidad: Number,
    fecha: { type: Date, default: Date.now }
});

// Verifica si el modelo ya existe para evitar errores de duplicidad en tiempo de ejecución
const Movimiento = mongoose.models.Movimiento || model<IMovimiento>('Movimiento', movimientoSchema);

export default Movimiento;