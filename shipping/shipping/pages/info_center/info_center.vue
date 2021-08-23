<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="navbar">
		  <scroll-view v-for ="(item,index) in navList" :key="index"  enable-flex="true"
		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		  	<text>{{item.text}}</text>
		  </scroll-view>
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				<!-- {{item.state}} message-->
				<message  :transporte_state="item"/>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import message from "@/pages/message/message"
	
	
	
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				navList:[
					{
						state:0,
						text:"未读",
						
						orderList:[],
						msgStatus:20,
						btn:"未读消息",
					},
					{
					  state:1,
					  text:"已读",
					  
					  orderList:[],
					  msgStatus:30,
					  btn:"已读消息",
					},
					{
					  state:2,
					  text:"全部",
					 
					  orderList:[],
					  msgStatus:null,
					  btn:"全部消息",
					},
					
				]
			};
		},
		components:{
			message,
		},
		onLoad(options){
			this.tabCurrentIndex = 0
		},
		onShow(){
			this.nav_state = uni.getStorageSync("nav_state")
			
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
