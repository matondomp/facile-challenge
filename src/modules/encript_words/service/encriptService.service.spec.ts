import crypto from 'crypto'

import { EncriptService } from './encriptService.service'
import { FakeEncriptRepository } from '../Iencript_type/fakeEncriptRepository/fakeEncriptRepository'
import { HundleError } from '../../../shared/hundle_error/error'
import { FakeEncriptWordsProvider } from '../../../shared/provider/encript_words_provider/fake/fakeEncriptProvider'

let encriptService:EncriptService
let fakeEncriptRepository:FakeEncriptRepository
let fakeEncriptWordsProvider:FakeEncriptWordsProvider

describe("EncriptService",()=>{

    beforeEach(()=>{
        fakeEncriptRepository=new FakeEncriptRepository()
        fakeEncriptWordsProvider=new FakeEncriptWordsProvider()
        encriptService =new EncriptService(fakeEncriptRepository,fakeEncriptWordsProvider)
    }
        
    )
    const sacurityKeyHash=crypto.randomBytes(32)
    it("should be able to call encriptService",async()=>{

            const encriptWords=jest.spyOn(fakeEncriptRepository,'encriptWords')
            await encriptService.execute('Faz certo - que dá certo!')

          expect(encriptWords).toBeCalled()
    })

    it("should be able to check if name is not empty",async()=>{

        await expect(encriptService.execute('')).rejects.toBeInstanceOf(HundleError)
    })

    it("should be able to encript some privided words",async()=>{
       const encreptedWord=await encriptService.execute('Faz certo - que dá certo!')
        await expect(encreptedWord).toHaveProperty('name')
    })


})