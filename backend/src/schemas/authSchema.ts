import { Document } from 'mongoose';

export interface UserDocument extends Document {
    email: string;
    password: string;
    name: string;
    role: 'user' | 'admin';
    comparePassword(candidatePassword: string): Promise<boolean>;
}
