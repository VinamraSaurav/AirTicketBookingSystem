const StatusCodes = require('http-status-codes')
class ServiceError extends Error{
    constructor(
        name = "ServiceError",
        message = "Something went wrong in the Service layer",
        explation = "Service layer error",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();
        this.name = name;
        this.message = message;
        this.explation = explation;
        this.statusCode = statusCode;
    }

}

module.exports = ServiceError;