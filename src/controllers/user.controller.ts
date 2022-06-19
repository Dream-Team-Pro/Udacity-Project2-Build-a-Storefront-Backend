import { Request, Response } from "express";
import UserModel from "../models/user.model";
import jwt from 'jsonwebtoken';
import config from '../config';

const userModel = new UserModel();
 
// export getAllUsers operation
export const getAllUsers = async(req:Request, res:Response): Promise<void> => {
    try {
        const users = await userModel.getAllUsers();
        res.send({
            message: "This is all users in table",
            data: {...users}
        })
    } catch (error) {
        throw new Error('hello from get error')
    }
};

// export addProduct operation
export const addUser = async(req:Request, res:Response): Promise<void> => {
    try {
        const addUser = await userModel.addUser(req.body);
        res.send({
            message: "This is all add user in table",
            data: {...addUser}
        })
    } catch (error) {
        throw new Error('hello from post error')
    }
};

// export deleteUser operation
export const deleteUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const deleteUser = await userModel.deleteUser(parseInt(req.params.id));
        res.send({
            message: "This is delete product from table",
            data: {...deleteUser}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export getUser operation
export const getUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const getUser = await userModel.getUser(parseInt(req.params.id));
        res.send({
            message: "This is get a user from table",
            data: {...getUser}
        })
    } catch (error) {
        throw new Error('hello from get error')
    }
};

// export updateUser operation
export const updateUser = async(req:Request, res:Response): Promise<void> => {
    try {
        const updateUser = await userModel.updateUser(Number(req.body.id), req.body.firstname, req.body.lastname, req.body.password);       
        res.send({
            message: "This is update user in table",
            data: {...updateUser}
        })
    } catch (error) {        
        throw new Error('hello from update error')        
    }
};

// export loginUser operation
export const loginUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const loginUser = await userModel.loginUser(req.body.firstname, req.body.password);
        if (loginUser) {
            // assign token 
            const token = jwt.sign({firstname: req.body.firstname, password: req.body.password}, config.secret as unknown as string);
            res.status(200).json({
                status: "Login User Success",
                message: "This is login user success",
                data: {...loginUser, token}            
            });
            console.log('token controller: ', token);                        
        } else {
            res.status(403).json({
                status: "Data Error while Login User",
                message: "Incorrect firstname or password"
            });                        
        }
    } catch (error) {
        res.status(400).json({
            status: "General Error while Login User",
            message: "Incorrect firstname or password"
        }); 
    }
};