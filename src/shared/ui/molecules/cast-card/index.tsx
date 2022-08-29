import {Col, Image, Row, Typography} from 'antd'
import {ICast} from '../../../api'
import './style.css'
import {useNavigate} from 'react-router-dom'

type IProps = {
  cast: ICast
}

export const CastCard = ({cast}:IProps) => {
  const {Title, Text} = Typography
  const navigate = useNavigate()

  return (
    <Row gutter={[4, 0]} onClick={() => navigate(`/cast/${cast.id}`)} className='cast-card-wrapper'>
      <Col span={24}>
        <Image src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} className='cast-img' preview={false}/>
      </Col>
      <Col span={24}>
        <Title level={4}>{cast.character}</Title>
      </Col>
      <Col span={24}>
        <Text>{cast.original_name}</Text>
      </Col>
    </Row>
  )
}