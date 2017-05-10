// const example = META.metadata.response.examples[0].example;
// const mimetype = META.metadata.response.mimetype;
// setResponse(new HttpResponse(200, example, mimetype));

// // import _ from 'lodash'
import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-summary');

console.log(ARGS)
console.log(META)

data.registry
  .where('user', META.user.id)
  .where('type', 'basic-data')
  .orderBy('created_at', 'DESC')
  .first()
  .then(data => {
    debug(JSON.stringify(data))
    response.json(data.data)
  })
  .catch(err => {
    err.response.json()
      .then(resp => {
        console.log(resp)
      })
  })
