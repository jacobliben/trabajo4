<template>
	<view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">甲方</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">徐州徐工智联物流服务有限公司</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">乙方</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">徐州市聚诚运输有限公司</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">合同金额</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">5480.46元</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">签订时间</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">2021-03-06 17:34:06</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">生效日期</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">2021-03-06</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">失效日期</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name"></text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">合同下载</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">点击预览</text>
		 			 		<text class="cuIcon-right lg text-gray"></text>		
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