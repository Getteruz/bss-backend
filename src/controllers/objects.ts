import { Request, Response } from "express"
import objectModal from "../models/objects"

export const getobject = async (req: Request, res: Response) => {
    try {
        const object = await objectModal.find()
        if (!object) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send({ object })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const getobjectbyId = async (req: Request, res: Response) => {
    try {
        const object = await objectModal.findById({ _id: req.params.id })
        if (!object) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send(object)
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const createobject = async (req: Request, res: Response) => {
    try {
        const newobject = new objectModal({
            title: req.body.title,
            text: req.body.text,
            tag: req.body.tag,
            data: req.body.data,
            img: req.body.img
        })
        await newobject.save();
        res.status(200).send({
            message: "object Created",
            data: newobject
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updateobject = async (req: Request, res: Response) => {
    try {


        await objectModal.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                title: req.body.title,
                text: req.body.text,
                tag: req.body.tag,
                data: req.body.data,
                img: req.body.img
            }
        )
        res.status(200).json({
            message: "object updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removeobject = async (req: any, res: Response) => {
    try {

        objectModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  object"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " object not found"
                    })
                }
                res.status(200).send({
                    message: " object deleted"
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