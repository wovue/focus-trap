import component from './component'

let Vue = {}

let FocusTrap = {
  install (_Vue) {
    Vue = _Vue
    Vue.component('focus-trap', component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('focus-trap', FocusTrap)
}
export default FocusTrap
