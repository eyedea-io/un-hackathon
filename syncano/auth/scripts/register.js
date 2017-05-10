import fetch from 'node-fetch'
import {users, data, response} from 'syncano-server'
import {isEmail} from './helpers'

const { username, password } = ARGS.POST

if (isEmail(username)) {
  users
    .where('username', 'eq', username)
    .firstOrFail()
    .then(respondWithAlreadyExists)
    .catch(createUser)
} else {
  respondWithInvalidEmail()
}

function createUser () {
  const user = {
    username,
    password
  }

  users.create(user)
    .then(res => {
      response.json({
        token: res.user_key,
        email: res.email
      })
    })
    .catch(({ response: err }) => {
      err.json().then(data => response.json({data}, 400))
    })
}

function respondWithAlreadyExists () {
  response.json({data: {username: "User already exists."}}, 400)
}

function respondWithInvalidEmail() {
  response.json({data: {username: "Given email is invalid."}}, 400)
}
