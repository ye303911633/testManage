<template>
  <div class="Login">
    <el-form label-width="80px"
             style="width:500px;margin: 50px auto;">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"
                  ref="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"
                  @change="goLoginBtn"></el-input>
      </el-form-item>
    </el-form>
    <el-row size="medium">
      <el-button type="primary"
                 @click="goLoginBtn">登录</el-button>
    </el-row>
  </div>
</template>

<script>
import { goLogin } from '@/apis/login.js'
export default {
  data () {
    return {
      formLabelAlign: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    async goLoginBtn () {
      let res = await goLogin(this.formLabelAlign)
      if (res.data.message === '登录成功') {
        this.$message.success(res.data.message)
        localStorage.setItem('token', res.data.data.token)
        this.$router.push({ name: 'Index' })
      }
      console.log(res)
    }
  },

  mounted () {
    this.$refs.username.focus()
  }
}
</script>

<style lang="less" scoped>
</style>
