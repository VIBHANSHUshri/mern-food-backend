import express , {Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"
import myRestaurantRoute from "./routes/MyRestaurantRoutes"
import {v2 as cloudinary} from "cloudinary";
import restaurantRoute from "./routes/RestaurantRoute"
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() =>
    console.log("connected to database!"));

    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET,
    })
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

app.use("/api/my/restaurant" , myRestaurantRoute);

app.use("/api/restaurant" , restaurantRoute);
app.listen(4000,()=>{
    console.log("server started on localhost:4000");
});