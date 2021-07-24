<template>
	<view>
		<form @submit="formSubmit" >
				<view class="cu-form-group" v-if="hidePass">
					<text class="title">旧密码<text class="red">*</text></text>
					
					<input type="text"  placeholder="请输入旧密码" maxlength="16" :value= "old_contrasena"
					 name="mobile" password   @blur="enterOldPassword">
					<image src="/static/eyes_hover.svg" mode="widthFix" class="sm-icon" @click="hidePass=!hidePass"></image>
					
				</view>
				
				<view class="cu-form-group" v-if="!hidePass">
					<text class="title">旧密码<text class="red">*</text></text>
					
					<input type="text"  placeholder="请输入旧密码" maxlength="16" :value= "old_contrasena"
					  name="mobile"    @blur="enterOldPassword">
					 <image src="/static/eyes.svg" mode="widthFix" class="sm-icon" @click="hidePass=!hidePass"></image>
					 
				</view>
				
				<view class="cu-form-group" v-if="hidePassNew">
					<text class="title">新密码<text class="red">*</text></text>
					
					<input type="text"  placeholder="请输入新密码" maxlength="16" :value= "contrasena"
					 name="mobile" password   @blur="enterNewPassword">
					 <image src="/static/eyes_hover.svg" mode="widthFix" class="sm-icon" @click="hidePassNew=!hidePassNew"></image>
					
				</view>
				
				<view class="cu-form-group" v-if="!hidePassNew">
					<text class="title">新密码<text class="red">*</text></text>
					
					<input type="text"  placeholder="请输入新密码" maxlength="16" :value= "contrasena"
					  name="mobile"    @blur="enterNewPassword">
					 <image src="/static/eyes.svg" mode="widthFix" class="sm-icon" @click="hidePassNew=!hidePassNew"></image>
					 
				</view>
				
				<view class="cu-form-group"  v-if="hidePassRepeat">
					<text class="title">重复密码<text class="red">*</text></text>
					
					<input type="text"  placeholder="请再次输入新密码" name="mobile" password maxlength="16" 
					 :value= "recontrasena" @blur="enterPasswordRepeat">
					  <image src="/static/eyes_hover.svg" mode="widthFix" class="sm-icon" @click="hidePassRepeat=!hidePassRepeat"></image>
				
				</view>
				
				<view class="cu-form-group" v-if="!hidePassRepeat">
					<text class="title">重复密码<text class="red">*</text></text>
					
					<input type="text"  placeholder="请再次输入新密码"  name="mobile" maxlength="16"  
					 :value= "recontrasena" @blur="enterPasswordRepeat">
					 <image src="/static/eyes.svg" mode="widthFix" class="sm-icon" @click="hidePassRepeat=!hidePassRepeat"></image>
	
					
				</view>
				
				<view class="btn-row">
					           
					<button class="cu-btn bg-gradual-green round bg-blue"  form-type="submit">确认提交</button> 
				</view>
		</form >
	</view>
</template>

<script>
	var  graceChecker = require("../../components/graceui-dataChecker/graceChecker.js")
	export default{
		data(){
			return{
				old_contrasena:"",
				contrasena:"",
				recontrasena:"",
				hidePass:true,
				hidePassNew:true,
				hidePassRepeat:true,
				
				codeText:"获取",
				is_correct:false,
				params:{},	
			}
		},
		
		methods:{
			enterOldPassword(e){
				this.old_contrasena = e.target.value 
				this.params.oldPassword = e.target.value
				
			},
			
			enterNewPassword(e){
				this.contrasena = e.target.value 
				this.params.newPassword = e.target.value
				
			},
			
			enterPasswordRepeat(e){
				this.recontrasena = e.target.value 
				this.params.confirmPassword = e.target.value
				
				if (this.params.newPassword !=this.params.confirmPassword){
					uni.showToast({
						title:"两次密码需一致",
						icon:"none"
					})
				 this.is_correct=false	 										
				} else{
					this.is_correct=true
				}
				
			},
			
			
			async formSubmit(e) {
										console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
						                //定义表单规则
						                var rule = [
						                                      
						                                       {
																   name:"verify_code",
						                                           rule:/^[0-9a-zA-Z]{4,10}$/,
						                                           errorMsg:"验证码格式有误"
						                                       }
						                                  
						                ];
										//进行密码长度检查
										if (this.params.newPassword.length <8||this.params.newPassword.length <8){
											uni.showToast({
												title:"密码请输入8-16位",
												icon:"none"
											})
										this.old_contrasena = ""
										this.contrasena = ""
										this.recontrasena = ""	 	
										 return	 										
										} 
										
										//进行密码一致性检查
										if (this.params.newPassword !=this.params.confirmPassword){
											uni.showToast({
												title:"两次密码需一致",
												icon:"none"
											})
										 this.contrasena = ""
										 this.recontrasena = ""	 
										 return	 										
										} 
										
										
										
						                //进行表单检查
										var authorization = uni.getStorageSync("token")
										
											console.log(this.params,'113')
											var oldPassword = this.old_contrasena
											var newPassword = this.contrasena
												
											    
												
											    const res_code = await this.$request({
											    	url:`/system/user/profile/updatePwd?oldPassword=${oldPassword}&newPassword=${newPassword}`,
											    	method: "put",
													header:{
														Authorization:authorization,
													},
											    	
											    	
											    })
												
												console.log (res_code, "1183")
												
												 if(res_code.data.code == 200){
												 	uni.showToast({
												 		title:res_code.data.msg,
												 		
												 	})
												 	setTimeout(()=>{
												 	   uni.reLaunch({
												 	   	url:"/pages/personal_info/personal_info"
												 	   })
												 	},80)
												 }else{
												 	uni.showToast({
												 		title:res_code.data.msg,
												 		icon:"none"
												 	})
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
	
	.sm-icon{
			 width:40rpx;
			 height:40rpx;
	}
</style>
