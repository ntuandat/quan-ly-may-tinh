import { MongoClient, Db, Collection } from 'mongodb'
import User from '~/models/schemas/user.schema'
import Computer from '~/models/schemas/computers.schema'
const uri = 'mongodb://localhost:27017'

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('quanlymaytinh')
  }

  async connectDB() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }

  get users(): Collection<User> {
    return this.db.collection('users')
  }
  get computers(): Collection<Computer> {
    return this.db.collection('computers')
  }
}

const databaseService = new DatabaseService()
export default databaseService
