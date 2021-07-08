<template>
	<view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">托运人状态</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">审核通过未注册</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">托运人类型</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">企业</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">联系人</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">周园</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">联系电话</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">15252149421</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">证件类型</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">101营业执照</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">证件号码</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">91320301703571520Q</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">地址</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">徐州经济技术开发区东环工业园28号</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">证件下载</text>
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