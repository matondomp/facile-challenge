
import CryptoJS from 'crypto-js'

import { sacurity } from '@config/sacurity'
import { IencriptTypeProvider,IresponseHash } from '../model/IencriptTypeProvider'


export class EncriptWordsProvider implements IencriptTypeProvider {

   public async encriptWordsProvider(name:string):Promise<IresponseHash>{

        const { algorithm, initialHah } =sacurity

        const ciphertext = CryptoJS.AES.encrypt(name,algorithm+initialHah ).toString();

       return { generateEncryptData:ciphertext.toString() }
    }

}