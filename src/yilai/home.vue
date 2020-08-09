<template>
  <div class="box">
    <!-- 搜索框 -->
    <van-search shape="round" placeholder="请输入搜索关键词" />
    <!--  切换-->
    <van-tabs v-model="active" @change="qh">
      <van-tab :title="item.title" :name="item._id" v-for="(item,index) in fen" :key="index"></van-tab>
    </van-tabs>
    <!-- 价格 -->
    <div class="jq">
      <p>综合</p>
      <p>销量</p>
      <p>新品</p>
      <p @click="jg">价格
             <van-icon name="arrow-up" v-show="sort==1" />
        <van-icon name="arrow-down" v-show="sort==2" />
      </p>
    </div>

    <!-- 数据渲染 -->
    <div class="main">
      <div class="item" v-for="(item,index) in qieh" :key="index">
        <div class="img">
          <img :src="item.pic" />
        </div>
        <p>{{item.title}}</p>
        <div>
            <!-- <p>￥{{item.old_price}}</p> -->
          <p class="price">￥{{item.price}}</p>
          <van-icon name="cart-o" size="20"></van-icon>
        </div>
      </div>
    </div>
    <!-- 数据渲染结束 -->
    <!-- 回到顶部 -->
   <div class="lyr_top" v-show="topShow == true" @click="goTop">
      <van-icon name="arrow-up" size="20"/>
    </div>
    <!--不能结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "0",
      fen: [], //分类
      List: [], //数据渲染
      cid:0,
      topShow:false,
      sort:0
    };
  },
  created() {},
  mounted() {
    //   分类
    this.getFen();
    //   数据渲染
    this.getList();
   window.addEventListener("scroll",()=>{
        let html = document.documentElement || document.body;
        //判断页面滚动的高度，大于可视化窗口的高度clientHeight//窗体高度
        if(html.scrollTop > html.clientHeight){
            this.topShow = true;
        }else{
            this.topShow = false;
        }
    })
  },
  computed:{
    //   切换
qieh() {
      let data = this.List;
    //   价格
  data.sort((a, b) => {
        if (this.sort == 1) {
          console.log("tes");
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    //   进行切换代码
      if (this.cid == 0) {
        return data;
      }
      data = data.filter((item) => {
        //   用原来的cid和现在的cid
        return item.cid == this.cid;
      });

      return data;
    },
  },
  methods: {
    //   分类
    getFen() {
      this.$axios({
        url: "/static/fenlei.json",
      }).then((res) => {
        //   console.log(res)
        this.fen = res.result;
      });
    },
    //   数据
    getList() {
      this.$axios({
        url: "/static/list.json",
      }).then((res) => {
        console.log(res);
        this.List = res.result;
      });
    },
    // 切换
     qh(name, title) {
      console.log(name, title);
      this.cid = name;
    },
    goTop(){
          let html = document.documentElement || document.body;
        html.scrollTop = 0;
    },
    jg(){
        if (this.sort == 0 || this.sort == 2) {
        this.sort = 1;
      } else {
        this.sort = 2;
      }
    }
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  .jq {
    width: 100%;
    display: flex;
    margin-top: 0.3rem;
    height: 0.6rem;
    p {
      width: 15%;
      line-height: 0.6rem;
    }
  }
  // 切换结束
  // 数据渲染开始
  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 46%;
      margin: 2%;
      background: #fff;
      .img {
        img {
          width: 100%;
          height: 3.5rem;
          border-radius: 0.15rem;
        }
      }
      p {
        line-height: 0.8rem;
        width: 100%;
        font-size: 0.32rem;
        text-indent: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div:nth-of-type(2) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.1rem;
        box-sizing: border-box;
        .price {
          color: #ff0000;
        }
      }
    }
  }
  .lyr_top{
      position: fixed;
     padding: 0.2rem;
    // background: #f0f0f0;
    border-radius: 50%;
    bottom: .88rem;
    right: .15rem;
    background: yellow;
  }
}
</style>
