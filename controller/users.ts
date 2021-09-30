import { Request, Response, NextFunction } from "express";
import userModel from "../models/users"


export const getUsers = async (req: Request,res: Response) => {
    
    try {
        const users = await userModel.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const createUsers = async (req: Request,res: Response, next: NextFunction) => {
    try {
        const users = await userModel.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}
