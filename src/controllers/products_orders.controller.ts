import { Request, Response } from "express";
import OrderModel from "../models/products_orders.model";

const orderModel = new OrderModel();
 
// export getAllorders operation
export const getAllProOrders = async(req:Request, res:Response): Promise<void> => {
    try {
        const orders = await orderModel.getAllProOrders();
        res.send({
            message: "This is all products_orders in table",
            data: {...orders}
        })
    } catch (error) {
        throw new Error('hello from getAll error')
    }
};

// export addorder operation
export const addProOrder = async(req:Request, res:Response): Promise<void> => {
    try {
        const addorder = await orderModel.addProOrder(req.body);
        res.send({
            message: "This is all add products_orders in table",
            data: {...addorder}
        })
    } catch (error) {
        throw new Error('hello from post error')
    }
};

// export deleteorder operation
export const deleteProOrder = async(req: Request, res: Response): Promise<void> => {
    try {
        const deleteorder = await orderModel.deleteProOrder(parseInt(req.params.id));
        res.send({
            message: "This is delete products_orders from table",
            data: {...deleteorder}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export getorder operation
export const getProOrder = async(req: Request, res: Response): Promise<void> => {
    try {
        const getorder = await orderModel.getProOrder(parseInt(req.params.id));
        res.send({
            message: "This is get a product_order from table",
            data: {...getorder}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export updateorder operation
export const updateProOrder = async(req:Request, res:Response): Promise<void> => {  
    try {
        const updateorder = await orderModel.updateProOrder(Number(req.body.id), Number(req.body.price), Number(req.body.product_id), Number(req.body.oder_id));       
        res.send({
            message: "This is update product_order in table",
            data: {...updateorder}
        })
    } catch (error) {        
        throw new Error('hello from update error')        
    }
};