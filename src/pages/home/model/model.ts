import {getDiscoverMovie, IMovieRecommend, IMovieResponse, postMultiSearch} from '../../../shared'
import {createEffect, createEvent, createStore, sample} from 'effector'
import { debounce } from 'patronum'

//effects
export const fetchGetMovieListFx = createEffect({
  handler: getDiscoverMovie
})

export const fetchMultiSearchFx = createEffect({
  handler: postMultiSearch
})

//events
export const homePageOpened = createEvent()
export const homePageClosed = createEvent()
export const searchChanges = createEvent<string>()
export const submited = createEvent()
export const clearSearchStore = createEvent()

//stores
export const $discoverMovieList = createStore<null | IMovieResponse>(null)
export const $inputStore = createStore<string>('')
export const $searchStore = createStore<null | IMovieRecommend>(null)

$discoverMovieList.on(fetchGetMovieListFx.doneData, (_, {data}) => data).reset()
$inputStore.on(searchChanges, (_, text) => text).reset(clearSearchStore)
$searchStore.on(fetchMultiSearchFx.doneData, (_, {data}) => data).reset(clearSearchStore)


const target = debounce({
  source: searchChanges,
  timeout: 2000
});


sample({
  clock: homePageOpened,
  target: fetchGetMovieListFx
})

sample({
  clock: homePageClosed,
  target: clearSearchStore
})


sample({
  source: {
    str: $inputStore
  },
  clock: [submited, target],
  filter: ({str}) => str.length > 1,
  fn: ({str}) => ({
    query: str
  }),
  target: fetchMultiSearchFx
})

sample({
  source: $inputStore,
  filter: (searchQuery) => searchQuery.length === 0,
  target: clearSearchStore
})