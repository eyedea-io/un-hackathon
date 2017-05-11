import {action, runInAction} from 'mobx'

export default class User {
  @action.bound async getSummary () {
    const {syncano} = this.services
    const {pending} = this.stores

    pending.set('user.get-summary')

    this.store.profile = await syncano.get('registry/get-summary')

    runInAction('delete user.get-summary pending status', () => {
      pending.delete('user.get-summary')
    })
  }

  @action.bound async getTimeline () {
    const {syncano} = this.services
    const {pending} = this.stores

    pending.set('user.get-timeline')

    this.store.timeline = await syncano.get('registry/get-timeline')

    runInAction('delete user.get-timeline pending status', () => {
      pending.delete('user.get-timeline')
    })
  }

  @action.bound async update (type, data) {
    return await this.services.syncano.post('registry/add-entry', {type, data})
  }

  // @action.bound async update (data) {
  //   const {syncano} = this.services
  //   const {messages, pending} = this.stores
  //
  //   pending.set('user.update')
  //   messages.delete('user.update')
  //
  //   try {
  //     await syncano.post('user/update-profile', data)
  //   } catch (err) {
  //     runInAction('set user.update error', () => {
  //       console.log(err.response)
  //       messages.set('user.update', err.response.data.data)
  //     })
  //   }
  //
  //   runInAction('delete user.update pending status', () => {
  //     pending.delete('user.update')
  //   })
  // }
}
