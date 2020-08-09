<template>
  <div>
    <van-nav-bar title="购物车页面" />
    <van-card
      v-for="(item,index) in cartList"
      :key="index"
      :price="item.salePrice"
      :title="item.productName"
      :thumb="'/static/img/'+item.productImage"
    >
      <template #thumb>
        <div style="width:100%;display:flex;">
          <van-checkbox v-model="item.checked" />
          <img :src="'/static/img/'+item.productImage" alt style="width:80%" />
        </div>
      </template>
      <template #num>
        <van-stepper v-model="item.num" />
      <button @click="shan(index)">删除</button>

      </template>
    </van-card>
    <van-submit-bar disabled :price="toall" button-text="提交订单" tip-icon="info-o">
      <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [],
      checked: true,
    };
  },
  created() {},
  mounted() {
    this.cartList = this.$store.state.m_cartList;
  },
  computed: {
    toall() {
      if (this.cartList.length > 0) {
        this.$store.commit("addCart", this.cartList);
      }
      let amount = 0;
      this.cartList.forEach((item) => {
        if (item.checked == true) {
          amount += item.salePrice * item.num;
        }
      });
      return amount * 100;
    },
  },
  methods: {
    checkAll(e) {
      this.cartList.map((item) => {
        item.checked = e;
      });
    },
    shan(index){
        this.cartList.splice(index,1)
    }
  },
};
</script>

<style scoped>
</style>
