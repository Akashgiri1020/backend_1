import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.static("public"))
app.use(bodyParser.json());
app.use(cookieParser())

// routes import

import router from "./routes/task.routes.js";


// route declaration

app.use("/api/v1",router)

export {app}
