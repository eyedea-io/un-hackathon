import {connect} from 'zefir/utils'
import Head from '../../../components/head'
import Page from '../../../components/page'
import Input from '../../../components/input'
import Link from '../../../components/link'
import Grid from '../../../components/grid'
import Button from '../../../components/button'
import InputList from '../../../components/input-list'
import Centered from '../../../components/centered'

const RegisterForm = ({fields, messages, pending, register}) => (
  <form onSubmit={register}>
    <InputList errors={messages.get('auth.register')}>
      <Input {...fields.username} full disabled={pending.has('auth.register')} />
      <Input {...fields.password} full disabled={pending.has('auth.register')} />
      <Button primary full>Sign up</Button>
    </InputList>

    <div className='u-mt- u-ta-l'>
      Already have account? <Link to='/auth/login'>Sign in</Link>.
    </div>
  </form>
)

RegisterForm.init = ({
  services: {auth},
  stores: {messages, pending},
  form: {submit, fields}
}) => ({
  fields,
  messages,
  pending,
  register: e => submit(e, auth.register)
})

RegisterForm.form = {
  formName: 'RegisterForm',
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

export default connect(RegisterForm)
