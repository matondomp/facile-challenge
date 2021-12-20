import { container } from 'tsyringe'

import { IencriptType } from '@modules/encript_words/Iencript_type/IencriptType'
import { EncriptRepository} from '@modules/encript_words/infra/typeorm/repository/encriptRepository'
import { EncriptWordsProvider } from '@shared/provider/encript_words_provider/implementation/encriptProvider'
import { IencriptTypeProvider } from '@shared/provider/encript_words_provider/model/IencriptTypeProvider'

import { DecriptWordsProvider } from '@shared/provider/decript_words_provider/implementation/decriptProvider'
import { IdecriptTypeProvider } from '@shared/provider/decript_words_provider/model/IdecriptTypeProvider'

container.registerSingleton<IencriptType>(
    'EncriptRepository',
    EncriptRepository
)


container.registerSingleton<IencriptTypeProvider>(
    'EncriptProvider',
    EncriptWordsProvider
)

container.registerSingleton<IdecriptTypeProvider>(
    'DecriptProvider',
    DecriptWordsProvider
)