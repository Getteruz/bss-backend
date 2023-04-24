import jwt from "jsonwebtoken"

import { Request, Response } from "express";

import UserModel from "../models/user"


export const login = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({ email: req.body.name, password: req.body.password })

        if (!user) {
            return res.status(403).send({
                status: 403,
                message: 'Invalid password or login'
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            "secretno",
            {
                expiresIn: "30d"
            }
        )

        res.status(200).send({ user, token })

    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "login failed"
        });
    }
}