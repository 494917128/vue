<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			
			<div class="mui-content">
				<div class="top" id="testLogin">
					<input type="button" class="weixin" id="weixin"/>
					<input type="button" class="zhifubao" id="zhifubao"/>
				</div>
			</div>

		</div>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'myMuiPay',
    data(){
        return{
            title:"第三方支付",
        }
    },
    components: {
        myheader
    },
    methods:{
        
    },
	mounted:function () {
  		var wxChannel = null; // 微信支付
		var aliChannel = null; // 支付宝支付
		var channel = null; 
		mui.init({
			swipeBack:true //启用右滑关闭功能
		});
		
		mui.plusReady(function() {  
			// 获取支付通道
    			plus.payment.getChannels(function(channels){
    				aliChannel=channels[0];
       				wxChannel=channels[1];
    			},function(e){
       			 alert("获取支付通道失败："+e.message);
    			});
		})
	
		document.getElementById('weixin').addEventListener('tap',function() {
			console.log("微信");
			pay('wxpay');
		})
		document.getElementById('zhifubao').addEventListener('tap',function() {
			console.log("zhifubao");
			pay('alipay'); 
		})
	
		var ALIPAYSERVER='http://demo.dcloud.net.cn/helloh5/payment/alipay.php?total=';
		var WXPAYSERVER='http://demo.dcloud.net.cn/helloh5/payment/wxpay.php?total=';
		// 2. 发起支付请求
		function pay(id){
			// 从服务器请求支付订单
			var PAYSERVER='';
			if(id=='alipay'){
       			PAYSERVER=ALIPAYSERVER;
       			channel = aliChannel;
   	 		}else if(id=='wxpay'){
    			PAYSERVER=ALIPAYSERVER;
    			channel = wxChannel;
			}else{
    			plus.nativeUI.alert("不支持此支付通道！",null,"捐赠");
    			return;
   			}
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
    			switch(xhr.readyState){
        			case 4:
	        			if(xhr.status==200){
	            			plus.payment.request(channel,PAYSERVER,function(result){
	                			plus.nativeUI.alert("支付成功！",function(){
		                   	 		back();
		               	 		});
	            			},function(error){
	                			plus.nativeUI.alert("支付失败：" + error.code);
	            			});
	        			}else{
	            			alert("获取订单信息失败！");
	        			}
	        			break;
	        		default:
	            		break;
        		}
   			}
    		xhr.open('GET',PAYSERVER);
    		xhr.send();
		}
		
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
.weixin {
	width: 60px;       
	height: 60px; 
	margin-left: calc(50% - 30px);
	background: url(../assets/icon-weixin.png);   
}
.zhifubao {
	width: 60px;
	height: 60px;
	margin-left: calc(50% - 30px); 
	background: url(../assets/alipay.jpg);  
}
</style>
