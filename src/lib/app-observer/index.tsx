import {useEffect} from 'react'
import {appMounted, appUnmounted} from './model/model'

export const AppObserver = () => {

  useEffect(() => {
    appMounted()

    return () => appUnmounted()
  }, [])

  return <></>
}