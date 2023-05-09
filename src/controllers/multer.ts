import { Response } from "express"
import * as fs from 'fs'
import * as path from "path"

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
        const imgPath = req.body.path

        fs.unlink(path.resolve(process.cwd() + `/${imgPath}`), (err) => {
            if (err) console.log(err);
        });
        res.status(200).send('deleted')

    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
