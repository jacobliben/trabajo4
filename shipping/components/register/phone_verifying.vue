<template>
	<view>
	  <form @submit="formSubmit" >
		  
		<view class="cu-form-group margin-top" >
			<view class="name">手机号<text class="red">*</text></view>
			
			  <input type="number" maxlength="11" placeholder="请输入11位手机号码" :value="tel_num"
			    name="cellphone"  focus 
				 @input="getCellphone" @blur="checkPhone">
				
		</view> 
		
		<view class="cu-form-group" >
			<text class="name">验证码 <text class="red">*</text></text>
			
			   <input type="number" maxlength="4"  placeholder="请输入4位验证码" 
			   name="verify_code"  @input="getVerifyCode" :value="veri_code">
			
			   <button  class="cu-btn bg-green shadow" role="button" 
			   :disabled="codeDisabled" @click="getCode">{{codeText}}</button>
			
		</view>
		
		<view class="cu-form-group" v-if="!isPerson" >
			<view class="name">登录号 <text class="red">*</text></view>
			
			   <input type="text" maxlength="11" placeholder="登录账号以字母开头，支持字母、数字、“_”的组合，4-16个字符" :value="apodo"
			  
			    name="nickname"  @input="getName" @blur="checkName">
			
		</view>
		
		<view class="cu-form-group"  v-if="hidePass">
			<text class="name">密码 <text class="red">*</text></text>
			
					<input type="text" maxlength="16" password name="password" placeholder="密码为8-16个字符" :value= "contrasena"
					  selection-start="-1" selection-end="-1" cursor="-1" 
						   @input="getPassword" @blur="checkPassword">
					<text class="cuIcon-attentionforbid text-gray" @click="hidePass=!hidePass" ></text>
				
		</view>
		
		<view class="cu-form-group"  v-if="!hidePass" >
			<text class="name">密码 <text class="red">*</text></text>
			 <input type="text" maxlength="16"  name="password" placeholder="密码为8-16个字符" :value= "contrasena"
			 selection-start="-1" selection-end="-1" cursor="-1"
			  @input="getPassword" @blur="checkPassword">
			 <text class="cuIcon-attention text-gray " @click="hidePass=!hidePass" ></text>
			
		</view>
		
		
		
		<view class="cu-form-group" v-if="hidePassRepeat" >
			<text class="name">确认密码 <text class="red">*</text></text>
			<input type="text" maxlength="16" password name="password"
			 placeholder="请重复输入登录密码" :value= "recontrasena"   
			selection-start="-1" selection-end="-1" cursor="-1"     @blur="getVerifyPassword">
			<text class="cuIcon-attentionforbid text-gray" @click="hidePassRepeat=!hidePassRepeat"></text>
		</view>
		<view class="cu-form-group" v-if="!hidePassRepeat">
			<text class="name">确认密码<text class="red">*</text></text>
			<input type="text" maxlength="16" name="password"  
			placeholder="请重复输入登录密码" :value= "recontrasena"
			 selection-start="-1" selection-end="-1" cursor="-1"     @blur="getVerifyPassword">
			<text class="cuIcon-attention text-gray" @click="hidePassRepeat=!hidePassRepeat"></text>
		</view>
		
		
		<view class="cu-form-group">
		<checkbox-group @change.prevent="checkboxChange" >
		  <label class="acuerdo">
			<checkbox :checked="checked"/>
				<view >
					我已同意 <text class="terms" @click.prevent="goTerms">徐工智联服务协议</text>
				</view>
			</label>  
		</checkbox-group>
		</view>
		<view class="btn-row">
			             <button class="next-btn bg-gradual-green round" 
			                @click="backIdentityChoosing">上一步</button> 
							 <button class="next-btn round" :class="{'bg-gradual-green':active}"
							  :disabled="disabled" form-type="submit">下一步</button> 
		</view>
       </form>
	</view>	
</template>

