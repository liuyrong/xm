<template>
  <div class="box">
    <div class="login">
      <p class="login-head">用户登录</p>
      <input type="text" class="inp" placeholder="请输入用户名字" v-model="mobile" />
      <input type="password" class="inp" placeholder="请输入密码" v-model="pwd" />
      <van-button type="danger" block class="btn" @click="dologin">立即登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile:"",
      pwd: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 登录得操作
    dologin() {
      if (this.mobile == "" || this.pwd == "") {
        this.$toast.fail("用户名或密码不能为空");
        return false;
      }
       let rep = /^1[34578]\d{9}$/; //手机号的正则
      if (rep.test(this.mobile) == false) {
        this.$toast.fail("手机号不合法，请重新输入");
        return false;
      }
      let formdata = new FormData();
      formdata.append("mobile",this.mobile);
      formdata.append("pwd",this.pwd);
      this.$axios
        .post(
          "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",formdata
        )
        .then((res) => {
          if (res.code != 0) {
            this.$toast.fail(res.msg);
            return false;
          }
          console.log(res);
          res.data.mobile=this.mobile;
          localStorage.setItem("09c_user",JSON.stringify(res.data));
          this.$router.go(-1);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 0.2rem;
  .login {
    width: 90%;
    padding: 0.2rem;
    box-sizing: border-box;
    margin: 0.1rem auto;
    border: 1px solid red;
    border-radius: 0.2rem;
    .login-head {
      line-height: 0.88rem;
      font-size: 0.4rem;
      font-weight: bold;
      text-indent: 0.2rem;
      border-bottom: 1px solid #dddddd;
    }
    .inp {
      width: 100%;
      margin-bottom: 0.3rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border: 1px solid #dddddd;
      border-radius: 0.15rem;
      text-indent: 0.2rem;
    }
    .btn {
      margin-top: 0.3rem;
    }
  }
}
</style>
