import express from "express"
// ab express se ek app banega 
import cors from "cors"
import cookieParser from "cookie-parser"; // IMPORT HOGYA BUT CONFIGURE TO KARO SABSE PEHLE 

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

//for setting configuration and accepting json and setting up the middleware  //we also used body parser in early times ....? 
app.use(express.json({limit :"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"})) // taki url work karega to hi kaam karega 
//extended mai objects ke andar bhi object daal skte hai 
//these are all just configuration of express 
app.use(express.static("public")) // public :- static ek public folder create karta hai 


app.use(cookieParser()) // for performing the crud operation on cookies 



export {app} //app ko export karna hai  ......1) note space ka encoder hota hai %20