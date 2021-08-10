<template>
	<view>
		<form @submit="formSubmit" >
				<view class="cu-form-group" >
					<text class="title">原手机号码</text>
					<input type="number" maxlength="11" name="cellphone"
					 placeholder="请输入原手机" :value="old_phone" disabled
					  focus @input="getmobile"  >
				</view>
				
				
				<view class="cu-form-group" >
					<text class="title">更换手机号码</text><text class="red">*</text>
					<input type="text"  placeholder="请输入新手机号" maxlength="11" 
					:value="tel_num2"
					 name="mobile"  @input="getNewMobile"  @blur="checkPhone">
				</view>
				
				
				<view class="cu-form-group" >
					<text class="title">验证码</text><text class="red">*</text>
					<input type="number" maxlength="11" 
					placeholder="请输入您收到的验证码"  :value="veri_code"
					 name="verify_code"  @input="getVerifyCode">
					<button class="cu-btn bg-green shadow" role="button" size="mini" 
					:disabled="codeDisabled"
					  @click="getCode">{{codeText}}</button>
				</view>
				
				
				<view class="btn-row">
					           
					<button class="cu-btn bg-gradual-green round bg-blue"  form-type="submit">确认提交</button> 
				</view>
		</form >
	</view>
</template>

<script>
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	export default{
		data(){
			return{
				//显示电话号码等
				old_phone:"",
				user:"",
				tel_num2:"",
				veri_code:"",
				phone:"",
				code:"",
				codeDisabled:true,
				codeText:"获取",
				is_correct:false,
					
			}
		},
		onLoad() {
			this.user = uni.getStorageSync("user_info")
			this.old_phone = this.user.data.user.phonenumber
		},
		methods:{
			
			getNewMobile(e){
				this.tel_num2 = e.target.value
				this.phone = e.target.value
			},
			async checkPhone(){
				var phone = this.phone
				if (this.phone.length ==11){
					const res = await this.$request({
						url:"/validUser",
						method: "POST",
						data:{
					         "mobile": phone
					         }
						
					})
					
					//verify if the phone has been registered
					if (res.data.msg =="该手机号尚未注册"){
						uni.showToast({
							title:"该手机号可以被注册",
							icon:"none"
						})
						
						this.codeDisabled = false
						//if the phone has been registered, go sending the verifying code
					}else{
						uni.showToast({
							title:"该手机号已被注册过了！",
							icon:"none"
						})
						 this.tel_num2 = ""
						 this.codeDisabled = true
						}   
					
				}else{
					uni.showToast({
						title:"手机号格式不正确,请重输",
						icon:"none"
					})
					 this.tel_num = ""
					this.codeDisabled = true
				}
			},
			
			
			//input verification code
			getVerifyCode(e){
				this.veri_code = e.target.value
				this.code = e.target.value
				
			},
			
			
			//send verifying code to your phone
			async getCode(){
				var that = this
				const res = await this.$request({
					 url: '/getRegistCode/' + this.phone,
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
			
			},
			
			async formSubmit(e) {
										
						                //定义表单规则
						                var rule = [
						                                       {name:"cellphone",
																checkType : "phoneno",
						                                        
						                                          errorMsg:"手机号格式有误"
						                                       },
						                                       {
																   name:"verify_code",
						                                           rule:/^[0-9a-zA-Z]{4,10}$/,
						                                           errorMsg:"验证码格式有误"
						                                       }
						                                  
						                ];
										
										//进行验证码长度检查
										if (this.code == null || this.code==""||this.code.length <4){
											uni.showToast({
												title:"验证码至少4位,请输入",
												icon:"none"
											})
											this.veri_code = ""
										 return	 										
										} 
										
										
										
						                //进行表单检查
										    var formData = e.detail.value;
											var phone = this.phone
											var code = this.code
											var checkRes = graceChecker.check(formData, rule);
											
											
											var authorization = uni.getStorageSync("token")
											
											if(checkRes){
												
											    const res = await this.$request({
											    	url:`/system/user/profile/updateUserPhone?phone=${phone}&code=${code}`,
											    	method: "PUT",
											    	header:{
											    		Authorization:authorization,
											    		
											    	},
											    	
											    })
												
												
												if (res.data.code == 200){
													uni.reLaunch({
														url:"/pages/login_general/login_general"
													})
												}else{
													uni.showToast({title:res.data.msg, icon:"none"});
												}
												 
											}else{
												if(graceChecker.error!= ""){
													 uni.showToast({ title: graceChecker.error, icon: "none" });
												}else{
													uni.showToast({title:"格式有误!", icon:"none"});
												}
											   
											}
										
									},
		}
	}
</script>

<style lang="scss" scoped>
	
	.red{
		color: #f00;
	}
	
	
	.acuerdo{
		display: flex;
		flex-direction: row;
		text-decoration: none;
		width: 100%;
	}
	
	.terms{
		color:#429bff;
		margin-left:10rpx;
		
		
	}
	
	.user-password{
		position: relative;
		
	}
	
	.end-icon{
			position:absolute;
			
			top:5rpx;
			right:0rpx;
	}
	
	.btn-row{
		width: 100%;
		margin-top:200rpx;
		display: flex;
		justify-content: center;
	}
	
	.current-btn{
			 background-color: #0081FF;
			 color:#fff;
	}
	
	.disabled-btn{
			 background-color: #ddd;
	}
</style>
