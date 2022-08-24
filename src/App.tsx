import {LayoutPage} from './shared/ui'
import {useEffect} from 'react'
import {$sessionId, accountReq, createSessionRequested} from './entities/account/model/model'
import {useStore} from 'effector-react'

function App() {
  const session = useStore($sessionId)

  useEffect(() => {
    if (!session) {
      createSessionRequested()
    }else {
      accountReq()
    }
  }, [session])

  return (
    <LayoutPage/>
  )
}

export default App
