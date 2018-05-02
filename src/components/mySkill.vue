<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			
			
			<ul class="mui-table-view" v-for="items of setting_list">
				<li class="mui-table-view-cell" v-for="item of items" @tap="item.href?$router.goTo(item.href):''">
					<span class="mui-badge" :style="{'right':item.href}" v-if="item.content">{{item.content}}</span>
					{{item.text}}
					<i class="iconfont icon-right" v-if="item.href"></i>
				</li>
			</ul>

		</div>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'count',
    data(){
        return{
            title:"我的技术",
			setting_list:[
				[{
					text: '基础',
					href: '',
					content: '',
				}],
				[{
					text: 'html5+css3',
					href: '',
					content: '',
				},{
					text: 'bootstarp',
					href: '',
					content: '',
				},{
					text: 'jquery',
					href: '',
					content: '',
				},{
					text: 'js',
					href: '',
					content: '',
				}],
				[{
					text: '会用',
					href: '',
					content: '',
				}],
				[{
					text: '微信小程序',
					href: '',
					content: '',
				},{
					text: 'vue',
					href: '',
					content: '',
				},{
					text: 'vue-router',
					href: '',
					content: '',
				},{
					text: '.vue',
					href: '',
					content: '',
				},{
					text: 'webpack',
					href: '',
					content: 'vue-cli',
				},{
					text: 'vuex',
					href: '',
					content: '',
				},{
					text: 'hbuilder',
					href: '',
					content: '',
				}],
				[{
					text: '以下只会一点',
					href: '',
					content: '',
				}],
				[{
					text: 'MYSQL',
					href: '',
					content: '',
				},{
					text: 'PHP',
					href: '',
					content: '',
				},{
					text: 'react',
					href: '',
					content: '',
				}],
				[{
					text: '常用的插件',
					href: '',
					content: '',
				}],
				[{
					text: 'Echarts.js',
					href: '',
					content: '图表插件',
				},{
					text: 'webuploader.js',
					href: '',
					content: '上传插件',
				},{
					text: 'swiper.js',
					href: '',
					content: '轮播插件',
				},{
					text: 'iconfont',
					href: '',
					content: '图标库',
				},{
					text: '百度地图',
					href: 'mySkillMap',
					content: '',
				}],
				[{
					text: 'MUI技术',
					href: '',
					content: '',
				}],
				[{
					text: '语音输入',
					href: 'myMuiSpeech',
					content: '',
				},{
					text: '第三方登录',
					href: 'myMuiLogin',
					content: '',
				},{
					text: '第三方支付',
					href: 'myMuiPay',
					content: '',
				},{
					text: '第三方分享',
					href: 'myMuiShare',
					content: '',
				},{
					text: '扫描二维码',
					href: 'myMuiScan',
					content: '',
				},{
					text: '系统状态栏颜色',
					href: 'myMuiStatusBar',
					content: '',
				},{
					text: '摄像头',
					href: 'myMuiCamera',
					content: '',
				},{
					text: '窗口嵌套',
					href: 'myMuiWebview',
					content: '',
				}]
			]
        }
    },
    components: {
        myheader
    },
    methods:{
        
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
.mui-table-view{
	margin-top: 15px;
	font-size: 15px;
	position: inherit;
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
</style>
