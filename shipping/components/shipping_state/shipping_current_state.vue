<template>
	<view class="">
		<view class="current-state"><text>当前状态</text></view>
		
	    <!-- <view class="one-line">
			 <view class="left">
				 <image src="/static/get-order.png"  class="sm-icon" alt="" v-if="!get_order_finished">
				  <image src="/static/get-order-blue.png" class="sm-icon" alt="" v-if="get_order_finished">
				 <text>摘单成功</text>
				  <view :class="[get_order_finished? 'blue-line':'line']"></view>
			 </view>
			 
			 <view class="date" v-if="get_order_finished">2021-03-04 07:34</view>			 
		 </view> -->
		 
		 <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/delivery-truck-blue.png" class="sm-icon" alt="" v-if="!delivery_truck_finished">
						  <image src="/static/delivery-truck.png" class="sm-icon" alt="" v-if="delivery_truck_finished">
		 				 <text>确认发货</text>
						 <view :class="[delivery_truck_finished? 'blue-line':'line']"></view>
		 			 </view>
		 			 
		 			 <view class="date" v-if="delivery_truck_finished">2021-03-04 07:34</view>			 
		 </view>
		 
		 <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/package.png" class="sm-icon" alt="" v-if="!package_finished">
						 <image src="/static/package-blue.png" class="sm-icon" alt="" v-if="package_finished">
		 				 <text>确认卸货</text>
						  <view :class="[package_finished? 'blue-line':'line']"></view>
		 			 </view>
		 			 
		 			 <view class="date" v-if="package_finished">2021-03-04 07:34</view>			 
		 </view>
		 
		 <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/confirmation-pending-blue.png" class="sm-icon" alt="" v-if="!confirmation_pending_finished">
		 				<image src="/static/confirmation-pending.png" class="sm-icon" alt="" v-if="confirmation_pending_finished">
		 				 <text>待货主回单确认</text>
		 				<view :class="[confirmation_pending_finished? 'blue-line':'line']"></view>
		 			 </view>
		 			 
		 			 <view class="date" v-if="confirmation_pending_finished">2021-03-04 07:34</view>			 
		 </view>
		 
		 <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/target.png" class="sm-icon" alt="" v-if="!target_finished">
					     <image src="/static/target-blue.png" class="sm-icon" alt="" v-if="target_finished">
		 				 <text>货主确认回单</text>
						  <view :class="[target_finished? 'blue-line':'line']"></view>
		 			 </view>
		 			 
		 			 <view class="date" v-if="target_finished">2021-03-04 07:34</view>			 
		 </view>
		 
		 <!-- <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/owner-liquida-blue.png" class="sm-icon" alt="" v-if="!owner_liquida_finished">
						<image src="/static/owner-liquida.png" class="sm-icon" alt="" v-if="owner_liquida_finished">
		 				 <text>货主提交结算申请</text>
						  <view :class="[owner_liquida_finished? 'blue-line':'line']"></view>
		 			 </view>
		 			 
		 			 <view class="date" v-if="owner_liquida_finished">2021-03-04 07:34</view>			 
		 </view>
		 
		 <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/liquidation-pending.png" class="sm-icon" alt="" v-if="!liquidation_pending_finished">
						<image src="/static/liquidation-pending-blue.png" class="sm-icon" alt="" v-if="liquidation_pending_finished">
		 				 <text>平台结算申请</text>
						  <view :class="[liquidation_pending_finished? 'blue-line':'line']"></view>
		 			 </view>
		 			 
		 			 <view class="date" v-if="liquidation_pending_finished">2021-03-04 07:34</view>			 
		 </view> -->
		 
		 <view class="one-line">
		 			 <view class="left">
		 				 <image src="/static/check.png" class="sm-icon" alt="" v-if="!check_finished">
						 <image src="/static/check-blue.png" class="sm-icon" alt="" v-if="check_finished">
		 				 <text>完成</text>
		 			 </view>
		 			 
		 			 <view class="date" v-if="check_finished">2021-03-04 07:34</view>			 
		 </view>
	</view>
	
</template>

<script>
	
	export default{
		data() {
			return {
				get_order_finished:true,
				delivery_truck_finished:false,
				package_finished:false,
				confirmation_pending_finished:false,
				target_finished:false,
				owner_liquida_finished:false,
				liquidation_pending_finished:false,
				check_finished:false,
				
				
			};
		},
		props:["btn_title"],
		components:{
			
		},	
		
		mounted(){
			if(this.btn_title=="签收"){
				this.delivery_truck_finished = true
			}else if (this.btn_title=="查看"){
				this.delivery_truck_finished = true
				this.package_finished = true
			}
			
		},
		methods:{
			},
	}
</script>

<style lang="scss" scoped>
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
	.sm-icon{
		position: relative;
		margin-left: -25rpx;
		width: 50rpx;
		height:50rpx;
		margin-right: 20rpx;
	}
	
	.one-line{
		 margin-left:10%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height:150rpx;
		
		.left{
			width: 65%;
			
			.blue-line{
				width: 100%;
				height:100rpx;
				border-left:1px solid #1296db;
			}
			
			.line{
				width: 100%;
				height:100rpx;
				border-left:1px solid #bfbfbf;
			}
			
		}
		.date{
			width: 35%;
			display: flex;
			align-items: flex-start;
		}
	}
	

	
</style>
