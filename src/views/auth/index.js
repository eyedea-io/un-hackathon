import {Match} from '../../components/router'
import Head from '../../components/head'
import PageHead from '../../components/page-head'
import Page from '../../components/page'
import Input from '../../components/input'
import Link from '../../components/link'
import Grid from '../../components/grid'
import Button from '../../components/button'
import InputList from '../../components/input-list'
import Centered from '../../components/centered'
import LoginForm from './components/login-form'
import RegisterForm from './components/register-form'

const AuthView = () => (
  <Page>
    <Head>
      <title>Noora's Identity</title>
    </Head>

    <PageHead />

    <Centered>
      <Match path={'/auth/login'}>
        <div className='Form'>
          <h1 className='u-mb'>Welcome back</h1>
          <LoginForm />
        </div>
      </Match>
      <Match path={'/auth/register'}>
        <div className='Form'>
          <h1 className='u-mb'>Create account</h1>
          <RegisterForm />
        </div>
      </Match>
    </Centered>

    <style jsx>{`
      .Form {
        max-width: 400px;
        width: 100%;
      }

      .Form__input {
        max-width: 240px;
        margin-left: auto;
        margin-right: auto;
      }

      .Form h1 {
        font-weight: 600;
      }
    `}</style>
  </Page>
)

export default AuthView
