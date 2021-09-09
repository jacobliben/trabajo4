<template>
	<view>
		<view class="primer-frase">
			确实角色后，不能进行更改，请根据您的实际身份进行选择哦！
		</view>
		    
		<view class="individual-driver radius" @click="showDriverModal">
			<view class="left-side">
				<view class="title">我是个人车辆承运人</view>
				<view class="desc">
					由个体司机本人驾驶车辆运输，运费结算至本人银行卡
				</view>
			</view>
			<view>
				<image src="/static/camion.png" class="driver-img" mode=""></image>
			</view>
		</view>
		
	<!-- 	<view class="individual-driver radius" @click="showBossModal">
			<view class="left-side">
				<view class="title">我是车队老板</view>
				<view class="desc">
					车队老板本人不驾驶车辆承运，您需要添加车辆和司机后有司机进行承运，运费结算至车队老板的徐工智联账户内
				</view>
			</view>
			<view>
				<image src="/static/driver-boss.png"  class="driver-img" mode=""></image>
			</view>
		</view> -->
		
		<view class="individual-driver radius" @click="showCompanyModal">
			<view class="left-side">
				<view class="title">我是企业车辆承运人</view>
				<view class="desc">
					以公司名义注册平台高级会员且具有运输开票资质的物流公司，可以添加其他个人司机承运业务
				</view>
			</view>
			<view>
				<image src="/static/logistic-company.png" class="driver-img" mode=""></image>
			</view>
		</view>
		
		<button  @click="exit"  class="login-btn margin-top margin-bottom text-center self-center radius" data-class="fade" role="button" :disabled="login_disable">
			<text class="self-center">
				退出注册
			</text>
		</button>
		
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
			try {
			    uni.clearStorageSync();
			} catch (e) {
			    // error
			}
		},
		methods:{
			exit(){
				uni.reLaunch({
					url:"/pages/login/login"
				})
			},
			showDriverModal(){
				//APP 端
				// #ifdef APP-PLUS
				uni.showModal({
				   
				    content: '确认选择个体司机，选择后不可更换！',
					cancelText:'确定',
					confirmText:'取消',
				    success: function (res) {
						//调换点击事件使得"确认"键出现在Modal右面
				        if (res.confirm) {
							console.log('用户点击取消');
				        } else if (res.cancel) {
				            
							
							uni.setStorageSync("in_personal_registering",true)
							uni.setStorageSync("in_company_registering",false)
							
							uni.navigateTo({
								url:"/pages/register/register"
							})
				        }
				    }
				});
				
				// #endif
				
				//非APP端
				// #ifndef APP-PLUS
				uni.showModal({
				   
				    content: '确认选择个体司机，选择后不可更换！',
					cancelText:'取消',
					confirmText:'确定',
				    success: function (res) {
						//调换点击事件使得"确认"键出现在Modal右面
				        if (res.confirm) {
							
							uni.setStorageSync("in_personal_registering",true)
							uni.setStorageSync("in_company_registering",false)
							
							uni.navigateTo({
								url:"/pages/register/register"
							}) 
							
				        } else if (res.cancel) {
				           console.log('用户点击取消');
							
				        }
				    }
				});
				// #endif
			},
			
			// showBossModal(){
			// 	uni.showModal({
				   
			// 	    content: '确认选择车队老板，选择后不可进行更换！',
			// 	    success: function (res) {
			// 	        if (res.confirm) {
			// 				uni.setStorageSync("in_personal_registering",false)
			// 				uni.setStorageSync("in_company_registering",true)
			// 	            uni.navigateTo({
			// 	            	url:"/pages/register/register"
			// 	            })
			// 	        } else if (res.cancel) {
			// 	            console.log('用户点击取消');
			// 	        }
			// 	    }
			// 	});
			// },
			
			showCompanyModal(){
				//APP端
				// #ifdef APP-PLUS
				uni.showModal({
				   
				    content: '确认选择物流企业，选择后不可更换！',
					cancelText:'确定',
					confirmText:'取消',
				    success: function (res) {
						//调换点击事件使得"确认"键出现在Modal右面
				        if (res.confirm) {
							console.log('用户点击取消');
							
				        } else if (res.cancel) {
							
							uni.setStorageSync("in_personal_registering",false)
							uni.setStorageSync("in_company_registering",true)
							
							uni.navigateTo({
								url:"/pages/register/register"
							})
				        }
				    }
				});
				// #endif
				
				//非APP端
				// #ifndef APP-PLUS
				uni.showModal({
				   
				    content: '确认选择物流企业，选择后不可更换！',
					cancelText:'取消',
					confirmText:'确定',
				    success: function (res) {
						//调换点击事件使得"确认"键出现在Modal右面
				        if (res.confirm) {
							
							uni.setStorageSync("in_personal_registering",false)
							uni.setStorageSync("in_company_registering",true)
							
							uni.navigateTo({
								url:"/pages/register/register"
							})
							
							
				        } else if (res.cancel) {
							console.log('用户点击取消');
				        }
				    }
				});
				
				// #endif
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
	
	.login-btn{
			width: 90%;
			margin-left:5%;
			 background-color: #1684fc;
			 color:#fff;
			 font-size: 30rpx;
			 font-weight: 600;
			 border-radius:15rpx;
	}
</style>
