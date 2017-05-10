import React from 'react'

export default ({children}) => (
  <div className='Centered'>
    <div>
      {children}
    </div>

    <style jsx>{`
      .Centered > div {
        text-align: center;
        min-height: calc(100vh - 32px - 64px);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
)
