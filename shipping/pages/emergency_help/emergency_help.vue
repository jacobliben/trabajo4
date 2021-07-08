<template>
	<view>
		<view class="image-sos">
			<image src="/static/sos.png" mode=""></image>
		</view>
		<view class="call-us">
			您好，如果遭遇紧急情况，您可拨打徐工智联客户服务热线。我们将竭尽全力协助您处理问题！
		</view>
		<view class="btn">
			<button class="bg-gradual-blue round btn-call" @click="phoneCall" > 拨打智联客服电话</button>
		</view>
		<view class="hotline"> 服务热线：0516-87739070, 0516-87739339</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			phoneCall(){
				uni.makePhoneCall({
				    phoneNumber: '051687739070' 
				});
				}
		}
	}
</script>

<style lang="scss" scoped>
	.image-sos{
		display: flex;
		justify-content: center;
	}
     .call-us{
		 width:90%;
		 margin-left: 5%;
		 line-height: 45rpx;
		 text-align: center;
	 }
	 .btn{
		 margin-top: 30rpx;
		 width:100%;
		 display: flex;
		 justify-content: center;
		 .btn-call{
			 width: 50%;
			 color: #fff;
		 }
	 }
	 .hotline{
		  margin:30rpx;
		  text-align: center;
	 }
</style>
