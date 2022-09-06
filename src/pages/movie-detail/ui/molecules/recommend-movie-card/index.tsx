import {Col, Row, Typography} from 'antd'
import './style.css'
import {IKnownFor} from '../../../../../shared'
import {useNavigate} from 'react-router-dom'

type IProp = {
  card: IKnownFor
}

export const RecommendMovieCard = ({card}: IProp) => {
  const {Text} = Typography
  const navigate = useNavigate()

  return (
    <Row gutter={[0, 12]} onClick={() => navigate(`/movie/${card.id}`)}>
      <Col span={24} className='rec-img'>
        <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.backdrop_path}/>
      </Col>
      <Col span={24}>
        <Text>{card.title}</Text>
      </Col>
    </Row>
  )
}