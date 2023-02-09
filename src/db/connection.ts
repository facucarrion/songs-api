import mongoose from 'mongoose'

const URI = 'mongodb://127.0.0.1:27017/testDatabase'

const connectToDatabase = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(URI)
  } catch (error: any) {
    throw new Error(error)
  }
  return undefined
}

export default connectToDatabase
