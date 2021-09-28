<template>
  <h1> home title </h1>
  <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro ducimus repellat ullam veritatis necessitatibus deserunt cumque maiores officia possimus exercitationem iste voluptate quam sint assumenda ipsa reiciendis eaque rerum?
  </p>
  <router-link :to="{name: 'showUser',params:{id:34}}">show user</router-link>
  <button @click="goToShowUser">show user34</button>
    <br><br><br>
    <button @click="goToAks">images</button>

</template>

<script>
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const route = useRoute()
        function goToShowUser(){
            router.push({name: 'showUser',params:{id:34},query:{name:'ali',lastName:'afrasiabi'},hash:"#web"})
            
        }
        function goToAks(){
            router.push({name:'aks',params:{id:10},query:{imgName:"akse zibaa"},hash:'#TAS'})
        }
        const title = ref("home page")
        return{
            title,
            router,
            route,
            goToShowUser,
            goToAks
        }
    }
}
</script>

<style>

</style>