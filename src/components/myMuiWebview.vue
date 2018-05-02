<template>
    <div class="page">
        <header class="myHeader main_bg flex_between">
			<a @tap="$router.goBack();">
				<span class="icon iconfont icon-fenxiang"></span>返回
			</a>

			<form class="form" action="?" method="get" @submit="openUrl();return false;">
				<input id="url" type="url" v-model="url"/>
			</form>

			<div class="nvbt" @tap="openUrl();">Go</div>
		</header>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
export default{
    name: 'myMuiWebview',
    data(){
        return{
            title:"窗口嵌套",
            w:null,
            url:"http://m.weibo.cn/u/3196963860"
        }
    },
    components: {
        myheader
    },
    methods:{
        openUrl:function(){
        	this.w.loadURL(this.url)
        },

    },
	mounted:function () {
		function plusReady(){
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener('plusready', plusReady, false);
		}
		
		this.w = plus.webview.create(this.url,'embed',{top:"50px",bottom:"0",width:"100%"});
		this.w.show(); // 显示窗口
	},
    created:function(){
        
    },
    beforeDestroy:function(){
    	plus.webview.close(this.w);
    }
}
</script>

<style scoped>
.page{
	background-color: #f2f2f2;
}
.myHeader{
  font-size: 18px;
  height: 50px;
  position: relative;
}
.myHeader > a{
  padding: 0 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}
.nvbt{
	padding: 0 5px;
	font-size: 16px;
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.form{
	flex:1;
    padding-left: 15px;
    padding-right: 5px;
}
#url {
    width: 98%;
    font-size: 14px;
    -webkit-user-select: auto;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    background: rgba(0,0,0,0);
    border: 0px;
    border-bottom: 1px solid #ECB100;
    border-radius: 0;
    outline: none;
    line-height: 21px;
    height: 36px;
}

</style>
