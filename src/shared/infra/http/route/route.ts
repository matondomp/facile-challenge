import { Router } from "express";
import { encriptRoute } from "@modules/encript_words/infra/http/route/route";


const route=Router()

route.use('/encripts',encriptRoute)
route.patch('/encripts/:id',encriptRoute)

export { route }