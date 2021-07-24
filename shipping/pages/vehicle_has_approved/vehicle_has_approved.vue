<template>
	<view class="vehicle-has-approved-body">
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left">车船牌照号码</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input placeholder="通过车船牌照号码搜索" type="text" @input="searchVehiclePlateNumber"
				selection-start="-1"  selection-end="-1" cursor="-1" />
			</view>
		</view>
		
		 
		
		<view class="cu-bar search bg-white">
			 <text class="margin-left">工作状态</text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker @change="bindPickerVehicleWorkStatusChange" :value="vehicle_work_status_index" :range="vehicleWorkStatusOptions">
				    <view class="picker-view text-lg">{{vehicleWorkStatusOptions[vehicle_work_status_index]}}</view>
				 </picker>
			</view>
			
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" role="button"
				aria-disabled="false" @click="searchVehicleBtn" >搜索</button>
			</view>
		</view>
		
		
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" upper-threshold="250"
		  lower-threshold="250" enable-flex="true">
		<view v-for="(item,index) in vehicle_list" :key="index" class="one_vehicle " @click="goVehicleDetail(item)" >
			<view class="first-row">
				<view class="vehicle-no">{{item.vehiclePlateNumber}}</view>
				<text class="vehicle_state">{{vehicle.text}}</text>
			</view>
			
				<view class="vehicle_content">
					<view class="left">
						<view>
							<image src="/static/truck.png" mode="aspectFit" class="truck" ></image>
						</view>
						<view>
							<text class="vehicle_type">{{item.vehicleBrands}} / </text>		
							<text> {{item.vehicleLadenWeight}} 吨</text>
						</view>
					</view>
					
					
					<view class="right">
						<text class="create_time">{{item.vehicleOwnName}}</text>		
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
			  
			  // 工作状态字典
			  vehicleWorkStatusOptions:[],
			  vehicle_work_status_index:0,
			  vehicleWorkStatusSendValue:[],
			
			  //车船牌照号码
			  vehiclePlateNumber:"",
			 
			  // 工作状态数据
			  vehicleWorkStatus:"", 
			
			  
			  vehicle_list:[],
			  show_not_found:false,
			  queryParams: {
			          pageNum: 1,
			          pageSize:6,
			          }
			}
		},
		props:['vehicle'],
		created(){
			
	
			// 工作状态字典
			this.getVehicleWorkStatusOptions()
			
			},
		mounted(){
			console.log(this.vehicle,'1998');
			
			
			this.searchVehicle()
		},
		
		components:{
			infoNotFound
		},	
		methods:{
			//按下搜索按钮
			searchVehicleBtn(){
				
				this.vehicle_list =[]
				this.queryParams.pageNum = 1
				this.queryParams.pageSize = 1000
				this.searchVehicle()
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
					 this.vehicleWorkStatusOptions.unshift("请选择工作状态")
			},
			
			
			
			
			//通过车船牌照号码搜索
			searchVehiclePlateNumber(e){
				this.vehiclePlateNumber = e.target.value
				
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
			
			async goVehicleDetail(item){
				if (this.vehicle.state == 1){
					
					const vehicleId = item.vehicleId
					var authorization = uni.getStorageSync("token")
					
					
						let res = await this.$request({
							 	url:"/app/vehicle/getByVehicleId/" + vehicleId,
							 	
							 	header:{
							 		Authorization:authorization,
							 	},
							 	
							 })
						const vehicle_item = res.data.data
						
						
						
					uni.setStorageSync('vehicle_item',vehicle_item)
					uni.navigateTo({
						url:`/pages/add_vehicle/add_vehicle?btn_title=修改`
					})
				}else{
					uni.setStorageSync('vehicle_item',item)
					uni.navigateTo({
						url:`/pages/add_vehicle/add_vehicle?btn_title=查看`
					})
				}
				
				
			},
			
			
		
			//车辆列表搜索
			async searchVehicle(){
						 this.queryParams.vehicleStatus = this.vehicle.state
							const queryParams= this.queryParams
							const vehiclePlateNumber = this.vehiclePlateNumber
							
							const vehicleWorkStatus =this.vehicleWorkStatus
							
							
							var authorization = uni.getStorageSync("token")		
							const res = await this.$request({
								url:`/app/vehicle/list?vehiclePlateNumber=${vehiclePlateNumber}&vehicleWorkStatus=${vehicleWorkStatus}`,
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
			
		}
	}
</script>

<style lang="scss" scoped>
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	.scroll-Y{
		height:65vh;
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
			.truck{
		       width: 50rpx;
		       height: 50rpx;
		       margin:5rpx 30rpx;
	        }
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

