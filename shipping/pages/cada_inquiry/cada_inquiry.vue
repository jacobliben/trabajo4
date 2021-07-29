<template>
	<view>
		<form @submit="formSubmit" class="margin-bottom" >
				
					
					  			
					  			<view class="cu-form-group">
					  						     <view class="name">询价单编号 <text class="star">*</text></view>
					  						     <view class="ref-name">
					  								<view>{{detailed.enquiryNo}}</view>
					  								
					  							 </view>
					  			</view>
								
								<view class="cu-form-group">
											     <view class="name">货物名称</view>
											     <view class="ref-name">
													<view>{{detailed.iscmSource.goodsName}}</view>
													
												 </view>
								</view>
								
								
								
								<view class="cu-form-group">
											     <view class="name">货物类型</view>
											     <view class="ref-name">
													<view>{{goodsTypeOptions[goodsTypeSendValue.findIndex(value=>value == detailed.iscmSource.goodsType)]}}</view>
													
												 </view>
								</view>
					  			
								<view class="cu-form-group">
											     <view class="name">货物重量</view>
											     <view class="ref-name">
													<view>{{detailed.iscmSource.goodsWeight}}吨</view>
													
												 </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">发货省市区</view>
											     <view class="ref-name">
													<view>
														<text>{{detailed.iscmOrderInformationRecord.shipperProvinceName}}</text>
														
													    <text v-if ="detailed.iscmOrderInformationRecord.shipperCityName!=='市辖区'">{{detailed.iscmOrderInformationRecord.shipperCityName}}</text>
														<text>{{detailed.iscmOrderInformationRecord.shipperRegionName}}</text> 
													</view>
													
												 </view>
								</view>
								
								
								
								
								<view class="cu-form-group">
											     <view class="name">收货省市区</view>
											     <view class="ref-name">
													<view>
														<text>{{detailed.iscmOrderInformationRecord.consigneeProvinceName}}</text>
														
													    <text  v-if ="detailed.iscmOrderInformationRecord.consigneeCityName!=='市辖区'">{{detailed.iscmOrderInformationRecord.consigneeCityName}}</text>
														<text>{{detailed.iscmOrderInformationRecord.consigneeRegionName}}</text> 
													</view>
													
												 </view>
								</view>
								
					  			<view class="cu-form-group">
					  						     <view class="name">发货地址</view>
					  						     <view class="ref-name">
					  								<view>{{detailed.iscmOrderInformationRecord.shipperAddress}}</view>
					  								
					  							 </view>
					  			</view>
								
								<view class="cu-form-group">
											     <view class="name">收货地址</view>
											     <view class="ref-name">
													<view>{{detailed.iscmOrderInformationRecord.consigneeAddress}}</view>
												 </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">装货开始时间</view>
											     <view class="ref-name">
													<view>{{detailed.startTime}}</view>
												 </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">装货结束时间</view>
											     <view class="ref-name">
													<view>{{detailed.stopTime}}</view>
												 </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">需求车辆长度(米)</view>
											     <view class="ref-name">
													<view>{{detailed.vehicleLength}}</view>
												 </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">需求车厢类型</view>
											     <view class="ref-name">
													<view>{{detailed.vehicleLength}}</view>
												 </view>
								</view>
					 
					  
					<!--  <view class="current-state margin-top">
					  				<text >总质量4.5吨以下必填</text>
					  </view>
					  
					  <view class="cu-form-group">
					  			     <view class="name">使用性质</view>
					  			     <view class="ref-name">
					  					<input type="text" placeholder="请输入使用性质"  :value="vehicleUserCharacter" @input ="getVehicleUserCharacter">
					  				 </view>
					  </view>
					  
					  <view class="cu-form-group">
					  			     <view class="name">行驶证发证机关</view>
					  			     <view class="ref-name">
					  					<input type="text" placeholder="请输入行驶证发证机关"  :value="vehicleIssuingOrganizations" @input ="getVehicleIssuingOrganizations">
					  				 </view>
					  </view>
					  
					  <view class="cu-form-group">
					  			     <view class="name">车辆识别代号 </view>
					  			     <view class="ref-name">
					  					<input type="text" placeholder="请输入车辆识别代号" :value="vin" @input ="getVehicleVinCode">
					  				 </view>
					  </view> -->
					  
					  
					<view class="btn-row ">
						<button class="next-btn bg-gradual-green round margin-bottom" 
						   @click="backBusiness">返回</button>
						<button class="next-btn round margin-bottom"  :class="{'bg-gradual-green':active}"
								  :disabled="disabled"
						form-type="submit">确定</button> 
											
					</view>
				
			
				</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				params:{},
				detailed:"",
				// 货物分类字典
				goodsTypeOptions: [],
				goodsTypeSendValue: [],
				//车辆类型字典
				cargoBoxTypeOptions: [],
				cargoBoxTypeSendValue: [],
				
				
				
			}
		},
		async created() {
			// 货物分类字典
			this.getGoodsTypeOptions()
			//车辆类型字典
			this.getCargoBoxTypeOptions()
			
			
			this.received_info = uni.getStorageSync("inquiry_item")
			console.log(this.received_info,'inquiry_item');
			
			const enquiryId = this.received_info.enquiryId
			
			var authorization = uni.getStorageSync("token")
			 
								  const res = await this.$request({
								  	 	url:"/app/enquiry/getEnquiryInfo/" + enquiryId ,
								  	 	
								  	 	header:{
								  	 		Authorization:authorization,
								  	 	},
								  	 	
								  	 })
							
								    console.log(res,'inquiry');
									this.detailed = res.data.data
									console.log(this.detailed,'detailed')
									
									
		},
		methods: {
			// 货物分类字典
			async getGoodsTypeOptions(){
				const goodsTypeOptions = await this.$getRegistDicts("goods_type")
				
				console.log( goodsTypeOptions,'goodsType');
				this.goodsTypeOptions = goodsTypeOptions.data.data.map(e=>e.dictLabel)
				console.log(this.goodsTypeOptions,'goodsTypeOptions');
				this.goodsTypeSendValue = goodsTypeOptions.data.data.map(e=>e.dictValue)
				console.log(this.goodsTypeSendValue,'goodsTypeSendValue');
					
			},
			
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				
				const cargoBoxTypeOptions = await this.$getRegistDicts("vehicle_cargo_box_type")
				
				console.log( cargoBoxTypeOptions,'cargoBoxType');
				this.cargoBoxTypeOptions = cargoBoxTypeOptions.data.data.map(e=>e.dictLabel)
				console.log(this.cargoBoxTypeOptions,'cargoBoxTypeOptions');
				this.cargoBoxTypeSendValue = cargoBoxTypeOptions.data.data.map(e=>e.dictValue)
				console.log(this.cargoBoxTypeSendValue,'cargoBoxTypeSendValue');
				
				
				
					
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
	
	
 .star{
		   color:#f00;
	}
	
 .name{
   		 color:#000;
   }
   .ref-name{
   		 font-size:29rpx;
   	     color:#999;
   }
  
  .btn-row{
  	width: 100%;
  	margin-top:200rpx;
  	display: flex;
  	justify-content: center;
  }
  
  
   
  .next-btn{
  		 margin-top:20rpx;
  		 width:30%;
  		
  } 
   
</style>
