import vue from "vue"
import VueRouter from "vue-router"

vue.use(VueRouter)

import pageDatat from '../../data/pageData.json'

var routerList=[
    {
        path:'/',
        component: () => import('../../views/index/pageIndex.vue'),
        props: route => ({ tabIndex: parseInt(route.query.tab) || 0 })
    }
]
pageDatat.first.totalList.forEach((item) => {
    routerList.push({
        path:item.path,
        component: () => import(`@/views/index${item.path}/pageIndex.vue`)
    })
})

console.log("路由地址：",routerList)

const router = new VueRouter({
    routes:routerList,
})

export default router