import { Request, Response } from "express";
import ProductModel from "../models/product.test.model";

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
        throw new Error('hello from getAll error')
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
        const updateProduct = await productModel.updateProduct(Number(req.body.id), req.body.name, Number(req.body.price), req.body.category);       
        res.send({
            message: "This is update product in table",
            data: {...updateProduct}
        })
    } catch (error) {        
        throw new Error('hello from update error')        
    }
};