import QRCode from 'qrcode-svg';
import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-entry-svg');

// console.log(ARGS)
// console.log(META)

let dataToSign = null

data.registry
  .where('datakey', ARGS.datakey)
  .with('user')
  .first()
  .then(respData => {
    debug(respData)
    if (!respData) {
      response('No such entry', 400, 'text/plain')
      process.exit()
    } else {
      dataToSign = respData;
      return data.registry
        .where('user', META.user.id)
        .with('user')
        .where('type', 'basic-data')
        .orderBy('created_at', 'DESC')
        .first()
    }
  })
  .then(basicData => {
    debug(JSON.stringify(basicData))
    const summary = {
      'summary' : Object.assign(
        basicData.data,
        { 'block_address': basicData.user.blockaddress },
        { 'datakey': basicData.datakey }
      )
    }
    if (dataToSign.type === 'basic-data') {
      response.json(sumamry)
    } else {
      response.json(
        Object.assign(
          summary,
          { 'data': dataToSign.data }
        )
      )
    }
  })
  .catch(err => {
    console.log(err)
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
