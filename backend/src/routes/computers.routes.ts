import { Router } from 'express'
import {
  addController,
  // registerController,
  listController,
  detailController,
  deleteController,
  updateController
} from '~/controllers/computers.controlloers'

const computerRouter = Router()

computerRouter.post('/add', addController)
// computerRouter.post('/register', registerController)
computerRouter.get('/list', listController)
computerRouter.get('/detail/:id', detailController)
computerRouter.delete('/delete/:id', deleteController)
computerRouter.put('/update', updateController)

export default computerRouter
