<template>
  <div class="login-wrapper" :style="{backgroundImage: 'url(' + loginBg + ')' }">
    <div class="login-container">
      <p style="margin-bottom:30px">欢迎您！请登录</p>
      <el-form ref="form" :model="form" :rules="rules" style="width:100%">
        <InputC
          :form="form"
          :dataIndex="'username'"
          :prefixIcon="'el-icon-user'"
          :placeholder="'请输入用户名'"
          :size="'large'"
        />
        <InputC
          :form="form"
          :dataIndex="'password'"
          :type="'password'"
          :prefixIcon="'el-icon-lock'"
          :placeholder="'请输入密码'"
          :size="'large'"
        />
        <div class="code-wrapper">
          <InputC :form="form" :dataIndex="'code'" :placeholder="'请输入验证码'" :size="'large'"/>
          <div style="position:absolute;right:0;top:0;z-index:99">
            <SIdentify :contentWidth="120" :contentHeight="50" @getCode="getCode"/>
          </div>
        </div>
        <el-button type="primary" style="width:100%;height: 50px;" @click="doLogin('form')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import LoginBg from "@/assets/login-bg.png";
  import InputC from "@/components/form/Input";
  import SIdentify from "./imgCode";

  export default {
    name: "Login",
    components: {
      InputC: InputC,
      SIdentify: SIdentify
    },
    data() {
      const checkCode = (rule, value, callback) => {
        if (value.toLowerCase() !== this.identifyCode.toLowerCase()) {
          callback(new Error("验证码不正确"));
        } else {
          callback();
        }
      };
      return {
        loginBg: LoginBg,
        form: {
          username: undefined,
          password: undefined,
          code: undefined
        },
        rules: {
          username: [{required: true, message: "请输入用户名", trigger: "blur"}],
          password: [{required: true, message: "请输入密码", trigger: "blur"}],
          code: [
            {required: true, message: "请输入验证码", trigger: "blur"},
            {validator: checkCode, rigger: "blur"}
          ]
        },
        identifyCode: ""
      };
    },
    mounted() {
    },
    methods: {
      doLogin(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$router.push('/app')
          }
        });
      },
      getCode(e) {
        this.identifyCode = e;
      }
    }
  };
</script>
<style scoped lang="scss">
  @import "@/style/varible.scss";

  .login-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      padding: 40px 70px 70px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0 0 10px #ccc;
      border-radius: 10px;
      p {
        font-size: 28px;
        color: $--color-primary;
      }
      .code-wrapper {
        position: relative;
        margin-bottom: 22px;
        .el-form-item {
          margin-bottom: 0 !important;
        }
      }
    }
  }

  /deep/ .el-form-item__content {
    line-height: 50px !important;
  }
  /deep/ input{
    height: 50px !important;
  }
  /deep/ .el-input__icon{
    font-size: 20px !important;
    line-height: 50px !important;
  }
</style>
