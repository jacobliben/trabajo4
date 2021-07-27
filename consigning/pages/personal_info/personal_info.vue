<template>
	<view>
	   <view class="take-photo-id" >
		   
		   <view class="top-line flex-bar">
		   			     <view class="name">用户账号</view>
		   			     <view class="ref-name">
		   					<view>{{user.data.user.userName}}</view>
		   				 </view>
		   </view>
		   
			<view class="top-line flex-bar">
						     <view class="name">所属公司</view>
						     <view class="ref-name">
								<view>{{user.data.user.nickName}}</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">手机号 （手机号也可作为个人用户登录账号）</view>
						     <view class="ref-name">
								<view>{{user.data.user.phonenumber}}</view>
							 </view>
			</view>
			
			
			
			<view class="top-line flex-bar" >
						     <view class="name">所属角色</view>
						     <view class="ref-name">
								<view>
									<view>{{user.data.user.roles[0].roleName}}</view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar" >
						     <view class="name">创建日期</view>
						     <view class="ref-name">
								<view>
									<view>{{user.data.user.createTime}}</view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar" >
						     <view class="name">用户邮箱</view>
						     <view class="ref-name">
								<view>
									<view>{{email_got}}</view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar" @click="goProfile">
						     <view class="name">基本资料</view>
						     <view class="ref-name">
								<view>
									<view><image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image></view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar" @click="goChangePassword">
						     <view class="name">修改密码</view>
						     <view class="ref-name">
								<view>
									<view><image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image></view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar"  @click="goChangePhone">
						     <view class="name">更换手机</view>
						     <view class="ref-name">
								<view>
									<view><image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image></view>
								</view>
							 </view>
			</view>
			
			
			<view class="top-line flex-bar" @click="">
						     <view class="name">身份认证</view>
						     <view class="ref-name">
								<view>
									<text>已通过</text>
									
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar" @click="goChooseCompany" v-if = "user.data.user.deptId==130">
						     <view class="name">更换公司</view>
						     <view class="ref-name">
								<view>
									<image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image>
									
								</view>
							 </view>
			</view>
			
		</view>
		
		<view class="center">
			
			<view class="red">
				<view @click="callService">
					<image src="../../static/after-sales-service.png" class="after-sales-service" mode=""></image>
					<text>
						联系客服
					</text>
					
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	
	var _self;
	
	export default {
		data() {
			return {
				personal_account:"ZY431423456",
				disabled:true,
				active:false,
				active_two_step:false,
				active_three_step:false,
				imgAvatarUrl:"/static/camera2.png",
				
				imgTrailerDrivingCertificateUrl:"/static/camera2.png",
				imgTractorDrivingCertificateUrl:"/static/camera2.png",
				imgManCarPhotoUrl:"/static/camera2.png",
				
				tachar_avatar:false,
				tachar_trailer_driving_certificate:false,
				tachar_tractor_driving_certificate:false,
				params:{},
				user:"",
				email_got:"",
				
			};
		},
		components:{
			
		},
		
		onLoad(options){
				
		    this.user = uni.getStorageSync("user_info")
			this.email_got = this.user.data.user.email
			if (options.email){
				this.email_got = options.email
			}
			 
			 //正式库，危险！！！！
			 //this.imgAvatarUrl = "https://wl.xcmgzhilian.com/prod-api" + this.user.data.user.avatar
			 //测试库
            this.imgAvatarUrl = 'http://10.22.2.138:8080' + this.user.data.user.avatar
			//this.imgAvatarUrl = 'http://10.22.0.136:8080' + this.user.data.user.avatar
			
		},
		 onShow() {
			
			this.user = uni.getStorageSync("user_info")
			 //正式库，危险！！！！
			 // this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'https://wl.xcmgzhilian.com' + '/prod-api' + this.user.data.user.avatar
			 //测试库
			this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'http://10.22.2.138:8080' + this.user.data.user.avatar
			 // this.imgAvatarUrl = uni.getStorageSync("user_avatar")||'http://10.22.0.136:8080' + this.user.data.user.avatar
		},
		methods:{
			
			radioCarChange(e){
				
				
			},
			
			bindTextAreaBlur (e) {
			           
			},
			
			goChangePassword(){
				uni.navigateTo({
					url:"/pages/change_password/change_password"
				})
				
			},
			
			goChangePhone(){
				uni.navigateTo({
					url:"/pages/change_phone/change_phone"
				})
				
			},
			
			goProfile(){
				uni.navigateTo({
					url:"/pages/profile/profile"
				})
			},
			
			async uploadAvatar(e){
				var _self=this
				var authorization = uni.getStorageSync("token")
				/**
				 * 用户头像
				 */ 
				const resChoosePhoto= await this.$photo({
										  async success(res) {
										    const tempFilePaths = res.tempFilePaths;
											
											 //upload the img
											 _self.imgAvatarUrl = tempFilePaths[0]
											   uni.setStorageSync("user_avatar",_self.imgAvatarUrl)
											 //make the tachar img appear
											  _self.tachar_avatar=true
											  
											   //upload
											 
											   _self.params.avatarfile = _self.imgAvatarUrl
											   var form =  _self.params
											   var avatar =  _self.imgAvatarUrl
											 
											   uni.uploadFile({
												                  //正式库，危险！！！！
												                //url:"https://wl.xcmgzhilian.com/prod-api/system/user/profile/avatar",
											   					//测试库
																url:"http://10.22.2.138:8080/system/user/profile/avatar",
																//url:"http://10.22.0.136:8080/system/user/profile/avatar",
											   					filePath: tempFilePaths[0],
											              		name: 'avatarfile',  //后台接收字段名
											   					
											   					header:{
																	Authorization:authorization,
											   						"Content-Type": "multipart/form-data",
											   						
											   					},
											   					success: (res) => {
											   					 
																uni.showToast({title:"保存成功!", });	 
											   					
											   					  setTimeout(()=>{
											   					  	uni.reLaunch({
											   					  		url:`/pages/accounts/accounts?avatar=${_self.imgAvatarUrl}`
											   					  	})
											   					  },200)
											          			
											   						
											   					},
											   					
											   				})
											   
											}
				})	
			},
			
			goDriverIdentifying(){
				uni.navigateTo({
					url:"/pages/file_identifying/file_identifying"
				})
			},
			cancelAvatar(){
				this.imgAvatarUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_avatar=false
			},
			
			goChangeIdentity(){
				uni.navigateTo({
					url:"/pages/change_identity/change_identity"
				})
			},
			callService(){
				uni.makePhoneCall({
				    phoneNumber: '051687739339' 
				});
			},
			
			goFileIdentifying(){
				uni.navigateTo({
					url:"/pages/file_identifying/file_identifying"
				})
			},
			
			
			goChooseCompany(){
				uni.navigateTo({
					url:"/pages/choose_company/choose_company"
				})
			},
			
		}
		
	}
