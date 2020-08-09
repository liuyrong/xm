<template>
  <div class="box">
    <!-- 头部搜索 -->
    <van-search placeholder="请输入商品名称" @click="toogle"/>
    <!-- 左边导航栏 -->
    <div>
      <van-tree-select :items="categroy" :main-active-index.sync="active" class="tree">
        <template #content>
          <div id="sub_Fen">
            <div class="tu" v-for="(item,index) in getCate" :key="index" @click="gotiao(item.id)">
              <img :src="item.icon" />
              <p>{{item.name}}</p>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      categroy: [{ text: "所有分类", id: 0 }],
      subFen:[],

    };
  },
  created() {},
  mounted() {
    this.getFen();
  },
  computed: {
    getCate() {
        let data=this.subFen
      // if
      if (this.active == 0) {
        return data;
      }
      let id = this.categroy[this.active].id;
      return data.filter((item) => {
        return item.pid == id;
      });
    },
  },
  methods: {
    getFen() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/category/all",
      }).then((res) => {
        console.log(res);
        let data = res.data.forEach((item) => {
          if (item.pid == 0) {
            let object = new Object();
            object.id = item.id;
            object.text = item.name;
            this.categroy.push(object);
          }
        });
        this.subFen = res.data;
      });
    },
      gotiao(cid){
      this.$router.push("/xq/"+cid);
    },
    toogle(){
      this.$router.push("/search")
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  .tree {
    height: 100% !important;
  }
  #sub_Fen {
    width: 70%;
    max-height: 85%;
    position: fixed;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    .tu {
      width: 30%;
      margin: 1%;
      img {
        width: 98%;
        height: 80px;
      }
      p {
        line-height: 45px;
      }
    }
  }
}
</style>
