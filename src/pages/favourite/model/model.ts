import {createEffect, createEvent, createStore, sample} from 'effector'
import {getAccountFav, IMovieResponse} from '../../../shared'


//effects
export const fetchAccountFavFx = createEffect({
  handler: getAccountFav
})

//events
export const opened = createEvent<number>()
export const closed = createEvent()

//stores
export const $favourite = createStore<null | IMovieResponse>(null).reset(closed)

$favourite.on(fetchAccountFavFx.doneData, (_, {data}) => data)

sample({
  source: opened,
  target: fetchAccountFavFx
})