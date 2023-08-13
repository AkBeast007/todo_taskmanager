import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


export const app = express();

config({
   path: "./data/config.env",
});

const corsOptions = {
   origin: 'http://127.0.0.1:5173',
   methods: ['GET','POST','PUT','DELETE'],
   credentials: true, // Allow cookies and authentication headers to be sent
 };

//using middleware to access user data from body
app.use(express.json());//should be used before userRouter to avoid any problem
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);


app.get("/",(req,res)=>{
   res.send("Nice working");
});
