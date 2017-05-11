import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-summary');

console.log(ARGS)
console.log(META)


data.registry
  .where('user', META.user.id)
  .with('user')
  .with('signed_by')
  .where('type', 'basic-data')
  .orderBy('created_at', 'DESC')
  .first()
  .then(data => {
    debug(JSON.stringify(data))
    debug(data.user.blockaddress)
    response.json(
      Object.assign(
        data.data,
        { 'username': data.user.username },
        { 'block_address': data.user.blockaddress },
        { 'datakey': data.datakey },
        { 'signed_by': data.signed_by }
      )
    )
  })
  .catch(err => {
    debug(err)
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
