import React, {useEffect} from 'react'
import {$popularMovie, opened} from '../model/model'
import {useStore} from 'effector-react'
import {Col, Row} from 'antd'
import {MovieCard} from '../../../shared/ui'

export const PopularPage = () => {
  const list = useStore($popularMovie)

  useEffect(() => {
    opened()
  }, [])

  return (
    <Row gutter={[16, 16]}>
      {
        list && list.results.map(item => (
          <Col key={item.id} span={3}>
            <MovieCard card={item}/>
          </Col>
        ))
      }
    </Row>
  )
}