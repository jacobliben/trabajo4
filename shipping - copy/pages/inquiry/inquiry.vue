<template>
	<view class="waybill-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true" >
		  
		<view v-for="(item,index) in inquiry_list" :key="index" class="one_waybill " >
			<view class="first-row">
				<view>
				 
				<text selectable>询价单: {{item.enquiryNo}}</text>
				<text class="copy" @click="copy(item.enquiryNo)">复制</text>
				
				</view>
				
				 <text class="waybill_state">
					 
					 <text>询价状态:</text>
					  <text>
						 {{enquiryStatusOptions[enquiryStatusSendValue.findIndex(value=>value == item.enquiryStatus)]}} 
					  </text>
					
				</text>
			</view>
			<view class="waybill_details">
				<view class="shipping_content">
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
						 <!-- <image src="/static/ing.svg" class="bg-pic" v-if="item.enquiryStatus==2"  ></image> -->	
						<button type="default" size="default" 
						 class="receive-btn radius" 
						  @click="quote(item)">报价</button>
					</view>
				
			</view>
			
			<view class="address">
				<text>公司：{{item.companyName}}</text>
			</view>
		</view>
		<info-not-found v-if ="show_not_found"/>
		</scroll-view>
		
	</view>
</template>
    
<script>
	import infoNotFound from "@/pages/info_not_found/info_not_found.vue"
	export default{
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
			  
			
			  inquiry_list:[],
			  show_not_found:false,
		      now_state:this.transporte_state,
			  state_text:"",
			  btn_text:"",
			  //是否可以“发车”，“签收”等
			  canDispatch:null,
			   queryParams: {
			             pageNum: 1,
			             pageSize: 3,
			             
			           },
			}
		},
		
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
			
			this.searchInquiry()
			
			
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
				
				
			     var queryParams= this.queryParams 
				
				 var authorization = uni.getStorageSync("token")
				  
					  const res = await this.$request({
					  	 	url:"/app/enquiry/list",
					  	 	
					  	 	header:{
					  	 		Authorization:authorization,
					  	 	},
					  	 	data:queryParams
					  	 })
				
					    console.log(res,'jh');
					  if(res.data.total == 0){
					  	setTimeout(()=>{
					  		this.show_not_found = true
					  	},30)
					  	return
					  }
					  
					  //stop sending request
					  if (this.queryParams.pageNum*this.queryParams.pageSize>=res.data.total){
					  	this.load_more = false
					  }
					  
					  if (this.inquiry_list.length<res.data.total){
					  	this.inquiry_list =[...this.inquiry_list,...res.data.rows]
					  	this.show_not_found = false
					  }else{
					  	uni.showToast({
					  		title:"没有更多的信息了",
					  		icon:"none"
					  	})
						
					  }
				 
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.copy{
		font-size: 18rpx;
		border: 1rpx solid #ddd;
		border-radius: 5rpx;
		padding: 5rpx;
		margin-left:20rpx;
		color:#0081FF;
	}
	.waybill-body{
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
			border-top:1px solid #ccc;
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
</style>
