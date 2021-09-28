import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import User from './components/users/User.vue'
import ShowUser from './components/users/ShowUser.vue'
import Post from './components/Post.vue'
import ChildPost from './components/ChildPost.vue'
import Pic from './components/Pic.vue'
import NewImage from './components/NewImage.vue'



const routes = [
    {path: '/', component:Home},
    {path: '/users', component:User,children:[
        {path: ':id', component:ShowUser},
        {path: 'create', component:User},
        {path: 'edit/2', component:User},
    ]},
    {path: '/posts', component:Post,children:[
        {path: 'childPost', component:ChildPost}
    ]},
    {path: '/pic', component:Pic,children:[
        {path: ':id', component:NewImage}
    ]},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router