import express from 'express'
import usersRouter from '~/routes/users.routes'
import computerRouter from '~/routes/computers.routes'
import databaseService from './services/database.services'
const app = express()
const port = 2000
app.use(express.json())
app.use('/users', usersRouter)
app.use('/computers', computerRouter)
databaseService.connectDB()
app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})
