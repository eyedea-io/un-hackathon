import ZefirHead from 'zefir/head'

const Head = ({children}) => (
  <ZefirHead>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    {children}
  </ZefirHead>
)

export default Head
