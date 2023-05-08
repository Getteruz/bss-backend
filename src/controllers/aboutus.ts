import { Request, Response } from "express"
import aboutusModal from "../models/aboutus"

export const getaboutus = async (req: Request, res: Response) => {
    try {
        const aboutus = await aboutusModal.find()

        if (!aboutus) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send({ aboutus })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const getaboutusbyId = async (req: Request, res: Response) => {
    try {
        const aboutus = await aboutusModal.findById({ _id: req.params.id })
        if (!aboutus) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send(aboutus)
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const createaboutus = async (req: Request, res: Response) => {
    try {
        const newaboutus = new aboutusModal({
            title: req.body.title,
            name: req.body.name,
            text: req.body.text,
            text2: req.body.text2,
            text3: req.body.text3,
            img: req.body.img
        })
        await newaboutus.save();
        res.status(200).send({
            message: "aboutus Created",
            data: newaboutus
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updateaboutus = async (req: Request, res: Response) => {
    try {
        await aboutusModal.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                title: req.body.title,
                name: req.body.name,
                text: req.body.text,
                text2: req.body.text2,
                text3: req.body.text3,
                img: req.body.img
            }
        )
        res.status(200).json({
            message: "aboutus updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removeaboutus = async (req: any, res: Response) => {
    try {

        aboutusModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  aboutus"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " aboutus not found"
                    })
                }
                res.status(200).send({
                    message: " aboutus deleted"
                })
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: 500,
            message: "Failed to delete"
        });
    }
}