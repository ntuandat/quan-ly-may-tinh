import { Router } from 'express'
import {
  loginController,
  registerController,
  listController,
  detailController,
  deleteController,
  updateController
} from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
usersRouter.post('/register', registerController)
usersRouter.get('/list', listController)
usersRouter.get('/detail/:id', detailController)
usersRouter.delete('/delete/:id', deleteController)
usersRouter.put('/update', updateController)

export default usersRouter
