<template>
  <div>
    <main-master-page>
    <router-view></router-view>
    </main-master-page>


  </div>
</template>

<script>
import MainMasterPage from "@/MasterPage/MainMasterPage"

export default {
  name: 'App',
  components: {
    MainMasterPage
},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
