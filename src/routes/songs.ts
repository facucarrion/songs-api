import express from 'express'
import * as songsServices from '../services/songsServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(songsServices.getAllSongs())
})

router.get('/basics', (_req, res) => {
  res.send(songsServices.getSongBasics())
})

router.get('/:id', (req, res) => {
  const song = songsServices.findSongById(+req.params.id)
  res.send(song)
})

router.post('/', (req, res) => {
  const { id, ...otherData } = req.body
  const newSong = songsServices.addSong(otherData)
  res.send(newSong)
})

export default router
