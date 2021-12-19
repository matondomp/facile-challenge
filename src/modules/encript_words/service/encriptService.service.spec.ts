
import { EncriptService } from './encriptService.service'
import { FakeEncriptRepository } from '../Iencript_type/fakeEncriptRepository/fakeEncriptRepository'
import { HundleError } from '../../../shared/hundle_error/error'

let encriptService:EncriptService
let fakeEncriptRepository:FakeEncriptRepository

describe("EncriptService",()=>{

    beforeEach(()=>{
        fakeEncriptRepository=new FakeEncriptRepository()
        encriptService =new EncriptService(fakeEncriptRepository)
    }
        
    )

    it("should be able to call encriptService",async()=>{

            const encriptWords=jest.spyOn(fakeEncriptRepository,'encriptWords')
            await encriptService.execute({name:'Faz certo - que dá certo!'})

          expect(encriptWords).toBeCalled()
    })

    it("should be able to check if name is not empty",async()=>{

        await expect(encriptService.execute({name:''})).rejects.toBeInstanceOf(HundleError)
    })

    it("should be able to encript some privided words",async()=>{
       const encreptedWord=await encriptService.execute({name:'Faz certo - que dá certo!'})
        await expect(encreptedWord).toHaveProperty('name')
    })
})