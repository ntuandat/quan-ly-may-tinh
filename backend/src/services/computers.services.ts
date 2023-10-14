import Computer from '~/models/schemas/computers.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'

class ComputersService {
  async addComputer(payload: {
    name: string
    thumbnail: string
    price: number
    describe: string
    category: string
    status: string
    bought: number
  }) {
    const { name, thumbnail, price, describe, category, status, bought } = payload
    const result = await databaseService.computers.insertOne(
      new Computer({
        name,
        thumbnail,
        price,
        describe,
        category,
        status,
        bought
      })
    )
    return result
  }

  async listComputer() {
    const result = await databaseService.computers.find({}).toArray()
    return result
  }
  async detailComputer(id: string) {
    const result = await databaseService.computers.findOne({ _id: new ObjectId(id) })
    return result
  }
  async deleteComputer(id: string) {
    const result = await databaseService.computers.findOneAndDelete({ _id: new ObjectId(id) })
    return result
  }
  async updateComputer(
    id: string,
    name: string,
    thumbnail: string,
    price: number,
    describe: string,
    category: string,
    status: string,
    bought: number
  ) {
    const result = await databaseService.computers.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          thumbnail,
          price,
          describe,
          category,
          status,
          bought
        }
      },
      { returnDocument: 'after' }
    )
    return result
  }
}

const computersService = new ComputersService()
export default computersService
