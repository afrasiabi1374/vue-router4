import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import User from './components/users/User.vue'
import ShowUser from './components/users/ShowUser.vue'
import Post from './components/Post.vue'
import Pic from './components/Pic.vue'



const routes = [
    {path: '/', component:Home},
    {path: '/users', component:User,children:[
        {path: ':id', component:ShowUser},
        {path: 'create', component:User},
        {path: 'edit/2', component:User},
    ]},
    {path: '/posts', component:Post},
    {path: '/pic/:username/:password', component:Pic},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router