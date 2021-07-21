<template>
	<view class="vehicle-has-approved-body">
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left">姓名</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input placeholder="通过姓名搜索" type="text" @input="searchDriverName"
				selection-start="-1"  selection-end="-1" cursor="-1" />
			</view>
		</view>
		
		
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left">身份证号码</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input placeholder="通过身份证号码搜索" type="text" @input="searchDriverIdNumber"
				selection-start="-1"  selection-end="-1" cursor="-1" />
			</view>
		</view>
		
	<!-- 	<view class="cu-bar search bg-white">
			 <text class="margin-left">工作状态</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker @change="bindPickerDriverWorkStatusChange" :value="driver_work_status_index" :range="driverWorkStatusOptions">
				    <view class="picker-view text-lg">{{driverWorkStatusOptions[driver_work_status_index]}}</view>
				 </picker>
			</view>
		</view> -->
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left">手机号码</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input placeholder="通过手机号码搜索" type="text" @input="searchDriverPhone"
				selection-start="-1"  selection-end="-1" cursor="-1" />
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" role="button"
				aria-disabled="false" @click="searchDriverBtn" >搜索</button>
			</view>
		</view>
		
		<!-- <view class="cu-bar search bg-white">
			 <text class="margin-left">准驾车型</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker @change="bindPickerDriverVehicleClassChange" :value="driver_vehicle_class_index" :range="driverVehicleClassOptions">
				    <view class="picker-view text-lg">{{driverVehicleClassOptions[driver_vehicle_class_index]}}</view>
				 </picker>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" role="button"
				aria-disabled="false" @click="searchDriver" >搜索</button>
			</view>
		</view> -->
		
		
		
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
				
				// 工作状态字典
				driverWorkStatusOptions:[],
				driver_work_status_index:0,
				driverWorkStatusSendValue:[],
				// 准驾车型字典
				driverVehicleClassOptions:[],
				driver_vehicle_class_index:0,
			
				//姓名
				 driverName:"",
				 //身份证号码
				driverIdNumber:"", 
				// 工作状态数据
				driverWorkStatus:"",
				// 手机号码
				driverPhone:"",
				// 准驾车型
				driverVehicleClass:"",
				
				
				
				drivers_list:[],
				current: -1,
				chief_driver_choosen:"",
				chief_driver_id:"",
				queryParams: {
				        pageNum: 1,
				        pageSize: 5,
				        
				        }
			}
		},
		
		created(){
			
		    
			// 工作状态字典
			this.getDriverWorkStatusOptions()
			 //准驾车型字典
			this.getDriverVehicleClassOptions() 
			 },
		mounted(){
			
			this.searchDriver()
		},	 
			 
		methods: {
			//按下搜索按钮
			searchDriverBtn(){
				
				this.drivers_list =[]
				this.queryParams.pageNum = 1
				this.queryParams.pageSize = 1000
				this.searchDriver()
			},
			
			// 工作状态字典
			async getDriverWorkStatusOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_work_status",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					console.log(res,'a12');
					 
					 this.driverWorkStatusOptions = res.data.data.map(e=>e=e.dictLabel)
					 this.driverWorkStatusSendValue = res.data.data.map(e=>e=e.dictValue)
					 this.driverWorkStatusOptions.unshift("请选择工作状态")
			},
			
			//准驾车型字典
			async getDriverVehicleClassOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/driver_vehicle_class",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					console.log(res,'345');
					
					  this.driverVehicleClassOptions = res.data.data.map(e=>e=e.dictLabel)
					
					  this.driverVehicleClassOptions.unshift("请选择准驾车型")
					  
					  
			},
			
			
			
			
			//通过姓名搜索
			searchDriverName(e){
				this.driverName = e.target.value
				console.log(this.driverName,'aas');
			},
			
			//通过身份证号码搜索
			searchDriverIdNumber(e){
				this.driverIdNumber = e.target.value
				console.log(this.driverIdNumber,'c112');
			},
			
			
			//通过工作状态搜索
			bindPickerDriverWorkStatusChange(e) {
						            console.log('picker发送选择改变，携带值为驾驶员状态', e.target.value)
						            this.driver_work_status_index = e.target.value
									
									var driver_work_status_index = this.driver_work_status_index
									
									 this.driverWorkStatus =this.driverWorkStatusSendValue[driver_work_status_index-1]
									 console.log (this.driverWorkStatus,"驾驶员状态后台值")
									
						        },
			//通过手机号码搜索					
			searchDriverPhone(e){
				this.driverPhone= e.target.value
				console.log(this.driverPhone,'sa2');
			
			},
			
			//通过准驾车型搜索
			// bindPickerDriverVehicleClassChange(e) {
			// 			            console.log('picker发送选择改变，携带值为准驾车型', e.target.value)
			// 			            this.driver_vehicle_class_index = e.target.value
									
			// 						var driver_vehicle_class_index = this.driver_vehicle_class_index
									
			// 						 this.driverVehicleClass =this.driverVehicleClassOptions[driver_vehicle_class_index]
			// 						 console.log (this.driverVehicleClass,"准驾车型后台值")
					
			// },				
			upper: function(e) {
			           
			       },
			lower: function(e) {
			           console.log(e,'222222')
					   
					   setTimeout(() => {
					   
					   //TODO这里填写你加载数据的方法
					   // this.queryParams.pageNum += this.queryParams.pageSize
					   
					   this.queryParams.pageNum += 1
					   if (this.load_more){
						    this.searchDriver()
					   }
					  
					   
					   }, 1000)
					  
				              },
			radioChange: function(evt) {
				  
				  // this.chief_driver_choosen = evt.target.value.driverName
				  // this.chief_driver_id = evt.target.value.driverId
				  
				  uni.setStorageSync("chief_driver_choosen",evt.target.value)
				 // uni.setStorageSync("chief_driver_id", this.chief_driver_id)
				  uni.navigateTo({
					  url:"/pages/choosing_driver/choosing_driver",
				  })
			     
			        },
				
				//司机列表搜索
				async searchDriver(){
							 
								const queryParams= this.queryParams
								const driverName = this.driverName
								
								const driverIdNumber =this.driverIdNumber
								const driverPhone =this.driverPhone
								
								// const driverWorkStatus =this.driverWorkStatus
								
								// const driverVehicleClass =this.driverVehicleClass
								
								//url:`/app/driver/list?driverName=${driverName}&driverIdNumber=${driverIdNumber}&driverWorkStatus=${driverWorkStatus}&driverPhone=${driverPhone}&driverVehicleClass=${driverVehicleClass}`,
								
								var authorization = uni.getStorageSync("token")		
								const res = await this.$request({
									url:`/app/driver/list?driverName=${driverName}&driverIdNumber=${driverIdNumber}&driverPhone=${driverPhone}`,
									header:{
										Authorization:authorization,
										// "Content-Type": "application/json",
									},
									data:queryParams
									
								})
								 
								//stop sending request
								if (this.queryParams.pageNum*this.queryParams.pageSize>=res.data.total){
									this.load_more = false
								}
									
									
								console.log(res,'q55');  
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
		
	}
</script>

<style lang="scss" scoped>
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	
	.scroll-Y{
		height: 800rpx;
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
