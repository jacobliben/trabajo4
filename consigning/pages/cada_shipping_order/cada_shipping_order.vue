<template>
	<view class="page">
	  <form @submit="formSubmit" method="post" enctype="multipart/form-data" >
		  <view class="cu-form-group margin-top"  >
		  	
		  	<view class="name">下单方式<text class="red">*</text></view>
		    
			<view class="ref-name">			
					<view>{{order_way}}</view>								 
			</view>	  
		  	    
		  </view> 
		  
		  
		
		
		<view class="go-group margin-top a-line" >
					  <image src="/static/start.png" mode="widthFix" class="sm-icon margin-left" ></image>
					  <view class="middle-content" >
						  <view class="middle-title">
							  <text class="name">{{consignor_contact_choosen}}</text>
							  <text class="phone">{{consignor_contact_phone}}</text>
						  </view>
						  <view class="address">
							  {{consignor_contact_address}}
						  </view>
					  </view>
					  <view class="badge">
						  <text>发货地址</text>
									  
					  </view>
		 </view>
		
		<view class="go-group" >
					  <image src="/static/end.png" mode="widthFix" class="sm-icon margin-left" ></image>
					  <view class="middle-content" >
						  <view class="middle-title">
							  <text class="name">{{consignee_contact_choosen}}</text>
							  <text class="phone">{{consignee_contact_phone}}</text>
						  </view>
						  <view class="address">
							  {{consignee_contact_address}}
						  </view>
					  </view>
					  <view class="badge">
									
						  收货地址
					  </view>
		</view>
		
		<view class="current-state margin-top">
				<text >货物详情</text>
		</view>
		
		
		<view class="cu-form-group margin-top"  >
			<text class="name">货物名称<text class="red">*</text></text>
			
					<input type="text" maxlength="16"  placeholder="请输入货物名称" 
					  selection-start="-1" selection-end="-1" cursor="-1" :value="goodsName"
						disabled   @input="getGoodsName" >
					
				
		</view>
		
		<view class="cu-form-group"  >
			<text class="name">货物重量(吨)<text class="red">*</text></text>
			 <input type="digit" maxlength="16"  name="password" placeholder="请输入货物重量" 
			 selection-start="-1" selection-end="-1" cursor="-1" :value="goodsWeight"
			 disabled @input="getGoodsWeight"  >
		</view>
		
		
		
		<view class="cu-form-group"  >
			<text class="name">货物分类 <text class="red">*</text></text>
			
		     <picker disabled @change="bindPickerGoodsTypeChange" :value="goods_type_index" :range="goods_type_list">
		                           <view class="picker-view text-lg">{{goods_type_list[goods_type_index]}}</view>
		      </picker>
		</view>
		
		<view class="cu-form-group" >
			<text class="name">货物件数</text>
			<input type="text" maxlength="16" name="password"  
			placeholder="请输入货物件数" :value="packageNumber"
			 selection-start="-1" selection-end="-1" cursor="-1"  disabled  @input="getPackageNumber">
			
		</view>
		
		<view class="cu-form-group" >
			<text class="name">包装类型<text class="red">*</text></text>
			<picker disabled @change="bindPickerPackageTypeChange" :value="package_type_index" :range="package_type_list">
			                      <view class="picker-view text-lg">{{package_type_list[package_type_index]}}</view>
			 </picker>
			
		</view>
		
		
		<view class="current-state margin-top">
				<text >运载工具要求</text>
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">车型选择</text>
			   
				<text v-for = "item in cargoBoxType ">
					<text v-if="item.cargoBoxType==5">标箱</text>
					<text v-if="item.cargoBoxType==2">高栏</text>
					<text v-if="item.cargoBoxType==1">平板</text>
					<text v-if="item.cargoBoxType==3">低平板</text>
					<text v-if="item.cargoBoxType==4">轴线车</text>
					<text v-if="item.cargoBoxType==6">厢式</text>
					<text v-if="item.cargoBoxType==7">飞翼车</text>
					<text v-if="item.cargoBoxType==8">自卸车</text>
					
				</text>		   
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">车长选择</text>
			    <text v-for = "item in vehicleLengthList ">
			    	<text>{{item}}m</text>
			    	
			    	
			    </text>	
		</view>
		
		<view class="current-state margin-top">
				<text >时间要求</text>
		</view>
		
		<view class="cu-form-group" >
			<text class="name">装货开始时间<text class="red">*</text></text>
			<!-- 日期 -->
			<view v-if="assignSendTimeDate_has_input" >
				 <picker  mode="date"  :value="assignSendTimeDate"   :end="endDate" @change="bindDateChange" data-index="assignSendTimeDate">
				      <view class="picker-view text-lg">{{assignSendTimeDate}}</view>
				 </picker>
			</view>
			
			<view @click="assignSendTimeDate_has_input = true"  >
				
				 <view  class="picker-view text-lg"  v-if="!assignSendTimeDate_has_input" >选择装货开始日期</view>
			</view>
		</view>
		
		<view class="cu-form-group" >
			<text class="name"></text>
			<!-- 时刻 -->
			<view v-if="assignSendTimeTime_has_input" >
				<picker mode="time" :value="assignSendTimeTime" start="00:00" end="23:59" @change="bindTimeChange" data-index="assignSendTimeTime">
				       <view class="picker-view text-lg">{{assignSendTimeTime}}</view>
				</picker>
			</view>
			
			<view @click="assignSendTimeTime_has_input = true"  >
				
				 <view  class="picker-view text-lg"  v-if="!assignSendTimeTime_has_input" >选择装货开始时刻</view>
			</view>
		</view>
		
		<view class="cu-form-group" >
			<text class="name">装货截止时间<text class="red">*</text></text>
			<!-- 日期 -->
			<view >
				 <picker v-if="assignEndTimeDate_has_input" mode="date"  :value="assignEndTimeDate"   :end="endDate" @change="bindDateChange" data-index="assignEndTimeDate">
				      <view class="picker-view text-lg">{{assignEndTimeDate}}</view>
				 </picker>
			</view>
			<view @click="assignEndTimeDate_has_input = true"  >
				
				 <view  class="picker-view text-lg"  v-if="!assignEndTimeDate_has_input" >选择装货截止日期</view>
			</view>
		</view>
		
		<view class="cu-form-group" >
			<text class="name"></text>
			<!-- 时刻 -->  
			<view >
				 <picker v-if="assignEndTimeTime_has_input" mode="time"  :value="assignEndTimeTime" start="00:00"   end="23:59" @change="bindTimeChange" data-index="assignEndTimeTime">
				      <view class="picker-view text-lg">{{assignEndTimeTime}}</view>
				 </picker>
			</view>
			<view @click="assignEndTimeTime_has_input = true"  >
				
				 <view  class="picker-view text-lg"  v-if="!assignEndTimeTime_has_input" >选择装货截止时刻</view>
			</view>
		</view>
		
		<view class="current-state margin-top">
				<text>结算方式</text>
		</view>
		
		<view class="cu-form-group margin-top"  >
			<text class="name">计价方式<text class="red">*</text></text>
					<input type="text" maxlength="16"  placeholder="元/吨" 
					  selection-start="-1" selection-end="-1" cursor="-1" disabled
						   @input="" v-if="show_yuan_ton" >
					<picker disabled @change="bindPickerSettlementTypeChange" :value="settlement_type_index" :range="sourceSettlementMethodOptions" v-if="show_multi_choice">
					       <view class="picker-view text-lg">{{sourceSettlementMethodOptions[settlement_type_index]}}</view>
					 </picker>	   
					
					<input type="text" maxlength="16"  placeholder="包车"
					  selection-start="-1" selection-end="-1" cursor="-1" disabled
						   @input="" v-if="show_whole_car" >	   
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">运费单价(元)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="运费单价不能小于0" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="unitPrice"	disabled  @input="getUnitPrice" >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">运费金额(元)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="请输入运费金额" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="consignorRates"	  disabled @input="getConsignorRates" >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">货值单价(元/吨)</text>
					<input type="digit" maxlength="10"  placeholder="请输入货值单价(元/吨)" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="goodsUnitPrice"	disabled   @input="getGoodsUnitPrice"  >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">整车货值(元)</text>
					<input type="digit" maxlength="10"  placeholder="请输入整车货值(元)" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="goodsFee" disabled	   @input="getGoodsFee" >
		</view>
		
		<view class="cu-form-group margin-top ">
			<text class="no-use-more">计价方式：1.元/吨: 单价*货物重量; 2.元/吨公里: 单价*货物重量*公里数; 3.元/件(台)数: 单价*件数; 4.包车: 单价</text>
				
		</view>
		
		<view class="current-state margin-top">
				<text>其他</text>
		</view>
		
		<view class="cu-form-group"  >
			<text class="name">自定义编号</text>
			 <input type="text" maxlength="16"   placeholder="请输入自定义编号" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="customNumber" disabled @input="getCustomNumber" >
		</view>
		
		<view class="cu-form-group"  >
			<text class="name">摘单咨询电话</text>
			 <input type="number" maxlength="16"   placeholder="请输入摘单咨询电话" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="pickMonadPhone" disabled @input="getPickMonadPhone" >
		</view>
		
		
		<view class="cu-form-group"  >
			<text class="name">结算咨询电话</text>
			 <input type="number" maxlength="16"   placeholder="请输入结算咨询电话" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="settlementPhone" disabled @input="getSettlementPhone" >
		</view>
		
		<view class="cu-form-group">
					     <view class="name">发单数</view>
					     <view class="ref-name">
										 <uni-number-box class="picker-view text-lg"
										disabled  :min="1" :max="99" @change="getSourceQuantity" v-model = "sourceQuantity"></uni-number-box>
							 
						 </view>
		</view>
		
		<view class="cu-form-group">
					     <view class="name">是否指定承运人</view>
					     <view class="ref-name">
										
										 <view>{{specify_carrier_status}}</view>	
						 </view>
		</view>
		
		<view class="cu-form-group" v-if="show_carrier_selections" >
			<text class="name">选择承运人<text class="red">*</text></text>
			 <view>{{specifyCarrierName}}</view>
		</view>
		
		<view class="cu-form-group" v-if="checked">
		
		 <view>
			保存为常用货源
		 </view>
		</view>
		
		<view class="btn-row">
			           
							   <button class="next-btn blue-btn radius" 
						 @click="backward">关闭</button> 
		</view>
       </form>
	</view>	
