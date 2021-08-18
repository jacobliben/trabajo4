<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="head-sect">
		  <view class="navbar">
		  		  <view v-for ="(item,index) in navList" :key="index" enable-flex="true"
		  		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		  		  	<text>{{item.text}}</text>
		  		  </view>
		  		  
		  </view>
		  <view class="plus" @click="addRefresh">
		  			  <image src="/static/rotate.png" mode="" class="add" :class="{rotate: activeRotate }"></image>
		  </view>
	  </view>
	  
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				<!-- {{item.state}} -->
				<receiving-shipping-order :key="refresh_index"  :transporte_state="item"/>
				<!-- <distribute-drivers v-if="item.state===1"/> -->
				
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import receivingShippingOrder from "@/pages/receiving_shipping_order/receiving_shipping_order"
	import distributeDrivers from "@/pages/distribute_drivers/distribute_drivers"
	
	
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				refresh_index:0,
				activeRotate:false,
				navList:[
					{
						state:0,
						text:"运单接收",
						state_pending:"待接受",
						orderList:[],
						waybillStatus:this.$waitAccept,
						btn:"接受",
					},
					{
					  state:1,
					  text:"分配运力",
					  state_pending:"待分配",
					  orderList:[],
					  waybillStatus:this.$waitSendDispatch,
					  btn:"分配",
					},
					
				]
			};
		},
		components:{
			receivingShippingOrder,
			
			distributeDrivers,
		},
		onLoad(options){
			this.tabCurrentIndex = 0
		},
		onShow(){
			this.nav_state = uni.getStorageSync("nav_state")
			if (this.nav_state==="order-distributing"){
				
				
				this.tabClick(1)
			}else if (this.nav_state==="order-receiving"){
				
				
				this.tabClick(0)
			}else{
				this.tabClick(0)
			}
			
		},
		
		methods:{
			addRefresh(){
				var that = this
				this.activeRotate = true;
				this.refresh_index++;
				setTimeout(()=>{
					that.activeRotate = false
				},3000)
			},
			changeTab(e){
				this.tabCurrentIndex = e.target.current
			},
			tabClick(index){
				this.tabCurrentIndex = index
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head-sect{
		width:100%;
		height:80rpx;
		display: flex;
		margin-top: 20rpx;
		flex-direction: row;
		padding-right:30rpx;
	}
	.navbar{
		display: flex;
		height:80rpx;
		width:100%;
		padding: 15rpx 5rpx;
		position: sticky;
		top:10rpx;
		z-index:3;
		justify-content: space-between;
		background-color: #fff;
		.nav-item{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
			height:100%;
			font-size:30rpx;
			position:relative;	
			text-align: center;
		}
		
		/*#ifdef H5*/
		.nav-item{
			font-size:16px;
			font-weight: 400;
			height:30px;
		}
		/*#endif*/
	}
	
	.current{
		border-bottom:5rpx solid #09499b;
		color:#09499b;
	}
	
	.shipping-body{
		margin-top:55rpx;
	}
	
	.content{
		background-color: #fff;
	}
	
	.plus{
		width:10%;
		color:000;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 70rpx;
		margin:15rpx;
		
	}
	
	@keyframes turnZ{
	
	  0%{transform:rotateZ(0deg);}
	
	  100%{transform:rotateZ(360deg);}
	
	}
	
	.add{
		width:35rpx;
		height:35rpx;
		
	} 
	
	.rotate{
		
			
		 animation: turnZ 1s linear infinite;
	}

</style>
