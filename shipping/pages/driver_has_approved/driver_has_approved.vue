<template>
	<view class="vehicle-has-approved-body">
		
		<view class="search-body">
			<view class="cu-bar search bg-white">
				 <text class="margin-left title">姓名</text>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input placeholder="通过姓名搜索" type="text" @input="searchDriverName"
					selection-start="-1"  selection-end="-1" cursor="-1" />
				</view>
			</view>
			
			
			<view class="cu-bar search bg-white">
				 <text class="margin-left title">身份证号码</text>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input placeholder="通过身份证号码搜索" type="text" @input="searchDriverIdNumber"
					selection-start="-1"  selection-end="-1" cursor="-1" />
				</view>
			</view>
			
			<view class="cu-bar search bg-white">
				 <text class="margin-left title">手机号码</text>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input placeholder="通过手机号码搜索" type="text" @input="searchDriverPhone"
					selection-start="-1"  selection-end="-1" cursor="-1" />
					<button class="cu-btn bg-green shadow-blur round" role="button"
					aria-disabled="false" @click="searchDriverBtn" >搜索</button>
				</view>
				
			
			</view>
		</view>
		
		
		<!-- <view class="cu-bar search bg-white">
			 <text class="margin-left">工作状态</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker @change="bindPickerDriverWorkStatusChange" :value="driver_work_status_index" :range="driverWorkStatusOptions">
				    <view class="picker-view text-lg">{{driverWorkStatusOptions[driver_work_status_index]}}</view>
				 </picker>
			</view>
		</view> -->
		
		
		
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
			</view> :style="{height:scrollHeight+'rpx'}"
		</view> -->
		
		
		<scroll-view scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true" >
		<view v-for="(item,index) in driverList" :key="index" class="one_vehicle " @click="goDriverDetail(item)" >
			<view class="first-row">
				<view class="vehicle-no">
					<image src="/static/talk.png" mode="aspectFit" class="cell" ></image>
				{{item.driverPhone}} （{{item.driverVehicleClass}}车型）
				</view>
				<text class="vehicle_state">{{vehicle.text}}</text>
			</view>
			
				<view class="vehicle_content">
					<view class="left">
						<view>
							<image src="/static/chofer.png" mode="aspectFit" class="truck" ></image>
						</view>
						<view>
							<text class="margin-right">{{item.driverName}}  </text>		
							<text><image src="/static/id.png" mode="aspectFit" class="id" ></image>
							{{item.driverIdNumber}} </text>
						</view>
					</view>
					
					
					<view class="right">
						<text class="create_time">{{item.carrierName}}</text>		
					</view>
					
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
			
			  vehicle_now:"",
			  // // 驾驶员状态字典
			  // driverStatusOptions:[],
			  // driver_status_index:0,
			  // driverStatusSendValue:[],
			  // 工作状态字典
			  // driverWorkStatusOptions:[],
			  // driver_work_status_index:0,
			  // driverWorkStatusSendValue:[],
			  // 准驾车型字典
			  // driverVehicleClassOptions:[],
			  // driver_vehicle_class_index:0,
			  
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
			  
			  
			  
			  
			  driverList: [],
			  show_not_found:false,
			  queryParams: {
			          pageNum: 1,
			          pageSize:7,
			          }
			}
		},
		props:['vehicle'],
		
		created(){
			
			//用于正常显示，勿删！！！！
			// // 驾驶员状态字典
			// this.getDriverStatusOptions()
			// 工作状态字典
			//this.getDriverWorkStatusOptions()
			 //准驾车型字典
			//this.getDriverVehicleClassOptions() 
			 },
		mounted(){
			console.log(this.vehicle,'1999');
			
			this.searchDriver()
		},
		
		components:{
			infoNotFound
		},	
		methods:{
			//按下搜索按钮
			searchDriverBtn(){
				
				this.driverList =[]
				this.queryParams.pageNum = 1
				this.queryParams.pageSize = 1000
				this.searchDriver()
			},
			
			// 驾驶员状态字典
			// async getDriverStatusOptions(){
			// 	var that = this
			// 	var authorization = uni.getStorageSync("token")
				
			// 	const res = await this.$request({
			// 		 	url:"/system/dict/data/type/vehicle_status",
					 	
			// 		 	header:{
			// 		 		Authorization:authorization,
			// 		 	},
					 	
			// 		 })
			
					 
			// 		 this.driverStatusOptions = res.data.data.map(e=>e=e.dictLabel)
			// 		 this.driverStatusSendValue = res.data.data.map(e=>e=e.dictValue)
			// 		 this.driverStatusOptions.unshift("请选择驾驶员状态")
			// },
			
			// 工作状态字典
			// async getDriverWorkStatusOptions(){
			// 	var that = this
			// 	var authorization = uni.getStorageSync("token")
				
			// 	const res = await this.$request({
			// 		 	url:"/system/dict/data/type/vehicle_work_status",
					 	
			// 		 	header:{
			// 		 		Authorization:authorization,
			// 		 	},
					 	
			// 		 })
			
					 
			// 		 this.driverWorkStatusOptions = res.data.data.map(e=>e=e.dictLabel)
			// 		 this.driverWorkStatusSendValue = res.data.data.map(e=>e=e.dictValue)
			// 		 this.driverWorkStatusOptions.unshift("请选择工作状态")
			// },
			
			//准驾车型字典
			// async getDriverVehicleClassOptions(){
			// 	var that = this
			// 	var authorization = uni.getStorageSync("token")
				
			// 	const res = await this.$request({
			// 		 	url:"/system/dict/data/type/driver_vehicle_class",
					 	
			// 		 	header:{
			// 		 		Authorization:authorization,
			// 		 	},
					 	
			// 		 })
			
					
			// 		  this.driverVehicleClassOptions = res.data.data.map(e=>e=e.dictLabel)
					
			// 		  this.driverVehicleClassOptions.unshift("请选择准驾车型")
					  
					  
			// },
			
			//通过姓名搜索
			searchDriverName(e){
				this.driverName = e.target.value
				
			},
		
			//通过身份证号码搜索
			searchDriverIdNumber(e){
				this.driverIdNumber = e.target.value
				
			},
			//通过驾驶员状态搜索
			// bindPickerDriverStatusChange(e) {
		
			// 			            this.driver_status_index = e.target.value
									
			// 						var driver_status_index = this.driver_status_index
									
			// 						 this.driverStatus =this.driverStatusSendValue[driver_status_index-1]
			
									
			// 			        },
			//通过工作状态搜索
			// bindPickerDriverWorkStatusChange(e) {
			
			// 			            this.driver_work_status_index = e.target.value
									
			// 						var driver_work_status_index = this.driver_work_status_index
									
			// 						 this.driverWorkStatus =this.driverWorkStatusSendValue[driver_work_status_index-1]
			
									
			// 			        },
			//通过手机号码搜索					
			searchDriverPhone(e){
				this.driverPhone= e.target.value
				
			
			},
			
			//通过准驾车型搜索
			// bindPickerDriverVehicleClassChange(e) {
			
			// 			            this.driver_vehicle_class_index = e.target.value
									
			// 						var driver_vehicle_class_index = this.driver_vehicle_class_index
									
			// 						 this.driverVehicleClass =this.driverVehicleClassOptions[driver_vehicle_class_index]
			
					
			// },					
			
			upper: function(e) {
			          
			       },
			lower: function(e) {
			           
					   
					   setTimeout(() => {
					   
					   //TODO这里填写你加载数据的方法
					  
					   
					   this.queryParams.pageNum += 1
					   if (this.load_more){
						    this.searchDriver()
					   }
					  
					   
					   }, 1000)
					  
				              },
			
			goDriverDetail(item){
			    if (this.vehicle.state == 1){
					uni.setStorageSync('driver_item',item)
					 
					uni.navigateTo({
						url:`/pages/add_driver/add_driver?btn_title=修改`
					})
				}else{
					uni.setStorageSync('driver_item',item)
					uni.navigateTo({
						url:`/pages/add_driver/add_driver?btn_title=查看`
					})
				}
			},
			
			
				
				//司机列表搜索
				async searchDriver(){
							 this.queryParams.driverStatus = this.vehicle.state
								const queryParams= this.queryParams
								const driverName = this.driverName
								
								const driverIdNumber =this.driverIdNumber
								// const driverStatus =this.driverStatus
								// const driverWorkStatus =this.driverWorkStatus
								const driverPhone =this.driverPhone
								// const driverVehicleClass =this.driverVehicleClass
								//url:`/app/driver/list?driverName=${driverName}&driverIdNumber=${driverIdNumber}&driverWorkStatus=${driverWorkStatus}&driverPhone=${driverPhone}&driverVehicleClass=${driverVehicleClass}`,
								var authorization = uni.getStorageSync("token")		
								const res = await this.$request({
									url:`/app/driver/list?driverName=${driverName}&driverIdNumber=${driverIdNumber}&driverPhone=${driverPhone}`,
									header:{
										Authorization:authorization,
									},
									data:queryParams
									
								})
								//stop sending request 
								if (this.queryParams.pageNum*this.queryParams.pageSize>=res.data.total){
									this.load_more = false
								}
								
									if (this.driverList.length<res.data.total){
										this.driverList =[...this.driverList,...res.data.rows]
										
									}else{
										uni.showToast({
											title:"没有更多的信息了",
											icon:"none"
										})
										return
									}  
 
								
				 },
				 
				//点击搜索按钮后的司机列表搜索 
				async searchDriverforSearch(){
							 
								const queryParams= this.queryParams
								const driverName = this.driverName
								
								const driverIdNumber =this.driverIdNumber
								// const driverStatus =this.driverStatus
								// const driverWorkStatus =this.driverWorkStatus
								const driverPhone =this.driverPhone
								// const driverVehicleClass =this.driverVehicleClass
								//url:`/app/driver/list?driverName=${driverName}&driverIdNumber=${driverIdNumber}&driverWorkStatus=${driverWorkStatus}&driverPhone=${driverPhone}&driverVehicleClass=${driverVehicleClass}`,
								var authorization = uni.getStorageSync("token")		
								const res = await this.$request({
									url:`/app/driver/list?driverName=${driverName}&driverIdNumber=${driverIdNumber}&driverPhone=${driverPhone}`,
									header:{
										Authorization:authorization,
									},
									data:queryParams
									
								})
								//stop sending request 
								if (this.queryParams.pageNum*this.queryParams.pageSize>=res.data.total){
									this.load_more = false
								}
								
									if (this.driverList.length<res.data.total){
										this.driverList =[...this.driverList,...res.data.rows]
										
									}else{
										uni.showToast({
											title:"没有更多的信息了",
											icon:"none"
										})
										return
									}  
								
								    
								 
								
				 },
			
		}
	}
</script>

<style lang="scss" scoped>
	.search-body{
		width:100%;
		height: 320rpx;
	}
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	
	.title{
		width: 150rpx;
	}
	
	.gray{
		color:#777;
	}
	
	.scroll-Y{
		 height: 750rpx;
		
	}
	.truck{
	   width: 50rpx;
	   height: 50rpx;
	   margin:5rpx 30rpx;
	}
	.cell{
		width: 40rpx;
		height: 40rpx;
		margin:0rpx 25rpx;
	}
	.id{
		width: 40rpx;
		height: 30rpx;
	}
	.vehicle_content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			width:70%;
		    display: flex;
			align-items: center;
			color: #999;
			
		}
		.right{
			width:30%;
			display: flex;
			align-items: center;
			color: #aaa;
			justify-content: flex-end;
			padding-right: 20rpx;
		}
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

