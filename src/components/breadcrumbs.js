const Breadcrumbs = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
      }

      div :global(a) {
        color: #999;
        font-size: 24px;
        line-height: 1.7;
        font-weight: 300;
      }

      div :global(.active) {
        color: #111;
      }

      div > :global(*) + :global(*) {
        margin-left: 15px;
      }

      div > :global(*) + :global(*)::before {
        content: '\\f054';
        font-family: FontAwesome;
        font-size: 14px;
        margin-right: 15px;
        position: relative;
        top: -2px;
      }
    `}</style>
  </div>
)

export default Breadcrumbs
