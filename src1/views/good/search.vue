<template>
  <div>
    <!-- 搜索部分 -->
    <van-search placeholder="请输入搜索关键词" v-model="keywords" />
<div class="history">
    <p>
        <span>历史记录</span>
        <van-icon name="delete"/>
    </p>
    <div class="history-list">
        <div class="item">
            大家是否健康快乐
        </div>
    </div>
</div>
    <Tui :goodList="searchGood" />
  </div>
</template>

<script>
import Tui from "@/components/home/tui.vue";
export default {
  name: "",

  data() {
    return {
      keywords: "",
      goodList: [],
    };
  },
  created() {},
  mounted() {
    this.getTui();
  },
  computed: {
    //   搜索开始
    searchGood() {
      let data = this.goodList;
      if (this.keywords == "") {
        return [];
      }
      return data.filter(item=>{
          return item.name.indexOf(this.keywords)>-1;
      })
    },
  },
  components: {
    Tui,
  },
  methods: {
    getTui() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list",
      }).then((res) => {
        console.log(res.data);
        this.goodList = res.data;
      });
    },
  },
};
</script>

<style scoped>
</style>
