import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import User from './components/users/User.vue'
import ShowUser from './components/users/ShowUser.vue'
import Post from './components/Post.vue'
import ChildPost from './components/ChildPost.vue'
import Pic from './components/Pic.vue'
import NewImage from './components/NewImage.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    {path: '/',name:'home', component:Home},
    {path: '/users',name:"users", component:User,children:[
        {path: ':id',name:"showUser", component:ShowUser},

    ]
},
    {path: '/posts', name:'posts' ,component:Post,children:[
        {path: 'childPost', component:ChildPost}
    ]},
    {path: '/pic', component:Pic,children:[
        {path: ':id',name:'aks', component:NewImage}
    ],beforeEnter:(to,from,next)=>{
        next()
    }
},
    {
        path: '/:pathMatch(.*)*',name:'NotFound',component:NotFound
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if (to.name === 'posts') {
        next('/users')
    }else{
        next()
    }
    next()
})

export default router