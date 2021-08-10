<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="navbar">
		  <scroll-view v-for ="(item,index) in navList" :key="index" enable-flex="true"
		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		  	<text>{{item.btn}}</text>
		  </scroll-view>
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				
				<making-shipping-order  :transporte_state="item" :key="myIndex"/>
				
				
			</view>
		</view>
		
	</view>
</template>

<script>
	
	 import makingShippingOrder from "@/pages/making_shipping_order/making_shipping_order"
	
	
	
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				myIndex:0,
				navList:[
					// {
					// 	state:20,
					// 	text:"我的货源",
						
					// 	btn:"待发布",
					// },
					{
						state:10,
						text:"我的货源",
						
						btn:"待审核",
					},
					{
						state:90,
						text:"我的货源",
						
						btn:"完成已评价",
					},
					
					
					
				]
			};
		},
		components:{
			makingShippingOrder,
		
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			this.myIndex++
		},
		onShow(){
			this.tabCurrentIndex = 0
			this.myIndex++
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
