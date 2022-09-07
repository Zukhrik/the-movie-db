import {Layout, Menu} from 'antd'
import Sider from 'antd/es/layout/Sider'
import {Content} from 'antd/es/layout/layout'
import './style.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useStore} from 'effector-react'
import {$account} from '../../../../entities/account/model/model'
import {Profile} from '../../molecules'
import {RoutesFile} from '../../../../pages/routes-file'

type IMenu = {
  name: string
  key: string
}
export const menuData: IMenu[] = [
  {
    name: 'home',
    key: '/'
  },
  {
    name: 'popular',
    key: '/popular'
  },
  {
    name: 'favorite',
    key: '/favourite'
  },
  {
    name: 'top casts',
    key: '/top_casts'
  }
]

export const LayoutPage = () => {
  const {pathname} = useLocation()
  const account = useStore($account)
  const navigate = useNavigate()

  return (
    <Layout>
      <Sider className='sider'>
        <div>
          <div className='logo'>Watchlists</div>
          <Menu
            theme='dark'
            mode='inline'
            onClick={(e) => navigate(e.key)}
            selectedKeys={[pathname]}
            items={menuData.map(item => ({key: item.key, label: item.name.toUpperCase()}))}
          />
        </div>
        <div style={{padding: 16}}>
          {
            account
              ? <Profile account={account}/>
              : <Link to='/sign-in'>sign-in</Link>
          }
        </div>
      </Sider>
      <Content className='content'>
        <RoutesFile/>
      </Content>
    </Layout>
  )
}
