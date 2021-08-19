<template>
	<view>
		<!-- <view class="primer-frase">
			您可以进行询价和报价
		</view>
		    
		<view class="individual-driver radius" @click="showDriverModal">
			<view class="left-side">
				<view class="title">询价</view>
				<view class="desc">
					查询价格列表
				</view>
			</view>
			<view>
				<image src="/static/analysischart.svg" class="driver-img" mode=""></image>
			</view>
		</view>
		
	
		
		<view class="individual-driver radius" @click="showCompanyModal">
			<view class="left-side">
				<view class="title">报价</view>
				<view class="desc">
					您的承运报价列表
				</view>
			</view>
			<view>
				<image src="/static/areafiftyone.svg" class="driver-img" mode=""></image>
			</view>
		</view> -->
		
		<view class="waybill-body">
			<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			  lower-threshold="200" enable-flex="true" >
			  
			<view v-for="(item,index) in inquiry_list" :key="index" class="one_waybill " >
				<view class="first-row">
				
					 
					<text selectable class="num">
						<text class="num-title">询价单号:</text> 
					    <text class="num-no">{{item.enquiryNo}}</text>    
					</text>
					
					
					<!-- <text class="copy" @click="copy(item.enquiryNo)">复制</text> -->
					
					
					
					<!-- <text class="waybill_state">
						 
						 <text>询价状态:</text>
						  <text>
							 {{enquiryStatusOptions[enquiryStatusSendValue.findIndex(value=>value == item.enquiryStatus)]}} 
						  </text>
						
					</text> -->
				</view>
				
				<view class="first-row">
					<view class="distance">
						<text >距报价截止时间剩余</text>
					<!-- 	<text class="distance-num"> {{remainingTime[index]}}   </text> --> 
					<text class="distance-num"> {{(new Date(item.stopTime).getTime()-new Date().getTime()>=0)?( (parseInt(((new Date(item.stopTime).getTime()-new Date().getTime())/(60*60*24*1000)))+"天")  +     (parseInt(((new Date(item.stopTime).getTime()-new Date().getTime())/(60*60*1000)%24))   +"时")      ):"已过期"}}   </text>
					</view>
					<view class="ton">
						{{item.iscmOrder.surplusGoodsWeight}}吨
					</view>
				</view>
				
				<view class="waybill_details">
					
					<view class="addr">
						<view>
							<image src="/static/blue-start.png" mode="widthFix" class="points"></image>
							<text>
							  <text>{{item.iscmOrderInformationRecord.shipperProvinceName}}-</text>
							  
							   <text v-if ="item.iscmOrderInformationRecord.shipperCityName!=='市辖区'">{{item.iscmOrderInformationRecord.shipperCityName}}</text>
							   <text v-if ="item.iscmOrderInformationRecord.shipperCityName==='市辖区'">-{{item.iscmOrderInformationRecord.shipperRegionName}}</text>
							</text> 
						</view>
						
						<view class="vertical-line"></view>
						
						<view>
							<image src="/static/green-end.png" mode="widthFix" class="points"></image>
							<text>
							  <text>{{item.iscmOrderInformationRecord.consigneeProvinceName}}-</text>
							
							  <text v-if ="item.iscmOrderInformationRecord.consigneeCityName!=='市辖区'">{{item.iscmOrderInformationRecord.consigneeCityName}}-</text>
							  <text v-if ="item.iscmOrderInformationRecord.consigneeCityName!=='市辖区'">{{item.iscmOrderInformationRecord.consigneeRegionName}}</text>
							</text> 
						</view>
					</view>
					
					<view class="long">
						<view>
						    <image src="/static/arrow-nav.png" mode="widthFix" class="nav"></image>
						    <!-- <text>总距离 {{distance_to_origin[index]}}公里</text>	 -->
							 <text>总距离 {{item.short_distance}}公里</text>
						</view>
						
						<view class="goods-name">
							{{item.iscmSource.goodsName}}
						</view>
					</view>
					
				
					
					<!-- <view class="shipping_content">
						<view>
							<text class="goods_name text-green" v-if="item.iscmQuote!=null&&item.iscmQuote.quoteStatus==1">报价状态 : 已报价</text>
				
							<text class="goods_name text-red" v-if="item.iscmQuote==null||item.iscmQuote.quoteStatus==2">报价状态 : 未报价</text> 
						</view>
						
						<view>
							<text class="goods_name">下单方式 : {{sourceOrderWayOptions[item.orderWay-1]}}</text>
						</view>
					   
					   <view>
					     	<text>计价方式 :{{settlementMethodOptions[settlementMethodSendValue.findIndex(value=>value == item.settlementMethod)]}}</text>
					   </view>
					   
						<view>
							 <image src="/static/begin-time.svg" mode="aspectFit" class="sm-pic" ></image>
							<text class="create_time border-red">询价开始: <text>{{item.startTime}}</text> </text>		
						</view>
						<view>
							<image src="/static/end-time.svg" mode="aspectFit" class="sm-pic" ></image>
							<text class="create_time border-red">询价结束: <text>{{item.stopTime}} 
							  </text> </text>		
						</view>
						
						<view>
							<text class="carrier">订单号:{{item.orderNo}}</text>		
						</view>
						<view>
							<text class="carrier">货源单号:{{item.sourceNo}}</text>		
						</view>
					</view>
					   
					  <view class="actions" v-if="(Date.parse(item.stopTime)- Date.parse(new Date()))>0" >
							 	
							<button type="default" size="default" 
							 class="receive-btn radius" 
							  @click="quote(item)">报价</button>
						</view> -->
					
				</view>
				
				<view class="loading-time">
					<view class="fecha-de-despacho">询价日期</view>
					<view class="fecha">开始: {{item.startTime}}</view>
					<view class="fecha">截止: {{item.stopTime}}</view>
				</view>
				
				<!-- <view class="various" v-if = "item.cargoBoxType != null">
					<text v-for ="(item,index) in item.cargoBoxType" :key="index" class="cargoBoxType "></text>
				</view>
				
				<view class="various" v-if = "item.vehicleLength != null">
					<text v-for ="(item,index) in item.vehicleLength" :key="index" class="cargoBoxType "></text>
				</view> -->
				
				<!-- <view class="address"> 
					<text>公司：{{item.companyName}}</text>
				</view> -->
				
				
				  
				<view class="btn-level">
					<button size="mini" class="detail-btn" :disabled="item.iscmQuote==null"
					  @click="goQuoteDetail(item)">报价详情</button>
					<button size="mini" class="btn" :disabled="new Date(item.stopTime).getTime()-new Date().getTime()<0"
				@click="quote(item)">报价</button>
				</view>
			</view>
			<info-not-found v-if ="show_not_found"/>
			</scroll-view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	import infoNotFound from "@/pages/info_not_found/info_not_found.vue"
	
	var _self;
	var origin_location
	var origin_latitude
	var origin_longitude
	var destiny_location
	var destiny_latitude
	var destiny_longitude
	
	export default {
		data(){
			return{
			  load_more:true,//继续加载列表
			 
			    // 询价单状态字典
			  enquiryStatusOptions: [],
			  enquiryStatusSendValue: [],
			   // 报价状态字典
			  quoteStatusOptions:[],
			    // 支付方式字典
			  paymentTypeOptions: [],
			   // 下单方式
			  sourceOrderWayOptions: [],
			  sourceOrderWaySendValue: [],
			  //计价方式
			  settlementMethodOptions: [],
			  settlementMethodSendValue: [],
			  
			  short_distance:0,
			  distance_to_origin: [],
			  index:0,
			 
			  inquiry_list:[],
			  
			  remainingTime:[],
			  
			  show_not_found:false,
		      now_state:this.transporte_state,
			  state_text:"",
			  btn_text:"",
			  //是否可以“发车”，“签收”等
			  canDispatch:null,
			  //permite to quote(with remaining time )
			  disable_quote:false,
			   //permite to see quote detail(if has quoted a price )
			  disable_quote_detail:false,
			  
			   queryParams: {
			             pageNum: 1,
			             pageSize: 3,
			             
			           },
			}
		},
		props:["source","refresh_index"],
		
		components:{
			infoNotFound
		},
		created() {
			// 询价单状态字典
			this.getEnquiryStatusOptions()
			// 报价状态字典
			this.getQuoteStatusOptions()
			// 下单方式字典
			this.getSourceOrderWayOptions()
			//计价方式
			this.getSettlementMethodOptions()
			
		},
		mounted(){
			console.log (this.source ,"source")
			if (this.source.state ==1){
				
			}else if (this.source.state ==2){
				this.queryParams.designatedStatus = [1,2]
			}else if (this.source.state ==3){
				this.queryParams.designatedStatus = [3]
			}
			this.searchInquiry()
			
			
		},
		
		onShow(){
			var that = this
			
		    that.searchInquiry()
			
			
		},
		onPullDownRefresh() {
		        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		        var that = this
		        
		        that.searchInquiry()
				
		        setTimeout(function () {
		            uni.stopPullDownRefresh();  //停止下拉刷新动画
		        }, 3000);
		},
		methods:{
			
			upper: function(e) {
				  
			        },
			 lower: function(e) {
				
						setTimeout(() => {
						
						//TODO这里填写你加载数据的方法
						
						this.queryParams.pageNum += 1
						if (this.load_more){
						  this.searchInquiry()
						}
											  
						
						}, 1000)
						
						
						
						
			        },
					
			// 询价单状态字典
			async getEnquiryStatusOptions(){
				const enquiryStatusOptions = await this.$getRegistDicts("enquiry_status")
				
				
				this.enquiryStatusOptions = enquiryStatusOptions.data.data.map(e=>e.dictLabel)
				
				this.enquiryStatusSendValue = enquiryStatusOptions.data.data.map(e=>e.dictValue)
				
				
			},				
					
					
					
			// 报价状态字典
			async getQuoteStatusOptions(){
				const quoteStatusOptions = await this.$getRegistDicts("quote_status")
				
				
				this.quoteStatusOptions = quoteStatusOptions.data.data.map(e=>e.dictLabel)
				
				
				
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
					
			goQuoteDetail(item){
				    var that = this
					uni.setStorageSync('quote_item',item)
					uni.navigateTo({
						url:`/pages/cada_quote/cada_quote`
					})
				
				
			},
			        
			quote(item){
				var that = this
					uni.setStorageSync('inquiry_item',item)
					uni.navigateTo({
						url:`/pages/cada_inquiry/cada_inquiry`
					})
				
				
			},
			
			
			copy(data){
				var that = this
				uni.setClipboardData({
				    data:data,
				    success: function () {
				       
						uni.showToast({
							title:"copy"
						})
				    }
				});
			},
			phoneCall(tel){
				uni.makePhoneCall({
				    phoneNumber: tel ,
					
				});
				      },
					  
			async searchInquiry(){
				
				var that = this
				
				
					var queryParams= that.queryParams
					
					 var authorization = uni.getStorageSync("token")
					  
						  const res = await that.$request({
						  	 	url:"/app/enquiry/list",
						  	 	
						  	 	header:{
						  	 		Authorization:authorization,
						  	 	},
						  	 	data:queryParams
						  	 })
					
						    console.log(res,'jh');
							
							
							
						  if(res.data.total == 0){
						  	setTimeout(()=>{
						  		that.show_not_found = true
						  	},30)
						  	return
						  }
						  
						  //stop sending request
						  if (that.queryParams.pageNum*that.queryParams.pageSize>=res.data.total){
						  	that.load_more = false
						  }
						  
						  if (that.inquiry_list.length< res.data.total){
						  	that.inquiry_list =[...that.inquiry_list,...res.data.rows]
						  	that.show_not_found = false
						  }else{
						  	uni.showToast({
						  		title:"没有更多的信息了",
						  		icon:"none"
						  	})
							
						  }
						  
						  
						  for (var i = 0; i < that.inquiry_list.length; i++) {
							 
							  var inquiry_every = that.inquiry_list[i]
							 if (that.load_more_address == true){
								 //get distance between sender and receiver
								 uni.request({
								 	//传入高德web服务端key和发货地址
								 	url: `https://restapi.amap.com/v3/geocode/geo?address=${inquiry_every.iscmOrderInformationRecord.shipperAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
								 	success: (res) => {
								 		if (res == null){
											return
										}
								 		origin_location = res.data.geocodes[0].location.split(",")
								 		
								 		origin_latitude = parseFloat(origin_location[1])
								 		origin_longitude = parseFloat(origin_location[0])
								 		
								 		uni.request({
								 			//传入高德web服务端key和目的地址
								 			 url: `https://restapi.amap.com/v3/geocode/geo?address=${inquiry_every.iscmOrderInformationRecord.consigneeAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
								 			
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
								 																var short_distance = that.short_distance
								 																
								 																that.distance_to_origin.push(short_distance)
								 															   that.inquiry_list[i].short_distance =short_distance
								 		                     
								 															 //console.log( res.data.data.route.paths.duration,"货车规划")									 			 
								 												     }
								 												 })
								 												 
								 					 
								 		    }
								 		})	
								 	}
								 		
								 })
							 } 
							 
							//decide if should continue fetch address
							if (i == that.inquiry_list.length-1){
								that.load_more_address = false
							}
							
							//decide the remaining time 
					if(new Date(inquiry_every.stopTime).getTime()-new Date().getTime()>=0){
						var restTime = new Date(inquiry_every.stopTime).getTime()-new Date().getTime()
						var day = parseInt(restTime/(60*60*24*1000))
						var hour = parseInt(restTime/(60*60*1000)%24)
						var min = parseInt(restTime/(60*1000)%60)
						that.disable_quote = false
						var remaining_time = day + "天" + hour + "时" + min + "分"
					}else{
						that.disable_quote = true
					 	remaining_time = "已过期"
					 }
						
						that.remainingTime.push(remaining_time)
						
							
					}
				
				
				
			},
			
			showDriverModal(){
				uni.navigateTo({
					url:"/pages/inquiry/inquiry"
				}) 
			},
			
			
			getRemainingTime(item){
				
				
				if(new Date(item.stopTime).getTime()-new Date().getTime()>=0){
					var restTime = new Date(item.stopTime).getTime()-new Date().getTime()
					var day = parseInt(restTime/(60*60*24*1000))
					var hour = parseInt(restTime/(60*60*1000)%24)
					var min = parseInt(restTime/(60*1000)%60)
					this.disable_quote = false
					return day + "天" + hour + "时" + min + "分"
				}else{
					this.disable_quote = true
				 	return "已过期"
				 }
				
			},
			showCompanyModal(){
			
				uni.navigateTo({
					url:"/pages/quote/quote"
				}) 
				
			},
			
		}
	}
