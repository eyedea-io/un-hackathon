const Input = ({full, ...props}) => (
  <div
    className={`
      Input
      ${full ? 'Input--full' : ''}
    `}>
    <input {...props} />
    <style jsx>{`
      div {
        display: inline-block;
      }

      input {
        border: none;
        padding: 10px 0;
        background-color: transparent;
        border-bottom: 2px solid #E5E9F0;
        transition: border-bottom-color .25s;
        font-family: inherit;
      }

      input.is-invalid {
        border-bottom-color: #BF616A;
      }

      input:focus {
        outline: 0;
        border-bottom-color: #3366EE;
      }

      input::placeholder {
        color: #bbb;
      }

      .Input--full,
      .Input--full input {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Input
