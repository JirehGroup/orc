
// src/controllers/authController.ts
import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;
        const result = await registerUser(email, password, name);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await loginUser(email, password);
        res.json(result);
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};
