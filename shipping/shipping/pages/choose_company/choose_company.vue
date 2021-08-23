<template>
	<view class="full-screen">
		<!-- <view class="title" v-if="carrierReviewStatus==1">请选择所属公司</view>
		<view class="title" v-if="carrierReviewStatus==2">身份审核中</view>
		<view class="" v-if="carrierReviewStatus==1">
			 <radio-group @change="radioChange">
			                <label class=" top-line flex-bar flex"  hover-class="icon-hover" v-for="(item, index) in items" :key="item.value">
			                    <view>
			                        <radio :value="item.carrierCompanyId.toString()" :checked="index === current" />
			                    </view>
			                    <view class="name">{{item.companyName}}</view>
								
								
			                </label>
			 </radio-group>						
		</view  v-if="carrierReviewStatus==2">
		      <view class="main">
		        		<image src="/static/waiting_approval.png" v-if="carrierReviewStatus==2" mode="aspectFit" class="info-not-found" ></image>
		        		
		       </view>
		<view>
			
		</view>
		
		
		<view class="notes margin-top">
			<view v-if="carrierReviewStatus==1">已被平台审核通过需先确定进入的公司，如有问题请联系平台客服</view>
			<view v-if="carrierReviewStatus==2">账号信息正在审核中，可点击 ‘退出’ 按钮，退出登录。如有问题请联系平台客服</view>
		</view>
		
		<view class="btns margin-top">
			<button  v-if="carrierReviewStatus==1" type="primary" size="mini" @click="confirmCompany">确认</button>
			<button v-if="carrierReviewStatus==2" type="warn" size="mini" @click="backoff">退出</button>
		</view>
		
		<view class="notes">
			<view>{{received_msg}}</view>
		</view> -->
		
		<view class="head-sec">
			<view class="head-title">
			   欢迎登录徐工智联
			</view>
			<view class="head-title">
			   <text class="sub-title">智联你我   不付所托</text>
			</view>
		</view>
		
		
		<view class="choices" v-if="carrierReviewStatus==1">
			<!-- <button class="pizhou-lilian" :class="{'xz-lilian':selected_xuzhou}" @click="pickXuzhou">徐州徐工智联物流服务有限公司</button>
			
			<button class="pizhou-lilian" :class="{'xz-lilian':selected_pizhou}" @click="pickPizhou">
				徐州徐工智联物流邳州分公司
			</button> -->
				<button v-for = "(item,index) in company_names" class="a-btn" :class="{'xz-lilian':tabCurrentIndex === item.carrierCompanyId}" @click="pick(item)">
					{{item.companyName}}
				</button>
		</view>
		
		
		
		<view class="notices margin-top">
			<view v-if="carrierReviewStatus==1">已被平台审核通过需先确定进入的公司，如有问题请联系平台客服</view>
			<view v-if="carrierReviewStatus==2">账号信息正在审核中，可点击 ‘退出’ 按钮，退出登录。如有问题请联系平台客服</view>
		</view>
		
		<view class="btns margin-top">
			<button  v-if="carrierReviewStatus==1" type="primary" class="final-btn" @click="confirmCompany" :disabled="confirm_disabled">确认</button>
			<button v-if="carrierReviewStatus==2" type="warn" class="back-btn" @click="backoff">退出</button>
		</view>
		
		<view class="explain">
			<view>1.登录后如需切换公司可到 <text class="foco">我的-->切换公司</text>进行切换</view>
			<view>2.如果当前写明没有任何公司可选,请退出等待审核。加急审核联系电话:<text class="tel" @click="phoneCall">0516-87739070</text></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				received_msg:"",
				current: -1,
				carrierCompanyId:null,
				carrierReviewStatus:"",
				company_names:[],
				items:[],
				tabCurrentIndex:0,
				selected_xuzhou:false,
				selected_pizhou:false,
				confirm_disabled:true,
			}
		},
		mounted(){
			this.getCarrierCompaniesList()
			
			
		},
		methods: {
			phoneCall(){
				uni.makePhoneCall({
				    phoneNumber: '051687739070' ,
					
				});
			},	
			async getCarrierCompaniesList(){
				//get the company names list
				const token_id = uni.getStorageSync("token")
				const res = await this.$request({
					 	url:"/app/carrier/getCarrierCompany",
					 	header:{
					 		"Authorization": token_id
					 	},
					 })
					console.log( res,' res');
					 this.items = res.data.data
					 this.company_names = res.data.data
					 //如果res.data.data 为空数组，证明正在审核中，返回审核中的页面
					 if (res.data.data.length <1){
						 this.carrierReviewStatus=2
						 return
					 }
					
					//get the carrier review status to decide show the contents
					const carrierId = res.data.data[0].carrierId 
					
				const res_carrier_review_status = await this.$request({
					 	url:"/iscm/carrier/" + carrierId,
					 	header:{
					 		"Authorization": token_id
					 	},
					 })
					
					 if (res_carrier_review_status.data.data){
						
						 this.carrierReviewStatus = res_carrier_review_status.data.data.carrierStatus
						 //set the navigation bar according to the carrierReviewStatus
						 if (this.carrierReviewStatus==1){
						 	uni.setNavigationBarTitle({
						 		title:`选择公司`
						 	})
						 } else if (this.carrierReviewStatus==2){
						 	uni.setNavigationBarTitle({
						 		title:`审核中`
						 	})
						 } 
					 }else{
						 this.carrierReviewStatus=1
						 uni.setNavigationBarTitle({
						 	title:`选择公司`
						 })
					 }
					
					
			},
			
			 
			
			pick(item){
				console.log(item,'item')
				this.tabCurrentIndex = item.carrierCompanyId
				this.selected_xuzhou = true
				this.carrierCompanyId = item.carrierCompanyId
				this.confirm_disabled = false
			},
			async confirmCompany(){
				
				
				var that = this
				if(that.confirm_disabled){
					uni.showToast({
						title:"请先选择所属公司",
						icon:"none"
					})
					return
				}
				var authorization = uni.getStorageSync("token")
				const res = await this.$request({
					 	url:"/app/carrier/switchUser/"+ that.carrierCompanyId,
						header:{
							Authorization:authorization,
						}
					 })
					 console.log(res,"code");
				if (res.data.code !=200){
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
					return
				}
				uni.setStorageSync("company_id",that.carrierCompanyId )
				uni.switchTab({
				url:"/pages/index/index"
				})
			},
			backoff(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},		 
		}
	}
