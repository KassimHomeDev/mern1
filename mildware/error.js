const ErrorResponses = require('../utils/errorResponse');

const errorHandler = (err, req, res, next)=>{
    let error = {...err};

    error.message =  err.message;

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponses(message, 400);
    }
    

    res.status(error.statusCode || 500).json({
        sucess: false,
        error: error.message || "server error"
    });
}

module.exports = errorHandler;