import Wrapper from './wrapper'

const Preload = ({loading, children}) => (
  <div>
    {loading ? (
      <Wrapper className='u-mt'>
        Loading
      </Wrapper>
    )
    : children}
  </div>
)

export default Preload
