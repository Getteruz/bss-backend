import { Response } from "express"
import fs from 'fs'

export const multerfunc = async (req: any, res: Response) => {
    try {
        res.send({
            path: req.file.path,
            url: `${process.env.BACKEND_URL}/uploads/${req.file.originalname}`,
        })

    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const removefile = async (req: any, res: Response) => {
    try {
        const path = req.body.path
        fs.unlink(process.cwd() + path, (err) => {
            if (err) console.log(err);
        });
        res.send('deleted')

    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
