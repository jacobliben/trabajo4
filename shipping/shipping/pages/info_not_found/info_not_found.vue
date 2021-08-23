<template>
	<view>
		<view class="main">
			<view>
				<image src="/static/info-not-found.png" mode="aspectFit" class="info-not-found" ></image>
				<view class="text">
					暂没有找到相关信息
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
   .text{
	   text-align: center;
	   font-weight: 800;
	   font-size: 35rpx;
	   margin: 10rpx;
	    
   }
   
   .main{
	   display: flex;
	   justify-content: center;
   }
   
   
</style>
