import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
    async getAll() {
        return await _repository.find({});
    }

    async getByBugId(bug) {
        return await _repository.find(bug)
    }

    async create(noteData) {
        return await _repository.create(noteData)
    }

    async delete(_id) {
        return await _repository.findByIdAndRemove(_id);
    }
}

const notesService = new NotesService();
export default notesService;