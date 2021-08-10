<template>
	<view>
		<view class="primer-frase">
			您可以进行询价和报价
		</view>
		    
		<view class="individual-driver radius" @click="showDriverModal">
			<view class="left-side">
				<view class="title">询价</view>
				<view class="desc">
					查询价格列表
				</view>
			</view>
			<view>
				<image src="/static/analysischart.svg" class="driver-img" mode=""></image>
			</view>
		</view>
		
	
		
		<view class="individual-driver radius" @click="showCompanyModal">
			<view class="left-side">
				<view class="title">报价</view>
				<view class="desc">
					您的承运报价列表
				</view>
			</view>
			<view>
				<image src="/static/areafiftyone.svg" class="driver-img" mode=""></image>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		
		
		methods:{
			showDriverModal(){
				uni.navigateTo({
					url:"/pages/inquiry/inquiry"
				}) 
			},
			
			
			
			showCompanyModal(){
			
				uni.navigateTo({
					url:"/pages/quote/quote"
				}) 
				
			},
		}
	}
</script>

<style lang="scss" scoped>
    .primer-frase{
		width: 90%;
		margin-left:5% ;
		margin-bottom:30rpx ;
	}
	
	
	.individual-driver{
		border:1rpx solid #eee;
		display:flex;
		flex-direction: row;
		width:90%;
		height:200rpx;
		margin-left:5% ;
		margin-bottom: 20rpx;
		padding: 10rpx;
		.left-side{
			width:70%;
			.title{
				font-size: 30rpx;
				font-weight: 700;
				margin-bottom: 10rpx;
			}
			.desc{
				font-size: 25rpx;
				
				margin-bottom: 10rpx;
			}
		}
	}
	
	.driver-img{
		width:100rpx;
		height:100rpx;
	}
</style>
