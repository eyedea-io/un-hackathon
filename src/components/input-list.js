import React from 'react'

const InputList = ({children, separated, errors = {}, labels = {}}) => {
  const errorKeys = Object.keys(errors)
  const matchedErrors = React.Children.map(children, input => input.props.name)
  const unmatchedErors = errorKeys.filter(err => matchedErrors.indexOf(err) < 0)

  return (
    <div className={`InputList ${separated ? 'InputList--separated' : ''}`}>
      {React.Children.map(children, input => (
        <div className='Input' key={input.props.name}>
          {labels[input.props.name] ? (
            <div className='Input__label'>{labels[input.props.name]}</div>
          ) : null}
          {input}

          {errors[input.props.name] && (
            <div className='Input__message Input__message--error'>{errors[input.props.name]}</div>
          )}
        </div>
      ))}

      {unmatchedErors.map(err => {
        return err === 'success' ? (
          <div className='Input__message Input__message--success' key={err}>{errors[err]}</div>
        )
        : (
          <div className='Input__message Input__message--error' key={err}>{errors[err]}</div>
        )
      })}

      <style jsx>{`
        .InputList--separated .Input + .Input {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid #E5E9F0;
        }

        .Input + .Input {
          margin-top: 15px;
        }

        .Input {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        .Input__label {
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;
          flex-basis: 25%;
          white-space: nowrap;
          padding-right: 30px;
        }

        .Input__message {
          text-align: left;
          font-size: 14px;
          margin-top: 7px;
        }

        .Input__message--error {
          color: red;
        }

        .Input__message--success {
          color: green;
        }
      `}</style>
    </div>
  )
}

export default InputList
