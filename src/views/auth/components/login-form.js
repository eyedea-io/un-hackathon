import {connect} from 'zefir/utils'
import Head from '../../../components/head'
import Page from '../../../components/page'
import Input from '../../../components/input'
import Link from '../../../components/link'
import Grid from '../../../components/grid'
import Button from '../../../components/button'
import InputList from '../../../components/input-list'
import Centered from '../../../components/centered'

const Login = ({fields, messages, pending, login}) => (
  <form className='Form' onSubmit={login}>
    <InputList errors={messages.get('auth.login')}>
      <Input {...fields.username} full disabled={pending.has('auth.login')} />
      <Input {...fields.password} full disabled={pending.has('auth.login')} />
      <Button primary full>Sign in</Button>
    </InputList>

    <div className='u-mt- u-ta-l'>
      Don't have account? <Link to='/auth/register'>Sign up</Link>.
    </div>
  </form>
)

Login.init = ({
  services: {auth},
  stores: {messages, pending},
  form: {submit, fields}
}) => ({
  fields,
  messages,
  pending,
  login: e => submit(e, auth.login)
})

Login.form = {
  formName: 'LoginForm',
  fields: {
    username: {
      autoFocus: true,
      name: 'username',
      placeholder: 'Your email...'
    },
    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Your password...'
    }
  }
}

export default connect(Login)
