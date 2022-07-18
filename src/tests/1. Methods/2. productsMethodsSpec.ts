import Product from "../../interfaces/product.interface";
import productModel from "../../models/product.model";

const productMod = new productModel()

describe('Test Product Model', () => {
    it('Should Add new Product', async () => {
        const product: Product = {
            "id": 1,
            "name": "CD",
            "price": 10,
            "category": "accessories"
        }
        const result = await productMod.addProduct(product)
        const response = await productMod.getProduct(1)              
        expect(response.name).toEqual(product.name)
    })

    it('Should show all Products', async () => {
        const result = await productMod.getAllProducts()
        expect(result.length).toEqual(1)
    })

    it('Should get Product by id', async () => {
        const result = await productMod.getProduct(1)
        expect(result.name).toEqual('CD')
    })

    it('Should Update a Product', async () => {
        const product: Product = {
            "id": 1,
            "name": "DVD",
            "price": 10,
            "category": "accessories"
        }
        const result = await productMod.updateProduct(Number(product.id), product.name, product.price, product.category)
        const response = await productMod.getProduct(1)              
        expect(response.name).toEqual(product.name)
    })

    it('Should delete product by id', async () => {
        const result = await productMod.deleteProduct(1)
        const response = await productMod.getProduct(1)
        expect(response).toBeUndefined()
    })

    it('Should Add new Product', async () => {
        const product: Product = {
            "name": "CD",
            "price": 10,
            "category": "accessories"
        }
        const result = await productMod.addProduct(product)
        const response = await productMod.getProduct(2)              
        expect(response.name).toEqual(product.name)
    })    
})