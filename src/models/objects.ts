import mongoose from "mongoose"

interface IObjects {
    title: string;
    text: string;
    img: object;
    view: number;
    tag: object,
    data: string
}
const objectsSchema = new mongoose.Schema<IObjects>(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        img: {
            type: [String],
            required: true,
        },
        view: {
            type: Number,
            default: 0,
        },
        tag: {
            type: [String],
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
export default mongoose.model<IObjects>('objects', objectsSchema);