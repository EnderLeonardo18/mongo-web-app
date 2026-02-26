import type { Request, Response } from "express";
import User from "../models/User";

// Consulta la lista de usuarios con búsqueda opcional por nombre o correo
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        let filtro = {};

        if (search) {
            filtro = {
                $or: [
                    { nombre: { $regex: search, $options: "i" } },
                    { correo: { $regex: search, $options: "i" } }
                ]
            };
        }

        const usuarios = await User.find(filtro).sort({ fechaCreacion: -1 });
        res.render('usuarios/usuarios', { usuarios, search });
    } catch (error: any) {
        res.status(500).send("Error al obtener usuarios: " + error.message);
    }
};

// Obtiene los datos de un usuario para cargar el formulario de edición
export const getUserById = async (req: Request, res: Response) => {
    try {
        const usuario = await User.findById(req.params.id);
        if (!usuario) return res.status(404).send("Usuario no encontrado");
        
        res.render('usuarios/edit', { usuario });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

// Registra un nuevo usuario en el sistema con los datos proporcionados
export const createUser = async (req: Request, res: Response) => {
    try {
        await User.create(req.body);
        res.redirect('/usuarios');
    } catch (error: any) {
        res.status(400).send("Error al crear usuario: " + error.message);
    }
};

// Actualiza la información del usuario gestionando la conversión de estados booleanos
export const updateUser = async (req: Request, res: Response) => {
    try {
        req.body.activo = req.body.activo === 'true';

        // Actualizamos el usuario en la base de datos usando el ID de la URL
        await User.findByIdAndUpdate(req.params.id, req.body, { 
            runValidators: true, 
            returnDocument: 'after'
        });

        // Redirigimos a la lista principal tras el éxito
        res.redirect('/usuarios');
    } catch (error: any) {
        res.status(400).send("Error al actualizar: " + error.message);
    }
};

// Borra la cuenta de un usuario de forma definitiva
export const deleteUser = async (req: Request, res: Response) => { 
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/usuarios');
    } catch (error: any) { // Se agrega ': any' para evitar error de tipo
        res.status(500).send('Error al eliminar usuario');
    }
};