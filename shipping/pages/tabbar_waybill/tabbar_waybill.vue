<template>
	<view>
	    <view class="head-sect">
		
	    		  <view class="tabbar">
	    		  		  <view v-for ="(item,index) in tabList" :key="index" enable-flex="true"
	    		  		  class="tab-item" :class="{current: 1 === index }" 
	    		  		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
						     
								
									 <image :src=" item.srcSelected" v-if ="1 === index" mode="aspectFit" class="tab-img" ></image>
								     <image :src=" item.src" v-if ="1 != index" mode="aspectFit" class="tab-img" ></image>
								 	<text >{{item.text}}</text>								 
								
						  
	    		  		  </view>
	    		  		  
	    		  </view>
	    		  
	    </view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				tabList:[
					{
						state:0,
						text:"首页",
						state_pending:"待接受",
						orderList:[],
						src:"/static/home.png",
						srcSelected:"/static/home-selected.png",
						btn:"接受",
					},
					{
					  state:1,
					  text:"派车单",
					  state_pending:"待分配",
					  orderList:[],
					  src:"/static/orders.png",
					  srcSelected:"/static/orders-selected.png",
					  btn:"分配",
					},
					{
					  state:2,
					  text:"我的",
					  state_pending:"待分配",
					  orderList:[],
					  src:"/static/me.png",
					  srcSelected:"/static/me-selected.png",
					  btn:"分配",
					},
				]
			}
		},
		props:["tabNum"],
		created() {
			this.tabCurrentIndex = this.tab_num 
		},
		methods: {
			tabClick(index){
				this.tabCurrentIndex = index
				switch (index){
					case 0:
					uni.switchTab({
						url: "/pages/index/index"
					})
						break
						
					case 1:
					uni.switchTab({
						url: `/pages/way_bill/way_bill`
					})
						break
					case 2:
					uni.switchTab({
						url: "/pages/accounts/accounts"
					})
						break	
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head-sect{
		width:100%;
		position: fixed;
		bottom: 0;
		height:80rpx;
		display: flex;
		margin-top: 20rpx;
		flex-direction: row;
		padding-right:30rpx;
		color:#c8c7cc;
	}
	.tabbar{
		display: flex;
		height:80rpx;
		width:100%;
		padding: 15rpx 5rpx;
		position: sticky;
		top:10rpx;
		z-index:3;
		justify-content: space-between;
		background-color: #fff;
		.tab-item{
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
		.tab-item{
			font-size:16px;
			font-weight: 400;
			height:30px;
		}
		/*#endif*/
	}
	
	.current{
		
		color:#fd6801;
	}
	
	.shipping-body{
		margin-top:55rpx;
	}
	
	.content{
		background-color: #fff;
	}
	
	.tab-img{
		
		width:50rpx;
		height:50rpx;
	}
   
	
</style>