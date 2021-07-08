<template>
	<view>
		<view class="flex first-row ">
			<view class="left-first-row">
				<view class="shipping_num">{{received_info.dispatchNo}}</view>
				<view class="details">
					<text>{{received_info.goodsName}}</text>
					<!-- <text>JOVNO005</text>
					<text>WMS005</text> -->
				</view>
				
				<view class="details_weight">
					<!-- <text>20托盘</text>
					<text>|</text> -->
					<text>{{received_info.dispatchGoodsWeight}}吨</text>
					<!-- <text>|</text>
					<text>150立方</text> -->
				</view>
			</view>
			
			<view   class="right-first-row">
				<button type="primary" class="detail-btn" plain size="mini" @click="goWaybillDetails()">派车单状态和详情</button>
			</view>
		</view>
		
		
		<view class="person">
			<image src="/static/person.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">收货联系人：{{received_info.iscmConsignee.consigneeName}}</view>
				<view class="person-nums">
					<text class="cellphone">Tel: {{received_info.iscmConsignee.consigneePhone}}</text>
					<!-- <text>021-7878738</text> -->
				</view>
				<view class="person-nums">
					<text>收货地址：{{received_info.iscmConsignee.consigneeAddress}}</text>
				</view>
			</view>
			<image src="/static/phone-new.png" mode="aspectFit" @click="phoneCall(received_info.iscmConsignee.consigneePhone)"
			class="phone-new"></image>
		</view>
		
		<view class="person">
			<image src="/static/positioning.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="address-name">{{received_info.consignee_address}}</view>
				<view class="person-nums">
					<text>{{received_info.iscmShipper.shipperProvinceName}}</text>
					<text v-if ="received_info.iscmShipper.shipperCityName!=='市辖区'">{{received_info.iscmShipper.shipperCityName}}</text>
					<text v-if ="received_info.iscmShipper.shipperCityName==='市辖区'">{{received_info.iscmShipper.shipperRegionName}}</text>
					<text class="cuIcon-pullright lg text-gray margin-left margin-right"> </text>
					<text>{{received_info.iscmConsignee.consigneeProvinceName}}</text>
					<!-- 判断是否为“直辖市” -->
					<text v-if ="received_info.iscmConsignee.consigneeCityName!=='市辖区'">{{received_info.iscmConsignee.consigneeCityName}}</text>
					<text v-if ="received_info.iscmConsignee.consigneeCityName==='市辖区'">{{received_info.iscmConsignee.consigneeRegionName}}</text>
				</view>
				
			</view>
			<!-- <view>
				<view class="phone-new">进场</view>
				
			</view> -->
			
		</view>
		
		<view class="person" v-if="this.btn_title==='签收'">
			<image src="/static/weight.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">签收货物重量(吨)<text class="red">*</text></view>
				<view class="person-nums">
					
					<input class="cellphone"
					placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
					type="number" maxlength="20"
					 placeholder="请输入签收货物重量(吨)" @input="getSignWeight"></input>
					
				</view>
			</view>
		</view>
		
		<view class="person" v-if="this.btn_title==='装货'||this.btn_title==='发车'||this.btn_title==='签收'">
			<image src="/static/notes.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">备注</view>
				<view class="person-nums">
					
					<input class="cellphone" @input="getNote"
					type="text" maxlength="100"
					 placeholder="请输入备注"></input>
					
				</view>
			</view>
		</view>
		
		<view class="person">
			<image src="/static/chronometer.png" mode="aspectFit" class="person-img"></image>
			<view class="person-details">
				<view class="person-name">收发货地之间</view>
				<view class="person-nums">
					<text class="cellphone">最短距离约 {{short_distance}} 公里 </text>
				</view>
			</view>
			<view class="flex right-navigate"  @click="goMap">
				<image src="/static/navigate.png" mode="aspectFit" class="navi"></image>
				<text class="navi-text">导航</text>
			</view>
		</view>
		
		<!-- <view>
			<text>{{lng}}</text>
			
			<text>{{lat}}</text>
		</view>
		
		<view>
			<text>startCountrySubdivisionCode</text>
			<text>、、、、</text>
			<text>{{startCountrySubdivisionCode}}</text>
		</view>
		
		<view>
			<text>endCountrySubdivisionCode</text>
			<text>。。。。</text>
			<text>{{endCountrySubdivisionCode}}</text>
		</view> -->
		
		<view class="bars" v-if="btn_title==='装货'||this.btn_title==='发车'||this.btn_title==='签收'">
			<!-- <view @click="letsScan">
				<image src="/static/bar-code.png" mode="aspectFit" class="barcode big-image" ></image>
				<image src="/static/tachar.png" mode="aspectFit" class="tachar" v-if="tachar_scan" ></image>
				<view>扫一扫</view>
			</view> -->
			
			<view @click="takePhoto" v-if="this.btn_title==='装货'" data-index="people_vehicle_goods_photo">
				<image  :src="imgGoodsUrl" class="big-image" mode="aspectFit"></image>
				<image src="/static/tachar.png" mode="aspectFit" @click="cancelGoods"
				 class="tachar" v-if="tachar_goods"></image>
				<view class="big-caption">人车货合照</view>
			</view>
			<view @click="takePhoto" data-index="ticket_photo">
				<image :src="imgOrderUrl" class="big-image" mode="aspectFit"></image>
				<image src="/static/tachar.png" mode="aspectFit" @click="cancelOrder"
				class="tachar" v-if="tachar_order"></image>
				<view class="big-caption">{{btn_title}}单据</view>
			</view>
			
		</view>
		  
		  
		  <view class="btns">
			  <view>
				  <button type="default" class="submit-btn"
				  :loading="loading" :disabled="disabled" size="mini"
				   @click="confirm" v-if="btn_title==='发车'||btn_title==='装货'||btn_title==='签收'" >确认{{btn_title}}</button>
				  <button type="default" class="submit-btn"
				  :loading="loading" :disabled="disabled" size="mini"
				   @click="confirm" v-else >返回</button>
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
				tachar_order:false,		
				received_info:{},
				btn_title:"",
				//是否可以“发车”，“签收”等
				canDispatch:null,
				short_distance:null,
				queryParams:{
					"dispatchId": "",
					"signWeight": "",
					"leavePhoto": "",
					"receiptPhoto": ""
				},
				lng :null,
				lat :null,
				startCountrySubdivisionCode:"",//发货地起点行政区划代码
				endCountrySubdivisionCode:"",//收货地终点行政区划代码
				
			};
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:`待${this.btn_title}派车单`
			})
			
			
			this.canDispatch= uni.getStorageSync("canDispatch")
		},
	
		onLoad(options){
			var that = this
		    this.received_info = uni.getStorageSync("upload_item")

			this.btn_title = options.btn_title
			
			//for calcating distance of delivery
				uni.request({
					//传入高德web服务端key和发货地址
					 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.iscmShipper.shipperAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
					
					success:(res)=>{
							origin_location  = res.data.geocodes[0].location.split(",")
							  origin_latitude =parseFloat(origin_location[1]) 
							  origin_longitude = parseFloat(origin_location[0])
														   
							 uni.request({
							 	//传入高德web服务端key和目的地址
							 	 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.iscmConsignee.consigneeAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
							 	
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
		
			//解析目的地地址信息
				uni.request({
					//传入高德web服务端key和发货地址
					 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.iscmShipper.shipperAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
					// #ifdef APP-PLUS
					success:(res)=>{
						
							this.startCountrySubdivisionCode  = res.data.geocodes[0].adcode
							var main = plus.android.runtimeMainActivity();	
							main.data =	this.startCountrySubdivisionCode					   
							 uni.request({
							 	//传入高德web服务端key和目的地址
							 	 url: `https://restapi.amap.com/v3/geocode/geo?address=${this.received_info.iscmConsignee.consigneeAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
							 	
							 	success:(res)=>{
							 		      console.log(res,"目的地")
							 			 this.endCountrySubdivisionCode  = res.data.geocodes[0].adcode
							 			  
										 
							     }
							 })	 
				    },
					// #endif
				})
			
			// #ifdef APP-PLUS
			//Android 获取定位经纬度
			var LocationMy = plus.android.importClass("io.dcloud.UNIACABF38.LocationMy")
			var LocationMy = new LocationMy();  
			LocationMy.startMy(); // 这个方法一定要执行一次就行了
			
			//下面两个即为 安卓 高德sdk的定位经纬度
			this.lng = LocationMy.rLng();
			this.lat =LocationMy.rLat();
			
			//启动前台服务/SDK监管(已经弃用！！！！)
			 //获取宿主上下文
			 // var main = plus.android.runtimeMainActivity();
			   //通过反射获取Android的Intent对象
			  // var Intent = plus.android.importClass("android.content.Intent");
			  // //通过宿主上下文创建 intent
			  // var intent = new Intent(LocationMy.getIntent());
			  // //设置要开启的Activity包类路径  com.HBuilder.integrate.MainActivity换掉你自己的界面
			  // intent.setClassName(LocationMy, "io.dcloud.UNIACABF38.MyService");
			  //    //开启新的Service
			  //    LocationMy.startForeground(intent);
			  //==================================================================================
			  // var main = plus.android.runtimeMainActivity();  
			  // var Intent = plus.android.importClass('android.content.Intent');  
			  // var intent = new Intent();  
			  // intent.setClassName(main, "io.dcloud.UNIACABF38.MyService2");  
			  // main.startService(intent);
			  
			   
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
												
												//preview the photos
												// uni.previewImage({
												//             urls: res.tempFilePaths,
												            
												//         });
														
												
												 //upload the img
												 _self.imgGoodsUrl = tempFilePaths[0]
												  uni.setStorageSync("temp_photo_path", tempFilePaths[0])
												 //make the tachar img appear
												  _self.tachar_goods=true
												  
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
						 							
						 							//preview the photos
						 							uni.previewImage({
						 							            urls: res.tempFilePaths,
						 							            
						 							        });
						 									
						 							
						 							 //upload the img
						 							 _self.imgOrderUrl = tempFilePaths[0]
						 							
						 							 //make the tachar img appear
						 							  _self.tachar_order=true
						 							  
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
					  							
					  							//preview the photos
					  							uni.previewImage({
					  							            urls: res.tempFilePaths,
					  							            
					  							        });
					  									
					  							
					  							 //upload the img
					  							 _self.imgOrderUrl = tempFilePaths[0]
					  							 
					  							 //make the tachar img appear
					  							  _self.tachar_order=true
					  							  
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
						  							uni.previewImage({
						  							            urls: res.tempFilePaths,
						  							            
						  							        });
						  									
						  							
						  							 //upload the img
						  							 _self.imgOrderUrl = tempFilePaths[0]
						  							 
						  							 //make the tachar img appear
						  							  _self.tachar_order=true
						  							  
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
				},
			    
				cancelOrder(){
					this.imgOrderUrl = "/static/camera-scan.png"
					setTimeout(()=>{
						uni.showToast({
							title:"删除运单照片成功，请重新选择",
							icon:"none"
						})
					},500)
					this.tachar_order=false
				},
				
				
				 async confirm(){
					var authorization = uni.getStorageSync("token") 
					 if(this.btn_title==='装货'){
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
							uni.reLaunch({
								url:"/pages/way_bill/way_bill"
							})
						}else{
							
							uni.showToast({
								title:res.data.msg,
								duration:9000,
							})
						}
					 }else if(this.btn_title==='发车'){
						//派车单确认发车
						
						this.queryParams.dispatchId= this.received_info.dispatchId
						
						this.queryParams.leavePhoto = uni.getStorageSync("dispatch_pending_photo")
						
						var queryParams = this.queryParams
						
						if (!this.queryParams.leavePhoto){
							uni.showToast({
								title:"请上传发车单据！",
								icon:"none"
							})
							return
						} 
						
						const res = await this.$request({
							url:"/app/dispatch/departDispatch",
							method: "PUT",
							data:queryParams,
							header:{
								Authorization:authorization,
							},
							
						})
						console.log(res,"发车")
						if (res.data.msg =="操作成功"){
							uni.showToast({
								title:"操作成功"
							})
							uni.reLaunch({
								url:"/pages/way_bill/way_bill"
							})
						}else{
							
							uni.showToast({
								title:res.data.msg
							})
						}
						
						
					}else if(this.btn_title==='签收'){
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
						console.log(res,"签收")
						if (res.data.msg =="操作成功"){
							uni.showToast({
								title:"操作成功"
							})
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
						uni.navigateBack({
							
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
  .person{
	  width: 100%;
	  height:180rpx;
	  border-top:1px solid #f4f4f4;
	  padding:10rpx;
	  display: flex;
	  flex-direction:row;
	  .person-details{
		  width:60%;
	  }
	  .person-img{
		  width:100rpx;
		  height:100rpx;
		  margin-left:50rpx;
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
		  margin-left:20rpx;
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
  

   
   
</style>
