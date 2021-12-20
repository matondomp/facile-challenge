"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var route_1 = require("./route/route");
require("@shared/injection");
require("@shared/infra/typeorm");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(route_1.route);
/* app.use((error:Error,request:Request,response: Response,next:NextFunction)=>{
    if( error instanceof HundleError){
      return response.status(error.statusCode).json({
            code:error.code,
            message:error.message
      })
    }
    
    return response.status(500).json({
            error:"error",
            message:"Internal server error"
    })
})  */
app.listen(process.env.APP_URL || "3334", function () {
    console.log("listining in 3334 🚀️🚀️🚀️🚀️🚀️");
});
