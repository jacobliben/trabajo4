<template>
	<view class="full-screen ">
		<form class="screen-cover" @submit="formSubmit" @reset="formReset">
			<view class="head">
				<image src="/static/driver-version.png" mode="widthFix" class="drivers" @click="go"></image>
			</view>
		    
			<view class="login-inputs radius">
				<view class="user-login">
					<text class="cuIcon-people text-style text-blue"></text>
					<input type="text" placeholder="请输入用户账号"   focus @input="getUserAccount" class="account-input">
					
				</view>
				<view class="user-password" v-if="hidePass">
					<text class="cuIcon-lock text-style text-blue"></text>
					<input type="text" placeholder="请输入用户密码"  password @input="getUserpassword" class="password-input">
					<text class="cuIcon-attentionforbid text-style text-gray end-icon" @click="hidePass=!hidePass"></text>
				</view>
				<view class="user-password" v-if="!hidePass">
					<text class="cuIcon-lock text-style text-blue"></text>
					<input type="text" placeholder="请输入用户密码"   @input="getUserpassword" class="password-input">
					<text class="cuIcon-attention text-style text-gray end-icon" @click="hidePass=!hidePass"></text>
				</view>
			</view>
		
			<button  form-type="submit"  class="footer margin-top margin-bottom text-center self-center radius" data-class="fade" role="button" aria-disabled = "false" hover-class="button-hover">
				<text class="self-center">登录</text>
			</button>
		<!-- </view> -->
		
		<view class="more-choices margin-top">
			<view><navigator url="/pages/choose_identity/choose_identity" ><text class="choices">立即注册</text></navigator></view>
		    
				
				
				<view class="change-pass">
					<navigator url="/pages/tel_login/tel_login"><text class="no-use-more">短信登录</text></navigator>
				</view>
				
				<view class="change-pass">
					<navigator url="/pages/recover_account/recover_account"><text class="choices">忘记密码？</text></navigator> 
				</view>		
			
		</view>
		
		<!-- <view class="more-choices margin-top">
			
				<view class="change-pass">	
					<navigator url="/pages/change_phone/change_phone"><text class="no-use-more">原手机已不用?</text><text class="change-phone">修改手机号</text></navigator>
				</view>
				
		</view> -->
		</form>
		
		<!-- <view class="rapid-login">
			<text class="left-line"></text>
			<text class="rapid-title">快速登录</text>
			<text class="right-line"></text>
		</view> -->
		
		<!-- <view class="rapid-login-icon">
			<view class="one-login-icon" @click="wechatLogin">
				<image src="/static/wechat.png" mode="" class="wechat"></image>
				<text class="one-login-icon-letter">微信登录</text>
			</view>
			<view class="one-login-icon">
				<navigator url="/pages/tel_login/tel_login" class="one-login-icon">
				<image src="/static/veri-phone.png" mode="" class="wechat"></image>
				<text class="one-login-icon-letter">电话验证码登录</text>
				 </navigator>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {  
	        mapMutations  
	    } from 'vuex';  
	import js_base64_encode from '@/components/base64.js';
	import encrypt_aes from '@/util/secret.js'	
	import CryptoJS from 'crypto-js';
	
	let Base64 = js_base64_encode.Base64;
	
		
	export default {
		data() {
			return {
				userAccount:"",
				userPassword:"",
				code:"",
				hidePass:true
			}
		},
		onLoad(){
			var that = this 
			// uni.showLoading({
			// 	title:"登录中"
			// })
			
			// uni.login({
			// 	provider:"weixin",
			// 	success:(loginRes)=>{
		
			// 		that.code = loginRes.code
			// 		uni.hideLoading()
			// 	}
			// })
			
			
		},
	    
		methods: {
			 go(){
			// 	uni.navigateTo({
			// 	url:"/pages/11/11"
			// 	  })
			
				// // //Android 获取camera
				// var main = plus.android.runtimeMainActivity();
				//    //通过反射获取Android的Intent对象
				//   var Intent = plus.android.importClass("android.content.Intent");
				//   //通过宿主上下文创建 intent
				//   var intent = new Intent(main.getIntent());
				//   //设置要开启的Activity包类路径  com.HBuilder.integrate.MainActivity换掉你自己的界面
				//   intent.setClassName(main, "io.dcloud.UNIACABF38.Camera");
				//   //开启新的任务栈 （跨进程）
				//   intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
				//   //开启新的界面
				//   main.startActivity(intent);
				
				
			},
			getUserAccount(e){
				//this.userAccount = e.target.value
				this.userAccount = Base64.encode(e.target.value)
				
				
			},
			
			getUserpassword(e){
				
				var CRYPTOJSKEY = "paj2ksAc1pWeOgT621zcKQ==";
				
				// 加密
				function encrypt(plaintText) {
				  let options = {
				    mode: CryptoJS.mode.ECB,
				    padding: CryptoJS.pad.Pkcs7
				  };
				  let key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
				  let encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
				  return encryptedData.toString();
				}
				
				
				function repeatedlyEncrypt(plaintText, numbers) {
				  plaintText = plaintText;
				  for (let i = 0; i < numbers; i++) {
				    plaintText = encrypt(plaintText);
				  }
				  return plaintText;
				}
				var result = repeatedlyEncrypt(e.target.value,10)
				
				this.userPassword = result 
			},
			wechatLogin(){
				uni.switchTab({
				url:"/pages/index/index"
				})
			},
			
			 async formSubmit(){
				 const user_data = {
				 	username:this.userAccount,
				 	password:this.userPassword
				 }
				 
				const res = await this.$request({
					url:"/login",
					method: "POST",
					data:user_data
	
				})
				
				const token = "Bearer "+ res.data.token
				 uni.setStorageSync('token',token)
				
				if(res.data.code==200){
							uni.showToast({
								title:"欢迎",
								icon:"none"
							})
				           
                           //get this user's permission rights 
						   const resUserInfo = await this.$request({
						   	  	 	url:"/getInfo",
						   	  	 	
						   	  	 	header:{
						   	  	 		Authorization:token,
						   	  	 	},
						   	  	 	
						   	  	 })
						 
						   uni.setStorageSync("user_info",resUserInfo)
						  
						   uni.setStorageSync("avatar",resUserInfo.data.user.avatar)
						   //确定是否要让其选择“所属公司”,并跳转相应的页面
						   if (resUserInfo.data.user.deptId == 130 ){
							   setTimeout(()=>{
							   		uni.navigateTo({
							   	url:"/pages/choose_company/choose_company"
							      })
							   },800)
						   }else{
							   setTimeout(()=>{
							   uni.switchTab({
							   	url:"/pages/index/index"
							      })
							   },800)
						   }
						   
							
							 
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							})
							
						}
				
				
			},
			formReset:()=>{
				
			},
			
			 ...mapMutations(['login'])  
		}
	}
