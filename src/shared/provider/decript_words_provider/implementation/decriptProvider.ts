import CryptoJS from 'crypto-js'

import { IdecriptTypeProvider } from '../model/IdecriptTypeProvider'
import { sacurity } from '@config/sacurity'

export class DecriptWordsProvider implements IdecriptTypeProvider {

   public async decriptWordsProvider(encryptedData:string):Promise<string>{

      const { algorithm, initialHah } =sacurity

      let bytes  = CryptoJS.AES.decrypt(encryptedData,algorithm+initialHah);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      return originalText 
    }

}