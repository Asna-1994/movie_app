"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'CustomError';
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            statusCode: err.statusCode,
        });
    }
    return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        statusCode: 500,
    });
};
exports.errorMiddleware = errorMiddleware;
