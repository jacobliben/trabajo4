<template>
	<view class="vehicle-has-approved-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
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
			  vehicle_now:"",
			  
			  // 驾驶员 表格数据
			  driverList: [],
			  show_not_found:false,
			  queryParams: {
			          pageNum: 1,
			          pageSize:7,
			          }
			}
		},
		props:['vehicle'],
		mounted(){
			
			this.bankcard_list=[
				{
					bankcardAccount:"3203230551010000018982",
					carrierBankcardCategory:"银行账户",
					carrierAccountType:"企业",
					bankCode:"徐州农村商业银行",
					carrierBankcardIsDefault:"默认账户",
					create_time:"2021-02-22 11:01:22",
					
					carrierName:"徐州市聚诚运输有限公司",
				},
				
			]
			
			this.getDriverList()
		},
		onShow(){
			this.getDriverList()
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
					  this.getDriverList()
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
			
			async getDriverList(){
				this.queryParams.driverStatus = this.vehicle.state
				const queryParamsDriver= this.queryParams
				console.log(queryParamsDriver,"112")
				var authorization = uni.getStorageSync("token")		
				const res = await this.$request({
					url:"/iscm/driver/list",
					header:{
						Authorization:authorization,
					},
					data:queryParamsDriver
					
				})
				console.log(res,"222")
				if(res.data.total == 0){
					setTimeout(()=>{
						this.show_not_found = true
					},10)
					return
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
	.vehicle-has-approved-body{
		background-color: #fff;
	}
	.scroll-Y{
		height:95vh;
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

