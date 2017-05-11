import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-summary');

console.log(ARGS)
console.log(META)


data.registry
  .where('user', META.user.id)
  .with('user')
  .where('type', 'basic-data')
  .orderBy('created_at', 'DESC')
  .first()
  .then(data => {
    debug(JSON.stringify(data))
    debug(data.user.blockaddress)
    response.json(
      Object.assign(
        data.data,
        { 'block_address': data.user.blockaddress },
        { 'datakey': data.datakey }
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
