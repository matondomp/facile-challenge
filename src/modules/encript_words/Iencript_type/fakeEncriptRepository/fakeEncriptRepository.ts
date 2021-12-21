

import { IencriptType } from '../IencriptType'
import { IencriptDTO } from '../../dto/encriptDto'
import { Encript } from '../../../encript_words/infra/typeorm/entities/encript'

export class FakeEncriptRepository implements IencriptType {
   private array:any[]=[]
   public async encriptWords({ name }:IencriptDTO):Promise<Encript>{
       let i=0
       const encript =new Encript()
       Object.assign(encript,{id:i+1,name})
       this.array.push(encript)
       return encript 
    }
  public async listDecriptWrods(id:number):Promise<Encript>{
        const encript =new Encript()
        Object.assign(encript,{id})
         const encripted= this.array.find(item=>item.id==id)
        return  encripted
  }
}