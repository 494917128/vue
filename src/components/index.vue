<template>
<div class="page">

	<div class="index_header main_bg flex_row">
		<div class="flex_row" style="position: relative;">
			<div class="index_header_item" v-for="(item,index) of title" @tap="slideTo(index)">{{item}}</div>
			<div class="index_header_active" :style="{left: 'calc(10px + ( '+mySwiper.progress*2+' ) * 22vw)'}"></div>
		</div>

		<!--{{mySwiper.progress}}-->
		<i @tap="$router.goTo('addFriends')" class="index_header_button iconfont icon-friend_add"></i>
	</div>

	<div class="swiper-container" id="index_swiper">
	  <div class="swiper-wrapper">
	  	
	  	<!--精选-->
		<div class="swiper-slide" @touchmove="touchmove($event)" @touchstart="touchstart($event)" @touchend="touchend()">
			
			<!--滚动后的顶部浮动-->
			<div class="container1_content_title flex_between container1_content_fixed" v-if="index||index===0" :style="{top:fix_top+'px'}">
				<img :src="page_list[index].photo" class="container1_content_photo" @tap.stop="$router.goTo()">
				<div class="container1_content_info flex_column" @tap.stop="$router.goTo()">
					<div class="flex_row" style="align-items: flex-end;width: 100%;">
						<div class="container1_content_name one_line">{{page_list[index].name}}</div>
						<div class="container1_content_address one_line">{{page_list[index].address}}</div>
					</div>
					<div class="container1_content_pet flex_row">
						<img :src="page_list[index].pet.photo" class="container1_content_pet_photo">
						<div class="container1_content_pet_name one_line">{{page_list[index].pet.name}}</div>
						<div class="container1_content_pet_type one_line">{{page_list[index].pet.type}}</div>
						<i class="iconfont icon-pets container1_content_pet_sex" :style="{color:page_list[index].pet.sex=='male'?'#A4D3EE':'#EE7AE9'}"></i>
					</div>
				</div>
				<div class="container1_content_attention main_color" @tap.stop="$router.goTo()">+ 关注</div>
			</div>
			
			<div class="container" id="content1">
				<div class="mui-scroll">
					
					<!--轮播图-->
					<div class="swiper-container" id="content_swiper">
					  <div class="swiper-wrapper">
						<img :src="item.img" @tap="$router.goTo(item.href)" class="swiper-slide swiper_img" v-for="item of swiper_img">
					  </div>
					  <div class="swiper-pagination"></div>
					</div>
					
					<!--导航栏-->
					<div class="container1_nav flex_row">
						<div class="container1_nav_item flex_column" v-for="item of content1_nav" @tap="$router.goTo(item.href)">
							<img :src="item.icon" class="container1_nav_icon">
							{{item.text}}
						</div>
					</div>
					
					<!--列表内容-->
					<template v-for="item of 5">
						<div class="container1_content" v-for="(items,indexx) of page_list" :data-index="indexx" @tap="$router.goTo()">
							<div class="container1_content_title flex_between">
								<img :src="items.photo" class="container1_content_photo" @tap.stop="$router.goTo()">
								<div class="container1_content_info flex_column" @tap.stop="$router.goTo()">
									<div class="flex_row" style="align-items: flex-end;width: 100%;">
										<div class="container1_content_name one_line">{{items.name}}</div>
										<div class="container1_content_address one_line">{{items.address}}</div>
									</div>
									<div class="container1_content_pet flex_row">
										<img :src="items.pet.photo" class="container1_content_pet_photo">
										<div class="container1_content_pet_name one_line">{{items.pet.name}}</div>
										<div class="container1_content_pet_type one_line">{{items.pet.type}}</div>
										<i class="iconfont icon-pets container1_content_pet_sex" :style="{color:items.pet.sex=='male'?'#A4D3EE':'#EE7AE9'}"></i>
									</div>
								</div>
								<div class="container1_content_attention main_color" @tap.stop="$router.goTo()">+ 关注</div>
							</div>
							<img :src="items.image" class="container1_content_img">
							<div class="container1_content_more flex_between">
								<div class="flex_row" style="align-items: center;">
									<img :src="item.photo" class="container1_content_more_photo" v-for="item of items.like.people" @tap.stop="$router.goTo()">
									<div class="container1_content_likeNum">{{items.like.num}} 赞</div>
								</div>
								<div class="flex_row">
									<i class="iconfont icon-like1" style="font-size: 18px;" @tap.stop="$router.goTo()"></i>
									<i class="iconfont icon-weibiaoti-" @tap.stop="$router.goTo()"></i>
									<i class="iconfont icon-web-icon-" @tap.stop="$router.goTo()"></i>
								</div>
							</div>
							<div class="container1_content_comment" v-for="item of items.comment">
								<span style="color: #007AFF;" @tap.stop="$router.goTo()">{{item.name}}</span>
								<span> 回复 </span>
								<span style="color: #007AFF;" @tap.stop="$router.goTo()">{{item.name}}</span>
								<span>：{{item.text}}</span>
							</div>
							<div class="container1_content_comment_more" v-if="items.comment_more" @tap.stop="$router.goTo()">查看所有{{items.comment_more}}条评论</div>
							<!--浮动的-->
							<div class="container1_content_title flex_between" style="position: absolute;bottom: 0;" v-if="fix_top==-54&&indexx==index">
								<img :src="items.photo" class="container1_content_photo" @tap.stop="$router.goTo()">
								<div class="container1_content_info flex_column" @tap.stop="$router.goTo()">
									<div class="flex_row" style="align-items: flex-end;width: 100%;">
										<div class="container1_content_name one_line">{{items.name}}</div>
										<div class="container1_content_address one_line">{{items.address}}</div>
									</div>
									<div class="container1_content_pet flex_row">
										<img :src="items.pet.photo" class="container1_content_pet_photo">
										<div class="container1_content_pet_name one_line">{{items.pet.name}}</div>
										<div class="container1_content_pet_type one_line">{{items.pet.type}}</div>
										<i class="iconfont icon-pets container1_content_pet_sex" :style="{color:items.pet.sex=='male'?'#A4D3EE':'#EE7AE9'}"></i>
									</div>
								</div>
								<div class="container1_content_attention main_color" @tap.stop="$router.goTo()">+ 关注</div>
							</div>
						</div>
					</template>

				</div>
			</div>
		</div>
		
		<!--动态-->
		<div class="swiper-slide">
			<div class="container mui-content mui-scroll-wrapper" id="content2">
				<div class="mui-scroll">
					<!--数据列表-->
					<ul class="mui-table-view mui-table-view-chevron">
					 	 动态
					</ul>
				</div>
			</div>
		</div>
		
		<!--频道-->
		<div class="swiper-slide">
			<div class="container mui-content mui-scroll-wrapper" id="content3">
				<div class="mui-scroll">
					<!--数据列表-->
					<ul class="mui-table-view mui-table-view-chevron">
					 	 频道
					</ul>
				</div>
			</div>
		</div>
	  </div>
	</div>

	<tabbar data-select=""></tabbar>
	
