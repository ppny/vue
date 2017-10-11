<template>
  <div class="hello">
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="userInfo.email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userInfo.password"></mt-field>
    <mt-button type="primary" size="large" @click.native="handleClick">登录</mt-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      userInfo: {
        password: '666666666666',
        email: '7868686@qq.com'
      }
    }
  },
  methods: {
    handleClick: function () {
      console.log(this.userInfo)
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
