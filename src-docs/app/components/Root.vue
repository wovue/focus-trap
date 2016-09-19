<template>
  <div>
    <sidebar></sidebar>
    <router-view></router-view>
    <gh-corner v-transfer-dom repo-user="wovue" repo-name="focus-trap" color="#EAE8EB" background="#35495E"></gh-corner>
  </div>
</template>

<script>
  import GhCorner from './GhCorner'
  import Sidebar from './Sidebar'

  export default {
    name: 'Root',
    components: {
      GhCorner,
      Sidebar
    }
  }
</script>
