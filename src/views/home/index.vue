<template>
    <div class="box">
        <!-- 轮播图区域 -->
        <div class="banner">
             <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="icon">
          <div class="icon-item">
              <van-icon name="star-o" size="30"/>
              <p>签到</p>
          </div>
           <div class="icon-item">
              <van-icon name="point-gift-o" size="30"/>
              <p>礼券</p>
          </div>
           <div class="icon-item">
              <van-icon name="cluster-o" size="30"/>
              <p>砍价</p>
          </div>
           <div class="icon-item">
              <van-icon name="manager-o" size="30"/>
              <p>专栏</p>
          </div>
      </div>
        </div>
        <!-- 砍价部分 -->
        <div class="lyr_k">
            <div class="lyr_p"><p>全民砍价➡</p></div>
             <div class="item" v-for="(item,index) in KanList" :key="index">
      <div class="item-left">
        <img :src="item.pic" />
      </div>
      <div class="item-right">
        <p v-html="item.name"></p>
        <p v-html="item.characteristic"></p>
        <ol>
          <li>
            <p>￥{{item.minPrice}}</p>
            <p>低价</p>
          </li>
          <li>
            <p>￥{{item.originalPrice}}</p>
            <p>原价</p>
          </li>
          <li>
            <p>{{item.stores}}</p>
            <p>限量</p>
          </li>
        </ol>
      </div>
    </div>
        </div>
        <!-- 结束 -->
       <!-- 又一个轮播图、 -->
        <div class="article">
    <p class="a-head">精选专题</p>
    <van-swipe :loop="false" :width="300" class="ar-items" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in lunList" :key="index">
        <img :src="item.pic" />
        <p v-html="item.title"></p>
        <p v-html="item.descript"></p>
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- 结束 -->
  <div class="a1">
    <div v-for="(item,index) in goodList"  :key="index" class="lyr_tui">
      <img :src="item.pic" alt="">
      <p v-html="item.name"></p>
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
            KanList:[],
           lunList:[],
           goodList:[]
        };
    },
    created() {

    },
    mounted() {
        this.getBanner();
        this.getKan();
      this.getLun();
      this.getTui()
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
        // console.log(res);
      });
    },
    getKan() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/kanjia/list"
      }).then(res => {
        if (res.code == 0) {
          let a = Object.keys(res.data.goodsMap).splice(-3);
          let b = [];
          a.forEach(i => {
            b.push(res.data.goodsMap[i]);
          });
          this.KanList = b;
          //   this.cutList = res.data.goodsMap;
          // console.log(res.data.goodsMap);
        }
        // console.log(res);
      });
    },
    // 又一个轮播图
    getLun(){
      this.$axios({
        url:"https://api.it120.cc/small4/cms/news/list"
      }).then(res=>{
        this.lunList=res.data;
        // console.log(res.data)
      })
    },
    // 人气推荐
    getTui(){
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list"
      }).then(res => {
        let arr = res.data.filter(item => {
          return item.name.indexOf("测试") == -1;
        });
        arr.sort(() => {
          return Math.random() - 0.5;
        });
        this.goodList = arr.splice(-6);
        console.log(this.goodList);
      });
    }
    }
};
</script>

<style lang="scss" scoped>
.box{
width: 100%;
// background-color: yellow;
// 轮播开始时
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
// 轮播结束
// 砍价开始
.lyr_k{
    width: 100%;
    .lyr_p{
        margin-top: 0.4rem;
        font-size: 0.35rem;
    }
    .item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  box-sizing: border-box;
  background-color: #ffffff;
  .item-left{
      width: 30%;
      img{
          width: 100%;
      }
  }
  .item-right{
      width: 70%;
    //   background-color: red;
      p{
          margin-top: 10px;
      }
      ol{
          display: flex;
          justify-content: space-around;
          margin-top: 0.4rem;
      }
  }
}
}
.lyr_t{
    height: 2rem;
    background-color: yellow;
}
// 不能结束
.article {
  width: 100%;
  margin-top: 0.15rem;
  background-color: #fff;
  .a-head {
    line-height: 0.88rem;
    text-align: center;
    font-size: 0.35rem;
  }
  .a-head::after {
    content: ">";
    margin-left: 0.2rem;
  }
  .ar-items {
    margin-left: 0.2rem;
    img {
      width: 90%;
      height: 3rem;
      border-radius: 0.2rem;
    }
    p {
      line-height: 0.5rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
// 又一个轮播结束
.a1{
  width: 100%;
  background-color: tan;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  .lyr_tui{
  width: 48%;
margin: 1%;
  img{
    width: 100%;
     height: 4rem;
  }
  p{
    line-height: .44rem;
  }
}
}

}
</style>
