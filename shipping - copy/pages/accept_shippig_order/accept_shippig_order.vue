<template>
	<view>
		<view class="flex first-row ">
			<view class="left-first-row">
				<view class="shipping_num">{{received_info.waybillNo}}</view>
				<view class="details">
					<view>货物名称：{{received_info.iscmSource.goodsName}}</view>
					<view>货物类型：{{goodsType}}</view>
					<view>包装类型：{{packageType}}</view>
				</view>
				
				<view class="details_weight">
					<!-- <text>20托盘</text>
					<text>|</text> -->
					<text>{{received_info.goodsWeight}}吨</text>
					<!-- <text>|</text>
					<text>150立方</text> -->
				</view>
			</view>
			
			<view   class="right-first-row">
				<button type="primary" class="detail-btn" plain size="mini" @click="goShippingOrderDetails">运单状态和详情</button>
			</view>
		</view>
		
		<!-- 
		<view class="person">
			<image src="/static/person.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">张三</view>
				<view class="person-nums">
					<text class="cellphone">1388888888,</text>
					<text>021-7878738</text>
				</view>
			</view>
			<image src="/static/phone-new.png" mode="aspectFit" class="phone-new"></image>
		</view> -->
		
		<view class="person">
			<image src="/static/positioning.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="address-name">{{received_info.consignee_address}}</view>
				<view class="person-nums">
					<text>{{received_info.iscmWaybillInformationRecord.shipperProvinceName}}</text>
					<text v-if ="received_info.iscmWaybillInformationRecord.shipperCityName!=='市辖区'">{{received_info.iscmWaybillInformationRecord.shipperCityName}}</text>
					<text v-if ="received_info.iscmWaybillInformationRecord.shipperCityName==='市辖区'">{{received_info.iscmWaybillInformationRecord.shipperRegionName}}</text>
					<text class="cuIcon-pullright lg text-gray margin-left margin-right"> </text>
					<text>{{received_info.iscmWaybillInformationRecord.consigneeProvinceName}}</text>
					<!-- 判断是否为“直辖市” -->
					<text v-if ="received_info.iscmWaybillInformationRecord.consigneeCityName!=='市辖区'">{{received_info.iscmWaybillInformationRecord.consigneeCityName}}</text>
					<text v-if ="received_info.iscmWaybillInformationRecord.consigneeCityName==='市辖区'">{{received_info.iscmWaybillInformationRecord.consigneeRegionName}}</text>
				</view>
				<view class="person-nums">
					<text>装货地址： </text>
					<text>{{received_info.iscmWaybillInformationRecord.shipperAddress}} </text>
				</view>
			</view>
			
			
		</view>
		
		
		  
		<button type="default" class="submit-btn" :loading="loading" :disabled="disabled" size="mini" @click="accept" >{{btn_title}}</button>
		
		
	</view>
	
	
</template>

