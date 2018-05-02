<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			<div class="flex_row">
				选择状态栏背景颜色<input type="color" v-model="color" />
			</div>
			<div class="flex_row">
				选择状态栏字体颜色
				<div class="color_select dark" @click="selectColor('dark')"></div>
				<div class="color_select light" @click="selectColor('light')"></div>
			</div>
			<div class="flex_row">
				<div @click="fullscreen(true)" style="font-size: 14px;padding: 5px;color:blue;">全屏</div>
				<div @click="fullscreen(false)" style="font-size: 14px;padding: 5px;color:blue;">不全屏</div>
			</div>
		</div>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'myMuiStatusBar',
    data(){
        return{
            title:"系统状态栏颜色",
            color: "#000000"
        }
    },
    watch:{
    	'color':'selectBackground'
    },
    components: {
        myheader
    },
    methods:{
    	// 设置状态栏背景颜色
        selectBackground:function(){
        	var that = this
    	  	mui.plusReady(function() {
		  		plus.navigator.setStatusBarBackground(that.color);
		  	})
        },
        // 设置状态栏字体颜色
        selectColor:function(type){
        	mui.plusReady(function() {
		  		plus.navigator.setStatusBarStyle(type);
		  	})
        },
        // 设置是否全屏
        fullscreen:function(boolean){
			plus.navigator.setFullscreen(boolean);
		}
    },
	mounted:function () {
		
		
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
.color_select{
	width: 20px;
	height: 20px;
	margin: 0 5px;
}
.dark{
	background-color: #000000;
}
.light{
	background-color: #FFFFFF;
}
</style>
