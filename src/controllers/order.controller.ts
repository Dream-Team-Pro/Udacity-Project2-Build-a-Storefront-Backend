import { Request, Response } from "express";
import OrderModel from "../models/order.model";

const orderModel = new OrderModel();
 
// export getAllorders operation
export const getAllOrders = async(req:Request, res:Response): Promise<void> => {
    try {
        const orders = await orderModel.getAllOrders();
        res.send({
            message: "This is all orders in table",
            data: {...orders}
        })
    } catch (error) {
        throw new Error('hello from getAll error')
    }
};

// export addorder operation
export const addOrder = async(req:Request, res:Response): Promise<void> => {
    try {
        const addorder = await orderModel.addOrder(req.body);
        res.send({
            message: "This is all add order in table",
            data: {...addorder}
        })
    } catch (error) {
        throw new Error('hello from post error')
    }
};

// export deleteorder operation
export const deleteOrder = async(req: Request, res: Response): Promise<void> => {
    try {
        const deleteorder = await orderModel.deleteOrder(parseInt(req.params.id));
        res.send({
            message: "This is delete order from table",
            data: {...deleteorder}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export getorder operation
export const getOrder = async(req: Request, res: Response): Promise<void> => {
    try {
        const getorder = await orderModel.getOrder(parseInt(req.params.id));
        res.send({
            message: "This is get a order from table",
            data: {...getorder}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export updateorder operation
export const updateOrder = async(req:Request, res:Response): Promise<void> => {  
    try {
        const updateorder = await orderModel.updateOrder(Number(req.body.id), Number(req.body.quantity), Number(req.body.user_id), req.body.status);       
        res.send({
            message: "This is update order in table",
            data: {...updateorder}
        })
    } catch (error) {        
        throw new Error('hello from update error')        
    }
};