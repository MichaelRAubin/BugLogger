import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService"

export default class BugController {
    constructor() {
        this.router = express
            .Router()
            //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:bugId/notes", this.getAllNotesByBugId)
            .post("", this.create)
            .put("/:id", this.editBug)
            .delete("/:id", this.deleteBug)
    }

    async getAll(req, res, next) {
        try {
            let data = await bugsService.getAll();
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let bug = await bugsService.getById(req.params.id);
            res.send(bug)
        } catch (error) {
            next(error);
        }
    }

    async getAllNotesByBugId(req, res, next) {
        try {
            let notes = await notesService.getByBugId(req.params.id)
            res.send(notes)
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let bug = await bugsService.create(req.body);
            res.send(bug);
        } catch (error) {
            next(error);
        }
    }

    async editBug(req, res, next) {
        try {
            let editedBug = await bugsService.editBug(req.body);
            return res.send(editedBug)
        } catch (error) {
            next(error)
        }
    }

    async deleteBug(req, res, next) {
        try {
            let deleteBug = await bugsService.deleteBug(req.params.id);
            res.send(deleteBug)
        } catch (error) {
            next(error)
        }
    }
}