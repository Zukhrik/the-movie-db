import {createEffect, createEvent, split} from 'effector'
import {$sessionId, accountReq} from '../../../entities/account/model/model'
import {history} from '../../../custom-history'

export const appMounted = createEvent()
export const appUnmounted = createEvent()

export const redirectToLogin = createEffect(() => {
  history.push('/sign-in')
})

split({
  source: appMounted,
  match: {
    isSession: $sessionId.map(sessionId => sessionId !== null)
  },
  cases: {
    isSession: accountReq,
    __: redirectToLogin
  }
})