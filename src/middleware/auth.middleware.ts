import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import config from '../config';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get('authorization');
        if(authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase();
            const token = authHeader.split(' ')[1];
            
            if(token && bearer === 'bearer') {
            // if(token && bearer === 'bearer') {
                // verify token
                const decoder = jwt.verify(token, config.secret as unknown as string);               
                if (decoder) {
                    next();
                } else {
                    console.log("no token found");                    
                }
            }
        } else {
            res.status(403).json({
                status: "No authorization found",
                message: "No authorization found"
            });             
        }
    } catch (error) {
        res.status(400).json({
            status: "Data Error while Login User",
            message: "Incorrect firstname or password"
        });         
    }
}