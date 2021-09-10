import express from "express";
import userModel from '../models/users'

const userRouter = express.Router();

userRouter.get('/users', async (request, response) => {
    const users = await userModel.find({})
    try {
        response.send(users)
    } catch (error) {
        response.status(500).send(error)
    }
})
userRouter.post('/user', async (request, response) => {
    const user = new userModel(request.body)
    try {
        await user.save()
        response.send(user)
    } catch (error) {
        response.status(500).send(error)
    }
})

export default userRouter;