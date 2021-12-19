import { container } from 'tsyringe'

import { IencriptType } from '@modules/encript_words/Iencript_type/IencriptType'
import { EncriptRepository} from '@modules/encript_words/infra/typeorm/repository/encriptRepository'

container.registerSingleton<IencriptType>(
    'EncriptRepository',
    EncriptRepository
)