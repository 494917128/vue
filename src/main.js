// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

//mui组件
import './js/mui.zoom.js'
import './js/mui.previewimage.js'
import './js/tools.js'

//jquery组件
import './js/jquery-3.3.1.min.js'
//swiper.js组件
import {Swiper} from 'vue-awesome-swiper'
window.Swiper = Swiper

import App from './App'
import router from './router'
import '@/js/api.js'


import './css/swiper-4.2.0.min.css';
import './fonts/iconfont.css';
import './css/mui.min.css';
import './css/app.css';

Vue.config.productionTip = false

//每次刷新进入的都是首页
// window.location.href = "#/"

/* eslint-disable no-new */

Vue.use(Vuex);
import store from '@/store';


var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//在tabbar页面时，点击两次退出程序
mui.back = function() {};// 重置mui.js默认的back事件
var appClose = false
document.addEventListener('plusready', function() {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function() {
        webview.canBack(function(e) {
	    		var hash = api.isTabbar(window.location.hash)||window.location.hash=='#/swiper'
	    		if (hash) {
	    			if (appClose){
	    				webview.close();
	    			}else{
	    				mui.toast('再按一次退出应用');
	    				appClose = true;
	    				setTimeout(function(){
	    					appClose = false;
	    				},2000)
	    			}
	    		}else{
	    			vue.$router.isBack = true;
	    			vue.$router.go(-1)
	        }
		    })
    });
});
