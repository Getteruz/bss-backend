import mongoose from "mongoose"

interface IService {
    title: string;
    text: string;
    img: object;
    view: number;
}
const serviceSchema = new mongoose.Schema<IService>(
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
        }
    },
    {
        timestamps: true
    },
);
export default mongoose.model<IService>('service', serviceSchema);