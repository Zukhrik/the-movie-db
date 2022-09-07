import {createEffect, createEvent, createStore, sample} from 'effector'
import {getPopularPersons, IKnown, IResultResponse} from '../../../shared'


//effects
export const fetchTopCastsFx = createEffect({
  handler: getPopularPersons
})

//events
export const opened = createEvent()
export const closed = createEvent()

//stores
export const $castsStore = createStore<null | IResultResponse<IKnown[]>>(null)

$castsStore.on(fetchTopCastsFx.doneData, (_, {data}) => data)

sample({
  clock: opened,
  target: fetchTopCastsFx
})