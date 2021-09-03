<template>
	<view>
		<view>
			<view class="cargo-title">车型选择 <text  class="cargo-text">（可多选）</text></view>
			<view class="flex ">
			<axb-check-box ref="radio3" :multi="true" :list="cargoBoxType" @change="radioChangeType" v-if="cargo_show" class="cargo-type"></axb-check-box>
			</view>
		</view>
		<view>
			<view class="cargo-title">车长选择 （米）<text  class="cargo-text">（可多选）</text></view>
			<view class="flex ">
			<axb-check-box :multi="true" ref="radio3" :list="vehicleLength" @change="radioChangeLengthType" v-if="vehicle_show" class="cargo-type"></axb-check-box>
			</view>
		</view>
		
		<view class="btns">
			<button  type="default" class="clear-btn" @click="clearChoices" >清空条件</button>
			<button  type="primary" class="confirm-btn" @click="" >确认</button>
		</view>
			
		
	</view>
</template>

<script>
	import axbCheckBox from '@/components/axb-checkbox/axb-checkbox.vue'
	export default {
		data() {
			return {
				//车辆类型字典
				 cargoBoxTypeOptions: [],
				 
				 cargoBoxType: [],
				 //车长字典
				 vehicleLengthOptions: [],
				 vehicleLength: [],
				 
				 cargo_show:false,
				 vehicle_show:false,
				startTime: [
					// { // 开始日期
				 //        name: '过去三天',
				 //        value: '3day',
				 //        checked: 0
				 //    }, {
				 //        name: '过去一周',
				 //        value: '1week',
				 //        checked: 0
				 //    }, {
				 //        name: '过去一月',
				 //        value: '1month',
				 //        checked: 0
				 //    }, {
				 //        name: '过去半年',
				 //        value: '6month',
				 //        checked: 0
				 //    }, {
				 //        name: '过去一年',
				 //        value: '1year',
				 //        checked: 0
				 //    },
					],
			}
		},
		mounted(){
		
			 //车辆类型字典
			 this.getCargoBoxTypeOptions()
			 //车长字典
			 this.getVehicleLengthOptions()
		},	 
		components: {
		    axbCheckBox
		},
		methods: {
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_cargo_box_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
				console.log(res,"cargoBoxTypeOptions");	
					this.cargoBoxTypeOptions = res.data.data
				console.log(this.cargoBoxTypeOptions,"cargoBoxTypeOptions111");	
				
				var newArr = []
				
				for (let i =0; i< this.cargoBoxTypeOptions.length; i++){
					var obj ={}
					console.log(this.cargoBoxTypeOptions[i],"i");	
					var {name, value, checked} = obj
					obj.name = this.cargoBoxTypeOptions[i].dictLabel
					obj.value = this.cargoBoxTypeOptions[i].dictValue
					obj.checked= 0
					console.log(obj ,"obj");
					newArr.push(obj)
				}
				console.log(newArr,"newArr");	
					this.cargoBoxType = newArr
				
				 this.cargo_show = true
			},
			
			//车长字典
			async getVehicleLengthOptions(){
				
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_length",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
					console.log(res,"vehicleLengthOptions");	 
					this.vehicleLengthOptions = res.data.data
					
					var newArr = []
					
					for (let i =0; i< this.vehicleLengthOptions.length; i++){
						var obj ={}
						console.log(this.vehicleLengthOptions[i],"i");	
						var {name, value, checked} = obj
						obj.name = this.vehicleLengthOptions[i].dictLabel
						obj.value = this.vehicleLengthOptions[i].dictValue
						obj.checked= 0
						console.log(obj ,"obj");
						newArr.push(obj)
					}
					console.log(newArr,"newArr");	
						this.vehicleLength = newArr
					
					 this.vehicle_show = true
					
			},
			
			//车辆类型
			radioChangeType(val) {
			console.log(val) // 单选时 返回选中项的value, 反选返回null
			},
			
			//车长
			radioChangeLengthType(val) {
			console.log(val) // 单选时 返回选中项的value, 反选返回null
			},
			
			clearChoices(){
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
  .cargo-type,.cargo-title{
	  width: 80%;
	  margin-left: 10%;
	  margin-bottom: 20rpx;
  }
  
  .cargo-text{
	  color: #999;
  }
  
  .btns{
		width: 90%;
		margin-left: 5%;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	
	}
</style>
