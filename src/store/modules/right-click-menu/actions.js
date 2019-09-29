export default {
  init ({ commit }, { path, nav, vue }) { // 初始化导航
    commit('INIT_NAV', { path, nav, vue })
  },
  active ({ commit }, e) { // hover光标特效
    commit('ACTIVE', e)
  },
  close ({ commit }) { // 关闭
    commit('CLOSE')
  },
  activeOff ({ commit }) { // hover光标特效
    commit('ACTIVE_OFF')
  },
  open ({ commit }, index) { // 打开折叠导航
    commit('OPEN', index)
  },
  collapseState ({ commit }, vue) { // 切换导航展开状态
    commit('COLLAPSE_STATE', vue)
  },
  emptyNav ({ commit }, { path }) { // 清空导航数据
    commit('EMPTY_NAV', { path })
  }
}
