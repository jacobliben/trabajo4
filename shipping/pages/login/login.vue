<template>
	<view class="full-screen ">
		<form class="screen-cover" @submit="formSubmit" @reset="formReset">
			<!-- <view class="head">
				<image src="/static/driver-version.png" mode="widthFix" class="drivers"></image>
			</view> -->
			
			<view class="head-title">
			   欢迎登录徐工智联
			</view>
		    <view class="head-title">
		       <text class="sub-title">网络货运平台</text>
			   <text class="title-blue">司机版</text>
		    </view>
			
			<view class="get-inputs">
				<view class="user-name">
				  <input type="text" placeholder="请输入用户账号" :value="username"  @input="getUserAccount" class="username-input">
				</view>
				
				<view class="user-name" v-if="hidePass">
				  <input type="text" placeholder="请输入用户密码" :value="password" password @input="getUserpassword" class="username-input">
				  <image src="/static/blind.svg" mode="widthFix" class="end-icon"  @click="hidePass=!hidePass" ></image>
				</view>
				
				<view class="user-name" v-if="!hidePass">
				  <input type="text" placeholder="请输入用户密码" :value="password" @input="getUserpassword" class="username-input">
				  <image src="/static/eye.svg" mode="widthFix" class="end-icon"  @click="hidePass=!hidePass"></image>
				</view>
			</view>
			
			<view class="terms">
				 <label class="radio"><radio class="radio-icon" value="r1" :checked="terms_checked"  @click="radioChange"/>
				   <text>登录代表同意徐工智联</text>
				   <text class="blue-terms" @click.prevent="goTerms"><<用户协议>></text>
				 </label>
			</view>
			
			<button  form-type="submit"  class="login-btn margin-top margin-bottom text-center self-center radius" data-class="fade" role="button" :disabled="login_disable">
				<text class="self-center">立即登录</text>
			</button>
			
			<!-- <view class="login-inputs radius">
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
			</view> -->
		
			<!-- <button  form-type="submit"  class="footer margin-top margin-bottom text-center self-center radius" data-class="fade" role="button" aria-disabled = "false" hover-class="button-hover">
				<text class="self-center">登录</text>
			</button> -->
		<!-- </view> -->
		
		<view class="more-choices margin-top">
			<view><navigator url="/pages/choose_identity/choose_identity" ><text class="choices">立即注册</text></navigator></view>
		    
				
				
				<view class="change-pass">
					<navigator url="/pages/tel_login/tel_login"><text class="no-use-more">验证码登录</text></navigator>
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
		
		 <!-- download updated version of apk -->
		<view class="cu-modal show" v-if="show_modal" >
			
			<view class="cu-dialog" >
				
				<image src="/static/car-version.png" mode="widthFix" class="car-version"></image>
				<view class="msg-time">新版本升级</view>
				<view class="padding-xl">
					<view class="version-title">
						{{new_version}} 新功能
					</view>
					 <view class="version-describe">
						 {{new_version_describe}}
					 </view>
				</view>
				<view v-if = "force_update">
					<button  class="update"  size="mini" @click="hasSee()">升级体验</button>
				</view>
				
				<view v-if = "!force_update" class="free-update">
					<button  class="update-later"  size="mini" @click="hideModal()">稍后升级</button>
					<button  class="update-later"  size="mini" @click="hasSee()">升级体验</button>
				</view>
				
			</view>
		</view>
		
		<!-- progess of new apk -->
		<view class="cu-modal show" v-if="show_progress" >
			
			<view class="cu-dialog" >
				
				<view class="padding-xl">
					<view class="progress-title">
						下载中...
					</view>
					
					<view class="cu-progress round margin-top xs">
						<view class="bg-blue" :style="{width:percentage+'%',}" ></view>
					</view>
					 <view class="progress-describe">
						 已完成{{percentage}}%
					 </view>
				</view>
			
			</view>
		</view>
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
				new_version:"",
				new_version_describe:"",
				appDownload:"",
				show_modal:false,
				show_progress:false,
				
				percentage:18,
				
				force_update:false,
				username:"",
				password:"",
				
				terms_checked:false,
				login_disable:false,
			}
		},
		
		created() {
			 this.AndroidCheckUpdate();
			
		},
		mounted() {
			    
				
				this.username = uni.getStorageSync("username")
				this.password = uni.getStorageSync("password")			
							
		},
	    watch: {
			
	    	terms_checked(newValue, oldValue) {
				if (newValue == true){
					this.login_disable = false
				}else{
					this.login_disable = true
				}
	    		
	    	}
	    },
		methods: {
			
			goTerms(){
				uni.navigateTo({
					url:"/pages/terms/terms"
				})
			},
			showModal(){
				//显示modal消息
				this.show_modal = true 
			},
			
			hideModal(){
				this.show_modal = false
			},
			hasSee(){
				var that = this
				this.show_modal = false
				//设置 最新版本apk的下载链接
				 var downloadApkUrl = this.appDownload
			
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
				
				dtask.addEventListener('statechanged', function ( task,status){
					
					  switch(task.state) {  
					                             case 1: // 开始  
					                                       uni.showToast({
					                                           title: '开始下载...　', 
					                                           icon:none,
					                                       });  
					                                   break;  
					                              case 2: // 已连接到服务器  
					                                    uni.showToast({
					                                        title: '开始下载...　', 
					                                        icon:none,
					                                    });    
					                              case 3: 
												      that.showProgress() 
					                                  var percentage = task.downloadedSize/task.totalSize*100;  
					                                  that.percentage = Math.round(percentage) 
					                              break;  
					                              case 4: // 下载完成  
					                                  that.hideProgress() 
					                              break;  
					                          }  
				})
				
				dtask.start();
			},
			
			showProgress(){
				//显示download progress
				this.show_progress = true 
			},
			
			hideProgress(){
				this.show_progress = false
			},
			
			
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
			
			radioChange: function(evt) {
			            this.terms_checked = !this.terms_checked
						
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
				
				
				that.appDownload = res.data.data.download
				const appVersion = res.data.data.appVersion
				const oldVersion = that.version
				const notForced = res.data.data.isUse
				
				if (notForced == false){
					that.force_update = true
				} else {
					that.force_update = false
				}
				this.new_version = appVersion
				this.new_version_describe = res.data.data.appDescribe
				if (oldVersion<appVersion){
					that.showModal()
					   
					   }                 
					
					
			},
			
			
			 ...mapMutations(['login'])  
		}
	}
