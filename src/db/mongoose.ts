import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', true)
mongoose.set('autoIndex', true)
mongoose.connect(process.env.DB_URI ?? 'https://localhost:27017')
  .then(() => console.log('DB is connected'))
  .catch(err => console.error('Error connecting to DB', err))
