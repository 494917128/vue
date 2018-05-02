<template>
    <div class="page">
        <myheader :title="title" back="true"></myheader>
        
		<div class="container">
			
			<!--语音输入-->
			<div class="mui-input-row" style="margin: 10px 5px;">
				<textarea id="textarea" rows="1" placeholder="多行文本框" class="mui-input-speech mui-input-clear"></textarea>
			</div>

		</div>
		
    </div>
</template>
<script>
import myheader from './module/myheader'
import Vuex from 'vuex';
export default{
    name: 'myMuiSpeech',
    data(){
        return{
            title:"语音输入",
        }
    },
    components: {
        myheader
    },
    methods:{
        
    },
	mounted:function () {
  		// 语音输入
  		mui.ready(function() {
			mui('.mui-input-row textarea').input();
		});
		
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

</style>
