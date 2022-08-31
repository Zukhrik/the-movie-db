import {useStore} from 'effector-react'
import {$movieCredits, $movieDetail} from '../../model/model'
import {Avatar, Col, Row, Typography} from 'antd'
import {ArtistCard} from '../molecules'

export const CastsList = () => {
  const credits = useStore($movieCredits)
  const movie = useStore($movieDetail)
  const {Title, Text} = Typography

  return (
    <Row gutter={[0, 48]}>
      {
        movie && (
          <Col span={24}>
            <Row wrap={false} gutter={[12, 0]} align='middle'>
              <Col>
                <Avatar
                  shape='square'
                  style={{width: 120, height: 150}}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </Col>
              <Col>
                <Title>{movie.title}</Title>
                <Text></Text>
              </Col>
            </Row>
          </Col>
        )
      }
      {
        credits && (
          <Col span={24}>
            <Row wrap={false}>
              <Col span={12}>
                <Row gutter={[0, 12]}>
                  {
                    credits.cast.map(item => (
                      <Col span={24} key={item.cast_id}>
                        <ArtistCard
                          title={item.name}
                          id={item.id}
                          subtitle={item.character}
                          src={item.profile_path}
                        />
                      </Col>
                    ))
                  }
                </Row>
              </Col>
              <Col span={12}>
                <Row gutter={[0, 12]}>
                  {
                    credits.crew.map(item => (
                      <Col span={24} key={item.credit_id}>
                        <ArtistCard
                          id={item.id}
                          title={item.name}
                          subtitle={item.department}
                          src={item.profile_path}
                        />
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </Col>
        )
      }
    </Row>
  )
}