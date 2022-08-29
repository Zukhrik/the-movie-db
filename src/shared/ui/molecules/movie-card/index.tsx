import {Col, Image, Row} from 'antd'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
import './movie-card.css'
import {IMovieItem} from '../../../../pages/home/model/type.model'

type IProps = {
  card: IMovieItem
}
export const MovieCard = ({card}: IProps) => {
  const navigate = useNavigate()

  return (
    <Row gutter={[0, 8]} onClick={() => navigate(`/movie/${card.id}`)} className='movie-card-wrapper'>
      <Col span={24}>
        <Image src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} preview={false} className='img'/>
      </Col>
      <Col span={24}>{card.vote_average}</Col>
      <Col span={24}>
        {card.title}
      </Col>
      <Col span={24}>
        {moment(card.release_date).format('YYYY')}
      </Col>
    </Row>
  )
}