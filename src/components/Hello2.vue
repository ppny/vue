<template>
  <div class="hello">
    <mt-field label="选择机构" placeholder="" type="account" v-model="userInfo.orgnazition_name" @click.native="loadOrg"></mt-field>
    <mt-field label="选择流程" placeholder="" type="password" v-model="userInfo.step_list"></mt-field>
    <mt-field label="选择基金" placeholder="" type="account" v-model="userInfo.fund_list"></mt-field>
    <mt-field label="选择投资人" placeholder="" type="password" v-model="userInfo.investor_list"></mt-field>
    <mt-button type="primary" size="large" @click.native="handleClick">确认</mt-button>
    <div class="shadow" v-if="seen">
      <ul>
        <li v-for="item in orgnazitions" v-on:click="handleSelect(item.name,item.uid)">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios'
import Http from '../utils/http'
export default {
  name: 'hello2',
  data () {
    return {
      userInfo: {
        orgnazition_name: "",
        step_list: '',
        fund_list: '',
        investor_list: ''
      },
      info:{
        orgnazition_uid:"",
        modal:'',
        by_invest_uid:'',
        invest_uid:''
      },
      orgnazitions:[],
      popupVisible:false,
      seen:false
    }
  },
  methods: {
    handleClick: function () {
      const router = new Router()
      this.userInfo.password = md5(this.userInfo.password)
      axios.post('/api/login', this.userInfo).then((res) => {
          localStorage.setItem("token",res.data.results.token)
          router.push({path:'./hello2'})
      })
    },
    /**
     * 获取列表
     */
    loadOrg: function() {
      this.popupVisible = true
      this.seen = true
      const data = {}
      data.token = localStorage.getItem("token")
      data.uid = localStorage.getItem("uid")
      Http.get('/api/organization/list',data).then((res) => {
        this.orgnazitions = res.results
      })
      /*axios({
        method: 'get',
        url: '/api/organization/list?uid='+localStorage.getItem("uid")+'&token='+localStorage.getItem("token"),
        data: data,
        header:{
          'Authorization': `Bearer${localStorage.getItem('token')}`,
          'credentials':true
        },
      }).then((res) => {
        console.log(res)
        this.orgnazitions = res.data.results
      });*/
    },

    /**
     * 选择机构
     */
    handleSelect:function(name,uid){
      this.userInfo.orgnazition_name = name,
      this.info.orgnazition_uid = uid,
      this.seen = false
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
  width: 60%;
  position: absolute;
  height: 80%;
  left: 0;
  top: 0;
  bottom:0;
  right: 0;
  margin:auto;
  background: #fff;
  padding: 10px;
}
.shadow{
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  background:rgba(0,0,0,0.3);
}
li{
  line-height: 40px;
  border-bottom: 1px solid #bbb;
}

a {
  color: #42b983;
}
</style>
