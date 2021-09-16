<template>
	<view class="vehicle-has-approved-body">
		<radio-group @change="radioChange" >
		<label v-for="(item,index) in drivers_list" :key="item.value"  >
			<view class="one_vehicle">
				<view class="first-row">
					<view class="vehicle-no">{{item.name}}</view>
					<view>
						<text class="work_state">手机号</text>
						<text class="tel">{{item.tel}}</text>
					</view>
					<view>
						<text class="work_state">工作状态</text>
						<text class="vehicle_state">空闲</text>
					</view>
					
				</view>
				
					<view class="vehicle_content">
						<view class="left">
								<view>
									<image src="/static/truck.svg" mode="aspectFit" class="truck" ></image>
								</view>
								<view>
									<text class="vehicle_type">准驾车型/</text>		
									<text>{{item.vehicle_type}}</text>
								</view>
						</view>
						
						
						<view class="right">
							<view class="id">身份证号码</view>
							<view class="id_num">{{item.id_num}}</view>	
								
						</view>
						<radio :value="item.value" :checked="index === current" />
					</view>
			</view>
			
			
		</label>
			
		</radio-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drivers_list:[],
				current: 0
			}
		},
		methods: {
			radioChange: function(evt) {
				 
			        }
		},
		mounted(){
			
			this.drivers_list=[
				{
					name:"杨福涛",
					value:"杨福涛",
					vehicle_type:"A2",
					tel:"370421197408023812",
					id_num:"370421197408023812",
					
					consignee_address:"徐州云龙区铜山路209号",
				},
				{
					name:"滕古城",
					value:"滕古城",
					vehicle_type:"A2",
					tel:"320323198109111217",
					
					id_num:"320323198109111217",
					
					consignee_address:"徐州云龙区铜山路209号",
				},
				{
					name:"张广伟",
					value:"张广伟",
					vehicle_type:"A2",
					tel:"320323197606104419",
					
					id_num:"320323197606104419",
					
					consignee_address:"徐州云龙区铜山路209号",
				},
				
			]
		},
	}
</script>

<style lang="scss" scoped>
	.vehicle-has-approved-body{
		background-color: #fff;
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
				font-weight: 700;;
			}
			.vehicle_state{
				font-size:22rpx;
				color:#39B54A;
			}
		}
		
		
	}
</style>
