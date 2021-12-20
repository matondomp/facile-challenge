import "reflect-metadata"

import { inject, injectable } from 'tsyringe'

import { IencriptDTO} from '../dto/encriptDto'
import { IencriptType } from '../Iencript_type/IencriptType'
import { HundleError } from '../../../shared/hundle_error/error'
import { Encript } from '@modules/encript_words/infra/typeorm/entities/encript'
import { IencriptTypeProvider } from '@shared/provider/encript_words_provider/model/IencriptTypeProvider'

@injectable()
export class EncriptService{

    
    constructor(
        @inject("EncriptRepository")
        private repository:IencriptType,

        @inject("EncriptProvider")
        private encriptProvider:IencriptTypeProvider
        ){}

    public async  execute(name:string):Promise<Encript>{
    
            if(!name || name==''){
            throw new HundleError("O campo \"name\" é obrigatório",400,"E_VALIDATION_FAILURE")
            }
            const encriptedHashed= await this.encriptProvider.encriptWordsProvider(name)

            if(!encriptedHashed){
                throw new HundleError("O campo \"name\" é obrigatório",400,"E_VALIDATION_FAILURE")
            }
            const getRepository= await this.repository.encriptWords({ 
                 name:encriptedHashed.generateEncryptData
                })
         return getRepository
    }
}