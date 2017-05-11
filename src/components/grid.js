const Grid = ({children, wrap, split, center, middle, smallGutter, className=''}) => (
  <div className={`
    Grid
    ${wrap ? 'Grid--wrap' : ''}
    ${split ? 'Grid--split' : ''}
    ${center ? 'Grid--center' : ''}
    ${middle ? 'Grid--middle' : ''}
    ${smallGutter ? 'Grid--smallGutter' : ''}
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

      .Grid--center {
        justify-content: center;
      }

      .Grid--middle {
        align-items: center;
      }

      .Grid > :global(*) {
        padding-left: 32px;
      }

      .Grid--smallGutter {
        margin-left: -8px;
      }

      .Grid--smallGutter > :global(*) {
        padding-left: 8px;
      }
    `}</style>
  </div>
)

export default Grid
