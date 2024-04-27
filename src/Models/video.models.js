import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2" // PLUGIN KI TARAH INJECT HOTA HAI 

const videoschema = new Schema(
    { 
        videofile : {
            type: String,
            required : true, //video ke field me video chahiye

        },
        thumbnail : {
            type : String,
            required : true,
        },
        title : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        time : {
            type : Number,
            required : true, // cloudnary se upload karlega 
        },
        views : {
            type : Number,
            default : 0,

        },
        ispublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }

    }
,{timestamps : true})

videoschema.plugin(mongooseAggregatePaginate) //mongoose khud ke plugin bhi add krta hai 
//humne mongooase ka plugin add kiya hai bss

export const Video = mongoose.model("Video", videoschema)



//bcrypt js is optimized with javascript for the nodejs 
//bcrypt help us to hash your password and encrypt and decrypt your password 
// token and jwt easy path is jwt  :- secret is hai jo har tolen ko unique 