<template>
	<view class="shipping-order-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
		<view v-for="(item,index) in receiving_shipping_order_list" :key="index" class="one_shipping" v-if ="!show_not_found" @click="goAcceptShippingOrder(item)">
			<view class="first-row">
				<view>
				<text selectable>{{item.waybillNo}}</text>
				<text class="copy" @click="copy(item.waybillNo)">复制</text>
				</view>
				<text class="shipping_state">{{now_state.state_pending}}</text>
			</view>
			<view class="shipping_details">
				<view class="shipping_content">
					<view>
						<text>{{item.iscmWaybillInformationRecord.shipperProvinceName}}</text>
						<text v-if ="item.iscmWaybillInformationRecord.shipperCityName!=='市辖区'">{{item.iscmWaybillInformationRecord.shipperCityName}}</text>
						<text v-if ="item.iscmWaybillInformationRecord.shipperCityName==='市辖区'">{{item.iscmWaybillInformationRecord.shipperRegionName}}</text>
						<text class="cuIcon-pullright lg text-gray"> </text>
						<text>{{item.iscmWaybillInformationRecord.consigneeProvinceName}}</text>
						<!-- 判断是否为“直辖市” -->
						<text v-if ="item.iscmWaybillInformationRecord.consigneeCityName!=='市辖区'">{{item.iscmWaybillInformationRecord.consigneeCityName}}</text>
						<text v-if ="item.iscmWaybillInformationRecord.consigneeCityName==='市辖区'">{{item.iscmWaybillInformationRecord.consigneeRegionName}}</text>
					</view>
					<view>
						<view class="goods_name">{{item.iscmSource.goodsName}}</view>		
						<view>货物重量：{{item.goodsWeight}}吨</view>
						<view>目前剩余重量：{{item.surplusGoodsWeight}}吨</view>
					</view>
					<view>
						<text class="shipper">运费：{{item.carrierRates}}元</text>
					</view>
					
					<view>
						<text class="create_time">发货人联系电话:{{item.iscmWaybillInformationRecord.shipperPhone}}</text>		
					</view>
					
				</view>
				
				    <view class="actions">
						<view hover-class="one-icon-hover">
							<image src="/static/phone.png"  class="phone-img"  @click="phoneCall(item.iscmWaybillInformationRecord.shipperPhone)"></image>
						</view>
							
						
						<button type="default" size="default" 
						data-index='111'  class="receive-btn radius" @click="goAcceptShippingOrder(item)">{{now_state.btn}}</button>
					</view>	
			</view>
			
			<view class="address">
				<text>装货地址：{{item.iscmWaybillInformationRecord.shipperProvinceName}}
				<text>{{item.iscmWaybillInformationRecord.shipperCityName}}</text>
				<text>{{item.iscmWaybillInformationRecord.shipperRegionName}}</text>
				<text>{{item.iscmWaybillInformationRecord.shipperAddress}}</text>
				</text>
			</view>
			
			<view class="address">
				<text>收货地址：{{item.iscmWaybillInformationRecord.consigneeProvinceName}}
				<text>{{item.iscmWaybillInformationRecord.consigneeCityName}}</text>
				<text>{{item.iscmWaybillInformationRecord.consigneeRegionName}}</text>
				<text>{{item.iscmWaybillInformationRecord.consigneeAddress}}</text>
				</text>
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
				
			  receiving_shipping_order_list:[],
			  id_token:'',
			  show_not_found:false,
			  now_state:this.transporte_state,
			  queryParams: {
			            pageNum: 1,
			            pageSize: 10,
			          },
			}
		},
		props:["transporte_state"],
		components:{
			infoNotFound
		},
		async mounted(){
			
		
			
			
			uni.setNavigationBarTitle({
				title:`${this.now_state.text}`
			})
		
			this.getReceivingShippingOrderList()
			
			const token = uni.getStorageSync('token')
			   //get this user's permission rights
			   const resUserInfo = await this.$request({
			   	  	 	url:"/getInfo",
			   	  	 	
			   	  	 	header:{
			   	  	 		Authorization:token,
			   	  	 	},
			   	  	 	
			   	  	 })
			const user = resUserInfo		 
			
			const user_permissions = user.data.permissions
			let result = user_permissions.findIndex(ele => ele === 'iscm:waybill:list')
			
			if (result == -1){
				this.show_not_found = true
				
				return
			}
		},
		methods:{
			upper: function(e) {
			          
			       },
			lower: function(e) {
				
				setTimeout(() => {
				
				//TODO这里填写你加载数据的方法
				
				this.queryParams.pageNum += 1
				if (this.load_more){
				 	this.getReceivingShippingOrderList()
				}
									  
				
				}, 1000)
			          
								
								
			       },
			       
			phoneCall(phone){
				uni.makePhoneCall({
				    phoneNumber: phone ,
					
				});
				
			},
			 goAcceptShippingOrder(item){
				var that = this
				const waybillId = item.waybillId
				uni.setStorageSync('accepted_shipping_orders',item)
				if(this.now_state.text==="运单接收"){
					uni.navigateTo({
						url:`/pages/accept_shippig_order/accept_shippig_order?btn_title=${that.now_state.btn}&waybillId=${waybillId}`
					})
				}else if (this.now_state.text==="分配运力"){
					uni.navigateTo({
						url:`/pages/choosing_driver/choosing_driver?btn_title=${that.now_state.btn}`
					})
				}
				
				
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
			 async getReceivingShippingOrderList(){
				this.queryParams.waybillStatus= this.now_state.waybillStatus
				var queryParams= this.queryParams
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/app/waybill/list",
					 	
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
				
				if (this.receiving_shipping_order_list.length<res.data.total){
					this.receiving_shipping_order_list =[...this.receiving_shipping_order_list,...res.data.rows]
					this.show_not_found = false
				}else{
					uni.showToast({
						title:"没有更多的信息了",
						icon:"none"
					})
					
				}
			  
				uni.setStorageSync("receiving_shipping_order_list",this.receiving_shipping_order_list)
			},
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
	.shipping-order-body{
		background-color: #fff;
	}
	
	.one-icon-hover{
		transform: scale(1.2);
	}
	
	.scroll-Y{
		height:95vh;
	}
	.one_shipping{
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
			.shipping_state{
				font-size:22rpx;
				color:#aaa;
			}
		}
		.shipping_details{
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
			
			.phone-img{
				width:100%;
				height:100rpx;	
			}
			
			/* #ifdef H5 */
			.phone-img{
				width:50%;
				height: 50%;
					margin:0 auto;
					display: block;
					
			}
			/* #endif */
		}
		.address{
			border-top:1rpx solid #ccc;
			padding:20rpx;
			color:#aaa;
		}
		
	}
</style>
