<template>
   <div class="lyr_k">
      <div class="lyr_p">
        <p>全民砍价➡</p>
      </div>
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
</template>

<script>
export default {
    name:"",
    props:["KanList"],
    data() {
        return {

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

<style  lang="scss" scoped>
 .lyr_k {
    width: 100%;
    .lyr_p {
      margin-top: 0.4rem;
      font-size: 0.35rem;
      text-align: center;
    }
    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.1rem;
      box-sizing: border-box;
      background-color: #ffffff;
      .item-left {
        width: 30%;
        img {
          width: 100%;
        }
      }
      .item-right {
        width: 70%;
        //   background-color: red;
        p {
          margin-top: 10px;
        }
        ol {
          display: flex;
          justify-content: space-around;
          margin-top: 0.4rem;
        }
      }
    }
  }
</style>
