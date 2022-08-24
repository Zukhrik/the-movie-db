import {Route, Routes} from 'react-router-dom'
import {Home} from '../pages/home'
import {SignIn, SignUp} from '../pages/auth'
import {ActorList} from '../pages/actor-list'
import {DetailPage} from '../pages/movie-detail'
import {PopularPage} from '../pages/popular'

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
    path: '/sign-up',
    component: <SignUp/>
  },
  {
    path: '/actor-list',
    component: <ActorList/>
  },
  {
    path: '/movie/:movie_id',
    component: <DetailPage/>
  },
  {
    path: '/popular',
    component: <PopularPage/>
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