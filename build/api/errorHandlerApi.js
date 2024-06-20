"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerApi = void 0;
function errorHandlerApi(err, req, res, next) {
    console.error("API error handler foi executada: ".concat(err));
    res.status(500).json({
        errorCode: "ERR-001",
        message: "Erro interno do servidor.",
    });
}
exports.errorHandlerApi = errorHandlerApi;
