import { Request, Response } from "express"
import serviceModal from "../models/service"

export const getservice = async (req: Request, res: Response) => {
    try {
        const service = (await serviceModal.find()).reverse()

        if (!service) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send({ service })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const getservicebyId = async (req: Request, res: Response) => {
    try {
        const service = await serviceModal.findById({ _id: req.params.id })
        if (!service) {
            return res.send({
                status: 200,
                message: []
            })
        }

        res.send(service)
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const createservice = async (req: Request, res: Response) => {
    try {

        const newservice = new serviceModal({
            uz_title: req.body.uz_title,
            ru_title: req.body.ru_title,
            en_title: req.body.en_title,
            tr_title: req.body.tr_title,
            uz_text: req.body.uz_text,
            ru_text: req.body.ru_text,
            en_text: req.body.en_text,
            tr_text: req.body.tr_text,
            img: req.body.img
        })
        await newservice.save();
        res.status(200).send({
            message: "service Created",
            data: 'newservice'
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updateservice = async (req: Request, res: Response) => {
    try {


        await serviceModal.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                uz_title: req.body.uz_title,
                ru_title: req.body.ru_title,
                en_title: req.body.en_title,
                tr_title: req.body.tr_title,
                uz_text: req.body.uz_text,
                ru_text: req.body.ru_text,
                en_text: req.body.en_text,
                tr_text: req.body.tr_text,
                img: req.body.img
            }
        )
        res.status(200).json({
            message: "service updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removeservice = async (req: any, res: Response) => {
    try {

        serviceModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  service"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " service not found"
                    })
                }
                res.status(200).send({
                    message: " service deleted"
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