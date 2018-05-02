<template>
  <div class="flex_column" style="justify-content: space-around;">
  	<div style="width: 100%;">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide flex_column" v-for="item of swiper_data">
		    	<div class="swiper_title main_color one_line">{{item.title}}</div>
		    	<div class="swiper_text one_line">{{item.text}}</div>
		    	<img :src="item.img" class="swiper_img" />
		    </div>
		  </div>
		</div>
    	<div class="swiper-pagination"></div>
  	</div>
	<div>
		<div @tap="$router.goTo('register')" class="swiper_button main_border main_bg">注册</div>
		<div @tap="$router.goTo('login')" class="swiper_button main_border main_color">登录</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  data () {
    return {
    	swiper_data:[{
    		title:'Wed的app',
    		text:'自己随便做的app项目',
    		img:require('@/assets/swiper.png')
    	},{
    		title:'Wed的app',
    		text:'使用vue全家桶,weui,HBuilder制作',
    		img:require('@/assets/swiper.png')
    	},{
    		title:'Wed的app',
    		text:'制作时间2018-03-28',
    		img:require('@/assets/swiper.png')
    	}]
    }
  },
  mounted: function () {
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: false,//可选选项，自动滑动
		pagination: {
	    el: '.swiper-pagination',
	  },
	  uniqueNavElements: false,
	})
  },
  created: function(argument) {
  	this.$store.commit("clearScroll")// 清除滚动高度储存
    this.$store.commit('clearKeepActive')// 清除可缓存页面
  },
  destroyed:function(){
  	
  }
}

</script>

<style scoped>
.swiper_title{
	font-size: 24px;
	margin: 0 10px;
}
.swiper_text{
	font-size: 14px;
	color: #999999;
	padding: 10px 0;
	margin: 0 10px;
}
.swiper_img{
	width: 60vw;
	height: 60vw;
	display: block;
	margin: 20px 0;
}

.swiper-pagination{
	position: relative;
	padding-top: 30px;
}


.swiper_button{
	width: 50vw;
	height: 40px;
	margin: 15px 0;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>