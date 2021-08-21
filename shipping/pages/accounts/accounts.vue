<template>
	<view>
	 
		<view class="user-avatar bg-gradual-blue" style="height:300rpx;" hover-class="one-icon-hover" >
				      <view>
						  <view class="lg-pic" 
						  @click="uploadAvatar"
						  >
							  <image  :src="imgAvatarUrl"   class="lg-pic"></image>
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
		
	   
	   <view class="cu-form-group" hover-class="one-icon-hover" @click="goDispatchBefore" v-if="show_dispatch_before"  >
	   		   <view class="lite-bar">
	   		        <image src="/static/billboard.svg"  class="sm-pic"></image>
	   			     <text class="lite-title">历史派车单</text>
	   			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" v-if="false">
		   <view class="lite-bar">
		        <image src="/static/card.png"  class="sm-pic"></image>
	   			<text class="lite-title">结算申请</text>
			</view>		
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" v-if="false">
		   <view class="lite-bar">
		        <image src="/static/boy.svg"  class="sm-pic"></image>
	   			<text class="lite-title">发货人管理</text>
			</view>
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="goAddCarBoss" v-if="false">
		   <view class="lite-bar">
		        <image src="/static/vr.png"  class="sm-pic"></image>
	   			<text class="lite-title">车老板列表</text>
			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   
	   
	   <view class="cu-form-group" @click="goVehicle"  v-if="show_vehicle" >
		   <view class="lite-bar">
		   	    <image src="/static/cars.png"  class="sm-pic"></image>
				<text class="lite-title">车辆管理</text>
			</view> 
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="goBankCard" v-if="show_bankcard" >
	   		   <view class="lite-bar">
	   		   	    <image src="/static/archive.svg"  class="sm-pic"></image>
	   				<text class="lite-title">银行卡管理</text>
	   			</view> 
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="goDriver" v-if="show_driver" >
	   		   <view class="lite-bar">
	   		   	    <image src="/static/driver.svg"  class="sm-pic"></image>
	   				<text class="lite-title">司机管理</text>
	   			</view> 
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="goPersonalInfo" >
		   <view class="lite-bar">
		   	    <image src="/static/brain.svg"  class="sm-pic"></image>
	   			<text class="lite-title">个人资料</text>
			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="goMember"  v-if="false">
	   		   <view class="lite-bar">
	   		   	<image src="/static/medal.png"  class="sm-pic"></image>
	   			<text class="lite-title">承运人会员管理</text>
	   			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" v-if="false">
		   <view class="lite-bar">
		   	    <image src="/static/money.png"  class="sm-pic"></image>
	   			<text class="lite-title">我的钱包</text>
			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="phoneCall"  >
	   		   <view class="lite-bar">
	   		   	    <image src="/static/speech.svg"  class="sm-pic"></image>
	   			<text class="lite-title">客服热线</text>
	   			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   
	   <view class="cu-form-group" @click="logout" >
	   		   <view class="lite-bar">
	   		   	    <image src="/static/wrench.svg"  class="sm-pic" ></image>
	   			<text class="lite-title">退出登录</text>
	   			</view>	
	   			<text class="cuIcon-right lg text-gray"></text>
	   </view>
	   <view>
	   	<tabbar-accounts  class="custom-tab-bar" v-if="!show_shipping_order"></tabbar-accounts>
	   </view>
	 
	</view>
</template>

