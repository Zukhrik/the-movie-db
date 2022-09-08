import {useEffect} from 'react'
import {useStore} from 'effector-react'
import {Col, Row, Typography} from 'antd'
import {MovieCard, Spinner} from '../../../shared/ui'
import {
  $discoverMovieList,
  $inputStore,
  $searchStore,
  fetchGetMovieListFx,
  fetchMultiSearchFx,
  homePageClosed,
  homePageOpened,
  searchChanges,
  submited
} from '../model/model'
import './style.css'
import {SearchCard} from '../ui'

export const Home = () => {
  const {Title, Text} = Typography
  const list = useStore($discoverMovieList)
  const loading = useStore(fetchGetMovieListFx.pending)
  const searchData = useStore($searchStore)
  const searchLoading = useStore(fetchMultiSearchFx.pending)
  const inputStore = useStore($inputStore)

  useEffect(() => {
    homePageOpened()

    return () => {
      homePageClosed()
    }
  }, [])

  return (
    <Row gutter={[0, 24]}>
      <Col span={24} className='welcome-wrapper'>
        <Title>WELCOME TO WATCHLIST</Title>
        <Text className='sub-title'>Millions of movies, series and people. Explore now.</Text>
        <div className='search'>
          <input placeholder='type search text...' value={inputStore} onChange={(e) => searchChanges(e.target.value)}/>
          <button onClick={() => submited()} disabled={searchLoading}>Search</button>
          {
            searchData && (
              <Row gutter={[0, 12]} className='search-data'>
                {
                  searchData.results.map(search => {
                    if (search.poster_path || search.backdrop_path) {
                      return <Col span={24} key={search.id}><SearchCard card={search}/></Col>
                    } else {
                      return ''
                    }
                  })
                }
                {searchLoading && <Col span={24} style={{height: 400}}><Spinner/></Col>}
              </Row>
            )
          }
        </div>
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
