<template>
	<view class="vehicle-has-approved-body">
	  <view class="cu-bar bg-white search fixed" style="top:60px;" >
	  		  <view class="sm-search">
	  			   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
				   <text>托运人会员名称</text>
	  		  </view>
	  		 
	  		  <view class="search-form round">
	  		  	<input placeholder="通过托运人会员名称搜索" type="text" selection-start="-1"
	  		  	selection-end="-1" cursor="-1" @input="searchConsignorName"
	  		  	></input>
	  		  </view>
	  </view>
		  
		<view class="cu-bar bg-white search fixed" style="top:60px;" v-if="isConsignor">
				  <view class="sm-search">
					   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
					   <text>发货人证件号</text>
				  </view>
				 
				  <view class="search-form round">
				  	<input placeholder="通过发货人证件号搜索" type="text" selection-start="-1"
				  	selection-end="-1" cursor="-1" @input="searchShipperPertNumber"
				  	></input>
				  </view>
		</view> 
		 
		 <view class="cu-bar bg-white search fixed" style="top:60px;" v-if="!isConsignor">
		 		  <view class="sm-search">
		 			   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
		 			   <text>收货人证件号</text>
		 		  </view>
		 		 
		 		  <view class="search-form round">
		 		  	<input placeholder="通过收货人证件号搜索" type="text" selection-start="-1"
		 		  	selection-end="-1" cursor="-1" @input="searchConsigneePertNumber"
		 		  	></input>
		 		  </view>
		 </view>  
		
		<view class="cu-bar bg-white search fixed" style="top:60px;" v-if="isConsignor">
				  <view class="sm-search">
					   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
					   <text>发货联系人</text>
				  </view>
				 
				  <view class="search-form round">
				  	<input placeholder="通过发货联系人搜索" type="text" selection-start="-1"
				  	selection-end="-1" cursor="-1"  @input="searchShipperName"
				  	></input>
				  </view>
		</view> 
		
		<view class="cu-bar bg-white search fixed" style="top:60px;" v-if="!isConsignor">
				  <view class="sm-search">
					   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
					   <text>收货联系人</text>
				  </view>
				 
				  <view class="search-form round">
				  	<input placeholder="通过收货联系人搜索" type="text" selection-start="-1"
				  	selection-end="-1" cursor="-1"  @input="searchConsigneeName"
				  	></input>
				  </view>
		</view>
		
		<view class="cu-bar bg-white search fixed" style="top:60px;"  v-if="isConsignor">
				  <view class="sm-search">
					   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
					   <text>发货联系方式</text>
				  </view>
				 
				  <view class="search-form round">
				  	<input placeholder="通过发货联系方式搜索" type="text" selection-start="-1"
				  	selection-end="-1" cursor="-1"   @input="searchShipperPhone"
				  	></input>
				  </view>
				  
				  <view class="action">
				  	
				  	<button class="cu-btn bg-gradual-green shadow-blur round"  
				  			role="button" aria-disabled="false" @click="searchShipper">
				  				搜索
				  			</button>
				  </view>
		</view> 
		
		<view class="cu-bar bg-white search fixed" style="top:60px;"  v-if="!isConsignor">
				  <view class="sm-search">
					   <image src="/static/search.png" mode="widthFix" class="sm-icon" ></image>
					   <text>收货联系方式</text>
				  </view>
				 
				  <view class="search-form round">
				  	<input placeholder="通过收货联系方式搜索" type="text" selection-start="-1"
				  	selection-end="-1" cursor="-1"   @input="searchConsigneePhone"
				  	></input>
				  </view>
				  
				  <view class="action">
				  	
				  	<button class="cu-btn bg-gradual-green shadow-blur round"  
				  			role="button" aria-disabled="false" @click="searchConsignee">
				  				搜索
				  			</button>
				  </view>
		</view> 
		
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
		<radio-group @change="radioChange"  >
		<label v-for="(item,index) in consignor_list" :key="item.value"  >
			<view class="one_vehicle">
				<view class="first-row">
					<image src="/static/user.svg" mode="widthFix" class="sm-icon" ></image>
					<view class="vehicle-no" v-if="isConsignor">{{item.shipperName}}</view>
					<view class="vehicle-no" v-if="!isConsignor">{{item.consigneeName}}</view>
					<view>
						<image src="/static/phone.png" mode="widthFix" class="sm-icon" ></image>
						
						<text class="driverPhone" v-if="isConsignor">{{item.shipperPhone}}</text>
						<text class="driverPhone" v-if="!isConsignor">{{item.consigneePhone}}</text>
					</view>
					<view>
						<text class="work_state">省份名称</text>
						<text class="vehicle_state"  v-if="isConsignor">{{item.shipperProvinceName}}</text>
						<text class="vehicle_state"  v-if="!isConsignor">{{item.consigneeProvinceName}}</text>
					</view>
					
				</view>
				
				<view class="first-row">
					
					<view>
						<text class="work_state">城市（区）名称</text>
						<text class="" v-if="isConsignor">{{item.shipperCityName}}</text>
						<text class="" v-if="!isConsignor">{{item.consigneeCityName}}</text>
					</view>
					<view>
						<text class="work_state">区县名称</text>
						<text class="" v-if="isConsignor">{{item.shipperRegionName}}</text>
						<text class="" v-if="!isConsignor">{{item.consigneeRegionName}}</text>
					</view>
					
				</view>
				
					<view class="vehicle_content">
						
						<view class="right">
							<view class="work_state">托运人会员名称</view>
							<view class="">{{item.consignorName}}</view>	
								
						</view>
						
					</view>
					
					<view class="vehicle_content">
						
						<view class="right">
							<view class="work_state">平台公司名称</view>
							<view class="">{{item.companyName}}</view>	
								
						</view>
						
					</view>
					
					<view class="vehicle_content top-line-border">
						
						<view class="right">
							<view class="work_state">发货地址</view>
							<view class="driverIdNumber" v-if="isConsignor">{{item.shipperAddress}}</view>	
							<view class="driverIdNumber" v-if="!isConsignor">{{item.consigneeAddress}}</view>		
						</view>
						<radio :value="JSON.stringify(item)" :checked="index === current" />
						
					</view>
			</view>
			
			
		</label>
			
		</radio-group>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//托运人会员名称
				consignorName:"",
				//发货人证件号
				shipperPertNumber:"",
				//发货联系人
				shipperName:"",
				//发货联系方式
				shipperPhone:"",
				
				//收货人证件号
				consigneePertNumber:"",
				//收货联系人
				consigneeName:"",
				//收货联系方式
				consigneePhone:"",
				
				
				consignor_list:[],
				current: -1,
				isConsignor:true,//是托运人
				queryParams: {
				        pageNum: 1,
				        pageSize:10,
				        
				       
				        
				        }
			}
		},
		
		methods: {
			//通过托运人会员名称搜索
			searchConsignorName(e){
				this.consignorName = e.target.value
				console.log(this.consignorName,'aas');
			},
			//通过发货人证件号搜索
			searchShipperPertNumber(e){
				this.shipperPertNumber = e.target.value
				console.log(this.shipperPertNumber,'bbs');
			},
			//通过发货联系人搜索
			searchShipperName(e){
				this.shipperName = e.target.value
				console.log(this.shipperName,'ccs');
			},
			//通过发货联系方式搜索
			searchShipperPhone(e){
				this.shipperPhone = e.target.value
				console.log(this.shipperPhone,'dds');
			},
			
			
			
			
			//通过收货人证件号搜索
			searchConsigneePertNumber(e){
				this.consigneePertNumber = e.target.value
				console.log(this.consigneePertNumber,'bbs');
			},
			//通过收货联系人搜索
			searchConsigneeName(e){
				this.consigneeName = e.target.value
				console.log(this.consigneeName,'ccs');
			},
			//通过收货联系方式搜索
			searchConsigneePhone(e){
				this.consigneePhone = e.target.value
				console.log(this.consigneePhone,'dds');
			},
			
			
			
			upper: function(e) {
			           
			       },
			lower: function(e) {
			          if (this.isConsignor){
						  this.queryParams.pageNum += this.queryParams.pageSize
						  this.getConsignorContactList()
					  }else{
						  this.queryParams.pageNum += this.queryParams.pageSize
						  this.getConsigneeContactList()
					  }
					  
			       },
			radioChange: function(evt) {
				
				  if (this.isConsignor){
					    
					   uni.setStorageSync("consignor_contact", evt.target.value)
					   
					   setTimeout(
					      ()=>{
					   						 uni.navigateTo({
					   						  url:`/pages/begin_shipping_order/begin_shipping_order`,
					   						 })
					   					 },30
					   )
				  }else if (!this.isConsignor){
					    console.log (evt,'911')
					   uni.setStorageSync("consignee_contact", evt.target.value)
					   
					   setTimeout(
					      ()=>{
					   						 uni.navigateTo({
					   						  url:"/pages/begin_shipping_order/begin_shipping_order",
					   						 })
					   					 },30
					   )
				  }
				 
			        },
			//发货人列表	(初始时)	
			async getConsignorContactList(){
						const queryParams= this.queryParams
						var authorization = uni.getStorageSync("token")		
						const res = await this.$request({
							url:"/app/shipper/list",
							header:{
								Authorization:authorization,
								"Content-Type": "application/json",
							},
							data:queryParams
							
						})
						
						console.log(res,'q11');
						
						
						if (this.consignor_list.length<res.data.total){
							this.consignor_list =[...this.consignor_list,...res.data.rows]
							
						}else{
							uni.showToast({
								title:"没有更多的信息了",
								icon:"none"
							})
							return
						}
					},
			//收货人列表	(初始时)		
			async getConsigneeContactList(){
						const queryParams= this.queryParams
						var authorization = uni.getStorageSync("token")		
						const res = await this.$request({
							url:"/app/consignee/list",
							header:{
								Authorization:authorization,
								"Content-Type": "application/json",
							},
							data:queryParams
							
						})
						
						console.log(res,'q22');
						 // 此处的consignor——list 实际上是 consignee-list
						
						if (this.consignor_list.length<res.data.total){
							this.consignor_list =[...this.consignor_list,...res.data.rows]
							
						}else{
							uni.showToast({
								title:"没有更多的信息了",
								icon:"none"
							})
							return
						}
					},	
					
			 //发货人列表搜索			
		 async searchShipper(){
			 
				const queryParams= this.queryParams
				const consignorName = this.consignorName
				const shipperPertNumber =this.shipperPertNumber
				const shipperName =this.shipperName
				const shipperPhone =this.shipperPhone
				var authorization = uni.getStorageSync("token")		
				const res = await this.$request({
					url:`/app/shipper/list/?consignorName=${consignorName}&shipperPertNumber=${shipperPertNumber}&shipperName=${shipperName}&shipperPhone=${shipperPhone}`,
					header:{
						Authorization:authorization,
						// "Content-Type": "application/json",
					},
					data:queryParams
					
				})
				     this.consignor_list = res.data.rows
				console.log(res,'q55');  
				if (this.consignor_list.length<res.data.total){
					this.consignor_list =[...this.consignor_list,...res.data.rows]
					
				}else{
					uni.showToast({
						title:"没有更多的信息了",
						icon:"none"
					})
					return
				}  
		  },
						  
			//收货人列表搜索
			async searchConsignee(){
						 
							const queryParams= this.queryParams
							const consignorName = this.consignorName
							const consigneePertNumber =this.consigneePertNumber
							const consigneeName =this.consigneeName
							const consigneePhone =this.consigneePhone
							var authorization = uni.getStorageSync("token")		
							const res = await this.$request({
								url:`/app/consignee/list/?consignorName=${consignorName}&consigneePertNumber=${consigneePertNumber}&consigneeName=${consigneeName}&consigneePhone=${consigneePhone}`,
								header:{
									Authorization:authorization,
									// "Content-Type": "application/json",
								},
								data:queryParams
								
							})
							 this.consignor_list = res.data.rows   
							console.log(res,'q66');  
							if (this.consignor_list.length<res.data.total){
								this.consignor_list =[...this.consignor_list,...res.data.rows]
								
							}else{
								uni.showToast({
									title:"没有更多的信息了",
									icon:"none"
								})
								return
							}  
			 },							  
						  
						
		},
		onLoad(options){
			if(options.papel=="consignor") {
				this.isConsignor = true
				this.getConsignorContactList()
			}else if (options.papel=="consignee"){
				this.isConsignor = false
				this.getConsigneeContactList()
			}
		},
		mounted(){
			
			
		},
	}
