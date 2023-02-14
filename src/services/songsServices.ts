import { SongModel } from '../models/SongModel'
import songData from './songs.json'
import { Song, SongWithoutId } from '../types'
import { Response } from 'express'

let songs: Song[] = songData as Song[]

export const getAllSongs = (res: Response): Song[] | undefined => {
  SongModel.find({})
    .then((songs) => res.send(songs))
    .catch((error) => error)

  return undefined
}

export const deleteSong = (id: number): Song[] | undefined => {
  const song = songData.find(song => song.id === id)
  if (song != null) {
    songs = songs.filter(song => song.id !== id)
    return songs
  } return undefined
}

export const addSong = (newSongData: SongWithoutId): Song | undefined => {
  const newSong = new SongModel({
    id: Math.max(...songs.map((song) => song.id)) + 1,
    ...newSongData
  })

  newSong.save()
    .then(() => newSong)
    .catch((error) => console.log(error))

  return undefined
}
