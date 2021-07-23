<template>
	<view>
		<form @submit="formSubmit" >
				<view class="cu-form-group" >
					<text class="title">用户名称</text><text class="red">*</text>
					<input type="text"  @input="getNickname" disabled
					placeholder="请输入用户名称"  :value= "old_nickname"  >
					   
				</view>
				
				<view class="cu-form-group" >
					<text class="title">邮箱</text>
					
					<input type="text"  placeholder="请输入邮箱"  @input="getEmail" :value= "email">
				</view>
				
				
				<view class="btn-row">
					           
					<button class="cu-btn bg-gradual-green round bg-blue"  form-type="submit">保存</button> 
				</view>
		</form >
	</view>
</template>

<script>
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	export default{
		data(){
			return{
				old_nickname:"",
				email:"",
				params:{},	
			}
		},
		onLoad(options){
		    this.user = uni.getStorageSync("user_info")
			
		    this.old_nickname = this.user.data.user.nickName
			this.email = this.user.data.user.email
		},
		onShow() {
			
			this.email = uni.getStorageSync("user_email")||this.user.data.user.email
		},
		methods:{
			getNickname(e){
				this.old_nickname = e.target.value 
				this.params.nickName = e.target.value
				
			},
			
			getEmail(e){
				this.email = e.target.value 
				this.params.email = e.target.value
				
			},
			
			async formSubmit(e) {
				var that = this
									
						                
						                
						                //进行表单检查
										var authorization = uni.getStorageSync("token")
										
											var data = this.params
											
												
											    const res = await this.$request({
											    	url:"/system/user/profile",
											    	method: "put",
													header:{
														Authorization:authorization,
													},
											    	data:data
											    	
											    })
												
												
												if (res.data.code ==200){
													uni.showToast({title:"保存成功!", });
													uni.setStorageSync("user_email",that.email)
													setTimeout(()=>{
														uni.reLaunch({
															url:`/pages/personal_info/personal_info?email=${that.email}`
														})
													},200)
													
													
													
												}else{
													uni.showToast({title:res.data.msg, icon:"none"});
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
