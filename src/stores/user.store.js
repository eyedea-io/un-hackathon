import {computed, observable} from 'mobx'

export default observable({
  profile: {},
  timeline: [],
  get hasBasicData () {
    return this.profile.fullname
  }
})
