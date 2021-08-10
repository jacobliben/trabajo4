<template>
	<view class="shipping-order-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
		<view v-for="(item,index) in making_shipping_order_list" :key="index" class="one_shipping" >
			<view class="first-row">
				<view>
				<text selectable>{{item.sourceNo}}</text>
				<text class="copy" @click="copy(item.sourceNo)">复制</text>
				</view>
				
			</view>
			<view class="shipping_details">
				<view class="shipping_content">
					 <view>
						<text>{{item.iscmSourceInformationRecord.shipperProvinceName}}</text>
						<text v-if ="item.iscmSourceInformationRecord.shipperCityName!=='市辖区'">{{item.iscmSourceInformationRecord.shipperCityName}}</text>
						<text v-if ="item.iscmSourceInformationRecord.shipperCityName==='市辖区'">{{item.iscmSourceInformationRecord.shipperRegionName}}</text>
						<text class="cuIcon-pullright lg text-gray"> </text>
						<text>{{item.iscmSourceInformationRecord.consigneeProvinceName}}</text>
						<!-- 判断是否为“直辖市” -->
						<text v-if ="item.iscmSourceInformationRecord.consigneeCityName!=='市辖区'">{{item.iscmSourceInformationRecord.consigneeCityName}}</text>
						<text v-if ="item.iscmSourceInformationRecord.consigneeCityName==='市辖区'">{{item.iscmSourceInformationRecord.consigneeRegionName}}</text>
					</view> 
					<view>
						<view class="goods_name">货物名称：{{item.goodsName}}</view>		
						<view>货物重量：{{item.goodsWeight}}吨</view>
						<view>指定发货时间：{{item.assignSendTime}}</view>
					</view>
					<view>
						<text class="shipper">运费：{{item.consignorRates}}元</text>
					</view>
					<view>
						<text class="shipper">创建人：{{item.createBy}}</text>
					</view>
					<view>
						<text class="create_time">收货人联系电话:{{item.iscmSourceInformationRecord.consigneePhone}}</text>		
					</view>
					
				</view>
				
				    <view class="actions">
						<view hover-class="one-icon-hover">
							<image src="/static/phone.png"  class="phone-img"  @click="phoneCall(item.iscmSourceInformationRecord.shipperPhone)"></image>
						</view>
							
						
						<button type="default" size="default" 
						data-index='111'  class="receive-btn radius" @click="goShippingOrderSourceDetail(item)">详情</button>
					</view>	
			</view>
			
			<view class="address">
				<text>托运人会员名称：{{item.consignorName}}</text>
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
				
				
				// 审核状态字典 
			  sourceAuditStatusOptions: [],
			  // 审核状态字典的dictValue
			  sourceAuditStatusOptionValues: [],
			  
			  making_shipping_order_list:[],
			  id_token:'',
			 
			  show_not_found:false,
			  now_state:this.transporte_state,
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
			// 审核状态字典 
			   this.getSourceAuditStatusOptions()
			},
		mounted(){
			
		    //货源
			this.getMakingShippingOrderList()
		},
		methods:{
			// 审核状态字典 
			async getSourceAuditStatusOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/source_status",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
			    this.sourceAuditStatusOptions= res.data.data.map(e =>e=e.dictLabel)	
				this.sourceAuditStatusOptionValues = res.data.data.map(e =>e=e.dictValue)	
				
			},
			
			upper: function(e) {
			          
			       },
			lower: function(e) {
				      setTimeout(() => {
				      
				      //TODO这里填写你加载数据的方法
				      
				      this.queryParams.pageNum += 1
				      if (this.load_more){
				        this.getMakingShippingOrderList()
				      }
				      					  
				      
				      }, 1000)
			
			       },
			       
			phoneCall(phone){
				uni.makePhoneCall({
				    phoneNumber: phone ,
					
				});
				
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
			
			//货源
			 async getMakingShippingOrderList(){
			  this.queryParams.sourceStatus = this.now_state.state
				var queryParams= this.queryParams
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/app/source/list",
					 	
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
				
				if (this.making_shipping_order_list.length<res.data.total){
					this.making_shipping_order_list =[...this.making_shipping_order_list,...res.data.rows]
					this.show_not_found = false
				}else{
					uni.showToast({
						title:"没有更多的信息了",
						icon:"none"
					})
					
				}
			  
				//uni.setStorageSync("making_shipping_order_list",this.making_shipping_order_list)
			},
			
			//访问该货源单详情
			goShippingOrderSourceDetail(item){
				uni.setStorageSync("making_shipping_order_detail", item)
				uni.navigateTo({
					url:"/pages/cada_shipping_order/cada_shipping_order",
				})
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
	
	.scroll-Y{
		padding-top:20rpx;
		height:95vh;
		background-color: #f1f1f1;
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
	
	.picker-view{
		   color:#222;
		   width:calc(100vw - 380rpx);
	}
	
	.cu-form-group picker::after {
	    display: none;  
	} 
</style>
