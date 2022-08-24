import {IMovieItem} from '../../pages/home/models/type.model'

export type IValidate = {
  username: string
  password: string
  request_token: string
}

export type IRequestToken = {
  success: boolean
  expires_at: string
  request_token: string
}

export type ISession = {
  success: boolean,
  session_id: string,
  expires_at: string
}

export type IAvatar = {
  gravatar: {
    hash: string
  },
  tmdb: {
    avatar_path: string
  }
}

export type IAccount = {
  avatar: IAvatar,
  id: number,
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  include_adult: boolean,
  username: string
}

export type IMovieResponse = {
  page: 1
  results: IMovieItem[]
  total_pages: 34650
  total_results: 692988
}

export type IGenres = {
  id: number,
  name: string
}

export type IProductionCompany = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export type IProductionCountry = {
  iso_3166_1: string,
  name: string
}

export type ISpokenLanguage = {
  iso_639_1: string,
  name: string
}

export type IMovieDetail = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: null,
  budget: number,
  genres: IGenres[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: null,
  production_companies: IProductionCompany[],
  'production_countries': IProductionCountry[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ISpokenLanguage[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type IKnownFor = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type IPerson = {
  adult: boolean
  gender: number
  id: number
  known_for: IKnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export type IPopularPerson = {
  page: number
  results: IPerson[]
  total_results: number
  total_pages: number
}

export type IAuthorDetail = {
  name: string
  username: string
  avatar_path: string | null
  rating: number | null
}

export type IAuthor = {
  author: string
  author_details: IAuthorDetail
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export type IMovieReview = {
  id: number
  page: number
  results: IAuthor[]
  total_pages: number
  total_results: number
}