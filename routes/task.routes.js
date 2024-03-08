import { Router } from "express";
import { ApiError } from "../utils/ApiError.js";
import {Tasks} from "../models/tasks.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
const router = Router()

router.get("/tasks",async (req,res)=>{
    try {
        const tasks = await Tasks.find();
        if(!tasks){
            throw new ApiError(500,"Tasks is not present in the Database")
        }
        res
        .status(201)
        .json(new ApiResponse(200,tasks,"Tasks Fetched Successfully !!!"))
    } catch (error) {
        throw new ApiError(500,error || "Tasks is not Retrieved !!")
    }
})

router.post("/tasks",async (req,res)=>{
    try {
       const {title,description} = req.body; 

       const task = await Tasks.create({
        title,
        description,
        isCompleted:false,
       })

       if(!task){
        throw new ApiError(500,"Something Went Wrong While Creating Task")
       }

       res.status(201)
       .json(new ApiResponse(200,task,"Task Created Successfully"))

    } catch (error) {
        throw new ApiError(500,error|| "Server not Take !!")
    }
})

router.put("/tasks/:id",async (req,res)=>{
    try {
        const taskId = req.params.id;
        console.log(taskId)
        const {isCompleted} = req.body;
        console.log(isCompleted)
        await Tasks.updateOne(
            {
                _id:taskId
            },
            {
                $set:{
                    isCompleted:isCompleted
                }
            }
        )
        res
        .status(201)
        .json(new ApiResponse(200,{},"Task Status Updated Successfully !!!"))
    } catch (error) {
        throw new ApiError(500,"Something Went Wrong While Updating Data")
    }
})

router.delete("/tasks/:id",async (req,res)=>{
    try {
        const taskId = req.params.id;
        await Tasks.deleteOne(
            {
                _id:taskId
            }
        )
        res
        .status(201)
        .json(new ApiResponse(200,{},"Task Deleted SuccessFully"))
    } catch (error) {
        throw new ApiError(500,"Unable to send Data to Server")
    }
})

export default router;
