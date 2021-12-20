import "reflect-metadata"

import { inject, injectable } from 'tsyringe'

import { IencriptType } from '../Iencript_type/IencriptType'
import { HundleError } from '../../../shared/hundle_error/error'
import { Encript } from '@modules/encript_words/infra/typeorm/entities/encript'
import { IdecriptTypeProvider } from '@shared/provider/decript_words_provider/model/IdecriptTypeProvider'

@injectable()
export class DecriptService{

    
    constructor(
        @inject("EncriptRepository")
        private repository:IencriptType,

        @inject("DecriptProvider")
        private encriptProvider:IdecriptTypeProvider
        ){}

    public async  execute(id:number):Promise<string>{

           const getRepository= await this.repository.listDecriptWrods(id)
            if(!getRepository){
                throw new HundleError("this word doesn´t exist!",400,"")
            }
            const encriptedHashed= await this.encriptProvider.decriptWordsProvider(getRepository.name)
           
         return encriptedHashed
    }
}