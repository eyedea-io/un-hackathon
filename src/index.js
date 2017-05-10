import {Match, MatchAsGuest} from './components/router'
import LandingView from './views/landing'
import AuthView from './views/auth'

const App = () => (
  <div>
    <Match path='/' exact component={LandingView} />
    <MatchAsGuest path='/auth' component={AuthView} redirect={'/'} />
  </div>
)

App.init = ({
  services: {auth}
}) => {
  auth.rebuildSession()
}

export default App
