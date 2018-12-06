<template>
    <div>
        <div class="login_input">
            <el-input v-model="input1" placeholder="请输入手机号"></el-input>

        </div>
       <div class="login_input">
            <el-input v-model="input2" placeholder="请输入密码"></el-input>
       </div>
       <div class="login_button">
            <el-button type="primary" @click="jump()">登录</el-button>
            <el-button type="info"  @click="cencel()">取消</el-button>
       </div>
       
    </div>
</template>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  },
  methods: {
      jump() {
          localStorage.setItem('user','user');
          this.$router.push('/count')
      },
      cencel() {
         localStorage.setItem('user',''); 
      }
  }
}
</script>
<style scopde>
    .login_input {
        margin-top: 5px;
        width: 70%;
        margin: 10px auto;
    }
    .login_button {
        margin-top: 15px;
    }
</style>

