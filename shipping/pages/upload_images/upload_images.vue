<template>
	<view>
		<view class="flex first-row ">
			<view class="left-first-row">
				<!-- <view class="shipping_num">{{received_info.dispatchNo}}</view> 
				  <view class="details">
					<text>{{received_info.goodsName}}</text>
					
				</view>
				
				<view class="details_weight">
					<text>货物重量 : {{received_info.dispatchGoodsWeight}}吨</text>
				</view>
				
				<view class="details_weight" v-if="btn_title==='查看'||btn_title==='查阅'||btn_title==='签收'">
					
					<text>发车时间 : {{received_info.departureTime}}</text>
					
				</view> -->
			</view>
			
			<!-- <view   class="right-first-row">
				<button type="primary" class="detail-btn" plain size="mini" @click="goWaybillDetails()">派车单状态和详情</button>
			</view> -->
		</view>
		
		
		<!-- <view class="person">
			<image src="/static/person.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">收货联系人：{{received_info.iscmDispatchInformationRecord.consigneeName}}</view>
				<view class="person-nums">
					<text class="cellphone">Tel: {{received_info.iscmDispatchInformationRecord.consigneePhone}}</text>
					
				</view>
				<view class="person-nums">
					<text>收货地址：{{received_info.iscmDispatchInformationRecord.consigneeAddress}}</text>
				</view>
			</view>
			<image src="/static/phone-new.png" mode="aspectFit" @click="phoneCall(received_info.iscmDispatchInformationRecord.consigneePhone)"
			class="phone-new"></image>
		</view>
		
		<view class="person">
			<image src="/static/positioning.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="address-name">{{received_info.consignee_address}}</view>
				<view class="person-nums">
					<text>{{received_info.iscmDispatchInformationRecord.shipperProvinceName}}</text>
					<text v-if ="received_info.iscmDispatchInformationRecord.shipperCityName!=='市辖区'">{{received_info.iscmDispatchInformationRecord.shipperCityName}}</text>
					<text v-if ="received_info.iscmDispatchInformationRecord.shipperCityName==='市辖区'">{{received_info.iscmDispatchInformationRecord.shipperRegionName}}</text>
					<text class="cuIcon-pullright lg text-gray margin-left margin-right"> </text>
					<text>{{received_info.iscmDispatchInformationRecord.consigneeProvinceName}}</text>
					
					<text v-if ="received_info.iscmDispatchInformationRecord.consigneeCityName!=='市辖区'">{{received_info.iscmDispatchInformationRecord.consigneeCityName}}</text>
					<text v-if ="received_info.iscmDispatchInformationRecord.consigneeCityName==='市辖区'">{{received_info.iscmDispatchInformationRecord.consigneeRegionName}}</text>
				</view>
			</view>
		</view> -->
		
		
		
		<!-- <view class="goods-sec ">
			<view class="dispatch-no" >
				<view class="dispatch-title">货物信息</view>
				<view class="dispatch-num">{{received_info.dispatchNo}}</view>
			</view>
			
			<view class="vehicle-info">
				<view class="first-driver">{{received_info.firstDriverName}}</view>
				<view class="first-driver">{{received_info.vehiclePlateNumber}}</view>
				<view class="goods-weight">{{received_info.dispatchGoodsWeight}}吨</view>
			</view>
			
			<view class="vehicle-info">
				<view class="goods-nombre">{{received_info.goodsName}}</view>
				<view class="goods-nombre">{{received_info.iscmSource.goodsType}}</view>
				<view class="goods-nombre">{{received_info.iscmSource.packageType}}</view>
			</view>
			
		</view>
		
		<view class="address-sec ">
			<view class="address-no" >
				<view class="address-title">地址信息</view>
				<view class="dispatch-num">{{short_distance}}公里</view>
			</view>
			
			<view>
						  <view class="start-point">
							  <image src="/static/green-circle.png" mode="widthFix" class="circle"></image>
							  <text>{{received_info.iscmDispatchInformationRecord.shipperProvinceName}}-</text>
							 
							   <text v-if ="received_info.iscmDispatchInformationRecord.shipperCityName!=='市辖区'">{{received_info.iscmDispatchInformationRecord.shipperCityName}}-</text>
							   <text >{{received_info.iscmDispatchInformationRecord.shipperRegionName}}</text>
							   
							   <view class="addr">
							   	 <input type="text"  :value="received_info.iscmDispatchInformationRecord.shipperAddress" disabled @input="" class="addr-input">
							   				
							   </view>
							   
							   <view>
								   <text class="shipper-name-new">{{received_info.iscmDispatchInformationRecord.shipperName}}</text>
								   <text class="telephone">{{received_info.iscmDispatchInformationRecord.shipperPhone}}</text><strong></strong>
							   </view>
						  </view>
						  
						   <view class="load">
						       								   <view class="load-info" >
						       									   <text class="load-title">装货</text>
						       									   <text class="load-time">{{received_info.iscmDispatchInformationRecord.shipperPhone}}</text>
						       								   </view>
						       								   <view class="load-info">
						       								   		<text class="load-title">发车</text>
						       								   		<text class="load-time">{{received_info.departureTime}}</text>							   
						       								   </view>
						   </view>
			</view>
			
			<view class="vertical-line">
						  
			</view>
			<view>
						  <view class="start-point">
							  <image src="/static/pink-circle.png" mode="widthFix" class="circle"></image>
							  <text>{{received_info.iscmDispatchInformationRecord.consigneeProvinceName}}-</text>
							 
							   <text v-if ="received_info.iscmDispatchInformationRecord.consigneeCityName!=='市辖区'">{{received_info.iscmDispatchInformationRecord.consigneeCityName}}-</text>
							   <text>{{received_info.iscmDispatchInformationRecord.consigneeRegionName}}</text>
									   
									   <view class="addr">
									   	 <input type="text"  :value="received_info.iscmDispatchInformationRecord.consigneeAddress" disabled @input="" class="addr-input">
									   				
									   </view>
						  </view>
			</view>
			
			
		</view>
		 -->
		
		
		
		
		
		<view class="details-body ">
			<!-- #ifndef MP-WEIXIN -->
			<view class="current-state" v-if = "this.btn_title!='查阅'"><text>当前状态</text></view>
			<view v-else></view>
			
			<view class="cu-steps border-bottom" v-if = "this.btn_title!='查阅'">
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
				
				<view class="cu-item" :class="(this.btn_title=='查看')?'text-green':'ordinary'" >
					<text  :class="(this.btn_title=='查看')?'cuIcon-roundcheckfill':'cuIcon-title'">
					</text>
					已完成
				</view>
			</view>
			<view v-else></view>
			
			
			<view class="top-gap">
				<view class="current-state " >派车单信息</view>
				 <view class="cu-form-group"
				  @click="goWayBillDetail"
				  >
					 <view>
						 <text class="name">派车单编号</text>
					 </view>
					 <view>
					 		<text class="ref-name">{{received_info.dispatchNo}}</text>
					 	<!--	<text class="cuIcon-right lg text-gray"></text>	 --> 
					 </view>
				 </view>
				 
				<view class="cu-form-group">
								 <view>
								 		<text class="name">货物名称</text>		 
								 </view>
								 <view>
									   <text class="ref-name">{{received_info.goodsName}}</text>
								 		
								 </view>
				</view>
				
				<view class="cu-form-group">
								 <view>
								 		<text class="name">运输吨位</text>		 
								 </view>
								 <view>
								 		<text class="ref-name">{{received_info.dispatchGoodsWeight||received_info.goodsWeight}}吨</text>		 
								 			 
								 </view>
				</view>
				
				
				<view class="cu-form-group">
								 <view>
								 		<text class="name">发车时间</text>		 
								 </view>
								 <view>
								 		<text class="ref-name">{{received_info.departureTime}}</text>		 
								 			 
								 </view>
				</view>
				
				<view class="cu-form-group">
								 <view>
								 		<text class="name">要求到货时间</text>		 
								 </view>
								 <view>
								 		<text class="ref-name" v-if="received_info.iscmSource!= null">{{received_info.iscmSource.needArrivalTime}}</text>		 
								 			 
								 </view>
				</view>
				
				<view class="cu-form-group border-bottom" @click="goCarrierDetail">
							 <view>
							 	<text class="name">承运人</text>			 
							 </view>
							 <view>
							 	<text class="ref-name">{{received_info.carrierName}}</text> 			 
							 			<!-- <text class="cuIcon-right lg text-gray"></text>		 -->	 
							 </view>
				</view>
			</view>
			
			
			 <view  v-if ="received_info.waybillNo =null">
				 <view class="current-state">运单信息</view>
				  <view class="cu-form-group" @click="goShippingOrderNumberDetail">
				 	 <view>
				 		 <text class="name">运单编号</text>
				 	 </view>
				 	 <view>
				 		 <text class="ref-name">{{received_info.waybillNo}}</text>
				 	 	
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
			 
			
			
			 
			 
			 
			 <!-- <view class="cu-form-group" @click="goGoodsNumberDetail">
				 <view>
				 	<text class="name">货源编号</text>			 
				 </view>
				 <view>
				 	<text class="ref-name">HY0A210306593687</text>			 
				 		<text class="cuIcon-right lg text-gray"></text>	 
				</view>
			 </view> --> 
			 
			 
			
			 
			
			 
			 <view class="current-state">收货人信息</view>
			 <view class="cu-form-group">
				 <view>
				 	<text class="name">收货人(公司)</text>			 
				 </view>
				 <view>
				 	<text class="ref-name" v-if="received_info.iscmDispatchInformationRecord!= null">{{received_info.iscmDispatchInformationRecord.consignee}}</text>			 
				 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
				 </view>
			 </view>
			 
			 <view class="cu-form-group">
				 <view>
				 	<text class="name">收货联系人</text>			 
				 </view>
				 <view>
				 	<text class="ref-name" v-if="received_info.iscmDispatchInformationRecord!= null">{{received_info.iscmDispatchInformationRecord.consigneeName}}</text>			 
				 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
				 </view>
			 </view>
			 
			 <view class="cu-form-group">
				 <view>
				 	<text class="name">收货联系人电话</text>			 
				 </view>
				 <view>
				 	<text class="ref-name" v-if="received_info.iscmDispatchInformationRecord!= null">{{received_info.iscmDispatchInformationRecord.consigneePhone}}</text>			 
				 		<!-- 	<text class="cuIcon-right lg text-gray"></text>	 -->		 
				 </view>
			 </view>
			 
			 <view class="cu-form-group border-bottom ">
				 <view>
				 	<text class="name">收货地址</text>			 
				 </view>
				 <view>
				 	<input type="text" class="ref-name-m" disabled v-if="received_info.iscmDispatchInformationRecord!= null"
				 	 :value = "received_info.iscmDispatchInformationRecord.consigneeProvinceName
				 	 +received_info.iscmDispatchInformationRecord.consigneeCityName
				 	 +received_info.iscmDispatchInformationRecord.consigneeRegionName
				 	 +received_info.iscmDispatchInformationRecord.consigneeAddress">
				 </view>
			 </view>
			 
			 
			
			<!-- #endif --> 
		</view>
		
		
		
		
		
		<view class="cu-form-group" v-if="this.btn_title==='签收'">
		<!-- 	<image src="/static/weight.png" mode="aspectFit" class="person-img"></image> -->
			
				<view class="name black">签收重量(吨)<text class="red">*</text></view>
				<view class="ref-name">
					
					<input class="cellphone"
					placeholder-style="font-size:30rpx;color:#999999;"
					type="number" maxlength="20" :value="signed_weight"
					 placeholder="请输入签收重量" @input="getSignWeight"></input>
					
				</view>
			
		</view>
		
		
		
		<view class="cu-form-group">
			<!-- <image src="/static/chronometer.png" mode="aspectFit" class="person-img"></image> -->
			
				<view class="name" >收发货地之间</view>
				<view class="ref-name">
					<text>距离约 {{short_distance}} 公里 </text>
				</view>
		
		<!-- 	<view class="flex right-navigate"  @click="goMap">
				<image src="/static/navigate.png" mode="aspectFit" class="navi"></image>
				<text class="navi-text">导航</text>
			</view> -->
		</view>
		
		
		<view class="cu-form-group" v-if="this.btn_title==='装货'||this.btn_title==='发车'||this.btn_title==='签收'">
			<!-- <image src="/static/notes.png" mode="aspectFit" class="person-img"></image> -->
			
				<view class="name black">备注</view>
				<view class="ref-name">
					
					<input class="remark" @input="getNote"
					type="text" maxlength="100"
					 placeholder="请输入备注"></input>
					
				</view>
			
		</view>
		
		<view class="bars" v-if=" canDispatch && (btn_title==='装货'||this.btn_title==='发车'||this.btn_title==='签收') ">
			
			<view @click="takePhoto" v-if="this.btn_title==='装货'" data-index="people_vehicle_goods_photo">
				<image  :src="imgGoodsUrl" class="big-image" mode="aspectFit"></image>
				<image src="/static/tachar.png" mode="aspectFit" @click="cancelGoods"
				 class="tachar" v-if="tachar_goods"></image>
				 <image src="/static/zoom.png" mode="aspectFit" @click=""
				  class="zoom" v-if="zoom_goods"></image>
				<view class="big-caption">人车货合照</view>
				
			</view>
			<view >
				<image :src="imgOrderUrl" class="big-image" mode="aspectFit" @click="takePhoto" data-index="ticket_photo"></image>
				<image src="/static/tachar.png" mode="aspectFit" @click="cancelOrder"
				class="tachar" v-if="tachar_order"></image>
				<image src="/static/zoom.png" mode="aspectFit" @click="zoomOrder"
				 class="zoom" v-if="zoom_order"></image>
				<view class="big-caption">{{btn_title}}单据</view>
			</view>
			
		</view>
		  
		  
		  <view class="btns">
			  <view>
				  
				  <button type="default" class="submit-btn"
				  :loading="loading" :disabled="disabled" size="mini"
				   @click="confirm" v-if="canDispatch && (btn_title==='发车'||btn_title==='装货'||btn_title==='签收')" >确认{{btn_title}}</button>
				  <button type="default" class="submit-btn"
				  :loading="loading" :disabled="disabled" size="mini"
				   @click="confirm" v-else >返回</button>
			  </view>
			  
		  </view>
		   
		  <!-- show the previewed image -->
		   <view class="cu-modal show" v-if="show_order_modal" >
		   	
		   	<view class="cu-dialog" >
		   		<view class="cu-bar justify-end text-white">
		   			<view @click="hideOrderModal" class="action" >
		   				<text class="cuIcon-close text-red"></text>
		   			</view>
		   		</view>
				
		   		<image :src="imgOrderUrl" mode="widthFix" class="car-version"></image>
		   		
				
		   		
		   	</view>
		   </view>
	</view>
	
	
