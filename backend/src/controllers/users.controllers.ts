import { Request, Response, NextFunction } from 'express'
import User from '~/models/schemas/user.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'nguyentuandat@gmail.com' && password === '123456') {
    return res.status(200).json({
      message: 'login success'
    })
  }

  return res.status(400).json({
    error: 'login failed'
  })
}

export const registerController = async (req: Request, res: Response) => {
  const { name, dob, email, password, cccd, phonenum } = req.body
  try {
    const result = await usersService.register({ name, dob, email, password, cccd, phonenum })

    console.log(result)
    return res.json({
      error: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
export const listController = async (req: Request, res: Response) => {
  try {
    const result = await usersService.listUser()

    console.log(result)
    return res.json({
      error: 'Register success',
      result: result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
export const detailController = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await usersService.detailUser(id)

    console.log('dat: ', id)
    return res.json({
      error: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
export const deleteController = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await usersService.deleteUser(id)

    console.log(result)
    return res.json({
      error: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
export const updateController = async (req: Request, res: Response) => {
  const { id, name, dob, email, password, cccd, phonenum } = req.body
  try {
    const result = await usersService.updateUser(id, name, dob, email, password, cccd, phonenum)

    console.log(result)
    return res.json({
      error: 'Register success',
      result
    })
  } catch (error) {
    console.log('err: ', error)
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
