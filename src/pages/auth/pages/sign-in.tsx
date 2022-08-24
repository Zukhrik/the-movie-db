import {Button, Checkbox, Col, Input, Row, Typography} from 'antd'
import {fetchAuthLoginValidateFx, opened, passwordMount, usernameMount} from '../model/model'
import {useStore} from 'effector-react'
import {Spinner} from '../../../shared/ui'
import './style.css'

export const SignIn = () => {
  const {Title} = Typography
  const loading = useStore(fetchAuthLoginValidateFx.pending)

  return (
    <div className='auth-wrapper'>
      {loading && <Spinner/>}
      <div className='auth-form'>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Title level={3}>Sign in</Title>
          </Col>
          <Col span={24}>
            <label>Login</label>
            <Input type='text' size='large' onChange={(e) => usernameMount(e.target.value)}/>
          </Col>
          <Col span={24}>
            <label>Password</label>
            <Input type='password' size='large' onChange={(e) => passwordMount(e.target.value)}/>
          </Col>
          <Col span={24}>
            <Row wrap={false} gutter={[8, 0]}>
              <Col><Checkbox/></Col>
              <Col>Remember me</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Button
              htmlType='submit'
              className='button'
              type='primary'
              size='large'
              disabled={loading}
              onClick={() => opened()}
            >
              sign in
            </Button>
          </Col>
          <Col span={24} className='sign-up-link'>
            <Title level={5} className='mb'>Don't have an account</Title>
            <a href='/sign-up'>Sign Up</a>
          </Col>
        </Row>
      </div>
    </div>
  )
}