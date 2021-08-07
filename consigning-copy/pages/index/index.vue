<template>
	<view class="content">
	
		<view class="cu-bar search first-row margin-top">
		
		  
			<view @click="phoneCall">
				<image src="/static/client-service.png" class="sm-icon" mode="aspectFit"></image>
				<view class="text-gray">客服</view>
			</view>
		  
			
			<view @click="goMessage">
				<!-- below is the messages numbers -->
				<view class="cu-tag badge" v-if="un_read_msg>0" >{{un_read_msg}}</view>
				  <image src="/static/message.png"  class="sm-icon margin-top" mode="aspectFit"></image>
				       
				        <view class="test text-gray">消息</view>
				            
				    </view>
		    
		  </view>
		
		
		   <view class="button-images  margin-bottom margin-top">
			   
			   <view class="second-row-btns">
				   
				
					
					<view class="one-icon" hover-class="one-icon-hover" @click="goSource">
					   					  <image src="/static/despatching.png" mode="aspectFit"></image>
					   					  <text>货源列表</text>
					   </view>
					   
					   <view class="one-icon" hover-class="one-icon-hover" @click="goOrdering">
					   					  <image src="/static/globe.png" mode="aspectFit"></image>
					   					  <text>货源下单</text>
					   </view>
					   <view class="one-icon" hover-class="one-icon-hover" @click="goMe">
					   					  <image src="/static/box.png" mode="aspectFit"></image>
					   					  <text>我的</text>
					   </view>
					   
					 
			   </view>
		   </view>
		   
		
	</view>
</template>

<script>
	
	
    import {  
	        mapState,  
	        mapMutations  
	    } from 'vuex';  
		
		
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
				reload_flag:false,
			    //未读信息数
			    un_read_msg:0,
				title: '',
				title2: '',
				show_shipping_list:true,
				shipping_info_list:[],
				notice_message:"您好，黄贤勇现在添加您为车老板，您可以接受或者拒绝",
				show_notice:true,
				 distance_to_origin: [ ],
				 queryParams: {
				           pageNum: 1,
				           pageSize: 10,
				           
				         },
				
			}
		},
		computed: mapState(['hasLogin','uerInfo']),
		components: {
			
			
			},
		onLoad() {
		
		  
		  
		 //后退刷新页面，查询“未读信息”的条数
		
		 this.getUnreadMessageList()
		},
		
		
		onShow() {
			
			//查询“未读信息”的条数
			this.getUnreadMessageList()
			//去除派车单中的storage
			try {
			    uni.removeStorageSync('nav_state');
			} catch (e) {
			    // error
			}
			var that = this
		
			
			this.user = uni.getStorageSync("user_info")
			if (!this.user||this.user == undefined|| this.user ==null){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
						
			
			this.getShippingInfoList()
			
				
		},
		methods: {
			 //查询“未读信息”的条数
			async getUnreadMessageList(){
							var authorization = uni.getStorageSync("token")
							
							
								let resMsg = await this.$request({
									 	url:"/iscm/msg/list?pageNum=1&pageSize=7&msgStatus=20" ,
									 	
									 	header:{
									 		Authorization:authorization,
									 	},
									 	
									 })
								this.un_read_msg = resMsg.data.total
								
							},
			
			
			
			async getShippingInfoList(){
				
				
				var queryParams= this.queryParams
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/app/source/list",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	data:queryParams
					 })
				
				
				if(!res.data.rows||res.data.rows.length ==0){
					this.show_shipping_list = false
					return
				}else if(res.data.rows.length >2){
					this.shipping_info_list = res.data.rows.splice(2)
				}else{
					this.shipping_info_list = res.data.rows
				}
				
			},
			goMessage(){
				uni.navigateTo({
					url:"/pages/info_center/info_center"
				})
			},
  
			goSource(){
				uni.switchTab({
					url:"/pages/shipping_order/shipping_order"
				})
			},
			noticeOk(){
				this.show_notice = false
				uni.navigateTo({
					url:"/pages/about_car_boss/about_car_boss"
				})
			},
			goDriverHome(){
				this.show_notice = false
				uni.navigateTo({
					url:"/pages/driver_home/driver_home"
				})
			},
			goOrdering(){
			 	uni.setStorageSync("nav_state","dispatching")
			 	uni.switchTab({
			 		url:`/pages/choose_order_type/choose_order_type`
			 	})
			 },
			 goMe(){
			 	uni.switchTab({
			 		url:'/pages/accounts/accounts'
			 	})
			 },
			 goReceiving(){
			 	uni.setStorageSync("nav_state","receiving")
			 	uni.switchTab({
			 		
			 		url:`/pages/way_bill/way_bill`
			 	})
			 },
			 goClientService(){
			 	uni.navigateTo({
			 		url:"/pages/client_service/client_service"
			 	})
			 },
			 
			 goLoading(){
				 uni.setStorageSync("nav_state","loading")
			 	uni.switchTab({
			 		url:`/pages/way_bill/way_bill`
			 	})
			 },
			 goOrderReceiving(){
			 	uni.setStorageSync("nav_state","order-receiving")
			 	uni.switchTab({
			 		
			 		url:`/pages/shipping_order/shipping_order`
			 	})
			 },
			 
			 goOrderDistributing(){
			    uni.setStorageSync("nav_state","order-distributing")
			 	uni.switchTab({
			 		
			 		url:`/pages/shipping_order/shipping_order`
			 	})
			 },
			 letsScan(){
				 var that = this
				 var authorization = uni.getStorageSync("token")
			 	uni.scanCode({
			 		//only for camera
			 	    onlyFromCamera: true,
			 		
			 	    success:async function (res) {
			 	       
						//after scaning ,send the QR UUID to inform the server the scanning  
						
						 var status =3
						
						const resScan = await that.$request({
							 	url:`/loginByQrCode/${res.result}/${status}`,
							 	
							 	header:{
							 		Authorization:authorization,
							 	},
							 	
							 })
						
			 	    }
			 	});
			 },
			 phoneCall(){
			 	uni.makePhoneCall({
			 	    phoneNumber: '051687739070' ,
			 		
			 	});
			 	      },
			
		}
	}
