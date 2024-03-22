import express , {Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() =>
    console.log("connected to database!"));
const app = express();
//middleware use here
app.use(express.json())
app.use(cors());

app.get("/health" , async (req : Request , res : Response)=>{
    res.send({message : "health ok !"});
})

app.use("/api/my/user" , myUserRoute)


app.get("/" , async (req:Request,res:Response) =>{
     res.json({message:"Hello!"});
});

app.listen(4000,()=>{
    console.log("server started on localhost:4000");
});