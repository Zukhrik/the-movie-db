import {createEvent, createStore, sample} from 'effector'
import {createEffect} from 'effector/compat'
import {
  getMovieCredits,
  getMovieDetail,
  getMovieRecommend,
  getMovieVideos,
  IMovieCredit,
  IMovieDetail,
  IMovieRecommend,
  IMovieVideo
} from '../../../shared'


//effects
export const fetchMovieDetailFx = createEffect({
  handler: getMovieDetail
})

export const fetchMovieCreditsFx = createEffect({
  handler: getMovieCredits
})

export const fetchMovieRecommendFX = createEffect({
  handler: getMovieRecommend
})

export const fetchMovieVideosFx = createEffect({
  handler: getMovieVideos
})


//events
export const pageOpened = createEvent<number>()
export const resetMovie = createEvent()


//stores
export const $movieDetail = createStore<null | IMovieDetail>(null)
export const $movieCredits = createStore<null | IMovieCredit>(null)
export const $recommend = createStore<null | IMovieRecommend>(null)
export const $movieVideos = createStore<null | IMovieVideo>(null)


$movieDetail.on(fetchMovieDetailFx.doneData, (_, {data}) => data).reset(resetMovie)
$movieCredits.on(fetchMovieCreditsFx.doneData, (_, {data}) => data).reset(resetMovie)
$recommend.on(fetchMovieRecommendFX.doneData, (_, {data}) => data).reset(resetMovie)
$movieVideos.on(fetchMovieVideosFx.doneData, (_, {data}) => data).reset(resetMovie)

sample({
  clock: pageOpened,
  target: [fetchMovieDetailFx, fetchMovieCreditsFx, fetchMovieRecommendFX, fetchMovieVideosFx]
})