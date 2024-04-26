//require (`dotenv`).config({path : './env'}) // ye code ki consistency ko kharab karta hai kyunki 
// ek module js ka code hai common js ka hai 



// monogdb connnected !! db host - rdotenv / config --experimental-json hote hai

// nodemon kuch nhi hai jaise hi aapki file save hogi y aapke server ko restart kardega 
//dev dependicies hoti hai jo devlopment ke time hum use karte hai 
// produciton me dev dependicies ka koi use nhi hai ......cd

// ek aur extension ka hota hai vscode mai that is === preetier 
import dotenv from "dotenv"

import connectDB from "./DB/index.js"

dotenv.config({
    path : './env'  // yaha pe module js se karne mai require path daalna padta hai 
}) // ye kaam hogya 

connectDB() // this was method 2 jaha pe ek nayi database file banake usko fir import kara liya 



















/*
import express from "express"
const app = express() // giving 

databasee ko connect karnwe ke liye mongoose se karma hoga 

 database mai error boht aate hai try catch me wrap then resolve reject se kar skte ho 
 database is always in other continent (time lagega aync await : - asynchrounously work karega )

THIS WAS THE FIRST APPROACH OF THE WORK 
//function async connectDB (){
//funciton banake workd karo
//}
//connectDB()


// database se baat karte samay hamesha try catch me work  karna hi hoga 
(async ()=> {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("erro", error);
            throw error 
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error){
        console.log("ERROR", error)
        throw error
    }

})()  //function banake directly execute method in javascript // callback function bana diya */