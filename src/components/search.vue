<template>
  <div>
		<div class="search_title">
	    <a @tap="$router.goBack()" style="padding-right: 10px;color: #fff;"><span class="icon iconfont icon-fenxiang"></span></a>
			<input type="text" class="search_title_input" placeholder="搜索您要搜索的内容">
			<a @tap="$router.goTo('/')" class="search_title_submit">搜索</a>
		</div>

    <div class="container">
        <div class="search_history_title">
            <div>搜索历史</div>
            <div>清空</div>
        </div>
        <div class="search_history" v-for="item of 9">
            <div class="search_history_icon"></div>
            <div class="search_history_text one_line">搜索内容</div>
        </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
  name: 'my',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      ...Vuex.mapState(["count"]),
      ...Vuex.mapGetters(["count"])
  },//vuex里的数据加入到data
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


.search_title{
  background-color: #ff6000;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;
}
.search_title_input{
  background-color: rgba(255,255,255,.45);
  height: 30px;
  border-radius: 15px;
  padding: 0 15px;
  border: none;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.search_title_input::-webkit-input-placeholder{
  color: #fff;
}
.search_title_submit{
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
  font-size: 16px;
  padding: 0 15px;
  color: #fff;
}

.search_history_title{
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #000;
  padding: 15px 15px 5px;
}
.search_history{
  padding: 0 25px;
  height: 40px;
  display: flex;
  align-items: center;
}
.search_history_icon{
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.search_history_text{
  color: #666;
  font-size: 15px;
}
</style>
