const asynchandler = (requestHandler) => {
    (req ,res ,next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => 
            next(error))
    }
}  //this is the other method and the work created in utility and just export it to the index.js 

export {asynchandler}



//const asynchandler = ( ) => {}
//const asynchandler = (fn) => () => {}
//const asynchandler = (fn1) => (fn2) => ()=> {}

/*const asynchandler2 = (fn)=> async (req , res , next) => {
    try { 
        await fn(req,res, next)   // this is the try catch method 
    }catch (error){
        res.status(error.code || 500).json({
            success :false,
            message : error.message
        })
    }

}  // higher order function */