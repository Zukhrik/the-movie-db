import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {$castDetail, $combinedCredits, fetchCastDetailFx, opened, resetPage} from '../model/model'
import {useStore} from 'effector-react'
import {Col, Image, Row, Typography} from 'antd'
import {Spinner} from '../../../shared/ui'

export const CastDetail = () => {
  const {cast_id} = useParams()
  const detail = useStore($castDetail)
  const loading = useStore(fetchCastDetailFx.pending)
  const {Title, Text} = Typography
  const combinedCredits = useStore($combinedCredits)
  console.log(combinedCredits)

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
          <Row style={{color: '#fff'}}>
            <Col span={24}>
              <Row wrap={false} gutter={[24, 0]}>
                <Col span={6}><Image src={`https://image.tmdb.org/t/p/w500${detail.profile_path}`}
                                     className='detail-img'/></Col>
                <Col flex={1}>
                  <Row>
                    <Col span={24}>
                      <Title>{detail.name}</Title>
                    </Col>
                    <Col span={24}>
                      <Text>{detail.biography}</Text>
                    </Col>
                    <Col span={24}>
                      <Text>Place of birth: </Text>
                      <Text>{detail.place_of_birth}</Text>
                    </Col>
                    <Col span={24}>
                      <Text>Birthday: </Text>
                      <Text>{detail.birthday}</Text>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}/>
              </Row>
            </Col>
            <Col span={24}>
            </Col>
          </Row>
        )
      }
      {loading && <Spinner/>}
    </>
  )
}