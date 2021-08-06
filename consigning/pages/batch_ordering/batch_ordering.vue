<template>
	<view class="page">
	  <form @submit="formSubmit" method="post" enctype="multipart/form-data" >
		 
		  
		 <view class="current-state margin-top">
		 		<text >收发地</text>
		 </view> 
			
		<view class="cu-form-group margin-top" @click="goSelectConsignorContact" >
			
			<view class="name">发货联系人<text class="red">*</text></view>
                
			     <view class="person-nums">
			       <view v-if ="has_consignor_contact">
				        <view> {{consignor_contact_choosen}}</view>
				   </view>
			        <view v-if ="!has_consignor_contact" class="cellphone">请选择发货联系人</view>
			     </view>
				 <view><image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image></view>
		</view> 
		
		<view class="cu-form-group margin-top" @click="goSelectConsignorContact" v-if ="has_consignor_contact">
			<!-- 发货人电话 -->
			<view class="name"><image src="/static/phone-new.png" mode="widthFix" class="sm-icon" ></view>
		        
			     <view class="person-nums">
			       <view v-if ="has_consignor_contact">
				       
						 <view> 
						 
						 <text>{{consignor_contact_phone}}</text> 
						 </view>
				   </view>
			        <view v-if ="!has_consignor_contact" class="cellphone">请选择发货联系人</view>
			     </view>
				 <view></image></view>
		</view> 
		
		
		<view class="cu-form-group margin-top" @click="goSelectConsignorContact" v-if ="has_consignor_contact" >
			<!-- 发货人地址 -->
			<view class="name"><image src="/static/positioning.png" mode="widthFix" class="sm-icon" ></view>
		        
			     <view class="person-nums">
			       <view v-if ="has_consignor_contact">
				       
						 <view> {{consignor_contact_address}}</view>
				   </view>
			        <view v-if ="!has_consignor_contact" class="cellphone">请选择发货联系人</view>
			     </view>
				 <view></view>
		</view> 
		
		<view class="cu-form-group margin-top justify-center" >
			<image src="/static/downward.svg" mode="widthFix" class="sm-icon" >
		</view>
		
		<view class="cu-form-group" @click="goSelectConsigneeContact"  >
			<view class="name">收货联系人 <text class="red">*</text></view>
			
			<view class="person-nums">
			  <text v-if ="has_consignee_contact">{{consignee_contact_choosen}}</text>
			   <text v-if ="!has_consignee_contact" class="cellphone">请选择收货联系人</text>
			</view>
			<view><image src="/static/aui-icon-right.svg" mode="widthFix" class="sm-icon" ></image></view>
		</view>
		
		<view class="cu-form-group margin-top" @click="goSelectConsigneeContact" v-if ="has_consignee_contact">
			<!-- 收货人电话 -->
			<view class="name"><image src="/static/phone-new.png" mode="widthFix" class="sm-icon" ></view>
		        
			     <view class="person-nums">
			       <view v-if ="has_consignee_contact">
				       
						 <view> 
						 
						 <text>{{consignee_contact_phone}}</text> 
						 </view>
				   </view>
			        <view v-if ="!has_consignee_contact" class="cellphone">请选择收货联系人</view>
			     </view>
				 <view></image></view>
		</view> 
		
		<view class="cu-form-group margin-top" @click="goSelectConsigneeContact" v-if ="has_consignee_contact" >
			<!-- 收货人地址 -->
			<view class="name"><image src="/static/positioning.png" mode="widthFix" class="sm-icon" ></view>
		        
			     <view class="person-nums">
			       <view v-if ="has_consignee_contact">
				       
						 <view> {{consignee_contact_address}}</view>
				   </view>
			        <view v-if ="!has_consignee_contact" class="cellphone">请选择收货联系人</view>
			     </view>
				 <view></view>
		</view> 
		
		<view class="current-state margin-top">
				<text >货物详情</text>
		</view>
		
		
		<view class="cu-form-group margin-top"  >
			<text class="name">货物名称<text class="red">*</text></text>
			
					<input type="text" maxlength="16"  placeholder="请输入货物名称" 
					  selection-start="-1" selection-end="-1" cursor="-1" :value="goodsName"
						   @input="getGoodsName" >
					
				
		</view>
		
		<view class="cu-form-group"  >
			<text class="name">货物重量(吨)<text class="red">*</text></text>
			 <input type="digit" maxlength="16"  name="password" placeholder="请输入货物重量" 
			 selection-start="-1" selection-end="-1" cursor="-1" :value="goodsWeight"
			  @input="getGoodsWeight"  >
		</view>
		
		
		
		<view class="cu-form-group"  >
			<text class="name">货物分类 <text class="red">*</text></text>
			
		     <picker @change="bindPickerGoodsTypeChange" :value="goods_type_index" :range="goods_type_list">
		                           <view class="picker-view text-lg">{{goods_type_list[goods_type_index]}}</view>
		      </picker>
		</view>
		
		<view class="cu-form-group" >
			<text class="name">货物件数</text>
			<input type="text" maxlength="16" name="password"  
			placeholder="请输入货物件数" :value="packageNumber"
			 selection-start="-1" selection-end="-1" cursor="-1"    @input="getPackageNumber">
			
		</view>
		
		<view class="cu-form-group" >
			<text class="name">包装类型<text class="red">*</text></text>
			<picker @change="bindPickerPackageTypeChange" :value="package_type_index" :range="package_type_list">
			                      <view class="picker-view text-lg">{{package_type_list[package_type_index]}}</view>
			 </picker>
			
		</view>
		
		
		<view class="current-state margin-top">
				<text >运载工具要求</text>
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">车型选择</text>
			    <checkbox-group  @change="checkboxCargoBoxTypeChange" class="to-center" >
			                   <label  v-for="item in cargoBoxTypeOptions" class="every-choice" :key="item.dictValue">
			                        <view >
			                           <checkbox :value="item.dictValue" :checked="item.checked" />
			                        </view>
			                       <view >{{item.dictLabel}}</view>
			                   </label>
			               </checkbox-group>
		</view>
		
		<view class="cu-form-group margin-top" >
			<text class="name">车长选择</text>
			    <checkbox-group @change="checkboxVehicleLengthsChange" class="to-center">
			                   <label  v-for="item in vehicleLengthOptions" class="every-choice" :key="item.dictValue">
			                        <view>
			                           <checkbox :value="item.dictValue" :checked="item.checked" />
			                        </view>
			                       <view>{{item.dictLabel}}</view>
			                   </label>
			               </checkbox-group>
		</view>
		
		<view class="current-state margin-top">
				<text >时间要求</text>
		</view>
		
		<view class="cu-form-group" >
			<text class="title-name">装货开始（日期）<text class="red">*</text></text>
			<!-- 日期 -->
			<view>
				 <picker  mode="date"  :value="assignSendTimeDate"   :end="endDate" @change="bindDateChange" data-index="assignSendTimeDate">
				      <view class="picker-view text-lg">
					  <text :class="{transparent :!assignSendTimeDate_has_input}">{{assignSendTimeDate}}</text>
					  <text v-if ="!assignSendTimeDate_has_input">（请选择）</text>
					  <text v-if="assignSendTimeDate_has_input">（已选择）</text>
					  </view>
				 </picker>
				
			</view>
		</view>
		
		<view class="cu-form-group" >
			<text class="title-name">装货开始（时刻）<text class="red">*</text></text>
			
			<view>
				<picker mode="time" :value="assignSendTimeTime" start="00:00" end="23:59" @change="bindTimeChange" data-index="assignSendTimeTime">
				       <view class="picker-view text-lg">
					   <text :class="{transparent :!assignSendTimeTime_has_input}">{{assignSendTimeTime}}</text>
					   <text v-if ="!assignSendTimeTime_has_input">（请选择）</text>
					   <text v-if="assignSendTimeTime_has_input">（已选择）</text>
					   </view>
				</picker>
			</view>
		</view>
		
		<view class="cu-form-group" >
			<text class="title-name">装货截止（日期）<text class="red">*</text></text>
			<!-- 日期 -->
			<view >
				 <picker  mode="date"  :value="assignEndTimeDate"   :end="endDate" @change="bindDateChange" data-index="assignEndTimeDate">
				      <view class="picker-view text-lg">
					   <text :class="{transparent :!assignEndTimeDate_has_input}">{{assignEndTimeDate}}</text>
					   <text v-if ="!assignEndTimeDate_has_input">（请选择）</text>
					    <text v-if="assignEndTimeDate_has_input">（已选择）</text>
					   </view>
				 </picker>
			</view>
			
		</view>
		
		<view class="cu-form-group" >
			<text class="title-name">装货截止（时间）<text class="red">*</text></text>
			<!-- 时刻 -->  
			<view>
				 <picker mode="time"  :value="assignEndTimeTime" start="00:00"   end="23:59" @change="bindTimeChange" data-index="assignEndTimeTime">
				      <view class="picker-view text-lg">
					        <text :class="{transparent :!assignEndTimeTime_has_input}">{{assignEndTimeTime}}</text>
					        <text v-if ="!assignEndTimeTime_has_input">（请选择）</text>
					         <text v-if="assignEndTimeTime_has_input">（已选择）</text>
					  </view>
					  
				 </picker>
			</view>
			
		</view>
		
		<view class="current-state margin-top">
				<text>结算方式</text>
		</view>
		
		<view class="cu-form-group margin-top"  >
			<text class="name">计价方式<text class="red">*</text></text>
					<input type="text" maxlength="16"  placeholder="元/吨" 
					  selection-start="-1" selection-end="-1" cursor="-1" disabled
						    />
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">运费单价(元)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="运费单价不能小于0" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="unitPrice"	   @input="getUnitPrice" >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">运费金额(元)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="请输入运费金额" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="consignorRates"	   @input="getConsignorRates" >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">货值单价(元/吨)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="请输入货值单价(元/吨)" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="goodsUnitPrice"	   @input="getGoodsUnitPrice"  >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">整车货值(元)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="请输入整车货值(元)" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="goodsFee"	   @input="getGoodsFee" >
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
			:value="customNumber"  @input="getCustomNumber" >
		</view>
		
		<view class="cu-form-group"  >
			<text class="name">摘单咨询电话</text>
			 <input type="number" maxlength="16"   placeholder="请输入摘单咨询电话" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="pickMonadPhone"  @input="getPickMonadPhone" >
		</view>
		
		
		<view class="cu-form-group"  >
			<text class="name">结算咨询电话</text>
			 <input type="number" maxlength="16"   placeholder="请输入结算咨询电话" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="settlementPhone"  @input="getSettlementPhone" >
		</view>
		
		<view class="cu-form-group">
					     <view class="name">发单数</view>
					     <view class="ref-name">
										 <uni-number-box class="picker-view text-lg"
										  :min="1" :max="99" @change="getSourceQuantity" v-model = "sourceQuantity"></uni-number-box>
							 
						 </view>
		</view>
		
		<view class="cu-form-group">
					     <view class="name">是否指定承运人</view>
					     <view class="ref-name">
										<radio-group class="truck-type" @change="radioAssignCarrierChange">
										                <label class="cell-flex" v-for="(item, index) in assign_carrier_items" 
																:key="item.value">
										                    <view>
										                        <radio :value="item.value" :checked="index === assign_carrier_current" />
										                    </view>
										                    <view>{{item.name}}</view>
										                </label>
										 </radio-group>
						 </view>
		</view>
		
		<view class="cu-form-group" v-if="show_carrier_selections" >
			<text class="name">选择承运人<text class="red">*</text></text>
			<input type="text" maxlength="16"   placeholder="请输入承运人名称" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="carrier"  @input="getCarrierName" >
		</view>	
		
		<view class="cu-form-group" v-if="show_carrier_hint"  @click="inputCarrier">
			<text class="hint-name">可选择承运人提示</text>
		     <text class="hint-name" >{{carrier_hint}}</text>
		</view>	
		
		<view class="cu-form-group">
		<checkbox-group @change.prevent="checkboxChange" >
		  <label class="acuerdo">
			<checkbox :checked="checked"/>
				<view >
					保存为常用货源
				</view>
			</label>  
		</checkbox-group>
		</view>
		
		<view class="btn-row">
			           
							 <button class="next-btn bg-gradual-green round"
							 @click="backward">关闭</button> 
							 
							 <button class="next-btn round" :class="{'bg-gradual-green':active}"
							 :disabled="disabled" v-if="show_btn"
							  form-type="submit">提交</button>
							  
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
				
				
				form:"",
				//是否显示下单方式
				showOrderType:true,
				
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
				 
				 //车长字典
				 vehicleLengthOptions: [],
				
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
				
				show_carrier_selections:false,
				
				show_carrier_hint:false,
				carrier_hint:"",
					
				carrier:"",	
				
				specifyCarrierId:null,	
					   
				active:false,
				checked:false,
				disabled:false,
				
				//是否显示“草稿”和“提交”按钮
				show_btn:true,
				
				params:{
					
				},		
				
			}
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
			
			
			//发货联系人
			let consignor_contact = uni.getStorageSync("consignor_contact")
			consignor_contact=JSON.parse(consignor_contact)
			
			if (consignor_contact){
				this.consignor_contact_choosen =consignor_contact.shipperName
				this.consignor_contact_id = consignor_contact.shipperId
			
				this.consignor_contact_address = consignor_contact.shipperAddress
				this.consignor_contact_phone = consignor_contact.shipperPhone
				
				this.params.shipperId = this.consignor_contact_id
				this.has_consignor_contact = true
			}else{
				this.has_consignor_contact = false//尚未选择发货联系人
			}
			
			
			//收货联系人
			 let consignee_contact = uni.getStorageSync("consignee_contact")
			 consignee_contact=JSON.parse(consignee_contact)
			 
			 if (consignee_contact){
			 	this.consignee_contact_choosen =consignee_contact.consigneeName
			 	this.consignee_contact_id = consignee_contact.consigneeId
			 	this.consignee_contact_address = consignee_contact.consigneeAddress
			 	this.consignee_contact_phone = consignee_contact.consigneePhone
			 	
				this.params.consigneeId = this.consignee_contact_id
			 	this.has_consignee_contact = true
			 }else{
			 	this.has_consignee_contact = false//尚未选择收货联系人
			 }
			
							
			
			
			
		},
		props:["index_key"],
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
					
					//计价方式 (多选)
					this.show_multi_choice= true
					//计价方式 (包车)
					this.show_whole_car= false 
				}else if (e.target.value=="2"){
					
					//计价方式 (多选)
					this.show_multi_choice= false  
					//计价方式 (包车)
					this.show_whole_car= true
				}
			},	
										
			 // 货物分类字典
			async getGoodsTypeOptions(){
				
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
					
					
			},
			
			// 包装类型字典
			async getPackageTypeOptions(){
				
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
					
					
					
			},
			
			
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_cargo_box_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 this.cargoBoxTypeOptions = res.data.data
				
					
			},
			
			//车长字典
			async getVehicleLengthOptions(){
				
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
					url:"/pages/select_consignor_contact/select_consignor_contact"
				})
				
			},
			
			
			goSelectConsigneeContact(){
				
				uni.navigateTo({
					url:"/pages/select_consignee_contact/select_consignee_contact"
				})
				
			},
			getGoodsName(e){
				             this.goodsName = e.target.value
							this.params.goodsName = e.target.value
							
						},
			getGoodsWeight(e){
				             this.goodsWeight = e.target.value
							this.params.goodsWeight = e.target.value
							this.params.remainingGoodsWeight = e.target.value
							
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
						
							this.params.cargoBoxType = values
			            
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
							
							this.params.vehicleLengths = values
			            
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
													 this.params.assignSendTime =  this.assignSendTime
													  
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
			
			
			
			
			//承运人
			 getCarrierName(e){
				var that = this
				this.carrier = e.target.value
				const carrierName = this.carrier
			
				var authorization = uni.getStorageSync("token")
				
				uni.request({
				    url: 'http://10.22.2.138:8080/app/carrier/getCarrierByCarrierName/'+carrierName,
				   
				    header:{
				   	  Authorization:authorization,
				     },
				    success: (res) => {
				      
						if (res.data.code=="200"){
							that.show_carrier_hint = true
							
							that.carrier_hint = res.data.data[0].carrierName 
							+ "   " +  res.data.data[0].carrierContactsPhone 
							
							that.params.specifyCarrierId = res.data.data[0].carrierId
							that.params.specifyCarrierName = res.data.data[0].carrierName
						}else{
							that.show_carrier_hint = false
						}
				    }
				});
				
				
			},
			
			inputCarrier(){
				
				this.carrier = this.carrier_hint
				this.show_carrier_hint = false
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
						
			sendDefault(e){
				//指定下单方式
				this.params.orderWay = 3
				
				//进行货物分类检查,默认值
				if (this.params.goodsType == null || this.params.goodsType==""||this.params.goodsType.length <1){
						this.params.goodsType = "1700"					
				} 
				
				//进行包装类型检查,默认值
				if (this.params.packageType == null || this.params.packageType==""||this.params.packageType.length <1){
						this.params.packageType = "OT"				
				} 
				
				//进行货物件数检查,默认值
				if (this.params.packageNumber == null || this.params.packageNumber ==""||this.params.packageNumber.length <1){
						this.params.packageNumber = 1				
				}
				 
				 //进行车型选择检查,默认值
				 if (this.params.cargoBoxType == null || this.params.cargoBoxType ==""||this.params.cargoBoxType.length <1){
				 		this.params.cargoBoxType = []				
				 } 
				 
				 //进行车长选择检查,默认值
				 if (this.params.vehicleLengths == null || this.params.vehicleLengths ==""||this.params.vehicleLengths.length <1){
				 		this.params.vehicleLengths = []				
				 } 
				 
				 //进行自定义单号检查,默认值
				 if (this.params.customNumber == null || this.params.customNumber ==""||this.params.customNumber.length <1){
				 		this.params.customNumber = ""				
				 } 
				 
				 //进行摘单联系电话检查,默认值
				 if (this.params.pickMonadPhone == null || this.params.pickMonadPhone ==""||this.params.pickMonadPhone.length <1){
				 		this.params.pickMonadPhone = ""				
				 } 
				 
				 //进行结算咨询电话检查,默认值
				 if (this.params.settlementPhone == null || this.params.settlementPhone ==""||this.params.settlementPhone.length <1){
				 		this.params.settlementPhone = ""				
				 } 
				 
				
				
				//进行计价方式检查,默认值
				if (this.params.settlementMethod == null || this.params.settlementMethod ==""||this.params.settlementMethod.length <1){
						//计价方式 (元/吨)
						if (this.show_yuan_ton=true){
							this.params.settlementMethod =  "2"
						}
						//计价方式 (多选)
						if (this.show_multi_choice=false){
							this.params.settlementMethod =  "2"
						}
						//计价方式 (包车)
						if (this.show_whole_car=false){
							this.params.settlementMethod = "1"
						}						
				}
				//进行发单数检查,默认值
				if (this.params.sourceQuantity == null || this.params.sourceQuantity==""||this.params.sourceQuantity.length <1){
					
					this.params.sourceQuantity = "1"
													
				} 
				//进行是否指定承运人检查,默认值
				if (this.params.specifyCarrierStatus == null || this.params.specifyCarrierStatus==""||this.params.specifyCarrierStatus.length <1){
					
					this.params.specifyCarrierStatus = "1"
				 										
				} 
				
				//进行是否保存为货源模板检查,默认值
				if (this.params.isTemplate == null || this.params.isTemplate==""||this.params.isTemplate.length <1){
					
					this.params.isTemplate = false
				 										
				} 
			},
			//后退
			backward(){
				
					uni.switchTab({
						url:"/pages/choose_order_type/choose_order_type"
					})
						
			},
			makeDraft(e){
				//如果不选择，传入默认值
				this.sendDefault()
				this.params.sourceStatus = 0
				uni.setStorageSync('draft',this.params)
				this.formSubmit()
			},						
			formSubmit:async function(e) {
										console.log(this.params,'14555')
						               
									    //如果不选择，传入默认值
									    this.sendDefault()
										
										//保存为草稿状态该属性传空,正常下单传10,具体参考业务状态常量
										this.params.sourceStatus = 10
										
										//进行货物名称检查
										if (this.params.goodsName == null || this.params.goodsName==""||this.params.goodsName.length <1){
											uni.showToast({
												title:"未输入货物名称, 请输入",
												icon:"none"
											})
											return									
										} 
										
										//进行货物重量检查
										if (this.params.goodsWeight == null || this.params.goodsWeight==""||this.params.goodsWeight.length <1){
											uni.showToast({
												title:"未输入货物重量, 请输入",
												icon:"none"
											})
											return									
										} 
										
										//进行装货开始日期检查
										if (this.params.assignSendTimeDate == null || this.params.assignSendTimeDate ==""||this.params.assignSendTimeDate.length <1){
											uni.showToast({
												title:"未输入装货开始日期, 请输入",
												icon:"none"
											})
											return									
										}
										
										//进行装货开始时刻检查
										if (this.params.assignSendTimeTime == null || this.params.assignSendTimeTime ==""||this.params.assignSendTimeTime.length <1){
											uni.showToast({
												title:"未输入装货开始时刻, 请输入",
												icon:"none"
											})
											return									
										}
										
										//进行装货截止日期检查
										if (this.params.assignEndTimeDate == null || this.params.assignEndTimeDate ==""||this.params.assignEndTimeDate.length <1){
											uni.showToast({
												title:"未输入装货截止日期, 请输入",
												icon:"none"
											})
											return									
										}
										
										//进行装货截止时刻检查
										if (this.params.assignEndTimeTime == null || this.params.assignEndTimeTime ==""||this.params.assignEndTimeTime.length <1){
											uni.showToast({
												title:"未输入装货截止时刻, 请输入",
												icon:"none"
											})
											return									
										}
										
										//装货开始时间不能晚于装货截止时间
										if (Date.parse(this.params.assignSendTime)> Date.parse(this.params.assignEndTime)){
																								  uni.showToast({
																								  	title:"装货截止时间不能早于装货开始时间",
																								  	icon:"none"
																								  })
																								  return
																					}
										
										//进行运费单价检查
										if (this.params.unitPrice == null || this.params.unitPrice==""||this.params.unitPrice.length <1){
											uni.showToast({
												title:"未输入运费单价, 请输入",
												icon:"none"
											})
											return									
										}
										
										//进行货值单价检查
										if (this.params.goodsUnitPrice == null || this.params.goodsUnitPrice==""||this.params.goodsUnitPrice.length <1){
											uni.showToast({
												title:"未输入货值单价, 请输入",
												icon:"none"
											})
											return									
										}
										
										//进行整车货值检查
										if (this.params.goodsFee == null || this.params.goodsFee==""||this.params.goodsFee.length <1){
											uni.showToast({
												title:"未输入整车货值, 请输入",
												icon:"none"
											})
											return									
										}
										
										
										
										var authorization = uni.getStorageSync("token")
										
										
										
										let form = this.params
										console.log(form,'form');
										
										//if show_carrier_selections, send the specify Carrier ID, otherwise not sending
										if(this.show_carrier_selections){
											const res = await this.$request({
																						url:"/app/source/add",
																						method: "POST",
																						
																						header:{
																							Authorization:authorization,
																							"Content-Type": "multipart/form-data; boundary=XXX"
																						},
																						data:'\r\n--XXX' +
											 '\r\nContent-Disposition: form-data; name="shipperId"' +
											 '\r\n' +
											 '\r\n' + this.params.shipperId +
											 '\r\n--XXX' +
											 '\r\nContent-Disposition: form-data; name="consigneeId"' +
													 '\r\n' +
											 '\r\n' + this.params.consigneeId +
											'\r\n--XXX' +
													 '\r\nContent-Disposition: form-data; name="cargoBoxType"' +
													  '\r\n' +
													 '\r\n' + this.params.cargoBoxType +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="isTemplate"' +
													 '\r\n' +
													'\r\n' + this.params.isTemplate +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="vehicleLengths"' +
													 '\r\n' +
													'\r\n' + this.params.vehicleLengths +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="sourceStatus"' +
													 '\r\n' +
													'\r\n' + this.params.sourceStatus +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="goodsName"' +
													 '\r\n' +
													'\r\n' + this.params.goodsName +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="goodsType"' +
													 '\r\n' +
													'\r\n' + this.params.goodsType +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="goodsWeight"' +
													 '\r\n' +
													'\r\n' + this.params.goodsWeight +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="packageNumber"' +
													 '\r\n' +
													'\r\n' + this.params.packageNumber +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="packageType"' +
													 '\r\n' +
													'\r\n' + this.params.packageType +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="consignorRates"' +
													 '\r\n' +
													'\r\n' + this.params.consignorRates +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="assignSendTime"' +
													 '\r\n' +
													'\r\n' + this.params.assignSendTime +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="assignEndTime"' +
													 '\r\n' +
													'\r\n' + this.params.assignEndTime +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="customNumber"' +
													 '\r\n' +
													'\r\n' + this.params.customNumber +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="pickMonadPhone"' +
													 '\r\n' +
													'\r\n' + this.params.pickMonadPhone +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="settlementPhone"' +
													 '\r\n' +
													'\r\n' + this.params.settlementPhone +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="settlementMethod"' +
													 '\r\n' +
													'\r\n' + this.params.settlementMethod +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="unitPrice"' +
													 '\r\n' +
													'\r\n' + this.params.unitPrice +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="sourceQuantity"' +
													 '\r\n' +
													'\r\n' + this.params.sourceQuantity +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="orderWay"' +
													 '\r\n' +
													'\r\n' + this.params.orderWay +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="remainingGoodsWeight"' +
													 '\r\n' +
													'\r\n' + this.params.remainingGoodsWeight +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="specifyCarrierStatus"' +
													 '\r\n' +
													'\r\n' + this.params.specifyCarrierStatus +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="specifyCarrierId"' +
													 '\r\n' +
													'\r\n' + this.params.specifyCarrierId +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="goodsUnitPrice"' +
													 '\r\n' +
													'\r\n' + this.params.goodsUnitPrice +
													'\r\n--XXX' +
													'\r\nContent-Disposition: form-data; name="goodsFee"' +
													 '\r\n' +
													'\r\n' + this.params.goodsFee +
													'\r\n--XXX--' 
																						
																					})
										}else{
											      
												const res = await this.$request({
																							url:"/app/source/add",
																							method: "POST",
																							
																							header:{
																								Authorization:authorization,
																								"Content-Type": "multipart/form-data; boundary=XXX"
																							},
																							data:'\r\n--XXX' +
												 '\r\nContent-Disposition: form-data; name="shipperId"' +
												 '\r\n' +
												 '\r\n' + this.params.shipperId +
												 '\r\n--XXX' +
												 '\r\nContent-Disposition: form-data; name="consigneeId"' +
														 '\r\n' +
												 '\r\n' + this.params.consigneeId +
												'\r\n--XXX' +
														 '\r\nContent-Disposition: form-data; name="cargoBoxType"' +
														  '\r\n' +
														 '\r\n' + this.params.cargoBoxType +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="isTemplate"' +
														 '\r\n' +
														'\r\n' + this.params.isTemplate +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="vehicleLengths"' +
														 '\r\n' +
														'\r\n' + this.params.vehicleLengths +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="sourceStatus"' +
														 '\r\n' +
														'\r\n' + this.params.sourceStatus +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="goodsName"' +
														 '\r\n' +
														'\r\n' + this.params.goodsName +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="goodsType"' +
														 '\r\n' +
														'\r\n' + this.params.goodsType +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="goodsWeight"' +
														 '\r\n' +
														'\r\n' + this.params.goodsWeight +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="packageNumber"' +
														 '\r\n' +
														'\r\n' + this.params.packageNumber +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="packageType"' +
														 '\r\n' +
														'\r\n' + this.params.packageType +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="consignorRates"' +
														 '\r\n' +
														'\r\n' + this.params.consignorRates +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="assignSendTime"' +
														 '\r\n' +
														'\r\n' + this.params.assignSendTime +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="assignEndTime"' +
														 '\r\n' +
														'\r\n' + this.params.assignEndTime +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="customNumber"' +
														 '\r\n' +
														'\r\n' + this.params.customNumber +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="pickMonadPhone"' +
														 '\r\n' +
														'\r\n' + this.params.pickMonadPhone +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="settlementPhone"' +
														 '\r\n' +
														'\r\n' + this.params.settlementPhone +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="settlementMethod"' +
														 '\r\n' +
														'\r\n' + this.params.settlementMethod +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="unitPrice"' +
														 '\r\n' +
														'\r\n' + this.params.unitPrice +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="sourceQuantity"' +
														 '\r\n' +
														'\r\n' + this.params.sourceQuantity +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="orderWay"' +
														 '\r\n' +
														'\r\n' + this.params.orderWay +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="remainingGoodsWeight"' +
														 '\r\n' +
														'\r\n' + this.params.remainingGoodsWeight +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="specifyCarrierStatus"' +
														 '\r\n' +
														'\r\n' + this.params.specifyCarrierStatus +
														'\r\n--XXX' +
														// '\r\nContent-Disposition: form-data; name="specifyCarrierId"' +
														//  '\r\n' +
														// '\r\n' + this.params.specifyCarrierId +
														//'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="goodsUnitPrice"' +
														 '\r\n' +
														'\r\n' + this.params.goodsUnitPrice +
														'\r\n--XXX' +
														'\r\nContent-Disposition: form-data; name="goodsFee"' +
														 '\r\n' +
														'\r\n' + this.params.goodsFee +
														'\r\n--XXX--' 
																							
																						})  
												  
										}
										
										
										
										uni.showToast({
											title:"提交成功！"
										})
										
										
										try {
										    uni.removeStorageSync('consignor_contact');
											 uni.removeStorageSync('consignee_contact');
										} catch (e) {
										    // error
										}
										
										
										 uni.switchTab({
											                       //此处必须用相对路径，保证刷新
										                            url: '../choose_order_type/choose_order_type',
										                            success: function (res) {
										                              var page = getCurrentPages().pop();
										                              if (page == undefined || page == null) return;
										                              page.onShow();
										                              
										                              
										                            },
										                            
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
			 border-left:5rpx solid green;
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
	
	
	
	.name{
			 color:#000;
			 width:30%;
	}
	
	.title-name{
			 color:#000;
			 width:50%;
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
	
	.transparent{
		     color:transparent;
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
	
	.hint-name{
		color:#ccc
	}
	
	
	
	
	.margin-right{
		margin-right: 20rpx;
	}
	
	.to-center{
		margin-left:20rpx;
		display: flex;
		flex-direction: row;
		font-size: 30rpx;
	}
	
	.every-choice{
		border-left:1rpx dashed #007AFF;
		padding-left: 5rpx;
	}
</style>
