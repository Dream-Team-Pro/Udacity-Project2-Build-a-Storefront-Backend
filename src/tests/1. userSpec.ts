import User from "../interfaces/user.interface";
import userModel from "../models/user.model";

const userMod = new userModel()

describe('Test User Model', () => {
    it('Should Add new user', async () => {
        const user: User = {
          firstname: "mohamed",
          lastname: "salah",
          password: "12345"
        }
        const result = await userMod.addUser(user)
        const response = await userMod.getUser(1)              
        expect(response.firstname).toEqual(user.firstname)
    })

    it('Should show all Users', async () => {
        const result = await userMod.getAllUsers()
        expect(result.length).toEqual(1)
    })

    it('Should get user by id', async () => {
        const result = await userMod.getUser(1)
        expect(result.firstname).toEqual('mohamed')
    })

    it('Should Update a user', async () => {
        const user: User = {
          id: 1,
          firstname: "badr",
          lastname: "salah",
          password: "12345"
        }
        const result = await userMod.updateUser(Number(user.id), user.firstname, user.lastname, user.password)
        const response = await userMod.getUser(1)              
        expect(response.firstname).toEqual(user.firstname)
    })

    // it('Should delete user by id', async () => {
    //     const result = await userMod.deleteUser(1)
    //     const response = await userMod.getUser(1)
    //     expect(response).toBeUndefined()

    // })
})