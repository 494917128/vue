<template>
	<div id="app">
		<transition :name="transitionName">
	        <keep-alive :include="$store.state.keep_alive">
	        	<router-view class="Router"></router-view>
	        </keep-alive>
    	</transition>
    </div>

</template>

<script>
export default {
  name: 'App',
  data: function(){
  	return {
  		transitionName:  '',
  		timeout:"",
  		// 会被缓存的路由
		
  	}
  },
  watch: {
		'$route' (to, from) {
			let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
			if(isBack=='tabbar'){// 监听是否在tabbar页面
				this.transitionName = 'slide-tabbar'
			} else if(isBack) {
				this.transitionName = 'slide-right'
			} else {
				this.transitionName = 'slide-left'
			}
			api.isLogin('#'+to.path,this)  //  判断在登录页中有userid直接到首页，别的页面没有userid直接去登录页
			
			
			// 储存页面滚动高度
			var top = isBack===true?0:$(".container:first").scrollTop()||0;//是返回的页面清除储存的滚动高度
			this.$store.commit('containerScroll',{top:top,path:from.path})
			setTimeout(()=>{
				$(".container:last").scrollTop(this.$store.state.container_scroll[to.path]||0)
			},0)
			
			
			// 设置可缓存页面
			this.$store.commit('setKeepActive',{isBack:isBack,name:from.name})
			
			
			// 设置系统状态栏背景颜色
			this.setStatusBar("#"+to.path)
			
			
			this.$router.isBack = false
		}
	},
	methods:{
		// 设置系统状态栏背景颜色
		setStatusBar:function(hash){
			mui.plusReady(function() {
		  		if(hash=="#/swiper"){
					plus.navigator.setStatusBarBackground("#FFFFFF");
				}else{
					plus.navigator.setStatusBarBackground("#EE5C42");
				}
		  	})
		}
	},
	mounted:function(){

	},
  created:function(){
  	  	this.setStatusBar(window.location.hash)
		api.isLogin(window.location.hash,this)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
