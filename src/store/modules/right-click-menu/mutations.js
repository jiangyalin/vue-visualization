const INIT_NAV = 'INIT_NAV'
const ACTIVE = 'ACTIVE'
const CLOSE = 'CLOSE'
const ACTIVE_OFF = 'ACTIVE_OFF'
const OPEN = 'OPEN'
const COLLAPSE_STATE = 'COLLAPSE_STATE'
const EMPTY_NAV = 'EMPTY_NAV'

export default {
  [INIT_NAV] (state, { path, nav, vue }) {
    state.collapse = vue.$local.get('collapse')
    let navData = []
    let pathIndex = 2
    if (vue.$cookie.get('userType') === 'PLATFORM') pathIndex = 3
    if (path.split('/')[pathIndex] === 'home') navData = nav.home(vue).node
    if (path.split('/')[pathIndex] === 'operations-center') navData = nav.operationsCenter(vue).node
    if (path.split('/')[pathIndex] === 'financial-center') navData = nav.financialCenter(vue).node
    if (path.split('/')[pathIndex] === 'system-management') navData = nav.systemManagement(vue).node
    state.topRouter = path.split('/')[pathIndex]
    state.navData = navData.map(result => {
      if (path.indexOf(result.path) !== -1) state.activeIndexS = result.index
      return {
        ...result,
        active: path.indexOf(result.path) !== -1,
        node: result.node.map(item => {
          if (path.indexOf(item.path) !== -1) state.activeIndexS = item.index
          return {
            ...item,
            active: path.indexOf(item.path) !== -1 && path.indexOf(result.path) !== -1
          }
        })
      }
    })
  },
  [ACTIVE] (state, e) {
    state.top = e.clientY + 1
    state.left = e.clientX + 1
    state.active = true
  },
  [CLOSE] (state) {
    state.active = false
  },
  [ACTIVE_OFF] (state) {
    state.miniNavState = false
    state.activeIndex = false
    state.activeStyle.transform = 'translateY(' + 0 + 'px)'
    state.activeStyle.height = 0 + 'px'
    state.activeStyle.opacity = 0
    state.activeStyle.transition = 0.2 + 's ' + 0.3 + 's ' + 'transform,' + 0.3 + 's ' + 'width,' + 0.3 + 's ' + 'opacity'
  },
  [OPEN] (state, index) {
    state.navData = state.navData.map((data) => {
      return {
        ...data,
        active: false,
        node: data.node.map(node => {
          return {
            ...node,
            active: false
          }
        })
      }
    })
    state.navData[index].active = !state.navData[index].active
  },
  [COLLAPSE_STATE] (state, vue) {
    state.collapse = !state.collapse
    vue.$local.set('collapse', state.collapse, 1000 * 60 * 60 * 24 * 31)
  },
  [EMPTY_NAV] (state, { path }) {
    if (path.indexOf(state.topRouter) === -1) state.navData = []
  }
}
