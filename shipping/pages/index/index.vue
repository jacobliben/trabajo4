<template>
	<view class="content">

		<view class="cu-bar search first-row margin-top">

			<view class="action text-gray add-action" @tap="letsScan">
				<button class="cu-btn cuIcon-scan bg-white" ></button>
			</view>
			<!-- <view @click="phoneCall">
				<image src="/static/client-service.png" style="width:50rpx;height:50rpx;" mode="aspectFit"></image>
				<view class="text-gray">客服</view>
			</view> -->
			<view class="action text-gray add-action">
				<input class="head-input" placeholder="找货源" v-if="show_shipping_order" @tap="goHall"/>
				<input class="head-input" placeholder="找车单" v-if="!show_shipping_order" @tap="goLoading"/>
			</view>

			<view @tap="goMessage">
				<!-- below is the messages numbers -->
				<view class="cu-tag badge" v-if="un_read_msg>0">{{un_read_msg}}</view>
				<button class="cu-btn cuIcon-message bg-white" ></button>


			</view>

		</view>


		<view>
			<swiper class="swiper" autoplay circular duration="2000">
				<swiper-item>
					<view class="swiper-item">
						<image class="a" src="../../static/swiper.png" mode="aspectFit"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!--   <view class="notice" v-if="show_notice" @click="noticeOk">	
		      <cmd-notice-bar class="notice-bar" :text="notice_message" 
			  type="activity" icon="alert-circle"></cmd-notice-bar>
		   </view>
		   -->
		<view class="button-images shadow-text">
			<view class="first-row-btns ">
				

				<view class="one-icon " hover-class="one-icon-hover" @tap="goOrderReceiving" v-if="show_shipping_order">
					<image src="/static/ordered-record.png" mode="aspectFit"></image>
					<text>运单接收</text>
				</view>
				
				
                  <view class="one-icon" hover-class="one-icon-hover" @click="goOrderDistributing"
                  	v-if="show_shipping_order">
                  	<image src="/static/delivery.svg" mode="aspectFit"></image>
                  	<text>分配运力</text>
                  </view>
				  
				  <view class="one-icon " hover-class="one-icon-hover" @tap="goVehicle" v-if="show_shipping_order">
				  	<image src="/static/calculator.svg" mode="aspectFit"></image>
				  	<text>车辆管理</text>
				  </view>

				  <view class="one-icon" hover-class="one-icon-hover" @click="goHall" v-if="show_shipping_order">
				  	<image src="/static/home-drivers.png" mode="aspectFit"></image>
				  	<text>货源大厅</text>
				  </view>
				
				<view class="one-icon" hover-class="one-icon-hover" @click="goHall" v-if="!show_shipping_order">
					  主要功能
				</view>

				<!-- <view class="one-icon" hover-class="one-icon-hover" @click="goCalculatingKm">
					 					  <image src="/static/calculator.svg" mode="aspectFit"></image>
					 					  <text>里程计算</text>
					 </view> -->



				
			</view>
			<view class="second-row-btns">

				<!--   
				    <view class="one-icon" hover-class="one-icon-hover">
				    					  <image src="/static/molecula.svg" mode="aspectFit"></image>
				    					  <text>全部</text>
				    </view> -->

				<view class="one-icon" hover-class="one-icon-hover" @click="goLoading">
					<image src="/static/despatching.svg" mode="aspectFit"></image>
					<text>确认装货</text>
				</view>

				<view class="one-icon" hover-class="one-icon-hover" @click="goDespatching">
					<image src="/static/globe.svg" mode="aspectFit"></image>
					<text>确认发车</text>
				</view>
				<view class="one-icon" hover-class="one-icon-hover" @click="goReceiving">
					<image src="/static/box.svg" mode="aspectFit"></image>
					<text>确认签收</text>
				</view>
				<view class="one-icon" hover-class="one-icon-hover" @click="goAccount">
					<image src="/static/pantone.svg" mode="aspectFit"></image>
					<text>更多功能</text>
				</view>

			</view>
		</view>

		<view class="shipping-list" v-if="show_shipping_list&&show_shipping_order">
			<view class="title">
				<view class="list-title">运单列表</view>
			</view>
			<view class="shipping-info radius shadow-blur" v-for="(item, index) in shipping_info_list" :key="index"
				@click="goShippingOrder">

				<view class="first-row-waybill">
					<view>
						<image src="/static/getit.png" mode="" class="img-get"></image>
						<text selectable>{{item.waybillNo}}</text>
						<text class="copy" @click="copy(item.waybillNo)">复制</text>
					</view>
					<text class="shipping_state">待接单</text>
				</view>
				<view class="shipping_details">
					<view class="shipping_content">
						<view>
							<text>{{item.iscmWaybillInformationRecord.shipperProvinceName}}</text>
							<text
								v-if="item.iscmWaybillInformationRecord.shipperCityName!=='市辖区'">{{item.iscmWaybillInformationRecord.shipperCityName}}</text>
							<text
								v-if="item.iscmWaybillInformationRecord.shipperCityName==='市辖区'">{{item.iscmWaybillInformationRecord.shipperRegionName}}</text>
							<text class="cuIcon-pullright lg text-gray"> </text>
							<text>{{item.iscmWaybillInformationRecord.consigneeProvinceName}}</text>
							<!-- 判断是否为“直辖市” -->
							<text
								v-if="item.iscmWaybillInformationRecord.consigneeCityName!=='市辖区'">{{item.iscmWaybillInformationRecord.consigneeCityName}}</text>
							<text
								v-if="item.iscmWaybillInformationRecord.consigneeCityName==='市辖区'">{{item.iscmWaybillInformationRecord.consigneeRegionName}}</text>
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
							<text class="shipper">创建人：{{item.createBy}}</text>
						</view>
						<view>
							<text class="create_time">发货人联系电话:{{item.iscmWaybillInformationRecord.shipperPhone}}</text>
						</view>
						<view>
							<text>装货地址：{{item.iscmWaybillInformationRecord.shipperAddress}}</text>
						</view>
						<view class="distance">
							<view> 约 {{distance_to_origin[index]}} 公里装货</view>
						</view>

						<view class="price">
							<text class="letter">包车价</text>
							<text class="num">{{item.carrierRates}}</text>
							<text class="letter">元</text>
						</view>
					</view>



				</view>
			</view>
			<view>
				<view class="more-goods" @click="goShippingOrder">
					<view>
						<text>查看更多运单</text>
						<text class="cuIcon-right lg text-gray"></text>


					</view>

				</view>
			</view>
		</view>
		<view>
			<tabbar-index  class="custom-tab-bar" v-if="!show_shipping_order" ></tabbar-index>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import permision from "@/js_sdk/wa-permission/permission.js"
    import tabbarIndex from "@/pages/tabbar_index/tabbar_index"
	
	
	var start_location //目前地址
	var start_latitude //目前latitude
	var start_longitude //目前longitude
	var destiny_location
	var desti_location
	var dest_latitude
	var dest_longitude

	export default {
		data() {
			return {
				//控制页面重载
				reload_flag: false,
				//未读信息数
				un_read_msg: 0,
				title: '',
				title2: '',
				user: '',
				//显示按钮
				show_shipping_order: true,
				show_shipping_list: true,
				shipping_info_list: [],
				notice_message: "您好，黄贤勇现在添加您为车老板，您可以接受或者拒绝",
				show_notice: true,
				distance_to_origin: [],
				queryParams: {
					pageNum: 1,
					pageSize: 10,

				},

			}
		},
		computed: mapState(['hasLogin', 'uerInfo']),
		components: {
            tabbarIndex

		},
		async onLoad() {
			//initialize the global data 
			const now_page_shipping = getApp().globalData.shipping_order_page
			const now_page_waybill = getApp().globalData.way_bill_page
			
			
			const token = uni.getStorageSync('token')
			//get this user's permission rights
			const resUserInfo = await this.$request({
				url: "/getInfo",

				header: {
					Authorization: token,
				},

			})

			this.user = resUserInfo

			const user = this.user

			const user_permissions = user.data.permissions
			let result_shipping_order = user_permissions.findIndex(ele => ele === 'iscm:waybill:list')

			if (result_shipping_order == -1) {
				this.show_shipping_order = false
				
                uni.hideTabBar(); 
			}else{
				this.show_shipping_order = true
				
				uni.showTabBar(); 
			}


			//如果是管理员,可以看到所有，不受上面的权限约束
			const user_role = user.data.roles
			if (user_role.includes("admin")) {
				this.show_shipping_order = true
				this.show_vehicle = true
				this.show_driver = true
				this.show_bankcard = true
			}


			// #ifdef APP-PLUS 
			//判断用户是否同意开启定位，照相等功能的权限
			requestAndroidPermission("android.permission.CAMERA")


			requestAndroidPermission("android.permission.CALL_PHONE")

			var cllocationManger = plus.ios.import("CLLocationManager");
			var enable = cllocationManger.locationServicesEnabled();
			var status = cllocationManger.authorizationStatus();

			if (enable && status != 2) {
				console.log("手机系统的定位已经打开且App已经获得定位权限");
			} else {
				console.log("手机系统的定位没有打开或App没有获得定位权限");
			}
			plus.ios.deleteObject(cllocationManger);
			// #endif


			//后退刷新页面，查询“未读信息”的条数

			this.getUnreadMessageList()
			
			
			try {
			 uni.removeStorageSync('designatedStatus');
			 uni.removeStorageSync('inquiryTypeSelected');
																	  
			} catch (e) {
			    // error
			}
		},


		async onShow() {
			const token = uni.getStorageSync('token')
			//get this user's permission rights
			const resUserInfo = await this.$request({
				url: "/getInfo",

				header: {
					Authorization: token,
				},

			})

			this.user = resUserInfo

			const user = this.user

			const user_permissions = user.data.permissions
			let result_shipping_order = user_permissions.findIndex(ele => ele === 'iscm:waybill:list')

			if (result_shipping_order == -1) {
				this.show_shipping_order = false

			}


			//如果是管理员,可以看到所有，不受上面的权限约束
			const user_role = user.data.roles
			if (user_role.includes("admin")) {
				this.show_shipping_order = true
				this.show_vehicle = true
				this.show_driver = true
				this.show_bankcard = true
			}





			//查询“未读信息”的条数
			this.getUnreadMessageList()
			//去除派车单中的storage
			try {
				uni.removeStorageSync('nav_state');
			} catch (e) {
				// error
			}
			var that = this
			this.gotRouter()
			
			try {
				this.user = uni.getStorageSync("user_info")
			} catch (e) {
				// error
			}

			
			if (!this.user || this.user == undefined || this.user == null) {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			}


			this.getShippingInfoList()

			var that = this
			if (that.shipping_info_list && that.shipping_info_list.length > 0) {
				uni.getLocation({
					type: 'gcj02',
					geocode: true, //设置该参数为true可直接获取经纬度及城市信息
					success: function(res) {
						that.locationValue = res;
						start_latitude = res.latitude
						start_longitude = res.longitude


						for (var i = 0; i < that.shipping_info_list.length; i++) {
							uni.request({
								//传入高德web服务端key和发货地址(此处为目的地)
								url: `https://restapi.amap.com/v3/geocode/geo?address=${that.shipping_info_list[i].iscmShipper.shipperAddress}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
								success: (res) => {

									desti_location = res.data.geocodes[0].location.split(",")

									dest_latitude = parseFloat(desti_location[1])
									dest_longitude = parseFloat(desti_location[0])

									uni.request({
										//传入高德web服务端key和规划线路
										// url: `https://restapi.amap.com/v4/direction/truck?origin=${origin_longitude}%2C${origin_latitude}&destination=${destiny_longitude}%2C${destiny_latitude}&size=3&key=ae8b30ff7c227fb962010579230bf568`, //货车规划
										url: `https://restapi.amap.com/v3/direction/driving?origin=${start_longitude}%2C${start_latitude}&destination=${dest_longitude}%2C${dest_latitude}&key=ae8b30ff7c227fb962010579230bf568`,
										success: (res) => {

											var short_distance = parseFloat(res
												.data.route.paths[0].distance
											) / 1000

											short_distance = short_distance
												.toFixed(2)

											that.distance_to_origin.push(
												short_distance)

										}
									})
								}

							})
						}


					},
					fail: function(err) {
						uni.showToast({
							title: '获取地址失败',
							icon: 'none'
						});
						that.locationValue = err;
					}
				});
			}

		},
        onPullDownRefresh() {
			
        	this.getShippingInfoList()
			
			setTimeout(()=>{
			  uni.stopPullDownRefresh()	
			},3000)
        },
		onHide() {
			//restore the original shipping order status
			this.show_shipping_order = true
		},

		methods: {
			//查询“未读信息”的条数
			async getUnreadMessageList() {
				var authorization = uni.getStorageSync("token")


				let resMsg = await this.$request({
					url: "/iscm/msg/list?pageNum=1&pageSize=7&msgStatus=20",

					header: {
						Authorization: authorization,
					},

				})
				this.un_read_msg = resMsg.data.total


			},
			//判断用户是否授权
			async requestAndroidPermission(permisionID) {
				var result = await permision.requestAndroidPermission(permisionID)
				var strStatus
				if (result == 1) {
					strStatus = "已获得授权"
				} else if (result == 0) {
					strStatus = "未获得授权"
				} else {
					strStatus = "被永久拒绝权限"
				}
				uni.showModal({
					content: permisionID + strStatus,
					showCancel: false
				});
			},
			async gotRouter() {

				const res = await this.$getRouters({

				})

			},

			async getShippingInfoList() {
				this.queryParams.waybillStatus = this.$waitAccept

				var queryParams = this.queryParams
				var authorization = uni.getStorageSync("token")

				const res = await this.$request({
					url: "/app/waybill/list",

					header: {
						Authorization: authorization,
					},
					data: queryParams
				})

                
				
				if (!res.data.rows || res.data.rows.length == 0) {
					this.show_shipping_list = false
					return
				} else if (res.data.rows.length > 2) {
					this.shipping_info_list = res.data.rows.splice(2)
				} else {
					this.shipping_info_list = res.data.rows
				}
				
				

			},
			goMessage() {
				uni.navigateTo({
					url: "/pages/info_center/info_center"
				})
			},
			goAccount(){
				uni.switchTab({
					url: `/pages/accounts/accounts`
				})
			},
			
			goVehicle(){
				uni.navigateTo({
					url:'/pages/vehicle_list/vehicle_list'
				})
			},
			goShippingOrder() {
				uni.switchTab({
					url: "/pages/shipping_order/shipping_order"
				})
			},
			noticeOk() {
				this.show_notice = false
				uni.navigateTo({
					url: "/pages/about_car_boss/about_car_boss"
				})
			},
			goHall() {

				uni.switchTab({
					url: "/pages/hall_opener/hall_opener"
				})
			},
			goDespatching() {
				getApp().globalData.way_bill_page = 1
				
				uni.switchTab({
					url: `/pages/way_bill/way_bill`
				})
			},
			goCalculatingKm() {
				uni.navigateTo({
					url: '/pages/calc_miles/calc_miles'
				})
			},
			goReceiving() {
				getApp().globalData.way_bill_page = 2
				uni.switchTab({

					url: `/pages/way_bill/way_bill`
				})
			},
			goClientService() {
				uni.navigateTo({
					url: "/pages/client_service/client_service"
				})
			},

			goLoading() {
				getApp().globalData.way_bill_page = 0
				uni.switchTab({
					url: `/pages/way_bill/way_bill`
				})
			},
			goOrderReceiving() {
				
				getApp().globalData.shipping_order_page = 0
				uni.switchTab({

					url: `/pages/shipping_order/shipping_order`
				})
			},

			goOrderDistributing() {
				getApp().globalData.shipping_order_page = 1
				uni.switchTab({

					url: `/pages/shipping_order/shipping_order`
				})
			},
			letsScan() {
				var that = this
				var authorization = uni.getStorageSync("token")
				uni.scanCode({
					//only for camera
					onlyFromCamera: true,

					success: async function(res) {

						//after scaning ,send the QR UUID to inform the server the scanning  

						var status = 3

						const resScan = await that.$request({
							url: `/loginByQrCode/${res.result}/${status}`,

							header: {
								Authorization: authorization,
							},

						})

					}
				});
			},
			phoneCall() {
				uni.makePhoneCall({
					phoneNumber: '051687739070',

				});
			},

		}
	}
