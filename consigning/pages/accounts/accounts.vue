<template>
	<view>
		<view class="user-avatar bg-gradual-blue" style="height:300rpx;" hover-class="one-icon-hover" >
				      <view>
						  <view class="lg-pic" 
						  @click="uploadAvatar"
						  >
							  <image  :src="imgAvatarUrl"  mode="" class="lg-pic"></image>
							  <image src="/static/tachar.png" mode="aspectFit" @click="cancelAvatar"
							   class="tachar" v-if="tachar_avatar"></image>
						  </view>
						   <view>
							  <text class="user-name"> {{user.data.user.nickName}}</text>
							  <text class="has-accreditted"> 已认证</text> 
						   </view>
						  <view class="user-accounts"> 账号： {{user.data.user.phonenumber}}</view>
					  </view>
		</view>
		
		<view class="cu-form-group" hover-class="one-icon-hover" @click="goShippingOrder">
				  
				  <view>
				        <image src="/static/despatching.png"  class="sm-pic"></image>
					<text>货源列表</text>
					</view>	
					<image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image>
		</view>
		
		<view class="cu-form-group" hover-class="one-icon-hover" @click="goBatchOrdering">
				      <view>
						  <image src="/static/way-bill.png"  class="sm-pic"></image>
						  <text>货源下单 (批量货模式)</text>
					  </view>
					<image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image>
		</view>
	   <view class="cu-form-group" hover-class="one-icon-hover" @click="goOrdinaryOrdering">
		      <view>
				  <image src="/static/folder.png" mode="" class="sm-pic"></image>
				  <text>货源下单 (普通货模式)</text>
			  </view>
	   			<image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image>
	   </view>
	   
	   
	   <view class="cu-form-group" v-if="false">
		   <view>
		        <image src="/static/boy.png" mode="" class="sm-pic"></image>
	   			<text>发货人管理</text>
			</view>
	   			<image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image>
	   </view>
	   
	  
	   <view class="cu-form-group" @click="goPersonalInfo">
		   <view>
		   	    <image src="/static/brain.png" mode="" class="sm-pic"></image>
	   			<text>个人资料</text>
			</view>	
	   			<image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image>
	   </view>
	   
	  
	   <view class="cu-form-group" @click="logout">
	   		   <view>
	   		   	    <image src="/static/wrench.png" mode="" class="sm-pic" ></image>
	   			<text>退出登录  (不保存用户名和密码)</text>
	   			</view>	
	   			
	   </view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				user:"",
				imgAvatarUrl:"/static/user.png",
				tachar_avatar:false,
				
				params:{},
			}
		},
		
		onLoad(options){
		    this.user = uni.getStorageSync("user_info")
			
			 //正式库，危险
		       //this.imgAvatarUrl = 'https://wl.xcmgzhilian.com' + '/prod-api' + this.user.data.user.avatar
			 //测试库
		    this.imgAvatarUrl = 'http://10.22.2.138:8080' + this.user.data.user.avatar
		   //this.imgAvatarUrl = 'http://10.22.0.136:8080' + this.user.data.user.avatar
		  
		  //如果后台没有传入avatar,就用local 的avatar展示
		  if (this.imgAvatarUrl ==""){
			  this.imgAvatarUrl ="/static/user.png"
		  }
		},
		onShow(){
			//get the user information to present
			this.user = uni.getStorageSync("user_info")
			if (!this.user||this.user == undefined|| this.user ==null){
				uni.reLaunch({
					url:"/pages/login/login"
				})
			}
			
			//正式库 危险！！！
			//this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'https://wl.xcmgzhilian.com' + '/prod-api' + this.user.data.user.avatar	
			//测试库
			this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'http://10.22.2.138:8080' + this.user.data.user.avatar
			//this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'http://10.22.0.136:8080' + this.user.data.user.avatar
		},
		methods: {
			async uploadAvatar(e){
				var _self=this
				var authorization = uni.getStorageSync("token")
				/**
				 * 用户头像
				 */ 
				const resChoosePhoto= await this.$photo({
										  async success(res) {
										    const tempFilePaths = res.tempFilePaths;
											
											 //upload the img
											 _self.imgAvatarUrl = tempFilePaths[0]
											   uni.setStorageSync("user_avatar",_self.imgAvatarUrl)
											 //make the tachar img appear
											  _self.tachar_avatar=true
											  
											   //upload
											 
											   _self.params.avatarfile = _self.imgAvatarUrl
											   var form =  _self.params
											   var avatar =  _self.imgAvatarUrl
											 
											   uni.uploadFile({
												                  //正式库，危险！！！！
												                 //url:"https://wl.xcmgzhilian.com/prod-api/system/user/profile/avatar",
											   					//测试库
																url:"http://10.22.2.138:8080/system/user/profile/avatar",
																//url:"http://10.22.0.136:8080/system/user/profile/avatar",
											   					filePath: tempFilePaths[0],
											              		name: 'avatarfile',  //后台接收字段名
											   					
											   					header:{
																	Authorization:authorization,
											   						"Content-Type": "multipart/form-data",
											   						
											   					},
											   					success: (res) => {
																uni.showToast({title:"保存成功!", });
											   					},
											   				})
											   
											}
				})	
			},
				
			cancelAvatar(){
				this.imgAvatarUrl = "/static/user.png"
				setTimeout(()=>{
					uni.showToast({
						title:"删除头像照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_avatar =false
			},	
			goWayBill(){
				uni.switchTab({
					url:'/pages/way_bill/way_bill'
				})
			},
			goShippingOrder(){
				uni.switchTab({
					url:'/pages/shipping_order/shipping_order'
				})
			},
			
			goBatchOrdering(){
				
				uni.navigateTo({
					url:`/pages/batch_ordering/batch_ordering`
				})
			},
			goOrdinaryOrdering(){
				
				uni.navigateTo({
					
					url:`/pages/ordinary_ordering/ordinary_ordering`
				})
			},
			goDispatchBefore(){
				
				uni.navigateTo({
					url:'/pages/dispatch_before/dispatch_before'
				})
			},
			
			goPersonalInfo(){
				uni.navigateTo({
					url:'/pages/personal_info/personal_info'
				})
			},
			
			
			logout(){
				
				try {
				    uni.removeStorageSync('token');
					uni.removeStorageSync('user_info');
					this.user = ""
				} catch (e) {
				   
				}
				
				//同步清理本地数据缓存
				try {
				    uni.clearStorageSync();
				} catch (e) {
				   
				}
				
				
				uni.navigateTo({
					url:'/pages/login/login'
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-avatar{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.lg-pic{
			 width:80rpx;             height:80rpx;
			 text-align: center;
			 margin:5rpx auto;
			 justify-content: center;
			 align-items: center;
		}
		.tachar{
					  position: absolute;
					  width:40rpx;
					  height:40rpx;
					  left:40%;
		}
		.user-name{
			font-size: 40rpx;
			
		}
		.has-accreditted{
			background-color:#f37a1d ;
			 margin-left:25rpx;
			 font-size: 25rpx;
		}
		
	}
	.user-accounts{
		text-align: center;
	}
    .top-line{
	     height:80rpx;
		 border-top:1rpx solid #ccc;
		 view{
			
			 display: flex;
			 align-items: center;
			 image{
				 
				 margin-right: 20rpx;
			 }
		 }
	 }
	 
	 .sm-pic{
		 width:50rpx;
		 height:50rpx;
		 margin-right:10rpx;
	 }
	 
	 .flex-bar{
	 		 display: flex;
	 		 justify-content: space-between;
			 align-items: center;
	 		 padding-left: 5%;
	 		 padding-right: 5%;;
	 		 padding-top:15rpx;
	 		 padding-bottom:15rpx;
	 }
	 
	 .one-icon-hover{
	 	
	 }
	 
	 .cu-form-group {
	 	background-color: #ffffff;
	 	padding: 1upx 30upx;
	 	display: flex;
	 	align-items: center;
	 	min-height: 100upx;
	 	justify-content: space-between;
	 }
	 
	 .bg-gradual-blue {
	 	background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	 	color: #ffffff;
	 }
	 
	 .sm-icon{
	 		 width:40rpx;
	 		 height:40rpx;
	 }
	 
	 .text-gray{
	 		 color: #999;
	 }
	 
</style>
