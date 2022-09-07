import {useEffect} from 'react'
import {useStore} from 'effector-react'
import {Col, Row, Typography} from 'antd'
import {MovieCard, Spinner} from '../../../shared/ui'
import {$discoverMovieList, fetchTopMovieFx, homePageOpened} from '../model/model'
import './style.css'

export const Home = () => {
  const {Title, Text} = Typography
  const list = useStore($discoverMovieList)
  const loading = useStore(fetchTopMovieFx.pending)

  useEffect(() => {
    homePageOpened()
  }, [])

  return (
    <Row gutter={[0, 24]}>
      <Col span={24} className='welcome-wrapper'>
        <Title>WELCOME TO WATCHLIST</Title>
        <Text className='sub-title'>Millions of movies, series and people. Explore now.</Text>
        <input placeholder='type search text...'/>
      </Col>
      <Col span={24}>
        <Title level={2}>DISCOVER MOVIES</Title>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          {
            list && list.results.map(item => (
              <Col span={3} key={item.id}>
                <MovieCard card={item}/>
              </Col>
            ))
          }
        </Row>
      </Col>
      {loading && <Spinner/>}
    </Row>
  )
}
