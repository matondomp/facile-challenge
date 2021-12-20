

import { IdecriptTypeProvider } from '../../model/IdecriptTypeProvider'

export class FakeDecriptRepository implements IdecriptTypeProvider {

   public async decriptWordsProvider( encryptedData:string ):Promise<string>{
       return encryptedData
    }

}