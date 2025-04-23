import User from '../models/authModels';
import jwt from 'jsonwebtoken';

export const registerUser = async (email: string, password: string, name: string) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const user = new User({ email, password, name });
    await user.save();

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'your_super_secret_key',
        { expiresIn: '24h' }
    );

    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role
        }
    };
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'your_super_secret_key',
        { expiresIn: '24h' }
    );

    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role
        }
    };
};
