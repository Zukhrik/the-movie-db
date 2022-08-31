import {Avatar, Col, Row, Typography} from 'antd'
import {IAccount} from '../../../api'
import './style.css'
import {useNavigate} from 'react-router-dom'

type IProps = {
  account: IAccount
}
export const Profile = ({account}: IProps) => {
  const {Text} = Typography
  const navigate = useNavigate()

  return (
    <Row
      wrap={false}
      gutter={[12, 0]}
      align='middle'
      justify='space-between'
      className='prof-wrapper'
      onClick={() => navigate('/account')}
    >
      <Col>
        <Avatar
          size={40}
          className='prof-avatar'
          src={`https://image.tmdb.org/t/p/original${account.avatar.tmdb.avatar_path}`}
        />
      </Col>
      <Col flex={1}>
        <Text className='prof-title'>{account.name.length > 1 ? account.name.split(' ', 1) : account.username}</Text>
      </Col>
    </Row>
  )
}