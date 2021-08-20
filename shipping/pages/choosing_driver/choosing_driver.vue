<template>
	<view class="page">
	<!-- 	<view class="flex first-row ">
			<view class="left-first-row">
				<view class="shipping_num">运单编号：{{received_info.waybillNo}}</view>
				<view class="details">
					<text>{{received_info.goodsName}}</text>
					
				</view>
				
				<view class="details_weight">
					
					<view class="margin-top"><text>货物总重： {{received_info.goodsWeight}} 吨</text></view>
					<view class="margin-top"><text>目前剩余重量： {{received_info.surplusGoodsWeight}} 吨</text></view>
					
				</view>
			</view>
			
		
		</view>
		
		
		<view class="person" @click="goSelectChiefDriver">
			<image src="/static/person.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">主驾驶员</view>
				<view class="person-nums">
					<text v-if ="has_chief_driver">{{chief_driver_choosen}}</text>
					<text v-if ="!has_chief_driver" class="cellphone">请选择主驾驶员</text>
					<text class="cuIcon-right lg text-gray"></text>	
				</view>
			</view>
		</view>
		
		<view class="person" @click="goSelectAssistentDriver">
			<image src="/static/assistent-driver.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">副驾驶员</view>
				<view class="person-nums">
					
				</view>
			</view>
		</view>
		
	
		
		<view class="person" @click="goSelectVehicle">
			<image src="/static/truck.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">运输车辆</view>
				<view class="person-nums">
					<text v-if ="has_vehicle">{{vehicle_choosen}}</text>
					<text v-if ="!has_vehicle" class="cellphone">请选择运输车辆</text>
					<text class="cuIcon-right lg text-gray"></text>	
				</view>
			</view>
		</view>
		
		<view class="person" >
			<image src="/static/weight.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">货物重量(吨)<text class="red">*</text></view>
				<view class="person-nums">
					
					<input class="cellphone"
					
					type="number" maxlength="20"
					 placeholder="请输入货物重量(吨)" @input="getWeight"></input>
					
				</view>
			</view>
		</view>
		
		<view class="person" @input="getNote">
			<image src="/static/notes.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">备注</view>
				<view class="person-nums">
					
					<input class="cellphone"
					type="text" maxlength="200"
					 placeholder="请输入备注"></input>
					
				</view>
				
			</view>
		</view> -->
			<text class="cuIcon-back lg text-gray" @click="goBack"></text>
	    <view class="shipping_no">运单编号：{{received_info.waybillNo}}</view>
		
		<view class="total_weight">
			<text class="title">总重量:</text>
			<text class="num">{{received_info.goodsWeight}} 吨</text>
		</view>
		
		<view class="address">
			<view>
				<text class="transport">运输地址</text>
			</view>
			<view>
				<!-- <text class="distance">运输地址</text> -->
			</view>
		</view>
		  
		  
		  <view>
			  <view class="start-point">
				  <image src="/static/green-circle.png" mode="widthFix" class="circle"></image>
				  <text class="chief-addr">
					  <text>{{received_info.iscmWaybillInformationRecord.shipperProvinceName}}-</text>
					  				 
					   <text v-if ="received_info.iscmWaybillInformationRecord.shipperCityName!=='市辖区'">{{received_info.iscmWaybillInformationRecord.shipperCityName}}-</text>
					   <text >{{received_info.iscmWaybillInformationRecord.shipperRegionName}}</text>
				  </text>
				  
				   
				   <view class="addr">
				   	 <input type="text"  :value="received_info.iscmWaybillInformationRecord.shipperAddress" disabled @input="" class="addr-input">
				   				
				   </view>
			  </view>
			  
		  </view>
		  
		  <view class="vertical-line">
			  
		  </view>
		  <view >
		  			  <view class="start-point">
		  				  <image src="/static/pink-circle.png" mode="widthFix" class="circle"></image>
		  				 <text class="chief-addr">
							 <text>{{received_info.iscmWaybillInformationRecord.consigneeProvinceName}}-</text>
							 		  				 
							  <text v-if ="received_info.iscmWaybillInformationRecord.consigneeCityName!=='市辖区'">{{received_info.iscmWaybillInformationRecord.consigneeCityName}}-</text>
							  <text>{{received_info.iscmWaybillInformationRecord.consigneeRegionName}}</text>
						 </text>
						  
						   
						   <view class="addr">
						   	 <input type="text"  :value="received_info.iscmWaybillInformationRecord.consigneeAddress" disabled @input="" class="addr-input">
						   				
						   </view>
		  			  </view>
		  </view>
		  
		  
		  <view class="choose-driver" @click="goSelectChiefDriver">
		    <text class="red">*</text>
		  	<view class="driver-details">
		  		<view class="driver-name">主驾驶员</view>
		  		<view class="driver-input">
		  			<text v-if ="has_chief_driver" class="cellphone">{{chief_driver_choosen}}</text>
		  			<text v-if ="!has_chief_driver" class="cellphone">请选择主驾驶员</text>
		  			
		  		</view>
		  	</view>
		  </view>
		  
		  <view class="choose-driver" @click="goSelectVehicle">
		    <text class="red">*</text>
		  	<view class="driver-details">
		  		<view class="driver-name">运输车辆</view>
		  		<view class="driver-input">
		  			<text v-if ="has_vehicle" class="cellphone">{{vehicle_choosen}}</text>
		  			<text v-if ="!has_vehicle" class="cellphone">请选择车辆</text>
		  			
		  		</view>
		  	</view>
		  </view>
		  
		  <view>
			  <text class="wait">待分配:</text>
			  <text class="ton-color">{{received_info.surplusGoodsWeight}} 吨</text>
		  </view>
		  
		  <view class="choose-driver" >
		  	<text class="red">*</text>
		  	<view class="driver-details">
		  		<view class="driver-name">分配重量</view>
		  		<view class="driver-input">
		  			
		  			<input class="cellphone"
		  			
		  			type="number" maxlength="20" :value="dispatch_goods_weight"
		  			 placeholder="请输入分配给该车的重量" @input="getWeight"></input>
		  			
		  		</view>
		  	</view>
		  </view>
		  
		  
		  <view class="choose-driver" @input="getNote">
		  	
		  	<view class="driver-details">
		  		<view class="driver-name margin-left-xm">备注</view>
		  		<view class="driver-input">
		  			
		  			<input class="cellphone"
		  			type="text" maxlength="200"
		  			 placeholder="请输入备注"></input>
		  			
		  		</view>
		  		
		  	</view>
		  </view>
		  
		<button type="default" class="submit" :loading="loading" :disabled="disabled"  @click="upload" >提交</button>
		
		
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
				uni_token:"",
				 percent:0,
				 loading:false,
				 disabled:false,
				
				btn_title:"",
				short_distance:null,
				
				chief_driver_choosen:"",
				has_chief_driver:false,
				has_vehicle:false,
				goods_weight:"",
				dispatch_goods_weight:"",
				note:"",
				queryParams:{
					waybillId:"",
					vehicleId:"",
					firstDriverId:"",
					dispatchGoodsWeight:"",
				},
			};
		},
		
	
		 onLoad(options){
			var that = this
		    this.received_info = uni.getStorageSync("accepted_shipping_orders")
			console.log(this.received_info,'received_info');
			this.queryParams.waybillId =   this.received_info.waybillId
			this.btn_title = options.btn_title
			
			
			
		},
		
		 async onShow(){
			 
			 getApp().globalData.shipping_order_page =1
			 
			 
			 var that = this
			 //try catch 是否有getStorageSync('chief_driver_choosen')
			 try {
			     const value = uni.getStorageSync('chief_driver_choosen');
			     if (value) {
			        
					 //if chief driver has been choosen, make it appeared.
					 let chief_driver_choosen = uni.getStorageSync("chief_driver_choosen")
					 chief_driver_choosen=JSON.parse(chief_driver_choosen)
					 
					 this.queryParams.firstDriverId = chief_driver_choosen.driverId
					 if (chief_driver_choosen){
					 	this.chief_driver_choosen =	chief_driver_choosen.driverName
					 	this.has_chief_driver = true
					 }
					 //reappear the signed weight
					 let dispatch_goods_weight_filled = uni.getStorageSync("dispatch_goods_weight")
					  
					   this.dispatch_goods_weight = dispatch_goods_weight_filled 
					   
					   this.queryParams.dispatchGoodsWeight = dispatch_goods_weight_filled 
					   
					  //try catch 是否有getStorageSync('vehicle_choosen') 
					  try {
					      const value = uni.getStorageSync('vehicle_choosen');
					      if (value) {
					          
					            
					          //if vehicle has been choosen, make it appeared.
					          let vehicle_choosen = uni.getStorageSync("vehicle_choosen")
					          vehicle_choosen =JSON.parse(vehicle_choosen)
					        
					          	this.vehicle_choosen =	vehicle_choosen.vehiclePlateNumber
					          	this.has_vehicle = true
					          	//fetch the chosen vehicleId from local storage
					          	this.queryParams.vehicleId = vehicle_choosen.vehicleId
					       
					          	
							  
							  
					      }else{
							  //if vehicle has NOT been choosen, bind it with DriverId .
							  //use the driverID and carrierID to bind the vehicle ID
							  
							 
							  const firstDriverId = this.queryParams.firstDriverId
							  
							   
							   
							   //get the carrierID, which is the userBusinessId in the userInfo
							   const carrier = uni.getStorageSync("user_info")
							   const carrierId = carrier.data.user.userBusinessId
							  
							   
							   var authorization = uni.getStorageSync("token")
							   that.uni_token = uni.getStorageSync("token")
							   const res = await this.$request({
							   	url:`/app/dispatch/getRecentlyUsedVehicle/${carrierId}/${firstDriverId}`,
							   	header:{
							   		Authorization:authorization,
							   		
							   	},
							   
							   })
							        
							
							    
							   this.vehicle_choosen =	res.data.data.vehiclePlateNumber
							   this.has_vehicle = true 
							    //use the bound vehicle ID
							   this.queryParams.vehicleId = res.data.data.vehicleId
							  					          
							  							  
							  
						  }
					  } catch (e) {
					      // error
						 
						  
					  } 
					   
					  
			     }
			 } catch (e) {
			     // error
			 }
			 
			 
			
			
			
		},
		
		methods:{
			
			goBack(){
				
				uni.reLaunch({
					url:"/pages/shipping_order/shipping_order"
				})
				
			},
			goSelectChiefDriver(){
				
				uni.navigateTo({
					url:"/pages/select_chief_driver/select_chief_driver"
				})
				
			},
			goSelectAssistentDriver(){
				
				// uni.navigateTo({
				// 	url:"/pages/select_assistent_driver/select_assistent_driver"
				// })
				
			},
			 goSelectVehicle(){
				
				uni.navigateTo({
					url:"/pages/select_vehicle/select_vehicle"
				})
				
			},
			getWeight(e){
				
				this.queryParams.dispatchGoodsWeight = e.target.value
				uni.setStorageSync("dispatch_goods_weight",this.queryParams.dispatchGoodsWeight)
			},
			getNote(){
				
				this.note = e.target.value
				
			},
				
			async upload(){
				
				var queryParams = this.queryParams
				var authorization = uni.getStorageSync("token")
				//是否选择车辆
				if (this.queryParams.vehicleId ==null 
				|| this.queryParams.vehicleId == "" 
				|| this.queryParams.vehicleId.length <1){
					uni.showToast({
						title:"未选择车辆, 请选择",
						icon:"none",
					})
					return
				}
				//是否选择司机
				if (this.queryParams.firstDriverId ==null
				|| this.queryParams.firstDriverId == "" 
				|| this.queryParams.firstDriverId.length <1){
					uni.showToast({
						title:"未选择司机, 请选择",
						icon:"none",
					})
					return
				}
				
				//是否写入重量
				if (this.queryParams.dispatchGoodsWeight ==null
				|| this.queryParams.dispatchGoodsWeight == "" 
				|| this.queryParams.dispatchGoodsWeight ==0){
					uni.showToast({
						title:"未输入重量, 请输入",
						icon:"none",
					})
					return
				}
				
				//是否超过剩余重量
				if (this.queryParams.dispatchGoodsWeight >this.received_info.surplusGoodsWeight){
					uni.showToast({
						title:"派车单分配到的重量大于运单剩余重量, 请重选",
						icon:"none",
					})
					return
				}
				
				//#ifdef H5
				const res = await this.$request({
					url:"/app/waybill/chooseDriverAndVehicle",
					method: "POST",
					data:queryParams,
					
					header:{
						Authorization:authorization,
						'content-type': 'application/json', 
					},
					
				})
				//判断输入重量是否大于剩余重量
				if(res.data.msg =="派车单分配到的重量大于运单剩余重量"){
					uni.showToast({
						title:res.data.msg + "请重新选择重量",
						icon:"none",
					})
				}else if(res.data.msg == null){
					uni.showToast({
						title:"输入信息不完整，请完善",
						icon:"none",
					})
				}else if (res.data.msg =="操作成功"){
					uni.showToast({
						title:res.data.msg ,
						
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:"/pages/shipping_order/shipping_order"
						})
					},2000)
					
				}
				 //#endif
				 
				 
				 
				 //#ifdef APP-PLUS
				 var xhr = new plus.net.XMLHttpRequest()
				 //正式库，危险！！！！
				 //xhr.open('POST','https://wl.xcmgzhilian.com/prod-api/app/waybill/chooseDriverAndVehicle')
				//半测试版
				 xhr.open('POST',' http://116.62.172.131:88/stage-api/app/waybill/chooseDriverAndVehicle')
				 //测试库
				 //xhr.open('POST',' http://10.22.2.138:8080/app/waybill/chooseDriverAndVehicle')
				//xhr.open('POST','http://10.22.0.136:8080/app/waybill/chooseDriverAndVehicle')
				 xhr.setRequestHeader('Content-Type','application/json')//确定header里为Content-Type','application/json'
				 //并防止uni.request 自动添加“charset = utf-8”
				 
				 //加入token
				 xhr.setRequestHeader('Authorization',authorization)
				 xhr.send(JSON.stringify(queryParams))//发送data
				 
				 xhr.onreadystatechange = function(){
										  if (xhr.status==200){
											 uni.showToast({
											   	title:"操作成功,请司机到'派车单'中进行操作",
											   	icon:"none"	,									
											   })
											   
											   uni.switchTab({
											     		url:"/pages/shipping_order/shipping_order?page=2"
											     	})
										  } else {
											  uni.showToast({
											    	title:"信息不完整,请完善",
											    	icon:"none"	,									
											    })
										  }
										  
										
				 }
				 //#endif
				 
				 
				 
				 
				//remove driver and vehicle storage buffers
				try {
				    uni.removeStorageSync('chief_driver_choosen');
					uni.removeStorageSync('vehicle_choosen');
					uni.removeStorageSync('dispatch_goods_weight');
				} catch (e) {
				    // error
				}
			}	
			
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
	  height:180rpx;
	  border-top:1px solid #f4f4f4;
	  padding:10rpx;
	  display: flex;
	  flex-direction:row;
	  justify-content: center;
	  .person-details{
		  width:55%;
	  }
	  .person-img{
		  width:100rpx;
		  height:100rpx;
		  margin-right:50rpx;
	  }
	  
	  .person-name{
		  font-size: 25rpx;
	  }
	  
	 /*   .person-nums{
		  color:#8e8e8e ;
		  margin-top:10rpx;
		  display: flex;
		  flex-direction: row;
		  justify-content: space-between;
		.cellphone{
			  margin-right:20rpx;
			  font-size: 40rpx;
			  color:#ccc;
		  }
	  }*/
	  
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
	  margin-left: 30rpx;
  }
  

   .red{
   	color: #f00;
   }
   
   
   
  
   .page{
	   padding:5%;
   }
   .shipping_no{
	   margin-top:60rpx;
	   color: #1684FC;
	   font-size: 30rpx;
	   font-family: SourceHanSansSC-bold PingFangSC-bold SourceHanSansSC-regular PingFangSC-regular Arial;
   }
   
   .total_weight{
	   margin-top: 30rpx;
	   margin-bottom: 120rpx;
	   .title{
		   font-weight: 800;
		   font-size: 32rpx;
	   }
	   .num{
		    color: #4f70e7;
		   font-size: 30rpx;
		   margin-left: 20rpx;
	   }
   }
   
   .address{
	   display: flex;
	   flex-direction: row;
	   justify-content: space-between;
	   .transport{
		    font-size: 40rpx;
			font-weight: 800;
			
	   }
   }
   
   
   
   
   
   .submit{
	   margin-top: 20rpx;
	   width: 80%;
	   background-color: #3894ff;
	   color: #fff;
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
   
   .chief-addr{
	 
	 width:60%;
	 margin-left:10%;
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
   
   .choose-driver{
	  margin-top: 135rpx; 
	 display: flex;
	 flex-direction: row;
	 border-bottom: 1rpx dashed #c1c1c1;
	 padding-bottom: 40rpx;
	 .driver-details{
		 display: flex;
		 flex-direction: row;
		 .driver-name{
			font-size: 38rpx; 
			font-weight: 800;
			width: 200rpx;
		 }
		 
		 .driver-input{
			 margin-left: 50rpx;
			 color: #272736;
		 }
	 }
   }
   
   
   .wait{
	   color: #50555e;
	   margin-top: 10rpx;
   }
   
   .ton-color{
	   color: #f00;
   }
   
   .margin-left-xm{
	   margin-left: 10rpx;
   }
   
   .cellphone{
			  margin-right:20rpx;
			  font-size: 40rpx;
			  color:#777;
		  }
</style>
