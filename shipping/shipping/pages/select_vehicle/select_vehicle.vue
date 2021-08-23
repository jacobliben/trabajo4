<template>
	<view class="vehicle-has-approved-body">
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left">车船牌照号码</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input placeholder="通过车船牌照号码搜索" type="text" @input="searchVehiclePlateNumber" class="vehicle-plate-num"
				selection-start="-1"  selection-end="-1" cursor="-1" />
			</view>
		</view>
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left ">车辆入网状态</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker @change="bindPickerVehicleNetStatusChange" :value="vehicle_net_status_index" :range="vehicleNetStatusOptions">
				    <view class="picker-view text-lg state-value">{{vehicleNetStatusOptions[vehicle_net_status_index]}}</view>
				 </picker>
			</view>
		</view>
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left ">车辆工作状态</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker @change="bindPickerVehicleWorkStatusChange" :value="vehicle_work_status_index" :range="vehicleWorkStatusOptions">
				    <view class="picker-view text-lg state-value">{{vehicleWorkStatusOptions[vehicle_work_status_index]}}</view>
				 </picker>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" role="button"
				aria-disabled="false" @click="searchVehicleBtn" >搜索</button>
			</view>
		</view>
		
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
						<radio :value="JSON.stringify(item)" :checked="index === current" />
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
				load_more:true,//继续加载列表
				
				//车辆入网状态字典
				vehicleNetStatusOptions:[],
				vehicle_net_status_index:0,
				vehicleNetStatusSendValue:[],
				
				// 工作状态字典
				vehicleWorkStatusOptions:[],
				vehicle_work_status_index:0,
				vehicleWorkStatusSendValue:[],
				
				
				//车船牌照号码
				vehiclePlateNumber:"",
				//承运人
				carrierName:"",
				// 车辆入网状态数据
				vehicleNetStatus:"", 
				// 车辆工作状态数据
				vehicleWorkStatus:"", 
				// 车主类型数据
				vehicleOwnType:"", 
				//道路运输证号
				vehicleRoadcertNo:"", 
				// 车辆长度
				vehicleLength:"", 
				
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
		created(){
			// 车辆入网状态字典
			this.getVehicleNetStatusOptions()
			
			// 工作状态字典
			this.getVehicleWorkStatusOptions()
		
			},
			
		mounted(){
			
			this.searchVehicle()
		},
				
		methods: {
			//按下搜索按钮
			searchVehicleBtn(){
				
				this.vehicle_list =[]
				this.queryParams.pageNum = 1
				this.queryParams.pageSize = 1000
				this.searchVehicle()
			},
			
			// 车辆入网状态字典
			async getVehicleNetStatusOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_net_status",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 
					 this.vehicleNetStatusOptions = res.data.data.map(e=>e=e.dictLabel)
					 this.vehicleNetStatusSendValue = res.data.data.map(e=>e=e.dictValue)
					 this.vehicleNetStatusOptions.unshift("请选择车辆入网状态")
			},
			
			
			// 工作状态字典
			async getVehicleWorkStatusOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_work_status",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					 
					 this.vehicleWorkStatusOptions = res.data.data.map(e=>e=e.dictLabel)
					 this.vehicleWorkStatusSendValue = res.data.data.map(e=>e=e.dictValue)
					 this.vehicleWorkStatusOptions.unshift("请选择车辆工作状态")
			},
			
			
			
			//通过车船牌照号码搜索
			searchVehiclePlateNumber(e){
				this.vehiclePlateNumber = e.target.value
				
			},
			
			
			//通过车辆入网状态搜索
			bindPickerVehicleNetStatusChange(e) {
						          
						            this.vehicle_net_status_index = e.target.value
									
									var vehicle_net_status_index = this.vehicle_net_status_index
									
									 this.vehicleNetStatus =this.vehicleNetStatusSendValue[vehicle_net_status_index-1]
									
									
						        },
			
			//通过工作状态搜索
			bindPickerVehicleWorkStatusChange(e) {
						           
						            this.vehicle_work_status_index = e.target.value
									
									var vehicle_work_status_index = this.vehicle_work_status_index
									
									 this.vehicleWorkStatus =this.vehicleWorkStatusSendValue[vehicle_work_status_index-1]
									
									
						        },
			
			
			upper: function(e) {
			          
			       },
			lower: function(e) {
			          
					    
						setTimeout(() => {
						//TODO这里填写你加载数据的方法
						
						this.queryParams.pageNum += 1
						if (this.load_more){
							 this.searchVehicle()
						}
					}, 1000)
						
				},
						
			radioChange: function(evt) {
				
			      uni.setStorageSync("vehicle_choosen", evt.target.value)
				
			      uni.navigateTo({
			      					  url:"/pages/choosing_driver/choosing_driver",
			      })      
			        },
					
			
			//车辆列表搜索
			async searchVehicle(){
						 
							const queryParams= this.queryParams
							const vehiclePlateNumber = this.vehiclePlateNumber
							const carrierName = this.carrierName
							const vehicleNetStatus = this.vehicleNetStatus
							const vehicleWorkStatus =this.vehicleWorkStatus
							const vehicleOwnType =this.vehicleOwnType
							const vehicleRoadcertNo =this.vehicleRoadcertNo
							const vehicleLength =this.vehicleLength
							
							var authorization = uni.getStorageSync("token")		
							const res = await this.$request({
								url:`/app/vehicle/list?vehiclePlateNumber=${vehiclePlateNumber}&carrierName=${carrierName}&vehicleNetStatus=${vehicleNetStatus}&vehicleWorkStatus=${vehicleWorkStatus}&vehicleOwnType=${vehicleOwnType}&vehicleRoadcertNo=${vehicleRoadcertNo}&vehicleLength=${vehicleLength}`,
								header:{
									Authorization:authorization,
									
								},
								data:queryParams
								
							})
							
							//stop sending request
							if (this.queryParams.pageNum*this.queryParams.pageSize>=res.data.total){
								this.load_more = false
							}
							     
							
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
		
	}
</script>

<style lang="scss" scoped>
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	.scroll-Y{
		height:85vh;
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
	
	.state-value,.vehicle-plate-num{
		font-size: 27rpx;
		color:#777;
	}
</style>
