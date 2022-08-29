import {useEffect} from 'react'
import {$movieCredits, $movieDetail, fetchMovieDetailFx, pageOpened, resetMovie} from '../model/model'
import {useParams} from 'react-router-dom'
import {useStore} from 'effector-react'
import '../style.css'
import {Col, Image, Row, Typography} from 'antd'
import moment from 'moment'
import {CastCard, ScoreCard, Spinner} from '../../../shared/ui'

export const DetailPage = () => {
  const {movie_id} = useParams()
  const loading = useStore(fetchMovieDetailFx.pending)
  const movie = useStore($movieDetail)
  const credits = useStore($movieCredits)
  const {Title, Text} = Typography

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
        movie && (
          <Row className='detail-wrapper' gutter={[0, 24]}>
            <Col span={24}>
              <Row wrap={false} gutter={[48, 0]} align='middle'>
                <Col span={6}>
                  <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='detail-img'/>
                </Col>
                <Col flex={1}>
                  <Row gutter={[0, 12]}>
                    <Col span={24} style={{display: 'flex', alignItems: 'center'}}>
                      <Title>{movie.title}</Title>
                      <Text className='detail-subtext'>{`(${moment(movie.release_date).format('YYYY')})`}</Text>
                    </Col>
                    {
                      movie.genres.map(item => (
                        <Col key={item.id} className='detail-genre'>
                          <Text>{item.name}</Text>
                        </Col>
                      ))
                    }
                    <Col span={24} style={{marginTop: 24}}>
                      <Title level={3}>Overview</Title>
                    </Col>
                    <Col span={24}>
                      <Text>{movie.overview}</Text>
                    </Col>
                    <Col span={24} style={{marginTop: 44}}>
                      <ScoreCard score={movie.vote_average}/>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}/>
              </Row>
            </Col>
            <Col span={24}><Title level={2}>Cast</Title></Col>
            <Col span={24} className='movie-card-wrapper'>
              {
                credits && credits.cast.slice(0, 20).map((item, idx) => (
                  <div key={idx + 1} style={{marginRight: 18}}>
                    <CastCard cast={item}/>
                  </div>
                ))
              }
            </Col>
          </Row>
        )
      }
    </>
  )
}