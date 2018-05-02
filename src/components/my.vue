<template>
  <div class="hello">
		<div class="my_header main_bg flex_between">
			<i @tap="$router.goTo('myCode')" class="my_header_button iconfont icon-erweima"></i>
			<div>{{title}}</div>
			<i @tap="$router.goTo('addFriends')" class="my_header_button iconfont icon-friend_add"></i>
		</div>
	
		<div class="container">
			<div class="my_info" @tap="$router.goTo()">
				<img :src="my_info.photo||img_default" class="my_info_photo">
				<div class="my_info_view">
					<div class="my_info_name">
						<div class="one_line">{{my_info.name}}</div>
						<i :class="['iconfont',my_info.sex=='man'?'icon-man':'icon-woman']"></i>
						<div class="my_level">Lv{{my_info.level}}</div>
					</div>
					<div class="my_info_number one_line">id：{{my_info.id}}</div>
				</div>
				<div class="my_info_home">
					个人主页<i class="iconfont icon-right"></i>
				</div>
			</div>
			
			<div class="my_message">
				<div class="my_message_item" @tap="$router.goTo()">签到</div>
				<div class="my_message_line"></div>
				<div class="my_message_item" @tap="$router.goTo()"><span>消息<div class="prompt main_bg">1</div></span></div>
			</div>
			<div class="my_nav flex_row">
				<template v-for="item of my_nav">
					<div class="my_nav_item flex_column" @tap="$router.goTo(item.href)">
						<div class="my_nav_num">{{item.num}}</div>
						<div class="my_nav_text">{{item.text}}</div>
					</div>
				</template>
			</div>
			
			<template v-for="items of nav_item">
				<div class="my_nav_title flex_between">
					<div>{{items.title}}</div>
					<div class="my_nav_title_more" v-if="items.more" @tap="$router.goTo(items.href)">更多<i class="iconfont icon-right"></i></div>
				</div>
				<div class="my_nav flex_row">
					<template v-for="item of items.list">
						<div class="my_nav_item flex_column" @tap="$router.goTo(item.href)">
							<i :class="['my_nav_icon','iconfont',item.icon]" :style="{color:item.color}"></i>
							<div class="my_nav_text">{{item.text}}</div>
						</div>
						<div class="my_message_line"></div>
					</template>
				</div>
			</template>
			
		</div>

    <tabbar data-select="4"></tabbar>

  </div>
</template>

<script>
import tabbar from './module/tabBar'
import Vuex from 'vuex';
export default {
  name: 'my',
  data () {
    return {
      title: '我的',
      my_info: {
      	id: 233333,
      	name: '王王王王王王王王王王王王王王王王王王王',
     		sex: 'man',
     		photo: '',
     		level: 1,
      },
      my_nav:[{text:'宠钻',num:0,href:''},{text:'宠币',num:0,href:''},{text:'优惠券',num:0,href:''},{text:'礼物',num:0,href:''}],
      nav_item:[{
      	title: '日常管理',
      	more: false,
      	list: [{
      		text: '宠物',
      		icon: 'icon-cat',
      		color: '#89B1FF',
      		href: '',
      	},{
      		text:'宠友',
      		icon: 'icon-gerenzhongxinlv',
      		color: '#83B5FF',
      		href: '',
	  		},{
	  			text:'社区',
	  			icon: 'icon-iconindexsel',
      		color: '#73D7FF',
      		href: '',
  			},{
  				text:'收藏',
  				icon: 'icon-collection-b',
      		color: '#7AD4FF',
      		href: '',
				}]
      },{
      	title: '商城购物',
      	more: true,
      	href: '',
      	list: [{
      		text: '购物车',
      		icon: 'icon-gouwucheman',
      		color: '#FF9582',
      		href: '',
      	},{
      		text: '购物订单',
      		icon: 'icon-dingdan',
      		color: '#FC967F',
      		href: '',
      	},{
      		text: '我的售后',
      		icon: 'icon-shouhoufuwuicon',
      		color: '#FFBA79',
      		href: '',
      	},{
      		text: '收货地址',
      		icon: 'icon-address',
      		color: '#FFB880',
      		href: '',
      	}]
      },{
      	title: '其他',
      	more: false,
      	list: [{
      		text: '账户明细',
      		icon: 'icon-zhanghuchongzhi-copy',
      		color: '#FF7D92',
      		href: '',
      	},{
      		text: '个性装扮',
      		icon: 'icon-mofabang',
      		color: '#FF87B8',
      		href: '',
      	},{
      		text: '游戏中心',
      		icon: 'icon-iconfontyouxihudong',
      		color: '#FC87B8',
      		href: '',
      	},{
      		text: '意见反馈',
      		icon: 'icon-fankui-tianchong',
      		color: '#D1A5F2',
      		href: '',
      	},{
      		text: '公益广告',
      		icon: 'icon-gongyizhongxin',
      		color: '#FF7D91',
      		href: '',
      	},{
      		text: '专业认证',
      		icon: 'icon-renzheng',
      		color: '#FCA485',
      		href: '',
      	},{
      		text: '我的技术',
      		icon: 'icon-shangjia',
      		color: '#FCC78E',
      		href: 'mySkill',
      	},{
      		text: '设置',
      		icon: 'icon-shezhi-tianchong',
      		color: '#BABABA',
      		href: 'setting',
      	}]
      }]
    }
  },
  computed:{
    ...Vuex.mapState(["img_default"]),
	},//vuex里的数据加入到data
  components: {
    tabbar
  },
  methods: {

  },
  created: function(argument) {
    
  }
}

