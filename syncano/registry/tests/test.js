import Syncano from 'syncano-client'

import _ from 'lodash'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised);

const assert = chai.assert

const s = new Syncano(process.env.SYNCANO_PROJECT_INSTANCE)
// const syncanoCall = function(endpoint, key, params, method) {
//   return fetch(`https://${process.env.SYNCANO_PROJECT_INSTANCE}.syncano.space/${endpoint}`,
//     {
//       method: method,
//       body: JSON.stringify(params),
//       headers: {
//         'Content-Type': 'application/json',
//         'X-USER-KEY': key
//       }
//     }).then(resp => resp.json())
// }
//
// const s = function(endpoint, key, params, method="POST") {
//   return syncanoCall(endpoint, key, params, method)
// }

describe('auth', function() {
  it('register', function(done) {
    const params = {
      username: `${Math.random().toString(36).slice(2)}@test.com`,
      password: "testtest"
    }

    s.post('auth/register', params, { headers: {'Content-Type': 'application/json'}})
    .then(response => {
      assert.property(response, 'token')
      done()
    })
    .catch(err => {
      console.log(err)
      done(err)
    })
  })
})

describe('registry', function() {
  let token = ''
  let objectId = 0

  // it('create or login user in Syncano', function(done) {
  //   const params = {
  //     username: "test-bot",
  //     password: "testtest"
  //   }
  //
  //   s('get-entry-svg', token, params)
  //   .then(response => {
  //     assert.property(response, 'token')
  //     token = response.token
  //     done()
  //   })
  //   .catch(err => done(err))
  // })

  // it('upload video via input', function(done) {
  //   assert.eventually.property(s('synq/upload/', token), 'url').notify(done)
  // })
  //
  // it('upload video via uploader', function(done) {
  //   assert.eventually.property(s('synq/uploader/', token), 'uploader_url').notify(done)
  // })
  //
  // it('list user\'s videos', function(done) {
  //   s('synq/list/', token)
  //   .then(response => {
  //     assert.isArray(response)
  //     objectId = response[0].id
  //     done()
  //   })
  //   .catch(err => done(err))
  // })
  //
  // it('get video object details', function(done) {
  //   const params = {
  //     id: objectId
  //   }
  //   assert.eventually.property(s('synq/details/', token, params), 'video_id').notify(done)
  // })
  //
  // it('update custom user\'s data', function(done) {
  //   const params = {
  //     id: objectId,
  //     payload: {
  //       test: "new test filed"
  //     }
  //   }
  //   assert.eventually.equal(s('synq/update/', token, params), 'Success').notify(done)
  // })
  //
  // it('delete selected object', function(done) {
  //   const params = {
  //     id: objectId
  //   }
  //   assert.eventually.equal(s('synq/delete/', token, params), 'Success').notify(done)
  // })

})
