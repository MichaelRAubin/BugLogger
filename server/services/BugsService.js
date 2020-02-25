import mongoose from "mongoose";
import Bug from "../models/Bug";
import { BadRequest } from "../../errors";



const _repository = mongoose.model("Bug", Bug);

class BugsService {
    async getAll() {
        return await _repository.find({});
    }

    async getById(id) {
        let bug = await _repository.findById(id)
        if (!bug) {
            throw new BadRequest("Invalid Id")
        }
        return bug;
    }

    async create(bugData) {
        return await _repository.create(bugData)
    }
    //TODO need to fix - can edit closed bug
    async editBug(_id, bugData) {
        // let bug = await _repository.findById(_id, bugData)
        // if (_id.bugData.closed === true) {
        //     throw new BadRequest("Bug Closed and cannot be edited")
        // }
        return await _repository.findByIdAndUpdate(_id, bugData, {
            new: true,
        });
    }

    async deleteBug(id) {
        return await _repository.findByIdAndUpdate(id, {
            closed: true, new: true,
        });
    }
}



const bugsService = new BugsService();
export default bugsService;
