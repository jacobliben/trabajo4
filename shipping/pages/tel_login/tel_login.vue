<template>
	<view class="full-screen ">
		<form class="screen-cover" @submit="formSubmit" @reset="formReset">
			<!-- <view class="head">
				<image src="/static/driver-version.png" mode="widthFix" class="drivers"></image>
			</view>
		    
			<view class="login-inputs radius">
				<view class="user-login">
					<text class="cuIcon-phone text-blue"></text>
					<input type="number" placeholder="请输入用户手机号" maxlength="11"  focus @input="getUserPhoneNum" class="account-input">
					
				</view>
				
				
				<view class="user-password" v-if="hidePass">
					<text class="cuIcon-lock text-style text-blue"></text>
					<input type="text" placeholder="请输入验证码"  @input="getUserVerifyCode" class="password-input">
					<button  @click="getVerifyCode" :disabled="codeDisabled" role="button"  class="cu-btn bg-gradual-green shadow text-get round"  >
						<text class="text-df">{{codeText}}</text>
					</button>
					
				</view>
				
			</view>
			
		  
				<button  form-type="submit" class="footer margin-top margin-bottom text-center self-center radius" data-class="fade" role="button" hover-class="button-hover">
					<text class="self-center">登录</text>
				</button> -->
		<view class="head-title">
		   验证码登录
		</view>	
		
		<view class="get-inputs">
			<view class="user-tel">
				<text class="user-pre">+86</text>
				<input type="number" placeholder="请输入用户手机号" maxlength="11"   @input="getUserPhoneNum" class="tel-input">
			  
			</view>
			
			<view class="user-veri">
				<view class="user-pre">
					<image src="/static/lock.svg" mode="widthFix" class="lock"></image>
				</view>
			  
			  <input type="text" placeholder="请输入验证码"  @input="getUserVerifyCode" maxlength="4" class="veri-input">
			  <button  @click="getVerifyCode" :disabled="codeDisabled"  class=" text-get "  >
			  	<text class="text-df">{{codeText}}</text>
			  </button>
			</view>
			
			
		</view>
		
		<button  form-type="submit"  class="login-btn margin-top margin-bottom text-center self-center radius" data-class="fade" role="button" :disabled="login_disable">
			<text class="self-center">立即登录</text>
		</button>
		
		
		
		<view class="more-choices margin-top">
			<view>
				<navigator url="/pages/choose_identity/choose_identity" ><text class="choices">立即注册</text></navigator>
			</view>
			<view class="change-pass">
				<navigator url="/pages/login/login"><text class="choices">密码登录</text></navigator>
			</view>
		    <view>
				<navigator url="/pages/recover_account/recover_account"><text class="choices">忘记密码？</text>
				</navigator>
			</view>	
		</view>
		</form>
	</view>
</template>

