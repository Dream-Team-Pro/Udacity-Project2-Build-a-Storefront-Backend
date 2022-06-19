import { Response, Request } from "express";
import errorInterface from "../interfaces/handleErrors.interface";

const errorMiddleware = (
    error: errorInterface,
    req: Request,
    res: Response,
) => {
    const status = error.status || 500;
    const message = error.message || 'oops, something wrong';
    res.status(status).json({ status, message });
};

export default errorMiddleware;