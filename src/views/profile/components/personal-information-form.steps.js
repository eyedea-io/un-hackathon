export default [
  {
    content: () => (
      <div>
        <h1>Hello Stranger</h1>
        <p className='u-mt-'>How should we call you? <br /> Press enter to confirm or skip.</p>
      </div>
    ),
    fields: ['fullname']
  },
  {
    content: () => (
      <div>
        <h1>Your birth date</h1>
      </div>
    ),
    fields: ['birth_date']
  },
  {
    content: () => (
      <div>
        <h1>Nationality</h1>
      </div>
    ),
    fields: ['nationality']
  },
  {
    content: () => (
      <div>Updating profile...</div>
    )
  }
]
