<template>
	<view>
		
		
		 <view class="top-line flex-bar">
			 <view>
				 <text class="name">运单生成类型</text>
			 </view>
			 <view>
			 		<text class="ref-name">一口价成交</text>
			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
			 </view>
		 </view>
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">运输组织类型</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">公路运输</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">业务类型</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">干线运输</text>
		 			 		<!-- <text class="cuIcon-right lg text-gray"></text>		 -->
		 			 </view>
		 </view>
		 
		 <view class="top-line flex-bar">
		 			 <view>
		 				 <text class="name">统计类型</text>
		 			 </view>
		 			 <view>
		 			 		<text class="ref-name">整车</text>
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