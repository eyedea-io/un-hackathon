import {MatchAsMember, MatchAsGuest} from '../../components/router'
import Head from '../../components/head'
import Page from '../../components/page'
import Input from '../../components/input'
import Nav from '../../components/nav'
import Link from '../../components/link'
import Grid from '../../components/grid'
import Button from '../../components/button'
import InputList from '../../components/input-list'
import Centered from '../../components/centered'

const Landing = ({logout}) => (
  <Page>
    <Head>
      <title>Noora's Identity</title>
    </Head>

    <Centered>
      <div className='Main'>
        <h1>Noora's Identity</h1>
        <h2 className='u-mt-'>
          Build your identity from scratch.
        </h2>
        <div className='Main__nav u-mt'>
          <MatchAsGuest>
            <Nav>
              <Link to='/auth/login'>Sign in</Link>
              <Link to='/auth/register'>Create account</Link>
            </Nav>
          </MatchAsGuest>
          <MatchAsMember>
            <a onClick={logout}>Sign out</a>
          </MatchAsMember>
        </div>
      </div>
    </Centered>

    <style jsx>{`
      .Main {
        max-width: 400px;
        text-align: center;
      }

      .Main__nav {
        text-align: center;
        display: inline-block;
      }
    `}</style>
  </Page>
)

Landing.init = ({
  services: {auth}
}) => ({
  logout: auth.logout
})

export default Landing
