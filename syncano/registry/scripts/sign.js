import QRCode from 'qrcode-svg';
import { response, logger, data } from 'syncano-server'

const { debug } = logger('sign');

console.log(ARGS)
console.log(META)

let dataToSign = null

data.registry
  .where('datakey', ARGS.datakey)
  .with('user')
  .first()
  .then(respData => {
    if (!respData) {
      response('No such entry', 400, 'text/plain')
      process.exit()
    } else {
      debug(JSON.stringify(respData))
      dataToSign = respData
      const signatures = respData.signed_by || []
      signatures.push(META.user.id)
      return data.registry.update(respData.id, { signed_by: signatures })
    }
  })
  .then(resp => {
    debug(resp)
    response.json({}, 200)
  })
  .catch(err => {
    console.log(err)
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
