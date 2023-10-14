import { ObjectId } from 'mongodb'

enum UserVerifyStatus {
  Unverified,
  Verified,
  Banned
}

interface ComputerType {
  name: string
  thumbnail: string
  price: number
  describe: string
  category: string
  status: string
  bought: number
  _id?: ObjectId
}

export default class Computer {
  name: string
  thumbnail: string
  price!: number
  describe: string
  category: string
  status: string
  bought: number
  _id?: ObjectId

  constructor(computer: ComputerType) {
    this.name = computer.name || ''
    this.thumbnail = computer.thumbnail || ''
    this.describe = computer.describe || ''
    this.category = computer.category || ''
    this.status = computer.status || ''
    this.bought = computer.bought || 1
    this._id = computer._id
  }
}
