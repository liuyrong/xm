<template>
    <div class="box">
        <div class="banner">
             <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="icon">
          <div class="icon-item">
              <van-icon name="like" size="30"/>
              <p>签到</p>
          </div>
           <div class="icon-item">
              <van-icon name="like" size="30"/>
              <p>签到</p>
          </div>
           <div class="icon-item">
              <van-icon name="like" size="30"/>
              <p>签到</p>
          </div>
           <div class="icon-item">
              <van-icon name="like" size="30"/>
              <p>签到</p>
          </div>
      </div>
        </div>
        <!-- 不能结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerList:[],
        };
    },
    created() {

    },
    mounted() {
        this.getBanner()
    },
    methods: {
// 第一个渲染
getBanner(){
      this.$axios({
        url: "https://api.it120.cc/small4/banner/list"
      }).then(res => {
        if (res.code == 0) {
          this.bannerList = res.data;
        }
        console.log(res);
      });
    },
    }
};
</script>

<style lang="scss" scoped>
.box{
width: 100%;
background-color: yellow;
.banner{
    width: 100%;
    position: relative;
    img{
        width: 100%;
    }
    .icon{
width: 100%;
height: 2rem;
background-color: white;
position: absolute;
bottom: 0px;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 20px;
p{
    text-align: center;
    margin-top: 0.2rem;
    font-size: 0.35rem;
}
    }
}
}
</style>
