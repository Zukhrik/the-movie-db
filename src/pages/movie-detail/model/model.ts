import {createEvent, createStore, sample} from 'effector'
import {createEffect} from 'effector/compat'
import {getMovieDetail} from '../../../shared/api/requests'
import {IMovieDetail} from '../../../shared/api/api.types'


//effects
export const fetchMovieDetailFx = createEffect({
  handler: getMovieDetail
})

//events
export const pageOpened = createEvent<number>()
export const resetMovieId = createEvent()

//stores
export const $movieDetail = createStore<null | IMovieDetail>(null)

$movieDetail.on(fetchMovieDetailFx.doneData, (_, {data}) => data).reset(resetMovieId)

sample({
  clock: pageOpened,
  target: fetchMovieDetailFx
})