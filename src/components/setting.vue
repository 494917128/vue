<template>
  <div class="page">
		<myheader :title="title" back="true"></myheader>

		<div class="container">
			
			<ul class="mui-table-view" v-for="items of setting_list">
				<li class="mui-table-view-cell" v-for="item of items" @tap="$router.goTo(item.href)">
					<span class="mui-badge" v-if="item.content">{{item.content}}</span>
					{{item.text}}
					<i class="iconfont icon-right"></i>
				</li>
			</ul>
			
		  <ul class="setting_button mui-table-view" @tap="logout()">
		  	<li class="mui-table-view-cell">
			      	退出登录
		  	</li>
		  </ul>

		</div>

  </div>
</template>

<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default {
  name: 'my',
  data () {
    return {
    	title: '设置',
    	setting_list:[
    		[{
    			text: '个人资料',
    			href: '',
    			content: '',
    		},{
    			text: '账号安全',
    			href: '',
    			content: '',
    		}],
    		[{
    			text: '消息提醒',
    			href: '',
    			content: '',
    		},{
    			text: '视频播放设置',
    			href: '',
    			content: '',
    		},{
    			text: '黑名单',
    			href: '',
    			content: '',
    		},{
    			text: '通用',
    			href: '',
    			content: '',
    		}],
    		[{
    			text: '小技巧',
    			href: '',
    			content: '',
    		},{
    			text: '打个分呗',
    			href: '',
    			content: '',
    		},{
    			text: '检测新版本',
    			href: '',
    			content: '当前版本1.0.0',
    		},{
    			text: '清除缓存',
    			href: '',
    			content: '',
    		},{
    			text: '关于我',
    			href: '',
    			content: '',
    		}]
    	]
    }
  },
  components: {
    myheader
  },
  methods: {
  	logout: function(){
  		localStorage.removeItem("userId")
  		this.$router.goTo("swiper")
  	},//注销
  },
  created: function(argument) {
    
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
.mui-table-view{
	margin-top: 15px;
	font-size: 15px;
	position: inherit;
}
.mui-table-view .mui-badge{
	right: 35px;
}
.mui-table-view .iconfont{
	position: absolute;
	top: 0;
	bottom: 0;
	right: 15px;
	margin: auto;
	font-size: 13px;
	color: #C0C0C0;
	line-height: 1;
	display: flex;
	align-items: center;
}

.setting_button{
	margin-bottom: 1.17647059em;
	text-align: center;
}
</style>
