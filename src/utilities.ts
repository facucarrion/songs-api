import { SongWithoutId } from './types'
import { Genre } from './enums'

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isGenre = (genre: any): boolean => {
  return Object.values(Genre).includes(genre)
}

const parseAuthor = (authorFromRequest: any): string => {
  if (!isString(authorFromRequest)) throw new Error('Incorrect or missing author')
  return authorFromRequest
}

const parseTitle = (titleFromRequest: any): string => {
  if (!isString(titleFromRequest)) throw new Error('Incorrect or missing title')
  return titleFromRequest
}

const parseDuration = (durationFromRequest: any): number => {
  if (durationFromRequest instanceof Number || typeof durationFromRequest !== 'number') throw new Error('Incorrect or missing url')
  return durationFromRequest
}

const parseGenre = (genreFromRequest: any): Genre => {
  if (!isGenre(genreFromRequest)) throw new Error('Incorrect or missing genre')
  return genreFromRequest
}

const parseFeat = (featFromRequest: any): string[] | undefined => {
  if (featFromRequest === undefined) return
  else if (!Array.isArray(featFromRequest) || featFromRequest.some((feat: any) => !isString(feat))) throw new Error('Incorrect or missing feat')
  return featFromRequest
}

const parseAlbum = (albumFromRequest: any): string | undefined => {
  if (albumFromRequest === undefined) return
  else if (!isString(albumFromRequest)) throw new Error('Incorrect or missing album')
  return albumFromRequest
}

const toNewSong = (reqBody: any): SongWithoutId => {
  const newSong: SongWithoutId = {
    author: parseAuthor(reqBody.author),
    title: parseTitle(reqBody.title),
    duration: parseDuration(reqBody.duration),
    genre: parseGenre(reqBody.genre),
    feat: parseFeat(reqBody.feat),
    album: parseAlbum(reqBody.album)
  }
  return newSong
}

export default toNewSong
