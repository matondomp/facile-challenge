

import { IdecriptType } from '../model/IdecriptType'
import { HundleError } from '../../../hundle_error/error'

export class DecriptService{

    
    constructor(private repository:IdecriptType){}

    public async  execute():Promise<string>{
       
         const getRepository= await this.repository.decriptWords()
         return getRepository
    }
}