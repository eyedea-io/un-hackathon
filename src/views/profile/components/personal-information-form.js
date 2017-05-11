import {connect} from 'zefir/utils'
import InputList from '../../../components/input-list'
import Link from '../../../components/link'
import Input from '../../../components/input'
import Button from '../../../components/button'
import Grid from '../../../components/grid'

const WelcomeForm = ({complete, fields, canCancel, messages, pending}) => (
  <form className='Form' onSubmit={complete}>
    <div className='Form__list'>
      <InputList
        separated
        labels={{
          fullname: 'Full name',
          sex: 'Your gender',
          birth_date: 'Birth date',
        }}
        errors={messages.get('auth.login')}
        >
        <Input {...fields.fullname} />

        <div name='sex'>
          <Input
            {...fields.sex[1]}
            onChange={fields.sex.onChange}
            checked={fields.sex.value === 'female'}
            />
          <Input
            {...fields.sex[0]}
            onChange={fields.sex.onChange}
            checked={fields.sex.value === 'male'}
            />
        </div>

        <Grid smallGutter name='birth_date'>
          <Input {...fields.birth_date_day} />
          <Input {...fields.birth_date_month} />
          <Input {...fields.birth_date_year} />
        </Grid>
      </InputList>

      <Grid smallGutter center className='u-ta-c u-mt+++'>
        <div><Button primary>Complete</Button></div>

        {canCancel && (
          <Link to='/profile'>
            <Button>Cancel</Button>
          </Link>
        )}
      </Grid>
    </div>

    <style jsx>{`
      h1 {
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }

      p {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      .Form__list {
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </form>
)

WelcomeForm.init = ({
  canCancel,
  services: {user, boards, auth},
  stores: {messages, pending, 'personal-information-form': store, user: userStore},
  form: {submit, fields}
}) => ({
  fields,
  messages,
  pending,
  store,
  canCancel,
  complete: e => submit(e, async data => {
    const birth_date = new Date(data.birth_date_year, ~~data.birth_date_month - 1, data.birth_date_day)

    await user.update('basic-data', {
      fullname: data.fullname,
      sex: data.sex,
      birth_date,
    })
    await user.getSummary()
  })
})

WelcomeForm.form = {
  formName: 'WelcomeForm',
  fields: ({
    stores: {user}
  }) => ({
    fullname: {
      defaultValue: user.profile.fullname,
      autoFocus: true,
      placeholder: 'John Doe',
    },
    sex: (() => {
      let sex = [
        {
          name: 'sex',
          value: 'male',
          label: 'Male',
          type: 'radio'
        },
        {
          name: 'sex',
          value: 'female',
          label: 'Female',
          type: 'radio'
        }
      ]

      if (user.profile.sex) {
        sex.defaultValue = user.profile.sex
      }

      return sex
    })(),
    birth_date_day: {
      defaultValue: user.profile.birth_date ? new Date(user.profile.birth_date).getDate() : user.profile.birth_date,
      placeholder: 'dd',
      maxLength: 2,
      size: 2
    },
    birth_date_month: {
      defaultValue: user.profile.birth_date ? `0${new Date(user.profile.birth_date).getMonth() + 1}`.substr(-2) : user.profile.birth_date,
      placeholder: 'mm',
      maxLength: 2,
      size: 2
    },
    birth_date_year: {
      defaultValue: user.profile.birth_date ? new Date(user.profile.birth_date).getFullYear() : user.profile.birth_date,
      placeholder: 'yyyy',
      maxLength: 4,
      size: 4
    }
  })
}

export default connect(WelcomeForm)
