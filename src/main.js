import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './style/index.scss'

const globalClickArr = []
Vue.prototype.globalClick = callback => { // 全局点击事件
  globalClickArr.push(callback)
  document.getElementById('app').onclick = e => {
    globalClickArr.forEach(data => {
      data(e)
    })
  }
}

const globalContextmenuArr = []
Vue.prototype.globalContextmenu = callback => { // 全局鼠标右键菜单事件
  globalContextmenuArr.push(callback)
  document.getElementById('app').oncontextmenu = e => {
    globalContextmenuArr.forEach(data => {
      data(e)
    })
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
