import { model, Schema } from 'mongoose'

const songSchema = new Schema({
  author: String,
  title: String,
  duration: Number,
  genre: String,
  feat: [String],
  album: String
})

export const Song = model('Song', songSchema)
