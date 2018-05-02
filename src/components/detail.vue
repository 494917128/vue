<template>
  <div>
  	
		<myheader title="素材中心" back="true"></myheader>
	
		<div class="container">
			<mycontent :page-data="page_data" no-footer='true'></mycontent>
		</div>

  </div>
</template>

<script>
import mycontent from './module/mycontent'
import myheader from './module/myheader'
import Vuex from 'vuex';
export default {
  name: 'detail',
  data () {
	return {
	  page_data: [{
			name:"名字名字",
			from:"来自官方",
			time:"2小时前",
			content:"内容内容<br>内容内容<br>内容内容<br>内容内容<br>内容内容",
			img:["","",""]
		}]
	}
  },
  computed:{
	  ...Vuex.mapState(["count"]),
	  ...Vuex.mapGetters(["count"])
  },//vuex里的数据加入到data
  components: {
	mycontent,
	myheader
  },
  created: function(argument) {
	
  }
}

</script>

<style scoped>
.container::-webkit-scrollbar{
  display: none;
}
.container{
  height: calc(100vh - 50px);
  overflow: scroll;
}
.my_title{
  background-color: #fe9d09;
  color: #fff;
  padding: 0 20px;
  height: 122px;
  display: flex;
  align-items: center;
}
.my_title_photo{
  height: 65px;
  width: 65px;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
  background-color: #f2f2f2;
}
.my_title_name{
  font-size: 16px;
}
.my_title_brand{
  font-size: 13px;
}
.my_title_vip{
  margin-top: 5px;
  height: 28px;
  border-radius: 14px;
  background-color: #fff;
  color: #666;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
}


.my_menu{
  display: flex;
  background-color: #fff;
  border-top: 10px solid #f2f2f2;
}
.my_menu_item{
  flex: 1;
  height: 90px;
  font-size: 15px;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my_menu_icon{
  width: 28px;
  height: 28px;
  margin-bottom: 10px;
}



.my_content{
  border-top: 10px solid #f2f2f2;
  border-bottom: 40px solid #f2f2f2;
}
.my_content_item{
  border-bottom: 1px solid #dcdcdc;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.my_content_icon{
  height: 20px;
  width: 20px;
}
.my_content_text{
  flex:1;
  font-size: 15px;
  color: #666;
}
.my_content_right{
}
</style>
