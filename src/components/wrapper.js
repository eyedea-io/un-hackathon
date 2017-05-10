const Wrapper = ({children, className = ''}) => (
  <div className={className}>
    {children}

    <style jsx>{`
      div {
        margin-left: auto;
        margin-right: auto;
        max-width: 960px;
      }
    `}</style>
  </div>
)

export default Wrapper
