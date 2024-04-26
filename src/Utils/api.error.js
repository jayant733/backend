class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null // this .data field padna hai 
        this.message  = message
        this.success = false
        this.error = error //// over writing the errors in the error part for helping in the production part
        

        if(stack){
            this.stack = statck
        }else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}