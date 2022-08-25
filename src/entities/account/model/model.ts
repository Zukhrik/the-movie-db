import {createEffect, createEvent, createStore, guard, sample} from 'effector'
import {createNewSession, getAccount, getCreateRequestToken} from '../../../shared/api/requests'
import {IAccount} from '../../../shared/api/api.types'
import {history} from '../../../custom-history'
import {forward} from 'effector/compat'

//effects
export const fetchCreateRequestTokenFx = createEffect({
  handler: getCreateRequestToken
})

export const fetchCreateSessionFx = createEffect({
  handler: createNewSession
})

export const fetchAccountFx = createEffect({
  handler: getAccount
})

export const saveSessionIdFx = createEffect((session: string) => {
  localStorage.setItem('session-id', session)
})

const historyGoHomeFx = createEffect(() => {
  history.push('/')
})

//events
export const createSessionRequested = createEvent()
export const accountReq = createEvent()

//stores
export const $requestToken = createStore<string | null>(localStorage.getItem('tmdb-token'))
export const $sessionId = createStore<null | string>(localStorage.getItem('session-id'))
export const $account = createStore<null | IAccount>(null)

$requestToken.on(fetchCreateRequestTokenFx.doneData, (_, {data}) => data.request_token)
$sessionId.on(fetchCreateSessionFx.doneData, (_, {data}) => data.session_id)
$account.on(fetchAccountFx.doneData, (_, {data}) => data)

sample({
  source: guard({
    source: $requestToken,
    clock: createSessionRequested,
    filter: (requestToken): requestToken is string => requestToken !== null
  }),
  fn: (token) => ({request_token: token}),
  target: fetchCreateSessionFx
})

guard({
  source: $sessionId,
  filter: (session): session is string => session !== null,
  clock: [fetchCreateSessionFx.doneData, accountReq],
  target: [saveSessionIdFx, fetchAccountFx]
})