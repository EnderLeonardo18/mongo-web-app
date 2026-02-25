import mongoose, { Schema, model, type Document } from "mongoose";

// Define la estructura de datos para los usuarios del sistema
export interface IUser extends Document {
    nombre: string;
    correo: string;
    rol: 'Administrador' | 'Trabajador';
    passwordHash?: string;
    activo: boolean;
    fechaCreacion: Date;
}

// Configura las reglas y validaciones del esquema de usuario
const userSchema = new Schema<IUser>({
    nombre: { type: String, required: [true, 'El nombre es obligatario']},
    correo: { type: String, required: [true, 'El correo es obligatorio'] },
    rol: { type: String, enum: ['Administrador', 'Trabajador'] },
    passwordHash: String,
    activo: { type: Boolean, default: true },
    fechaCreacion: { type: Date, default: Date.now  }
});


// Verifica si el modelo ya existe para evitar errores de duplicidad en tiempo de ejecución
const Usuario = mongoose.models.Usuario || model<IUser>('Usuario', userSchema);

export default Usuario;