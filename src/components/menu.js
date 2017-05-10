import React from 'react'

export default ({children}) => (
  <ul className='Menu'>
    {React.Children.map(children, item => (
      <li className='Menu__item'>{item}</li>
    ))}

    <style jsx>{`
      .Menu {
        list-style: none;
      }

      .Menu__item {
        display: flex;
        align-items: center;
      }

      .Menu__item > :global(*) {
        flex: 1;
      }

      .Menu__item + * {
        border-top: solid 1px #e5e5e5;
      }

      .Menu :global(a) {
        text-decoration: none;
        font-size: 14px;
        color: #3366EE;
        padding: 12px 15px;
        display: flex;
        align-items: center;
      }

      .Menu :global(.active) {
        font-weight: 500;
        color: #0b0d11;
      }
    `}</style>
  </ul>
)
