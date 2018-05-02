<template>
  <div>
		<myheader :title="title" back="true"></myheader>
	
		<div class="container">
			<mycontent :page-data="page_data"></mycontent>
			
		</div>
		
  </div>
</template>

<script>
import myheader from './module/myheader'
import mycontent from './module/mycontent'
import Vuex from 'vuex';
export default {
  name: 'myCode',
  data () {
    return {
      title:api.getUrlParam("title")||"",
    	page_data: [{
            name:"名字名字",
            from:"来自官方",
            time:"2小时前",
            content:"内容内容<br>内容内容<br>内容内容<br>内容内容<br>内容内容",
            img:["","",""]
        },{
            name:"名字名字",
            from:"来自官方",
            time:"2小时前",
            content:"内容内容<br>内容内容<br>内容内容<br>内容内容<br>内容内容",
            img:["","",""]
        },{
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
    myheader,
    mycontent,
  },
  created: function(argument) {
    
  }
}

</script>

<style scoped>
body{
  background-color: #f2f2f2;
}

.container::-webkit-scrollbar{
  display: none;
}
.container{
  height: calc(100vh - 50px);
  overflow: scroll;
}
.container:before{
	content: '';
	height: 10px;
	width: 100%;
	display: block;
}
</style>
