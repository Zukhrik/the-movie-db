import {Avatar, Col, Row, Typography} from 'antd'
import { IAccount } from '../../../api'

type IProps = {
  account: IAccount
}
export const Profile = ({account}: IProps) => {
  const {Text} = Typography

  return (
    <Row wrap={false} justify='space-between' align='middle' gutter={[12, 0]} style={{border: '1.5px solid #fff', borderRadius: 6, padding: 8}}>
      <Col>
        <Avatar src={`https://image.tmdb.org/t/p/original${account.avatar.tmdb.avatar_path}`} size={40} style={{border: '1px solid #fff'}}/>
      </Col>
      <Col flex={1}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 600}}>{account.name.length > 1 ? account.name : account.username}</Text>
      </Col>
    </Row>
  )
}