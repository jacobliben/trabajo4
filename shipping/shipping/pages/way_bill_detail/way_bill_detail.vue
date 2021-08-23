<template>
	<view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">发车时间</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name"></text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">到达时间</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name"></text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">签收货物重量(吨)</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name"></text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">实际行驶公里数(公里)</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name"></text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">出厂照片</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">点击预览</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">回单照片</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">点击预览</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">人车货合照</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">点击预览</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
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
	body{
		background-color: #fff;
	}
	.details-body{
		background-color: #fff;
	}
     .current-state{
		 margin-top:10rpx;
		 margin-left:10rpx;
		 margin-bottom: 25rpx;
		 border-left:3rpx solid orange;
		 padding-left: 30rpx;
		 color:#000;
		 font-size:30rpx;
		 font-weight: 800;
	 }
	 
	 
	 .top-line{
		 border-top:1rpx solid #d5d5d8;
	 }
	 
	 .flex-bar{
		 display: flex;
		 justify-content: space-between;
		 padding-left: 5%;
		 padding-right: 5%;;
		 padding-top:15rpx;
		 padding-bottom:15rpx;
	 }
	 
	 .ordinary{
		 color: #a1a1a1;
	 }
	 
	 .name{
		 color:#999999;
	 }
	 .ref-name{
	 		 font-size:18rpx;
			 color:#999;
	 }
</style>