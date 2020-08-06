<template>
  <div class="main">
    <van-nav-bar title="严选商城" left-arrow @click-left="$router.go(-1)"/>
    <div class="list">
      <div class="item" v-for="(item,index) in artList" :key="index">
        <img :src="item.pic" alt />
        <p v-html="item.title"></p>
        <p v-html="item.descript"></p>
        <van-button plain type="primary" class="btn" @click="$router.push('/art/wz/'+item.id)">查看详情</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artList: [],
    };
  },
  created() {},
  mounted() {
    this.getArtical();
  },
  methods: {
    getArtical() {
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/list",
      }).then((res) => {
        console.log(res);
        this.artList = res.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  .list {
    width: 100%;
    .item {
      width: 100%;
      position: relative;
      padding: 0.2rem;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 4rem;
      }
      p {
        position: absolute;
        top: 0.3rem;
        width: 100%;
        color: white;
        text-align: center;
        // 超出边界多出来的
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
p:nth-of-type(1){
    top:.3rem;
    line-height: .7rem;
    font-size: .4rem;
}
p:nth-of-type(2){
    top:1.1rem;
    line-height: .6rem;
    font-size: .3rem;
}
.btn{
    position: absolute;
   top: 3rem;
   text-indent:100;
   display: block;
   left: 3rem;
   border-radius: 20px;
   background: none;
   color: white;
}
    }
  }
}
</style>
