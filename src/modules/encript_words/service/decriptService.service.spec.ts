import crypto from 'crypto'

import { DecriptService } from './decriptService.service'
import { EncriptService } from './encriptService.service'
import { FakeEncriptRepository } from '../Iencript_type/fakeEncriptRepository/fakeEncriptRepository'
import { HundleError } from '../../../shared/hundle_error/error'
import { FakeEncriptWordsProvider } from '../../../shared/provider/encript_words_provider/fake/fakeEncriptProvider'
import { FakeDecriptRepository } from '../../../shared/provider/decript_words_provider/fake/fakeDecriptProvider/fakeDecriptProvider'

let decriptService:DecriptService
let fakeEncriptRepository:FakeEncriptRepository
let fakeEncriptWordsProvider:FakeEncriptWordsProvider
let fakeDecriptRepository:FakeDecriptRepository
let encriptService:EncriptService

describe("DecriptService",()=>{

    beforeEach(()=>{
        fakeEncriptRepository=new FakeEncriptRepository()
        fakeDecriptRepository=new FakeDecriptRepository()
        fakeEncriptWordsProvider=new FakeEncriptWordsProvider()
        encriptService=new EncriptService(fakeEncriptRepository,fakeEncriptWordsProvider)
        decriptService =new DecriptService(fakeEncriptRepository,fakeDecriptRepository)
    }
        
    )
    it("should be able to decript some privided words",async()=>{
        const encreptedWord=await encriptService.execute('Faz certo - que dá certo!')
        const decreptedWord=await fakeDecriptRepository.decriptWordsProvider('Faz certo - que dá certo!')
        await expect(decreptedWord).toBe(encreptedWord.name)
    })

    it("should be able to call decriptService ",async()=>{
        const encripted=await encriptService.execute('Faz certo - que dá certo!')
        console.log(encripted)
        const decreptedWord=jest.spyOn(fakeDecriptRepository,'decriptWordsProvider')
        await decriptService.execute(encripted.id)

        expect(decreptedWord).toBeCalled()
    })

    it("should be able to check if encript repository exists ",async()=>{
        
        const encreptedWord=await encriptService.execute('Faz certo - que dá certo!')
         expect(decriptService.execute(8778899)).rejects.toBeInstanceOf(HundleError)
    })
})