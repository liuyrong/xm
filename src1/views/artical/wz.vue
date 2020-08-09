<template>
  <div>
    <van-nav-bar title="文章详情" left-arrow @click-left="$router.go(-1)" />
    <div class="art">
      <p v-html="activeInfo.title"></p>
      <img :src="activeInfo.pic" alt="">
      <p v-html="activeInfo.content"></p>
    </div>
    <!-- 不能结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      aid: 0,
      activeInfo:{}
    };
  },
  created() {},
  mounted() {
    //   执行在上
       this.aid =this.$route.params.id;
      this.getArtc();
   
  },
  methods: {
    getArtc(){
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/detail",
        params:{
          id: this.aid
        },
      }).then((res) => {
        console.log(res);
      this.activeInfo=res.data
      });
    },
  },
};
</script>

<style scoped lang="scss">
.art{
    width: 100%;
    padding: .2rem;
    box-sizing: border-box;
    img{
        width: 100%;
    }
}
</style>