</script>

<style lang="scss" scoped>
   .current-state{
   		 margin-top:10rpx;
   		 margin-left:10rpx;
   		 margin-bottom: 25rpx;
   		 border-left:3rpx solid blue;
   		 padding-left: 30rpx;
   		 color:#000;
   		 font-size:30rpx;
   		 font-weight: 600;
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 
		 .hand-input{
		 	  color:blue;
			  font-size:20rpx;
			   font-weight: 300;
			   margin-right:10% ;
		 }
   }
   .notes{
	   width:100%;
	   padding: 5%;
	   border-bottom:1rpx solid #ddd;
	   
   }
   .top-line{
   		 border-top:1rpx solid #d5d5d8;
   }
   
   .flex-bar{
   		 display: flex;
   		 justify-content: space-between;
   		 padding-left: 5%;
   		 padding-right: 5%;;
   		 padding-top:15rpx;
   		 padding-bottom:15rpx;
   }
   
  .truck-type{
	  display: flex;
	  flex-direction: row;
  }
   
   .name{
   		 color:#333;
   }
   .ref-name{
   		 
   			 color:#999;
   }
   .text-name{
	   margin-left: 5%;
	   margin-bottom: 20rpx;
	   
   }
   .note-textarea{
	   margin-left: 5%;
	   width: 90%;
	   height:200rpx;
	   background-color: #eee;
   }
   .cell{
	   margin-right: 10rpx;
   }
   .star{
	   color:#f00;
   }
   .center{
   	   margin-top:30rpx;
   	   text-align: center;
   	   color:#999;
   	   .change-identity{
   		   color: #0081FF;
   		   font-weight: 700;
   		   .wrong-identity{
   			    color:#999;
   				 font-weight: 400;
   		   }
   	   }
   }
   .img{
	   width: 100rpx;
	   height: 50rpx;
   }
   .tachar{
   			  
   			  width:60rpx;
   			  height: 60rpx;
   					  
   			  left:10%;
   		  }
   .next-btn{
   		 margin-top:20rpx;
   		 width:30%;
   		
   }
   
   .current-btn{
   		 background-color: #0081FF;
   		 color:#fff;
   }
   
   .disabled-btn{
   		 background-color: #ddd;
   }
  
   .red{
	   color: #f00;
	   display: flex;
	   flex-direction: row;
	   justify-content: center;
	   view{
		   margin-left: 10rpx;
	   }
   }
   
   .after-sales-service{
	   width:20rpx;
	   height:20rpx ;
	   margin-right:10rpx ;
   }
   
   .sm-icon{
   		 width:40rpx;
   		 height:40rpx;
   }
</style>
