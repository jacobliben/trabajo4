<template>
	<view>
		<view class="primer-frase">
			货源下单, 请根据您的实际需要选择模式哦！
		</view>
		    
		<view class="individual-driver radius" @click="goBatchOrder">
			<view class="left-side">
				<view class="title">批量货模式</view>
				<view class="desc">
					批量货模式适合多次运输
				</view>
			</view>
			<view>
				<image src="/static/camion.png" class="driver-img" mode=""></image>
			</view>
		</view>
		
	
		<view class="individual-driver radius" @click="goOrdinaryOrder">
			<view class="left-side">
				<view class="title">普通货模式</view>
				<view class="desc">
					普通货模式包含单价模式和包车模式
				</view>
			</view>
			<view>
				<image src="/static/logistic-company.png" class="driver-img" mode=""></image>
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
		onLoad() {
			//同步清理本地数据缓存
			try {
			    uni.clearStorageSync();
			} catch (e) {
			    // error
			}
		},
		
		onShow() {
			//同步清理本地数据缓存
			// try {
			//     uni.clearStorageSync();
			// } catch (e) {
			//     // error
			// }
		},
		methods:{
			goBatchOrder(){
			
							
							uni.navigateTo({
								url:"/pages/batch_ordering/batch_ordering"
							})
				
			},
			
			
			goOrdinaryOrder(){
				
							
							
							uni.navigateTo({
								url:"/pages/ordinary_ordering/ordinary_ordering"
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
		width:200rpx;
		height:200rpx;
	}
</style>
