
import { DecriptService  } from './decriptService.service'
import { FakeDecriptRepository } from '../fake/fakeDecriptRepository/fakeDecriptRepository'
import { HundleError } from '../../../hundle_error/error'

let decriptService:DecriptService
let fakeDecriptRepository:FakeDecriptRepository

describe("DecriptService",()=>{

    beforeEach(()=>{
         fakeDecriptRepository=new FakeDecriptRepository()
         decriptService =new DecriptService(fakeDecriptRepository)
    }
        
    )

    it("should be able to call encriptService",async()=>{

            const decriptWords=jest.spyOn(fakeDecriptRepository,'decriptWords')
            await decriptService.execute()

          expect(decriptWords).toBeCalled()
    })

    it("should be able to decript some words",async()=>{
       const decreptedWord=await decriptService.execute()
        await expect(decreptedWord).toBe('Faz certo - que dá certo!')
    })
})