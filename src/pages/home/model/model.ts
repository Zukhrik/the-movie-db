import {getDiscoverMovie, getTopMovie} from '../../../shared'
import {createEffect, createEvent, createStore, sample} from 'effector'
import {IMovieResponse} from '../../../shared'

//effects
export const fetchGetMovieListFx = createEffect({
  handler: getDiscoverMovie
})
export const fetchTopMovieFx = createEffect({
  handler: getTopMovie
})

//events
export const homePageOpened = createEvent()

//stores
export const $discoverMovieList = createStore<null | IMovieResponse>(null)
export const $topMoviesList = createStore<null | IMovieResponse>(null)

$discoverMovieList.on(fetchGetMovieListFx.doneData, (_, {data}) => data)
$topMoviesList.on(fetchTopMovieFx.doneData, (_, {data}) => data)

sample({
  clock: homePageOpened,
  target: fetchGetMovieListFx
})