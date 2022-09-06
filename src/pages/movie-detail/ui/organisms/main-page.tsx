import {Col, Image, Row, Typography} from 'antd'
import moment from 'moment/moment'
import {CastCard, ScoreCard} from '../../../../shared/ui'
import {useStore} from 'effector-react'
import {$movieCredits, $movieDetail, $movieVideos, $recommend} from '../../model/model'
import {useSearchParams} from 'react-router-dom'
import {RecommendMovieCard} from '../molecules'

export const MainPage = () => {
  const credits = useStore($movieCredits)
  const {Title, Text} = Typography
  const movie = useStore($movieDetail)
  const recommends = useStore($recommend)
  const videos = useStore($movieVideos)
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
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
                    <Col span={24}><Title level={3}>Companies</Title></Col>
                    <Col span={24}>
                      {movie.production_companies.map(item => <Text key={item.name}>{item.name},</Text>)}
                    </Col>
                  </Row>
                </Col>
                <Col span={6}/>
              </Row>
            </Col>
            <Col span={24}><Title level={2}>Cast</Title></Col>
            <Col span={24} className='scrollable-div'>
              {
                credits && credits.cast.filter(item => item.profile_path !== null).slice(0, 20).map((item, idx) => (
                  <div key={idx + 1} style={{marginRight: 18}}>
                    <CastCard cast={item}/>
                  </div>
                ))
              }
              <Title level={3} className='see-more' onClick={() => {
                searchParams.set('casts', movie.imdb_id)
                setSearchParams(searchParams)
              }}>
                See more casts ...
              </Title>
            </Col>
            <Col span={24}><Title level={2}>Videos</Title></Col>
            <Col span={24} className='scrollable-div videos'>
              {
                videos && videos.results?.map(video => (
                  <iframe
                    key={video.key}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allowFullScreen
                    frameBorder={0}
                    title={video.key}
                  />
                ))
              }
            </Col>
            <Col span={24}><Title level={2}>Recommend Movies</Title></Col>
            <Col span={24} className='scrollable-div'>
              {
                recommends && recommends.results.filter(item => item.backdrop_path !== null).map(item => (
                  <div key={item.backdrop_path} style={{marginRight: 18}}>
                    <RecommendMovieCard card={item}/>
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