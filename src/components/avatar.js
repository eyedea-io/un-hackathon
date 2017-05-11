import {connect} from 'zefir/utils'

const Avatar = ({username, size = 64, title}) => (
  <div className='Avatar'>
    <img src={`http://eightbitavatar.herokuapp.com/?id=${encodeURIComponent(username)}&s=male&size=${size}`} title={title} />

    <style jsx>{`
      .Avatar img {
        border-radius: 100px;
      }
    `}</style>
  </div>
)

export default Avatar
