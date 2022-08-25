import {Button, Col, Input, Row, Typography} from 'antd'
import {fetchAuthLoginValidateFx, loginRequested, passwordMount, usernameMount} from '../model/model'
import {useStore} from 'effector-react'
import {Spinner} from '../../../shared/ui'
import './style.css'

export const SignIn = () => {
  const {Text, Title} = Typography
  const loading = useStore(fetchAuthLoginValidateFx.pending)

  return (
    <div className='auth-wrapper'>
      {loading && <Spinner/>}
      <div className='auth-title'>
        <Text>Hello!</Text>
        <Text style={{width: '33%'}}>Please login or create an account to use the features of this app</Text>
      </div>
      <div className='auth-form'>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <label>Login*</label>
            <Input type='text' size='large' onChange={(e) => usernameMount(e.target.value)}/>
          </Col>
          <Col span={24}>
            <label>Password*</label>
            <Input type='password' size='large' onChange={(e) => passwordMount(e.target.value)}/>
          </Col>
          <Col span={24} className='action-wrapper'>
            <Button
              htmlType='submit'
              className='button'
              type='primary'
              size='large'
              danger
              disabled={loading}
              loading={loading}
              onClick={() => loginRequested()}
            >
              Login
            </Button>
          </Col>
          <Col span={24} className='action-wrapper'>
            <Title level={5} className='mb'>or <a href='/'>create an account</a></Title>
          </Col>
        </Row>
      </div>
    </div>
  )
}