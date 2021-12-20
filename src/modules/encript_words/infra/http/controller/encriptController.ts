import { Request,Response } from 'express'
import { container } from 'tsyringe'

import { EncriptService } from '@modules/encript_words/service/encriptService.service'
import { DecriptService } from '@modules/encript_words/service/decriptService.service'

export class EncriptController{
  
    public async create(request:Request, response:Response):Promise<any>{
           const { name } =request.body
         
           const getEncriptServiceInstance=container.resolve(EncriptService)
           const encriptedWord = await getEncriptServiceInstance.execute(name)

           delete encriptedWord.created_at
           delete encriptedWord.updated_at

           return response.json({encriptedWord})
    }
    
   public async listDecriptedWord(request:Request, response:Response):Promise<Response>{
        const {id }=request.params
        const getDecriptedServiceInstance=container.resolve(DecriptService)
        const decripted=await getDecriptedServiceInstance.execute(Number(id))
        return response.json({decripted})
    }
}