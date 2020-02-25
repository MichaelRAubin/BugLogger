import express from "express";
import notesService from "../services/NotesService";
import bugsService from "../services/BugsService";

export default class NotesController {
    constructor() {
        this.router = express
            .Router()
            //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
            .get("", this.getAll)
            .post("", this.create)
            .delete("/:id", this.deleteNote);
    }

    async getAll(req, res, next) {
        try {
            let data = await notesService.getAll();
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let note = await notesService.create(req.body)
            res.send(note);
        } catch (error) {
            next(error);
        }
    }

    async deleteNote(req, res, next) {
        try {
            let deleteNote = await notesService.delete(req.params.id)
            res.send(deleteNote)
        } catch (error) {
            next(error);
        }
    }
}