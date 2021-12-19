import { container } from 'tsyringe'
import { Request,Response } from 'express'

import { EncriptService } from '@modules/encript_words/service/encriptService.service'

export class EncriptController{
  
    public async create(request:Request, response:Response):Promise<Response>{
           const { name } =request.body
           const getEncriptServiceInstance=container.resolve(EncriptService)
           const encriptedWord = await getEncriptServiceInstance.execute(name)

           delete encriptedWord.created_at
           delete encriptedWord.updated_at

           return response.json(encriptedWord)
    }
     
}