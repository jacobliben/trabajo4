<template>
	<view>
		<view class="title" v-if="carrierReviewStatus==1">请选择所属公司</view>
		<view class="title" v-if="carrierReviewStatus==2">身份审核中</view>
		<view class="" v-if="carrierReviewStatus==1">
			 <radio-group @change="radioChange">
			                <label class=" top-line flex-bar flex"  hover-class="icon-hover" v-for="(item, index) in items" :key="item.value">
			                    <view>
			                        <radio :value="item.carrierCompanyId.toString()" :checked="index === current" />
			                    </view>
			                    <view class="name">{{item.companyName}}</view>
								<!-- <view class="state">
									<view>确认状态</view>
									<view>{{item.state}}</view>
								</view> -->
								<view class="time"><view>确认时间</view> 
								               <view>
												  {{item.createTime}} 
											   </view>
								</view>
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				received_msg:"",
				current: -1,
				companyID:"",
				carrierReviewStatus:"",
				items:[],
				
			}
		},
		mounted(){
			this.getCarrierCompaniesList()
			
			
		},
		methods: {
			async getCarrierCompaniesList(){
				//get the company names list
				const token_id = uni.getStorageSync("token")
				const res = await this.$request({
					 	url:"/app/carrier/getCarrierCompany",
					 	header:{
					 		"Authorization": token_id
					 	},
					 })
					
					 this.items = res.data.data
					 
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
			
			 radioChange: function(evt) {
				
				 this.companyID= evt.detail.value
			             for (let i = 0; i < this.items.length; i++) {
			                 if (this.items[i].value === evt.target.value) {
			                     this.current = i;
			                     break;
			                 }
			             }
			         },
			async confirmCompany(){
				var that = this
				var authorization = uni.getStorageSync("token")
				const res = await this.$request({
					 	url:"/app/carrier/switchUser/"+ that.companyID,
						header:{
							Authorization:authorization,
						}
					 })
				
				uni.setStorageSync("company_id",that.companyID )
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
			 width:30%;
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
	 
</style>
