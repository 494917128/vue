<template>
	<div class="page">
		<h2>{{msg}}</h2>
		<hr/>
		<h3>{{$store.state.count}}</h3>
		<h3>{{count}}</h3>
		<div>
			<button @tap="add(2)">+2</button>
			<button @tap="reduce(2)">-2</button>
		</div>
		<tabbar data-select="2"></tabbar>
	</div>
</template>
<script>
	import tabbar from './module/tabBar'
	import Vuex from 'vuex';
	export default{
		name: 'count',
		data(){
			return{
				msg:'Hello Vuex',
			}
		},
		components: {
			tabbar
		},
		computed:{
			...Vuex.mapState(["count"]),
			...Vuex.mapGetters(["count"])
		},//vuex里的数据加入到data
		methods:{
			aa:function (){
				
			},
			...Vuex.mapMutations(['add','reduce'])
		},//vuex里的方法加入到
		created:function(){
			
		}
	}
</script>

<style scoped>
.page{
	background-color: #fff;
}
</style>