</script>

<style lang="scss" scoped>
	.shadow-text{
		    box-shadow:0 0 10rpx 10rpx #ccc;
	}
	.cu-btn{
		font-size: 70rpx;
		width: 70rpx;
		background-color: #fff;
	}
	.first-row {
		width: 90%;
		// margin-left: 5%;
		margin-top: 60rpx;
		display: flex;
		justify-content: center;
		margin-left: -30rpx;
		background-color: #fcf9fa;
		color:#6d6d6d;
		.head-input{
			border: 4rpx solid #6d6d6d;
			padding-left: 20rpx;
			}
	}
	.first-row-waybill{
		width: 100%;
		// margin-left: 5%;
		// margin: 10rpx 0;
		display: flex;
		justify-content: center;
		margin-left: -30rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fcf9fa;
	}



	.text-area {
		display: flex;
		justify-content: center;
	}
	.head-input{
		min-width: 100rpx;
		width:550rpx;
		height: 65rpx;
		border-radius:50rpx;
		margin: 0  10rpx;
	}
	.title {
		font-size: 16rpx;
		color: #8f8f94;
		display: flex;
		justify-content: center;
		align-items: bottom;

		.list-title {
			margin-top: -25rpx;
			position: relative;
			width: 250rpx;
			height: 60rpx;
			font-size: 20rpx;
			padding-top: 10rpx;
			background: url(../../static/goods-button.png) center no-repeat;
		}

		/* #ifdef H5 */
		.list-title {
			margin-top: -25rpx;
			position: relative;
			width: 250rpx;
			height: 80rpx;
			font-size: 20rpx;
			padding-top: 10rpx;
			background: url(../../static/goods-button.png) center no-repeat;
		}

		/* #endif */

	}

	.swiper {
		margin: -10rpx auto;
		width: 680rpx;
		height: 400rpx;
		margin-bottom: 10rpx;
	}

	.a {
		margin: 0 auto;
		width: 680rpx;
		height: 400rpx;
	}

	/*#ifdef H5*/

	.swiper {
		margin: -10rpx auto;
		width: 680rpx;
		height: 400rpx;
		margin-bottom: 10rpx;
	}

	.a {
		margin: 0 auto;
		width: 680rpx;
		height: 400rpx;

	}

	/*#endif*/

	.notice {
		width: 92%;
		margin-left: 5%;
		font-size: 25rpx;
		margin-bottom: 10rpx;
	}

	.button-images {
		border: 0rpx solid #ddd;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 92%;
		justify-content: center;
		// margin-left: 5%;
		padding: 10rpx;
		height: 400rpx;

		.first-row-btns,
		.second-row-btns {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			width: 100%;
			height: 50%;
		}

		.one-icon {
			width: 20%;
			display: flex;
			flex-direction: column;
			text-align: center;

			image {
				height: 60%;
				width: 50%;
				margin: 0 auto;
			}

			text {
				font-size: 30rpx;
				cursor: pointer;
			}
		}

		.one-icon-hover {
			transform: scale(1.1);
		}

	}

	.more-goods {
		width: 100%;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 20rpx;
		color: #8f8f94;
		margin-bottom: 20rpx;
	}

	.img-get {
		width: 50rpx;
		height: 50rpx;

	}

	.radius {
		border-radius: 15rpx;
	}

	.shadow {
		box-shadow: 5rpx 5rpx 5rpx #ddd;
	}

	.shipping-list {
		background-color: #fff;

		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid #ddd;
		border-radius: 15rpx;
		margin-top: 40rpx;
		width: 92%;
		// margin-left: 5%;
		margin-bottom: 20rpx;
		box-shadow: 5rpx 5rpx 5rpx #ddd;

		.title {
			text-align: center;
		}

		.shipping-info {

			border: 1px solid #c8c7cc;
			width: 90%;
			margin-left: 5%;
			margin-top: 15rpx;
			margin-bottom: 15rpx;
			box-shadow: 3rpx 3rpx 3rpx #ddd;

			.first-row-waybill {
				padding: 20rpx;
				display: flex;
				align-items: center;
				flex-direction: row;
				position: relative;
				font-size: 28rpx;
				font-weight: 700;

				.shipping_state {
					position: absolute;
					right: 20rpx;
				}
			}

			.distance {}

			.price {

				.letter {
					font-size: 16rpx;
					color: #ccc;
				}

				.num {
					font-size: 28rpx;
					color: #f00;
				}
			}


		}
	}

	.shipping_details {
		border-top: 1px solid #ccc;
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.cuIcon-pullright {
			margin-left: 10rpx;
			margin-right: 10rpx;
		}

		.goods_name {
			margin-right: 180rpx
		}

		.cuIcon-move {
			margin: 0 10rpx 0 10rpx;
		}

		.actions {
			width: 20%;
			position: relative;

			.cuIcon-phone {
				transform: scale(8);
			}

		}

		.receive-btn {
			width: 100%;
			position: absolute;
			bottom: 0;
			color: #fff;
			background-color: #f00;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 18rpx;
		}

		.phone-img {
			width: 100%;
			height: 100rpx;
		}

		/* #ifdef H5 */
		.phone-img {
			width: 50%;
			height: 50%;
			margin: 0 auto;
			display: block;

		}

		/* #endif */
	}

	.address {
		border-top: 1rpx solid #ccc;
		padding: 20rpx;
		color: #aaa;
	}



	.copy {
		font-size: 18rpx;
		border: 1rpx solid #ddd;
		border-radius: 5rpx;
		padding: 5rpx;
		margin-left: 20rpx;
		color: #0081FF;
	}
	
	.custom-tab-bar{
		border: 1rpx solid red;
		width:200rpx;
		height:100rpx;
		position: fixed;
		border: 0;
		left:0;
	}
	
	
</style>
