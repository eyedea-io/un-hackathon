import Wrapper from './wrapper'

const Preload = ({loading, children}) => loading ? (
  <Wrapper className='u-mt'>
    Loading...
  </Wrapper>
)
: children

export default Preload
