<template>
  <footer class="footer_nav">
		<a @tap="$router.goTo('/')" :class="['nav_list',dataSelect==''?'main_color':'nav_list_color']">
		  <div class="icon iconfont icon-index nav_list_img"><div class="prompt main_bg" v-if="tabbar_prompt.one">{{tabbar_prompt.one}}</div></div>
		  <span>首页</span>
		</a>
		<a @tap="$router.goTo('demo2')" :class="['nav_list',dataSelect=='2'?'main_color':'nav_list_color']">
		  <div class="icon iconfont icon-index nav_list_img"><div class="prompt main_bg" v-if="tabbar_prompt.two">{{tabbar_prompt.two}}</div></div>
		  <span>vuex</span>
		</a>
		<a @tap="$router.goTo('shop')" :class="['nav_list',dataSelect=='3'?'main_color':'nav_list_color']">
		  <div class="icon iconfont icon-store_icon nav_list_img"><div class="prompt main_bg" v-if="tabbar_prompt.three">{{tabbar_prompt.three}}</div></div>
		  <span>商城</span>
		</a>
		<a @tap="$router.goTo('my')" :class="['nav_list',dataSelect=='4'?'main_color':'nav_list_color']">
			<div class="icon iconfont icon-wode nav_list_img"><div class="prompt main_bg" v-if="tabbar_prompt.four">{{tabbar_prompt.four}}</div></div>
			<span>我的</span>
		</a>
	</footer>
</template>

<script>
import Vuex from 'vuex';
export default {
  props: ["data-select"],
  name: 'tabbar',
  data () {
		return {
			
		}
  },
  computed:{
		...Vuex.mapState(["tabbar_prompt"]),
	},//vuex里的数据加入到data
  created:function(){
  	
  }
}
</script>

<style scoped>
.footer_nav {
  display: flex;
  background-color: rgba(254,253,252,1);
  left: 0;
  right: 0;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  z-index: 11;
  box-shadow: 1px 5px 15px rgba(50,50,50,.3);
  border-top: 1px solid #dcdcdc;
  height: 50px;
  box-sizing: border-box;
}
.footer_nav .nav_list {
  font-size: 12px;
  line-height: 1;
  flex: 1;
  display: flex;
  text-align: center;
  padding-top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer_nav .nav_list_color{
  color: #a0a0a0;
}
.footer_nav .nav_list span{
	padding-top: 3px;
}
.footer_nav .nav_list_img{
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  position: relative;
}
</style>
