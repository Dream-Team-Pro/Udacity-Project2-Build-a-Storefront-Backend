import { Response, Request, NextFunction } from "express";
import errorInterface from "../interfaces/error.interface";

const errorMiddleware = (
    error: errorInterface,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = error.status || 500;
    const message = error.message || 'oops, something wrong';
    res.status(status).json({ status, message });
};

export default errorMiddleware;