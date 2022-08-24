import {useEffect} from 'react'
import {opened} from '../model/model'

export const ActorList = () => {

  useEffect(() => {
    opened()
  },[])

  return (
    <>
      Actor list
    </>
  )
}