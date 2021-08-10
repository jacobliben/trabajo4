<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="navbar">
		  <scroll-view v-for ="(item,index) in navList" :key="index" enable-flex="true"
		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		  	<text>{{item.text}}</text>
		  </scroll-view>
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				<!-- {{item.state}} -->
				<receiving-shipping-order  :transporte_state="item"/>
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
	
	.navbar{
		display: flex;
		height:80rpx;
		width:100%;
		padding: 15rpx 5rpx;
		position: sticky;
		top:10rpx;
		z-index:3;
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

</style>
