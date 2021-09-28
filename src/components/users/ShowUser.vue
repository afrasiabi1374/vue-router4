<template>
    <div>
       <h1 style="color:green"> {{title}} </h1>
        <h2>name : {{route.query.name}} </h2>
        <h2>name : {{route.query.lastName}} </h2>
        <h2>name : {{route.hash}} </h2>


    </div>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
export default {
    setup(){
        const route = useRoute()
        const title = ref("Show user page")
        //console.log(useRouter,useRoute)
        return{
            title,
            route
        }
    }
}
</script>

<style>

</style>