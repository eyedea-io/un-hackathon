import ZefirHead from 'zefir/head'

const Head = ({children}) => (
  <ZefirHead>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' />
    {children}
  </ZefirHead>
)

export default Head
