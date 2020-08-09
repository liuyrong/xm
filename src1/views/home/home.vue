<template>
    <div>
<router-view></router-view>
<van-tabbar route v-model="active" >
  <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/fen">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/cart"  :badge="this.$store.getters.totalNums">购物</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/me">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
  active: 0,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
