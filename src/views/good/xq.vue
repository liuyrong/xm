<template>
  <div>
      <van-nav-bar title="分类商品"  left-arrow  @click-left="goBack"/>
           <Tui :goodList="goodList"  v-if="goodList.length>0" />
      <van-empty description="没有找到商品" v-else/>
  </div>
</template>

<script>
import Tui from "@/components/home/tui.vue";
export default {
  name: '',
  mounted() {
    this.c_id =  this.$route.params.cid;
    // console.log(this.c_id);
    this.getTui();
  },
  data() {
    return {
      c_id: 0,
      goodList:[],
    };
  },
  computed:{
  },
  components:{
    Tui
  },
  methods: {
    //商品列表数据
    getTui() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list",
      }).then((res) => {
        console.log(res.data);
        let data = res.data.filter((item) => {
          return item.categoryId == this.c_id; //判断当前商品是否等于传递过来的分类ID
        });
        this.goodList = data;
      });
    },
    goBack(){
      console.log("test");
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>