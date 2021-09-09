<template>
	<view>
		<view>
			<view class="cargo-title">车型选择 <text  class="cargo-text">（可多选）</text></view>
			<view class="flex ">
			<axb-check-box ref="radio3" :multi="true" :list="cargoBoxType" @change="radioChangeType" v-if="cargo_show" class="cargo-type" ></axb-check-box>
			</view>
		</view>
		<view>
			<view class="cargo-title">车长选择 （米）<text  class="cargo-text">（可多选）</text></view>
			<view class="flex ">
			<axb-check-box :multi="true" ref="radio3" :list="vehicleLength" @change="radioChangeLengthType" v-if="vehicle_show" class="cargo-type"></axb-check-box>
			</view>
		</view>
		
		<view class="time" @click="actStart">
			<view>装货开始时间</view>
			<view class="text-gray" @click="openDatetimePicker" >
				<text class="margin-right text-black ">{{loading_start_time}}</text>
				<text v-if="!loading_start_time">请选择</text>
				<text class="cuIcon-right text-style  start-icon" ></text>
			</view>
		</view>
		
		<view class="time" @click="actEnd">
			<view>装货结束时间</view>
			<view class="text-gray" @click="openDatetimePicker" >
				<text class="margin-right text-black ">{{loading_end_time}}</text>
				<text v-if="!loading_end_time">请选择</text>
				<text class="cuIcon-right text-style  start-icon"></text></view>
		</view>
		
		<view class="btns">
			<button  type="default" class="clear-btn" @click="clearChoices" >清空条件</button>
			<button  type="primary" class="confirm-btn" @click="confirm" >确认</button>
		</view>
			
		<SimpleDateTimePicker
		      ref="myPicker"
		      @submit="handleSubmit"
		      :start-year="2020"
		      :end-year="2030"
		    />
			
		
	</view>
</template>

<script>
	import axbCheckBox from '@/components/axb-checkbox/axb-checkbox.vue'
	import SimpleDateTimePicker from "uni_modules/buuug7-simple-datetime-picker/components/buuug7-simple-datetime-picker/buuug7-simple-datetime-picker.vue";
	export default {
		data() {
			return {
				//车辆类型字典
				 cargoBoxTypeOptions: [],
				 //the cargoBoxType shown
				 cargoBoxType: [],
				 // the selected ones
				 cargoBoxTypeSelected: [],
				 //车长字典
				 vehicleLengthOptions: [],
				  //the vehicleLength shown
				 vehicleLength: [],
				 // the selected ones
				 vehicleLengthSelected: [],
				 
				 cargo_show:false,
				 vehicle_show:false,
				startTime: [],
				
				loading_start_time:"",
				loading_end_time:"",
				action: "",
			}
		},
		mounted(){
		
			 //车辆类型字典
			 this.getCargoBoxTypeOptions()
			 //车长字典
			 this.getVehicleLengthOptions()
			 
			 //re-show
			 
			 this.loading_start_time = uni.getStorageSync("loading_start_time_filter")
			 
			 this.loading_end_time = uni.getStorageSync("loading_end_time_filter")
		},	 
		components: {
		    axbCheckBox,
			SimpleDateTimePicker,
		},
		methods: {
			actStart(){
				this.action = "start"
			},
			actEnd(){
				this.action = "end"
			},
			// 打开picker 开始装货时间
			   openDatetimePicker() {
			      this.$refs.myPicker.show();
				 
				 
			    },
			
			    // 关闭picker
			    closeDatetimePicker() {
			      this.$refs.myPicker.hide();
			    },
			
			    handleSubmit(e) {
			     
				  if (this.action == "start"){
					   this.loading_start_time = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`;
					   uni.setStorageSync("loading_start_time_filter", this.loading_start_time)
					   
					   console.log(new Date(this.loading_start_time).getTime(),"loading_start_time");
				  }else if (this.action == "end"){
					   this.loading_end_time = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`;
					    uni.setStorageSync("loading_end_time_filter", this.loading_end_time)
				  }
					 
				 
				  
			    },
				
			
				
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
					//reshow the selected ones with obj.checked= 1
					this.cargoBoxTypeSelected = uni.getStorageSync("cargoBoxTypeSelected")
					const cargoBoxTypeSelected =  this.cargoBoxTypeSelected
					
					console.log(this.cargoBoxTypeOptions[i],"i");	
					var {name, value, checked} = obj
					obj.name = this.cargoBoxTypeOptions[i].dictLabel
					obj.value = this.cargoBoxTypeOptions[i].dictValue
					obj.checked= 0
					if (cargoBoxTypeSelected.includes(obj.value)){
						obj.checked= 1
					}else{
						obj.checked= 0
					}
					
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
							
						//reshow the selected ones with obj.checked= 1
						
						 this.vehicleLengthSelected = uni.getStorageSync("vehicleLengthSelected")
						 const vehicleLengthSelected =  this.vehicleLengthSelected
						 
						var {name, value, checked} = obj
						obj.name = this.vehicleLengthOptions[i].dictLabel
						obj.value = this.vehicleLengthOptions[i].dictValue
						obj.checked= 0
						
						if (vehicleLengthSelected.includes(obj.value)){
							obj.checked= 1
						}else{
							obj.checked= 0
						}
						
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
			 this.cargoBoxTypeSelected = val
			
			 uni.setStorageSync("cargoBoxTypeSelected", this.cargoBoxTypeSelected)
			},
			
			//车长
			radioChangeLengthType(val) {
			console.log(val) // 单选时 返回选中项的value, 反选返回null
			 this.vehicleLengthSelected = val
			 
			 uni.setStorageSync("vehicleLengthSelected", this.vehicleLengthSelected)
			},
			
			clearChoices(){
				var that = this
				this.cargo_show = false
				this.vehicle_show = false
				setTimeout(()=>{
					this.cargo_show = true
					that.vehicle_show = true
				},3)
				
				this.loading_start_time = ""
				
				this.loading_end_time = ""
			},
			
			confirm(){
				//check it the loading start time is later than loading end time
				if(new Date(this.loading_start_time).getTime()-new Date(this.loading_end_time).getTime()>0){
					uni.showToast({
						title:"装货开始时间不能晚于装货结束时间",
						icon:"none"
					})
					
					return
				}
				//pass data to hall_opener page
				const hparams ={} 
				hparams.cargoBoxTypeSelected = this.cargoBoxTypeSelected
				hparams.vehicleLengthSelected = this.vehicleLengthSelected
				
				hparams.loading_start_time = this.loading_start_time
				hparams.loading_end_time = this.loading_end_time
				
				//close this page
				hparams.choose_hall_select = false
				//let order items list appear
				hparams.show_items = true
				
				
				this.$emit("hallSelect", hparams)
				
				
			},
			
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
	
	.time{
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin-left: 10%;
		margin-bottom: 20rpx;
	}
</style>
