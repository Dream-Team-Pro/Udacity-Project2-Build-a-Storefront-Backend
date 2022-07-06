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
            message: "Success to get all users in table",
            data: {...users}
        })
    } catch (error) {
        throw new Error('oops!, we can not get all users. try again')
    }
};

// export addProduct operation
export const addUser = async(req:Request, res:Response): Promise<void> => {
    try {
        const addUser = await userModel.addUser(req.body);
        res.send({
            message: "Success to add user in table",
            data: {...addUser}
        })
    } catch (error) {
        throw new Error('oops!, we can not add user. try again')
    }
};

// export deleteUser operation
export const deleteUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const deleteUser = await userModel.deleteUser(parseInt(req.params.id));
        res.send({
            message: "Success to delete user from table",
            data: {...deleteUser}
        })
    } catch (error) {
        throw new Error('oops!, we can not delete the user. try again')
    }
};

// export getUser operation
export const getUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const getUser = await userModel.getUser(parseInt(req.params.id));
        res.send({
            message: "Success to get a user from table",
            data: {...getUser}
        })
    } catch (error) {
        throw new Error('oops!, we can not get the user. try again')
    }
};

// export updateUser operation
export const updateUser = async(req:Request, res:Response): Promise<void> => {
    try {
        const updateUser = await userModel.updateUser(Number(req.body.id), req.body.firstname, req.body.lastname, req.body.password);       
        res.send({
            message: "Success to update the user in table",
            data: {...updateUser}
        })
    } catch (error) {        
        throw new Error('oops!, we can not update the user. try again')        
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
                message: "Success to login a user",
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