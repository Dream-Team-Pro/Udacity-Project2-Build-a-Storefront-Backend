import ProOrder from "../../interfaces/products_orders.interface";
import proOrderModel from "../../models/products_orders.model";

const proOrderMod = new proOrderModel()

describe('Test ProOrder Model', () => {
    it('Should Add new ProOrder', async () => {
        const proOrder: ProOrder = {
            price: 60,
            quantity: 6,
            product_id: 2,
            order_id: 2
        }
        const result = await proOrderMod.addProOrder(proOrder)
        const response = await proOrderMod.getProOrder(1)              
        expect(Number(response.price)).toEqual(proOrder.price)
    })

    it('Should show all ProOrders', async () => {
        const result = await proOrderMod.getAllProOrders()
        expect(result.length).toEqual(1)
    })

    it('Should get ProOrder by id', async () => {
        const result = await proOrderMod.getProOrder(1)
        expect(Number(result.price)).toEqual(60)
    })

    it('Should Update a ProOrder', async () => {
        const proOrder: ProOrder = {
            id: 1,
            price: 120,
            quantity: 12,
            product_id: 2,
            order_id: 2
        }
        const result = await proOrderMod.updateProOrder(Number(proOrder.id), Number(proOrder.price), Number(proOrder.quantity), Number(proOrder.product_id), Number(proOrder.order_id))
        const response = await proOrderMod.getProOrder(1)              
        expect(Number(response.price)).toEqual(proOrder.price)
    })

    it('Should delete ProOrder by id', async () => {
        const result = await proOrderMod.deleteProOrder(1)
        const response = await proOrderMod.getProOrder(1)
        expect(response).toBeUndefined()
    })   
    
    it('Should Add new ProOrder', async () => {
        const proOrder: ProOrder = {
            price: 60,
            quantity: 6,
            product_id: 2,
            order_id: 2
        }
        const result = await proOrderMod.addProOrder(proOrder)
        const response = await proOrderMod.getProOrder(2)              
        expect(Number(response.price)).toEqual(proOrder.price)
    })    
})