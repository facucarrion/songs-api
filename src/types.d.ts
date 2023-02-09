type Genre = 'reggaeton' | 'trap' | 'house'

export interface Song {
  id: number
  author: string
  title: string
  duration: number
  genre: Genre
  feat: string[]
  album: string
}
