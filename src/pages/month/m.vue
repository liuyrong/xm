<template>
  <div class="main">
    <van-nav-bar title="商品标题" />
    <nav>
      <ul>
        <li
          :class="{act: index == active}"
          @click="active=index"
          v-for="(item,index) in navs"
          :key="index"
        >{{item}}</li>
      </ul>
    </nav>
    <div class="content" v-for="(item,index) in navs" :key="index" v-show="active == index">
      <div v-if="index==0">
        <div class="sort">
          <p>综合排序</p>
          <p>销受受两</p>
          <p @click="changeSort">
            价格
            <van-icon name="arrow-up" v-show="sortFlag == 1" />
            <van-icon name="arrow-down" v-show="sortFlag == 2" />
          </p>
        </div>
        <van-card
          :price="item.salePrice"
          :title="item.productName"
          :thumb="'/static/img/'+item.productImage"
          v-for="(item,index) in goodSort"
          :key="index"
        >
          <template #num>
            <van-button @click="addCart(item)">+</van-button>
          </template>
        </van-card>
      </div>
      <div v-else>
        <p style="line-height:2rem;font-size:0.4rem">{{item}}</p>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navs: ["推荐", "母婴", "运动", "奶粉", "汉堡"],
      goodList: [],
      sortFlag: 0, //默认排序
    };
  },
  created() {},
  computed: {
    goodSort() {
      let data = this.goodList;
      if (this.sortFlag == 0) {
        return data;
      }
      data.sort((a, b) => {
        if (this.sortFlag == 1) {
          return a.salePrice - b.salePrice;
        } else if (this.sortFlag == 2) {
          return b.salePrice - a.salePrice;
        }
      });
      console.log(data);
      return data;
    },
  },
  mounted() {
    this.goodOne();
  },
  methods: {
    goodOne() {
      this.$axios({
        url: "/static/data.json",
      }).then((res) => {
        console.log(res);
        this.goodList = res.result.list;
      });
    },
    // 切换排序
    changeSort() {
      if (this.sortFlag == 0 || this.sortFlag == 2) {
        this.sortFlag = 1;
      } else {
        this.sortFlag = 2;
      }
    },
    addCart(good) {
      let goodList = this.$store.state.m_cartList;
      let index = goodList.findIndex((item) => {
        return item._id == good._id;
      });
      // 如果添加的商品不存在的话追加，
      if (index == -1) {
        good.checked = true;
        good.num = 1;
        goodList.push(good);
      } else {
        goodList.map((item) => {
          if (item._id == good._id) {
            item.num++;
          }
        });
      }
      this.$store.commit("addCart", goodList);
      this.$router.push("/che");
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  nav {
    width: 100%;
    overflow: auto;
    background: yellow;
    ul {
      width: 12rem;
      display: flex;
      li {
        width: 2rem;
        line-height: 0.88rem;
        .active {
          color: red;
        }
      }
    }
  }
  .content {
    width: 100%;
    .sort {
      line-height: 0.88rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      p {
        width: 33%;
        text-align: center;
      }
    }
  }
}
</style>
'
