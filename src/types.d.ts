type Genre = 'reggaeton' | 'trap' | 'house'

export interface Song {
  id: number
  author: string
  title: string
  duration: number
  genre: Genre
  feat?: string[]
  album?: string
}

export type SongBasics = Pick<Song, 'id' | 'author' | 'title' | 'duration' | 'feat'>
export type SongWithoutId = Omit<Song, 'id'>
