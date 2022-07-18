import Order from "../../interfaces/order.interface";
import orderModel from "../../models/order.model";

const orderMod = new orderModel()

describe('Test Order Model', () => {
    it('Should Add new order', async () => {
        const order: Order = {
          user_id: 2,
          status: "active"
        }
        const result = await orderMod.addOrder(order)
        const response = await orderMod.getOrder(1)              
        expect(response.status).toEqual(order.status)
    })

    it('Should show all orders', async () => {
        const result = await orderMod.getAllOrders()
        expect(result.length).toEqual(1)
    })

    it('Should get order by id', async () => {
        const result = await orderMod.getOrder(1)
        expect(result.status).toEqual('active')
    })

    it('Should Update an Order', async () => {
        const order: Order = {
          id: 1,
          user_id: 2,
          status: "complete"
        }
        const result = await orderMod.updateOrder(Number(order.id), order.user_id, order.status)
        const response = await orderMod.getOrder(1)              
        expect(response.status).toEqual(order.status)
    })

    it('Should delete order by id', async () => {
        const result = await orderMod.deleteOrder(1)
        const response = await orderMod.getOrder(1)
        expect(response).toBeUndefined()
    })

    it('Should Add new order', async () => {
        const order: Order = {
          user_id: 2,
          status: "active"
        }
        const result = await orderMod.addOrder(order)
        const response = await orderMod.getOrder(2)              
        expect(response.status).toEqual(order.status)
    })

})