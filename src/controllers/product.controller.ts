import { Request, Response } from "express";
import Product from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const productModel = new ProductModel();
 
export const getAll = async(req:Request, res:Response): Promise<void> => {
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

export const addProduct = async(req:Request, res:Response) => {
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