</template>

<script>
	
	export default{
		data(){
			const currentDate = this.getDate({
			           format: true
			       })
				   
			return{
				
				
				//显示下单方式
				order_way:"",
				now_state:this.transporte_state,
				//“货源下单”里货源单号的详情
				orderSourceDetail:"",
				 // 下单方式
				sourceOrderWayOptions:[],
				sourceOrderWay_current:0,	
				showSourceOrder:false,
				// 发货联系人
				consignor_contact_choosen:"",
				consignor_contact_phone:"",
				consignor_contact_address:"",
				has_consignor_contact:false,
				// 收货联系人
				consignee_contact_choosen:"",
				consignee_contact_phone:"",
				consignee_contact_address:"",
				has_consignee_contact:false,
				
				//货物名称
				goodsName:"",
				//货物重量
				goodsWeight:"",	
				// 货物分类字典
				goodsTypeOptions: [],
				goodsTypeSendValue: [],
				goods_type_list: [],
				goods_type_index:0,	
				
				 // 包装类型字典
				packageTypeOptions: [], 
				packageTypeSendValue: [],
				package_type_list: [],
				package_type_index:0,	
				
				 // 包装货物件数
				packageNumber:"",
				//车辆类型字典
				 cargoBoxTypeOptions: [],
				 cargoBoxTypeLabel: [],
				 cargoBoxTypeSendValue: [],
				 cargoBoxType: [],
				 cargo_box_type_index:0,
				 //车长字典
				 vehicleLengthOptions: [],
				vehicleLengthList: [],
				//装货开始日期
				assignSendTimeDate: currentDate,
				assignSendTimeDate_has_input:false,
				//装货开始时刻
				assignSendTimeTime: "8:00",
				assignSendTimeTime_has_input:false,
				//装货截止日期
				assignEndTimeDate: currentDate,
				assignEndTimeDate_has_input:false,
				//装货截止时刻
				assignEndTimeTime: "18:00",
				assignEndTimeTime_has_input:false,
				
				//装货开始总
				assignSendTime:"",
				//装货截止总
				assignEndTime:"",
				
				// 计价方式字典 
				sourceSettlementMethodOptions: [],
				settlementTypeSendValue:[],
				settlement_type_index:0,
				//计价方式 (元/吨)
				show_yuan_ton:true,
				//计价方式 (多选)
				show_multi_choice:false,
				//计价方式 (包车)
				show_whole_car:false,
				//单价
				unitPrice:"",
				//运价
				consignorRates:"",
				//货值单价
				goodsUnitPrice:"",
				//整车货值
				goodsFee:"",
				//自定义编号
				customNumber:"",
				//摘单咨询电话
				pickMonadPhone:"",
				//结算咨询电话
				settlementPhone:"",
				//发单数
				sourceQuantity:1,
				//是否指定承运人状态 1不指定 2指定
				specifyCarrierStatus:1,
				//是否指定承运人
				assign_carrier_items: [{
				                   value: '1',
				                   name: '否'
				               },
				               {
				                   value: '2',
				                   name: '是',
				                 
				               },
				               
				           ],
				assign_carrier_current: 0,		   
				specify_carrier_status:"",
				show_carrier_selections:false,
				specifyCarrierId:"",	
				specifyCarrierName:"",	   
				active:false,
				checked:false,
				disabled:false,
				
				//是否显示“草稿”和“提交”按钮
				show_btn:true,
				
				params:{
					
				},		
				
			}
		},
		async created(){
			
			
			
			//用于正常显示，勿删！！！！
			// 下单方式字典
			this.getSourceOrderWayOptions()
			  // 货物分类字典
			 this.getGoodsTypeOptions()
			 // 包装类型字典
			 this.getPackageTypeOptions()
			 //车辆类型字典
			 this.getCargoBoxTypeOptions()
			 //车长字典
			 this.getVehicleLengthOptions()
			 // 计价方式字典
			 this.getSourceSettlementMethodOptions()
			 
		
		   
		   
		   
		   					
		   					 //“货源下单”里货源单号的详情(回显)
		   					this.orderSourceDetail = uni.getStorageSync("making_shipping_order_detail")
		   					
							
							if (this.orderSourceDetail.orderWay ==1){
								this.order_way = "普通货模式(单价)"
								
								//计价方式 (元/吨)
								this.show_yuan_ton= false//普通货模式下，先显示“单价”
								//计价方式 (多选)
								this.show_multi_choice = true//普通货模式下，先显示“单价”
								//计价方式 (包车)
								this.show_whole_car = false//普通货模式下，先显示“单价”
							}else if (this.orderSourceDetail.orderWay ==2){
								
								this.order_way = "普通货模式(包车)"
								
								//计价方式 (元/吨)
								this.show_yuan_ton= false//普通货模式下，先显示“包车”
								//计价方式 (多选)
								this.show_multi_choice = false//普通货模式下，先显示“包车”
								//计价方式 (包车)
								this.show_whole_car = true//普通货模式下，先显示“包车”
								
							}else if (this.orderSourceDetail.orderWay ==3){
								this.order_way = "批量货模式"
								
								//计价方式 (元/吨)
								this.show_yuan_ton=true//批量货模式下
								//计价方式 (多选)
								this.show_multi_choice = false//批量货模式下
								//计价方式 (包车)
								this.show_whole_car = false//批量货模式下
							}
		   					
							const sourceId = this.orderSourceDetail.sourceId
							
							var authorization = uni.getStorageSync("token")
							
							const res = await this.$request({
								 	url:`/app/source/getSourceVo/${sourceId}`,
								 	
								 	header:{
								 		Authorization:authorization,
								 	},
								 	
								 })
						
							
							this.orderSourceDetail = res.data.data
							
							this.consignor_contact_choosen = this.orderSourceDetail.iscmSourceInformationRecord.shipperName
							this.consignor_contact_phone = this.orderSourceDetail.iscmSourceInformationRecord.shipperPhone
							this.consignor_contact_address = this.orderSourceDetail.iscmSourceInformationRecord.shipperAddress
							
							this.consignee_contact_choosen = this.orderSourceDetail.iscmSourceInformationRecord.consigneeName
							this.consignee_contact_phone = this.orderSourceDetail.iscmSourceInformationRecord.consigneePhone
							this.consignee_contact_address = this.orderSourceDetail.iscmSourceInformationRecord.consigneeAddress
							
						
							this.cargoBoxType = this.orderSourceDetail.iscmSourceCargoBoxTypeList
							this.vehicleLengthList = this.orderSourceDetail.iscmSourceVehicleLengthList.map(e=>e=e.vehicleLength)
							
					
							///////////
							
		   					 const orderWay = this.orderSourceDetail.orderWay
		   					
		   					 if (orderWay== 3){
		   									  this.showOrderType = false
		   					 }else if (orderWay< 3){
		   									   this.sourceOrderWay_current = orderWay -1
		   					 }
		   					this.goodsName = this.orderSourceDetail.goodsName
		   					this.goodsWeight = this.orderSourceDetail.goodsWeight
		   								
		   					this.packageNumber = this.orderSourceDetail.packageNumber
		   					
		   					
		   					
		   					
		   					//装货开始时间
		   					if (this.orderSourceDetail.assignSendTime){
		   									                        
		   														 this.assignSendTimeDate = this.orderSourceDetail.assignSendTime.split(" ")[0]||this.getDate({format: true})
		   																	 this.assignSendTimeTime = this.orderSourceDetail.assignSendTime.split(" ")[1]||this.getDate({format: true})
		   														 this.assignSendTimeDate_has_input = true
		   																	 this.assignSendTimeTime_has_input = true
		   					}
		   					
		   					//装货截止时间
		   					if (this.orderSourceDetail.assignEndTime){
		   														this.assignEndTimeDate = this.orderSourceDetail.assignEndTime.split(" ")[0]||this.getDate({format: true})
		   														this.assignEndTimeTime = this.orderSourceDetail.assignEndTime.split(" ")[1]||this.getDate({format: true})
		   														this.assignEndTimeDate_has_input = true
		   														this.assignEndTimeTime_has_input = true
		   					}
		   					
		   					this.unitPrice = this.orderSourceDetail.unitPrice   
		   					this.consignorRates = this.orderSourceDetail.consignorRates
		   					this.goodsUnitPrice = this.orderSourceDetail.goodsUnitPrice
		   					this.goodsFee = this.orderSourceDetail.goodsFee
		   					this.customNumber = this.orderSourceDetail.customNumber
							
						    this.pickMonadPhone = this.orderSourceDetail.pickMonadPhone
							
		   					
		   					this.settlementPhone = this.orderSourceDetail.settlementPhone
		   					this.sourceQuantity = this.orderSourceDetail.sourceQuantity
		   					this.specifyCarrierStatus = this.orderSourceDetail.specifyCarrierStatus
		   					if (this.specifyCarrierStatus==1){
		   									this.specify_carrier_status ="不指定"
		   					}else if (this.specifyCarrierStatus==2){
		   									 this.specify_carrier_status ="指定"
											 this.show_carrier_selections = true
											  this.specifyCarrierName = this.orderSourceDetail.specifyCarrier.carrierName
											
		   					}
		   					this.checked = this.orderSourceDetail.isTemplate
		   					
		   					
		   					
		   				 
		   
			 
			 
			 
			 
			 
		},
		
		mounted(){
			
			
			
			
			// 下单方式字典
			this.getSourceOrderWayOptions()
			  // 货物分类字典
			 this.getGoodsTypeOptions()
			 // 包装类型字典
			 this.getPackageTypeOptions()
			 //车辆类型字典
			 this.getCargoBoxTypeOptions()
			 //车长字典
			 this.getVehicleLengthOptions()
			 // 计价方式字典
			 this.getSourceSettlementMethodOptions()
			
							
			//是否显示下单方式				
			
			if (this.now_state.state ==0){
				this.showOrderType = false
			}else{
				this.showOrderType = true
			}
			
			
		},
		props:["transporte_state","index_key"],
		computed: {
		      
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		methods:{
			//用于 date picker!!!!!
			getDate(type) {
								            const date = new Date();
								            let year = date.getFullYear();
								            let month = date.getMonth() + 1;
								            let day = date.getDate();
								
								            if (type === 'start') {
								                year = year - 60;
								            } else if (type === 'end') {
								                year = year + 20;
								            }
								            month = month > 9 ? month : '0' + month;;
								            day = day > 9 ? day : '0' + day;
								            return `${year}-${month}-${day}`;
								        },
			// 下单方式字典
			async getSourceOrderWayOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/iscm_source_order_way",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 
					this.sourceOrderWayOptions = res.data.data.slice(0,2)
					
			},
			
			//指定下单方式
			radioSourceOrderWayChange(e){
			
			    this.params.orderWay= e.target.value
			
				if (e.target.value=="1"){
					//计价方式 (元/吨)
					this.show_yuan_ton = false 
					//计价方式 (多选)
					this.show_multi_choice= true
					//计价方式 (包车)
					this.show_whole_car= false 
				}else if (e.target.value=="2"){
					//计价方式 (元/吨)
					this.show_yuan_ton = false 
					//计价方式 (多选)
					this.show_multi_choice= false  
					//计价方式 (包车)
					this.show_whole_car= true
				}
			},	
										
			 // 货物分类字典
			async getGoodsTypeOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/goods_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 
					this.goodsTypeOptions = res.data.data.map(e =>e=e.dictLabel)
					this.goods_type_index = this.goodsTypeOptions.length -1
					
					 this.goods_type_list= this.goodsTypeOptions
					this.goodsTypeSendValue = res.data.data.map(e=>e.dictValue)	 
					
					
					const goodsType = this.orderSourceDetail.goodsType
										
					this.goods_type_index = this.goodsTypeSendValue.findIndex(value=>value == goodsType) 
									
					
					
					
			},
			
			// 包装类型字典
			async getPackageTypeOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/package_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 
					this.packageTypeOptions = res.data.data.map(e =>e=e.dictLabel)
					
					 
					 this.package_type_list= this.packageTypeOptions
					this.packageTypeSendValue = res.data.data.map(e=>e.dictValue)	 
					
					
				
					const packageType = this.orderSourceDetail.packageType
										
					this.package_type_index = this.packageTypeSendValue.findIndex(value=>value == packageType) 
									
					
					
			},
			
			
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_cargo_box_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 this.cargoBoxTypeOptions = res.data.data
					 this.cargoBoxTypeLabel = this.cargoBoxTypeOptions.map(e=>e=e.dictLabel)
				       this.cargoBoxTypeSendValue = this.cargoBoxTypeOptions.map(e=>e=e.dictValue)
					
			},
			
			//车长字典
			async getVehicleLengthOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_length",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 
					 this.vehicleLengthOptions = res.data.data
					
			},
			
			
			// 计价方式字典
			async getSourceSettlementMethodOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/source_settlement_method",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					
					 this.sourceSettlementMethodOptions = res.data.data.map(e=>e.dictLabel)
					 this.settlementTypeSendValue = res.data.data.map(e=>e.dictValue)
					
			},
			
			goSelectConsignorContact(){
				
				uni.navigateTo({
					url:"/pages/select_consignor_contact/select_consignor_contact?papel=consignor"
				})
				
			},
			
			
			goSelectConsigneeContact(){
				
				uni.navigateTo({
					url:"/pages/select_consignor_contact/select_consignor_contact?papel=consignee"
				})
				
			},
			getGoodsName(e){
				             this.goodsName = e.target.value
							this.params. goodsName = e.target.value
							
						},
			getGoodsWeight(e){
				             this.goodsWeight = e.target.value
							this.params.goodsWeight = e.target.value
							
							//计算运费金额
							if (this.params.unitPrice != null || this.params.unitPrice!=""||this.params.unitPrice.length >0){
								this.consignorRates = parseFloat(this.unitPrice)  *  parseFloat(this.goodsWeight)
								this.params.consignorRates = this.consignorRates								
							} 
								//计算整车货值
								if (this.params.goodsUnitPrice != null || this.params.goodsUnitPrice!=""||this.params.goodsUnitPrice.length >0){
									this.goodsFee = parseFloat(this.goodsUnitPrice)  *  parseFloat(this.goodsWeight)
									this.params.goodsFee = this.goodsFee								
								}
							
						},
			getPackageNumber(e){
				           
							this.params.packageNumber = e.target.value
							
						},						
			//货物分类选择
			bindPickerGoodsTypeChange(e) {
						           
						            this.goods_type_index = e.target.value
									
									var goods_type_index = this.goods_type_index
									
									 this.params.goodsType =this.goodsTypeSendValue[goods_type_index]
									
									
						        },	
			
			//包装类型选择
			bindPickerPackageTypeChange(e) {
						          
						            this.package_type_index = e.target.value
									
									var package_type_index = this.package_type_index
									
									 this.params.packageType =this.packageTypeSendValue[package_type_index]
									
									
						        },	
								
			//车辆类型选择					
			checkboxCargoBoxTypeChange: function (e) {
			                var items = this.vehicleLengthOptions,
			                    values = e.detail.value;
			                for (var i = 0, lenI = items.length; i < lenI; ++i) {
			                    const item = items[i]
			                    if(values.includes(item.value)){
			                        this.$set(item,'checked',true)
			                    }else{
			                        this.$set(item,'checked',false)
			                    }
			                }
							
							this.params.vehicleLengths = values
			            
			        },
			//车长选择
			checkboxVehicleLengthsChange: function (e) {
			                var items = this.cargoBoxTypeOptions,
			                    values = e.detail.value;
			                for (var i = 0, lenI = items.length; i < lenI; ++i) {
			                    const item = items[i]
			                    if(values.includes(item.value)){
			                        this.$set(item,'checked',true)
			                    }else{
			                        this.$set(item,'checked',false)
			                    }
			                }
						
							this.params.cargoBoxType = values
			            
			        },	
			bindDateChange: function(e) {
				                //装货开始日期
							  if(e.currentTarget.dataset.index=="assignSendTimeDate"){
								  this.assignSendTimeDate = e.target.value
								  this.params.assignSendTimeDate = e.target.value
								  this.assignSendTimeDate_has_input = true
							  }else if(e.currentTarget.dataset.index=="assignEndTimeDate"){
								  //装货截止日期
								  this.assignEndTimeDate = e.target.value
								  this.params.assignEndTimeDate = e.target.value
								  this.assignEndTimeDate_has_input = true
							  }
			    
			       },
			bindTimeChange: function(e) {
				      //装货开始时刻
				      if(e.currentTarget.dataset.index=="assignSendTimeTime"){
				      								  this.assignSendTimeTime = e.target.value
				      								  this.params.assignSendTimeTime = e.target.value
													  
													 this.assignSendTime =  this.assignSendTimeDate +" "+  this.assignSendTimeTime
													 this.params.assignSendTime =  this.params.assignSendTimeDate +" "+  this.params.assignSendTimeTime
													  
				      								  this.assignSendTimeTime_has_input = true
													
				      }else if(e.currentTarget.dataset.index=="assignEndTimeTime"){
				      								  //装货截止时刻
				      								  this.assignEndTimeTime = e.target.value
				      								  this.params.assignEndTimeTime = e.target.value
													  //装货截止总
													 
													  this.assignEndTime =  this.assignEndTimeDate +" "+ this.assignEndTimeTime 
													  this.params.assignEndTime =  this.params.assignEndTimeDate +" "+ this.params.assignEndTimeTime 
				      								  this.assignEndTimeTime_has_input = true
													  

														  
													  if (Date.parse(this.assignSendTime)> Date.parse(this.assignEndTime)){
														  uni.showToast({
														  	title:"装货截止时间不能早于装货开始时间",
														  	icon:"none"
														  })
														  
														 
													  }
													  
				      }
			           
			        },
			//计价方式						   
			bindPickerSettlementTypeChange(e) {
						            
						            this.settlement_type_index = e.target.value
									
									var settlement_type_index = this.package_type_index
									
									 this.params.settlementMethod =this.settlementTypeSendValue[settlement_type_index]
									
									
						        },	   
									   
			//单价
			getUnitPrice(e){
				             this.unitPrice = e.target.value
							this.params.unitPrice = e.target.value
							//计算运费金额	
							if (this.params.goodsWeight != null || this.params.goodsWeight!=""||this.params.goodsWeight.length >0){
								this.consignorRates = parseFloat(this.unitPrice)  *  parseFloat(this.goodsWeight)
								this.params.consignorRates = this.consignorRates								
							} 	
								
							this.disabled = false
							this.active = true
						},	
										   
			//运费金额
			getConsignorRates(e){
				        this.consignorRates = e.target.value
						this.params.consignorRates = e.target.value
						
				
						},
					
			//货值单价(吨/元)
			getGoodsUnitPrice(e){
				        this.goodsUnitPrice = e.target.value
						this.params.goodsUnitPrice = e.target.value
						//计算整车货值
						if (this.params.goodsWeight != null || this.params.goodsWeight!=""||this.params.goodsWeight.length >0){
							this.goodsFee = parseFloat(this.goodsUnitPrice)  *  parseFloat(this.goodsWeight)
							this.params.goodsFee = this.goodsFee								
						}
						
						},
			
						
			//整车货值(元)
			getGoodsFee(e){
				        this.goodsFee = e.target.value
						this.params.goodsFee = e.target.value 
						},	
										
			//自定义编号							
			getCustomNumber(e){
				             this.customNumber = e.target.value
							this.params.customNumber = e.target.value
							
						},
										
			//摘单联系电话
			getPickMonadPhone(e){
				             this.pickMonadPhone = e.target.value
							this.params.pickMonadPhone = e.target.value
							
						},							
			//结算咨询电话							
			getSettlementPhone(e){
				             this.settlementPhone = e.target.value
							this.params.settlementPhone = e.target.value
							
						},
			//发单数				
			getSourceQuantity(e){
				
				              this.sourceQuantity = e
							 this.params.sourceQuantity = e
							
						},											
			//是否指定承运人										
			radioAssignCarrierChange(e){
				
				if(e.target.value=="2"){
					this.params.specifyCarrierStatus= 2
					this.show_carrier_selections = true
					
				}else{
					this.params.specifyCarrierStatus= 1
					this.show_carrier_selections= false
					
				}
				
			},	
			//是否保存为货源模板,true:保存为货源模板,false不保存为货源模板
			checkboxChange(e) {
			                
			                   this.checked = !this.checked;
							   
							   if(this.checked===true){
								   this.params.isTemplate = true
							   }else{
								   this.params.isTemplate = false
							   }
			                
			            },
						
			
			//后退
			backward(){
				
					uni.switchTab({
						url:"/pages/shipping_order/shipping_order"
					})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.go-group{
		display: flex;
		flex-direction: row;
		background-color: #fff;
		padding-bottom: 10rpx;
		.middle-content{
			border-bottom: #e2e2e2 ;
			padding-top: 10rpx;
			padding-right: 10rpx;
			width: 70%;
			.middle-title{
				font-weight: 600;
				font-size:30rpx;
				.name{
					margin-right:20rpx;
				}
			}
			.address{
				margin-top: 10rpx;
				color:#a9a9a9;
				font-size: 30rpx;
			}
		}
	}
	
	.badge{
		border-left:1rpx solid #e6e6e6;
		height:80%;
		width:80rpx;
		padding-top: 20rpx;
		padding-left: 10rpx;
	}
	
	.current-state{
			 margin-top:10rpx;
			 margin-left:10rpx;
			 margin-bottom: 25rpx;
			 border-left:5rpx solid #0081FF;
			 padding-left: 10rpx;
			 color:#000;
			 font-size:30rpx;
			 font-weight: 600;
			 display: flex;
			 flex-direction: row;
			
			 
			 .hand-input{
			 	  color:blue;
				  font-size:20rpx;
				   font-weight: 300;
				   margin-right:10% ;
			 }
	}
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
	
	
	.blue-btn{
		background-color: #157cec;
		color:#fff;
	}
	
	.name{
			 color:#000;
			 width:30%;
	}
	
	
	.text-blue1{
		color:#429bff;
	}
	
	.person-nums{
			  color:#8e8e8e ;
			  margin-top:10rpx;
			  display: flex;
			  flex-direction: row;
			  justify-content: space-between;
			  .cellphone{
				  margin-right:20rpx;
			  }
	}
	
	.sm-icon{
			 width:40rpx;
			 height:40rpx;
	}
	
	
	
	/* ==================
	         表单
	 ==================== */
	
	.cu-form-group {
		background-color: #ffffff;
		padding: 1upx 30upx;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
	
	.cu-form-group+.cu-form-group {
		//border-top: 1upx solid #eee;
	}
	
	.cu-form-group .title {
		text-align: justify;
		padding-right: 30upx;
		font-size: 30upx;
		position: relative;
		height: 60upx;
		line-height: 60upx;
	}
	
	.cu-form-group input {
		flex: 1;
		font-size: 30upx;
		color: #555;
		padding-right: 20upx;
	}
	
	.cu-form-group>text[class*="cuIcon-"] {
		font-size: 36upx;
		padding: 0;
		box-sizing: border-box;
	}
	
	.cu-form-group textarea {
		margin: 32upx 0 30upx;
		height: 4.6em;
		width: 100%;
		line-height: 1.2em;
		flex: 1;
		font-size: 28upx;
		padding: 0;
	}
	
	.cu-form-group.align-start .title {
		height: 1em;
		margin-top: 32upx;
		line-height: 1em;
	}
	
	.cu-form-group picker {
		flex: 1;
		padding-right: 40upx;
		overflow: hidden;
		position: relative;
	}
	
	.cu-form-group picker .picker {
		line-height: 100upx;
		font-size: 28upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 100%;
		text-align: right;
	}
	
	.cu-form-group picker::after {
		font-family: cuIcon;
		display: block;
		content: "\e6a3";
		position: absolute;
		font-size: 34upx;
		color: #8799a3;
		line-height: 100upx;
		width: 60upx;
		text-align: center;
		top: 0;
		bottom: 0;
		right: -20upx;
		margin: auto;
	}
	
	.cu-form-group textarea[disabled],
	.cu-form-group textarea[disabled] .placeholder {
		color: transparent;
	}
	
	/*保证picker正常 ，勿删*/
	.cu-form-group picker::after {
	    display: none;  
	} 
	
	.picker-view{
		   color:#222;
		   width:calc(100vw - 380rpx);
	}
	
	.no-use-more{
				  color:#0081FF;
				  margin-right:10rpx;
				  font-size:30rpx;
	}
	.cell{
		   margin-right: 10rpx;
		   margin-left: 20rpx;
	}
	.truck-type{
		  display: flex;
		  flex-direction: row;
	}
	
	.page{
		padding-bottom: 20rpx;
		background-color: #f1f1f1;
	}
	
	.bg-gradual-blue {
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #ffffff;
	}
	
	.justify-center{
		justify-content: center;
	}
	
	.cell-flex{
		display: flex;
		flex-direction: row;
		margin-right: 20rpx;
	}
	
	.margin-left{
		margin-top:50rpx;
		margin-left: 2%;
		margin-right: 4%;
	}
	
	.a-line{
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #d2d2d2;
	}
	
	.xm-icon{
		width:25rpx;
		height:25rpx;
	}
	
	.image-frame{
		display: flex;
		justify-content: flex-end;
	}
	
	.make-flex{
		display: flex;
		flex-direction: row;
		
	}
	
	.chosen-label{
		display: flex;
		flex-direction:column;
		.label-one-row{
			margin-top: 5rpx;
			text{
				font-size: 30rpx;
				margin-left:10rpx;
			}
		}
		
		.label-length-row{
			margin-top: 5rpx;
			text{
				font-size: 30rpx;
				margin-left:20rpx;
			}
		}
	}
</style>
