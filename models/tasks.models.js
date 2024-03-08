import mongoose,{Schema} from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
        required:true,
    }
},{timestamps:true})

export const Tasks = mongoose.model("Tasks",taskSchema)
