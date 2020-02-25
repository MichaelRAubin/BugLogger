import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let note = new Schema({
    content: { type: String },
    bug: { type: ObjectId, ref: "bug" },
    reportedBy: { type: String }, //The provided name for who made the note
},
    { timestamps: true, toJSON: { virtuals: true } })

export default note;