</script>

<style lang="scss" scoped>
    .title{
		width: 100%;
		height:150rpx;
		line-height::150rpx ;
		font-size: 40rpx;
		background-color:#deeaf4 ;
		color:#138be7;
		margin:20rpx;
		font-weight:600;
		text-align: center;
	}
	
	.icon-hover{
		color: #0081FF;
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
			 font-size:20rpx;
			 .name{
				 border-left:3rpx solid #0081FF;
				 padding-left: 10rpx;
			 }
	 }
	 
	 
	 .name{
	 		 color:#000;
			 width:90%;
			 font-size: 35rpx;
			 justify-content: center;
	 }
	 .state{
		 width:30%;
		 
		  
	 }
	 .time{
		width:30%; 
		 justify-content: center;
	 }
	 .ref-name{
	 		 font-size:18rpx;
	 			 color:#999;
	 }
	 
	 .btns{
		 width:90%;
		 margin-left:5%;
		 display: flex;
		 flex-direction: row;
	 }
	 
	 .notes{
		 width:80%;
		 margin-left:10%;
		 font-size: 20rpx;
		 color:#999;
		 text-align: center;
		 margin-top:10rpx;
	 }
	 
	
	 
	 .main{
	 	   display: flex;
	 	   justify-content: center;
	 }
	 
	 
	 
	 
	 
	 
	 
	 .full-screen{
	 		padding: 5%; 
	 }
	 
	 .head-title{
	 		 margin-top: 5%;
	 		 letter-spacing: 20rpx;
	 		 font-size: 50rpx;
	 		 font-weight: 500;
	 		 margin-bottom: 5rpx;
	 		 
	 }
	 
	 .sub-title{
	 	font-size: 35rpx;
	 	font-weight: 400;
	 	margin-left: 10%;
		
		
	 }
	 
	 .head-sec{
		 padding-bottom: 40rpx;
		 border-bottom: 3rpx solid #e8e8e8;
	 }
	 
	 .choices{
		 display: flex;
		 flex-direction: row;
		 margin-top: 10%;
		 font-size: 35rpx;
		 background-color: #fff;
		 color: #976666;
	 }
	 
	 
	 .xz-lilian{
		 
		 background-color: #3894ff;
		 color: #fff;
		 
	 }
	 
	 .a-btn{
		width: 48%;
		font-size: 35rpx; 
		margin-right:20rpx;
		border-radius: 40rpx;
	 }
	
	 
	 .notices{
		 padding-top: 5%;
		 color: #27394e;
		 padding-bottom:5% ;
		 border-bottom: 3rpx solid #e8e8e8;
	 }
	 
	 .final-btn{
		 color: #fff;
		 background-color: #3894ff;
		 width: 55%;
		 box-shadow: -5px 5px 5px #ddd;
	 }
	 
	 .back-btn{
		 color: #fff;
		 background-color: #f00;
		 width: 55%;
		 box-shadow: -5px 5px 5px #ddd;
	 }
	 
	 .explain{
		 margin-top: 35rpx;
		 line-height: 45rpx;
		 height: 45rpx ;
		 .foco{
			 font-weight: 600;
		 }
		 .tel{
			 color: #3894ff;
		 }
	 }
</style>
