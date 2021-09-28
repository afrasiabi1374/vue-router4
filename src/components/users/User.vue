<template>
    <div>
       <h1> USERS title </h1>
       <h1>{{route.params.id}}</h1>
        <h1>{{route.params.name}}</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro ducimus repellat ullam veritatis necessitatibus deserunt cumque maiores officia possimus exercitationem iste voluptate quam sint assumenda ipsa reiciendis eaque rerum?
        </p>   
        <button @click="goToHome">Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter,useRoute} from "vue-router"
export default {
    setup(){
        const title = ref("user page")
        //console.log(useRouter,useRoute)
        const router = useRouter()
        const route = useRoute()
        console.log(route.params);
        function goToHome() {
            router.push('/')
        }
        return{
            title,
            router,
            route,
            goToHome
        }
    }
}
</script>

<style>

</style>