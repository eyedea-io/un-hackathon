import {Match, MatchAsGuest, MatchAsMember} from './components/router'
import LandingView from './views/landing'
import AuthView from './views/auth'
import ProfileView from './views/profile'

const App = () => (
  <div>
    <MatchAsGuest path='/' exact component={LandingView} redirect='/profile' />
    <MatchAsGuest path='/auth' component={AuthView} redirect='/' />
    <MatchAsMember path='/profile' component={ProfileView} redirect='/profile' />
  </div>
)

App.init = ({
  services: {auth}
}) => {
  auth.rebuildSession()
}

export default App
