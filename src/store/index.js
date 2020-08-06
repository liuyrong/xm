import Vue from "vue";
import Vuex from 'vuex';
// 导入vuex插件
import VuexPersistence from 'vuex-persist'
// 本地存储
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cartList: [],//购物车信息
    },
    mutations: {
        addCart(state, payload){
            if(payload.length == 0){
            return false;
            }
            // 追加信息
            state.cartList = payload;
        },

    },
    getters: {
        // 计算购物车商品的总数量
        totalNums(state) {
            let nums = 0;
            state.cartList.forEach(item => {
                nums += item.nums;
            })

            return nums;
        }
    },
    actions: {

    },
    plugins: [vuexLocal.plugin]
})