</script>

<style lang="scss" scoped>
	.first-row{
		width:90%;
		margin-left: 5%;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}

	

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 16rpx;
		color: #8f8f94;
		display: flex;
		justify-content: center;
		align-items: bottom;
		.list-title{
			margin-top:-25rpx;
			position: relative;
			width: 250rpx;
			height:60rpx;
			font-size: 20rpx;
			padding-top:10rpx ;
			background:url(../../static/goods-button.png) center no-repeat ;
		}
		
		/* #ifdef H5 */
		.list-title{
			margin-top:-25rpx;
			position: relative;
			width: 250rpx;
			height:80rpx;
			font-size: 20rpx;
			padding-top:10rpx ;
			background:url(../../static/goods-button.png) center no-repeat ;
		}
		
		/* #endif */
		
	}
	
	.swiper{
		width: 750rpx;
		height: 360rpx;
		margin-bottom: 10rpx;
	}
	
	.a{
		width: 750rpx;
		height: 560rpx;
	}
	
	/*#ifdef H5*/
	
	.swiper{
		width: 1000px;
		height: 700rpx;
		margin-bottom: 10rpx;
	}
	
	.a{
		width: 1000px;
		height: 700rpx;
	
	}
	
	/*#endif*/
	
	.notice{
		width: 90%;
		margin-left:5%;
		font-size: 25rpx;
		margin-bottom:10rpx;
	}
	
	.button-images{
		border:0rpx solid #ddd;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 90%;
		justify-content: center;
		margin-left:5%;
		padding:10rpx;
		height:400rpx;
		.first-row-btns,.second-row-btns{
			display:flex;
			flex-direction: row;
			justify-content: space-evenly;
			width:100%;
			height:50%;
		}
		.one-icon{
			width:20%;
			display: flex;
			flex-direction: column;
			text-align: center;
			image{
				height:60%;
				width:50%;
				margin:0 auto;
			}
			text{
				font-size: 30rpx;
				cursor: pointer;
			}
		}
		
		.one-icon-hover{
			transform: scale(1.1);
		}
		
	}
	.more-goods{
		width: 100%;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 20rpx;
		color: #8f8f94;
		margin-bottom: 20rpx;
	}
	.img-get{
		width:50rpx;
		height:50rpx;
		
	}
	.radius{
		border-radius: 15rpx;
	}	
	
	.shadow{
		box-shadow: 5rpx 5rpx 5rpx #ddd;
	}
	.shipping-list{
		background-color: #fff;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		border:1px solid #ddd;
		border-radius: 15rpx;
		margin-top:30rpx;
		width: 90%;
		margin-left:5%;
		margin-bottom: 20rpx;
		box-shadow: 5rpx 5rpx 5rpx #ddd;
		.title{
			text-align: center;
		}
		
		.shipping-info{
			
			border:1px solid #c8c7cc;
			width:90%;
			margin-left: 5%;
			margin-top:15rpx;
			margin-bottom:15rpx;
			box-shadow: 3rpx 3rpx 3rpx #ddd;
			.first-row{
				padding:20rpx;
				display:flex;
				align-items: center;
				flex-direction: row;
				position: relative;
				font-size: 28rpx;
				font-weight: 700;
				.shipping_state{
					position: absolute;
					right:20rpx;
				}
			}
			
				.distance{
					
				}
				.price{
					
					.letter{
						font-size: 16rpx;
						color:#ccc;
					}
					.num{
						font-size: 28rpx;
						color:#f00;
					}
				}
			
			
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
		
	
	
	.copy{
		font-size: 18rpx;
		border: 1rpx solid #ddd;
		border-radius: 5rpx;
		padding: 5rpx;
		margin-left:20rpx;
		color:#0081FF;
	}
	
	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
	
	.cu-tag.badge {
		border-radius: 200upx;
		position: absolute;
		top: -10upx;
		right: -10upx;
		font-size: 20upx;
		padding: 0upx 10upx;
		height: 28upx;
		color: #ffffff;
	}
	
	.text-gray{
		color: #aaaaaa;
	}
	
	.sm-icon{
			 width:50rpx;
			 height:50rpx;
	}
</style>
