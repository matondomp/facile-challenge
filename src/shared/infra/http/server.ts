import "reflect-metadata"
import "express-async-errors"

import express, { 
    NextFunction,
    Response,
    Request
  } from 'express'

import { route } from './route/route'
import { HundleError } from '@shared/hundle_error/error'

import '@shared/injection'
import "@shared/infra/typeorm"

const app=express()
app.use(express.json())

app.use(route)

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
})   */

app.listen(process.env.APP_URL || "3334",()=>{
    console.log("listining in 3334 🚀️🚀️🚀️🚀️🚀️")
})