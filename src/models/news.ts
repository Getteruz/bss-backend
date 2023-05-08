import mongoose from "mongoose"

interface INews {
    uz_title: string;
    ru_title: string;
    en_title: string;
    tr_title: string;
    uz_text: string;
    ru_text: string;
    en_text: string;
    tr_text: string;
    img: object;
    view: number;
    tag: string,
    data: string
}
const newsSchema = new mongoose.Schema<INews>(
    {
        uz_title: {
            type: String
        },
        ru_title: {
            type: String
        },
        en_title: {
            type: String
        },
        tr_title: {
            type: String
        },
        uz_text: {
            type: String
        },
        ru_text: {
            type: String
        },
        en_text: {
            type: String
        },
        tr_text: {
            type: String
        },
        img: {
            type: [Object],
            required: true,
        },
        view: {
            type: Number,
            default: 0,
        },
        tag: {
            type: String,
            required: true,
        },
        data: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    },
);
export default mongoose.model<INews>('news', newsSchema);