</script>

<style lang="scss" scoped>
	.screen-cover{
		background-color: #f5f6f8;
		padding-bottom:100rpx;
	}
	
	.head{
		width:100%;
		height:300rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.drivers{
			width:200rpx;
			height:300rpx;
		}
	}
	 .user-login, .user-password{
		 display: flex;
		 flex-direction: row;
		 width:100%;
		position:relative;
		 padding-left:20rpx;
		
	 }
	 
	 .user-login{
		  margin-top:10rpx;
		  margin-bottom:10px
	 }
	 
	 .login-inputs{
		 border:1px solid #d6d6d6;
		 border-radius: 20rpx;
		 width:80%;
		 margin-left:10%;
	 }
	 
	 .text-blue{
		 color:#0b39fc;
	 }
	
	 .user-password{
		 border-top:1px solid #ccc;
	     padding-top:10rpx;
		 padding-bottom:10rpx ;
		  
	 }
	 
	 .account-input,.password-input{
		 margin-top:0rpx;
		 margin-left:10rpx;
	 }
	 
	 .end-icon{
		position:absolute;
		right:20rpx;
	 }
	 
	 .more-choices{
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 width:80%;
		 margin-left:10%;
		 font-size:30rpx;
		  .choices{
			   color:#aaa;
			   font-size:30rpx;
		  }
		  
		  .no-use-more{
			  color:#0081FF;
			  margin-right:10rpx;
			  font-size:30rpx;
		  }
		  .change-phone{
			  color:#aaa;
		  }
		
	 }
     .footer{
		 width:80%;
		 justify-content: center;
		 margin-left:10%;
		 border-radius: 20rpx;
		 background-color:#09499b ;
		 color:#bff4ff;
		 
	 }
	 .btn-login{
	 			 background-color:#09499b ;
	 			 color:#bff4ff;
	 			 width:100%;
	 			 border:1rpx solid red;
	 			 
	 			 height:80rpx;
	 			
	 			 display:flex ;
	 			
	 			 align-items: center;
	 }
	 		
	 .button-hover{
	 			  transform: scale(1.2);
	 }
	 .rapid-login{
		 width:90%;
		 height:40rpx;
		 margin-left:5%;
		 margin-top:30rpx;
		 display: flex;
		 flex-direction: row;
		 position: relative;
	
		 .left-line,.right-line{
			 border-bottom: 1px solid #ddd;
            
			 flex:1;
			 height: 50%;
			
		 }
		 .rapid-title{
			 position: absolute;
			 left:50%;
			 transform: translateX(-50%);
			 color: #999;
			 background-color: #fff;
			 			 
		 }
		 
	 }
	 
	 .rapid-login-icon{
		 width:90%;
		margin-top:25rpx;
		 margin-left:5%;
		 		
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 .one-login-icon{
			 display: flex;
			 flex-direction: column;
			 justify-content: center;
			 align-items: center;
		 }
		 .wechat{
			 width:50rpx;
			 height:50rpx;
			 
		 }
		 .one-login-icon-letter{
			 color:#999;
		 }
		 
	 }
</style>
