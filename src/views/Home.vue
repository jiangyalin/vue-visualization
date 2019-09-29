<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"></HelloWorld>
    <right-click-menu></right-click-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import rightClickMenu from './../components/right-click-menu' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    rightClickMenu
  }
})
export default class Home extends Vue {}
</script>
