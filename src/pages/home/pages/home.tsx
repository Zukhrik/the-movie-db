import {useEffect} from 'react'
import {useStore} from 'effector-react'
import {Col, Row} from 'antd'
import {MovieCard, Spinner} from '../../../shared/ui'
import {$discoverMovieList, fetchTopMovieFx, homePageOpened} from '../model/model'

export const Home = () => {
  const list = useStore($discoverMovieList)
  const loading = useStore(fetchTopMovieFx.pending)

  useEffect(() => {
    homePageOpened()
  }, [])

  return (
    <Row>
      <Col span={24}>
        <p>DISCOVER MOVIES</p>
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