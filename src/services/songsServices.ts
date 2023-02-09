import songData from './songs.json'
import { Song, SongBasics, SongWithoutId } from '../types'

const songs: Song[] = songData as Song[]

export const getAllSongs = (): Song[] => songs

export const findSongById = (id: number): SongBasics | undefined => {
  const song = songs.find((song) => song.id === id)
  if (song != null) {
    const { genre, album, ...basics } = song
    return { ...basics }
  }
  return undefined
}

export const getSongBasics = (): SongBasics[] => (
  songs.map(({ id, title, author, duration, feat }) => ({ id, title, author, duration, feat }))
)

export const addSong = (newSongData: SongWithoutId): Song => {
  const newSong: Song = {
    id: Math.max(...songs.map((song) => song.id)) + 1,
    ...newSongData
  }

  songs.push(newSong)
  return newSong
}
