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
													<!-- <view>{{detailed.iscmOrderInformationRecord.consigneeAddress}}</view> -->
													<input type="text" :value="detailed.iscmOrderInformationRecord.consigneeAddress" disabled class="minput">
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
													<text v-for ="(item,index) in detailed.vehicleLength.split(',')" :key="index">
													   <text class="margin-right" >{{item}}</text>
													</text>
												 </view>
								</view>
								
								
								<view class="cu-form-group">
											     <view class="name">需求车厢类型</view>
											     <view class="ref-name">
													<text v-for ="(item,index) in detailed.cargoBoxType.split(',')" :key="index">
													   <text class="margin-right">{{cargoBoxTypeOptions[cargoBoxTypeSendValue.findIndex(value=>value == item)]}}</text>
													</text>
												 </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">下单方式</view>
											     <view class="ref-name">
											     	<view>{{sourceOrderWayOptions[detailed.orderWay-1]}}</view>
											     </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">计价方式</view>
											     <view class="ref-name">
											     	<view>{{settlementMethodOptions[settlementMethodSendValue.findIndex(value=>value == detailed.settlementMethod)]}}</view>
											     </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">联系人</view>
											     <view class="ref-name">
											     	<view>{{detailed.createBy}}</view>
											     </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">联系号码</view>
											     <view class="ref-name">
											     	<view>{{detailed.createByPhone}}</view>
											     </view>
								</view>
								
								<view class="cu-form-group">
											     <view class="name">拦标{{txt}}价</view>
											     <view class="ref-name">
											     	<view>{{detailed.highestPrice}} 元</view>
											     </view>
								</view>
								
								
								<view v-if = "canSeeInquiry">
									<view class="cu-form-group">
												     <view class="name">运输{{txt}}价(元)<text class="star">*</text></view>
												     <view class="ref-name">
												     	<input type="number" :value="quotePrice" placeholder="请输入运输价"   @input ="getQuotePrice">
												     </view>
									</view>
									
									<view class="cu-form-group">
												     <view class="name">运输重量(吨)<text class="star">*</text></view>
												     <view class="ref-name">
												     	<input type="number" :value="transportWeight" placeholder="请输入运输重量"   @input ="getTransportWeight">
												     </view>
									</view>
									
									<view class="cu-form-group">
												     <view class="name">运输天数(天)</view>
												     <view class="ref-name">
												     	<input type="number" placeholder="请输入运输天数"   @input ="getTransportDays">
												     </view>
									</view>
									
									<view class="cu-form-group">
												     <view class="name">备注</view>
												     <view class="ref-name">
												     	<input type="text" placeholder="请输入备注"  :value="remark" @input ="getRemark">
												     </view>
									</view>
								</view>
								
					      
					  
					
					  
					  
					<view class="btn-row ">
						<button class="next-btn bg-gradual-green round margin-bottom" 
						   @click="backBusiness">返回</button>
						<button class="next-btn round margin-bottom"  :class="{'bg-gradual-green':active}"
								  :disabled="disabled"
						form-type="submit" v-if = "canSeeInquiry">报价</button> 
											
					</view>
				
			
				</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remark:"",
				quotePrice:"",
				transportWeight:"",
				params:{
					
					
					
				},
				received_info:null,
				detailed:"",
				// 货物分类字典
				goodsTypeOptions: [],
				goodsTypeSendValue: [],
				//车辆类型字典
				cargoBoxTypeOptions: [],
				cargoBoxTypeSendValue: [],
				// 下单方式
				sourceOrderWayOptions: [],
				sourceOrderWaySendValue: [],
				//计价方式
				settlementMethodOptions: [],
				settlementMethodSendValue: [],
				
				//单总价
				txt:"单",
				//允许“确定”按钮
				letEnable:false,
				
				
				canSeeInquiry:true,
				disabled:true,
				active:false,
			}
		},
		async created() {
			// 货物分类字典
			this.getGoodsTypeOptions()
			//车辆类型字典
			this.getCargoBoxTypeOptions()
			// 下单方式字典
			this.getSourceOrderWayOptions()
			//计价方式
			this.getSettlementMethodOptions()
			
			try {
			    this.received_info = uni.getStorageSync("inquiry_item")
				var authorization = uni.getStorageSync("token")												
			} catch (e) {
			    // error
			}
			
			
			
			const enquiryId = this.received_info.enquiryId
			
			
			 
								  const res = await this.$request({
								  	 	url:"/app/enquiry/getEnquiryInfo/" + enquiryId ,
								  	 	
								  	 	header:{
								  	 		Authorization:authorization,
								  	 	},
								  	 	
								  	 })
							
								    
									this.detailed = res.data.data
									console.log(this.detailed,'detailed')
									
									if (this.detailed.orderWay ==2 ){
										this.txt = "总"
									}else{
										this.txt = "单"
									}
									
		},
		watch:{
					quotePrice(val, oldVal) {
                         console.log('quotePrice: %s, old: %s', val, oldVal)
						 
						 if (this.params.quotePrice > this.detailed.highestPrice){
						 	
						 	if (this.detailed.orderWay ==2 ){
						 		uni.showToast({
						 			title:"运输总价不能超过拦标总价, 请重新输入",
						 			icon:"none",
						 			duration:3000,
						 		})
						 		
						 		//disable the btn if failed the price test
						 		this.disabled= true
						 		this.active = false 
						 	}else{
						 		uni.showToast({
						 			title:"运输单价不能超过拦标单价, 请重新输入",
						 			icon:"none",
						 			duration:3000,
						 		})
						 		//disable the btn  if failed the price test
						 		this.disabled= true
						 		this.active = false 
						 		
						 	}
						  return	 
						 //check both price and weight to ensure the btn being activated correctly.										 
						 }else if (this.params.quotePrice > 0 && this.params.transportWeight >0  && this.params.quotePrice <= this.detailed.highestPrice&&this.params.transportWeight <= this.detailed.iscmSource.goodsWeight ){
						 	//enable the btn if passing both the weight check and price check
						 	this.disabled= false 
						 	this.active = true
						 }else{
						 	//disable the btn  if failed any test
						 	this.disabled= true
						 	this.active = false 
						 }
                     },
					transportWeight(val, oldVal) {
                         console.log('transportWeight: %s, old: %s', val, oldVal)
						 
						 if (this.params.transportWeight > this.detailed.iscmSource.goodsWeight){
						 	uni.showToast({
						 		title:"运输重量不能超过货物重量, 请重新输入",
						 		icon:"none",
						 		duration:3000,
						 	})
						 	//disable the btn if failed the weight test
						 	this.disabled= true
						 	this.active = false 
						  return	 										
						 }else if(this.params.quotePrice > 0 && this.params.transportWeight >0  && this.params.quotePrice <= this.detailed.highestPrice&&this.params.transportWeight <= this.detailed.iscmSource.goodsWeight ){
						 	//enable the btn if passing both the weight check and price check
						 	this.disabled= false 
						 	this.active = true
						 }else{
						 	//disable the btn  if failed any test
						 	this.disabled= true
						 	this.active = false 
						 }
                     },
					
					
					immediate:true, // watch侦听操作内的函数会立刻被执行
				},
				
		onShow() {
			try {
			    this.canSeeInquiry = uni.getStorageSync("canSeeInquiry")
															
			} catch (e) {
			    // error
			}
		},	
			
		onHide() {
			try {
			     uni.removeStorageSync("canSeeInquiry")
															
			} catch (e) {
			    // error
			}
		},	
		methods: {
			// 货物分类字典
			async getGoodsTypeOptions(){
				const goodsTypeOptions = await this.$getRegistDicts("goods_type")
				
				this.goodsTypeOptions = goodsTypeOptions.data.data.map(e=>e.dictLabel)
				
				this.goodsTypeSendValue = goodsTypeOptions.data.data.map(e=>e.dictValue)
				
					
			},
			
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				
				const cargoBoxTypeOptions = await this.$getRegistDicts("vehicle_cargo_box_type")
				
				
				this.cargoBoxTypeOptions = cargoBoxTypeOptions.data.data.map(e=>e.dictLabel)
				
				this.cargoBoxTypeSendValue = cargoBoxTypeOptions.data.data.map(e=>e.dictValue)
				
				
					
			},
			
			// 下单方式字典
			async getSourceOrderWayOptions(){
				const sourceOrderWayOptions = await this.$getRegistDicts("iscm_source_order_way")
				
				
				this.sourceOrderWayOptions = sourceOrderWayOptions.data.data.map(e=>e.dictLabel)
				
				this.sourceOrderWaySendValue = sourceOrderWayOptions.data.data.map(e=>e.dictValue)
				
			},		
			
			//计价方式
			async getSettlementMethodOptions(){
				const settlementMethodOptions = await this.$getRegistDicts("source_settlement_method")
				
				
				this.settlementMethodOptions = settlementMethodOptions.data.data.map(e=>e.dictLabel)
				
				this.settlementMethodSendValue = settlementMethodOptions.data.data.map(e=>e.dictValue)
				
			},		
			
			getQuotePrice(e){
				this.quotePrice  = e.detail.value
				this.params.quotePrice = e.detail.value
				console.log(this.params.quotePrice,'quotePrice');
				//this.checkPrice()
				
			},
			
			checkPrice(){
				if (this.params.quotePrice > this.detailed.highestPrice){
					
					if (this.detailed.orderWay ==2 ){
						uni.showToast({
							title:"运输总价不能超过拦标总价, 请重新输入",
							icon:"none",
							duration:3000,
						})
						
						//disable the btn if failed the price test
						this.disabled= true
						this.active = false 
					}else{
						uni.showToast({
							title:"运输单价不能超过拦标单价, 请重新输入",
							icon:"none",
							duration:3000,
						})
						//disable the btn  if failed the price test
						this.disabled= true
						this.active = false 
						
					}
				 return	 
				//check both price and weight to ensure the btn being activated correctly.										 
				}else if (this.params.quotePrice > 0 && this.params.transportWeight >0  && this.params.quotePrice <= this.detailed.highestPrice&&this.params.transportWeight <= this.detailed.iscmSource.goodsWeight ){
					//enable the btn if passing both the weight check and price check
					this.disabled= false 
					this.active = true
				}else{
					//disable the btn  if failed any test
					this.disabled= true
					this.active = false 
				}
				
				
				
			},
			
			
			
			
			getTransportWeight(e){
				this.transportWeight  = e.detail.value
				this.params.transportWeight = e.detail.value
				console.log(this.params.transportWeight,'transportWeight');
				
				//this.checkWeight()
				
				
				
			},
			
			
			checkWeight(){
				if (this.params.transportWeight > this.detailed.iscmSource.goodsWeight){
					uni.showToast({
						title:"运输重量不能超过货物重量, 请重新输入",
						icon:"none",
						duration:3000,
					})
					//disable the btn if failed the weight test
					this.disabled= true
					this.active = false 
				 return	 										
				}else if(this.params.quotePrice > 0 && this.params.transportWeight >0  && this.params.quotePrice <= this.detailed.highestPrice&&this.params.transportWeight <= this.detailed.iscmSource.goodsWeight ){
					//enable the btn if passing both the weight check and price check
					this.disabled= false 
					this.active = true
				}else{
					//disable the btn  if failed any test
					this.disabled= true
					this.active = false 
				}
			},
			
			getTransportDays(e){
				
				this.params.transportDays = e.detail.value
				
			},
			
			getRemark(e){
				
				this.params.remark = e.detail.value
				
			},
			
			backBusiness(){
				uni.switchTab({
					url:'/pages/hall_opener/hall_opener'
				})
			},
			
			async formSubmit(e){
				           this.params.enquiryId = this.received_info.enquiryId
						   this.params.enquiryNo = this.received_info.enquiryNo
						   
							//进行运输单价检查
							if (this.params.quotePrice == null || this.params.quotePrice ==""|| this.params.quotePrice.length<1){
								uni.showToast({
									title:"未输入运输单价, 请输入",
									icon:"none",
									duration:3000,
									
								
								})
							 return	 										
							}
							
							
							
							
							//进行运输重量检查
							if (this.params.transportWeight == null || this.params.transportWeight ==""|| this.params.transportWeight.length<1){
								uni.showToast({
									title:"未输入运输重量, 请输入",
									icon:"none",
									duration:3000,
								})
							 return	 										
							} 
							
							if (this.params.transportWeight > this.detailed.iscmSource.goodsWeight){
								uni.showToast({
									title:"运输重量不能超过货物重量, 请重新输入",
									icon:"none",
									duration:3000,
								})
							 return	 										
							}
							
							var authorization = uni.getStorageSync("token")
							var  form = this.params
							
							
							
							const res = await this.$request({
								url:"/app/quote/addQuote",
								method: "POST",
								data:form,
								header:{
									Authorization:authorization,
									
								},
								
							})
						    console.log(res,"addQuote");
							if(res.data.msg =="操作成功"){
								uni.showToast({
									title:res.data.msg,
									
								})
								setTimeout(()=>{
								   uni.switchTab({
								   	url:'/pages/hall_opener/hall_opener'
								   })
								},800)
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:"none",
									duration:3000,
								})
							}
							
				
						
					
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
		 width: 35%;
   }
   .ref-name{
   		 font-size:29rpx;
   	     color:#999;
		 width: 65%;
   }
  
  .btn-row{
  	width: 100%;
  	margin-top:20rpx;
  	display: flex;
  	justify-content: center;
  }
  
  
   
  .next-btn{
  		 margin-top:20rpx;
  		 width:30%;
  		
  } 
  
  .minput{
	   color:#999; 
	   font-size:29rpx ;
	   
  }
   
</style>
