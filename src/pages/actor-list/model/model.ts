import {createEffect, createEvent, createStore, sample} from 'effector'
import {getPopularPerson} from '../../../shared/api/requests'
import {IPopularPerson} from '../../../shared/api/api.types'
//effects
export const fetchPopularActorsFx = createEffect({
  handler: getPopularPerson
})

//events
export const opened = createEvent()

//stores
export const $popularActors = createStore<null | IPopularPerson>(null)

$popularActors.on(fetchPopularActorsFx.doneData, (_, {data}) => data)

sample({
  clock: opened,
  target: fetchPopularActorsFx
})