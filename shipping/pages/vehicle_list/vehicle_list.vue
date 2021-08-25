<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="head-sect">
		  <view>
			  <view class="cuIcon-back lg text-gray tmargin" @click="goBack"></view>
		  </view>
		  <view class="navbar">
		  		  <view v-for ="(item,index) in navList" :key="index" 
		  		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  		  @click ="tabClick(index)">
		  		  	{{item.text}}
		  		  </view>	  		  
		  </view>
		  <view class="plus" @click="addVehicle">
			  <image src="/static/add.png" mode="" class="add"></image>
		  </view>
	  </view>
	 
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				
				<vehicle-has-approved :vehicle = "item"/>
				
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import vehicleHasApproved from "@/pages/vehicle_has_approved/vehicle_has_approved.vue"

	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				navList:[
					{
						state:1,
						text:"已审核",
						orderList:[]
					},
					{
					  state:2,
					  text:"审核中",
					  orderList:[]
					},
					{
					  state:3,
					  text:"未通过",
					  orderList:[]
					},
					// {
					//   state:3,
					//   text:"未认证",
					//   orderList:[]
					// },
					
				],
			};
		},
		components:{
			vehicleHasApproved,
		
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			
		},
		methods:{
			goBack(){
				
				uni.reLaunch({
					url:"/pages/accounts/accounts"
				})
				
			},
			tabClick(index){
				this.tabCurrentIndex = index
				
			},
			
			addVehicle(){
				uni.navigateTo({
					url:`/pages/add_vehicle/add_vehicle?btn_title=添加`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.head-sect{
		width:100%;
		display: flex;
		flex-direction: row;
	}
	.navbar{
		width:90%;
		display: flex;
		height:70rpx;
		padding: 0 5rpx;
		background: #fff;
		position: relative;
		z-index:3;
		.nav-item{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
			height:100%;
			font-size:25rpx;
			position:relative;	
		}
		
		/*#ifdef H5*/
		.nav-item{
			font-size:16px;
			font-weight: 400;
		}
		/*#endif*/
	}
	
	.plus{
		width:10%;
		color:000;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 70rpx;
		.add{
			width:100rpx;
			height:80rpx;
		}
	}
	
	.current{
		border-bottom:5rpx solid #09499b;
		color:#09499b;
	}
	
	.shipping-body{
		margin-top:15rpx;
	}
	
	.content{
		background-color: #fff;
	}
	
	
    .tmargin{
    	
    	margin-top: 20rpx;
    	width:60rpx;
    	height:60rpx ;
    }	 
</style>
