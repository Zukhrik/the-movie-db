import {createEffect, createEvent, createStore, sample} from 'effector'
import {getCastDetail, getCombinedCredits} from '../../../shared'
import {ICastDetail} from '../../../shared'

//effects
export const fetchCastDetailFx = createEffect({
  handler: getCastDetail
})

export const fetchCombinedCreditsFx = createEffect({
  handler: getCombinedCredits
})

//events
export const opened = createEvent<number>()
export const resetPage = createEvent()

// stores
export const $castDetail = createStore<null | ICastDetail>(null)
export const $combinedCredits = createStore<null | any>(null)

$castDetail.on(fetchCastDetailFx.doneData, (_, {data}) => data).reset(resetPage)
$combinedCredits.on(fetchCombinedCreditsFx.doneData, (_, {data}) => data)

sample({
  source: opened,
  target: [fetchCastDetailFx, fetchCombinedCreditsFx]
})