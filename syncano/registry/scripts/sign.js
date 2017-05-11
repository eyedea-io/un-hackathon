import QRCode from 'qrcode-svg';
import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-entry-svg');

console.log(ARGS)
console.log(META)

let dataToSign = null

data.registry
  .where('datakey', ARGS.datakey)
  .with('user')
  .first()
  .then(data => {
    if (!data) {
      response('No such entry', 400, 'text/plain')
      process.exit()
    } else {
      debug(JSON.stringify(data))
      dataToSign = data
      const signatures = data.signed_by
      signatures.push(META.user.id)
      return data.registry.update(data.id, { signed_by: signatures })
    }
  })
  .then(resp => {
    debug(resp)
    response('', 200)
  })
  .catch(err => {
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
