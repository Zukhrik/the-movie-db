import {AuthWrapper, SignInFormWrapper} from '../style'
import {Col, Row, Typography} from 'antd'

export const SignUp = () => {
  const {Title} = Typography

  return (
    <AuthWrapper>
      <SignInFormWrapper>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Title className='mb' level={3}>Sign in</Title>
          </Col>
          <Col span={24}>
          </Col>
        </Row>
      </SignInFormWrapper>
    </AuthWrapper>
  )
}