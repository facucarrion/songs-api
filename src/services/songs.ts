import { Song } from '../types'
import songData from './songs.json'

const songs = songData as Song[]

export const getSongs = (): Song[] => songs
export const addSong = (): void => undefined
