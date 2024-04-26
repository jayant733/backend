class apiresponse {
    constructor(statusCode , data , message = "success"){
        this.statusCode  = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400// status code hamesha less than 400 


        // standard practise karna hai 
    }
}