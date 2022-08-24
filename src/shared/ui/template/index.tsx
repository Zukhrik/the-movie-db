import {Layout} from 'antd'
import {RoutesFile} from '../../../routes'
import {Content} from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import {LayoutSider} from '../organisms'
import '../atoms/layout.css'

export const LayoutPage = () => {
  return (
    <Layout>
      <Sider className='sider'>
        <LayoutSider/>
      </Sider>
      <Content className='content'>
        <RoutesFile/>
      </Content>
    </Layout>
  )
}