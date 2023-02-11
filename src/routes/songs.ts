import express from 'express'
import * as songsServices from '../services/songsServices'
import toNewSong from '../postUtilities'

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

router.delete('/:id', (req, res) => {
  const deletedSong = songsServices.deleteSong(+req.params.id)
  if (deletedSong != null) {
    res.send(deletedSong)
  } else {
    res.status(404).send('Song not found')
  }
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
