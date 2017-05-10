const Grid = ({children, wrap, split, className=''}) => (
  <div className={`
    Grid
    ${wrap ? 'Grid--wrap' : ''}
    ${split ? 'Grid--split' : ''}
    ${className}
  `}>
    {children}

    <style jsx>{`
      .Grid {
        display: flex;
        margin-left: -32px;
      }

      .Grid--wrap {
        flex-wrap: wrap;
      }

      .Grid--split {
        justify-content: space-between;
      }

      .Grid > :global(*) {
        padding-left: 32px;
      }
    `}</style>
  </div>
)

export default Grid
