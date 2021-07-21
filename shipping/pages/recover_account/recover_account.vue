<template>
	<view>
		<form @submit="formSubmit" >
				<view class="cu-form-group" >
					<text class="title">手机号码</text>
					<input type="number" maxlength="11" name="cellphone"
					 placeholder="请输入您的电话号码" :value="tel_num"
					  focus @input="getmobile"  @blur="checkPhone">
				</view>
				<view class="cu-form-group" >
					<text class="title">验证码</text><text class="red">*</text>
					<input type="number" maxlength="4" 
					placeholder="请输入您收到的验证码"  :value="veri_code"
					 name="verify_code"  @input="getVerifyCode">
					<button class="cu-btn bg-green shadow" role="button" size="mini" 
					:disabled="codeDisabled"
					  @click="getCode">{{codeText}}</button>
				</view>
				
				<view class="cu-form-group" v-if="hidePass">
					<text class="title">输入密码</text>
					
					<input type="text"  placeholder="请输入密码" maxlength="16" :value= "contrasena"
					 name="mobile" password   @blur="enterPassword">
					 <text class="cuIcon-attentionforbid text-gray" @click="hidePass=!hidePass"></text>
					
				</view>
				
				<view class="cu-form-group" v-if="!hidePass">
					<text class="title">输入密码</text>
					
					<input type="text"  placeholder="请输入密码" maxlength="16" :value= "contrasena"
					  name="mobile"    @blur="enterPassword">
					 <text class="cuIcon-attention text-gray " @click="hidePass=!hidePass"></text>
					 
				</view>
				
				<view class="cu-form-group"  v-if="hidePassRepeat">
					<text class="title">重复密码</text>
					
					<input type="text"  placeholder="请再次输入密码" name="mobile" password maxlength="16" 
					 :value= "recontrasena" @blur="enterPasswordRepeat">
					<text class="cuIcon-attentionforbid text-gray" @click="hidePassRepeat=!hidePassRepeat"></text>
					
				</view>
				
				<view class="cu-form-group" v-if="!hidePassRepeat">
					<text class="title">重复密码</text>
					
					<input type="text"  placeholder="请再次输入密码"  name="mobile" maxlength="16"  
					 :value= "recontrasena" @blur="enterPasswordRepeat">
					<text class="cuIcon-attention text-gray" @click="hidePassRepeat=!hidePassRepeat"></text>
					
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
				tel_num:"",
				veri_code:"",
				contrasena:"",
				recontrasena:"",
				
				hidePass:true,
				hidePassRepeat:true,
				codeDisabled:true,
				codeText:"获取",
				is_correct:false,
				params:{},	
			}
		},
		
		methods:{
			getmobile(e){
				this.tel_num = e.target.value
				this.params.mobile = e.target.value
			},
			async checkPhone(){
				var that = this
				if (this.params.mobile.length ==11){
					const res = await this.$request({
						url:"/validUser",
						method: "POST",
						data:{
					         "mobile": that.params.mobile
					         }
						
					})
					
					//verify if the phone has been registered
					if (res.data.msg =="该手机号尚未注册"){
						uni.showToast({
							title:"该手机号尚未注册",
							icon:"none"
						})
						 this.tel_num = ""
						this.codeDisabled = true
						//if the phone has been registered, go sending the verifying code
					}else{
						
						 this.codeDisabled = false
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
			getVerifyCode(e){
				this.veri_code = e.target.value
				this.params.mobileCode = e.target.value
				
			},
			enterPassword(e){
				this.contrasena = e.target.value 
				this.params.password = e.target.value
				
			},
			
			enterPasswordRepeat(e){
				this.recontrasena = e.target.value 
				this.params.confirmPassword = e.target.value
				
				if (this.params.password !=this.params.confirmPassword){
					uni.showToast({
						title:"两次密码需一致",
						icon:"none"
					})
				 this.is_correct=false	 										
				} else{
					this.is_correct=true
				}
				
			},
			
			//send verifying code to your phone
			async getCode(){
				var that = this
				const res = await this.$request({
					 url: '/getRegistCode/' + this.params.mobile,
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
										console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
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
										if (this.params.mobileCode == null || this.params.mobileCode==""||this.params.mobileCode.length <4){
											uni.showToast({
												title:"验证码须4位,请输入",
												icon:"none"
											})
											this.veri_code = ""
										 return	 										
										} 
										
										//进行密码一致性检查
										if (this.params.password !=this.params.confirmPassword){
											uni.showToast({
												title:"两次密码需一致",
												icon:"none"
											})
										 this.contrasena = ""
										 this.recontrasena = ""	 
										 return	 										
										} 
										
										
										
										//进行密码复杂度检查
										var psw = this.params.password
										
										  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
										
										if(!reg.test(psw)){
															         uni.showToast({
															         	title:"密码长度8~16位,必须包含数字,字母",
																		icon:"none"
															         })
										           this.contrasena = ""
												  
													return
																	 
										       }
										
						                //进行表单检查
										
											var formData = e.detail.value;
											var data = this.params
											var checkRes = graceChecker.check(formData, rule);
											
											if(checkRes){
												
											    uni.showToast({title:"验证通过!", icon:"none"});
												
											    const res = await this.$request({
											    	url:"/forgetPwd",
											    	method: "POST",
											    	data:data
											    	
											    })
												
												 uni.reLaunch({
												 	url:"/pages/login_general/login_general"
												 })
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
