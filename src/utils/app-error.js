const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
    constructor(
        name,
        explation,
        message,
        statusCodes
    ){
        super();
        this.name = name;
        this.message = message;
        this.explation = explation;
        this.statusCodes = statusCodes;
    }
}

module.exports = AppError;

