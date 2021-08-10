<template>
	<view>
		<view class="title">2021年1月公路货物运输量</view>
		<view class="body flex">
			<image src="/static/2021January_road_volume.png" class="article-img" mode="widthFix" ></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
 .title{
	 text-align: center;
	 color:#1f1698;
	 font-size: 30rpx;
	 font-weight: 600;
	 margin:10rpx;
 }
 .body{
	 width:100%;
	 display: flex;
	 justify-content: center;
	
 }
 .article-img{
	 width: 750rpx;
	  
 }
</style>
