import { Schema, model, type Document, type Types } from 'mongoose';

export interface IMovimiento extends Document {
    sacoId: Types.ObjectId;
    usuarioId: Types.ObjectId;
    tipo: 'Entrada' | 'Salida';
    cantidad: number;
    fecha: Date;
}

const movimientoSchema = new Schema<IMovimiento>({
    // RELACIONES agregar required true
    sacoId: { type: Schema.Types.ObjectId, ref: 'InventarioSaco' },
    usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    tipo: { type: String, enum: ['Entrada', 'Salida'] },
    cantidad: Number,
    fecha: { type: Date, default: Date.now }
});

export default model('Movimiento', movimientoSchema);