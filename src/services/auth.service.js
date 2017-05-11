import {action, runInAction} from 'mobx'

export default class {
  @action.bound async rebuildSession () {
    this.store.token = window.localStorage.getItem('token')
    this.services.syncano.setToken(this.store.token)
  }

  @action.bound async login (credentials) {
    const {syncano} = this.services
    const {messages, pending} = this.stores

    pending.set('auth.login')
    messages.delete('auth.login')

    try {
      const {username, token} = await syncano.post('auth/login', credentials)

      this.handleValidAuth(token)
    } catch (err) {
      runInAction('set auth.login error', () => {
        messages.set('auth.login', err.response.data.data)
      })
    }

    runInAction('delete auth.login pending status', () => {
      pending.delete('auth.login')
    })
  }

  @action.bound async register (credentials) {
    const {syncano} = this.services
    const {messages, pending} = this.stores

    pending.set('auth.register')
    messages.delete('auth.register')

    try {
      const {username, token} = await syncano.post('auth/register', credentials)

      this.handleValidAuth(token)
    } catch (err) {
      runInAction('set auth.register error', () => {
        messages.set('auth.register', err.response.data.data)
      })
    }

    runInAction('delete auth.register pending status', () => {
      pending.delete('auth.register')
    })
  }

  @action.bound logout () {
    this.store.token = null
    this.services.syncano.setToken(null)
    this.router.history.push('/')
    window.localStorage.removeItem('token')
    this.stores.user.profile = {}
  }

  @action.bound async handleValidAuth (token) {
    this.store.token = token
    this.services.syncano.setToken(token)
    window.localStorage.setItem('token', token)
  }
}
