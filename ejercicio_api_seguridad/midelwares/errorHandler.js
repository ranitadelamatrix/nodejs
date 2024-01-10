const erroHandler = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const responseError = {error: {message: err.message || "error del servidor",
code: err.code}};
res.status(statusCode).json(responseError)
}

module.exports = erroHandler