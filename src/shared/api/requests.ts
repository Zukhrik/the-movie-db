import {AxiosPromise as R} from 'axios'
import {http} from './http'
import {
  IAccount,
  ICastDetail,
  IMovieCredit,
  IMovieDetail,
  IMovieResponse,
  IPopularPerson,
  IRequestToken,
  ISession
} from './api.types'

export const getCreateRequestToken = (): R<IRequestToken> => {
  return http({
    url: '/authentication/token/new'
  })
}

export const getAccount = (session: string): R<IAccount> => {
  return http({
    url: '/account',
    params: {
      session_id: session
    }
  })
}

export const createNewSession = (data: Pick<IRequestToken, 'request_token'>): R<Omit<ISession, 'expires_at'>> => {
  return http({
    method: 'post',
    url: '/authentication/session/new',
    data: data
  })
}

export const authLoginValidate = (data: any): R<IRequestToken> => {
  return http({
    method: 'post',
    url: '/authentication/token/validate_with_login',
    data: data
  })
}

export const getDiscoverMovie = (): R<IMovieResponse> => {
  return http({
    url: '/discover/movie'
  })
}

export const getTopMovie = (): R<IMovieResponse> => {
  return http({
    url: '/movie/top_rated'
  })
}

export const getMovieDetail = (movie_id: number): R<IMovieDetail> => {
  return http({
    url: `/movie/${movie_id}`
  })
}

export const getPopularPerson = (): R<IPopularPerson> => {
  return http({
    url: '/person/popular'
  })
}

export const getPopularMovies = (): R<IMovieResponse> => {
  return http({
    url: '/discover/movie?sort_by=popularity.desc'
  })
}

export const getMovieCredits = (movie_id: number): R<IMovieCredit> => {
  return http({
    url: `/movie/${movie_id}/credits`
  })
}

export const getCastDetail = (cast_id: number): R<ICastDetail> => {
  return http({
    url: `/person/${cast_id}`
  })
}

export const getCombinedCredits = (id: number) => {
  return http({
    url: `/person/${id}/combined_credits`
  })
}