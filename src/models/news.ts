import mongoose from "mongoose"

interface INews {
    title: string;
    text: string;
    img: object;
    view: number;
    tag: string,
    data: string
}
const newsSchema = new mongoose.Schema<INews>(
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