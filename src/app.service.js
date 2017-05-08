import {action} from 'mobx'

export default class App {
  @action toggleName = () => {
    const {app} = this.stores

    app.fullName = app.fullName === 'John Doe' ? 'Jane Doe' : 'John Doe'
  }
}