</script>

<style lang="scss" scoped>
    .primer-frase{
		width: 90%;
		margin-left:5% ;
		margin-bottom:30rpx ;
	}
	
	
	.individual-driver{
		border:1rpx solid #eee;
		display:flex;
		flex-direction: row;
		width:90%;
		height:200rpx;
		margin-left:5% ;
		margin-bottom: 20rpx;
		padding: 10rpx;
		.left-side{
			width:70%;
			.title{
				font-size: 30rpx;
				font-weight: 700;
				margin-bottom: 10rpx;
			}
			.desc{
				font-size: 25rpx;
				
				margin-bottom: 10rpx;
			}
		}
	}
	
	.driver-img{
		width:100rpx;
		height:100rpx;
	}
	
	
	.copy{
		font-size: 18rpx;
		border: 1rpx solid #ddd;
		border-radius: 5rpx;
		padding: 5rpx;
		margin-left:20rpx;
		color:#0081FF;
	}
	.waybill-body{
		margin:10rpx;
		background-color: #fff;
		
		padding-bottom: 20rpx;
	
	}
	
	.one-icon-hover{
		transform: scale(1.2);
	}
	.scroll-Y{
		height:95vh;
	}
	.one_waybill{
		background-color: #fff;
		border:1rpx solid #c8c7cc;
		box-shadow: -5rpx 5rpx 5rpx #ddd;
		border-radius: 10rpx;
		width:90%;
		margin-left:5%;
		margin-bottom:20rpx;
		.first-row{
			
			padding:10rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.waybill_state{
				
				font-size:22rpx;
				color:#aaa;
				width:30%;
			}
		}
		.waybill_details{
			border-top:1px dashed #ccc;
			padding:20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.cuIcon-pullright{
				margin-left:10rpx;
				margin-right:10rpx;
			}
			.goods_name{
				margin-right:20rpx
			}
			.cuIcon-move{
				margin:0 10rpx 0 10rpx;
			}
			
			.shipping_content{
				
				width:80%;
			}
			
			.actions{
				width:20%;
				position:relative;
				.cuIcon-phone{
					transform: scale(8);
				}
				
			}
			.receive-btn{
				width:100%;
				position:absolute;
				bottom:0;
				color:#fff;
				background-color: #f00;
				display:flex;
				justify-content: center;
				align-items: center;
				font-size:18rpx ;
			}
			
			
			
		}
		.address{
			border-top:1rpx solid #ccc;
			padding:20rpx;
			color:#aaa;
		}
		
	}
	
	.sm-pic{
			 width:35rpx;
			 height:35rpx;
			 margin-right:10rpx;
	}
	
	.bg-pic{
		
			 width:85rpx;
			 height:85rpx;
			 margin-right:1rpx;
	}
	
	.border-red{
		border-bottom: 1rpx solid #f00;
	}
	
	
	
	
	
	.num{
		font-weight: 600;
		width:95%;
		
		.num-title{
			color: #000;
			width:40%;
			
		}
		.num-no{
			color: #4f8ded;
			margin-left: 20%;
		}
	}
	
	.distance{
		font-size: 25rpx;
		font-weight: 600;
		
		.distance-num{
			color:#f00;
			margin-left: 15rpx;
		}
		
		
	}
	
	.ton{
		color:#157cec;
		font-size: 38rpx;
	}
	
	.points{
		width: 20rpx;
		height:20rpx;
	}
	
	.vertical-line{
		border-left: 1rpx dashed #999;
		height:40rpx;
		margin-left:10rpx;
	}
	
	.nav{
		width: 30rpx;
		height:30rpx;
		margin-right: 5rpx;
	}
	
	.goods-name{
		margin-top: 30rpx;
		text-align: center;
		border:1rpx solid #d9dadb;
		border-radius: 10rpx;
	}
	
	.fecha-de-despacho{
		background-color:#f0f0f0 ;
		color: #1f76cd;
		width: 90rpx;
		
		margin: 10rpx;
		border-radius: 10rpx;
	}
	
	.loading-time{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.fecha{
		font-size: 30rpx;
		
	}
	
	.various{
		text{
			border:1rpx solid #ccc;
			border-radius: 10rpx;
		}
	}
	
	.btn-level{
		padding:10rpx;
		display: flex;
		height:80rpx;
		position: relative;
	}
	
	.btn{
		position: absolute;
		right: 20rpx;
		height: 60rpx;
		color: #fff;
		font-size: 30rpx;
		background-color: #4190fc;
	}
	.detail-btn{
		background-color: #1cb081;
		color:#fff;
	}
</style>
