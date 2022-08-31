import {useStore} from 'effector-react'
import {$account} from '../../../entities/account/model/model'
import {Avatar, Col, Row, Typography} from 'antd'
import './style.css'
import {useEffect} from 'react'
import {closed, opened} from '../model/model'

export const AccountPage = () => {
  const account = useStore($account)
  const {Title, Text} = Typography

  useEffect(() => {
    if (account) {
      opened(account.id)
    }

    return () => {
      closed()
    }
  }, [account])

  return (
    <>
      {
        account && (
          <Row gutter={[0, 24]}>
            <Col span={24} className='account-header'>
              <Row gutter={[24, 0]} align='middle'>
                <Col>
                  <Avatar src={`https://image.tmdb.org/t/p/w500${account.avatar.tmdb.avatar_path}`} size={150}
                          shape='circle'/>
                </Col>
                <Col flex={1}>
                  <Title level={2}>{account.name}</Title>
                  <Text>{`@${account.username}`}</Text>
                </Col>
                <Col span={6}/>
              </Row>
            </Col>
          </Row>
        )
      }
    </>
  )
}