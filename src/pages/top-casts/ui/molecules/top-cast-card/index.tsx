import {Col, Row, Typography} from 'antd'
import {IKnown} from '../../../../../shared'
import {IMAGE_PATH} from '../../../../../entities'
import './style.css'
import {useNavigate} from 'react-router-dom'

type IProp = {
  cast: IKnown
}

export const TopCastCard = ({cast}: IProp) => {
  const {Title, Text} = Typography
  const navigate = useNavigate()

  return (
    <Row wrap={false} gutter={[24, 0]} align='bottom'>
      <Col className='top-cast-card' onClick={() => navigate(`/cast/${cast.id}`)}>
        <img src={`${IMAGE_PATH.W500}${cast.profile_path}`} alt={cast.profile_path}/>
      </Col>
      <Col flex={1}>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Title level={3}>{cast.name}</Title>
          </Col>
          <Col span={24}>
            <Row wrap={false} gutter={[12, 0]}>
              {
                cast.known_for.map(item => (
                  <Col className='cast-known-wrap' key={item.poster_path} onClick={() => navigate(`/movie/${item.id}`)}>
                    <img src={`${IMAGE_PATH.W500}${item.poster_path}`} alt={item.poster_path}/>
                    <Text key={item.poster_path}>{item.name || item.title}</Text>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}