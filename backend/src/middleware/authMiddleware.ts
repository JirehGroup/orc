// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// interface AuthRequest extends Request {
//   user?: any;
// }

// export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   try {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
    
//     if (!token) {
//       throw new Error();
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Please authenticate' });
//   }
// };
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

interface AuthRequest extends Request {
  user?: { userId: string };
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized: Invalid or expired token",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
