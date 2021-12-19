import { getRepository,Repository } from 'typeorm'

import { IencriptType } from '@modules/encript_words/Iencript_type/IencriptType'
import { IencriptDTO } from '@modules/encript_words/dto/encriptDto'
import { Encript } from '@modules/encript_words/infra/typeorm/entities/encript'


export class EncriptRepository implements IencriptType{

    private encriptRepository:Repository<Encript>

    constructor(){
       this.encriptRepository=getRepository(Encript)
    }
    
  public async encriptWords({ name }:IencriptDTO):Promise<Encript>{
       const savedData=this.encriptRepository.create({name})
       await this.encriptRepository.save(savedData)
        
       return savedData
   }
}