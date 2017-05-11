import React from 'react'

export default ({children}) => (
  <div className='Centered'>
    <div>
      {children}
    </div>

    <style jsx>{`
      .Centered {
        text-align: center;
        min-height: calc(100vh - 32px - 64px);
        display: flex;
        align-items: center;
      }

      .Centered > div {
        flex-grow: 1;
      }
    `}</style>
  </div>
)
