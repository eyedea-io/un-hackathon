import {connect} from 'zefir/utils'
import Button from '../../../components/button'
import Link from '../../../components/link'
import Avatar from '../../../components/avatar'
import Modal from '../../../components/modal'
import Input from '../../../components/input'
import Grid from '../../../components/grid'
import {formatDate} from '../../../helpers'

const ProfileSummary = ({store, pending, toggleShareIdentityModal}) => (
  <div>
    {pending.has('user.get-summary') ? (
      <div></div>
    )
    : (
      <div className='Profile u-mt+++'>
        <div className='Profile__header'>
          <div className='Profile__avatar'>
            <img src={`http://eightbitavatar.herokuapp.com/?id=${encodeURIComponent(store.profile.username)}&s=male&size=64`} />
          </div>
          <div className='Profile__fullname'>{store.profile.fullname}</div>
        </div>

        <h2 className='Profile__heading u-mt+++'>
          Personal information &mdash; <Link to='/profile/edit'>Edit</Link>
        </h2>

        <div className='InfoList u-mt'>
          <div className='InfoList__item'>
            <div className='InfoList__item-key'>Blockchain address</div>
            <div className='InfoList__item-value'>{store.profile.block_address}</div>
          </div>
          <div className='InfoList__item'>
            <div className='InfoList__item-key'>Gender</div>
            <div className='InfoList__item-value'>{store.profile.sex}</div>
          </div>
          <div className='InfoList__item'>
            <div className='InfoList__item-key'>Birth date</div>
            <div className='InfoList__item-value'>{formatDate(store.profile.birth_date)}</div>
          </div>

          <Grid split className='u-mt'>
            {(store.profile.signed_by || []).length ? (
              <Grid smallGutter middle>
                <div>
                  <img className='Profile__status' src="https://maxcdn.icons8.com/office/PNG/30/Very_Basic/ok-30.png" title="Ok" width="30" height="30" />
                </div>
                <div>Confirmed by:</div>
              </Grid>
            ) : (
              <Grid smallGutter middle>
                <div>
                  <img className='Profile__status' src="https://maxcdn.icons8.com/office/PNG/30/User_Interface/error-30.png" title="Error" width="30" height="30" />
                </div>
                <div>Not confirmed</div>
              </Grid>
            )}

            {(store.profile.signed_by || []).length ? (
              <div>
                <a onClick={toggleShareIdentityModal}>Share Identity</a>
              </div>
            )
            : (
              <div>
                <a onClick={toggleShareIdentityModal}>Ask for confirmation</a>
              </div>
            )}
          </Grid>

          {(store.profile.signed_by || []).length ? (
            <div className='u-ml+ u-mt--'>
              <Grid smallGutter>
                {store.profile.signed_by.map(item => (
                  <Avatar username={item.username} size={32} title={item.username} />
                ))}
              </Grid>
            </div>
          )
          : ''}
        </div>

        <h2 className='Profile__heading u-mt+++'>
          Linked documents &mdash; <a href=''>Add document</a>
        </h2>
        <div className='InfoList u-mt'>
          <div className='InfoList__empty'>
            <h3>No documents</h3>
          </div>
          {/* <div className='InfoList__item'>
            <div className='InfoList__item-icon InfoList__item-icon--pdf'>
              <img src="https://maxcdn.icons8.com/ultraviolet/PNG/40/Files/pdf-40.png" title="PDF" width="40" height="40" />
            </div>
            <div className='InfoList__item-value'>English certificate</div>
            <div className='InfoList__item-link'>
              <a href=''>
                <img src="https://maxcdn.icons8.com/windows10/PNG/32/Network/download_from_cloud-32.png" title="Download From Cloud" width="32" height="32" />
              </a>
            </div>
          </div>
          <div className='InfoList__item'>
            <div className='InfoList__item-icon InfoList__item-icon--pdf'>
              <img src="https://maxcdn.icons8.com/ultraviolet/PNG/40/Files/png-40.png" title="PNG" width="40" height="40" />
            </div>
            <div className='InfoList__item-value'>Marriage certificate</div>
            <div className='InfoList__item-link'>
              <a href=''>
                <img src="https://maxcdn.icons8.com/windows10/PNG/32/Network/download_from_cloud-32.png" title="Download From Cloud" width="32" height="32" />
              </a>
            </div>
          </div> */}
        </div>

        <h2 className='Profile__heading u-mt+++'>Immigration details</h2>
        <div className='InfoList u-mt'>
          <div className='InfoList__empty'>
            <h3>No details yet</h3>
          </div>
        </div>

        {/* <h2 className='u-mt+++'>Emigration details</h2>
        <div>...</div> */}

        {/* <div><b>Date of birth:</b> 10.02.1992</div>
          <div><b>Nationality:</b> Poland</div>
          <div><b>Place of birth:</b> Mońki, Poland</div>
          <div><b>Sex:</b> Male</div>
          <div>Profile image</div>
          <div>Signature image</div>
          <div>Father's name</div>
          <div>Mother's name</div>
          <div>Address</div> */}
      </div>
    )}

    <Modal title='Share your identity' subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' name='share-identity' size='small'>
      <div className='u-ta-c'>
        <img src={`https://${process.env.SYNCANO_INSTANCE_NAME}.syncano.space/registry/get-entry-svg/?datakey=${store.profile.datakey}`} alt='' />
      </div>

      <div className='u-ta-c'>or share a link</div>

      <div className='u-mt'>
        <Input
          full
          readOnly
          onClick={e => e.target.select()}
          type='text'
          value={`${window.location.origin}/#/sign-entry?datakey=${store.profile.datakey}`}
          />
      </div>
    </Modal>

    <style jsx>{`
      .Profile {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
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
  </div>
)

ProfileSummary.init = ({
  services: {ui},
  stores: {user: store, pending}
}) => {
  return {
    store,
    pending,
    toggleShareIdentityModal: () => ui.toggleModal('share-identity')
  }
}

export default connect(ProfileSummary)