</script>

<style lang="scss" scoped>
	.screen-cover{
		background-color: #f5f6f8;
		padding-bottom:50rpx;
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
	 
	 
	 
	 .more-choices{
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 width:100%;
		 font-weight:500;
		 margin-left:0;
		 font-size:25rpx;
		  .choices{
			   color:#000;
			   font-size:30rpx;
		  }
		  
		  .no-use-more{
			  color:#0081FF;
			 
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
	 
	 .msg-time{
		 font-weight: 800;
	 }
	 .version-title{
		 color:#045ee8;
	 }
	 
	 .update{
		  background-color: #4394ff;
		  color:#fff;
		  font-weight: 800;
		  width: 70%;
		  margin-bottom:10% ;
	 }
	 
	 .car-version{
		  margin-top:7% ;
		  width: 80%;
		  height:25% ;
		  margin-bottom:20% ;
	 }
	 
	 .version-describe{
		 margin-top:4.5% ;
	 }
	 
	 .progress-title{
		 color: #000;
		 font-weight: 600;
		 font-size: 40rpx;
		 margin-bottom:12% ;
	 }
	 
	 .progress-describe{
		  color: #4394ff;
		  margin-top:14.5% ;
		  font-size: 35rpx;
	 }
	 
	 .free-update{
		 display: flex;
		 flex-direction: row;
	 }
	 
	 .update-later{
		 background-color: #4394ff;
		 color:#fff;
		 font-weight: 800;
		 width: 35%;
		 margin-bottom:10% ;
	 }
	 /* .show{
		//  width:82%;
		//  height:50%;
		//  margin-top:25%;
		//  margin-left:10%
	  }*/
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 .full-screen{
		padding: 5%; 
	 }
	 
	 .head-title{
		 margin-top: 20%;
		 letter-spacing: 20rpx;
		 font-size: 50rpx;
		 font-weight: 500;
		 margin-bottom: 5rpx;
		 
	 }
	 
	 .sub-title{
	 	font-size: 35rpx;
	 	font-weight: 400;
		margin-left: 10%;
	 }
	 
	 .title-blue{
		 padding: 10rpx;
		 background-color: #3291f8;
		  letter-spacing: 3rpx;
		 font-size: 40rpx;
		 font-weight: 400;
		 color: #fff;
		 border-radius: 10%;
	 }
	 
	 .user-name{
		 position: relative;
	 }
	 
	 .get-inputs{
		margin-top: 40rpx; 
	 }
	 
	 .username-input{
		 border-bottom: 1rpx solid #dcdcdc ;
		 height:100rpx ;
	 }
	 
	 .end-icon{
	 		position:absolute;
	 		right:20rpx;
			top:20rpx;
			width: 40rpx;	
			height: 40rpx;
	 }
	 
	 .terms{
		 margin-top:15rpx ;
		 font-size: 25rpx;
	 }
	 
	 .radio{
		 color: #000;
		 
		 transform:scale(0.7)
	 }
	 
	 .radio-icon{
		 color: #000;
		 
		 transform:scale(0.6)
	 }
	 
	 .blue-terms{
		 color: #76b5fa;
	 }
	 
	 .login-btn{
		 background-color: #1684fc;
		 color:#fff;
		 font-size: 30rpx;
		 font-weight: 600;
		 border-radius:15rpx;
	 }
</style>