</template>

<script>
	import {ossLocation} from "@/util/pattern.js"
	var _self;
	var origin_location
	var origin_latitude
	var origin_longitude
	var destiny_location
	var destiny_latitude
	var destiny_longitude
	
	export default {
		data() {
			return {
				 percent:0,
				 loading:false,
				 disabled:false,
				imgGoodsUrl:"/static/camera-scan.png",
				imgOrderUrl:"/static/camera-scan.png",
				tachar_scan:false,
				tachar_goods:false,
				zoom_goods:false,
				tachar_order:false,
				zoom_order:false,
				received_info:{},
				upload_info:{},
				btn_title:"",
				signed_weight:"",
				shippingNoteInfos:[],//运单信息数组

				//是否可以“发车”，“签收”等
				canDispatch:null,
				short_distance:null,
				queryParams:{
					"dispatchId": "",
					"signWeight": "",
					"leavePhoto": "",
					"receiptPhoto": "",
					pageNum: 1,
					pageSize: 7,
				},
				lng :null,
				lat :null,
				startCountrySubdivisionCode:"",//发货地起点行政区划代码
				endCountrySubdivisionCode:"",//收货地终点行政区划代码
				
				show_order_modal:false,
			};
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:`待${this.btn_title}派车单`
			})
			
			
			this.canDispatch= uni.getStorageSync("canDispatch")
		},
	
		async onLoad(options){
			var that = this
		    this.upload_info = uni.getStorageSync("upload_item")
			
			const dispatchId = this.upload_info.dispatchId
		
			
			 var authorization = uni.getStorageSync("token")
			const resDispatch = await this.$request({
				url:"/app/dispatch/getDispatchVo/" + dispatchId ,
				
				header:{
					Authorization:authorization,
				},
				
			})
			
		
			this.received_info = resDispatch.data.data
		
			//reappear dispatch weight as pre-determined signed weight
             this.signed_weight = this.received_info.dispatchGoodsWeight
			 //put this weight into the params data
			 this.queryParams.signWeight =this.received_info.dispatchGoodsWeight
			this.btn_title = options.btn_title
			
			//for reappear in tabs
			
			if(this.btn_title == "查验"){
				getApp().globalData.way_bill_page =0
			}else if (this.btn_title == "发车"){
				getApp().globalData.way_bill_page =1
			}else if (this.btn_title == "签收"){
				getApp().globalData.way_bill_page =2
			}else if (this.btn_title == "查看"){
				getApp().globalData.way_bill_page =3
			}else if (this.btn_title == "查阅"){
				getApp().globalData.way_bill_page =4
			}
			
			
			
			//for calcating distance of delivery
				uni.request({
					//传入高德web服务端key和发货地址
					 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.iscmDispatchInformationRecord.shipperAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
					
					success:(res)=>{
							origin_location  = res.data.geocodes[0].location.split(",")
							  origin_latitude =parseFloat(origin_location[1]) 
							  origin_longitude = parseFloat(origin_location[0])
														   
							 uni.request({
							 	//传入高德web服务端key和目的地址
							 	 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.iscmDispatchInformationRecord.consigneeAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
							 	
							 	success:(res)=>{
							 		
							 			 destiny_location  = res.data.geocodes[0].location.split(",")
							 			  destiny_latitude =parseFloat(destiny_location[1]) 
							 			  destiny_longitude = parseFloat(destiny_location[0])
										 
										 uni.request({
										 	//传入高德web服务端key和规划线路
										 	// url: `https://restapi.amap.com/v4/direction/truck?origin=${origin_longitude}%2C${origin_latitude}&destination=${destiny_longitude}%2C${destiny_latitude}&size=3&key=ae8b30ff7c227fb962010579230bf568`, //货车规划
										 	url: `https://restapi.amap.com/v3/direction/driving?origin=${origin_longitude}%2C${origin_latitude}&destination=${destiny_longitude}%2C${destiny_latitude}&key=ae8b30ff7c227fb962010579230bf568`,
										 	success:(res)=>{
										 			 
													  that.short_distance=parseFloat(res.data.route.paths[0].distance)/1000
													  
													    that.short_distance= that.short_distance.toFixed(2)
				                                  
													 //console.log( res.data.data.route.paths.duration,"货车规划")									 			 
										     }
										 })
										 
							 			 
							     }
							 })	 
				    }
				})
		    
			// const total_shipper_address = that.received_info.iscmDispatchInformationRecord.shipperProvinceName 
			// + that.received_info.iscmDispatchInformationRecord.shipperCityName 
			// + that.received_info.iscmDispatchInformationRecord.shipperRegionName 
			// + that.received_info.iscmDispatchInformationRecord.shipperAddress
			// console.log(total_shipper_address,'total_shipper_address')
			
			// const total_consignee_address = that.received_info.iscmDispatchInformationRecord.consigneeProvinceName
			// + that.received_info.iscmDispatchInformationRecord.consigneeCityName
			// + that.received_info.iscmDispatchInformationRecord.consigneeRegionName
			// + that.received_info.iscmDispatchInformationRecord.consigneeAddress
			// console.log(total_consignee_address,'total_consignee_address')
			// //解析目的地地址信息
			// 	uni.request({
			// 		//传入高德web服务端key和发货地址
			// 		 url: `https://restapi.amap.com/v3/geocode/geo?address=${total_shipper_address}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
			// 		// #ifdef APP-PLUS
			// 		success:(res)=>{
						
			// 				this.startCountrySubdivisionCode  = res.data.geocodes[0].adcode
			// 				var main = plus.android.runtimeMainActivity();	
			// 				main.data =	this.startCountrySubdivisionCode					   
			// 				 uni.request({
			// 				 	//传入高德web服务端key和目的地址
			// 				 	 url: `https://restapi.amap.com/v3/geocode/geo?address=${total_consignee_address}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
							 	
			// 				 	success:(res)=>{
							 		     
			// 				 			 this.endCountrySubdivisionCode  = res.data.geocodes[0].adcode
							 			  
										 
			// 				     }
			// 				 })	 
			// 	    },
			// 		// #endif
			// 	})
			
			// #ifdef APP-PLUS
			//Android 获取定位经纬度
			var LocationMy = plus.android.importClass("io.dcloud.UNIACABF38.LocationMy")
			var LocationMy = new LocationMy();  
			LocationMy.startMy(); // 这个方法一定要执行一次就行了
			
			//下面两个即为 安卓 高德sdk的定位经纬度
			this.lng = LocationMy.rLng();
			this.lat =LocationMy.rLat();
			
			// #endif
				
		},
		
		methods:{
			phoneCall(tel){
				uni.makePhoneCall({
				    phoneNumber: tel ,
					
				});
				      },
			goWaybillDetails(){
				var that = this
				uni.navigateTo({
					url:`/pages/way_bill_details/way_bill_details?btn_title=${that.btn_title}`
				})
				
			},
			goMap(){
				uni.navigateTo({
					url:"/pages/map/map"
				})
			},
			// letsScan(){
			// 	uni.scanCode({
			// 		//only for camera
			// 	    onlyFromCamera: true,
					
			// 		//only for barcode
			// 		scanType: ['barCode'],
			// 	    success: function (res) {
			// 	        console.log('条码类型：' + res.scanType);
			// 	        console.log('条码内容：' + res.result);
			// 	    }
			// 	});
			// },
			
			getSignWeight(e){
				
				this.queryParams.signWeight = e.target.value
				
			},
			getNote(e){
				
				this.queryParams.remark = e.target.value
				
			},
			async  takePhoto(e){
				_self=this
				var authorization = uni.getStorageSync("token")
				 if(e.currentTarget.dataset.index=="people_vehicle_goods_photo"){
					/**
					 * 人车货照片
					 */ 
					const resChoosePhoto= await this.$photo({
											  async success(res) {
											    const tempFilePaths = res.tempFilePaths;
											
												
												 //upload the img
												 _self.imgGoodsUrl = tempFilePaths[0]
												  uni.setStorageSync("temp_photo_path", tempFilePaths[0])
												 //make the tachar img appear
												  _self.tachar_goods=true
												  _self.zoom_goods=true
												  
												  //upload
												  	const resPhoto = await _self.$upload({
												  		url:ossLocation.dispatch.rch,
												  		file_path:tempFilePaths[0],
														header:{
															Authorization:authorization,
														},
												  		
												  	})	
												
												}
					})			  
											   
				 }else if (e.currentTarget.dataset.index=="ticket_photo"){
					  if(this.btn_title==='装货'){
						  /**
						   * 发货单（装货时）
						   */
						 const resChoosePhoto= await this.$photo({
						 						  async success(res) {
						 						    const tempFilePaths = res.tempFilePaths;
						 						
						 							
						 							 //upload the img
						 							 _self.imgOrderUrl = tempFilePaths[0]
						 							
						 							 //make the tachar img appear
						 							  _self.tachar_order=true
						 							   _self.zoom_order=true
													   
						 							  //upload
						 							  	const resPhoto = await _self.$upload({
						 							  		url:ossLocation.dispatch.fhd,
						 							  		file_path:tempFilePaths[0],
						 														header:{
						 															Authorization:authorization,
						 														},
						 							  		
						 							  	})	
						 							
						 							}
						 }) 
					  }else if(this.btn_title==='发车'){
					  
						  /**
						   * 出厂照片（发车时）
						   */
					  const resChoosePhoto= await this.$photo({
					  						  async success(res) {
					  						    const tempFilePaths = res.tempFilePaths;
					  						
					  							 //upload the img
					  							 _self.imgOrderUrl = tempFilePaths[0]
					  							 
					  							 //make the tachar img appear
					  							  _self.tachar_order=true
					  							  _self.zoom_order=true
												  
					  							  //upload
					  							  	const resPhoto = await _self.$upload({
					  							  		url:ossLocation.dispatch.leave,
					  							  		file_path:tempFilePaths[0],
														header:{
															Authorization:authorization,
														},
					  							  		
					  							  	})	
					  							
					  							}
					  })
					  }else if(this.btn_title==='签收'){
						  /**
						   * 回单（签收时）
						   */
						  const resChoosePhoto= await this.$photo({
						  						  async success(res) {
						  						    const tempFilePaths = res.tempFilePaths;
						  							
						  							//preview the photos
						  							// uni.previewImage({
						  							//             urls: res.tempFilePaths,
						  							            
						  							//         });
						  									
						  							
						  							 //upload the img
						  							 _self.imgOrderUrl = tempFilePaths[0]
						  							 
						  							 //make the tachar img appear
						  							  _self.tachar_order=true
						  							   _self.zoom_order=true
													   
						  							  //upload
						  							  	const resPhoto = await _self.$upload({
						  							  		url:ossLocation.dispatch.receive,
						  							  		file_path:tempFilePaths[0],
															header:{
																Authorization:authorization,
															},
						  							  		
						  							  	})	
						  							  		 
						  							}
											
						  })
						  
						  
					  }
				 }
					 
			},
			
			  
			  
				cancelGoods(){
					this.imgGoodsUrl = "/static/camera-scan.png"
					setTimeout(()=>{
						uni.showToast({
							title:"删除货物照片成功，请重新选择",
							icon:"none"
						})
					},500)
					this.tachar_goods=false
					this.zoom_goods=false
				},
			    
				cancelOrder(){
					this.imgOrderUrl = "/static/camera-scan.png"
					if (this.btn_title==='发车'&& this.canDispatch){
						
						try {
						    uni.removeStorageSync('dispatch_pending_photo');
							
						} catch (e) {
						    // error
						}
						
						setTimeout(()=>{
							uni.showToast({
								title:"删除照片成功",
								icon:"none"
							})
						},500)
						this.tachar_order=false
					}else if (this.btn_title==='签收'&& this.canDispatch){
						
						try {
						    uni.removeStorageSync('receipt_pending_photo');
							
						} catch (e) {
						    // error
						}
						
						setTimeout(()=>{
						     	uni.showToast({
						     		title:"删除照片成功,请重新选择",
						     		icon:"none"
						     	})
						     },500)
						this.tachar_order=false
						this.zoom_order=false
					}   
				},
				
				zoomOrder(){
					this.show_order_modal = true
					
				},
				
				hideOrderModal(){
					this.show_order_modal = false
					
				},
				
				 async confirm(){
					var authorization = uni.getStorageSync("token") 
					 if(this.btn_title==='装货'&&this.canDispatch){
						//派车单确认装货
						
						 this.queryParams.dispatchId= this.received_info.dispatchId
						 this.queryParams.groupPhoto= uni.getStorageSync("people_vehicle_photo") //人车货 合照
						 this.queryParams.packingListPhoto = uni.getStorageSync("packing_list_photo")//发货单据
						var queryParams = this.queryParams
						
						if (!this.queryParams.groupPhoto){
							uni.showToast({
								title:"请上传人车货合照！",
								icon:"none"
							})
							return
						} else if (!this.queryParams.packingListPhoto){
							uni.showToast({
								title:"请上传发货单据！",
								icon:"none"
							})
							return
						}
						
						
						const res = await this.$request({
							url:"/app/dispatch/loading",
							method: "PUT",
							data:queryParams,
							header:{
								Authorization:authorization,
								"Content-Type": "application/x-www-form-urlencoded",
							},
							
						})
						
						if (res.data.msg =="操作成功"){
							uni.showToast({
								title:"操作成功"
							})
							
							
							try {
							    uni.removeStorageSync('people_vehicle_photo');
								uni.removeStorageSync('packing_list_photo');
							} catch (e) {
							    // error
							}
							
							uni.reLaunch({
								url:"/pages/way_bill/way_bill"
							})
						}else{
							
							uni.showToast({
								title:res.data.msg,
								duration:9000,
							})
						}
					 }else if(this.btn_title==='发车'&& this.canDispatch){
						//派车单确认发车
						
						this.queryParams.dispatchId= this.received_info.dispatchId
						
						this.queryParams.leavePhoto = uni.getStorageSync("dispatch_pending_photo")
						
						var queryParams = this.queryParams
						
						// if (!this.queryParams.leavePhoto){
						// 	uni.showToast({
						// 		title:"请上传发车单据！",
						// 		icon:"none"
						// 	})
						// 	return
						// } 
						
						//向监管SDK发信息
						
						 const shippingNoteNumber = this.upload_info.waybillNo
						 const serialNumber = "0000"
						 
						const startCountrySubdivisionCode = this.received_info.iscmDispatchInformationRecord.shipperRegion                                                            
						const endCountrySubdivisionCode =  this.received_info.iscmDispatchInformationRecord.consigneeRegion
						
						console.log(shippingNoteNumber,"shippingNoteNumber");
						console.log(serialNumber,"serialNumber");
						console.log(startCountrySubdivisionCode,"startCountrySubdivisionCode");
						console.log(endCountrySubdivisionCode,"endCountrySubdivisionCode");
						
						//#ifdef APP-PLUS
						//Android 获取class
						var StartIt = plus.android.importClass("io.dcloud.UNIACABF38.StartIt")
						var StartIt = new StartIt();  //实例化该class
						//pass data to the sdk
						StartIt.getShippingNoteInfosData(shippingNoteNumber)
						StartIt.getSerialNumberData(serialNumber)
						StartIt.getStartCountrySubdivisionCodeData(startCountrySubdivisionCode)
						StartIt.getEndCountrySubdivisionCodeData(endCountrySubdivisionCode)
						
						StartIt.start(); // 这个方法一定要执行一次就行了
						
						
						
						
						//#endif
						
						
						
						
						
						
						
						
						const res = await this.$request({
							url:"/app/dispatch/departDispatch",
							method: "PUT",
							data:queryParams,
							header:{
								Authorization:authorization,
							},
							
						})
						
						if (res.data.msg =="操作成功"){
							uni.showToast({
								title:"操作成功"
							})
							
							try {
							    uni.removeStorageSync('dispatch_pending_photo');
							} catch (e) {
							    // error
							}
							
							setTimeout(()=>{
								uni.reLaunch({
									url:"/pages/way_bill/way_bill"
								})
							},1000)
						}else{
							
							uni.showToast({
								title:res.data.msg
							})
						}
						
						
					}else if(this.btn_title==='签收'&& this.canDispatch){
						//派车单确认签收
						
						this.queryParams.dispatchId= this.received_info.dispatchId
						this.queryParams.receiptPhoto = uni.getStorageSync("receipt_pending_photo")
						
						var queryParams = this.queryParams
						if (!this.queryParams.receiptPhoto){
							uni.showToast({
								title:"请上传签收单据！",
								icon:"none"
							})
							return
						} else if (!this.queryParams.signWeight){
							uni.showToast({
								title:"请输入签收货物重量！",
								icon:"none"
							})
							return
						}
						
						
						const res = await this.$request({
							url:"/app/dispatch/dispatchSign",
							method: "PUT",
							data:queryParams,
							header:{
								Authorization:authorization,
							},
							
						})
						
						if (res.data.msg =="操作成功"){
							uni.showToast({
								title:"操作成功"
							})
							
							try {
							    uni.removeStorageSync('receipt_pending_photo');
							} catch (e) {
							    // error
							}
							
							setTimeout(()=>{
								uni.reLaunch({
									url:"/pages/way_bill/way_bill"
								})
							},1000)
							
						}else{
							
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							})
						}
					}else{
						//"已完成"和"全部"时
						uni.reLaunch({
							url:"/pages/way_bill/way_bill"
						})
					}
					
				},
				
				
				
				
			
		}
	}
