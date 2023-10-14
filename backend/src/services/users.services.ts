import User from '~/models/schemas/user.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'

class UsersService {
  async register(payload: {
    name: string
    dob: Date
    email: string
    password: string
    cccd: number
    phonenum: number
  }) {
    const { name, dob, email, password, cccd, phonenum } = payload
    const result = await databaseService.users.insertOne(
      new User({
        name,
        dob,
        email,
        password,
        cccd,
        phonenum
      })
    )
    return result
  }

  async listUser() {
    const result = await databaseService.users.find({}).toArray()
    return result
  }
  async detailUser(id: string) {
    const result = await databaseService.users.findOne({ _id: new ObjectId(id) })
    return result
  }
  async deleteUser(id: string) {
    const result = await databaseService.users.findOneAndDelete({ _id: new ObjectId(id) })
    return result
  }
  async updateUser(
    id: string,
    name: string,
    dob: Date,
    email: string,
    password: string,
    cccd: number,
    phonenum: number
  ) {
    const result = await databaseService.users.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          dob,
          email,
          password,
          cccd,
          phonenum
        }
      },
      { returnDocument: 'after' }
    )
    return result
  }
}

const usersService = new UsersService()
export default usersService
