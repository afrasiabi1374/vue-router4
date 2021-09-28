<template>
  <div>
    <h1>app vue</h1>
    <router-link active-class="active" class="mr-2" to="/">Home</router-link>
    <router-link exact-active-class="exact" class="mr-2" to="/users">users</router-link>
    <router-link class="mr-2" to="/posts">posts</router-link>
    <router-link class="mr-2" to="/pic">pic</router-link>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

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
.mr-2{
  margin-right: 2rem;
}
.router-link-active{
  color:green;
}
.router-link-exact-active{
  color: brown;
}
</style>