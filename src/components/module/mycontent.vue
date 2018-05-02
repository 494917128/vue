<template>
	<div>
		<div class="index_content" v-for="item of pageData">
			<div class="flex_row">
				<img src="" class="index_content_photo">
				<div style="overflow: hidden;">
					<div class="index_content_name one_line">{{item.name}}</div>
					<div class="index_content_info one_line">{{item.time}}&nbsp;&nbsp;{{item.from}}</div>
				</div>
			</div>
			<div class="index_content_text" v-html="item.content"></div>
			<div class="index_content_image flex_row">
				<img :src="img" class="index_content_img" v-for="img of item.img">
			</div>
			<div class="index_content_footer" v-if="!noFooter">
				<div class="index_content_footer_item">加入收款</div>
				<div class="index_content_footer_item">点赞+1</div>
				<a @tap="$router.goTo('detail')" class="index_content_footer_item">进入详情</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['page-data','no-footer'],
	name: 'mycontent',
	data () {
		return {
			
		}
	},
}
</script>

<style scoped>
.index_content{
  padding: 10px 20px 0;
  border-bottom: 10px solid #f2f2f2;
  background-color: #fff;
}
.index_content_photo{
  width: 40px;
  height: 40px;
  border: 1px solid #CC0025;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 6px;
  flex-shrink: 0;
}
.index_content_name{
  color: #737373;
  font-size: 16px;
  line-height: 22px;
}
.index_content_info{
  color: #a0a0a0;
  font-size: 12px;
  line-height: 18px;
}
.index_content_text{
  margin: 20px 0;
  color: #737373;
  font-size: 16px;
  line-height: 20px;
}
.index_content_image{
  padding: 10px 0;  
}
.index_content_img{
  margin: 0 2px;
  flex: 1;
  height: calc((100vw - 52px) / 3);
  background-color: #000;
}
.index_content_footer{
  border-top: 1px solid #dcdcdc;
  height: 50px;
  display: flex;
  margin: 0 -20px;
}
.index_content_footer_item{
  flex: 1;
  font-size: 15px;
  color: #737373;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
