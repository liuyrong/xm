<template>
  <div class="box">
    <router-view></router-view>
    <van-tabbar route v-model="active" class="one">
      <van-tabbar-item to="/index">推荐</van-tabbar-item>
      <van-tabbar-item to="/fen">母婴</van-tabbar-item>
      <van-tabbar-item to="/cart">鞋包</van-tabbar-item>
      <van-tabbar-item to="/me">我的</van-tabbar-item>
    </van-tabbar>
    <div class="header">
      <!-- <div v-for="(item,index) in goodList" :key="index" class="list"> -->
        <!-- <img :src="'/static/img/'+item.productImage" alt />
        <p v-html="item.productName"></p>
        <p v-html="item.salePrice"></p>
        <button >+</button> -->
     
        <van-card
   v-for="(item,index) in goodList"
          :key="index"
        @click="addCart"
          num="2"
          tag="标签"
          :price="item.salePrice"
          :title="item.productName"
          :thumb="'/static/img/'+item.productImage"
>
  <template #footer>
    <van-button size="mini">+</van-button>
   
  </template>
</van-card>
      <!-- </div> -->
    </div>
    <!-- 不能结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      goodList: [],
    };
  },
  created() {},
  mounted() {
    this.goodOne();
  },
  methods: {
    goodOne() {
      this.$axios({
        url: "/static/data.json",
      }).then((res) => {
        console.log(res);
        this.goodList = res.result.list;
      });
    },
    addCart() {
      this.$router.push("/che");
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;

  .one {
    position: fixed;
    top: 0rem;
    // z-index: 10;
  }
  .header {
    margin-top: 1rem;
    width: 100%;
    .list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 30px;
        height: 20px;
      }
      p {
        margin-top: 1rem;
      }
    }
  }
}
</style>
