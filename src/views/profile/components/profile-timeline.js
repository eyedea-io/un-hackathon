import {connect} from 'zefir/utils'

const DisplayData = ({type, data, created_at}) => (
  <div>{{
    'basic-data': (
      <div>
        <b>firstname:</b> {data.firstname}
      </div>
    )
  }[type]}</div>
)

const ProfileTimeline = ({store}) => (
  <div className='Timeline'>
    {store.timeline.map(event => (
      <div className='Timeline__item' key={event.id}>
        <div>{event.type}</div>
        <DisplayData {...event} />
      </div>
    ))}

    <style jsx>{`
      .Timeline {
        width: 100%;
      }

      .Timeline__item {
        width: 100%;
        border: 1px solid #E5E9F0;
        border-radius: 5px;
        text-align: left;
        padding: 16px 24px;
      }

      .Timeline__item + .Timeline__item {
        margin-top: 16px;
      }
    `}</style>
  </div>
)

ProfileTimeline.init = ({
  services: {user},
  stores: {user: store}
}) => {
  user.getTimeline()

  return {store}
}


export default connect(ProfileTimeline)
