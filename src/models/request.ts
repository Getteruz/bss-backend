import mongoose from "mongoose"

interface IRequest {
    name: string;
    address: string;
    telNumber: string;
}
const requestSchema = new mongoose.Schema<IRequest>(
    {
        name: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        telNumber: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    },
);
export default mongoose.model<IRequest>('request', requestSchema);