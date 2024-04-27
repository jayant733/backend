import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";


const connectDB = async() => {
    try { 
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        console.log (`\n mongodb connected !! DB host : ${connectioninstance.connection.host}`) // connection instances
        
    }catch (error){
        console.log("mongodb connection error", error);  // error sahi likhna hai for agar error aata hai to display hoga 
        process.exit(1)  // exit code padna hai to handle error 
    }
}


export default connectDB // default lagana zaroori ha i



//asynchronous code jabhi complete hota hai toh actualyy mai woh aapko ek promise return karke deta hai 
// this is a common thing in profeesion data base 