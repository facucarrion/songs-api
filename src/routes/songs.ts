import express from 'express'
import * as songsServices from '../services/songsServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(songsServices.getSongBasics())
})

router.get('/:id', (req, res) => {
  const song = songsServices.findSongById(+req.params.id)
  res.send(song)
})

router.post('/', (_req, res) => {
  res.send('Creating a song')
})

export default router
