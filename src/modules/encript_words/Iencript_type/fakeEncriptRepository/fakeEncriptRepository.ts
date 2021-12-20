

import { IencriptType } from '../IencriptType'
import { IencriptDTO } from '../../dto/encriptDto'
import { Encript } from '../../../encript_words/infra/typeorm/entities/encript'

export class FakeEncriptRepository implements IencriptType {

   public async encriptWords({ name }:IencriptDTO):Promise<Encript>{
       const encript =new Encript()
       Object.assign(encript,{name})
       return encript 
    }
  public async listDecriptWrods(id:number):Promise<Encript>{
        const encript =new Encript()
        Object.assign(encript,{id})
        return encript 
  }
}