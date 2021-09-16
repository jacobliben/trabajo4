<template>
	<view class="page">       
	        <view class="top-sticky">
				
				<view class="cu-steps">
					<view class="cu-item" :class="{'text-green':active_one_step,'ordinary':!active_one_step}">
						<text :class="{'cuIcon-roundcheckfill':active_one_step,'text-green':active_one_step,
						'cuIcon-title':!active_one_step}">
						</text>
						账号信息
					</view>
					
					<view class="cu-item " :class="{'text-green':active_two_step,'ordinary':!active_two_step}">
						<text :class="{'cuIcon-roundcheckfill':active_two_step,'cuIcon-title':!active_two_step}">
						</text>
						业户信息
					</view>
					
					<view class="cu-item " :class="{'text-green':active_three_step,'ordinary':!active_three_step}">
						<text :class="{'cuIcon-roundcheckfill':active_three_step,'cuIcon-title':!active_three_step}">
						</text>
					   车辆信息
					</view>
					
					<view class="cu-item" :class="{'text-green':active_four_step,'ordinary':!active_four_step}">
						<text :class="{'cuIcon-roundcheckfill':active_four_step,'cuIcon-title':!active_four_step}">
						</text>
						 驾驶员信息
					</view>
					
					<view class="cu-item" :class="{'text-green':active_five_step,'ordinary':!active_five_step}">
						<text :class="{'cuIcon-roundcheckfill':active_five_step,'cuIcon-title':!active_five_step}">
						</text>
						银行卡信息
					</view>
				</view>
			</view>
				
				
				           <!-- 账号信息 -->
							
							<phone-verifying v-if="step===1" @register_phone_params="getRegisterPhoneParams"></phone-verifying>
							<!-- 业户信息 -->
							<company-business-info v-if="step===2" @register_business_params="getRegisterBusinessParams"></company-business-info>
							
							<!-- 车辆信息 -->
							<vehicle v-if="step===3" @register_vehicle_params="getVehicleParams"></vehicle>
							
							
							<!-- 驾驶员信息 -->
							<company-license v-if="step===4" @register_license_params="getLicenseParams" ></company-license>
							
							<!-- 银行卡信息 -->
							<bank v-if="step===5" @register_bank_params="getBankParams"></bank>
				            
				<!-- 	buttons section -->
					
					<view class="center">
						<view class="change-identity">
							<text class="wrong-identity">角色选错了？</text>
							<text @click="goChangeIdentity">变更角色</text>
						</view>
						
						<view class="red margin-top margin-bottom">
							<view @click="callService">
								<image src="/static/after-sales-service.svg" class="after-sales-service" mode=""></image>
								<text class="margin-bottom">
									联系客服
								</text>
								
							 </view>
							<!--<view>|</view>
							<view>
								<image src="../../static/question.svg" class="after-sales-service" mode=""></image>
								<text>认证遇到问题</text>
							</view> -->
							
						</view>
					</view>
										
	</view>
</template>

<script>
	import uniSegmentedControl from "uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"
	import  driverRegister from "@/components/driver_register.vue"
	import  companyLicense from "@/pages/company_license/company_license"
	import  phoneVerifying from "@/components/register/phone_verifying.vue"
	import  companyBusinessInfo from "@/pages/company_business_info/company_business_info"
	import  vehicle from "@/pages/vehicle/vehicle"
	import  bank from "@/pages/bank/bank"
	export default {
		data() {
			return {
				
				disabled:true,
				active:false,
				active_one_step:true,
				active_two_step:false,
				active_three_step:false,
				active_four_step:false,
				active_five_step:false,
				step:1,
				cellphone:"",
				verify_code:"",
				form: {  },
				
				}
		},
		
	    onLoad(options){
		
			},
		components:{
			uniSegmentedControl,
			
			companyLicense,
			phoneVerifying,
			companyBusinessInfo,
			vehicle,
			bank,
		},
		methods:{
			
                 getRegisterPhoneParams(data){
					this.step =data.the_step
					this.active_one_step=data.active_one_step
					this.active_two_step=data.active_two_step
					 
					 
				  },
				  getRegisterBusinessParams(data){
					 
					  this.step =data.the_step
					  this.active_one_step=data.active_one_step
					  this.active_two_step=data.active_two_step
					  this.active_three_step=data.active_three_step
				  },
		        
				  getRegisterInfoParams(data){
					
					this.step =data.the_step
					this.active_one_step=data.active_one_step
					this.active_two_step=data.active_two_step
					this.active_three_step=data.active_three_step
					this.active_four_step=data.active_four_step
					
					 
				  },
				  getVehicleParams(data){
				  					 this.step =data.the_step
				  					 this.active_one_step=data.active_one_step
				  					 this.active_two_step=data.active_two_step
				  					 this.active_three_step=data.active_three_step
				  					 this.active_four_step=data.active_four_step
				  					  
				  },
				  getLicenseParams(data){
					  this.step =data.the_step
					  this.active_one_step=data.active_one_step
					  this.active_two_step=data.active_two_step
					  this.active_three_step=data.active_three_step
					  this.active_four_step=data.active_four_step
					  this.active_five_step=data.active_five_step
				  },
				 
				  getBankParams(data){
					 this.step =data.the_step
					 this.active_one_step=data.active_one_step
					 this.active_two_step=data.active_two_step
					 this.active_three_step=data.active_three_step
					 this.active_four_step=data.active_four_step
					 this.active_five_step=data.active_five_step 
				  },
				 goPhoneVerifying(){
					 this.step=2
					 this.active =false
					 this.active_one_step = true
				 },
				 goChangeIdentity(){
				 	uni.reLaunch({
				 		url:"/pages/choose_identity/choose_identity"
				 	})
				 },
				 callService(){
				 	// var Intent = plus.android.importClass("android.content.Intent");
				 	//    var Uri = plus.android.importClass("android.net.Uri");  
				 	//    // 获取主Activity对象的实例  
				 	//    var main = plus.android.runtimeMainActivity();  
				 	//    // 创建Intent  
				 	//    var uri = Uri.parse("051687739339"); // 这里可修改电话号码  
				 	//    var call = new Intent("android.intent.action.CALL",uri);  
				 	//    // 调用startActivity方法拨打电话  
				 	//    main.startActivity( call );  
					
					
						uni.makePhoneCall({
						    phoneNumber: '051687739339' 
						});
						
				 },
				 
		}
	}
</script>

<style lang="scss" scoped>
	body{
		background-color: #fff;
	}
	.page{
		padding-top: 100rpx;
	}
	.top-sticky{
		top:0rpx;
		position: sticky;
		background-color: #fff;
		z-index:9;
	}
     .current-state{
		 // margin-top:10rpx;
		 margin-left:10rpx;
		 margin-bottom: 25rpx;
		 border-left:3rpx solid orange;
		 padding-left: 30rpx;
		 color:#000;
		 font-size:30rpx;
		 font-weight: 800;
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
		   margin-bottom:50rpx;
		   view{
			   margin-left: 10rpx;
		   }
	} 
	
	.after-sales-service{
		   width:20rpx;
		   height:20rpx ;
		   margin-right:10rpx ;
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
</style>
