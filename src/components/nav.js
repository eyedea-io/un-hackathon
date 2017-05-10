const Nav = ({children, center}) => (
  <div
    className={`
      Nav
      ${center ? 'Nav--center' : ''}
    `}
    >
    {children}
    <style jsx>{`
      .Nav {
        display: flex;
      }

      .Nav > :global(*) + :global(*) {
        margin-left: 15px;
      }

      .Nav :global(.active) {
        color: #111;
      }

      .Nav--center {
        justify-content: center;
      }
    `}</style>
  </div>
)

export default Nav
