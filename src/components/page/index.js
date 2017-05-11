import Normalize from './styles/normalize'
// import DevTools from 'mobx-react-devtools'

const Page = ({children}) => (
  <div className='Page'>
    <Normalize />
    {/* <DevTools /> */}

    {children}

    <style jsx>{`
      .Page {
        min-height: 100vh;
        padding: 32px;
      }
    `}</style>

    <style jsx global>{`
      html {
        font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: #6b6c6f;
        overflow-y: scroll;
      }

      a {
        font-weight: 500;
        color: #3366EE;
        cursor: pointer;
        text-decoration: none;
        transition: color .25s;
      }

      a:hover {
        color: #111;
      }

      body,
      h1, h2, h3, h4, h5, h6,
      blockquote, p, pre,
      dl, dd, ol, ul,
      figure,
      hr,
      fieldset, legend {
        margin:  0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        color: #333;
        font-weight: 300;
        line-height: 1.333334;
      }

      h1 {
        line-height: 1.25;
      }

      .u-rule {
        border: 0;
        border-top: 1px solid #E5E9F0;
      }

      .u-mt\\+\\+\\+ { margin-top: 64px }
      .u-mt\\+\\+  { margin-top: 48px }
      .u-mt\\+  { margin-top: 40px }
      .u-mt   { margin-top: 32px }
      .u-mt-  { margin-top: 16px }
      .u-mt-- { margin-top: 8px  }

      .u-mb\\+\\+\\+ { margin-bottom: 64px }
      .u-mb\\+\\+  { margin-bottom: 48px }
      .u-mb\\+  { margin-bottom: 40px }
      .u-mb   { margin-bottom: 32px }
      .u-mb-  { margin-bottom: 16px }
      .u-mb-- { margin-bottom: 8px  }

      .u-ml\\+\\+\\+ { margin-left: 64px }
      .u-ml\\+\\+  { margin-left: 48px }
      .u-ml\\+  { margin-left: 40px }
      .u-ml   { margin-left: 32px }
      .u-ml-  { margin-left: 16px }
      .u-ml-- { margin-left: 8px  }

      .u-ta-l { text-align: left;}
      .u-ta-c { text-align: center;}
      .u-ta-r { text-align: right;}


      @keyframes pulse {
        0% { width: .7em; height: .7em; margin: .4em;  }
        50% { width: 1.1em; height: 1.1em; margin: .2em; }
        100% { width: .9em; height: .9em; margin: .3em; }
      }
    `}</style>
  </div>
)

export default Page
