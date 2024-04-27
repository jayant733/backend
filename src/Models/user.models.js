import mongoose, { Schema } from 'mongoose';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



const userschema = new Schema(
    { username : {
        type : String,
        required : true,
        unique : true ,
        lowercase : true,
        trim : true,
        index : true  // index feild is given to make the field searching wo index se search krta hai by letter 
        
    },
     email :{
        type : String,
        required : true ,
        unique : true,
        lowercase : true ,
        trim : true
     },
     fullname : {  // this is basically a database design jo kuch bhi kar skte hai 
        type : String,
        required  :true,
        unique : false,
        index : true,
        trim : true,
     },
     avatar :{
        type : String ,// cloudaniry url ka use hum karega
        required : true, 
     },
     coverImage : {
        type : String,

     },
     watchhistory :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Video"
        }
     ],
     password : {
        type : String, // database ke andar jab bhi password rakho ko encrypt karke rakho
        required : [true, 'password is required'] // custom reference bhi dena

     },

     refreshtokem : { // inke baare me padna hia 
        type : String,
        
     }

    },{timestamps : true }
) // this is how you call your schema 


export const User = mongoose.model("User", userschema)

//async ena hoga kyunki waiting lagegi + next to dena hi hoga 
userschema.pre("save", async function (next) {
    if(!this.isModified("pasword")) return next() ;
    
    
    else{// ek method hai this.isModified hai toh uuse ke kardo 
    this.password = bcrypt.hash(this.password, 10)
    next()}
    // hashing requires 2 things kisko dena hai kisko karna hia aur kitne rounds tak akrna hai 10 ,8 ,default


    //custom methods to create how to hash a password
        //to create a method we user schema.methods 
    userschema.methods.ispasswordcorrect = async function(password){
       await  bcrypt.compare(password , this.password) //encrypted wala this hai
    }

    userschema.methods.generateaccesstoken = function (){
            //both are jwt tokens
            return jwt.sign( // agar  time lagega to aync await lagana padega waise to nhi lagana padega 
                {
                    _id : this._id,
                    email : this.email,
                    username : this.username,
                    fullname : this.fullname
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn : process.env.ACCESS_TOKEN_EXPRIY
                }
            )
    }
    userschema.methods.generaterefreshtoken = function (){
          //both are jwt tokens
          return jwt.sign( // agar  time lagega to aync await lagana padega waise to nhi lagana padega 
          {
              _id : this._id,
             
          },
          process.env.REFRESH_TOKEN_SECRET,
          {
              expiresIn : process.env.REFRESH_TOKEN_EXPIRY
          }
      )
        
    }

}) // konse eventpe hook lagana hia 
//how to encrypt a data 

//monggose se banta hai pre hook jo iss file ko password encrypt 

//jwt is a bearer token :- jo usko bear karta hai jo bhi token bhejega wo usse data de dega 

