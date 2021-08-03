<template>
	<view class="full-screen ">
		<form class="screen-cover" @submit="formSubmit" @reset="formReset">
			<view class="head">
				<image src="/static/driver-version.png" mode="widthFix" class="drivers"></image>
			</view>
		    
			<view class="login-inputs radius">
				<view class="user-login">
					<text class="cuIcon-people text-style text-blue"></text>
					<input type="text" placeholder="请输入用户账号" :value="username"  focus @input="getUserAccount" class="account-input">
					
				</view>
				<view class="user-password" v-if="hidePass">
					<text class="cuIcon-lock text-style text-blue"></text>
					<input type="text" placeholder="请输入用户密码" :value="password" password @input="getUserpassword" class="password-input">
					<text class="cuIcon-attentionforbid text-style text-gray end-icon" @click="hidePass=!hidePass"></text>
				</view>
				<view class="user-password" v-if="!hidePass">
					<text class="cuIcon-lock text-style text-blue"></text>
					<input type="text" placeholder="请输入用户密码"  :value="password" @input="getUserpassword" class="password-input">
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
				hidePass:true,
				
				version:20.0,
				
				username:"",
				password:"",
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
			this.AndroidCheckUpdate()
			
			
			uni.getSystemInfo({
			                success:(res) => {
			                    //检测当前平台，如果是安卓则启动安卓更新  
			                    if(res.platform=="android"){  
			                        this.AndroidCheckUpdate();  
			                    }  
			                }  
			            })
			
		},
		
		mounted() {
			
				this.username = uni.getStorageSync("username")
				this.password = uni.getStorageSync("password")
			
			
		},
	    
		methods: {
			
			getUserAccount(e){
				this.username = e.target.value
				
				uni.setStorageSync("username",this.username)
				
				
			},
			
			getUserpassword(e){
				this.password = e.target.value
				
				uni.setStorageSync("password",this.password)
				
			},
			wechatLogin(){
				uni.switchTab({
				url:"/pages/index/index"
				})
			},
			
			 async formSubmit(){
				//encode the username
				this.userAccount = Base64.encode(this.username)
				
				//encode the password
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
				var result = repeatedlyEncrypt(this.password,10)
				
				this.userPassword = result 
				
				
				//use the encoded username and password to login
				
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
			
			
			  /**
			             * 安卓应用的检测更新实现
			             */
			 
			async AndroidCheckUpdate(){ 
				var that = this
				const res = await this.$request({
					url:"/iscm/appVersion/version/" + that.version,
					
				})
				
				const appDownload = res.data.data.download
				const appVersion = res.data.data.appVersion
				const oldVersion = that.version
				if (oldVersion<appVersion){
					   // 此处判断是否为 WIFI连接状态
					   if(plus.networkinfo.getCurrentType()!=3){
					       uni.showToast({  
					           title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新',  
					           mask: true,  
					           duration: 5000,
					           icon:"none"
					       });  
					       return;  
					   }else{
						  uni.showModal({
						                              title: "版本更新",
						                              content: '有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？',
						                              confirmText:'立即更新',
						                              cancelText:'稍后进行',
						                              success: function (res) {
						                                  if (res.confirm) {
						                                      uni.showToast({
						                                          icon:"none",
						                                          mask: true,
						                                          title: '有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序',  
						                                          duration: 5000,  
						                                      }); 
						                                      //设置 最新版本apk的下载链接
						                                       var downloadApkUrl = appDownload
						                                      var dtask = plus.downloader.createDownload( downloadApkUrl, {}, function ( d, status ) {  
						                                              // 下载完成  
						                                              if ( status == 200 ) {   
						                                                  plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename),{},{},function(error){  
						                                                      uni.showToast({  
						                                                          title: '安装失败', 
						                                                          duration: 1500  
						                                                      });  
						                                                  })
						                                              } else {  
						                                                   uni.showToast({  
						                                                      title: '更新失败',
						                                                      duration: 1500  
						                                                   });  
						                                              }    
						                                          });  
						                                      dtask.start();
						                                  } else if (res.cancel) {
						                                      console.log('稍后更新');
						                                  }
						                              }
						                          });
												  
						                      } 
						   
						   
					   }                 
					
					
				
					
				
				
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
