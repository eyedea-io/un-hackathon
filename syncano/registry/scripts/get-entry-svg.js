import QRCode from 'qrcode-svg';
import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-entry-svg');

console.log(ARGS)
console.log(META)

data.registry
  .where('id', ARGS.id)
  .first()
  .then(data => {
    debug(JSON.stringify(data))
    response(new QRCode('http://').svg(), 200, 'image/svg+xml')
  })
  .catch(err => {
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
