// 自定义新路由
import Home from '@/views/home/home'
import Index from '@/views/home/index'
import Fen from '@/views/home/Fen'
import Cart from '@/views/home/Cart'
import Me from '@/views/home/me'
import Xq from '@/views/good/xq'
import Search from '@/views/good/search'
export default [
    {
        path: '/',
        name: "/",
        component: Home,
        redirect: "/index",
        // 二级路由
        children: [
            {
                path: '/index',
                name: "Index",
                component: Index,
                meta: {
                    title: '严选商城首页'
                }
            },
            {
                path: '/fen',
                name: "Fen ",
                component: Fen,
                meta: {
                    title: '严选商城分类'
                }
            },
            {
                path: '/Cart',
                name: " Cart",
                component: Cart,
                meta: {
                    title: '严选商成购物'
                }
            },
            {
                path: '/me',
                name: "Me",
                component: Me,
                meta: {
                    title: '严选商城个人'
                }
            },
        ]
    },
    //一级路由
    {
        path: '/xq/:cid',
        name: "Xq",
        component: Xq,
        meta: {
            title: '详情页'
        }
    },
    {
        path: '/search',
        name: "Search",
        component:Search ,
        meta: {
            title: '搜索页'
        }
    },
]