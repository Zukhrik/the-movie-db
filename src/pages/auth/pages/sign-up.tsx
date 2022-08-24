import {Col, Row, Typography} from 'antd'

export const SignUp = () => {
  const {Title} = Typography

  return (
    <div className='auth-wrapper'>
      <div className='auth-form'>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Title className='mb' level={3}>Sign in</Title>
          </Col>
          <Col span={24}>
          </Col>
        </Row>
      </div>
    </div>
  )
}