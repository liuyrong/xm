<template>
  <div class="box">
    <!-- 头部区域 -->
    <div id="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品基本区域 -->
    <div id="good-info">
      <p v-html="goodsInfo.name"></p>
      <p v-html="goodsInfo.characteristic"></p>
      <div>
        <p>低价: ￥{{goodsInfo.minPrice}}</p>
        <p>原价: ￥{{goodsInfo.originalPrice}}</p>
        <p>库存: {{goodsInfo.stores}}件</p>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div id="good-intro">
      <van-tabs>
        <van-tab title="商品内容">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">内容 2</van-tab>
      </van-tabs>
    </div>
    <!-- 商品介绍结束 -->

    <!-- 底部区域 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="danger" text="立即购买" />
      <van-goods-action-button type="warning" text="加入购物车" @click="skuShow = !skuShow"/>
    </van-goods-action>
    <van-sku v-model="skuShow" :sku="sku" :goods="goods" @add-cart="addCart" />
    <!-- 不能结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      gid: 0,
      banners: [],
      goodsInfo: [],
      content: "",
      skuShow: false,
      sku: {
        tree: [
          {
            k: "颜色",
            k_s: "c1",
            v: [
              { id: 1, name: "红色" },
              { id: 2, name: "蓝色" },
              { id: 3, name: "黄色" },
            ],
          },
          {
            k:"尺码",
            k_s:"s1",
          v:[
             
              { id:5, name:'L' },
              { id:6, name:"XL" },
          ]
          }
        ],
        list: [
          {
            id:1000,
            c1:1,
          s1:7,
          price:100,
          stock_num:100,
          },
           {
            id:1000,
            c1:2,
          s1:5,
          price:100,
          stock_num:100,
          },
            {
            id:1000,
            c1:3,
          s1:8,
          price:100,
          stock_num:100,
          }

        ],
        price:'1.00',// 价格（单位分）
      stock_num: 110 // 当前 sku 组合对应的库存
      },
      goods:{

      },
    };
  },
  created() {},
  mounted() {
    this.gid = this.$route.params.id;
    this.getDeil(); //获取详情页
  },
  methods: {
    getDeil() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: {
          id: this.gid,
        },
      }).then((res) => {
        console.log(res);
        this.banners = res.data.pics; //商品详情轮播图
        this.goodsInfo = res.data.basicInfo; //商品详情
        this.content = res.data.content; //商品的详情
       this.goods.picture = res.data.pics[0].pic;
       this.sku.price = res.data.basicInfo.originalPrice;
        this.sku.stock_num = res.data.basicInfo.stores;
      });
    },
    // 加入购物车然后登录注册
    addCart(){
      let data = localStorage.getItem("09c_user");
        if(data == null){
            this.$toast.fail("请先登录您的账号");
            this.$router.push("/login");
            return false;
      }
    }
    
    
    },
};
</script>

<style lang="scss" >
.box {
  width: 100%;
  background: #f0f0f0;

  #banner {
    width: 100%;

    img {
      width: 100%;
    }
  }
  #good-info {
    width: 100%;
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
    background: #fff;
    p:nth-of-type(1) {
      line-height: 0.7rem;
      font-size: 0.35rem;
    }
    p:nth-of-type(2) {
      color: #808080;
      font-size: 0.3rem;
      line-height: 0.7rem;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 0.26rem;
      p:nth-of-type(1) {
        color: #ff0000;
        width: 40%;
      }
      p:nth-of-type(2) {
        color: #808080;
        width: 30%;
      }
      p:nth-of-type(3) {
        flex: 1;
        color: #808080;
        text-align: right;
      }
    }
  }
  #good-intro {
    margin-top: 0.25rem;
    background: #fff;
    p {
      width: 100% !important;
      margin-top: 0.2rem;
      ul {
        width: 100%;
        li {
          line-height: 0.6rem;
        }
      }
    }
    img {
      width: 100% !important;
    }
  }
}
</style>
