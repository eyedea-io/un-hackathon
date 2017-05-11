import {MatchAsMember, MatchAsGuest} from '../../components/router'
import Head from '../../components/head'
import Page from '../../components/page'
import PageHead from '../../components/page-head'
import Avatar from '../../components/avatar'
import Input from '../../components/input'
import Nav from '../../components/nav'
import Link from '../../components/link'
import Grid from '../../components/grid'
import Button from '../../components/button'
import Wrapper from '../../components/wrapper'
import InputList from '../../components/input-list'
import Centered from '../../components/centered'
import {formatDate} from '../../helpers'

const EntryToSign = ({store, pending, signEntry}) => (
  <Page>
    <Head>
      <title>Noora's Identity</title>
    </Head>

    <PageHead />

    <Wrapper className='u-ta-c u-mt+++'>
      <form className='Profile' onSubmit={signEntry}>
        {pending.has('user.get-entry-to-sign') && store.entryToSign.summary === undefined ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className='Profile__header'>
              <div className='Profile__avatar'>
                <Avatar username={store.entryToSign.summary.username} />
              </div>
              <div className='Profile__fullname'>{store.entryToSign.summary.fullname}</div>
            </div>

            <h2 className='u-ta-l u-mt+++'>Personal information</h2>

            <div className='InfoList u-mt'>
              <div className='InfoList__item'>
                <div className='InfoList__item-key'>Blockchain address</div>
                <div className='InfoList__item-value'>{store.entryToSign.summary.block_address}</div>
              </div>
              <div className='InfoList__item'>
                <div className='InfoList__item-key'>Gender</div>
                <div className='InfoList__item-value'>{store.entryToSign.summary.sex}</div>
              </div>
              <div className='InfoList__item'>
                <div className='InfoList__item-key'>Birth date</div>
                <div className='InfoList__item-value'>{
                  formatDate(store.entryToSign.summary.birth_date)
                }</div>
              </div>
            </div>

            {store.entryToSign.signed_by_me ? (
              <div className='u-mt+ Profile__sign'>
                <Grid smallGutter middle>
                  <div>
                    <img className='Profile__status' src="https://maxcdn.icons8.com/office/PNG/30/Very_Basic/ok-30.png" title="Ok" width="30" height="30" />
                  </div>
                  <div>Signed by me</div>
                </Grid>
              </div>
            ) : (
              <div className='u-mt+++'>
                <Button primary disabled={pending.has('user.sign-entry')}>I confirm, this data is valid</Button>
              </div>
            )}
          </div>
        )}
      </form>
    </Wrapper>

    <style jsx>{`
      .Profile {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .Profile__sign {
        display: inline-block;
      }

      .Profile__status {
        display: block;
      }

      .Profile__heading :global(a) {
        font-size: 18px;
      }

      .Profile__header {
        text-align: center;
      }

      .Profile__avatar img {
        border-radius: 90px;
        max-width: 64px;
      }

      .Profile__fullname {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }

      .InfoList__empty {
        text-align: center;
      }

      .InfoList__empty h3 {
        font-size: 24px;
        font-weight: 500;
        color: #E5E9F0;
        margin-top: 64px;
        margin-bottom: 64px;
      }

      .InfoList__item {
        display: flex;
        text-align: left;
        align-items: center;
      }

      .InfoList__item + .InfoList__item {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #E5E9F0;
      }

      .InfoList__item-icon {
        margin-right: 15px;
      }

      .InfoList__item-icon img {
        vertical-align: middle;
      }

      .InfoList__item-key {
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 12px;
        flex-basis: 25%;
        white-space: nowrap;
        padding-right: 30px;
      }

      .InfoList__item-link {
        margin-left: auto;
        opacity: .5;
        transition: opacity .25s;
      }

      .InfoList__item-link:hover {
        opacity: 1;
      }

      .InfoList__item-link a {
        vertical-align: middle;
      }
    `}</style>
  </Page>
)

EntryToSign.init = ({
  router: {route: {location}},
  form: {submit},
  stores: {user: store, pending},
  services: {user}
}) => {
  const id = location.search.replace(/^.*?\=/, '')

  user.fetchEntryToSign(id)

  return {
    store,
    pending,
    signEntry: e => submit(e, () => {
      user.signEntry(id)
      user.fetchEntryToSign(id)
    })
  }
}

EntryToSign.form = {
  formName: 'EntryToSignForm',
  fields: {}
}

export default EntryToSign
