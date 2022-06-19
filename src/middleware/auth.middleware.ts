import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import config from '../config';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get('authorization');
        console.log('authHeader from test: ', authHeader);
        console.log('typeof authHeader from test: ', typeof authHeader);

        if(authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase();
            const token = authHeader.split(' ')[1];
            console.log('bearer: ', bearer);
            console.log('token: ', token);
            
            if(token && bearer === 'bearer') {
            // if(token && bearer === 'bearer') {
                // verify token
                const decoder = jwt.verify(token, config.secret as unknown as string);
                console.log('decoder from auth test: ', decoder);
                
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