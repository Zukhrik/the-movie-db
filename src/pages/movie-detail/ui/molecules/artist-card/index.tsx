import {Avatar, Col, Row, Typography} from 'antd'
import {useNavigate} from 'react-router-dom'

type IProps = {
  src: string,
  title: string
  subtitle: string
  id: number
}
export const ArtistCard = ({src, title, subtitle, id}: IProps) => {
  const {Title, Text} = Typography
  const navigate = useNavigate()

  return (
    <Row wrap={false} gutter={[12, 0]} align='middle' style={{cursor: 'pointer'}} onClick={() => navigate(`/cast/${id}`)}>
      <Col>
        {
          src
            ? <Avatar src={`https://image.tmdb.org/t/p/w500${src}`} size={80} shape='square'/>
            : <Avatar size={80} shape='square'>U</Avatar>
        }
      </Col>
      <Col flex={1}>
        <Title level={4}>{title}</Title>
        <Text>{subtitle}</Text>
      </Col>
    </Row>
  )
}