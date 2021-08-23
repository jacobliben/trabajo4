<template>
	<view>
		<view>
			<image src="/static/identifying.png" class="identifying" mode="aspectFit"></image>
		</view>
		<view class="row">
			您的角色已经成功切换至{{id}}, 请您重新注册
		</view>
		<view>
			<button class="next-btn round" type="primary" @click="goRegister">重新注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
			}
		},
		methods: {
			goRegister(){
				this.id = uni.getStorageSync("id")
				if (this.id=="个人司机"){
					uni.navigateTo({
						url:"/pages/register_driver/register_driver"
					})
				}else if (this.id=="物流企业"){
					uni.navigateTo({
						url:"/pages/register/register"
					})
				}
				
			}
		},
		onLoad(options){
			this.id = options.id
		},
	}
</script>

<style lang="scss" scoped>
   .identifying{
	    width:80%;
		margin-top:20rpx;
		margin-left: 10%;
   }
   .row{
	     width:70%;
	    margin-top:20rpx;
	    margin-left: 15%;
		text-align: center;
		font-size: 30rpx;
		font-weight: 800;
   }
   
   .next-btn{
   		 margin-top:20rpx;
   		 width:30%;
   		
   }
</style>
