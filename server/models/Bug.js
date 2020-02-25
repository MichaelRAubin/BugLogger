import mongoose from "mongoose";
const Schema = mongoose.Schema;

let bug = new Schema({
    closed: { type: Boolean, default: false },
    description: { type: String, trim: true },
    title: { type: String, trim: true },
    reportedBy: { type: String }, //The provided name for who reported the bug
    closedDate: { type: Date }
},
    { timestamps: true, toJSON: { virtuals: true } })

export default bug;