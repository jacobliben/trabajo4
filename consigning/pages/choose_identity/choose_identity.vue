<template>
	<view>
		<view class="primer-frase">
			确实角色后，不能进行更改，请根据您的实际身份进行选择哦！
		</view>
		    
		<view class="individual-driver radius" @click="showDriverModal">
			<view class="left-side">
				<view class="title">我是个人托运人</view>
				<view class="desc">
					由个体本人托运货物，用本人银行卡结算费用
				</view>
			</view>
			<view>
				<image src="/static/men.png" class="driver-img" mode=""></image>
			</view>
		</view>
		
	
		<view class="individual-driver radius" @click="showCompanyModal">
			<view class="left-side">
				<view class="title">我是企业托运人</view>
				<view class="desc">
					以公司名义注册平台高级会员,且具有开票资质
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
			try {
			    uni.clearStorageSync();
			} catch (e) {
			    // error
			}
		},
		methods:{
			showDriverModal(){
				uni.showModal({
				   
				    content: '确认选择个人托运人，选择后不可更换！',
					cancelText:'取消',
					confirmText:'确定',
				    success: function (res) {
						//调换点击事件使得"确认"键出现在Modal右面
				        if (res.confirm) {
							uni.setStorageSync("in_personal_consignor_registering",true)
							uni.setStorageSync("in_company_consignor_registering",false)
							
							uni.navigateTo({
								url:"/pages/register/register"
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
							
							
				        }
				    }
				});
			},
			
			
			showCompanyModal(){
				uni.showModal({
				   
				    content: '确认选择企业托运人，选择后不可更换！',
					cancelText:'取消',
					confirmText:'确定',
				    success: function (res) {
						//调换点击事件使得"确认"键出现在Modal右面
				        if (res.confirm) {
							uni.setStorageSync("in_personal_consignor_registering",false)
							uni.setStorageSync("in_company_consignor_registering",true)
							
							uni.navigateTo({
								url:"/pages/register/register"
							})
							
				        } else if (res.cancel) {
							console.log('用户点击取消');
							
				        }
				    }
				});
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
