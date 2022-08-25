import {createEffect, createEvent, createStore, forward, guard, sample} from 'effector'
import {$requestToken, createSessionRequested, fetchCreateRequestTokenFx} from '../../../entities/account/model/model'
import {authLoginValidate} from '../../../shared/api/requests'

// effects
export const fetchAuthLoginValidateFx = createEffect({
  handler: authLoginValidate
})

const saveTokeFx = createEffect(({data}: any) => {
  return localStorage.setItem('tmdb-token', data.request_token)
})

//events
export const loginRequested = createEvent<void>()
export const usernameMount = createEvent<string>()
export const resetUsername = createEvent()
export const passwordMount = createEvent<string>()
export const resetPassword = createEvent()

//stores
export const $username = createStore<string>('').reset(resetUsername)
export const $password = createStore<string>('').reset(resetPassword)

$username.on(usernameMount, (_, username) => username)
$password.on(passwordMount, (_, password) => password)

sample({
  clock: loginRequested,
  target: fetchCreateRequestTokenFx
})

guard({
  source: {
    username: $username,
    password: $password,
    request_token: $requestToken
  },
  filter: ({request_token}) => request_token !== null,
  clock: fetchCreateRequestTokenFx.doneData,
  target: [resetUsername, resetPassword, fetchAuthLoginValidateFx]
})

forward({
  from: fetchAuthLoginValidateFx.doneData,
  to: [saveTokeFx, createSessionRequested]
})



