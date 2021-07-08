<template>
	<view class="shipping-order-body">
		<view v-for="(item,index) in distributing_driver_list" :key="index" class="one_shipping " >
			<view class="first-row">
				<view>
				<text selectable>{{index}}--{{item.waybillNo}}</text>
				<text class="copy" @click="copy(item.waybillNo)">复制</text>
				</view>
				<text class="shipping_state">运输中</text>
			</view>
			<view class="shipping_details">
				<view class="shipping_content">
					<view class="region-address">
						<view>
							<text>{{item.iscmOrder.iscmSource.iscmShipper.shipperProvinceName}}
							{{item.iscmOrder.iscmSource.iscmShipper.shipperRegionName}}</text>
						</view>
						<view>
							<text class="cuIcon-pullright lg text-gray"> </text>
						</view>
						<view>
							 <text>{{item.iscmOrder.iscmSource.iscmConsignee.consigneeProvinceName}}
							 {{item.iscmOrder.iscmSource.iscmConsignee.consigneeCityName}}</text>
						</view>
					</view>
					<view>
						<view class="goods_name">货物名称：{{item.iscmOrder.iscmSource.goodsName}}</view>		
						<view>货物重量：{{item.iscmOrder.iscmSource.goodsWeight}}吨</view>
						<view>目前剩余重量：{{item.iscmOrder.iscmSource.goodsWeight}}吨</view>
					</view>
					<view>
						<text class="shipper">运费：{{item.iscmOrder.iscmSource.consignorRates}}元</text>
					</view>
					<view>
						<text class="shipper">创建人：{{item.createBy}}</text>
					</view>
					<view>
						<text class="create_time">收货人联系电话:{{item.iscmOrder.iscmSource.iscmConsignee.consigneePhone}}</text>		
					</view>
					
				</view>
				
				    <view class="actions">
						<view hover-class="one-icon-hover">
							<image src="/static/phone.png"  class="phone-img"  @click="phoneCall"></image>
						</view>
							
						
						<button type="default" size="default" 
						data-index='111'  class="receive-btn radius" @click="goChoosingDriver(item)">{{btn_title}}</button>
					</view>	
			</view>
			
			<view class="address">
				<text>装货地址：{{item.iscmOrder.iscmSource.iscmConsignee.consigneeAddress}}</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
			  distributing_driver_list:[],
			  id_token:'',
			  btn_title:"分配运力",
			  totalElements:0,
			  allListItem:false,
			  queryParams: {
			                  pageNum: 1,
			                  pageSize: 100,
			                  waybillNo: null,
			                  waybillStatus: null,
			                  packageType: null,
			                  accountType: null,
			                  paymentType: null,
			                  businessType: null,
			                  generationType: null,
			                  statisticsType: null,
			                  transportType: null,
			                  sendDispatchStatus: null,
			                  isSynchronization: null,
			                  companyId: null,
			                  beginTime: null,
			                  endTime: null,
			          }
			}
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:`${this.btn_title}`
			})
			
			this.distributing_driver_list=[
				{
					waybillNo:"PC0A210222824410",
					
					iscmOrder:{
						iscmSource:{
							consignorRates: 6224.74,
							goodsName:"润滑油",
							goodsWeight:32,
							iscmConsignee:{
								consigneeProvinceName: "江苏省",
								consigneeCityName: "徐州市",
								consigneeAddress: "徐州市经济开发区杨山路(高新路68号）",
								consigneePhone: "15252149421",
							},
							iscmShipper:{
								shipperProvinceName: "上海市",
								shipperRegionName: "宝山区",
							},
						},
					},
					createBy: "陈超",
					create_time:"2021-02-22 11:01:22",
					carrier:"徐州市聚诚运输有限公司",
					
				},
				{
					waybillNo:"PC0A210222467223",
					iscmOrder:{
						iscmSource:{
							consignorRates: 6224.74,
							goodsName:"钢板",
							goodsWeight:38,
							iscmConsignee:{
								consigneeProvinceName: "江苏省",
								consigneeCityName: "徐州市",
								consigneeAddress: "徐州市云龙区丽水路2号",
								consigneePhone: "15252149421",
							},
							iscmShipper:{
								shipperProvinceName: "上海市",
								shipperRegionName: "宝山区",
							},
						},
					},
					create_time:"2021-02-22 11:01:46",
					createBy: "陈超",
					carrier:"徐州市聚诚运输有限公司",
				
				},
			]
			this.getDistributingDriversList() 
		},
		
		
		onReachBottom(){
		
		},
		
		methods:{
			phoneCall(){
				uni.makePhoneCall({
				    phoneNumber: '13814441238' ,
					
				});
				      },
			goChoosingDriver(item){
				var that = this
			
				uni.navigateTo({
					url:`/pages/choosing_driver/choosing_driver`
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
			
			async getDistributingDriversList(){
						const queryParams= this.queryParams
						 var authorization = uni.getStorageSync("token")	
						const res = await this.$request({
							url:"/iscm/waybill/list",
							header:{
								Authorization:authorization,
							},
							data:queryParams
							
						})
						
						
						if (this.distributing_driver_list.length<res.data.total){
							this.distributing_driver_list =[...this.distributing_driver_list,...res.data.rows]
							
						}else{
							uni.showToast({
								title:"没有更多的信息了",
								icon:"none"
							})
							return
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
	.shipping-order-body{
		background-color: #fff;
	}
	
	.one-icon-hover{
		transform: scale(1.2);
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
	
	.region-address{
		display: flex;
		flex-direction: row;
		
	}
</style>
