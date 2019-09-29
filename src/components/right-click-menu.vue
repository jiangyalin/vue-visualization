<template>
  <section class="m-right-click-menu" id="j-right-click-menu" v-if="_active" :style="getStyle()" @click.stop="() => {}">
    <ul class="u-list">
      <li class="u-li" v-for="(item, i) in menu" :key="i">
        <p class="u-text">
          {{ item.label }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'RightClickMenu', // 右键菜单
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      top: state => state.rightClickMenu.top,
      left: state => state.rightClickMenu.left,
      menu: state => state.rightClickMenu.menu,
      _active: state => state.rightClickMenu.active
    })
  },
  props: {
    showState: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      active: 'rightClickMenu/active',
      close: 'rightClickMenu/close'
    }),
    getStyle () {
      return {
        top: this.top + 'px',
        left: this.left + 'px'
      }
    },
    a () {
      console.log('test')
    },
    open () {
    }
  },
  mounted () {
    this.globalContextmenu(e => {
      console.log('rr')
      this.active(e)
      window.event.returnValue = false
      return false
    })
    this.globalClick(() => {
      console.log('ccc')
      this.close()
    })
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
  .m-right-click-menu {
    position: fixed;
    z-index: 2000;
    text-align: center;
    .u-list {
      width: 125px;
      background-color: #fff;
      .u-li {
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: #698ce8;
        }
      }
    }
  }
</style>
