﻿<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			
			<div class="mui-content">
				<div class="head">
					<img src="@/assets/default.png" id="headImage"/>
				</div>
				<div class="top" id="testLogin">
					<span class="mui-icon weixin" id="weixin"></span> 
					<span class="mui-icon qq" id="qq"></span> 
					<span class="mui-icon sinaweibo" id="sinaweibo"></span>
				</div>
			</div>

		</div>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'myMuiLogin',
    data(){
        return{
            title:"第三方登录",
        }
    },
    components: {
        myheader
    },
    methods:{
        
    },
	mounted:function () {
  	// 获取用户头像标签
		var headImage = document.getElementById('headImage');
		var auths
		mui.init({
			swipeBack:true //启用右滑关闭功能
		});
		mui.plusReady(function() {  
			plus.oauth.getServices(function(services) {
				auths = services;
			}, function(e) {
				alert("获取登录服务列表失败：" + e.message + " - " + e.code);
			});
		})
	
		document.getElementById('weixin').addEventListener('tap',function() {
			console.log("微信");
			authLogin('weixin');
		})
		document.getElementById('qq').addEventListener('tap',function() {
			console.log("QQ");
			authLogin('qq');
		})
		document.getElementById('sinaweibo').addEventListener('tap',function() {
			console.log("微博");
			authLogin('sinaweibo');
		})
	
		// 登录操作
		function authLogin(type) {
			var s;
			for (var i = 0; i < auths.length; i++) {
				if (auths[i].id == type) {
					s = auths[i];
					break;
				}
			}
			if (!s.authResult) {
				s.login(function(e) {
					mui.toast("登录认证成功！");
					authUserInfo(type);
				}, function(e) {
					mui.toast("登录认证失败！");
				});
			} else {
				mui.toast("已经登录认证！");
			}
		}
		//注销
		function authLogout() {
			for (var i in auths) {
				var s = auths[i];
				if (s.authResult) {
					s.logout(function(e) {
						console.log("注销登录认证成功！");
					}, function(e) {
						console.log("注销登录认证失败！");
					});
				}
			}
		}
		// 微信登录认证信息
		function authUserInfo(type) {
			var s;
			for (var i = 0; i < auths.length; i++) {
				if (auths[i].id == type) {
					s = auths[i];
					break;
				}
			}
			if (!s.authResult) {
				mui.toast("未授权登录！");
			} else {
				s.getUserInfo(function(e) {
					var josnStr = JSON.stringify(s.userInfo);
					var jsonObj = s.userInfo;
					console.log("获取用户信息成功：" + josnStr);
					showData(type,jsonObj);
					authLogout();
				}, function(e) {
					alert("获取用户信息失败：" + e.message + " - " + e.code);
				});
			}
		}
		// 显示用户头像信息
		function showData(type,data) {
			switch (type){
				case 'weixin':
					headImage.src = data.headimgurl;
					break;
				case 'qq':
					headImage.src = data.figureurl_qq_2;
					break;
				case 'sinaweibo':
					headImage.src = data.avatar_large;
					break;
				default:
					break;
			}
		}
		
	},
    created:function(){
        
    }
}
</script>

<style scoped>
.page{
	background-color: #f2f2f2;
}
.container::-webkit-scrollbar{
  display: none;
}
.container{
  height: calc(100vh - 50px);
  overflow: scroll;
}
.head {
	margin-top: 10px;
}
.head img{
	width: 120px;
	height: 120px;
	margin-left: calc(50% - 60px);
}
.top {
	margin-top: 40px;
}
.sinaweibo {
	position: relative;
	width: 60px;
	height: 60px;
	margin-left: calc(50% - 30px);
	background: url('../assets/icon-sina.png');  
}
.weixin {
	width: 60px;       
	height: 60px; 
	margin-left: calc(50% - 30px);
	background: url('../assets/icon-weixin.png');   
}
.qq {
	width: 60px;
	height: 60px;
	margin-left: calc(50% - 30px);
	background: url('../assets/icon-qq.png');  
}
</style>
