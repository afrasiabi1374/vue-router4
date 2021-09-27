<template>
  <h1> POSTS title </h1>
  <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro ducimus repellat ullam veritatis necessitatibus deserunt cumque maiores officia possimus exercitationem iste voluptate quam sint assumenda ipsa reiciendis eaque rerum?
  </p>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const title = ref("post page")
        return{
            title
        }
    }
}
</script>

<style>

</style>