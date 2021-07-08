<template>
	<view class="vehicle-has-approved-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
		<radio-group @change="radioChange"  >
		<label v-for="(item,index) in drivers_list" :key="item.value"  >
			<view class="one_vehicle">
				<view class="first-row">
					<view class="vehicle-no">{{item.driverName}}</view>
					<view>
						<text class="work_state">手机号</text>
						<text class="driverPhone">{{item.driverPhone}}</text>
					</view>
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
										<text class="driverVehicleClass">准驾车型/</text>		
										<text>{{item.driverVehicleClass}}</text>
									</view>
							</view>
						
						<view class="right">
							<view class="id">身份证号码</view>
							<view class="driverIdNumber">{{item.driverIdNumber}}</view>	
								
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
				drivers_list:[],
				current: -1,
				chief_driver_choosen:"",
				chief_driver_id:"",
				queryParams: {
				        pageNum: 1,
				        pageSize: 10,
				        
				        driverStatus: 1,
				        
				        }
			}
		},
		methods: {
			upper: function(e) {
			           
			       },
			lower: function(e) {
			          
					   this.queryParams.pageNum += this.queryParams.pageSize
					  this.getChiefDriverList()
			       },
			radioChange: function(evt) {
				  
				  this.chief_driver_choosen = evt.target.value.driverName
				  this.chief_driver_id = evt.target.value.driverId
				  
				  uni.setStorageSync("chief_driver_choosen", this.chief_driver_choosen)
				  uni.setStorageSync("chief_driver_id", this.chief_driver_id)
				  uni.navigateTo({
					  url:"/pages/choosing_driver/choosing_driver",
				  })
			     
			        },
					
			async getChiefDriverList(){
						const queryParams= this.queryParams
						var authorization = uni.getStorageSync("token")		
						const res = await this.$request({
							url:"/app/driver/list",
							header:{
								Authorization:authorization,
							},
							data:queryParams
							
						})
						
						
						
						if (this.drivers_list.length<res.data.total){
							this.drivers_list =[...this.drivers_list,...res.data.rows]
							
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
			
			this.getChiefDriverList()
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
			flex-direction: column;
			align-items: center;
			color: #aaa;
			
			padding-right: 20rpx;
			.id{
				color:#ddd;
				font-size: 15rpx;
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
	.driverPhone{
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
				font-weight: 700;;
			}
			.vehicle_state{
				font-size:22rpx;
				color:#39B54A;
			}
		}
		
		
	}
</style>
