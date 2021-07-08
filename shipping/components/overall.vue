<template>
	<view class="shipping-order-body">
		<view v-for="(item,index) in overall_list" :key="index" class="one_shipping " >
			<view class="first-row">
				<view>
				<text selectable>{{item.waybillNo}}</text>
				<text class="copy" @click="copy(item.waybillNo)">复制</text>
				</view>
				<text class="shipping_state">全部派车单</text>
			</view>
			<view class="shipping_details">
				<view class="shipping_content">
					<view>
						<text>{{item.shipping_delivery_place}}</text>
						<text class="cuIcon-pullright lg text-gray"> </text>
						<text>{{item.shipping_destiny_place}}</text>
					</view>
					<view>
						<text class="goods_name">{{item.shipping_goods_name}}</text>		
						<text>{{item.shipping_weight}}吨</text>
					</view>
					<view>
						<text class="shipper">{{item.shipper}}</text>
								<text class="cuIcon-move"></text>
						<text>{{item.consignee}}</text>
					</view>
					<view>
						<text class="create_time">创建时间:{{item.create_time}}</text>		
					</view>
					<view>
						<text class="carrier">承运人:{{item.carrier}}</text>		
					</view>
				</view>
				
				    <view class="actions">
						<view hover-class="one-icon-hover">
						  <image src="/static/phone.png"  class="phone-img" @click="phoneCall"></image>	
						</view>
						<button type="default" size="default"  class="receive-btn radius" @click="goUploadFiles(item)">查看</button>
					</view>
				
			</view>
			
			<view class="address">
				<text>收货地址：{{item.consignee_address}}</text>
			</view>
		</view>
	</view>
</template>
  
<script>
	export default{
		data(){
			return{
			  overall_list:[],
			  btn_title:"查看"
			}
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:"全部派车单"
			})
			this.overall_list=[
				{
					waybillNo:"PC0A210222824410",
					shipping_delivery_place:"上海市闵行区",
					shipping_destiny_place:"江苏省徐州市",
					shipping_goods_name:"润滑油",
					shipping_weight:32,
					shipper:"黄亚奇",
					consignee:"赵媛媛",
					create_time:"2021-02-22 11:01:22",
					carrier:"徐州市聚诚运输有限公司",
					consignee_address:"徐州云龙区铜山路209号",
				},
				{
					waybillNo:"PC0A210222467223",
					shipping_delivery_place:"上海市宝山区",
					shipping_destiny_place:"江苏省徐州市",
					shipping_goods_name:"钢板",
					shipping_weight:38,
					shipper:"姜明良",
					consignee:"周园",
					create_time:"2021-02-22 11:01:46",
					carrier:"徐州市聚诚运输有限公司",
					consignee_address:"徐州市云龙区丽水路2号",
				},
			]
		},
		methods:{
			goUploadFiles(item){
				var that = this
				uni.setStorageSync('upload_item',item)
				uni.navigateTo({
					url:`/pages/upload_images/upload_images?btn_title=${that.btn_title}`
				})
				
			},
			copy(data){
				var that = this
				uni.setClipboardData({
				    data:data,
				    success: function () {
				        console.log('success');
						uni.showToast({
							title:"copy"
						})
				    }
				});
			},
			phoneCall(){
				uni.makePhoneCall({
				    phoneNumber: '13814441238' ,
					
				});
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

