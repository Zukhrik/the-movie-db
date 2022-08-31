import {useStore} from 'effector-react'
import {$account} from '../../../entities/account/model/model'
import {useEffect} from 'react'
import {$favourite, closed, opened} from '../model/model'

export const Favourite = () => {
  const account = useStore($account)
  const fav = useStore($favourite)

  console.log(fav)

  useEffect(() => {
    if (account) {
      opened(account.id)
    }
    return () => {
      closed()
    }
  }, [account])

  return (
    <>
      fav
    </>
  )
}