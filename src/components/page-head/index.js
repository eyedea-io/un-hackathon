import {connect} from 'zefir/utils'
import Link from '../link'
import Wrapper from '../wrapper'
import SecondaryNav from './secondary-nav'

const PageHead = () => (
  <Wrapper>
    <div className='PageHead'>
      <Link to='/'>
        <span className='PageHead__title'>Noora's Identity</span>
      </Link>
      <SecondaryNav />

      <style jsx>{`
        .PageHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .PageHead__title {
          font-size: 18px;
          line-height: 32px;
          color: #333;
        }
      `}</style>
    </div>
  </Wrapper>
)

export default connect(PageHead)
