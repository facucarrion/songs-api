import mongoose from 'mongoose'
const { Schema, model } = mongoose

const URI = 'mongodb://127.0.0.1:27017/testDatabase'

mongoose.set('strictQuery', true)
mongoose.set('autoIndex', true)
mongoose.connect(URI)
  .then(() => console.log('DB is connected'))
  .catch(err => console.error('Error connecting to DB', err))

const songSchema = new Schema({
  author: String,
  title: String,
  duration: Number,
  genre: String,
  feat: [String],
  album: String
})

const Song = model('Song', songSchema)

const song = new Song({
  author: 'Talento de Barrio',
  title: 'La Cama',
  duration: 3.5,
  genre: 'Reggaeton'
})

song.save()
  .then(obj => {
    console.log(obj)
    mongoose.connection.close()
      .then(() => console.log('DB connection closed'))
      .catch(err => console.error('Error closing DB connection', err))
  })
  .catch(err => console.error('Error saving song', err))
