"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HundleError = void 0;
var HundleError = /** @class */ (function () {
    function HundleError(messsage, statusCode, code) {
        this.code = code;
        this.message = messsage;
        this.statusCode = statusCode;
    }
    return HundleError;
}());
exports.HundleError = HundleError;
