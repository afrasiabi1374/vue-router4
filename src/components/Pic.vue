<template>
  <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="manzareh" @click="router.push('/users/12/ali.ali2')">
  <p>username:{{route.params.username}}</p>
  <p>pass:{{route.params.password}}</p>

</template>

<script>
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
export default {
setup(){
    const route = ref(useRoute())
    const router = ref(useRouter())
    return{
        route,router
    }
}
}
</script>

<style>

</style>