</script>

<style lang="scss" scoped>
  .shipping_num{
	  font-size: 30rpx;
	  font-weight: 600;
	  margin:30rpx 10rpx 20rpx 30rpx;
  }
  .first-row{
	  width: 100%;
	  display: flex;
	  flex-direction: row;
  }
  
  .left-first-row{
	  width: 65%;
  }
  .right-first-row{
	  width:30%;
  }
  .details{
	  color:#bababa;
	  margin-left:30rpx;
	  text{
		  margin-right: 20rpx;
	  }	  
  } 
  .detail-btn{
	  margin-top:10%;
	 
  }
  .details_weight{
	  margin-top:10rpx;
	   margin-left:30rpx; 
	   margin-bottom:20rpx;
	   color:#6b8ac0;
	   text{
		   margin-right: 25rpx;
	   }
  }
  .navi{
	  
	  width:80rpx;
	  height:80rpx;
  }
  .navi-text{
	  color:#1296db;
	  align-items: center;
	  margin-left:5rpx;
  }
 
  .address-name{
	  font-size: 20rpx;
  }
  .bars{
	  border-top:1px solid #f4f4f4;
	  display: flex;
	  justify-content: space-evenly;
	  flex-direction: row;
	  width:100%;
	  height:200rpx;
	  
	  view{
		  position: relative;
		  width:50%;
		  text-align: center;
		  .tachar{
			  position: absolute;
			  width:60rpx;
			  height: 60rpx;
			  left:40%;
			  
		  }
		  
		  .zoom{
			  position: absolute;
			  width:60rpx;
			  height: 60rpx;
			  right:0;
			  
		  }
		  
		  .big-image{
		  		  width:50%;
				  height:150rpx;
				  margin-top:30rpx;
				  margin-left:5%;
				  display: inline-block;
				  
		  }
		  .barcode{
			  width:30%;
			
		  }
	       .big-caption {
		  		  width:50%;
				  height:50rpx;
				  margin-left:5%;
				  display: inline-block;
				   color:#b8b8b8;
				  
		  }
		  
	  }
  }
  
  .progress-bar{
	  width:80%;
	  margin-left:20rpx;
	  margin-top:30rpx;
  }
  
  .right-navigate{
	  width:30%;
  }
  
  .btns{
	width:100%;
	display:flex;
	justify-content:center;
	margin-top:30rpx;
  }
  
  .top-gap{
	  margin-top:40rpx;
  }
  .submit-btn{
	  background-color: #3dbf41;
	  margin:30rpx auto;
	  border-radius: 10rpx;
	  color: #fff;
	  width:500rpx;
	  height:100rpx;
	  font-size: 35rpx;
	  line-height: 100rpx;
	  margin-left: 30rpx;
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
	 font-size:35rpx;
  	 color:#999999;
   }
   .ref-name{
   		 font-size:30rpx;
  		
   }
