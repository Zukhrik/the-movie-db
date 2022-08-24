import {useEffect} from 'react'
import {$movieDetail, fetchMovieDetailFx, pageOpened, resetMovieId} from '../model/model'
import {useParams} from 'react-router-dom'
import {useStore} from 'effector-react'
import '../style.css'
import {Col, Image, Row, Typography} from 'antd'
import moment from 'moment'
import {ScoreCard, Spinner} from '../../../shared/ui'

export const DetailPage = () => {
  const {movie_id} = useParams()
  const loading = useStore(fetchMovieDetailFx.pending)
  const data = useStore($movieDetail)
  const {Title, Text} = Typography

  useEffect(() => {
    pageOpened(Number(movie_id))

    return () => {
      resetMovieId()
    }
  }, [movie_id])

  return (
    <>
      {loading && <Spinner/>}
      {
        data && (
          <Row className='detail-wrapper'>
            <Col span={24}>
              <Row wrap={false} gutter={[48, 0]} align='middle'>
                <Col span={6}>
                  <Image src={`https://image.tmdb.org/t/p/original${data.poster_path}`} className='detail-img'/>
                </Col>
                <Col flex={1}>
                  <Row gutter={[0, 12]}>
                    <Col span={24} style={{display: 'flex', alignItems: 'center'}}>
                      <Title>{data.title}</Title>
                      <Text className='detail-subtext'>{`(${moment(data.release_date).format('YYYY')})`}</Text>
                    </Col>
                    {
                      data.genres.map(item => (
                        <Col key={item.id} className='detail-genre'>
                          <Text>{item.name},</Text>
                        </Col>
                      ))
                    }
                    <Col span={24} style={{marginTop: 24}}>
                      <Title level={3}>Overview</Title>
                    </Col>
                    <Col span={24}>
                      <Text>{data.overview}</Text>
                    </Col>
                    <Col span={24} style={{marginTop: 44}}>
                      <ScoreCard score={data.vote_average}/>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}/>
              </Row>
            </Col>
          </Row>
        )
      }
    </>
  )
}