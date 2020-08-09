// 自定义新路由
import Home from '@/views/home/home'
import Index from '@/views/home/index'
import Fen from '@/views/home/Fen'
import Cart from '@/views/home/Cart'
import Me from '@/views/home/me'
import Che from '@/views/home/che'

export default [
    {
        path: '/',
        name: "/",
        component: Home,
        redirect: "/index",
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
        ],
    },
    // 一级路由
    {
        path: '/che',
        name: " Che",
        component: Che,
        meta: {
            title: '严选商成购物'
        }
    },
    
]