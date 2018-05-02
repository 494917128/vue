<template>
	<div class="myHeader main_bg">
		{{title}}
		<a @tap="$router.goBack()" v-if="back">
			<span class="icon iconfont icon-fenxiang"></span>返回
		</a>
	</div>
</template>

<script>
export default {
  props: ['title','back'],
  name: 'myheader',
  data () {
	return {
	}
  },
  methods: {

  }
}
</script>

<style scoped>
.myHeader{
  font-size: 18px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.myHeader > a{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}
</style>
