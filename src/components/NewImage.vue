<template>
  <h1>child route</h1>
  <img src="https://www.gstatic.com/webp/gallery3/3_webp_ll.png">
  <h3>{{ route.query.imgName }}</h3>
  <h3>{{ route.params.id }}</h3>
  <h3>{{ route.hash }}</h3>
</template>

<script>
    import {useRoute} from 'vue-router'
    export default {
        name: 'NewImage',
        setup(){
          const route  =   useRoute()

          return{
            route
          }
        }
    }
</script>

<style>

</style>