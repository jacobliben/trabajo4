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
									<view><text class="cuIcon-right lg text-gray"></text></view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar" @click="goChangePassword">
						     <view class="name">修改密码</view>
						     <view class="ref-name">
								<view>
									<view><text class="cuIcon-right lg text-gray"></text></view>
								</view>
							 </view>
			</view>
			
			<view class="top-line flex-bar"  @click="goChangePhone">
						     <view class="name">更换手机</view>
						     <view class="ref-name">
								<view>
									<view><text class="cuIcon-right lg text-gray"></text></view>
								</view>
							 </view>
			</view>
			<!-- <view class="top-line flex-bar" @click="goDriverIdentifying">
						     <view class="name">个体司机认证</view>
						     <view class="ref-name">
								<view>
									<text>审核通过，去完善</text>
									<text class="cuIcon-right lg text-gray"></text>
								</view>
							 </view>
			</view> -->
			
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
									<text class="cuIcon-right lg text-gray"></text>
									
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
	import  inputId from "@/components/register/input_id.vue"
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import ssSelectCity from '@/components/ss-select-city/index.vue'
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
			inputId,
			xflSelect,
			ssSelectCity
		},
		
		onLoad(options){
				
		    this.user = uni.getStorageSync("user_info")
			this.email_got = this.user.data.user.email
			if (options.email){
				this.email_got = options.email
			}
			
			
		},
		 onShow() {
			
			this.user = uni.getStorageSync("user_info")
			
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
   		 color:#000;
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
</style>
