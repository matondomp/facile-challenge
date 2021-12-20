export interface IresponseHash{
    generateEncryptData:string
}

export interface IencriptTypeProvider{

    encriptWordsProvider(name: string):Promise<IresponseHash>
}