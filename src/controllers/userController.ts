import type { Request, Response } from "express";
import User from "../models/User";

// 1. Obtener todos los usuarios + BUSCADOR
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

// 2. Obtener un usuario para EDITAR
export const getUserById = async (req: Request, res: Response) => {
    try {
        const usuario = await User.findById(req.params.id);
        if (!usuario) return res.status(404).send("Usuario no encontrado");
        
        res.render('usuarios/edit', { usuario });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};


export const createUser = async (req: Request, res: Response) => {
    try {
        await User.create(req.body);
        res.redirect('/usuarios');
    } catch (error: any) {
        res.status(400).send("Error al crear usuario: " + error.message);
    }
};

// 3. Guardar cambios (UPDATE)
export const updateUser = async (req: Request, res: Response) => {
    try {
        // Convertimos el valor de 'activo' de string a boolean si viene de un checkbox/select
        if (req.body.activo) {
            req.body.activo = req.body.activo === 'true';
        }

        await User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/usuarios');
    } catch (error: any) {
        res.status(400).send("Error al actualizar: " + error.message);
    }
};

export const deleteUser = async (req: Request, res: Response) => { 
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/usuarios');
    } catch (error: any) { // Se agrega ': any' para evitar error de tipo
        res.status(500).send('Error al eliminar usuario');
    }
};