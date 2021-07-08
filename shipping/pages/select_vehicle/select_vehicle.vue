<template>
	<view class="vehicle-has-approved-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
		<radio-group @change="radioChange" >
		<label v-for="(item,index) in vehicle_list" :key="item.value"  >
			<view class="one_vehicle">
				<view class="first-row">
					<view class="vehicle-no">{{item.vehiclePlateNumber}}</view>
					
					<view>
						<text class="work_state">工作状态</text>
						<text class="vehicle_state">空闲</text>
					</view>
					
				</view>
				
					<view class="vehicle_content">
						
							<view class="left">
									<view>
										<image src="/static/truck.png" mode="aspectFit" class="truck" ></image>
									</view>
									<view>
										<text class="vehicleOwnType">车主类型/</text>		
										<text>{{item.vehicleOwnType}}</text>
									</view>
							</view>
						
						<view class="right">
							<view class="id">总质量 / </view>
							<view class="vehicleLadenWeight"> {{item.vehicleLadenWeight}} 吨</view>	
								
						</view>
						<radio :value="item" :checked="index === current" />
					</view>
			</view>
			
			
		</label>
			
		</radio-group>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vehicle_list:[],
				current: -1,
				vehicle_choosen:"",
				vehicle_id:"",
				queryParams: {
				        pageNum: 1,
				        pageSize:7,
				        
				        }
			}
		},
		methods: {
			upper: function(e) {
			           console.log(e,'11111')
			       },
			lower: function(e) {
			           console.log(e,'222222')
					   this.queryParams.pageNum += this.queryParams.pageSize
					  this.getVehicleList()
					    },
			radioChange: function(evt) {
				  console.log(evt.target.value,"111")
			      this.vehicle_choosen = evt.target.value.vehiclePlateNumber
				  this.vehicle_id = evt.target.value.vehicleId
			      uni.setStorageSync("vehicle_choosen", this.vehicle_choosen)
				  uni.setStorageSync("vehicle_id", this.vehicle_id)
			      uni.navigateTo({
			      					  url:"/pages/choosing_driver/choosing_driver",
			      })      
			        },
			async getVehicleList(){
				this.queryParams.vehicleStatus = 1
				const queryParamsVehicle= this.queryParams
				var authorization = uni.getStorageSync("token")		
				const res = await this.$request({
					url:"/app/vehicle/list",
					header:{
						Authorization:authorization,
					},
					data:queryParamsVehicle
					
				})
				console.log(res,"222")
				
				if (this.vehicle_list.length<res.data.total){
					this.vehicle_list =[...this.vehicle_list,...res.data.rows]
					
				}else{
					uni.showToast({
						title:"没有更多的信息了",
						icon:"none"
					})
					return
				}
			},		
		},
		mounted(){
			
			// this.vehicle_list=[
			// 	{
			// 		vehiclePlateNumber:"苏C56176",
			// 		value:"苏C56176",
			// 		vehicleOwnType:"企业",
			// 		tel:"370421197408023812",
			// 		vehicleLadenWeight:"49",
			// 		carrier_vehiclePlateNumber:"徐州市聚诚运输有限公司"
					
			// 	},
			// 	{
			// 		vehiclePlateNumber:"鲁DZ5299",
			// 		value:"鲁DZ5299",
			// 		vehicleOwnType:"A2",
			// 		tel:"320323198109111217",
					
			// 		vehicleLadenWeight:"49",
			// 		carrier_vehiclePlateNumber:"徐州市聚诚运输有限公司",
					
			// 	},
			// 	{
			// 		vehiclePlateNumber:"苏CDV316",
			// 		value:"苏CDV316",
			// 		vehicleOwnType:"个人",
			// 		tel:"320323197606104419",
					
			// 		vehicleLadenWeight:"49",
			// 		carrier_vehiclePlateNumber:"徐州市聚诚运输有限公司",
					
			// 	},
			// ]
			
			this.getVehicleList()
		},
	
	}
</script>

<style lang="scss" scoped>
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	.scroll-Y{
		height:95vh;
	}
	
	.vehicle_content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			width:50%;
		    display: flex;
			
			align-items: center;
			color: #999;
			.truck{
		       width: 50rpx;
		       height: 50rpx;
		       margin:5rpx 30rpx;
	        }
		}
		.right{
			width:50%;
			display: flex;
			margin-left:35rpx;
			align-items: center;
			color:#aaa;
			
			padding-right: 20rpx;
			.id{
				
				font-size: 15rpx;
				margin-left:15rpx;
			}
		}
	}
	.work_state{
		color:#ddd;
		margin-right:10rpx;
		font-size: 15rpx;
		border: 1rpx solid #ddd;
		padding: 5rpx;
	}
	.tel{
		color:#0081FF;
		font-size: 15rpx;
	}
	.btn{
		color: #fff;
		background-color: #0081FF;
		height: 60rpx;
		width: 80rpx;
	}
	.one_vehicle{
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
			.vehicle-no{
				font-vehicleLadenWeight: 700;;
			}
			.vehicle_state{
				font-size:22rpx;
				color:#39B54A;
			}
		}
		
		
	}
</style>
