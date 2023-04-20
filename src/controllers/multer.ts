
import { Response } from "express"

export const multerfunc = async (req: any, res: Response) => {
    try {
        res.send(`/uploads/${req.file.originalname}`)

    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}