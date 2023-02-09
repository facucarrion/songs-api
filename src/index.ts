import express from 'express'
import songRouter from './routes/songs'
import connectToDatabase from './db/connection'

const app = express()
app.use(express.json()) // Middleware -> req.body to JSON

connectToDatabase()
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error.message))

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Someone pinged me!')
  res.send('pong')
})

app.use('/api/songs', songRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
