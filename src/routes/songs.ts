import express from 'express'
import * as songsServices from '../services/songsServices'
import toNewSong from '../utilities'

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
  try {
    const newSong = toNewSong(req.body)
    const addedSong = songsServices.addSong(newSong)
    res.send(addedSong)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
