import {action} from 'mobx'

export default class UI {
  @action.bound toggleModal (name) {
    this.store.modal = this.store.modal === name ? null : name
  }
}
