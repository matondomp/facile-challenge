

import { IdecriptType } from '../../model/IdecriptType'

export class FakeDecriptRepository implements IdecriptType {

   public async decriptWords():Promise<string>{
       return 'Faz certo - que dá certo!' 
    }

}