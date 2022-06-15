import { Request, Response } from "express";
import Product from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const productModel = new ProductModel();
 
// export getAllProducts operation
export const getAllProducts = async(req:Request, res:Response): Promise<void> => {
    try {
        const products = await productModel.getAllProducts();
        res.send({
            message: "This is all products in table",
            data: {...products}
        })
    } catch (error) {
        throw new Error('hello from get error')
    }
};

// export addProduct operation
export const addProduct = async(req:Request, res:Response): Promise<void> => {
    try {
        const addProduct = await productModel.addProduct(req.body);
        res.send({
            message: "This is all add product in table",
            data: {...addProduct}
        })
    } catch (error) {
        throw new Error('hello from post error')
    }
};

// export deleteProduct operation
export const deleteProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const deleteProduct = await productModel.deleteProduct(parseInt(req.params.id));
        res.send({
            message: "This is delete product from table",
            data: {...deleteProduct}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export getProduct operation
export const getProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const getProduct = await productModel.getProduct(parseInt(req.params.id));
        res.send({
            message: "This is get a product from table",
            data: {...getProduct}
        })
    } catch (error) {
        throw new Error('hello from delete error')
    }
};

// export updateProduct operation
export const updateProduct = async(req:Request, res:Response): Promise<void> => {
    try {
        const updateProduct = await productModel.updateProduct(Number(req.body.id), req.body.name, Number(req.body.price));       
        res.send({
            message: "This is update product in table",
            data: {...updateProduct}
        })
        console.log('req.body.controll.id:', req.body.id );
        console.log('req.body.controll.name:', req.body.name );
        console.log('req.body.controll.price:', req.body.price );
    } catch (error) {        
        console.log('req.body.error contr.id:', req.body.id );
        console.log('req.body.error contr.name:', req.body.name );
        console.log('req.body.error contr.price:', req.body.price );
        //throw new Error('hello from update error')        
    }

};