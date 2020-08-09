<template>
    <div class="box">
        <!-- 头部布局 -->
<div class="user-header">
    <div class="left">
<van-uploader v-model="fileList" />
<!-- <van-icon name="add-o" size="80" color="white" > -->
    </div>
    <div class="rt">
<p >立即登录</p>
<p>退出登录</p>
<p>积分2</p>
    </div>
</div>
<van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"/>
  <div class="order">
<div class="order-header">
    <p><van-icon name="orders-o" size="30"/></p>
    <p>我的订单</p>
      <p><van-icon name="arrow"/></p>
</div>
  </div>
  <van-grid :border="false">
  <van-grid-item icon="photo-o" text="待付款" />
  <van-grid-item icon="photo-o" text="待发货" />
  <van-grid-item icon="photo-o" text="待收货" />
  <van-grid-item icon="photo-o" text="待评价" />
</van-grid>
<div class="nine-box">
  <ul>
      <li>
        <van-icon name="shopping-cart" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="setting" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="point-gift" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="alipay" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="map-marked" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="orders-o" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="orders-o" size="30"/>
        <p>按时艰苦</p>
      </li>
        <li>
        <van-icon name="orders-o" size="30"/>
        <p>按时艰苦</p>
      </li>
  </ul>
</div>
<!--  -->

    </div>
</template>

<script>
export default {
    data() {
        return {
// fileList:[{url:"/static/1.png"}]
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

<style scoped lang="scss">
.box{
    width: 100%;
    background:white;
    .user-header{
        width: 100%;
        padding: .2rem;
        box-sizing: border-box;
        background: burlywood;
        display: flex;
        align-items: center;
         div:nth-of-type(1){
             width: 50%;  
         }
        div:nth-of-type(2){
            width: 40%;
            p{
                line-height: .5rem;
            }
        }
    }
    .order{
        width: 100%;
        margin-top: .3rem;
        // background: yellow;
       .order-header{
        padding: 0 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(207, 207, 205);
        line-height: 0.7rem;
        display: flex;
        align-items: center;
        p:nth-of-type(1){
            width: 10%;
        }
         p:nth-of-type(2){
            width: 80%;
        }
       }
    }
    // 九宫格
    .nine-box{
        width: 100%;
        height: 3rem;
        background: rgb(207, 207, 205);
        ul{
            display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;
          li{
              width: 25%;
              flex-wrap: wrap;
              align-items: center;
              margin-top: 0.3rem;
              text-align: center;
          }
        }
    }
}
</style>
