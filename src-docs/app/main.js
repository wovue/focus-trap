require('src-docs/styles/main.scss')
require('wovue-dialog/dist/dialog.css')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTransferDom from 'vue-transfer-dom'

import Root from './components/Root'
import FocusTrap from 'src/main.js'
import Dialog from 'wovue-dialog'

import router from './config/router'
import registerComponents from './config/registerComponents'

Vue.use(VueRouter)
Vue.use(VueTransferDom)
Vue.use(FocusTrap)
Vue.use(Dialog)

registerComponents(Vue)

router.start(Root, '#root')
