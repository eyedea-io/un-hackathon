import {action, runInAction} from 'mobx'

export default class User {
  @action.bound async fetch () {
    let profile
    const {syncano} = this.services
    const {messages, pending} = this.stores

    pending.set('user.fetch')
    messages.delete('user.fetch')

    try {
      profile = await syncano.get('ticklist-user/get-profile')
    } catch (err) {
      runInAction('set user.fetch error', () => {
        messages.set('user.fetch', err.response.data.message)
      })
    }

    runInAction('delete user.fetch pending status', () => {
      pending.delete('user.fetch')
    })

    return profile
  }

  @action.bound async update (data) {
    const {syncano} = this.services
    const {messages, pending} = this.stores

    pending.set('user.update')
    messages.delete('user.update')

    try {
      await syncano.post('ticklist-user/update-profile', data)
    } catch (err) {
      runInAction('set user.update error', () => {
        console.log(err.response)
        messages.set('user.update', err.response.data.data)
      })
    }

    runInAction('delete user.update pending status', () => {
      pending.delete('user.update')
    })
  }
}
