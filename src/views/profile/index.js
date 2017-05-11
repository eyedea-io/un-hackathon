import {Match} from '../../components/router'
import Head from '../../components/head'
import Page from '../../components/page'
import PageHead from '../../components/page-head'
import Preload from '../../components/preload'
import Nav from '../../components/nav'
import NavLink from '../../components/nav-link'
import Centered from '../../components/centered'
import Wrapper from '../../components/wrapper'
import ProfileSummary from './components/profile-summary'
import ProfileTimeline from './components/profile-timeline'
import PersonalInformationForm from './components/personal-information-form'

const Profile = ({
  stores: {user, pending}
}) => (
  <Page>
    <Head>
      <title>Noora's Identity - Your profile</title>
    </Head>

    <PageHead />

    <Wrapper className='Main u-mt'>
      <Preload loading={pending.has('user.get-summary')}>
        {user.hasBasicData ? (
          <div>
            <Nav>
              <NavLink to='/profile' exact>Your profile</NavLink>
              <NavLink to='/profile/timeline' exact>Timeline</NavLink>
            </Nav>
            <hr className='u-rule u-mt- u-mb-' />
            <div className='Main__content'>
              <Match path='/profile' exact>
                <ProfileSummary />
              </Match>

              <Match path='/profile/timeline'>
                <ProfileTimeline />
              </Match>

              <Match path='/profile/edit'>
                <div className='Main__header u-mt+++'>
                  <h1>Edit your personal information</h1>
                  <p className='u-mt--'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti itaque repellendus odio tempora quos tenetur sapiente ut enim, ratione animi culpa maxime.</p>
                </div>

                <div className=' u-mt+++'>
                  <PersonalInformationForm canCancel />
                </div>
              </Match>
            </div>
          </div>
        )
        : (
          <div className='u-mt+++'>
            <div className='Main__header'>
              <h1>Let's get started</h1>
              <p className='u-mt--'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti itaque repellendus odio tempora quos tenetur sapiente ut enim, ratione animi culpa maxime.</p>
            </div>

            <div className=' u-mt+++'>
              <PersonalInformationForm />
            </div>
          </div>
        )}
      </Preload>
    </Wrapper>

    <style jsx>{`
      .Main__header {
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }

      .Main__header h1 {
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }

      .Main__header p {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    `}</style>
  </Page>
)

Profile.init = ({
  services: {user}
}) => {
  user.getSummary()
}

export default Profile
