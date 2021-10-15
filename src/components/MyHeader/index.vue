<template>
  <div class="flexCenter">
      <div class="head flexSpace">
    <router-link to="/">Home</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/add">Add card</router-link>
  </div></div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="css" scoped>
.flexCenter {
  display: flex;
  justify-content: center;
}
.flexSpace{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.head {
  width: 450px;
  height: 60px;
  background: #6699ff;
  border-radius: 0px 0px 15px 15px;
}
</style>