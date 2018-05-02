import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const state = {
    count:1,
    tabbar_prompt:{
    	one:0,
    	two:0,
    	three:0,
    	four:1,
    },//tabbar 上的提示
    container_scroll:{},// 每个页面的滚动高度缓存
    keep_alive:[],
    img_default:require('@/assets/swiper.png'),
}
const mutations = {
    add(state,n){
      state.count = Number(state.count)+(n||1);
    },
    reduce(state,n){
      state.count = Number(state.count)-(n||1);
    },
    // 储存页面滚动高度
    containerScroll(state,payload){
    	state.container_scroll[payload.path] = payload.top
    },
    // 清除储存的页面滚动高度（登录页面时调用）
    clearScroll(state){
    	state.container_scroll = {}
    },
    // 设置可缓存页面
    setKeepActive(state,payload){
		if(payload.isBack&&payload.isBack!='tabbar'){
			for(var i=0,len=state.keep_alive.length;i<len;i++){
				if(state.keep_alive[i]==payload.name){
	        		state.keep_alive.splice(i,1)
	        	}
			}
        }else{
        	var boolean = true
        	for(var i=0,len=state.keep_alive.length;i<len;i++){
        		if(state.keep_alive[i]==payload.name){
        			boolean = false
        		}
        	}
        	if(boolean){
				state.keep_alive.push(payload.name)
				boolean = false
			}
        }
	},
	// 清除储存的可缓存页面（登录页面时调用）
	clearKeepActive(state){
   		state.keep_alive = []
	}
}
// 数据渲染前进行计算
const getters = {
    count:function(state){
         return state.count = Math.abs(state.count) + '.00';
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
});
