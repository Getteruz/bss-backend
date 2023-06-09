import mongoose from "mongoose"

interface IObjects {
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
    uz_tag: object,
    ru_tag: object,
    en_tag: object,
    tr_tag: object,
    data: string
}
const objectsSchema = new mongoose.Schema<IObjects>(
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

        },
        view: {
            type: Number,
            default: 0,
        },
        uz_tag: {
            type: String,

        },
        ru_tag: {
            type: String,

        },
        en_tag: {
            type: String,

        },
        tr_tag: {
            type: String,

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
export default mongoose.model<IObjects>('objects', objectsSchema);