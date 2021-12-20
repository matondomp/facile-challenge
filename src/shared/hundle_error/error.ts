
export class HundleError{

    code:string
    message?:string
    statusCode:number

    constructor(messsage:string,statusCode:number,code:string){
       this.code=code
       this.message=messsage
       this.statusCode=statusCode
    }
}