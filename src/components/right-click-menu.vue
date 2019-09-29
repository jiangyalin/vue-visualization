<template>
  <section class="m-right-click-menu">
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
export default {
  name: 'RightClickMenu', // 右键菜单
  data () {
    return {
      isShow: false,
      menu: [{
        label: '菜单项1'
      }, {
        label: '菜单项1'
      }, {
        label: '菜单项1'
      }, {
        label: '菜单项1'
      }, {
        label: '菜单项1'
      }]
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
    close () {
    },
    open () {
    }
  },
  mounted () {
    console.log('dd') // dd
    if (this.showState) this.open()
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
  .m-right-click-menu {
    text-align: center;
    .u-list {
      width: 125px;
      background-color: #fff;
      .u-li {
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        &:hover {
          background-color: #698ce8;
        }
      }
    }
  }
</style>
