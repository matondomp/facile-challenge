import { Router } from "express";
import { EncriptController } from "../controller/encriptController";

const encriptController=new EncriptController()

const encriptRoute=Router()

encriptRoute.post('/',encriptController.create)
encriptRoute.patch('/:id',encriptController.listDecriptedWord)


export { encriptRoute }