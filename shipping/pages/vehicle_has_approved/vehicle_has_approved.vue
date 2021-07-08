<template>
	<view class="vehicle-has-approved-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
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
			  vehicle_now:"",
			  vehicle_list:[],
			  show_not_found:false,
			  queryParams: {
			          pageNum: 1,
			          pageSize:7,
			          }
			}
		},
		props:['vehicle'],
		mounted(){
			
			
			
			this.getVehicleList()
		},
		onShow(){
			this.getVehicleList()
			},
		components:{
			infoNotFound
		},	
		methods:{
			upper: function(e) {
			           console.log(e,'11111')
			       },
			lower: function(e) {
			           console.log(e,'222222')
					   this.queryParams.pageNum += this.queryParams.pageSize
					  this.getVehicleList()
					    },
			
			async goVehicleDetail(item){
				if (this.vehicle.state == 1){
					console.log (item.vehicleId,'145')
					const vehicleId = item.vehicleId
					var authorization = uni.getStorageSync("token")
					
					
						let res = await this.$request({
							 	url:"/app/vehicle/getByVehicleId/" + vehicleId,
							 	
							 	header:{
							 		Authorization:authorization,
							 	},
							 	
							 })
						const vehicle_item = res.data.data
						console.log(res,'slbgw111')
						
						
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
			
			async getVehicleList(){
				this.queryParams.vehicleStatus = this.vehicle.state
				const queryParamsVehicle= this.queryParams
				console.log(queryParamsVehicle,"112")
				var authorization = uni.getStorageSync("token")		
				const res = await this.$request({
					url:"/app/vehicle/list",
					header:{
						Authorization:authorization,
					},
					data:queryParamsVehicle
					
				})
				console.log(res,"222")
				if(res.data.total == 0){
					setTimeout(()=>{
						this.show_not_found = true
					},100)
					return
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
		height:95vh;
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