<script>
	import tabbarAccounts from "@/pages/tabbar_accounts/tabbar_accounts"
	
	export default {
		data() {
			return {
				user_get:"",
				imgAvatarUrl:"/static/user.png",
				tachar_avatar:false,
				user:{},
				show_dispatch_before:false,
				
				show_shipping_order:true,
				show_vehicle:true,
				show_driver:true,
				show_bankcard:true,
				params:{},
			}
		},
		
		async onLoad(options){
			const token = uni.getStorageSync('token')
			   //get this user's permission rights
			   const resUserInfo = await this.$request({
			   	  	 	url:"/getInfo",
			   	  	 	
			   	  	 	header:{
			   	  	 		Authorization:token,
			   	  	 	},
			   	  	 	
			   	  	 })
					
				this.user_get = resUserInfo	 
				
			
			      const user_get = resUserInfo			
			   
				   
				   const user_permissions = user_get.data.permissions
				   
				   let result_shipping_order = user_permissions.findIndex(ele => ele === 'iscm:waybill:list')
				   
				   if (result_shipping_order == -1){
				   	this.show_shipping_order = false
					
				   	uni.hideTabBar(); 
				   }else{
				    this.show_shipping_order = true
				    
				     uni.showTabBar(); 
			       }
				   
				   let result_vehicle = user_permissions.findIndex(ele => ele === 'iscm:vehicle:list')
				  
				   if (result_vehicle == -1){
				   	this.show_vehicle = false
				   	
				   }
				   
				   let result_driver = user_permissions.findIndex(ele => ele === 'iscm:driver:list')
				 
				   if (result_driver == -1){
				   	this.show_driver = false
				   	
				   }
				   
				   let result_bankcard = user_permissions.findIndex(ele => ele === 'iscm:carrierBankcard:list')
				   
				   if (result_bankcard == -1){
				   	this.show_bankcard = false
				   	
				   }
				
		  
		},
		async onShow(){
			try {
			    const value = uni.getStorageSync('show_shipping_order');
			    if (value) {
			        this.show_shipping_order = value
			    }
			} catch (e) {
			    // error
			}
			
			
			       const token = uni.getStorageSync('token')
			          //get this user's permission rights
			          const resUserInfo = await this.$request({
			          	  	 	url:"/getInfo",
			          	  	 	
			          	  	 	header:{
			          	  	 		Authorization:token,
			          	  	 	},
			          	  	 	
			          	  	 })
			       		 
			       	this.user = resUserInfo	 
			       			
			       			 //正式库，危险
			           // this.imgAvatarUrl = 'https://wl.xcmgzhilian.com' + '/prod-api' + this.user.data.user.avatar
			       			 //半测试版
			       			this.imgAvatarUrl = 'http://116.62.172.131:88' + '/stage-api' + this.user.data.user.avatar
			       			 //测试库
			       // this.imgAvatarUrl = 'http://10.22.2.138:8080' + this.user.data.user.avatar
			       //this.imgAvatarUrl = 'http://10.22.0.136:8080' + this.user.data.user.avatar
			       
			       //如果后台没有传入avatar,就用local 的avatar展示
			       if (this.user.data.user.avatar ==""){
					   
			       			 this.imgAvatarUrl ="/static/user.png"
							  
			       }
				   
				   const user = this.user 
				   
				   const user_permissions = user.data.permissions
				   
				   let result_shipping_order = user_permissions.findIndex(ele => ele === 'iscm:waybill:list')
				   
				   if (result_shipping_order == -1){
				   	this.show_shipping_order = false
				   	
				   }
				   
				   let result_vehicle = user_permissions.findIndex(ele => ele === 'iscm:vehicle:list')
				   
				   if (result_vehicle == -1){
				   	this.show_vehicle = false
				   	
				   }
				   
				   let result_driver = user_permissions.findIndex(ele => ele === 'iscm:driver:list')
				   
				   if (result_driver == -1){
				   	this.show_driver = false
				   	
				   }
				   
				   let result_bankcard = user_permissions.findIndex(ele => ele === 'iscm:carrierBankcard:list')
				  
				   if (result_bankcard == -1){
				   	this.show_bankcard = false
				   	
				   }
			//如果是管理员,可以看到所有，不受上面的权限约束
			const user_role  = user.data.roles
			if(user_role.includes("admin")) {
				this.show_shipping_order = true
				this.show_vehicle = true
				this.show_driver = true
				this.show_bankcard = true
			}
			
			
			
			//get the user information to present
			this.user = uni.getStorageSync("user_info")
			if (!this.user||this.user == undefined|| this.user ==null){
				uni.reLaunch({
					url:"/pages/login/login"
				})
			}
			
			//判定是否“历史派车单”
			if(this.user.data.permissions.includes("iscm:dispatch:list")&&this.user.data.roles.includes("defaultPersonalCarrier"))
			    this.show_dispatch_before = true
			else if(this.user.data.roles.includes("admin") )
				 this.show_dispatch_before = true
			else if(this.user.data.permissions.includes("iscm:dispatch:list")&&this.user.data.roles.includes("defaultDriver") )
				 this.show_dispatch_before = true	 
			else
			    this.show_dispatch_before = false
			//正式库 危险！！！
			//this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'https://wl.xcmgzhilian.com' + '/prod-api' + this.user.data.user.avatar	
			//半测试版
			this.imgAvatarUrl = uni.getStorageSync("user_avatar")|| 'http://116.62.172.131:88'  + '/stage-api' + this.user.data.user.avatar
			//测试库
			//this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'http://10.22.2.138:8080' + this.user.data.user.avatar
			//this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'http://10.22.0.136:8080' + this.user.data.user.avatar
		},
		components: {
		     tabbarAccounts,
			 
		
		},
		onHide(){
			//restore the original shipping order status
			this.show_shipping_order = true
			this.show_driver = true
			this.show_vehicle = true
			this.show_bankcard = true
		},
		methods: {
			phoneCall(){
				uni.makePhoneCall({
				    phoneNumber: '051687739070' ,
					
				});
				      },
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
											   					//半测试版
																url:"http://116.62.172.131:88/stage-api/system/user/profile/avatar",
																//测试库
																//url:"http://10.22.2.138:8080/system/user/profile/avatar",
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
			
			goDispatchBefore(){
				
				uni.navigateTo({
					url:'/pages/dispatch_before_detail/dispatch_before_detail'
				})
			},
			
			
			
			
			goVehicle(){
				uni.navigateTo({
					url:'/pages/vehicle_list/vehicle_list'
				})
			},
			goBankCard(){
				uni.navigateTo({
					url:'/pages/bank_card/bank_card'
				})
			},
			goDriver(){
				uni.navigateTo({
					url:'/pages/driver_list/driver_list'
				})
			},
			goPersonalInfo(){
				uni.navigateTo({
					url:'/pages/personal_info/personal_info'
				})
			},
			
			goMember(){
				uni.navigateTo({
					url:'/pages/member/member'
				})
			},
			goAddCarBoss(){
				uni.navigateTo({
					url:'/pages/add_car_boss/add_car_boss'
				})
			},
			
			logout(){
				
				// try {
				//     uni.removeStorageSync('token');
				// 	uni.removeStorageSync('user_info');
				// 	this.user = ""
				// } catch (e) {
				//     // error
				// }
							
							// //同步清理本地数据缓存
							// try {
							//     uni.clearStorageSync();
							// } catch (e) {
							//     // error
							// }
							
							
							//restore the original shipping order status
							this.show_shipping_order = true
				
				uni.reLaunch({
					url:'/pages/login/login'
				})  
			
				
				// // #ifdef APP-PLUS 
							 
				// plus.runtime.quit();  
				// // #endif
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
	 
	 .lite-bar{
		 display:flex;
		 flex-direction:row;
		 align-items: middle;
		 .lite-title{
			 margin-left:20rpx;
		 }
	 }
	 
	 
	 .custom-tab-bar{
	 	border: 1rpx solid red;
	 	width:200rpx;
	 	height:100rpx;
	 	position: fixed;
	 	border: 0;
	 	left:0;
	 }
</style>
