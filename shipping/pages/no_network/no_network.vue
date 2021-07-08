<template>
	<view>
		<view class="net">
			<image src="/static/no_network.png" mode="widthFix" class="drivers"></image>
		</view>
		<view class="net" >
			<view class="words">
				<view>请确保网络连接后重新进入</view>
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
			refresh(){
				uni.onNetworkStatusChange(function (res) {
				   if(res.isConnected){
					  uni.navigateBack({
					      delta: 1
					  }); 
				   }else{
					    console.log(res.networkType);
				   }
				   
				});
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
  .net{
	  display: flex;
	  justify-content: center;
  }
</style>
