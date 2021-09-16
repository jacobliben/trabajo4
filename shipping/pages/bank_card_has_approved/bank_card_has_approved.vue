<template>
	<view class="vehicle-has-approved-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true" >
		<view v-for="(item,index) in bankcard_list" :key="index" class="one_vehicle " @click="changeBank(item)" >
			<view class="first-row">
				<view class="vehicle-no">
				银行账户 ：{{item.bankcardAccount}} （{{item.carrierAccountType=="1"?"个人":"	企业"}}）
				</view>
				<text class="vehicle_state">{{vehicle.text}}</text>
			</view>
			
				<view class="vehicle_content">
					<view class="left">
						<view>
							<image src="/static/bankcard.svg" mode="aspectFit" class="truck" ></image>
						</view>
						<view>
							<text class="vehicle_type">{{item.bankName}}  </text>		
							<text> ({{item.carrierBankcardIsDefault=="1"?"是默认账户":"非默认账户"}}) </text>
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
			  bankcard_list:[],
			  carrierBankcardCategoryOptions:[],
			  carrierAccountTypeOptions:[],
			  carrierAccountTypeSendValue:[],
			  carrierAccountType :"",
			  show_not_found:false,
			  queryParams: {
			          pageNum: 1,
			          pageSize:7,
			          }
			}
		},
		props:['vehicle'],
		created(){
			this.getCarrierBankcardCategoryOptions()
			this.getCarrierAccountTypeOptions()
		},
		
		mounted(){
			
			this.getBankList()
		},
		onShow(){
			this.getBankList()
			},
		components:{
			infoNotFound
		},	
		methods:{
			async getCarrierBankcardCategoryOptions(){
				const carrierBankcardCategoryOptions = await this.$getRegistDicts("carrier_bankcard_category")
				
			},
			async getCarrierAccountTypeOptions(){
				const carrierAccountTypeOptions = await this.$getRegistDicts("vehicle_own_type")
				this.carrierAccountTypeOptions = carrierAccountTypeOptions.data.data.map(e=>e.dictLabel)
				this.carrierAccountTypeSendValue = carrierAccountTypeOptions.data.data.map(e=>e.dictValue)
				 //this.carrierAccountType = this.carrierAccountTypeOptions[]
				
				const carrier_account_type_index = carrierAccountTypeOptions.data.data.map(e=>e.dictValue)
			},
			upper: function(e) {
			          
			       },
			lower: function(e) {
			          
					   this.queryParams.pageNum += this.queryParams.pageSize
					  this.getBankList()
					    },
			
			changeBank(item){
				uni.setStorageSync('bankcard_item',item)
				uni.navigateTo({
					url:`/pages/add_bankcard/add_bankcard?btn_title=修改`
				})
				
			},
			
			async getBankList(){
				
				const queryParams= this.queryParams
				
				var authorization = uni.getStorageSync("token")		
				const res = await this.$request({
					url:"/app/carrierBankcard/list",
					header:{
						Authorization:authorization,
					},
					data:queryParams
					
				})
				
				if(res.data.total == 0){
					setTimeout(()=>{
						this.show_not_found = true
					},10)
					return
				}
				
				if (this.bankcard_list.length<res.data.total){
					this.bankcard_list =[...this.bankcard_list,...res.data.rows]
					
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