</div>
</template>

<script>
import tabbar from './module/tabBar'
import Vuex from 'vuex'
export default {
	name: 'index',
	data () {
		return {
			mySwiper:'',
			title:["精选","动态","频道"],
			swiper_img:[{img:require('@/assets/bg_wo.jpg'),href:''},{img:require('@/assets/index1.jpg'),href:''}],
			content1_nav:[
				{icon:require('@/assets/bg_wo.jpg'),text:'话题',href:''},
				{icon:require('@/assets/bg_wo.jpg'),text:'专题',href:''},
				{icon:require('@/assets/bg_wo.jpg'),text:'文章',href:''},
				{icon:require('@/assets/bg_wo.jpg'),text:'认证号',href:''}
			],
			page_list:[{
				name: '名字名字名字名字名字名字名字名字名字名字名字',
				address: '浙江 杭州杭州杭州杭州杭州杭州',
				photo: require('@/assets/index1.jpg'),
				pet:{
					name: '名字名字名字名字名字名字名字名字名字名字名字',
					type: '类别',
					photo: require('@/assets/index1.jpg'),
					sex: 'female'
				},
				image: require('@/assets/index1.jpg'),
				like:{
					people:[{photo:require('@/assets/index1.jpg')},{photo:require('@/assets/index1.jpg')},{photo:require('@/assets/index1.jpg')}],
					num:159
				},
				comment:[{
					name: "名字名字名字名字名字名字名字名字",
					text: "评论评论评论评论评论评论评论评论评论评论评论评论评论评论"
				},{
					name: "名字",
					text: "评论评论"
				},{
					name: "名字",
					text: "评论评论"
				}],
				comment_more:false
			},{
				name: '名字2',
				address: '浙江 温州',
				photo: require('@/assets/index2.jpg'),
				pet:{
					name: '名字',
					type: '类别',
					photo: require('@/assets/index2.jpg'),
					sex: 'female'
				},
				image: require('@/assets/index2.jpg'),
				like:{
					people:[{photo:require('@/assets/index2.jpg')},{photo:require('@/assets/index2.jpg')},{photo:require('@/assets/index2.jpg')}],
					num:159
				},
				comment:[{
					name: "名字",
					text: "评论评论"
				},{
					name: "名字",
					text: "评论评论"
				},{
					name: "名字",
					text: "评论评论"
				}],
				comment_more:10
			}],
			index:'',
			fix_top: 0,
			startX: '',
		    startY: '',
		    isdetachEvents: false,// 判断是否禁止轮播
		}
	},
	methods:{
		slideTo:function(index){
			this.mySwiper.slideTo(index)
		},
		handleScroll: function(){
			var that = this
			var change1 = false,change2 = false
			$('.container1_content').map(function() {
				if($(this).offset().top<=50&&($(this).offset().top+$(this).outerHeight(true)>=50)){
					that.index = $(this).attr("data-index")
					change1 = true
				}
				
				if($(this).offset().top<=119&&($(this).offset().top+$(".container1_content_fixed").outerHeight(true)>=104)){
					that.fix_top = -54
					change2 = true
				}
			})
			if(!change1){
				this.index = ""
			}
			if(!change2){
				this.fix_top = 0
			}
		},
		touchstart:function(e){
			this.startX = e.changedTouches[0].pageX;
		    this.startY = e.changedTouches[0].pageY;
		},
		touchmove:function(e){
			 //获取滑动屏幕时的X,Y
		    var endX = e.changedTouches[0].pageX,
		    endY = e.changedTouches[0].pageY;
		    //获取滑动距离
		    var distanceX = endX-this.startX;
		    var distanceY = endY-this.startY;
		    //判断滑动方向
		    if(Math.abs(distanceX)<Math.abs(distanceY)&&!this.isdetachEvents){//上下滑动禁止swiper,已经禁止的情况下就不多次执行禁止swiper
	        	this.mySwiper.detachEvents(); //移除所有监听事件
	    		this.isdetachEvents = true;
		    }
		},
		touchend:function(){
			if(this.isdetachEvents){
				this.mySwiper.attachEvents();//重新绑定所有监听事件。
	    		this.isdetachEvents = false;
	    	}
		}
	},
	components: {
		tabbar
	},
	mounted: function () {
		var that = this
		// 轮播初始化
		this.mySwiper = new Swiper('#index_swiper', {
			autoplay: false,//可选选项，自动滑动
			resistanceRatio:0,
			watchSlidesProgress: true,
			threshold : 20,
			
		})
		new Swiper('#content_swiper',{
			autoplay: true,
			loop : true,
			pagination: {
				el: '.swiper-pagination',
			},
		})
		// 下拉刷新初始化
		mui.init()
		mui('#content1').pullRefresh({
			container: '#content1',
			down: {
					height:50,//可选,默认50.触发下拉刷新拖动距离,
					callback: function(){console.log(1);setTimeout(()=>{mui('#content1').pullRefresh().endPulldownToRefresh()},1500)}
				},
			up: {
					contentrefresh: '正在加载...',
					callback: function(){}
				}
		})
		mui('#content2').pullRefresh({
			container: '#content2',
			down: {
					height:50,//可选,默认50.触发下拉刷新拖动距离,
					callback: function(){console.log(1);setTimeout(()=>{mui('#content2').pullRefresh().endPulldownToRefresh()},1500)}
				},
			up: {
					contentrefresh: '正在加载...',
					callback: function(){}
				}
		})
		mui('#content3').pullRefresh({
			container: '#content3',
			down: {
					height:50,//可选,默认50.触发下拉刷新拖动距离,
					callback: function(){console.log(1);setTimeout(()=>{mui('#content3').pullRefresh().endPulldownToRefresh()},1500)}
				},
			up: {
					contentrefresh: '正在加载...',
					callback: function(){}
				}
		})



	  	// 滚动监听
	  	document.querySelector('#content1').addEventListener('scroll', function(e) {
			that.handleScroll()
		});
		document.querySelector('#content1').addEventListener('scrollend', function(e) {
			that.handleScroll()
		});
	  	
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
  height: calc(100vh - 100px);
}
.index_header{
	font-size: 16px;
	height: 50px;
	padding: 0 5px;
	position: relative;
	align-content: center;
	justify-content: center;
}
.index_header_item{
	width: 22vw;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.index_header_active{
	position: absolute;
	bottom: 0;
	height: 2px;
	background-color: #fff;
	width: calc(22vw - 20px);
	transition: all 0.3s;
}
.index_header_button{
	height: 100%;
	padding: 0 10px;
	font-size: 24px;
	display: flex;
	align-items: center;
	position: absolute;
	right: 5px;
	top: 0;
}
.index_header_text{
	
}

.swiper_img{
	width: 100%;
	height: 40vw;
	object-fit: cover;
}
.container1_nav{
	background-color: #fff;
}
.container1_nav_item{
	height: 90px;
	flex: 1;
	font-size: 12px;
}
.container1_nav_icon{
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin: 8px 0;
	object-fit: cover;
}

.container1_content_fixed{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
}
.container1_content{
	background-color: #fff;
	padding-bottom: 5px;
	margin-bottom: 15px;
	position: relative;
}
.container1_content_title{
	padding: 5px 10px;
	background-color: #fff;
	width: 100%;
	box-sizing: border-box;
}
.container1_content_photo{
	width: 36px;
	height: 36px;
	border-radius: 50%;
	object-fit: cover;
	margin: 4px 10px 4px 0;
}
.container1_content_info{
	flex: 1;
	overflow: hidden;
	align-items: flex-start;
	padding-right: 10px;
}
.container1_content_name{
	color: #007AFF;
	font-size: 15px;
	overflow: hidden;
}
.container1_content_address{
	font-size: 12px;
	padding-left: 10px;
	color: #999;
	white-space: nowrap;
}
.container1_content_pet{
	background-color: #f2f2f2;
	border-radius: 6px;
	margin-top: 3px;
	height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100%;
}
.container1_content_pet_photo{
	width: 16px;
	height: 16px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 4px;
}
.container1_content_pet_name{
	font-size: 12px;
	line-break: 16px;
	line-height: 1;
}
.container1_content_pet_type:before{
	content: '';
	height: 8px;
	width: 1px;
	background-color: #DCDCDC;
	margin: auto 8px;
	display: block;
}
.container1_content_pet_type{
	display: flex;
	flex-shrink: 0;
	align-items: center;
	font-size: 12px;
	line-height: 1;
	color: #C0C0C0;
}
.container1_content_pet_sex{
	font-size: 12px;
	line-height: 1;
	color: #A4D3EE;
	margin: 0 5px;
}
.container1_content_attention{
	height: 24px;
	border-radius: 5px;
	border: 1px solid #DCDCDC;
	font-size: 14px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.container1_content_img{
	width: 100%;
	display: block;
}
.container1_content_more{
	padding: 6px 5px 10px;
}
.container1_content_more_photo{
	width: 24px;
	height: 24px;
	border-radius: 50%;
	object-fit: cover;
	margin: 0 2px;
}
.container1_content_likeNum{
	color: #999;
	font-size: 13px;
	padding: 0 8px;
}
.container1_content_more .iconfont{
	font-size: 24px;
	line-height: 1;
	width: 24px;
	height: 24px;
	margin: 0 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #999;
}
.container1_content_comment{
	font-size: 13px;
	line-height: 18px;
	padding: 3px 10px;
	overflow: hidden;
	letter-spacing: 0.5px;
}
.container1_content_comment_more{
	color: #0062CC;
	font-size: 12px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 10px;
}
</style>
