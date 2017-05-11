const Input = ({full, type = 'text', ...props}) => (
  <div
    className={`
      Input
      ${type ? `Input--${type}` : ''}
      ${full ? 'Input--full' : ''}
    `}>
    <label>
      <input {...props} type={type} autoComplete={false} />
      <span />
      {props.label}
    </label>
    <style jsx>{`
      div {
        display: inline-block;
      }

      input {
        border: none;
        padding: 14px 12px;
        background-color: #f5f8f9;
        border: 1px solid #E5E9F0;
        border-radius: 5px;
        transition: border-color .25s;
        font-family: inherit;
      }

      input.is-invalid {
        border-color: #BF616A;
      }

      input:focus {
        outline: 0;
        border-color: #3366EE;
      }

      input::placeholder {
        color: #bbb;
      }

      .Input--full,
      .Input--full input {
        width: 100%;
      }

      .Input--radio label {
        cursor: pointer;
        display: inline-block;
        margin-right: 32px;
      }

      .Input--radio input {
        position: absolute;
        opacity: 0;
      }

      input[type="radio"] + span {
        display: inline-block;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 40px;
        border: 1px solid #3366ee;
        margin-right: 10px;
      }

      input[type="radio"] + span:after {
        content: '';
        cursor: pointer;
        width: 0;
        height: 0;
        opacity: 0;
        background-color: #3366EE;
        border-radius: 3em;
        display: inline-block;
        margin-top: 14px;
        margin-left: 14px;
        vertical-align: top;
        transition: .25s ease;
      }

      input[type="radio"]:checked + span:after {
        width: 26px;
        height: 26px;
        opacity: 1;
        margin-top: 2px;
        margin-left: 2px;
      }
    `}</style>
  </div>
)

export default Input