<script>
	
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
				tachar_order:false,	
				get_info:{},
				received_info:{},
				btn_title:"",
				short_distance:null,
				
				// 货物分类字典
				goodsType:"",
				goodsTypeOptions: [],
				goodsTypeSendValue: [],
				goods_type_list: [],
				goods_type_index:0,	
				
				// 包装类型字典
				packageType:"",
				
				packageTypeOptions: [], 
				packageTypeSendValue: [],
				package_type_index:0,	
			};
		},
		
	
		async onLoad(options){
			var that = this
			
			 const waybillId= options.waybillId
			 var authorization = uni.getStorageSync("token")
			 
			 const resSource = await this.$request({
			 	 	url:`/app/waybill/getWaybillVo/${waybillId}`,
			 	 	
			 	 	header:{
			 	 		Authorization:authorization,
						
			 	 	},
					
			 	 	
			 	 })
			
			 this.received_info = resSource.data.data
		     console.log(this.received_info,'777')
			 
			 // 包装类型字典
			 this.getPackageTypeOptions()
			 // 货物分类字典
			 this.getGoodsTypeOptions()
			 
			 
			 
			this.btn_title = options.btn_title
			
			//for calcating distance of delivery
			if(this.received_info.shipping_delivery_place!=null){
				uni.request({
					//传入高德web服务端key和发货地址
					 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.shipping_delivery_place}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
					
					success:(res)=>{
							origin_location  = res.data.geocodes[0].location.split(",")
							  origin_latitude =parseFloat(origin_location[1]) 
							  origin_longitude = parseFloat(origin_location[0])
														   
							 uni.request({
							 	//传入高德web服务端key和目的地址
							 	 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.consignee_address}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
							 	
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
													   that.short_distance= that.short_distance
													    that.short_distance= that.short_distance.toFixed(2)
													
													 //console.log( res.data.data.route.paths.duration,"货车规划")									 			 
										     }
										 })
										 
							 			 
							     }
							 })	 
				    }
				})
			}
				
			
				
		},
		mounted(){
			
		},
		methods:{
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
				  this.goodsTypeSendValue = res.data.data.map(e=>e.dictValue)
				
				   
				   const goodsType = that.received_info.iscmSource.goodsType
				   
					 this.goods_type_index = this.goodsTypeSendValue.findIndex(value=>value == goodsType) 
					const goodsTypeIndex = this.goods_type_index
					
					const goodsTypeOptions = this.goodsTypeOptions
					this.goodsType = goodsTypeOptions[goodsTypeIndex]
				
				 
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
					
					 
					
					 this.packageTypeSendValue = res.data.data.map(e=>e.dictValue)	 
					
					const packageType = that.received_info.packageType
					 
					
					
					this.package_type_index = this.packageTypeSendValue.findIndex(value=>value == packageType) 
					
					
					 
					const packageTypeIndex = this.package_type_index
					 this.packageType = this.packageTypeOptions[packageTypeIndex]
			},
			
			
			goShippingOrderDetails(){
				
				uni.navigateTo({
					url:"/pages/shipping_order_details/shipping_order_details"
				})
				
			},
			
			
			async accept(){
				var waybillID = this.received_info.waybillId
				console.log(waybillID,'999');
				 var authorization = uni.getStorageSync("token")
				 
				
					 const res = await this.$request({
					 	 	url:`/app/waybill/waybillAccept/${waybillID}`,
					 	 	
					 	 	header:{
					 	 		Authorization:authorization,
					 	 	},
					 	 	
					 	 })
					
				console.log(res,'mmm');
				uni.reLaunch({
								url:"/pages/shipping_order/shipping_order"
							})
							
							
							
							
							
							
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
	  margin-left:10%;
	  text{
		  margin-right: 20rpx;
	  }	  
  } 
  .detail-btn{
	  margin-top:10%;
	 
  }
  .details_weight{
	  margin-top:10rpx;
	   margin-left:10%; 
	   margin-bottom:20rpx;
	   color:#6b8ac0;
	   text{
		   margin-right: 25rpx;
	   }
  }
  .navi{
	  
	  width:50rpx;
	  height:50rpx;
  }
  .navi-text{
	  color:#1296db;
	  align-items: center;
	  margin-left:5rpx;
  }
  .person{
	  width: 100%;
	 
	  border-top:1px solid #f4f4f4;
	  padding:10rpx;
	  display: flex;
	  flex-direction:row;
	  .person-details{
		  width:65%;
	  }
	  .person-img{
		  width:100rpx;
		  height:100rpx;
		  margin-right:50rpx;
	  }
	  
	  .person-name{
		  font-size: 25rpx;
	  }
	  
	  .person-nums{
		  color:#8e8e8e ;
		  margin-top:10rpx;
		  .cellphone{
			  margin-right:20rpx;
		  }
	  }
	  
	  .phone-new{
		  width:90rpx;
		  height:90rpx;
		  margin-left:50rpx;
		  font-size: 30rpx;
		  color: #caba89;
	  }
  }
  .address-name{
	  font-size: 20rpx;
  }
  .bars{
	  border-top:1px solid #f4f4f4;
	  display: flex;
	  flex-direction: row;
	  width:100%;
	  height:200rpx;
	  
	  view{
		  position: relative;
		  width:30%;
		  text-align: center;
		  .tachar{
			  position: absolute;
			  width:60rpx;
			  height: 60rpx;
			  left:40%;
		  }
		  
		  .big-image{
		  		  width:50%;
				  height:150rpx;
				  margin-left:25%;
				  display: inline-block;
				  
		  }
		  .barcode{
			  width:30%;
			
		  }
	
		  view{
			  width:100%;
			  font-size: 30rpx;
			 padding-left:25%;
			 color:#b8b8b8;
		  }
		  
		  /*#ifdef H5*/
		  view{
		  			  width:100%;
		  			  font-size: 30rpx;
		  			 padding-left:20%;
		  			 color:#b8b8b8;
		  }
		   /*#endif*/
	  }
  }
  
  .progress-bar{
	  width:80%;
	  margin-left:20rpx;
	  margin-top:30rpx;
  }
  .submit-btn{
	  background-color: #3dbf41;
	 margin-top:30rpx;
	 margin-bottom:30rpx;
	 border-radius: 10rpx;
	 margin-left: 10%;
	  color: #fff;
	  width:80%;
	  height:100rpx;
	  font-size: 35rpx;
	  line-height: 100rpx;
	 
  }
  

   
   
</style>