.red{
	color:#f00;
}
 
 
 
 .ref-name-m{
 	
 	padding-left:40%;
 	padding-right:0;
 }
 
 .remark{
 	
 	padding-left:60%;
 	padding-right:0;
 }
 
 
 .goods-sec{
	 padding: 30rpx;
	 margin:20rpx;
	 height: 200rpx;
	 background-color: #5fcf6f;
	 border-radius: 25rpx;
	 box-shadow: 5rpx 5rpx 5rpx #ccc;
 }
 
 
 .dispatch-no{
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 color: #fff;
 }
  
  
  .dispatch-title{
	  font-weight: 600;
	  font-size: 40rpx;
	  
  } 
  
  
  .vehicle-info{
	  margin: 10rpx;
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
  }
  
  .first-driver{
	  font-weight: 600;
	  font-size: 35rpx;
	  color: #000;
  }
  
  .goods-weight{
	  color: #fff;
	  font-weight: 600;
	  font-size: 30rpx;
  }
  
  .goods-nombre{
	  color: #fff;
	  border:1rpx solid #ccc;
	  font-size: 25rpx;
	  border-radius: 5rpx;
	  padding: 5rpx;
  }
  
  .address-sec{
	  padding: 30rpx;
	  margin:20rpx;
	  height: 500rpx;
	  border: 1rpx solid #bfbfbf;
	  background-color: #fff;
	  border-radius: 25rpx;
	  box-shadow: 5rpx 5rpx 5rpx #ccc;
  }
  
  .address-no{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  color: #000;
  }
  
  
  .address-title{
  	  font-weight: 600;
  	  font-size: 40rpx;
  	  
  } 
  
  .dispatch-num{
	  font-weight: 600;
	  font-size: 25rpx;
  }
  
  
  .circle{
  	   width: 25rpx;
  	   height:20rpx ;
  }
  
  .start-point{
  	   padding: 20rpx;
  	   text{
  		   margin-left: 40rpx;
  		   font-size: 38rpx;
  		   font-weight: 600;
  	   }
  }
  .addr{
  	   margin: 10rpx;
  	   margin-left: 60rpx;
  	   .addr-input{
  		  color: #8ca2b5; 
  	   }
  	   
  	   
  }
  
  .vertical-line{
  	   margin-top: -50rpx;
  	   margin-left:30rpx;
  	   height: 40rpx;
  	   border-left:1rpx solid #cbcbcb;
  }
  
  .red{
  	color: #f00;
  }
  
  
  .shipper-name-new{
	  margin: 10rpx;
	  padding-left: 20rpx;
	  
  }
  
  .telephone{
	 color: #1366d7; 
  }
  
  .load{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  padding-left: 20rpx;
	  margin-left: 50rpx;
	  font-size:25rpx;
	  font-weight:400;
	 
  }
  
  .load-info{
	 
  	  .load-title{
		 color: #1f89d7; 
		 background-color: #f0f0f0;
		 padding: 10rpx;
		 border-radius: 5rpx;
		 margin-right: 20rpx;
	  }
  }
  
  .flex-group{
	 
	  display: flex;
	  flex-direction: row;
	  justify-content: cneter;
  }
  
  .action{
	
	  margin-right: 30rpx;
  }
  
  
</style>
