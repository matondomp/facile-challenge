
export class HundleError{

    code:number
    message:string

    constructor(messsage:string,code:number){
       this.code=code
       this.message=messsage
    }
}