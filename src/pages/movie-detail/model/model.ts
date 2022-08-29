import {createEvent, createStore, sample} from 'effector'
import {createEffect} from 'effector/compat'
import {getMovieCredits, getMovieDetail} from '../../../shared/api/requests'
import {IMovieCredit, IMovieDetail} from '../../../shared'


//effects
export const fetchMovieDetailFx = createEffect({
  handler: getMovieDetail
})

export const fetchMovieCreditsFx = createEffect({
  handler: getMovieCredits
})


//events
export const pageOpened = createEvent<number>()
export const resetMovie = createEvent()

//stores
export const $movieDetail = createStore<null | IMovieDetail>(null)
export const $movieCredits = createStore<null | IMovieCredit>(null)

$movieDetail.on(fetchMovieDetailFx.doneData, (_, {data}) => data).reset(resetMovie)
$movieCredits.on(fetchMovieCreditsFx.doneData, (_, {data}) => data).reset(resetMovie)

sample({
  clock: pageOpened,
  target: [fetchMovieDetailFx, fetchMovieCreditsFx]
})