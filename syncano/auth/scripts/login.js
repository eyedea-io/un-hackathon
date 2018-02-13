import fetch from 'axios'
import {users, data, response} from 'syncano-server'

export default (ctx) => {
  const { username, password } = args.ctx
  const AUTH_URL = `https://api.syncano.io/v2/instances/${META.instance}/users/auth/`

  users
    .where('username', 'eq', username)
    .firstOrFail()
    .then(authorizeUser)
    .catch(respondWithInvalidCredentials)

  function authorizeUser() {
    fetch({
      url: AUTH_URL,
      method: 'POST',
      data: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': META.token
      }
    })
      .then(({data}) => {
        response.json({token: data.user_key, username: data.username})
      })
      .catch(respondWithInvalidCredentials)
  }

  function respondWithInvalidCredentials() {
    response.json({data: {detail: 'Given credentials are invalid.'}}, 400)
  }
}
