import { Schema, model, type Document } from "mongoose";

export interface IUser extends Document {
    nombre: string;
    correo: string;
    rol: 'Administrador' | 'Trabajador';
    passwordHash?: string;
    activo: boolean;
    fechaCreacion: Date;
}

const userSchema = new Schema<IUser>({
    nombre: { type: String, required: [true, 'El nombre es obligatario']},
    correo: { type: String, required: [true, 'El correo es obligatorio'] },
    rol: { type: String, enum: ['Administrador', 'Trabajador'] },
    passwordHash: String,
    activo: { type: Boolean, default: true },
    fechaCreacion: { type: Date, default: Date.now  }
});


export default model('Usuario', userSchema);