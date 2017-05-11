import {computed, observable} from 'mobx'

export default observable({
  profile: {},
  timeline: [],
  entryToSign: {},
  get hasBasicData () {
    return this.profile.fullname
  }
})
