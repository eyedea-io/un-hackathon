import { response, logger, data } from 'syncano-server'

const { debug } = logger('get-timeline');


data.registry
  .where('user', META.user.id)
  .orderBy('created_at', 'DESC')
  .list()
  .then(data => {
    debug(JSON.stringify(data))
    response.json(data.map(entry => {
      const createdAt = new Date(entry.created_at).toLocaleDateString();
      return {
        id: entry.id,
        type: entry.type,
        data: entry.data,
        created_at: createdAt,
        datakey: entry.datakey
      }
    }))
  })
