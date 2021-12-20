import crypto from 'crypto'

import { IencriptTypeProvider, IresponseHash } from '../model/IencriptTypeProvider'

export class FakeEncriptWordsProvider implements IencriptTypeProvider {

   public async encriptWordsProvider(name:string):Promise<IresponseHash>{

       return { generateEncryptData:name } 
    }
    
   
}