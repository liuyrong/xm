<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow />
    <div class="list">
      <div class="item" v-for="(item,index) in cartList" :key="index">
        <van-checkbox class="inp" v-model="item.checked" />
        <van-card :title="item.name" :thumb="item.img" :price="item.price" class="card">
          <template #num>
            <van-stepper v-model="item.nums" />
          </template>
        </van-card>
      </div>
    </div>

    <van-submit-bar :price="totalAmounc" button-text="提交订单" style="bottom:1rem;">
      <!-- <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox> -->
      <input type="checkbox" :checked="allCheck" @click="checkAll"> 全选 </input>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: [],
      checked: true,
      allCheck:false
    };
  },
  created() {},
  mounted() {
    this.cartList = this.$store.state.cartList;
  },
  methods: {
    // 全选中得状态
    checkAll() {
      // console.log(e);
      // //循环修改状态
      // this.cartList.map((item) => {
      //   item.checked = e;
      // });
      
      //先取反
      this.allCheck = !this.allCheck;
      this.cartList.forEach((item) => {
        item.checked = this.allCheck;
      });
    },
  },
  watch: {
    cartList: {
      // handler(newValue) {
      //   console.log(newValue);
      //   let num = 0;
      //   // 找出购物车列表选中得表现
      //   newValue.forEach((item) => {
      //     if (item.checked == true) {
      //       num++;
      //     }
      //   });
      //   if (newValue.length == num) {
      //     this.checked = true;
      //   } else {
      //     this.checked = false;
      //   }
      // },
      // deep: true,
      
     handler(val) {
        this.allCheck = this.cartList.every((item) => {
            return item.checked
         })
      },
      deep: true,
    },
    

  },
  computed: {
    totalAmounc() {
      // 数据的提交
      if (this.cartList.length > 0) {
        this.$store.commit("addCart", this.cartList);
      }
      let amouunts = 0;
      this.cartList.forEach((item) => {
        if (item.checked == true) {
          amouunts += item.nums * item.price;
        }
      });
      return amouunts * 100;
    },
  },
};
</script>

<style scopedv lang="scss">
.list {
  width: 100%;
  .item {
    padding: 0.1rem;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    .inp {
      width: 15%;
    }
    .card {
      flex: 1;
    }
  }
}
</style>
