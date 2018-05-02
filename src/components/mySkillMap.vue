<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			<div @click="location()" style="height: 30px;">定位</div>
			<div class="ui-class">
				<div id="movemap"></div>
			</div>

		</div>
		
    </div>
</template>

<script>
import {MP} from '@/js/map.js'  
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'myMuiScan',
    data(){
        return{
            title:"百度地图",
            map:'',
            
        }
    },
    components: {
        myheader
    },
    methods:{
    	// 百度地图加载
    	createMap: function(){
    		this.map = new BMap.Map("movemap");
    		var map = this.map;
			var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
			map.centerAndZoom(point, 15);
			map.enableDragging(true)
    	},
    	// 定位
    	location: function(){
			var map = this.map;
			var geolocation = new BMap.Geolocation();
			// 开启SDK辅助定位
			mui.toast('定位中...',{ duration:30000, type:'div' }) //提示定位中
			geolocation.enableSDKLocation();
			geolocation.getCurrentPosition(function(r){	
				$('.mui-toast-container').remove()//删除提示
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					map.panTo(r.point);
//					alert('您的位置：'+r.point.lng+','+r.point.lat);
				}
				else {
					mui.alert('failed'+this.getStatus(),'提示')
				}        
			});
    	},
    },
	mounted:function () {
		var that = this
		// 百度地图加载
		this.$nextTick(function(){
			var _this = this;
			MP('PRwTt9GT41vt8u8AtZU5PxI9bvXlWFbl').then(BMap => {
				that.createMap()
			})
		}) 
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
.ui-class,#movemap{
	width: 100%;
	height: 100%;
	margin: 0;
	font-family: "微软雅黑";
	font-size: 12px;
	font-style: italic;
	overflow: hidden;
	background-color: #FFFFFF;
}
</style>
