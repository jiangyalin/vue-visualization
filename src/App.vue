<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App', // 右键菜单
  data () {
    return {
    }
  },
  computed: {},
  props: {
    showState: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      active: 'rightClickMenu/active'
    }),
    doNothing (e) {
      this.active(e)
      window.event.returnValue = false
      return false
    }
  },
  mounted () {
  },
  watch: {}
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
