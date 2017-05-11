import sha1 from 'sha1'
import { response, logger, data } from 'syncano-server'


const { debug } = logger('add-entry');

console.log(ARGS)
console.log(META)

console.log({
  user: META.user.id,
  type: ARGS.type,
  data: ARGS.data,
  datakey: sha1(META.user.id + ARGS.type + ARGS.data.toString())
})

data.registry.create({
  user: META.user.id,
  type: ARGS.type,
  data: ARGS.data,
  datakey: sha1(META.user.id + ARGS.type + ARGS.data.toString())
})
.then(data => {
  debug(JSON.stringify(data))
  response.json({})
})
