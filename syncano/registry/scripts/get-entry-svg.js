import QRCode from 'qrcode-svg';
import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-entry-svg');

console.log(ARGS)
console.log(META)

data.registry
  .where('datakey', ARGS.datakey)
  .first()
  .then(data => {
    if (!data) {
      response('No such entry', 400, 'text/plain')
    } else {
      debug(JSON.stringify(data))
      response(new QRCode(`https://${META.request.HTTP_ORIGIN}/#/sign-entry?datakey=${data.datakey}`).svg(), 200, 'image/svg+xml')
    }
  })
  .catch(err => {
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
