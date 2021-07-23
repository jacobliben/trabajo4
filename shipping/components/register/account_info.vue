<template>
	<view>
		
	  <form @submit="formSubmit" >
		<view class="one-line" >
			<text>输入用户名</text>
			<input type="text" maxlength="20" name="name"  focus @input="getName">
		</view>
		<view class="one-line" >
			<text>输入密码</text>
			<input type="text" password maxlength="11"  name="password"  @input="getPassword">
			
		</view>
		<view class="one-line" >
			<text>再输入一次密码</text>
			<input type="text" password maxlength="11"  name="verify_password"  @input="getVerifyPassword">
			
		</view>
		
		<view class="btn-row">
								<button class="next-btn" type="primary"
								   @click="backPhoneVerifying">上一步</button> 
							 <button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
							  :disabled="disabled" form-type="submit">下一步</button> 
		</view>
	   </form>
	</view>	
</template>

<script>
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	export default{
		data(){
			return{
				disabled:true,
				active:false,
				checked:false,
				params:{
					active_one_step:true,
					active_two_step:false,
					active_three_step:false,
					active_four_step:false,
					the_step:3,
					name:"",
					password:"",
					verify_password:"",
					
				},		
			}
		},
		methods:{
			backPhoneVerifying(){
				this.params.the_step =2
				this.params.active_one_step =true
				this.params.active_two_step =false
				this.$emit('register_info_params',this.params)				 
			},
			getName(e){
				this.params.name = e.target.value
			},
			getPassword(e){
				this.params.password = e.target.value
				
			},
			
		    getVerifyPassword(e){
		    	this.params.verify_password = e.target.value
				
				if (this.params.password ===this.params.verify_password){
					this.disabled=false
					this.active=true
					this.params.active_one_step=true
					this.params.active_two_step=true
					 this.params.active_three_step=true
					 this.$emit('register_info_params',this.params)
					 										
				}
				
		    	
		    },
			formSubmit: function(e) {
									
						                //定义表单规则
						                var rule = [
						                                       {name:"name",
																checkType : "string",
						                                        
						                                          errorMsg:"请填入姓名"
						                                       },
															   {
															   	   name:"password",													   name:"verify_password",
															       checkRule: "6,40",
															       errorMsg:"请填入密码"
															   },
						                                       {
																   name:"verify_password",
						                                           checkRule: "6,40",
						                                           errorMsg:"请重复填入密码"
						                                       }
						                                  
						                ];
						                //进行表单检查
										
											var formData = e.detail.value;
											var checkRes = graceChecker.check(formData, rule);
											if(checkRes){
												
											    uni.showToast({title:"验证通过!", icon:"none"});
												
											
												
												 
											}else{
											    uni.showToast({ title: graceChecker.error, icon: "none" });
											}
										
											
											this.params.active_one_step =true
											this.params.active_two_step =true
											this.params.active_three_step =true
											this.params.active_four_step =true
											
											this.params.the_step =4
											this.$emit('register_info_params',this.params)
										
						                
									},
		},
		
	}
</script>

<style lang="scss" scoped>
	form{
		margin-top:30rpx;
	}
	.one-line{
		margin-top:20rpx;
		display: flex;
		flex-direction: row;
		margin-left:10%;
		text{
			margin-right:1vw;
			font-size:20rpx;
			width:25%;
		}
		input{
			border:1rpx solid #ddd
		}
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
</style>
