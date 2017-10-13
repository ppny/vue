<template>
  <div class="hello">
    <mt-field label="邮箱" placeholder="请输入邮箱" type="account" v-model="userInfo.account"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userInfo.password"></mt-field>
    <mt-button type="primary" size="large" @click.native="handleClick">登录</mt-button>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'blueimp-md5'
import Router from 'vue-router'
//import axios from '../utils/http'
export default {
  name: 'hello',
  data () {
    return {
      userInfo: {
        password: '123456b',
        account: '2863960448@qq.com'
      }
    }
  },
  methods: {
    handleClick: function () {
      const router = new Router()
      this.userInfo.password = md5(this.userInfo.password)
      axios.post('/api/login', this.userInfo).then((res) => {
          localStorage.setItem("token",res.data.results.token)
          localStorage.setItem("uid",res.data.results.uid)
          router.push({path:'./hello2'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
