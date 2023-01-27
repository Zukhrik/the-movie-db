import {Avatar, Col, Row, Typography} from 'antd'
import {IKnownFor} from '../../../../../shared'
import {IMAGE_PATH} from '../../../../../entities'
import './style.css'
import {useNavigate} from 'react-router-dom'

type IProps = {
  card: IKnownFor
}

export const SearchCard = ({card}: IProps) => {
  const {Title, Text} = Typography
  const navigate = useNavigate()

  return (
    <Row gutter={[12, 0]} wrap={false} align='middle' onClick={() => navigate(`/movie/${card.id}`)} className='pointer'>
      <Col>
        <Avatar src={`${IMAGE_PATH.W500}${card.backdrop_path || card.poster_path}`} shape='square' size={60}/>
      </Col>
      <Col flex={1} className='search-card-info'>
        <Title level={5}>{card.name || card.title}</Title>
        <Text>{card.overview}</Text>
      </Col>
    </Row>
  )
}