import {AxiosPromise as R} from 'axios'
import {http} from './http'
import {
  IAccount,
  IMovieDetail,
  IMovieResponse,
  IMovieReview,
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

export const getGuestSession = (): R<ISession> => {
  return http({
    url: '/authentication/guest_session/new'
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
    url: `/movie/${movie_id}`,
    params: {
      append_to_response: 'credits'
    }
  })
}

export const getMovieReview = (movie_id: number): R<IMovieReview> => {
  return http({
    url: `/movie/${movie_id}/reviews`
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