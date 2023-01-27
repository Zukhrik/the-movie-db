import {IMovieItem} from '../../pages/home/model/type.model'

export interface IValidate {
  username: string
  password: string
  request_token: string
}

export interface IRequestToken {
  success: boolean
  expires_at: string
  request_token: string
}

export interface ISession {
  success: boolean,
  session_id: string,
  expires_at: string
}

export interface IAvatar {
  gravatar: {
    hash: string
  },
  tmdb: {
    avatar_path: string
  }
}

export interface IAccount {
  avatar: IAvatar,
  id: number,
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  include_adult: boolean,
  username: string
}

export interface IResultResponse<R> {
  page: number
  results: R
  total_page: number
  total_results: number
}

export interface IKnown {
  adult: boolean
  gender: number
  id: number
  known_for: IKnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface IMovieResponse {
  page: number
  results: IMovieItem[]
  total_pages: number
  total_results: number
}

export interface IGenres {
  id: number,
  name: string
}

export interface IProductionCompany {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export interface IProductionCountry {
  iso_3166_1: string,
  name: string
}

export interface ISpokenLanguage {
  iso_639_1: string,
  name: string
}

export interface IMovieDetail {
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

export interface IKnownFor {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type?: string
  name?: string
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

export interface IPerson {
  adult: boolean
  gender: number
  id: number
  known_for: IKnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface IMovieRecommend {
  page: number
  results: IKnownFor[]
  total_results: number
  total_pages: number
}

export interface IPopularPerson {
  page: number
  results: IPerson[]
  total_results: number
  total_pages: number
}

export interface IAuthorDetail {
  name: string
  username: string
  avatar_path: string | null
  rating: number | null
}

export interface IAuthor {
  author: string
  author_details: IAuthorDetail
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface IMovieReview {
  id: number
  page: number
  results: IAuthor[]
  total_pages: number
  total_results: number
}

export interface ICast {
  adult: boolean
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

export interface ICrew {
  adult: boolean
  credit_id: string
  department: string
  gender: number
  id: number
  job: string
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: any
}

export interface IMovieCredit {
  cast: ICast[]
  crew: ICrew[]
  id: number
}

export interface ICastDetail {
  adult: boolean
  also_known_as: []
  biography: string
  birthday: string
  deathday: string | null
  gender: number
  homepage: null | any
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}

export interface ICastImgItem {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1: number
  vote_average: number
  vote_count: number
  width: number
}

export interface ICastImages {
  id: number,
  profiles: ICastImgItem[]
}

export interface ICastTargetImages {
  aspect_ratio: number
  file_path: string
  height: number
  id: string
  image_type: string
  iso_639_1: string
  media: IKnownFor
  media_type: string
  vote_average: number
  vote_count: number
  width: number
}

export interface ITargetItem {
  aspect_ratio: number
  file_path: string
  height: number
  id: string
  image_type: string
  iso_639_1: string
  media: IKnownFor
  media_type: string
  vote_average: number
  vote_count: number
  width: number
}

export interface ITargetImages {
  id: number
  page: number
  results: ITargetItem[]
  total_pages: number
  total_results: number
}

export interface IVideo {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  official: boolean
  published_at: string
  site: string
  size: number
  type: string
}

export interface IMovieVideo {
  id: number
  results: IVideo[]
}

export interface IParams {
  query?: string
  page?: number
  include_adult?: boolean
  region?: string
  time_window?: string
  media_type?: string
}

export interface INowPlaying {
  dates: {maximum: string, minimum: string}
  page: number
  results: []
  total_pages: number
  total_results: number
}