</script>

<style lang="scss" scoped>
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	
	.scroll-Y{
		height:75vh;
	}
	.vehicle_content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		.right{
			width:95%;
			display: flex;
			margin-left: 15rpx;
			margin-bottom: 15rpx;
			flex-direction: row;
			align-items: center;
			color: #aaa;
			
			padding-right: 20rpx;
			.id{
				color:#ddd;
				font-size: 15rpx;
			}
		}
	}
	.work_state{
		color:#ccc;
		margin-right:10rpx;
		font-size: 15rpx;
		border: 1rpx solid #ccc;
		padding: 5rpx;
	}
	.driverPhone{
		color:#0081FF;
		font-size: 15rpx;
	}
	.btn{
		color: #fff;
		background-color: #0081FF;
		height: 60rpx;
		width: 80rpx;
	}
	.one_vehicle{
		background-color: #fff;
		border:1rpx solid #c8c7cc;
		border-radius: 10rpx;
		width:90%;
		margin-left:5%;
		margin-bottom:20rpx;
		.first-row{
			padding:20rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.vehicle-no{
				font-weight: 700;
			}
			.vehicle_state{
				font-size:22rpx;
				color:#39B54A;
			}
		}
		
		
	}
	.top-line-border{
		border-top: 1rpx solid #ccc;
		padding-top: 5rpx ;
	}
	.sm-icon{
			 width:40rpx;
			 height:40rpx;
	}
	
	.cu-bar .search-form {
		background-color: #f5f5f5;
		line-height: 64upx;
		height: 64upx;
		font-size: 24upx;
		color: #333333;
		flex: 1;
		display: flex;
		align-items: center;
		margin: 0 30upx;
	}
	
	.cu-bar .search-form+.action {
		margin-right: 30upx;
	}
	
	.cu-bar .search-form input {
		flex: 1;
		padding-right: 30upx;
		height: 64upx;
		line-height: 64upx;
		font-size: 26upx;
		background-color: transparent;
	}
	
	.cu-bar .search-form [class*="cuIcon-"] {
		margin: 0 0.5em 0 0.8em;
	}
	
	.cu-bar .search-form [class*="cuIcon-"]::before {
		top: 0upx;
	}
	.search{
		display: flex;
		flex-direction: row;
		margin-bottom:20rpx;
	}
	.sm-search{
		margin-left: 30rpx;
		padding-top: 10rpx;
	}
</style>
