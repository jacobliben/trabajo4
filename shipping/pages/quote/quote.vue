<template>
	<view class="waybill-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true" >
		  
		<view v-for="(item,index) in quote_list" :key="index" class="one_waybill " >
			<view class="first-row">
				<view>
				<text selectable>报价单: {{item.quoteNo}}</text>
				<text class="copy" @click="copy(item.quoteNo)">复制</text>
				
				</view>
				 <text class="waybill_state" >报价状态: {{quoteStatusOptions[quoteStatusSendValue.findIndex(value=>value == item.quoteStatus)]}}</text>
				
				
			</view>
			<view class="waybill_details">
				<view class="shipping_content">
					 <view>
						 <image src="/static/quote.svg" mode="aspectFit" class="sm-pic" ></image>
					 	<text class="goods_name concern">报价信息 : {{item.quotePrice}} 元</text>
					 </view>
					 
					 <view>
						 <image src="/static/weight.svg" mode="aspectFit" class="sm-pic" ></image>
					 	<text class="goods_name concern">运输重量 :{{item.transportWeight}} 吨</text>
					 </view>
					 
					 <view>
						 <image src="/static/dias.svg" mode="aspectFit" class="sm-pic" ></image>
					 	<text class="goods_name">运输天数 : {{item.transportDays}} 天</text>
					 </view>
					 
					
					 <view>
					 	<text class="goods_name">是否中标 : {{isBiddingOptions[isBiddingSendValue.findIndex(value=>value == item.isBidding)]}}</text>
					 </view>
					 
					 <!-- <view>
					 	<text class="goods_name">是否中标 : {{isAcceptedOptions[isAcceptedSendValue.findIndex(value=>value == item.isBidding)]}}</text>
					 </view> -->
					 
					<view>
						<text class="goods_name">下单方式 : {{sourceOrderWayOptions[item.orderWay-1]}}</text>
					</view>
					
					<view>	
						<text>计价方式 :{{settlementMethodOptions[settlementMethodSendValue.findIndex(value=>value == item.settlementMethod)]}}</text>
					</view>
				
					
					
					
					<view>
						<text class="carrier">询价单编号:{{item.enquiryNo}}</text>		
					</view>
					<view>
						<text class="carrier">订单号:{{item.orderNo}}</text>		
					</view>
					<view>
						<text class="carrier">货源单号:{{item.iscmSource.sourceNo}}</text>		
					</view>
				</view>
				
				    <view class="actions">
						
						
					</view>
				
			</view>
			
			<view class="address">
				<text>承运人：{{item.carrierName}}</text>
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
			  
			   // 是否中标字典
			   isBiddingOptions: [],
			   isBiddingSendValue:[],
			  // 是否被接受状态字典
			  isAcceptedOptions: ["未报价","已被接受","未被接受","报价无效","未决定接受任何报价"],
			  isAcceptedSendValue: ["-1","1","2","3","4"],
			  // 报价状态字典
			  quoteStatusOptions:[],
			  quoteStatusSendValue:[],
			  // 下单方式
			  sourceOrderWayOptions: [],
			  sourceOrderWaySendValue: [],
			  //计价方式
			  settlementMethodOptions: [],
			  settlementMethodSendValue: [],
			  
			  
			  quote_list:[],
			  show_not_found:false,
		      now_state:this.transporte_state,
			 
			
			  //是否可以“发车”，“签收”等
			  canDispatch:null,
			   queryParams: {
			             pageNum: 1,
			             pageSize: 3,
			             
			           },
			}
		},
		props:["transporte_state"],
		components:{
			infoNotFound
		},
		created() {
			// 是否中标字典
			this.getIsBiddingOptions()
			// 报价状态字典
			this.getQuoteStatusOptions()
			// 下单方式字典
			this.getSourceOrderWayOptions()
			//计价方式
			this.getSettlementMethodOptions()
			
		},
		mounted(){
			
				this.now_state = "11"
				
			
			
				
				
			
			const user_permissions= uni.getStorageSync("user_info").data.permissions
			
			
			
			this.searchQuote()
			
			
		},
		methods:{
			 upper: function(e) {
				  
			        },
			 lower: function(e) {
				
						setTimeout(() => {
						
						//TODO这里填写你加载数据的方法
						
						this.queryParams.pageNum += 1
						if (this.load_more){
						  this.searchQuote()
						}
											  
						
						}, 1000)
						
			        },
					
			// 是否中标字典
			async getIsBiddingOptions(){
				const isBiddingOptions = await this.$getRegistDicts("is_bidding")
				
				console.log(isBiddingOptions,'isBidding');
				this.isBiddingOptions = isBiddingOptions.data.data.map(e=>e.dictLabel)
				console.log(this.isBiddingOptions,'isBiddingOptions');
				this.isBiddingSendValue = isBiddingOptions.data.data.map(e=>e.dictValue)
				console.log(this.isBiddingSendValue,'isBiddingSendValue');
				
			},					
					
					
					
					
			// 报价状态字典
			async getQuoteStatusOptions(){
				const quoteStatusOptions = await this.$getRegistDicts("quote_status")
				
				
				this.quoteStatusOptions = quoteStatusOptions.data.data.map(e=>e.dictLabel)
				
				this.quoteStatusSendValue = quoteStatusOptions.data.data.map(e=>e.dictValue)
				
				
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
					uni.setStorageSync('upload_item',item)
					uni.navigateTo({
						url:`/pages/upload_images/upload_images?btn_title=${that.now_state.btn}`
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
					  
			async searchQuote(){
				if (this.now_state.state==0){
					this.queryParams.designatedStatus= 33
				}
				
			     var queryParams= this.queryParams 
				
				 var authorization = uni.getStorageSync("token")
				  
					  const res = await this.$request({
					  	 	url:"/app/quote/list",
					  	 	
					  	 	header:{
					  	 		Authorization:authorization,
					  	 	},
					  	 	data:queryParams
					  	 })
				      
					    
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
					  
					  if (this.quote_list.length<res.data.total){
					  	this.quote_list =[...this.quote_list,...res.data.rows]
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
		padding-bottom: 20rpx ;
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
			padding:20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.waybill_state{
				font-size:22rpx;
				color:#aaa;
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
				margin-right:180rpx
			}
			.cuIcon-move{
				margin:0 10rpx 0 10rpx;
			}
			
			.actions{
				width:5%;
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
			
			.phone-img{
				width:100%;
				height:100rpx;	
			}
			
			
		}
		.address{
			border-top:1rpx solid #ccc;
			padding:20rpx;
			color:#aaa;
		}
		
	}
	
	.concern{
		padding-bottom: 3rpx;
		border-bottom: 3rpx solid #1296db;
	}
	.sm-pic{
			 width:35rpx;
			 height:35rpx;
			 margin-right:10rpx;
	}
</style>
