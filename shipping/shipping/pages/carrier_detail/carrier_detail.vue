<template>
	<view>
		
		
		 <view class="top-line flex-bar">
			 <view>
				 <text class="name">联系人</text>
			 </view>
			 <view>
			 		<text class="ref-name">化敬仙</text>
			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
			 </view>
		 </view>
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">联系人号码</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">13685141842</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">详细地址</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">徐州市铜山区柳新镇徐丰路东侧冯楼段</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">会员一级编码</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">CY0A2012150001</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">会员二级编码</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">XGZLWLCY0A2012150001</text>
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