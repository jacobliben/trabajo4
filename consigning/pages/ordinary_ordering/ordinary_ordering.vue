<template>
	<view class="page">
	  <form @submit="formSubmit" method="post" enctype="multipart/form-data" >
		  <view class="cu-form-group margin-top" v-if="showOrderType" >
		  	
		  	<view class="name">下单方式<text class="red">*</text></view>
		    
			<view class="ref-name">
													<radio-group class="truck-type" @change="radioSourceOrderWayChange">
													                <label class="cell-flex" v-for="(item, index) in sourceOrderWayOptions" 
																			:key="item.dictValue">
													                    <view>
																			
													                        <radio :value="item.dictValue" :checked="index === sourceOrderWay_current" />
													                    </view>
													                    <view>{{item.dictLabel}}</view>
													                </label>
													 </radio-group>
			</view>	  
		  	    
		  </view> 
		  
		  
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
			        <view v-if ="!has_consignee_contact" class="cellphone">请选择发货联系人</view>
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
			        <view v-if ="!has_consignee_contact" class="cellphone">请选择发货联系人</view>
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
		
		<view class="cu-form-group margin-top"  style="width:60%;">
			<text class="name">车型选择</text>
			    <checkbox-group @change="checkboxCargoBoxTypeChange">
			                   <label  v-for="item in cargoBoxTypeOptions" :key="item.dictValue">
			                        <view>
			                           <checkbox :value="item.dictValue" :checked="item.checked" />
			                        </view>
			                       <view>{{item.dictLabel}}</view>
			                   </label>
			               </checkbox-group>
		</view>
		
		<view class="cu-form-group margin-top"  style="width:60%;">
			<text class="name">车长选择</text>
			    <checkbox-group @change="checkboxVehicleLengthsChange">
			                   <label  v-for="item in vehicleLengthOptions" :key="item.dictValue">
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
					<picker @change="bindPickerSettlementTypeChange" :value="settlement_type_index" :range="sourceSettlementMethodOptions" v-if="show_multi_choice">
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
					:value="unitPrice"	   @input="getUnitPrice" >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">运费金额(元)<text class="red">*</text></text>
					<input type="digit" maxlength="10"  placeholder="请输入运费金额" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="consignorRates"	   @input="getConsignorRates" >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">货值单价(元/吨)</text>
					<input type="digit" maxlength="10"  placeholder="请输入货值单价(元/吨)" 
					  selection-start="-1" selection-end="-1" cursor="-1" 
					:value="goodsUnitPrice"	   @input="getGoodsUnitPrice"  >
		</view>
		
		<view class="cu-form-group margin-top">
			<text class="name">整车货值(元)</text>
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
			 <input type="number" maxlength="16"   placeholder="请输入承运人名称,证件号或手机号" 
			 selection-start="-1" selection-end="-1" cursor="-1"
			:value="pickMonadPhone"  @input="getPickMonadPhone" >
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
			             <button class="next-btn bg-gradual-blue round" v-if="show_btn"
			                @click="makeDraft">草稿</button> 
							 <button class="next-btn round" :class="{'bg-gradual-green':active}"
							 :disabled="disabled" v-if="show_btn"
							  form-type="submit">提交</button>
							   <button class="next-btn bg-gradual-green round" 
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
				//是否显示下单方式
				showOrderType:true,
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
						   
				active:false,
				checked:false,
				disabled:false,
				
				//是否显示“草稿”和“提交”按钮
				show_btn:true,
				
				params:{
					
				},		
				
			}
		},
		created(){
			
			
			
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
			 
			 
		   //通过前页面判断是否该显示货源单号的详情(回显)
		   let pages = getCurrentPages();//页面对象
		   console.log(pages,'dubg');
		   //如果只有1个页栈,说明是直接由index页跳转至"货源下单"
		   if (pages.length == 1) {
			   console.log(this.now_state,'985');
			   if (this.now_state.state == 0){
				   this.showOrderType = false //批量货模式下，不显示“下单方式”
				   //计价方式 (元/吨)
				   this.show_yuan_ton=true//批量货模式下
				   //计价方式 (多选)
				   this.show_multi_choice = false//批量货模式下
				   //计价方式 (包车)
				   this.show_whole_car = false//批量货模式下
			   }else if (this.now_state.state == 1){
				   this.showOrderType =true //普通货模式下
				   //计价方式 (元/吨)
				   this.show_yuan_ton= false//普通货模式下，先显示“单价”
				   //计价方式 (多选)
				   this.show_multi_choice = true//普通货模式下，先显示“单价”
				   //计价方式 (包车)
				   this.show_whole_car = false//普通货模式下，先显示“单价”
				   
			   }
		     // return 
			 //不显示任何回显
		   } 
		   
		   
		   let prevpage = pages[pages.length - 2];//上一个页面对象
		   
		   				if (prevpage.route == "pages/shipping_order/shipping_order") {
		   					
		   					 //“货源下单”里货源单号的详情(回显)
		   					this.orderSourceDetail = uni.getStorageSync("making_shipping_order_detail")
		   					
		   					
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
		   									this.assign_carrier_current =0
		   					}else if (this.specifyCarrierStatus==1){
		   									 this.assign_carrier_current =1
		   					}
		   					this.checked = this.orderSourceDetail.isTemplate
		   					
		   					
		   					
		   				} else if (prevpage.route == "pages/select_consignor_contact/select_consignor_contact") {
		   					
							//不显示回显
							
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
							 console.log( consignee_contact,'2997');
							 
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
							
							
		   				}
		   
			 
			 
			 
			 
			 
		},
		
		mounted(){
			
			const in_batch_order = uni.getStorageSync("in_batch_order")
			const in_ordinary_order = uni.getStorageSync("in_ordinary_order")
			if (in_batch_order){
				uni.setNavigationBarTitle({
					title:`批量货模式`
				})
			} else if(in_ordinary_order){
				uni.setNavigationBarTitle({
					title:`普通货模式`
				})
			
			}
			
			//通过前页面判断是否该显示“草稿”和“提交”按钮
			let pages = getCurrentPages();//页面对象
			let prevpage = pages[pages.length - 2];//上一个页面对象
			console.log( prevpage.route,'8755')//上一个页面路由地址
							if (prevpage.route == "pages/shipping_order/shipping_order") {
								this.show_btn = false
							} else if (prevpage.route == "pages/index/index"){
								this.show_btn = true
							}
			
			
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
				console.log(e.target.value,'aq');
				
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
					
					//通过页面层次判断是否该显示货源单号的详情(回显)
					
					let pages = getCurrentPages();//页面对象
					let prevpage = pages[pages.length - 2];//上一个页面对象
					console.log( prevpage ,'8766')//上一个页面路由地址
					
									if (prevpage.route == "pages/shipping_order/shipping_order") {
										const goodsType = this.orderSourceDetail.goodsType
										
										this.goods_type_index = this.goodsTypeSendValue.findIndex(value=>value == goodsType) 
									}
					
					
					
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
					
					
					//通过页面层次判断是否该显示货源单号的详情(回显)
					const pages = getCurrentPages();
									if (pages.length === 2) {
										const packageType = this.orderSourceDetail.packageType
										
										this.package_type_index = this.packageTypeSendValue.findIndex(value=>value == packageType) 
									}
					
					
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
					
					 console.log(res,'1111');
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
						            console.log('picker发送选择改变，携带值为货物类型', e.target.value)
						            this.goods_type_index = e.target.value
									
									var goods_type_index = this.goods_type_index
									
									 this.params.goodsType =this.goodsTypeSendValue[goods_type_index]
									 console.log (this.params.goodsType,"货物类型后台值")
									
						        },	
			
			//包装类型选择
			bindPickerPackageTypeChange(e) {
						            console.log('picker发送选择改变，携带值为货物类型', e.target.value)
						            this.package_type_index = e.target.value
									
									var package_type_index = this.package_type_index
									
									 this.params.packageType =this.packageTypeSendValue[package_type_index]
									console.log (this.params.packageType,"包装类型后台值")
									
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
							console.log(values,'er32');
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
							console.log(values,'as1232');
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
													  //装货开始总
													  // if (this.assignSendTimeDate == undefined
													  //    || this.assignSendTimeDate == null 
														 // || this.assignSendTimeDate == ""
														 // || this.assignSendTimeDate.length <1
													  // ){
														 // this.assignSendTimeDate = new Date()
													  // }
													 this.assignSendTime =  this.assignSendTimeDate +" "+  this.assignSendTimeTime
													 this.params.assignSendTime =  this.params.assignSendTimeDate +" "+  this.params.assignSendTimeTime
													  
				      								  this.assignSendTimeTime_has_input = true
													 console.log(Date.parse(this.assignSendTime),'qe'); 
				      }else if(e.currentTarget.dataset.index=="assignEndTimeTime"){
				      								  //装货截止时刻
				      								  this.assignEndTimeTime = e.target.value
				      								  this.params.assignEndTimeTime = e.target.value
													  //装货截止总
													 
													  this.assignEndTime =  this.assignEndTimeDate +" "+ this.assignEndTimeTime 
													  this.params.assignEndTime =  this.params.assignEndTimeDate +" "+ this.params.assignEndTimeTime 
				      								  this.assignEndTimeTime_has_input = true
													  
													  console.log(Date.parse(this.assignEndTime),'ke');
														  
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
						            console.log('picker发送选择改变，携带值为计价方式', e.target.value)
						            this.settlement_type_index = e.target.value
									
									var settlement_type_index = this.package_type_index
									
									 this.params.settlementMethod =this.settlementTypeSendValue[settlement_type_index]
									console.log (this.params.settlementMethod,"计价方式后台值")
									
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
						
			sendDefault(e){
				
				
				
				//进行货物分类检查,默认值
				if (this.params.goodsType == null || this.params.goodsType==""||this.params.goodsType.length <1){
						this.params.goodsType = "1700"					
				} 
				
				//进行包装类型检查,默认值
				if (this.params.packageType == null || this.params.packageType==""||this.params.packageType.length <1){
						this.params.packageType = "OT"				
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
				if (this.params.specifyCarrierStatus == null || this.params.specifyCarrierStatus==""||this.params.specifyCarrierStatus.length !=4){
					
					this.params.specifyCarrierStatus = "1"
				 										
				} 
			},
			//后退
			backward(){
				let pages = getCurrentPages();//页面对象
				
				if (pages.length == 1) {
					uni.switchTab({
						url:"/pages/choose_order_type/choose_order_type"
					})
				} 
				 
				 
				let prevpage = pages[pages.length - 2];//上一个页面对象
				console.log( prevpage.route,'8766')//上一个页面路由地址
				
				
								if (prevpage.route == "pages/shipping_order/shipping_order") {
									uni.switchTab({
										url:"/pages/shipping_order/shipping_order"
									})
								} else  {
									
									uni.switchTab({
										url: '/pages/choose_order_type/choose_order_type',
									})
								} 
								
			},
			makeDraft(e){
				//如果不选择，传入默认值
				this.sendDefault()
				
				uni.setStorageSync('draft',this.params)
			},						
			formSubmit:async function(e) {
										console.log(this.params,'14555')
						               
									   //如果不选择，传入默认值
									   this.sendDefault()
										
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
										
										//进行装货开始时间检查
										if (this.params.assignSendTime == null || this.params.assignSendTime==""||this.params.assignSendTime.length <1){
											uni.showToast({
												title:"未输入装货开始时间, 请输入",
												icon:"none"
											})
											return									
										}
										
										//进行装货截止时间检查
										if (this.params.assignEndTime == null || this.params.assignEndTime==""||this.params.assignEndTime.length <1){
											uni.showToast({
												title:"未输入装货截止时间, 请输入",
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
										
										var authorization = uni.getStorageSync("token")
										var  form = this.params
										
										const res = await this.$request({
											url:"/app/source/add",
											method: "POST",
											data:form,
											header:{
												Authorization:authorization,
												"Content-Type": "multipart/form-data;"
											},
											
										})
										console.log(res,"加司机")
										
										
										try {
										    uni.removeStorageSync('consignor_contact');
											 uni.removeStorageSync('consignee_contact');
										} catch (e) {
										    // error
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
</style>
