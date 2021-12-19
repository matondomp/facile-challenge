import { IencriptDTO} from '../dto/encriptDto'
import { IencriptType } from '../Iencript_type/IencriptType'
import { HundleError } from '../../../shared/hundle_error/error'
import { Encript } from '@modules/encript_words/infra/typeorm/entities/encript'

export class EncriptService{

    
    constructor(private repository:IencriptType){}

    public async  execute({ name }:IencriptDTO):Promise<Encript>{
        if(!name || name==''){
           throw new HundleError("E_VALIDATION_FAILURE",400)
        }
          const getRepository= await this.repository.encriptWords({ name })
         return getRepository
    }
}