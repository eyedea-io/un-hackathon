import React from 'react'

const InputList = ({children, errors = {}}) => {
  const errorKeys = Object.keys(errors)
  const matchedErrors = React.Children.map(children, input => input.props.name)
  const unmatchedErors = errorKeys.filter(err => matchedErrors.indexOf(err) < 0)

  return (
    <div>
      {React.Children.map(children, input => (
        <div className='Input' key={input.props.name}>
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
        .Input + .Input {
          margin-top: 15px;
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
