import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useStore} from 'effector-react'
import {$account} from '../../../../entities/account/model/model'
import {Menu} from 'antd'
import {Profile} from '../../molecules'
import './style.css'


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
  }
]

export const LayoutSider = () => {
  const {pathname} = useLocation()
  const account = useStore($account)
  const navigate = useNavigate()

  return (
    <>
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
    </>
  )
}