import { IencriptDTO } from '../dto/encriptDto'
import { Encript } from '@modules/encript_words/infra/typeorm/entities/encript'

export interface IencriptType{
   encriptWords({ name }:IencriptDTO):Promise<Encript>
}