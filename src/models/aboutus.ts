import mongoose from "mongoose"

interface IAboutUs {
    title: string;
    name: string;
    text: string;
    text2: string;
    text3: string;
    img: object;
}
const newsAboutUs = new mongoose.Schema<IAboutUs>(
    {
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        text2: {
            type: String,
            required: true,
        },
        text3: {
            type: String,
            required: true,
        },
        img: {
            type: [Object],
            required: true,
        },
    },
    {
        timestamps: true
    },
);
export default mongoose.model<IAboutUs>('aboutus', newsAboutUs);