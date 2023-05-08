import { Request, Response } from "express"
import newsModal from "../models/news"

export const getnews = async (req: Request, res: Response) => {
    try {
        const news = await newsModal.find()
        if (!news) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send({ news })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const getnewsbyId = async (req: Request, res: Response) => {
    try {
        const news = await newsModal.findById({ _id: req.params.id })
        if (!news) {
            return res.send({
                status: 200,
                message: []
            })
        }
        res.send(news)
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const createnews = async (req: Request, res: Response) => {
    try {
        const newnews = new newsModal({
            uz_title: req.body.uz_title,
            ru_title: req.body.ru_title,
            en_title: req.body.en_title,
            tr_title: req.body.tr_title,
            uz_text: req.body.uz_text,
            ru_text: req.body.ru_text,
            en_text: req.body.en_text,
            tr_text: req.body.tr_text,
            tag: req.body.tag,
            data: req.body.data,
            img: req.body.img
        })
        await newnews.save();
        res.status(200).send({
            message: "news Created",
            data: newnews
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updatenews = async (req: Request, res: Response) => {
    try {


        await newsModal.findByIdAndUpdate(
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
                tag: req.body.tag,
                data: req.body.data,
                img: req.body.img
            }
        )
        res.status(200).json({
            message: "news updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removenews = async (req: any, res: Response) => {
    try {

        newsModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  news"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " news not found"
                    })
                }
                res.status(200).send({
                    message: " news deleted"
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