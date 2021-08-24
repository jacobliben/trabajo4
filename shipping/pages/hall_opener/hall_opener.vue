<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="head-sect">
		  <view class="navbar">
		  		  <view v-for ="(item,index) in navList" :key="index" 
		  		  class="nav-item"  
		  		  @click ="tabClick(index)">
		  		  	<text :class="{current: tabCurrentIndex === index }">{{item.text}}</text>
		  		  </view>	  		  
		  </view>
		  <view class="plus" @click="addRefresh">
			  <image src="/static/rotate.png" mode="" class="add" :class="{rotate: activeRotate }"></image>
		  </view>
	  </view>
	 
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				
				 <hall :key="refresh_index" :source = "item"/> 
				
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import Hall from "@/pages/hall/hall.vue"
	
	
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				refresh_index:0,
				navList:[
					{
						state:1,
						text:"全部",
						orderList:[]
					},
					{
					  state:2,
					  text:"普通货",
					  orderList:[]
					},
					{
					  state:3,
					  text:"批量货",
					  orderList:[]
					},
					
					
				],
				activeRotate:false,
			};
		},
		components:{
			 Hall,
			
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			
		},
		
		onPullDownRefresh() {
			var that = this
			console.log("hall");
			this.refresh_index++;
			setTimeout(()=>{
				uni.stopPullDownRefresh()	
			},3000)
		},
		
		methods:{
			
			tabClick(index){
				this.tabCurrentIndex = index
				
			},
			
			addRefresh(){
				var that = this
				this.activeRotate = true;
				this.refresh_index++;
				setTimeout(()=>{
					that.activeRotate = false
				},3000)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.head-sect{
		width:100%;
		height:80rpx;
		display: flex;
		margin-top: 50rpx;
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
			color: #989a98;
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
		
	}
	
	.current{
		
		width:150rpx;
		border:1rpx solid #e6e6e6;
		border-radius:50rpx;
		color:#000;
		font-size: 35rpx;
		text-align: center;
	}
	
	.shipping-body{
		margin-top:15rpx;
	}
	
	.content{
		background-color: #fff;
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