<script>
	//var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	export default{
		data(){
			return{
				//是否个人
				isPerson: false,
				//显示电话号码等
				tel_num:"",
				veri_code:"",
				apodo:"",
				contrasena:"",
				recontrasena:"",
				 //input提示
				
				show_id_hint: false,
				show_legal_id_hint: false,
					  
					  
					  
				disabled:true,
				active:false,
				checked:false,
				disabled:true,
				codeDisabled:true,
				codeText:"获取",
				hidePass:true,
				hidePassRepeat:true,
				is_correct:false,
				in_company_registering:true,
				params:{
					active_one_step:true,
					active_two_step:false,
					the_step:2,
				},		
				
			}
		},
		created(){
			this.isPerson = uni.getStorageSync("in_personal_registering")
			
			
			
			this.params_phone = uni.getStorageSync("params_phone")
			 console.log(this.params_business,"222")
			
			
		},
		mounted(){
			this.tel_num = this.params_phone.phonenumber ||""
			this.veri_code = this.params_phone.code ||""
			this.apodo = this.params_phone.userName ||""
			this.contrasena = this.params_phone.password ||""
			this.recontrasena = this.params_phone.rePass ||""
			  this.checked =  this.params_phone.prot
			  //如果之前已经有params输入，就直接用storage里的params,否则this.params 为{}
			 this.params = this.params_phone||{}
			if (this.params_phone.prot){
				this.disabled = false
				this.active = true
			}
			
		},
		methods:{
			getCellphone(e){
				
				this.tel_num = e.target.value
				this.params.phonenumber = e.target.value
				//console.log(this.params,'988')
				if (this.isPerson){
					uni.setStorageSync("phone_verifying_cellphone",this.params.phonenumber)
					uni.setStorageSync("contact_phone",this.params.phonenumber)
					uni.setStorageSync("holder_phone",this.params.phonenumber)
				}else if (!this.isPerson){
					
					uni.setStorageSync("contact_phone",this.params.phonenumber)
					
				}
				
			},
			
			async checkPhone(){
				var that = this
			
				
				if (this.params.phonenumber.length ==11){
					const res = await this.$request({
						url:"/validUser",
						method: "POST",
						data:{
					         "mobile": that.params.phonenumber
					         }
						
					})
					
					//verify if the phone has been registered
					if (res.data.msg =="该手机号尚未注册"){
						// uni.showToast({
						// 	title:"该手机号之前未被注册,可以进行注册",
						// 	icon:"none"
						// })
						this.codeDisabled = false
						//if the phone has been registered, go sending the verifying code
					}else{
						
						 uni.showToast({
						 	title:"该手机已被注册过",
						 	icon:"none"
						 })
						
						 this.codeDisabled = true
						  this.tel_num = ""
						}   
					
				}else{
					uni.showToast({
						title:"手机号格式不正确",
						icon:"none"
					})
					
					 this.codeDisabled = true
					 this.tel_num = ""
				}
			},
			getVerifyCode(e){
				this.veri_code = e.target.value
				this.params.code = e.target.value
				
			},
			getName(e){
				this.apodo = e.target.value
				this.params.userName = e.target.value
			},
			//用户名查重
			async checkName(){
				
				const res = await this.$request({
					url:"/checkUserName/" + this.params.userName ,
					method: "GET",
					
				})
				console.log(res,0)
				if(res.data.code!=200){
					uni.showToast({
						title:"该登录号已存在,请10s后重选",
						icon:"none"
					})
					this.apodo = ""
				}else{
					uni.showToast({
						title: "此登录号可以创建",
						icon:"none"
					})
				}
				
			},
			getPassword(e){
				this.contrasena = e.target.value 
				this.params.password = e.target.value
				
			},
			getVerifyPassword(e){
				
				
				if (this.params.password != e.target.value){
					uni.showToast({
						title:"两次密码需一致",
						icon:"none"
					})
					this.contrasena = ""
					this.recontrasena = ""	 
				 this.is_correct=false	 										
				} else{
					this.recontrasena = e.target.value
					this.params.rePass = e.target.value
					this.is_correct=true
				}
				
				},
				
			checkboxChange(e) {
			                
			                   this.checked = !this.checked;
							   this.disabled=!this.disabled
							   this.active=!this.active
							   console.log(this.checked,"111")
							   if(this.checked===true){
								   this.params.prot = true
							   }else{
								   this.params.prot = false
							   }
			                
			            },
			goTerms(){
				uni.navigateTo({
					url:"/pages/terms/terms"
				})
			},
			checkPassword(){
				var psw = this.params.password
				console.log (psw,'1122')
				  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
				
				if(!reg.test(psw)){
									         uni.showToast({
									         	title:"密码长度8~16位,必须包含数字,字母",
												icon:"none"
									         })
				           this.contrasena = ""
						  
											return
											 
				       }
			},
			backIdentityChoosing(){
				uni.navigateTo({
					url:"/pages/choose_identity/choose_identity"
				})
			},
			//send verifying code to your phone
			async getCode(){
				var that = this 
				if (this.params.phonenumber.length ==11){
					const res = await this.$request({
						 url: '/getRegistCode/' + this.params.phonenumber,
					 })
					 uni.showToast({
					 	title:res.data.msg,
					 	icon:"none"
					 })
					 console.log(this.params.phonenumber,"11231")
					 console.log(res,"1231")
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
					   
				}else{
					uni.showToast({
						title:"手机号格式不正确",
						icon:"none"
					})
				}
				
			 },
			formSubmit: function(e) {
										console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
						                //定义表单规则
						          //       var rule = [
						          //                              {name:"cellphone",
																// checkType : "phoneno",
						                                        
						          //                                 errorMsg:"手机号格式不正确"
						          //                              },
						          //                              {
																//    name:"verify_code",
						          //                                  rule:/^[0-9a-zA-Z]{4,10}$/,
						          //                                  errorMsg:"验证码格式不正确"
						          //                              },
															 //   {
															 //   		name:"nickname",
																// 	checkRule:"2,15",														   name:"verify_code",
															 //       rule:/^[0-9a-zA-Z]{2,16}$/,
															 //       errorMsg:"登录号应至少为2个字符"
															 //   },
															 //   {
															 //   		name:"password",														   name:"verify_code",
															 //       rule:/^[0-9a-zA-Z]{8,16}$/,
															 //       errorMsg:"密码长度8-16个字符"
															 //   },
						                                  
						          //       ];
										
										//进行验证码长度检查
										if (this.params.code == null || this.params.code==""||this.params.code.length !=4){
											uni.showToast({
												title:"验证码必须4位,请输入",
												icon:"none"
											})
											this.veri_code = ""
										 return	 										
										} 
										
										//进行密码长度检查
										if (this.params.password.length <8){
											uni.showToast({
												title:"密码请输入8-16位",
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
										
										
										//进行密码一致性检查
										if (this.params.password !=this.params.rePass){
											uni.showToast({
												title:"两次密码需一致",
												icon:"none"
											})
										 this.contrasena = ""
										 this.recontrasena = ""	 
										 return	 										
										} 
										
										
										
										
										
						                //进行表单检查
										this.params.the_step =2
										this.params.active_one_step= true
										this.params.active_two_step= true
										this.params.active_three_step= false
										this.params.active_four_step= false
										this.params.active_five_step= false
										uni.setStorageSync("params_phone",this.params)
										this.$emit('register_phone_params',this.params)
										
											// var formData = e.detail.value;
											// //var checkRes = graceChecker.check(formData, rule);
											// if(checkRes&&this.is_correct){
												
											//   //  uni.showToast({title:"验证通过!", icon:"none"});
												
											// 	this.params.the_step =2
												
											// 	this.params.active_two_step= true
											// 	uni.setStorageSync("params_phone",this.params)
											// 	this.$emit('register_phone_params',this.params)
												
											// }else{
											// 	console.log(graceChecker,1543)
											// 	if(graceChecker.error!=""||graceChecker.error!=null){
											// 		//uni.showToast({ title: graceChecker.error, icon: "none" });
											// 	}else{
											// 		uni.showToast({ title: "填写有误,请修改", icon: "none" });
											// 	}
											    
											// }
										
						                
										
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
	
	.btn-row{
		width: 100%;
		margin-top:200rpx;
		display: flex;
		justify-content: center;
	}
	
	.next-btn{
		
			 width:30%;
			
	}
	
	.current-btn{
			 background-color: #0081FF;
			 color:#fff;
	}
	
	
	
	.name{
			 color:#000;
			 width:20%;
	}
	
	.text-blue1{
		color:#429bff;
	}
</style>
