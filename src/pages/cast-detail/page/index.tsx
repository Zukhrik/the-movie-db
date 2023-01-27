import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {$castDetail, $castImages, $castTargets, fetchCastDetailFx, opened, resetPage} from '../model/model'
import {useStore} from 'effector-react'
import {Col, Image, Row, Typography} from 'antd'
import {Spinner} from '../../../shared/ui'
import {IMAGE_PATH} from '../../../entities'
import './style.css'

export const CastDetail = () => {
  const {cast_id} = useParams()
  const detail = useStore($castDetail)
  const loading = useStore(fetchCastDetailFx.pending)
  const {Title, Text} = Typography
  const imgs = useStore($castImages)
  const targets = useStore($castTargets)
  const navigate = useNavigate()

  useEffect(() => {
    opened(Number(cast_id))

    return () => {
      resetPage()
    }
  }, [cast_id])

  return (
    <>
      {
        detail && (
          <Row style={{color: '#fff'}} gutter={[0, 24]}>
            <Col span={24}>
              <Row wrap={false} gutter={[24, 0]}>
                <Col span={6}>
                  <Image src={`${IMAGE_PATH.W500}${detail.profile_path}`}/>
                </Col>
                <Col flex={1}>
                  <Row gutter={[0, 12]}>
                    <Col span={24}>
                      <Title>{detail.name}</Title>
                    </Col>
                    <Col span={24}>
                      <Text style={{whiteSpace: 'pre-wrap'}}>{detail.biography}</Text>
                    </Col>
                    <Col span={24}>
                      <Title level={4}>Place of birth: </Title>
                      <Text>{detail.place_of_birth}</Text>
                    </Col>
                    <Col span={24}>
                      <Title level={4}>Birthday: </Title>
                      <Text>{detail.birthday}</Text>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}/>
              </Row>
            </Col>
            <Col span={24}><Title>Target movies</Title></Col>
            <Col span={24} className='scrollable-div'>
              {
                targets && targets.results.map(item => (
                  <div key={item.file_path} className='target-post' onClick={() => navigate(`/movie/${item.media.id}`)}>
                    <img src={`${IMAGE_PATH.W500}${item.media.poster_path}`} alt={item.file_path}/>
                    <Text>{item.media.title}</Text>
                  </div>
                ))
              }
            </Col>
            <Col span={24}><Title>Cast Images</Title></Col>
            <Col span={24} className='scrollable-div'>
              {
                imgs && imgs.profiles.map(item => (
                  <div key={item.file_path} className='cast-wrap'>
                    <Image src={`${IMAGE_PATH.W500}${item.file_path}`} style={{width: 250, height: 360, marginRight: 24}}/>
                  </div>
                ))
              }
            </Col>
          </Row>
        )
      }
      {loading && <Spinner/>}
    </>
  )
}