</script>

<style scoped>
.my_header{
	font-size: 18px;
	height: 50px;
	padding: 0 5px;
}
.my_header_button{
	align-self: stretch;
	padding: 0 10px;
	font-size: 24px;
	line-height: 1;
	display: flex;
	align-items: center;
}
.hello{
	background-color: #f2f2f2;
}
.container::-webkit-scrollbar{
  display: none;
}
.container{
  height: calc(100vh - 100px);
  overflow: scroll;
}
.container:after{
	content: '';
	width: 100vw;
	height: 50px;
	display: block;
}
.my_info{
  background-color: #fff;
  color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
	justify-content: space-between;
}
.my_info_photo{
  height: 65px;
  width: 65px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 5px;
  overflow: hidden;
  background-color: #f2f2f2;
  flex-shrink: 0;
}
.my_info_view{
  background-color: #fff;
	flex: 1;
	overflow: hidden;
	padding: 7px;
}
.my_info_name{
	font-size: 18px;
	line-height: 24px;
	padding: 3px 0;
	display: flex;
	align-items: center;
}
.icon-man{
	font-size: 13px;
	color: #A4D3EE;
}
.icon-woman{
	font-size: 13px;
	color: #EE7AE9;
}
.my_level{
	font-size: 12px;
	height: 14px;
	border-radius: 7px;
	padding: 0 5px;
	background-color: #EEEEEE;
	display: flex;
	align-items: center;
	margin-left: 3px;
}
.my_info_number{
	font-size: 12px;
	line-break: 15px;
	color: #A0A0A0;
	padding: 3px 0;
}
.my_info_home{
	color: #C0C0C0;
	font-size: 12px;
	display: flex;
	align-items: center;
	padding-left: 5px;
}
.icon-right{
	font-size: 14px;
	color: #DCDCDC;
	padding-left: 3px;
}


.my_message{
  background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
}
.my_message_item{
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
}
.my_message_item > span{
	position: relative;
	padding: 0 5px;
}
.my_message_line{
	height: 30px;
	width: 1px;
	background-color: #eee;
}
.my_nav{
  background-color: #fff;
	border-top: 1px solid #EEEEEE;
	flex-wrap: wrap;
	align-items: center;
}
.my_nav_item{
	width: calc(25% - 1px);
	height: 70px;
	align-self: stretch;
}
.my_nav_num{
	font-size: 18px;
	line-height: 24px;
	padding-bottom: 3px;
}
.my_nav_icon{
	font-size: 20px;
	height: 24px;
	width: 24px;
	padding-bottom: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.my_nav_text{
	font-size: 12px;
	line-height: 24px;
	color: #666666;
}
.my_nav_title{
  background-color: #fff;
	border-top: 10px solid #f2f2f2;
	font-size: 14px;
	height: 40px;
	align-items: center;
	padding: 0 15px;
}
.my_nav_title_more{
	color: #999999;
}
.my_nav .my_message_line:nth-child(8n){
	display: none;
}
</style>
