import mongoose, { Schema, model, type Document } from 'mongoose';

export interface IMovimiento extends Document {
    identificadorSaco: string; 
    nombreUsuario: string;     
    tipo: 'Entrada' | 'Salida';
    cantidad: number;
    fecha: Date;
}

const movimientoSchema = new Schema<IMovimiento>({
    identificadorSaco: String,
    nombreUsuario: String,
    tipo: { type: String, enum: ['Entrada', 'Salida'] },
    cantidad: Number,
    fecha: { type: Date, default: Date.now }
});

export default mongoose.models.Movimiento || model<IMovimiento>('Movimiento', movimientoSchema);