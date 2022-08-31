import {createEffect, createEvent, createStore, sample} from 'effector'
import {getAccountLists} from '../../../shared'


//effects
export const fetchAccountListsFx = createEffect({
  handler: getAccountLists
})

//events
export const opened = createEvent<number>()
export const closed = createEvent()

//stores
export const $accListStore = createStore<null | any>(null)

$accListStore.on(fetchAccountListsFx.doneData, (_, {data}) => data).reset(closed)

sample({
  source: opened,
  target: fetchAccountListsFx
})

$accListStore.watch(s => console.log(s))