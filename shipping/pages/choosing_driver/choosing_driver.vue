<template>
	<view>
		<view class="flex first-row ">
			<view class="left-first-row">
				<view class="shipping_num">运单编号：{{received_info.waybillNo}}</view>
				<view class="details">
					<text>{{received_info.goodsName}}</text>
					<!-- <text>JOVNO005</text>
					<text>WMS005</text> -->
				</view>
				
				<view class="details_weight">
					<!-- <text>20托盘</text>
					<text>|</text> -->
					<view class="margin-top"><text>货物总重： {{received_info.goodsWeight}} 吨</text></view>
					<view class="margin-top"><text>目前剩余重量： {{received_info.surplusGoodsWeight}} 吨</text></view>
					<!-- <text>|</text>
					<text>150立方</text> -->
				</view>
			</view>
			
			<!-- <view   class="right-first-row">
				<button type="primary" class="detail-btn" plain size="mini" @click="goShippingOrderDetails">运单状态和详情</button>
			</view> -->
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
					<!-- <text class="cellphone bg-gray-gradual">请选择副驾驶员</text>
					<text class="cuIcon-right lg text-gray"></text>	 -->
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
				<view>{{mes}}</view>
			</view>
		</view>
			
	<!-- 	</view> -->
		  
		<button type="default" class="submit-btn" :loading="loading" :disabled="disabled" size="mini" @click="upload" >提交</button>
		
		
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
				mes:"",
				 percent:0,
				 loading:false,
				 disabled:false,
				
				btn_title:"",
				short_distance:null,
				
				chief_driver_choosen:"",
				has_chief_driver:false,
				has_vehicle:false,
				goods_weight:"",
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
			this.queryParams.waybillId =   this.received_info.waybillId
			this.btn_title = options.btn_title
			//if chief driver has been choosen, make it appeared.
			var chief_driver_choosen = uni.getStorageSync("chief_driver_choosen")
			this.queryParams.firstDriverId =uni.getStorageSync("chief_driver_id")
			if (chief_driver_choosen){
				this.chief_driver_choosen =	chief_driver_choosen
				this.has_chief_driver = true
			}
			//if vehicle has been choosen, make it appeared.
			var vehicle_choosen = uni.getStorageSync("vehicle_choosen")
			if (vehicle_choosen){
				this.vehicle_choosen =	vehicle_choosen
				this.has_vehicle = true
			}
			this.queryParams.vehicleId =uni.getStorageSync("vehicle_id")
		},
		
		methods:{
			goShippingOrderDetails(){
				
				uni.navigateTo({
					url:"/pages/shipping_order_details/shipping_order_details"
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
				// xhr.open('POST','https://wl.xcmgzhilian.com/prod-api/app/waybill/chooseDriverAndVehicle')
				 //测试库
				 xhr.open('POST',' http://10.22.2.138:8080/app/waybill/chooseDriverAndVehicle')
				//xhr.open('POST','http://10.22.0.136:8080/app/waybill/chooseDriverAndVehicle')
				 xhr.setRequestHeader('Content-Type','application/json')//确定header里为Content-Type','application/json'
				 //并防止uni.request 自动添加“charset = utf-8”
				 
				 //加入token
				 xhr.setRequestHeader('Authorization',authorization)
				 xhr.send(JSON.stringify(queryParams))//发送data
				 
				 xhr.onreadystatechange = function(){
										  if (xhr.status==200){
											 uni.showToast({
											   	title:"操作成功",
											   	icon:"none"	,									
											   })
											   
											   uni.switchTab({
											     		url:"/pages/shipping_order/shipping_order"
											     	})
										  } else {
											  uni.showToast({
											    	title:"信息不完整,请完善",
											    	icon:"none"	,									
											    })
										  }
										  
										
				 }
				 //#endif
				 
				 
				 
				 
				//remove driver and vehicle storage
				try {
				    uni.removeStorageSync('chief_driver_choosen');
					uni.removeStorageSync('vehicle_choosen');
					
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
   
</style>
