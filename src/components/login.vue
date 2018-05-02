<template>
	<div class="page">
		<myheader :title="title" back="true"></myheader>
		<div class="mui-table-view">
		  <div class="mui-table-view-cell">
		    <div class="login_list">
		    	<i class="iconfont icon-earth"></i>
		    	中国
		    </div>
		    <div class="list_right">+86<i class="iconfont icon-right"></i></div>
		  </div>
		  <div class="mui-table-view-cell">
		    <div class="login_list">
		    	<i class="iconfont icon-phone"></i>
		    	<input type="number" class="login_input" placeholder="输入手机号码" v-model="phone" />
		    </div>
		    <div class="list_right" v-if="phone" @tap="clearValue('phone')"><i class="iconfont icon-close"></i></div>
		  </div>
		  <div class="mui-table-view-cell">
		    <div class="login_list">
		    	<i class="iconfont icon-suo"></i>
		    	<input type="password" class="login_input" placeholder="输入登录密码" v-model="password" />
		    </div>
		    <div class="list_right" v-if="password" @tap="clearValue('password')"><i class="iconfont icon-close"></i></div>
		  </div>
		</div>
		<div class="flex_row login_button">
			<button @tap="forgetPassword()" class="mui-btn mui-btn-danger mui-btn-outlined">忘记了？</button>
			<button @tap="login()" class="mui-btn mui-btn-danger">登录</button>
		</div>
	</div>
</template>

<script>
import myheader from './module/myheader'
export default {
  name: 'login',
  data () {
    return {
      title:'登录',
      password:'',//密码
      phone:'',//验证码
    }
  },
  components: {
    myheader
  },
  methods: {
    forgetPassword: function(){
    	mui.alert('忘记了管我啥事(～￣▽￣)～ ', '提示');
    },
    login:function(){
      var that = this
		mui.toast('登录成功')
		
	    localStorage.setItem("userId","123")
    	that.$router.goTo("/")
	    
    },
    clearValue:function(key){
    	this[key] = ''
    },
  },
  created: function(argument) {
    
  }
}
</script>

<style scoped>
.page{
	background-color: #F8F8F8;
}
.mui-table-view-cell{
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	height: 50px;
}
.mui-table-view-cell .iconfont{
	padding-left: 5px;
	padding-right: 10px;
	font-size: 20px;
	color: #C0C0C0;
}
.mui-table-view-cell .list_right{
	text-align: right;
    color: #999;
	color: #333;
}
.mui-table-view-cell .list_right .iconfont{
	padding: 0 5px;
	font-size: 16px;
	color: #DCDCDC;
}

.login_list{
	flex:1;
	display: flex;
	align-items: center;
}
.login_input{
	border: none;
	width: 100%;
	margin: 0;
	padding: 0;
	font-size: 14px;
	height: inherit;
}
.login_button{
	padding: 20px 5px;
}
.login_button .mui-btn{
	margin: 0 5px;
	padding: 3px;
	font-size: 15px;
	flex: 1;
	line-height: 2.5;
}
.list_right .iconfont{
	color: #DCDCDC;
}
</style>
