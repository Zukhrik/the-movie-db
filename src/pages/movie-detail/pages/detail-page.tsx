import {useEffect} from 'react'
import {fetchMovieDetailFx, pageOpened, resetMovie} from '../model/model'
import {useParams, useSearchParams} from 'react-router-dom'
import {useStore} from 'effector-react'
import '../style.css'
import {Spinner} from '../../../shared/ui'
import {CastsList, MainPage} from '../ui'

export const DetailPage = () => {
  const {movie_id} = useParams()
  const loading = useStore(fetchMovieDetailFx.pending)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    pageOpened(Number(movie_id))

    return () => {
      resetMovie()
    }
  }, [movie_id])

  return (
    <>
      {loading && <Spinner/>}
      {
        searchParams.get('casts')
          ? <CastsList/>
          : <MainPage/>
      }
    </>
  )
}