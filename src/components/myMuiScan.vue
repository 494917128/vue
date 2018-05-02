<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			<div class="mui-content">
				<button @click="startScan()" class="mui-btn mui-btn-success">开始扫描</button>
				<button @click="cancelScan()" class="mui-btn mui-btn-success">取消扫描</button>
				<button @click="setFlash()" class="mui-btn mui-btn-success">开启/关闭闪光灯</button>
				<div id= "bcid"></div>
			</div>

		</div>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'myMuiScan',
    data(){
        return{
            title:"扫描二维码",
            scan: null,
            isOpen: false, // 闪光灯是否开始标志 true:闪光灯已经开启 false:闪光灯关闭
        }
    },
    components: {
        myheader
    },
    methods:{
    	// 条码识别成功事件
        onmarked:function ( type, result ) {
        	mui.plusReady(function() {  
				var text = '未知: ';
				switch(type){
					case plus.barcode.QR:
					text = 'QR: '; // 二维码
					break;
					case plus.barcode.EAN13:
					text = 'EAN13: ';
					break;
					case plus.barcode.EAN8:
					text = 'EAN8: ';
					break;
				}
				alert( text+result );
			})
		},
		// 创建扫描控件
		startRecognize:function () {
			var that = this
			mui.plusReady(function() {
				that.scan = new plus.barcode.Barcode('bcid');
				that.scan.onmarked = onmarked; 
			})
		},
		// 开始扫描
		startScan:function(){
			if(!this.scan){
				this.startRecognize();
			}
			this.scan.start();
		},
		// 取消扫描
		cancelScan:function(){
			if(this.scan != null) {
				this.scan.cancel();
				this.scan.close();
				this.scan = null;
				this.isOpen = false;
			}
		},
		//  开启和关闭闪光灯
		setFlash:function(){
			if(this.scan != null){
				this.isOpen = !this.isOpen;
				if(this.isOpen){
					this.scan.setFlash(true);
				}else{
					this.scan.setFlash(false);
				}
			}
		},
    },
	mounted:function () {
		
	},
    created:function(){
        
    },
    beforeDestroy:function(){
    	this.cancelScan()
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
#bcid {
	height:460px;
	width:320px;
}
</style>