<script>
	import {  
	        mapMutations  
	    } from 'vuex';  
		
	export default {
		data() {
			return {
				codeText:"获取验证码",
				userPhoneNum:"",
				userVerifyCode:"",
				hidePass:true,
				codeDisabled:false,
				
				login_disable:true,
			}
		},
		methods: {
			getUserPhoneNum(e){
				this.userPhoneNum = e.target.value
			},
			
			getUserVerifyCode(e){
				this.userVerifyCode = e.target.value
				if (this.userVerifyCode.length ==4){
					this.login_disable = false
				}else{
					this.login_disable = true
				}
			},
			//send verifying code to your phone
			async getVerifyCode(){
				var that = this
				//verify if the phone number is 11 digits
				if (this.userPhoneNum.length ==11){
					const res = await this.$request({
						url:"/validUser",
						method: "POST",
						data:{
					         "mobile": that.userPhoneNum
					         }
						
					})
					
					//verify if the phone has been registered
					if (res.data.msg =="该手机号尚未注册"){
						uni.showToast({
							title:"该手机号尚未注册",
							icon:"none"
						})
						//if the phone has been registered, go sending the verifying code
					}else{
						const res = await this.$request({
							 url: '/getRegistCode/' + this.userPhoneNum,
						 })
						 uni.showToast({
						 	title:"验证码已发送",
						 	icon:"none"
						 })
						 
						   this.codeDisabled = true;
						    var count = 60;
						         var resend = setInterval(function () {
						           count--;
						           if (count > 0) {
						             that.codeText = count + "s";
						           } else {
						             that.codeText = "重新获取";
						             clearInterval(resend);
						             that.codeDisabled = false;
						           }
						         }, 1000);
					}
					
				}else{
					uni.showToast({
						title:"电话号码格式不正确，请输入11位电话号码",
						icon:"none"
					})
				}
				
				
			},
			
			async formSubmit(){
				
				const user_data = {
					mobile:this.userPhoneNum,
					mobileCode:this.userVerifyCode
				}
				
			   
				const res = await this.$request({
					url:"/loginMobile",
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
		 border-radius:20rpx;
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
		
		  position: relative;
	 }
	 
	.btn-verify{
		display: flex;
		margin-left:-30%;
		color:#bff4ff;
		background-color: #0949aa;
		position: absolute;
		right:55rpx;
		bottom: 5rpx;
		z-index: 7;
		justify-content: flex-end;
		height:60rpx;
		align-items: center;
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
		 width:100%;
		 margin-left:0;
		 font-weight:500;
		 font-size:30rpx;
		  .choices{
			   color:#aaa;
		  }
		
	 }
	 
	 .no-use-more{
	 			  color:#0081FF;
	 			  margin-right:10rpx;
	 }
	 
	 
	 .text-df{
		 font-size: 25rpx;
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
					 width:200rpx;
					 height:80rpx;
					 margin:30rpx 75rpx;
					 display:flex ;
					 justify-content: center;
					 align-items: center;
		}
		
		 .button-hover{
			  transform: scale(1.2);
		 }
	 
	 
	 
	 
	 .full-screen{
	 		padding: 5%; 
	 }
	 
	 .head-title{
	 		 margin-top: 20%;
	 		 letter-spacing:0rpx;
	 		 font-size: 40rpx;
	 		 font-weight: 600;
	 		 margin-bottom: 145rpx;
	 		 
	 }
	 
	 .user-tel{
		 display: flex;
		 flex-direction: row;
		  height:75rpx ;
		 border-bottom: 1rpx solid #4e98fc;
		 .tel-input{
			margin-left: 40rpx;
			margin-bottom: 5rpx; 
		 }
	 }
	 
	 .user-pre{
		 width: 15%;
	 }
	 
	 .lock{
		 margin-top: 25rpx;
		 width: 25rpx;
		 height:25rpx ;
		 margin-left: 15rpx;
	 }
	 
	 .user-veri{
		 display: flex;
		 flex-direction: row;
		  height:95rpx ;
		 border-bottom: 1rpx solid #e5e5e5;
		 .veri-input{
			       margin-top: 20rpx;
		 			margin-left: 40rpx;
		 			margin-bottom: 15rpx; 
		 }
	 }
	 
	 .text-get{
		     border-left: 8rpx solid #f1f1f1;
			 color: #978887;
			 font-size: 20rpx;
			 font-weight: 600;
			 padding-left: 40rpx;
			 margin-top: 30rpx;
	 		 width:280rpx;
	 		 height:50rpx;
			 
			 // border-left: 8rpx solid #f1f1f1;
			 // color: #978887;
			 // font-size: 40rpx;
			 // font-weight: 600;
			 // padding-left: 40rpx;
			 // margin-top: 30rpx;
			 // width:200rpx;
			 // height:50rpx;
	 }
	 
	 .login-btn{
		     margin-top: 30rpx;
	 		 background-color: #1684fc;
	 		 color:#fff;
	 		 font-size: 30rpx;
	 		 font-weight: 600;
	 		 border-radius:250rpx;
	 }
</style>