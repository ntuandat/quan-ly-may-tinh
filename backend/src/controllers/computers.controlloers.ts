import { Request, Response, NextFunction } from 'express'
import Computer from '~/models/schemas/computers.schema'
import computersService from '~/services/computers.services'
import databaseService from '~/services/database.services'

// export const addController = (req: Request, res: Response) => {
//   const { name, thumbnail, price, describe, category, status, bought } = req.body
//   return res.status(200).json({
//     message: 'login success'
//   })
// }

export const addController = async (req: Request, res: Response) => {
  const { name, thumbnail, price, describe, category, status, bought } = req.body
  try {
    const result = await computersService.addComputer({ name, thumbnail, price, describe, category, status, bought })

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
    const result = await computersService.listComputer()

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
    const result = await computersService.detailComputer(id)

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
    const result = await computersService.deleteComputer(id)

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
  const { id, name, thumbnail, price, describe, category, status, bought } = req.body
  try {
    const result = await computersService.updateComputer(id, name, thumbnail, price, describe, category, status, bought)

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
