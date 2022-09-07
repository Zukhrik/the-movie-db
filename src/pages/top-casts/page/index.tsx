import {useEffect} from 'react'
import {$castsStore, closed, opened} from '../model/model'
import {Col, Row} from 'antd'
import {useStore} from 'effector-react'
import {TopCastCard} from '../ui'

export const TopCasts = () => {
  const data = useStore($castsStore)

  useEffect(() => {
    opened()
    return () => {
      closed()
    }
  }, [])


  return (
    <Row gutter={[12, 12]}>
      {
        data && data.results.map(item => (
          <Col span={24} key={item.id}>
            <TopCastCard cast={item}/>
          </Col>
        ))
      }
    </Row>
  )
}