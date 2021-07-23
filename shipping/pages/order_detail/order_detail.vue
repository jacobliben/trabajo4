<template>
	<view class="details-body">
		<!-- #ifndef MP-WEIXIN -->
		<view class="current-state" v-if = "this.btn_title!='查阅'"><text>当前状态</text></view>
		<view v-else></view>
		
		<view class="cu-steps" v-if = "this.btn_title!='查阅'">
			<view class="cu-item text-green">
				<text :class="(this.btn_title=='发车'||this.btn_title=='签收'||this.btn_title=='查看')?'cuIcon-roundcheckfill':'cuIcon-title'">
				</text>
				待发车
			</view>
			
			<view class="cu-item " :class="(this.btn_title=='签收'||this.btn_title=='查看')?'text-green':'ordinary'">
				<text  :class="(this.btn_title=='签收'||this.btn_title=='查看')?'cuIcon-roundcheckfill':'cuIcon-title'">
				</text>
				待签收
			</view>
			
			<!-- <view class="cu-item ordinary">
				<text class="cuIcon-title">
				</text>
				待审核
			</view> -->
			
			<view class="cu-item" :class="(this.btn_title=='查看')?'text-green':'ordinary'" >
				<text  :class="(this.btn_title=='查看')?'cuIcon-roundcheckfill':'cuIcon-title'">
				</text>
				已完成
			</view>
		</view>
		<view v-else></view>
		
		
		<view v-if ="passed_info.dispatchNo =null ">
			<view class="current-state" >派车单信息</view>
			 <view class="cu-form-group"
			  @click="goWayBillDetail"
			  >
				 <view>
					 <text class="name">派车单编号</text>
				 </view>
				 <view>
				 		<text class="ref-name">{{passed_info.dispatchNo}}</text>
				 	<!--	<text class="cuIcon-right lg text-gray"></text>	 --> 
				 </view>
			 </view>
			 
			 <view class="cu-form-group" @click="goCarSendingDetail">
				 <view>
					<text class="name">派车状态</text> 
				 </view>
				 <view>
					 <text class="ref-name">{{passed_info.dispatchStatus}}</text>
					<!-- <text class="cuIcon-right lg text-gray"></text> -->
				 </view>   
			 </view>
		</view>
		<view v-else></view>
		
		 <view  v-if ="passed_info.waybillNo =null">
			 <view class="current-state">运单信息</view>
			  <view class="cu-form-group" @click="goShippingOrderNumberDetail">
			 	 <view>
			 		 <text class="name">运单编号</text>
			 	 </view>
			 	 <view>
			 		 <text class="ref-name">{{passed_info.waybillNo}}</text>
			 	 	<!-- <text class="cuIcon-right lg text-gray"></text>	 --> 
			 	 </view>    
			  </view>
			  <view class="cu-form-group">
			 	<view>
			 			 <text class="name">运单状态</text>		 
			 	</view>
			 	<view>
			 		 <text class="ref-name">待接收</text>
			 			 	<text class="cuIcon-right lg text-gray"></text>	 	 
			 	</view>    
			  </view>
		 </view>
		<view v-else></view>
		 
		 <view class="current-state">货物信息</view>
		 <view class="cu-form-group">
			 <view>
			 		<text class="name">货物名称</text>		 
			 </view>
			 <view>
				   <text class="ref-name margin-right">{{passed_info.iscmSource.goodsName}}</text>
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->
			 </view>
		 </view>
		 
		 <view class="cu-form-group" @click="goGoodsWeightDetail">
			 <view>
			 		<text class="name">货物重量</text>		 
			 </view>
			 <view>
			 		<text class="ref-name">{{passed_info.dispatchGoodsWeight||passed_info.goodsWeight}}吨</text>		 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <!-- <view class="cu-form-group" @click="goGoodsNumberDetail">
			 <view>
			 	<text class="name">货源编号</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">HY0A210306593687</text>			 
			 		<text class="cuIcon-right lg text-gray"></text>	 
			</view>
		 </view> --> 
		 
		  <view class="current-state">承运信息</view>
		 <view class="cu-form-group" @click="goCarrierDetail">
		 			 <view>
		 			 	<text class="name">承运人</text>			 
		 			 </view>
		 			 <view>
		 			 	 <text class="ref-name">{{passed_info.iscmCarrier.carrierName}}</text> 			 
		 			 			<!--<text class="cuIcon-right lg text-gray"></text>	 -->		 
		 			 </view>
		 </view>
		 
		 
		
		 <!-- <view class="cu-form-group">
			 <view>
			 	<text class="name">承运费用</text>			 
			 </view>
			 <view>
			 	<text class="ref-name margin-right">5120元</text>			 
			 		<text class="cuIcon-right lg text-gray"></text>	
			 </view>
		 </view> 
		 
		 <view class="cu-form-group" @click="goCarrierContractDetail">
			 <view>
			 	<text class="name">承运合同</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">CYHT0A210306674823</text>			 
			 		 	<text class="cuIcon-right lg text-gray"></text>	 	 
			</view>
		 </view> 
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">结算方式</text>			 
			 </view>
			 <view>
			 		<text class="ref-name margin-right">货到付款</text>		 
			 		 	<text class="cuIcon-right lg text-gray"></text>		 
			 </view>
		 </view> 
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">支付方式</text>			 
			 </view>
			 <view>
			 	<text class="ref-name margin-right">银行转账</text>			 
			 	 	<text class="cuIcon-right lg text-gray"></text>	 		 
			 </view>
		 </view> 
		 
		  <view class="cu-form-group" @click="goSyncDetail">
			 <view>
			 	<text class="name">同步标识</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">未同步</text>			 
			 			<text class="cuIcon-right lg text-gray"></text>			 
			 			 		</view>
		 </view> -->
		 
		 <view class="cu-form-group" @click="goCreatedPersonDetail">
		 			 <view>
		 			 	<text class="name">创建人</text>			 
		 			 </view>
		 			 <view>
		 			 	<text class="ref-name">{{passed_info.createBy}}</text>			 
		 			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
		 			 </view>
		 </view>
		 
		 <view class="cu-form-group">
		 			 <view>
		 			 	<text class="name">创建时间</text>			 
		 			 </view>
		 			 <view>
		 			 	<text class="ref-name">{{passed_info.createTime}}</text>			 
		 			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
		 			 </view>
		 </view>
		 
		<!-- <view class="cu-form-group">
		 			 <view>
		 			 	<text class="name">运单上传时间</text>			 
		 			 </view>
		 			 <view>
		 			 	<text class="ref-name">2021-02-22 11:01:22</text>			 
		 			 			<text class="cuIcon-right lg text-gray"></text>	 		 
		 			  </view>
		 </view> -->
		 
		  <view class="current-state">发货人信息</view>
		 <!-- <view class="cu-form-group">
			 <view>
			 	<text class="name">发货人(公司)</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.shipperName}}</text>			 
			 			 
			 </view>
		 </view> -->
		 
		 <view class="cu-form-group" @click="goShipperDetail">
		 			 <view>
		 			 	<text class="name">托运人</text>			 
		 			 </view>
		 			 <view>
		 			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.shipper}}</text>			 
		 			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
		 			 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">发货联系人</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.shipperName}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">发货联系人电话</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.shipperPhone}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">发货地址</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.shipperAddress}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <view class="current-state">收货人信息</view>
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">收货人(公司)</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.consignee}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">收货联系人</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.consigneeName}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">收货联系人电话</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.consigneePhone}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">收货地址</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">{{passed_info.iscmWaybillInformationRecord.consigneeAddress}}</text>			 
			 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
			 </view>
		 </view>
		 
		 
		 
		 
		<!-- <view class="current-state">发车信息</view>
		 
		 <view class="cu-form-group" @click="goVehicleDetail">
			 <view>
			 	<text class="name">车牌号</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">鲁HF6763</text>			 
			 		 	<text class="cuIcon-right lg text-gray"></text>		 
		     </view>
		 </view>
		 
		 <view class="cu-form-group" @click="goChiefDriverDetail">
			 <view>
			 	<text class="name">主驾驶员姓名</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">王勇福</text>			 
			 			<text class="cuIcon-right lg text-gray"></text>		 
			 </view>
		 </view>
		 
		 <view class="cu-form-group" @click="goAssistentDriverDetail">
			 <view>
			 	<text class="name">副驾驶员姓名</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">李怀生</text>			 
			 		 	<text class="cuIcon-right lg text-gray"></text>	 	 
			 	</view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">发车时间</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">2021-02-22 14:28:01</text>			 
			 			<text class="cuIcon-right lg text-gray"></text>		 
				 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">到达时间</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">2021-02-22 14:28:01</text>			 
			 		 	<text class="cuIcon-right lg text-gray"></text>	 		 
				 </view>
		 </view>
		 
		 <view class="cu-form-group" @click="goInsurancePolicyDetail">
			 <view>
			 	<text class="name">保险单号</text>
			 </view>
			 <view>
			 	<text class="ref-name">ANAJC0104121EGGFC4ED</text>			 
			 	 <text class="cuIcon-right lg text-gray"></text>		 
				</view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">出厂照片</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">点击查看</text>			 
			 			<text class="cuIcon-right lg text-gray"></text>	 	 
				</view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">人车货合照</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">点击查看</text>			 
			 			<text class="cuIcon-right lg text-gray"></text>		 
			  	</view>
		 </view>
		 
		  <view class="current-state">签收信息</view>
		  
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">签收时间</text>			 
			 </view>
			 <view>
			 	<text class="ref-name"></text>			 
			 			<text class="cuIcon-right lg text-gray"></text>		 
			  	</view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">回单照片</text>			 
			 </view>
			 <view>
			 	<text class="ref-name">点击查看</text>			 
			 			<text class="cuIcon-right lg text-gray"></text>	 		 
				 </view>
		 </view>
		 
		 <view class="cu-form-group">
			 <view>
			 	<text class="name">备注</text>			 
			 </view>
			 <view>
			 		<text class="ref-name"></text>		 
			 		 	<text class="cuIcon-right lg text-gray"></text>	 	 
			 	</view>
		 </view> -->
		<!-- #endif --> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:["passed_info","btn_title"],
		mounted(){
			
		},
		methods:{
			goWayBillDetail(){
				// uni.navigateTo({
				// 	url:'/pages/way_bill_detail/way_bill_detail'
				// })
			},
			goCarSendingDetail(){
				// uni.navigateTo({
				// 	url:'/pages/car_sending_detail/car_sending_detail'
				// })
			},
			goShippingOrderNumberDetail(){
				// uni.navigateTo({
				// 	url:'/pages/shipping_order_number_detail/shipping_order_number_detail'
				// })
			},
			
			goGoodsWeightDetail(){
				// uni.navigateTo({
				// 	url:'/pages/goods_weight_detail/goods_weight_detail'
				// })
			},
			goCarrierDetail(){
				// uni.navigateTo({
				// 	url:'/pages/carrier_detail/carrier_detail'
				// })
			},
			goCarrierContractDetail(){
				// uni.navigateTo({
				// 	url:'/pages/carrier_contract_detail/carrier_contract_detail'
				// })
			},
			goVehicleDetail(){
				// uni.navigateTo({
				// 	url:'/pages/vehicle_detail/vehicle_detail'
				// })
			},
			goChiefDriverDetail(){
				// uni.navigateTo({
				// 	url:'/pages/chief_driver_detail/chief_driver_detail'
				// })
			},
			goAssistentDriverDetail(){
				// uni.navigateTo({
				// 	url:'/pages/assistent_driver_detail/assistent_driver_detail'
				// })
			},
			goSyncDetail(){
				// uni.navigateTo({
				// 	url:'/pages/sync_detail/sync_detail'
				// })
			},
			goCreatedPersonDetail(){
				// uni.navigateTo({
				// 	url:'/pages/created_person_detail/created_person_detail'
				// })
			},
			goGoodsNumberDetail(){
				// uni.navigateTo({
				// 	url:'/pages/goods_number_detail/goods_number_detail'
				// })
			},
			goShipperDetail(){
				// uni.navigateTo({
				// 	url:'/pages/shipper_detail/shipper_detail'
				// })
			},
			goInsurancePolicyDetail(){
				// uni.navigateTo({
				// 	url:'/pages/insurance_policy_detail/insurance_policy_detail'
				// })
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	body{
		background-color: #fff;
	}
	.details-body{
		background-color: #fff;
	}
     .current-state{
		 margin-top:10rpx;
		 margin-left:10rpx;
		 margin-bottom: 25rpx;
		 border-left:3rpx solid orange;
		 padding-left: 30rpx;
		 color:#000;
		 font-size:30rpx;
		 font-weight: 800;
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
	 
	 .ordinary{
		 color: #a1a1a1;
	 }
	 
	 .name{
		 color:#999999;
	 }
	 .ref-name{
	 		 font-size:25rpx;
			 color:#999;
	 }
</style>
