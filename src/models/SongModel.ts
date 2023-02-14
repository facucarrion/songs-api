import { model, Schema } from 'mongoose'

const songSchema = new Schema({
  id: { type: Number, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  feat: [String],
  album: String
})

export const SongModel = model('Song', songSchema)
