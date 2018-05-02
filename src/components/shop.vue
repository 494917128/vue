<template>
  <div class="page">
  	
  	<!--header-->
		<div class="shop_header main_bg flex_between">
			<div class="flex_column shop_header_button">
				<i @tap="$router.goTo()" class="iconfont icon-fenlei"></i>
				分类
			</div>
			<div class="shop_header_input" @tap="$router.goTo('search')">
				<i class="iconfont icon-search"></i>
				搜索商品
			</div>
			<div class="flex_column shop_header_button">
				<i @tap="$router.goTo()" class="iconfont icon-tubiao15"></i>
				消息
			</div>
		</div>
  	
		<div class="container">
			<!--轮播图-->
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <img :src="item.img" @tap="$router.goTo(item.href)" class="swiper-slide swiper_img" v-for="item of swiper_img">
			  </div>
			  <div class="swiper-pagination"></div>
			</div>
			
			<!--导航栏-->
			<div class="shop_nav flex_row">
				<div class="shop_nav_item flex_column" v-for="item of shop_nav" @tap="$router.goTo(item.href)">
					<i :class="['iconfont','shop_nav_icon',item.icon]" :style="{color:item.color}"></i>
					{{item.text}}
				</div>
			</div>
		</div>

		<tabbar data-select="3"></tabbar>
  </div>
</template>

<script>
import tabbar from './module/tabBar'
export default {
  name: 'shop',
  data () {
    return {
    	swiper_img:[{img:require('@/assets/bg_wo.jpg'),href:''},{img:require('@/assets/index1.jpg'),href:''}],
    	shop_nav:[
				{icon:'icon-meishi',color:'#F87F81',text:'主粮',href:''},
				{icon:'icon-lingshi',color:'#F4C380',text:'零食',href:''},
				{icon:'icon-qingjie',color:'#7FC9EC',text:'清洁',href:''},
				{icon:'icon-baojian',color:'#EBAAE1',text:'保健',href:''},
				{icon:'icon-riyongpin',color:'#FF9786',text:'日用品',href:''},
				{icon:'icon-pintuangou',color:'#F5827B',text:'拼团',href:''},
				{icon:'icon-youhuiquan',color:'#BB98DA',text:'优惠券',href:''},
				{icon:'icon-icon--',color:'#87D7C1',text:'全球购',href:''},
				{icon:'icon-duihuan',color:'#FDD738',text:'兑换专区',href:''},
				{icon:'icon-gengduo-tianchong',color:'#81C8EC',text:'更多',href:''}
			],
    }
  },
  mounted: function () {
		new Swiper('.swiper-container',{
			autoplay: true,
			loop : true,
			pagination: {
				el: '.swiper-pagination',
			},
		})
  },

  components: {
    tabbar
  },
  created: function(argument) {
    
  }
}
</script>

<style scoped>
.page{
	background-color: #F2F2F2;
}
.container::-webkit-scrollbar{
  display: none;
}
.container{
  height: calc(100vh - 50px);
  overflow: scroll;
}

.shop_header{
	height: 50px;
	padding: 0 5px;
}
.shop_header_input{
	height: 30px;
	margin: 0 10px;
	padding: 0 10px;
	background-color: rgba(0,0,0,0.1);
	color: #fff;
	flex: 1;
	border-radius: 5px;
	font-size: 14px;
	display: flex;
	align-items: center;
}
.shop_header_input > .iconfont{
	font-size: 16px;
	padding-right: 3px;
}
.shop_header_button{
	padding: 0 10px;
	font-size: 12px;
	line-height: 1;
}
.shop_header_button > .iconfont{
	align-self: stretch;
	font-size: 24px;
	line-height: 1;
	display: flex;
	align-items: center;
	padding-bottom: 3px;
}

.swiper_img{
	width: 100%;
	height: 40vw;
	object-fit: cover;
}
.shop_nav{
	background-color: #fff;
	flex-wrap: wrap;
	margin-bottom: 10px;
}
.shop_nav_item{
	width: 20%;
	height: 70px;
	font-size: 12px;
	color: #666;
}
.shop_nav_icon{
	width: 24px;
	height: 24px;
	font-size: 24px;
	line-height: 1;
	border-radius: 50%;
	margin: 8px 0;
	object-fit: cover;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
