import {
  getDiscoverMovie,
  getMovieSearch,
  getNowPlaying,
  getTrends,
  IMovieRecommend,
  IMovieResponse
} from '../../../shared'
import {createEffect, createEvent, createStore, sample} from 'effector'
import {debounce} from 'patronum'

//effects
export const fetchGetMovieListFx = createEffect({
  handler: getDiscoverMovie
})

export const fetchMovieSearchFx = createEffect({
  handler: getMovieSearch
})

export const fetchTrendMoviesFx = createEffect({
  handler: getTrends
})

export const fetchNowPlayingFx = createEffect({
  handler: getNowPlaying
})

//events
export const homePageOpened = createEvent()
export const homePageClosed = createEvent()
export const searchChanges = createEvent<string>()
export const submited = createEvent()
export const clearSearchStore = createEvent()
export const timeWindow = createEvent<'day' | 'week'>()

//stores
export const $discoverMovieList = createStore<null | IMovieResponse>(null)
export const $inputStore = createStore<string>('')
export const $searchStore = createStore<null | IMovieRecommend>(null)
export const $trendsStore = createStore<null | IMovieRecommend>(null)
export const $trendTimeWindow = createStore<'day' | 'week'>('day')
export const $nowPlayingStore = createStore<null | IMovieRecommend>(null)

$discoverMovieList.on(fetchGetMovieListFx.doneData, (_, {data}) => data).reset()
$inputStore.on(searchChanges, (_, text) => text).reset(clearSearchStore)
$searchStore.on(fetchMovieSearchFx.doneData, (_, {data}) => data).reset(clearSearchStore)
$trendsStore.on(fetchTrendMoviesFx.doneData, (_, {data}) => data)
$trendTimeWindow.on(timeWindow, (_, time) => time)
$nowPlayingStore.on(fetchNowPlayingFx.doneData, (_, {data}) => data)

const target = debounce({
  source: searchChanges,
  timeout: 1000
})

sample({
  clock: homePageClosed,
  target: clearSearchStore
})

sample({
  source: $inputStore,
  clock: [submited, target],
  filter: (str) => str.length > 1,
  fn: (str) => ({
    query: str
  }),
  target: fetchMovieSearchFx
})

sample({
  source: $inputStore,
  filter: (searchQuery) => searchQuery.length === 0,
  target: clearSearchStore
})

sample({
  source: $trendTimeWindow,
  clock: [homePageOpened, timeWindow],
  fn: (timeWind) => ({
    time_window: timeWind
  }),
  target: [fetchGetMovieListFx, fetchTrendMoviesFx, fetchNowPlayingFx]
})