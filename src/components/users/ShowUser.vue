<template>
    <div>
       <h1 style="color:green"> {{title}} </h1>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const title = ref("Show user page")
        //console.log(useRouter,useRoute)
        return{
            title,
        }
    }
}
</script>

<style>

</style>