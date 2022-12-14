import {Home} from './home'
import {SignIn} from './auth'
import {DetailPage} from './movie-detail'
import {PopularPage} from './popular'
import {Route, Routes} from 'react-router-dom'
import {CastDetail} from './cast-detail'
import {Favourite} from './favourite'
import {AccountPage} from './account'
import {TopCasts} from './top-casts'


const routing = [
  {
    path: '/',
    component: <Home/>
  },
  {
    path: '/sign-in',
    component: <SignIn/>
  },
  {
    path: '/movie/:movie_id',
    component: <DetailPage/>
  },
  {
    path: '/popular',
    component: <PopularPage/>
  },
  {
    path: '/cast/:cast_id',
    component: <CastDetail/>
  },
  {
    path: '/favourite',
    component: <Favourite/>
  },
  {
    path: '/account',
    component: <AccountPage/>
  },
  {
    path: '/top_casts',
    component: <TopCasts/>
  }
]

export const RoutesFile = () => {

  return (
    <Routes>
      {
        routing.map(item => (
          <Route key={item.path} path={item.path} element={item.component}/>
        ))
      }
    </Routes>
  )
}