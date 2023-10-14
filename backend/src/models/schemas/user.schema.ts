import { ObjectId } from 'mongodb'

enum UserVerifyStatus {
  Unverified,
  Verified,
  Banned
}

interface UserType {
  _id?: ObjectId
  name: string
  dob: Date
  email: string
  password: string
  cccd: number
  phonenum: number
}

export default class User {
  _id?: ObjectId
  name: string
  dob: Date
  email: string
  password: string
  cccd: number
  phonenum: number

  constructor(user: UserType) {
    this._id = user._id
    this.name = user.name || ''
    this.email = user.email
    this.dob = user.dob || new Date()
    this.password = user.password || ''
    this.cccd = user.cccd || 0
    this.phonenum = user.phonenum || 1
  }
}
