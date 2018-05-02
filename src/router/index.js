import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import search from '@/components/search'

import swiper from '@/components/swiper'
import login from '@/components/login'
import register from '@/components/register'

import count from '@/components/count'

import shop from '@/components/shop'

import my from '@/components/my'
import myCode from '@/components/myCode'
import addFriends from '@/components/addFriends'
import mySkill from '@/components/mySkill'
import mySkillMap from '@/components/mySkillMap'
import myMuiSpeech from '@/components/myMuiSpeech'
import myMuiLogin from '@/components/myMuiLogin'
import myMuiPay from '@/components/myMuiPay'
import myMuiShare from '@/components/myMuiShare'
import myMuiScan from '@/components/myMuiScan'
import myMuiStatusBar from '@/components/myMuiStatusBar'
import myMuiCamera from '@/components/myMuiCamera'
import myMuiWebview from '@/components/myMuiWebview'
import content from '@/components/content'
import setting from '@/components/setting'

// import demo3 from '@/store/vuex-test-master/src/App'
Router.prototype.goBack = function () { 
	this.isBack = true
	this.go(-1)
}
Router.prototype.goTo = function (hash) {
	if(api.isTabbar(window.location.hash)&&api.isTabbar('#/'+(hash=='/'?'':hash))&&hash){
		this.isBack = 'tabbar'
	}
	if(hash){
		this.push({ path: hash })
	}else{
		mui.alert('该功能暂未开通', '提示');
	}
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/search',
      name: 'search',
      component: search
    },
    
    
    {
      path: '/demo2',
      name: 'demo2',
      component: count
    },
    
    
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    
    
    {
      path: '/my',
      name: 'my',
      component: my
    },{
      path: '/myCode',
      name: 'myCode',
      component: myCode
    },{
      path: '/addFriends',
      name: 'addFriends',
      component: addFriends
    },{
      path: '/mySkill',
      name: 'mySkill',
      component: mySkill
    },{
      path: '/mySkillMap',
      name: 'mySkillMap',
      component: mySkillMap
    },{
      path: '/myMuiSpeech',
      name: 'myMuiSpeech',
      component: myMuiSpeech
    },{
      path: '/myMuiLogin',
      name: 'myMuiLogin',
      component: myMuiLogin
    },{
      path: '/myMuiPay',
      name: 'myMuiPay',
      component: myMuiPay
    },{
      path: '/myMuiShare',
      name: 'myMuiShare',
      component: myMuiShare
    },{
      path: '/myMuiScan',
      name: 'myMuiScan',
      component: myMuiScan
    },{
      path: '/myMuiStatusBar',
      name: 'myMuiStatusBar',
      component: myMuiStatusBar
    },{
      path: '/myMuiCamera',
      name: 'myMuiCamera',
      component: myMuiCamera
    },{
      path: '/myMuiWebview',
      name: 'myMuiWebview',
      component: myMuiWebview
    },{
      path: '/content',
      name: 'content',
      component: content
    },{
      path: '/setting',
      name: 'setting',
      component: setting
    },
    
    
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '*',
      name: 'index',
      component: index
    }
  ]
})
