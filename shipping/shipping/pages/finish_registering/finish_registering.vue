<template>
	<view class="">
		<view class="title">
			恭喜您，您的账户和密码已经成功创建！
		</view>
		<view class="btn-row">
			              
		<button class="next-btn bg-gradual-green round"  @click="goIndex">进入登录页</button> 
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				
				
			}
		},
		methods:{
			
			goIndex(){
				
				//同步清理本地数据缓存
				try {
				    uni.clearStorageSync();
				} catch (e) {
				    // error
				}
				
				uni.reLaunch({
				  url:"/pages/login_general/login_general"	
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		width:90%;
		margin-top:30rpx;
		font-size: 30rpx;
		font-weight: 700;
		margin-left: 5%;
	}
	
	.btn-row{
		width: 100%;
		margin-top:200rpx;
		display: flex;
		justify-content: center;
	}
	
	.next-btn{
		
			 width:40%;
			 background-color: #0081FF;
			 color:#fff;
			
	}
	
	
</style>
