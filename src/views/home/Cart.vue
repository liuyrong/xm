<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow />
    <div class="list">
      <div class="item" v-for="(item,index) in cartList" :key="index">
       <van-checkbox  class="inp" v-model="item.checked"/>
       <van-card :title="item.name" :thumb="item.img" :price="item.price" class="card">
            <template #num>
              <van-stepper v-model="item.nums" />
            </template>
        </van-card>
      </div>
    </div>

    <van-submit-bar :price="totalAmounc" button-text="提交订单" style="bottom:1rem;">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
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
    this.cartList = this.$store.state.cartList;
  },
  methods: {},
  computed:{
totalAmounc(){
    // 数据的提交
    if(this.cartList.length>0){
        this.$store.commit("addCart",this.cartList);
    }
    let amouunts=0;
    this.cartList.forEach(item=>{
        if(item.checked == true){
            amouunts +=item.nums*item.price;
        }
    })
    return amouunts*100;
}
  },
};
</script>

<style scopedv lang="scss">
.list {
  width: 100%;
  .item {
    padding:.1rem;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    .inp{
      width: 15%;
    }
    .card{
      flex:1;
    }
  }
}
</style>
