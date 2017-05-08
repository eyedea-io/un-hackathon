export default ({
  stores: {app: {fullName}},
  services: {app: {toggleName}}
}) => (
  <div className='page'>
    Hey: <b>{fullName}</b>
    <button onClick={toggleName}>Log</button>

    <style jsx>{`
      .page {
        padding: 80px;
        font-family: Arial;
      }

      button {
        padding: 7px 14px;
        background: #0366d6;
        border-radius: 3px;
        border: none;
        color: #fff;
      }
    `}</style>
  </div>
)
