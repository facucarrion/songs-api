import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Fetching all songs')
})

router.post('/', (_req, res) => {
  res.send('Creating a song')
})

export default router
