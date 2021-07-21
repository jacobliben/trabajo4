<template>
	<view>
		
		
		<view class="current-state margin-top">
			<text >车辆资料认证</text>
		</view>
       <form @submit="formSubmit" >
		
			<view class="two-photos">
				
				<view class="id-front"  @click="takephoto" data-index="vehicle_license_first">
					<view class="title"> 车辆行驶证主副页 <text class="star">*</text></view>
					<image :src="imgVehicleLicenseFirstUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelVehicleLicenseFirst"
					 class="tachar" v-if="tachar_vehicle_license_first"></image>
				</view>
				
				<view class="id-front"   @click="takephoto" data-index="people_vehicle_photo">
					<view class="title">请上传人车合照</view>
					<image :src="imgPeopleVehicleUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelPeopleVehicle"
					 class="tachar" v-if="tachar_people_vehicle"></image>
				</view>
				
				
				                             
				                             							 
			</view>
				
			<view class="two-photos">
				
				
				<view class="id-front"  @click="takephoto" data-index="vehicle_transport_license">
					<view class="title">道路运输证照片<text class="star">*</text> </view>
					<image :src="imgTransportLicenseUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelTransportLicense"
					 class="tachar" v-if="tachar_transport_license"></image>
				</view>
				
				
				<view class="id-front" v-if="!is_ordinary" @click="takephoto" data-index="trailer_license_photo_first">
					<view class="title">挂车行驶证主副页 </view>
					<image :src="imgHangingCarPhotoUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelHangingCar"
					 class="tachar" v-if="tachar_hanging_car"></image>
				</view>
			</view>
				
				
				
				
			<view class="cu-form-group">
						     <view class="name">是否新能源 </view>
						     <view class="ref-name">
								<radio-group class="truck-type" @change="radioEnergyChange">
								                <label class="cell" v-for="(item, index) in energy_items" 
														:key="item.value">
								                    <view>
								                        <radio :value="item.value" :checked="index === energy_current" />
								                    </view>
								                    <view>{{item.name}}</view>
								                </label>
								 </radio-group>
							 </view>
			</view>
			
		      <view class="cu-form-group">
		      			     <view class="name">车辆分类</view>
		      			     <view class="ref-name">
		      					<radio-group class="truck-type" @change="radioCarChange">
		      					                <label class="cell" v-for="(item, index) in car_items" 
		      											:key="item.value">
		      					                    <view>
		      					                        <radio :value="item.value" :checked="index === car_current" />
		      					                    </view>
		      					                    <view>{{item.name}}</view>
		      					                </label>
		      					            </radio-group>
		      				 </view>
		      </view>
			  
			 
			  
			  <view class="cu-form-group">
			  			     <view class="name">车船牌照号码 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入车船牌照号码" maxlength="10"
								 @input ="getCarNo" :value="plate_number">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆所有人 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入车辆所有人" :value="vehicleOwnName" @input ="getVehicleOwnName">
			  					
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车主类型 <text class="star">*</text></view>
			  			     <view class="ref-name" >
			  				     
			  							<picker @change="bindPickerTypeChange" :value="owner_type_index" :range="owner_type_list">
			  							                      <view class="picker-view text-lg">{{owner_type_list[owner_type_index]}}</view>
			  							 </picker>	 
			  				 </view>
			  </view>
			  
			  
			 <view class="cu-form-group">
			  						     <view class="name">车辆类型 <text class="star">*</text></view>
			  						     <view class="ref-name">
			  								<picker @change="bindPickerCarTypeChange" :value="car_type_index" :range="car_type_list">
			  								                      <view class="picker-view text-lg">{{car_type_list[car_type_index]}}</view>
			  								 </picker>
			  							 </view>
			  </view>
			  
			  
			  <view class="cu-form-group">
			  			     <view class="name">牌照类型 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					
								  <picker @change="bindPickerChange" :value="plate_type_index" :range="plate_type_list">
								                        <view class="picker-view text-lg">{{plate_type_list[plate_type_index]}}</view>
								   </picker>		
										
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆品牌 </view>
			  			     <view class="ref-name">
			  					<input type="text" :value="vehicleBrands" placeholder="请输入车辆品牌" @input ="getCarBrand">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车牌颜色 <text class="star">*</text></view>
			  			     <view class="ref-name" >
								<picker @change="bindPickerColorChange" :value="plate_type_index" :range="list">
								                      <view class="picker-view text-lg">{{list[plate_color_index]}}</view>
								 </picker>		  
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group" >
			  	<text class="name">行驶证失效日期<text class="star">*</text></text>
			  	<view >
			  		 <picker mode="date" v-if="driving_cert_expiry_date_has_input" :value="driving_cert_expiry_date"   :end="endDate" @change="bindDateChange" data-index="driving_cert_expiry_date">
			  		      <view class="picker-view text-lg">{{driving_cert_expiry_date}}</view>
			  		 </picker>
			  	</view>
			  				<view @click="driving_cert_expiry_date_has_input = true"  >
			  					
			  					 <view  class="picker-view text-lg"  v-if="!driving_cert_expiry_date_has_input" >选择行驶证失效日期</view>
			  				</view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆总质量（吨） <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆总质量（吨）" maxlength="8" @input ="getVehicleWeight" :value="vehicle_weight">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">核定载质量（吨） <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入核定载质量（吨）"  maxlength="8" @input ="getRatingWeight" :value="rating_weight">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">道路运输证号 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入道路运输证号"  maxlength="20" @input ="getRoadTransportNo" :value="road_transpor_num">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆识别代码</view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入车辆识别代号" :value="vin" @input ="getVehicleVinCode"  maxlength="20">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">货箱长度</view>
			  			     <view class="ref-name">
			  					<picker @change="bindPickercargoBoxLengthChange" :value="box_length_index" :range="box_length_list">
			  					                      <view class="picker-view text-lg">{{box_length_list[box_length_index]}}</view>
			  					 </picker>
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车轴数<text class="star">*</text></view>
			  			     <view class="ref-name">
			  								 <uni-number-box class="picker-view text-lg"
			  								  :min="0" :max="20" @change="getVehicleAxlenum" v-model = "vehicleAxlenum"></uni-number-box>
			  					 
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆长度(毫米)</view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆长度(毫米)" maxlength="8" @input ="getVehicleLength" :value="length">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆宽度(毫米) </view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆宽度(毫米)"  maxlength="8" @input ="getVehicleWidth" :value="width">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆高度(毫米)  </view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆高度(毫米)" maxlength="8" @input ="getVehicleHeight" :value="height">
			  				 </view>
			  </view>
			  
			
			<view class="btn-row">
				<button class="next-btn bg-gradual-green round" 
				   @click="backBusiness">上一步</button>
				<button class="next-btn round"  :class="{'bg-gradual-green':active}"
							  :disabled="disabled"
				form-type="submit">下一步</button> 
									
			</view>
		
	
		</form>
	</view>
</template>

<script>

	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import {ossLocation} from "@/util/pattern.js"
	var _self;
	
	export default {
		data() {
			
			const currentDate = this.getDate({
			           format: true
			       })
			return {
				//是否个人
				isPerson: false,
				disabled:true,
				active:false,
				//显示车牌号
				plate_number:"",
				vehicleOwnName:"",
				params:{
					the_step:4,
					active_one_step:true,
					active_two_step:true,
					active_three_step:true,
				
				},
				params_vehicle:{},
				//行驶证代码提示
				vin:"",
				vehicleBrands:"",
				vehicle_weight:"",
				rating_weight:"",
				road_transpor_num:"",
				vehicleAxlenum:"",
				length:"",
				width:"",
				height:"",
				imgDriverLicenseUrl:"/static/id-front.png",
				imgTransportLicenseUrl:"/static/TransportLicense.png",
				imgVehicleLicenseFirstUrl:"/static/vehicle_license.jpg",
				imgVehicleLicenseSecondUrl:"/static/id-front.png",
				imgDraggingCarPhotoUrl:"/static/id-front.png",
				imgDraggingTransportPhotoUrl:"/static/id-front.png",
				imgHangingCarPhotoUrl:"/static/vehicle_license.jpg",
				imgPeopleVehicleUrl:"/static/people_vehicle.jpg",
				tachar_driver_license:false,
				tachar_transport_license:false,
				tachar_vehicle_license_first:false,
				tachar_vehicle_license_second:false,
				tachar_dragging_car:false,
				tachar_dragging_transport:false,
				tachar_hanging_car:false,
				tachar_people_vehicle:false,
				//单选是否是“普通货车”
				is_ordinary:false,
				plate_type_index:1,
				plate_color_index:0,
				vehicleOwnTypeOptions: [],
				owner_type_list: [],
				owner_type_index:0,
				vehicleTypeOptions: [],
				car_type_list: [],
				car_type_index:0,
				list: [
				               '黄牌',
				               // '蓝牌',
				               // '绿牌',
				               // '黄绿牌',
				            ],
				plate_type_list: [
				               '小型汽车号牌',
				               '大型汽车号牌',
				               '其他号牌',
				               
				            ],			
				car_items: [{
				                    value: 'ordinary',
				                    name: '普通货车'
				                },
				                {
				                    value: 'semi-camion',
				                    name: '半挂车',
				                  
				                },
				                
				            ],
				 car_current: 1,
				 energy_items: [{
				                    value: "1",
				                    name: '新能源'
				                },
				                {
				                    value: "2",
				                    name: '非新能源',
				                  
				                },
				                
				            ],
				//单选是否是“新能源车”
				energy_current: 1,
				energy_type:"非新能源",
				// 车辆能源类型字典
				vehicleEnergyTypeOptions: [],
				//货箱长度
				box_length_list: [],
				box_length_index:0,
				// 货箱长度字典
				vehicleCargoBoxLengthOptions: [],
					
				// 货箱长度传给后台的值
				vehicleCargoBoxLengthSendValue: [],
				//行驶证失效日期
				driving_cert_expiry_date: currentDate,
				driving_cert_expiry_date_has_input:false,
			};
		},
		computed: {
		      
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		components:{
			
			
		},
		created(){
			this.isPerson = uni.getStorageSync("in_personal_registering")
			// 默认能源类型 非新能源
			this.params.whetherNewEnergy =2
			
			this.getCarTypes()
			this.getVehicleOwnTypeOptions()
			this.getVehicleTypeOptions()
			this.getVehiclePlateTypeOptions()
			this.getVehiclePlateColorOptions()
			this.getVehicleEnergyTypeOptions()
			this.getVehicleCargoBoxLengthOptions()
			
			//用于跳转后回显
			this.params_vehicle = uni.getStorageSync("params_vehicle")
		},
		mounted(){
			//加载车辆行驶证主副页 
			this.imgVehicleLicenseFirstUrl = uni.getStorageSync("vehicleLicensePhotoFirst_reshow")
			if(this.imgVehicleLicenseFirstUrl == ""){
				this.imgVehicleLicenseFirstUrl = "/static/vehicle_license.jpg"
			}
			
			//加载人车合照
			this.imgPeopleVehicleUrl = uni.getStorageSync("peopleVehiclePhoto_reshow")
			if(this.imgPeopleVehicleUrl == ""){
				this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg"
			}
			
			//加载道路运输证照片
			this.imgTransportLicenseUrl = uni.getStorageSync("vehicleRoadcertPhoto_reshow")
			if(this.imgTransportLicenseUrl == ""){
				this.imgTransportLicenseUrl = "/static/TransportLicense.png"
			}
			
			//加载挂车行驶证主副页
			this.imgHangingCarPhotoUrl = uni.getStorageSync("trailerLicensePhotoFirst_reshow")
			if(this.imgHangingCarPhotoUrl == ""){
				this.imgHangingCarPhotoUrl = "/static/vehicle_license.jpg"
			}
			
			
			
			
			//跳转时显示
			const show_energy_current = this.params_vehicle.whetherNewEnergy ||2
			this.energy_current = show_energy_current - 1
			
			if(this.params_vehicle.vehicleSpecies == 103){
				this.is_ordinary = true
				this.car_current = 0
			}else if (this.params_vehicle.vehicleSpecies == 303){
				this.is_ordinary = false
				this.car_current = 1
			}
			
			//行驶证失效日期
			if (this.params_vehicle.vehicleLicenseExpireDate){
												  this.driving_cert_expiry_date = this.params_vehicle.vehicleLicenseExpireDate||this.getDate({format: true})
												  this.driving_cert_expiry_date_has_input = true
			}
			
			
			
			this.plate_number = this.params_vehicle.vehiclePlateNumber ||""
			if(this.params_vehicle.vehiclePlateType == "02"){
				this.plate_type_index= 0
			}else if (this.params_vehicle.vehiclePlateType == "01" ){
				this.plate_type_index= 1
			}else if (this.params_vehicle.vehiclePlateType == "99" ){
				this.plate_type_index= 2
			}
			 this.vehicleOwnName = this.params_vehicle.vehicleOwnName||""
			
			this.vehicleBrands = this.params_vehicle.vehicleBrands ||""
			this.vehicle_weight = this.params_vehicle.vehicleLadenWeight ||""
			this.rating_weight = this.params_vehicle.vehicleTonnage ||""
			this.road_transpor_num = this.params_vehicle. vehicleRoadcertNo
			this.vin = this.params_vehicle.vehicleVincode ||""
			
			
			this.vehicleAxlenum = this.params_vehicle.vehicleAxlenum ||""
			this.length = this.params_vehicle.vehicleLength||""
			this.width = this.params_vehicle.vehicleWidth||""
			this.height = this.params_vehicle.vehicleHeight||""
			//如果之前已经有params输入，就直接用storage里的params,否则this.params 为{}
			this.params = this.params_vehicle||{}
			
			if (this.params_vehicle.vehicleTonnage){
				this.disabled = false
				this.active = true
			}
		},
		methods:{
			//用于 date picker!!!!!
			getDate(type) {
								            const date = new Date();
								            let year = date.getFullYear();
								            let month = date.getMonth() + 1;
								            let day = date.getDate();
								
								            if (type === 'start') {
								                year = year - 60;
								            } else if (type === 'end') {
								                year = year + 20;
								            }
								            month = month > 9 ? month : '0' + month;;
								            day = day > 9 ? day : '0' + day;
								            return `${year}-${month}-${day}`;
								        },
			
			//将base64位图片上传,之后identifying要用
			
			detailImage(path, callback) {
				
				plus.io.resolveLocalFileSystemURL(path, function(entry) {
					entry.file(function(file) {
						var fileReader = new plus.io.FileReader();
						
						fileReader.readAsDataURL(file);
						fileReader.onloadend = function(evt) {
							 
							callback(evt.target.result);
						}
					})
				})
			},
			bindPickerColorChange(e) {
			            console.log('picker发送选择改变，携带值为', e)
			            this.plate_color_index = e.target.value
						if (e.target.value == 0){
							this.params.vehiclePlateColor =  "2"
						}
						this.plate_color_index = 0
						this.params.vehiclePlateColor =  "2"
			        },
			bindPickerChange(e) {
			            console.log('picker发送选择改变01，携带值为', e.target.value)
			            this.plate_type_index = e.target.value
						if(e.target.value== 0){
							this.params.vehiclePlateType = "02"
						} else if (e.target.value== 1){
							this.params.vehiclePlateType = "01"
						}else if (e.target.value== 2){
							this.params.vehiclePlateType =  "99"
						}
			        },
					
			bindPickercargoBoxLengthChange(e){
						           console.log('picker发送选择改变，携带值为BoxLength', e.target.value)
						           this.box_length_index = e.target.value
						           const box_length_index = this.box_length_index -1 // substract 1 to make the index matches
						           this.params.cargoBoxLength = this.vehicleCargoBoxLengthSendValue[box_length_index]
						           
						        },	
										
										
			async getCarTypes(){
				const resCarTypes = await this.$getRegistDicts("iscm_vehicle_species")
				
			},
			
			//车主类型
			async getVehicleOwnTypeOptions(){
				const vehicleOwnTypeOptions = await this.$getRegistDicts("vehicle_own_type")
				this.vehicleOwnTypeOptions = vehicleOwnTypeOptions.data.data.map(e=>e.dictLabel)
				
				this.owner_type_list = this.vehicleOwnTypeOptions
				this.owner_type_list.unshift("请选择车主类型")
				
			     this.owner_type_index = this.params_vehicle.vehicleOwnType||""
			},
			
			// 车辆类型字典
			async getVehicleTypeOptions(){
				const vehicleTypeOptions = await this.$getRegistDicts("vehicle_type")
				this.vehicleTypeOptions =  vehicleTypeOptions.data.data.map(e=>e.dictLabel)
				this.car_type_list = this.vehicleTypeOptions
				this.car_type_list.unshift("请选择车辆类型")
				
				this.vehicleTypeSendValue = vehicleTypeOptions.data.data.map(e=>e.dictValue)
				
				const vehicleType = this.params_vehicle.vehicleType
				
				this.car_type_index = this.vehicleTypeSendValue.findIndex(value=>value == vehicleType) + 1
				
			},
			
			
			async getVehiclePlateTypeOptions(){
				const vehiclePlateTypeOptions = await this.$getRegistDicts("vehicle_plate_type")
				
			},
			
			async getVehiclePlateColorOptions(){
				const vehiclePlateColorOptions = await this.$getRegistDicts("vehicle_plate_color")
				
			},
			async getVehicleEnergyTypeOptions(){
				const vehicleEnergyTypeOptions = await this.$getRegistDicts("vehicle_energy_type")
				
			},
			
			//货箱长度
			async getVehicleCargoBoxLengthOptions(){
				const vehicleCargoBoxLengthOptions = await this.$getRegistDicts("vehicle_length")
				console.log(this.vehicleCargoBoxLengthOptions,"货箱长度")
				this.vehicleCargoBoxLengthOptions = vehicleCargoBoxLengthOptions
				this.vehicleCargoBoxLengthOptions = this.vehicleCargoBoxLengthOptions.data.data.map(e=>e.dictLabel)
				this.box_length_list = this.vehicleCargoBoxLengthOptions
				this.box_length_list.unshift("请选择货箱长度")
				
				this.vehicleCargoBoxLengthSendValue = vehicleCargoBoxLengthOptions.data.data.map(e=>e.dictValue)
				
				//跳转回显
				const cargoBoxLength = this.params_vehicle.cargoBoxLength
				
				this.box_length_index = this.vehicleCargoBoxLengthSendValue.findIndex(value=>value == cargoBoxLength) +1
				
			},
			
			radioEnergyChange(e){
				
				this.params.whetherNewEnergy = parseInt(e.target.value)
				
			},
			
			
			radioCarChange(e){
				console.log(e.target.value,'car')
				if(e.target.value=="ordinary"){
					this.is_ordinary = true
					this.params.vehicleSpecies = 103
				}else{
					this.is_ordinary = false
					this.params.vehicleSpecies = 303
				}
				
			},
			
			getCarNo(e){
				
				this.params.vehiclePlateNumber = e.detail.value
				
			},
			
			//	车辆所有人
			getVehicleOwnName(e){
				             this.vehicleOwnName = e.target.value
							this.params. vehicleOwnName = e.target.value
							
						},
						
						
			//车主类型
			bindPickerTypeChange(e) {
						            console.log('picker发送选择改变，携带值为车主类型', e.target.value)
						            this.owner_type_index = e.target.value
									
									this.params.vehicleOwnType =  this.owner_type_index
									
						        },	
			//车辆类型
			bindPickerCarTypeChange(e) {
						            console.log('picker发送选择改变，携带值为车辆类型', e.target.value)
						            this.car_type_index = e.target.value
									
									var car_type_index = this.car_type_index
									
									 this.params.vehicleType =this.vehicleTypeSendValue[car_type_index-1]
									 console.log (this.params.vehicleType,"车辆类型后台值")
									
						        },
																
			bindDateChange: function(e) {
				                //行驶证注册日期
							  if(e.currentTarget.dataset.index=="driving_cert_register_date"){
								  this.driving_cert_register_date = e.target.value
								  this.params.vehicleRegisterDate = this.driving_cert_register_date
								  this.driving_cert_register_date_has_input = true
							  }else if(e.currentTarget.dataset.index=="driving_cert_issuing_date"){
								  //行驶证发证日期
								  this.driving_cert_issuing_date = e.target.value
								  this.params.vehicleIssueDate = this.driving_cert_issuing_date
								  this.driving_cert_issuing_date_has_input = true
							  }else if(e.currentTarget.dataset.index=="driving_cert_expiry_date"){
								   //行驶证失效日期
								  this.driving_cert_expiry_date = e.target.value
								  this.params.vehicleLicenseExpireDate =this.driving_cert_expiry_date
								  this.driving_cert_expiry_date_has_input = true
							  }else if(e.currentTarget.dataset.index=="road_cert_expiry_date"){
								   //道路运输证失效日期
								  this.road_cert_expiry_date = e.target.value
								  this.params.vehicleRoadcertExpireDate =this.road_cert_expiry_date
								  this.road_cert_expiry_date_has_input = true
							  }
			    
			       },													
			getCarBrand(e){
				
				this.params.vehicleBrands = e.detail.value
				this.vehicleBrands = e.detail.value
			}, 
			getPlateColor(e){
				
				if (e.newVal == "黄牌"){
					this.params.vehiclePlateColor =  "2"
				}
				
			},
			
			getVehicleWeight(e){
				this.params.vehicleLadenWeight = e.detail.value
				
			},
			
			getRatingWeight(e){
				this.params.vehicleTonnage = e.detail.value
				
			},
			
			getRoadTransportNo(e){
				
				this.params.vehicleRoadcertNo = e.detail.value
				this.disabled = false
				this.active = true
			},
			
			getVehicleVinCode(e){
				
				this.params.vehicleVincode = e.detail.value
				
			},
			
			getVehicleAxlenum(e){
				
				this.params.vehicleAxlenum = e
				
			},
			
			getVehicleLength(e){
				
				this.params.vehicleLength = e.detail.value
				
			},
			getVehicleWidth(e){
				
				this.params.vehicleWidth = e.detail.value
				
			},
			getVehicleHeight(e){
				
				this.params.vehicleHeight = e.detail.value
				
			},
			
			async  takephoto(e){
				_self=this
				 if(e.currentTarget.dataset.index=="vehicle_license_first"){
					 /**
					  * 行驶证主页
					  */
					  const resChoosePhoto= await this.$photo({
						  async success(res) {
						    const tempFilePaths = res.tempFilePaths;
							//identifying
							
							//#ifdef H5
							uni.request({
								url: tempFilePaths[0],
								method: 'GET',
								responseType: 'arraybuffer',
														  															
								success: async ress =>{
									
									let base64 = uni.arrayBufferToBase64(ress.data);
									base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在访问页面无法显示
									
									var fileUrl
									_self.params.fileUrl = base64
									_self.params.configure = "face"
									var params = _self.params
									const identify_res = await _self.$request({
										url:"/iscm/identify/vehicle",
										method: "POST",
										data:params,
										header: {
											'content-type': 'application/x-www-form-urlencoded', 
										},
										
									})
									
									console.log(identify_res,"1123fdsgds")														  																
																							  																
																																							
									//改变input 显示																														 
									_self.vin = identify_res.data.data.vin
									_self.plate_number = identify_res.data.data.plate_num
									_self.vehicleBrands = identify_res.data.data.model
									
									//改变params		
									_self.params.vehicleVincode = _self.vin	
									_self.params.vehiclePlateNumber = _self.plate_number																				
									_self.params.vehicleBrands = _self.vehicleBrands																					
								}
							})	
							//#endif
							
							//#ifdef APP-PLUS
							
							_self.detailImage( res.tempFilePaths[0], async(data)=>{
							                            //base64 图片内容就是  data
														
														var base64 = data  
														var fileUrl
														
														_self.params.fileUrl = base64 
														_self.params.configure = "face"
														var params = _self.params
														const identify_res = await _self.$request({
															url:"/iscm/identify/vehicle",
															method: "POST",
															data:params,
															header: {
																'content-type': 'application/x-www-form-urlencoded', 
															},
															
														})
														
														console.log(identify_res.data.data,"1123fdsgds")
														//改变input 显示
														_self.vin = identify_res.data.data.vin
														_self.plate_number = identify_res.data.data.plate_num
														_self.vehicleBrands = identify_res.data.data.model
														
														//改变params		
														_self.params.vehicleVincode = _self.vin	
														_self.params.vehiclePlateNumber = _self.plate_number
														_self.params.vehicleBrands = _self.vehicleBrands	
							                        })
									
							//#endif			
							
							
							//preview the photos
							// uni.previewImage({
							//             urls: res.tempFilePaths,
							            
							//         });
									
							
							 //upload the img 
							_self.imgVehicleLicenseFirstUrl = tempFilePaths[0]
							
							//make the tachar img appear
							  _self.tachar_vehicle_license_first=true
							  
							  //upload
							  	const resPhoto = await _self.$upload({
							  		url:ossLocation.vehicle.first,
							  		file_path:tempFilePaths[0]
							  		
							  	})	
							
							}
					  })
				 }else if (e.currentTarget.dataset.index=="vehicle_license_second"){
					 /**
					  * 行驶证副页
					  */
					 const resChoosePhoto= await this.$photo({
					 						  async success(res) {
					 						    const tempFilePaths = res.tempFilePaths;
					 							
					 							//preview the photos
					 							// uni.previewImage({
					 							//             urls: res.tempFilePaths,
					 							            
					 							//         });
					 									
					 							
					 							 //upload the img 
					 							_self.imgVehicleLicenseSecondUrl = tempFilePaths[0]
					 							
					 							//make the tachar img appear
					 							  _self.tachar_vehicle_license_second=true
					 							  
					 							  //upload
					 							  	const resPhoto = await _self.$upload({
					 							  		url:ossLocation.vehicle.second,
					 							  		file_path:tempFilePaths[0]
					 							  		
					 							  	})	
					 							
					 							}
					 })
				 }else if (e.currentTarget.dataset.index=="vehicle_transport_license"){
					 /**
					  * 道路运输证
					  */
					 
					 const resChoosePhoto= await this.$photo({
					 						  async success(res) {
					 						    const tempFilePaths = res.tempFilePaths;
					 							
					 							//preview the photos
					 							// uni.previewImage({
					 							//             urls: res.tempFilePaths,
					 							            
					 							//         });
					 									
					 							
					 							//upload the img
					 							_self.imgTransportLicenseUrl = tempFilePaths[0]
					 							
					 							//make the tachar img appear
					 							 _self.tachar_transport_license=true
					 							  
					 							  //upload
					 							  	const resPhoto = await _self.$upload({
					 							  		url:ossLocation.vehicle.road,
					 							  		file_path:tempFilePaths[0]
					 							  		
					 							  	})	
					 							
					 							}
					 })
				 }else if (e.currentTarget.dataset.index=="trailer_license_photo_first"){
					 /**
					  * 挂车行驶证主页
					  */
					 
					 const resChoosePhoto= await this.$photo({
					 						  async success(res) {
					 						    const tempFilePaths = res.tempFilePaths;
					 							
												//identifying
												//#ifdef H5
												uni.request({
													url: tempFilePaths[0],
													method: 'GET',
													responseType: 'arraybuffer',
																			  															
													success: async ress =>{
														 console.log(tempFilePaths,"12876")
														let base64 = uni.arrayBufferToBase64(ress.data);
														base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在访问页面无法显示
														var fileUrl
														_self.params.fileUrl = base64
														_self.params.configure = "face"
														var params = _self.params
														const identify_res = await _self.$request({
															url:"/iscm/identify/vehicle",
															method: "POST",
															data:params,
															header: {
																'content-type': 'application/x-www-form-urlencoded', 
															},
															
														})
														
														console.log(identify_res,"1123fdsgds")																			  																
																																	  																
																																																	
														//改变input 显示
														_self.vin = identify_res.data.data.vin
														_self.plate_number = identify_res.data.data.plate_num
														_self.vehicleBrands = identify_res.data.data.model
														
														//改变params		
														_self.params.vehicleVincode = _self.vin	
														_self.params.vehiclePlateNumber = _self.plate_number											
														_self.params.vehicleBrands = _self.vehicleBrands																					
													}
												})	
												//#endif
												
												//#ifdef APP-PLUS
												
												_self.detailImage( res.tempFilePaths[0], async(data)=>{
												                            //base64 图片内容就是  data
																			
																			var base64 = data  
																			var fileUrl
																			
																			_self.params.fileUrl = base64 
																			_self.params.configure = "face"
																			var params = _self.params
																			const identify_res = await _self.$request({
																				url:"/iscm/identify/vehicle",
																				method: "POST",
																				data:params,
																				header: {
																					'content-type': 'application/x-www-form-urlencoded', 
																				},
																				
																			})
																			
																			console.log(identify_res.data.data,"1123fdsgds")
																			//改变input 显示
																			_self.vin = identify_res.data.data.vin
																			_self.plate_number = identify_res.data.data.plate_num
																			_self.vehicleBrands = identify_res.data.data.model
																			
																			//改变params		
																			_self.params.vehicleVincode = _self.vin	
																			_self.params.vehiclePlateNumber = _self.plate_number
																			_self.params.vehicleBrands = _self.vehicleBrands	
												                        })
														
												//#endif			
												
												
												
												
					 							//preview the photos
					 							// uni.previewImage({
					 							//             urls: res.tempFilePaths,
					 							            
					 							//         });
					 									
					 							
					 						//upload the img
					 						_self.imgHangingCarPhotoUrl = tempFilePaths[0]
					 						
					 						//make the tachar img appear
					 						 _self.tachar_hanging_car=true
					 							  
					 							  //upload
					 							  	const resPhoto = await _self.$upload({
					 							  		url:ossLocation.trailer.first,
					 							  		file_path:tempFilePaths[0]
					 							  		
					 							  	})	
					 							
					 							}
					 })
				 }else if (e.currentTarget.dataset.index=="people_vehicle_photo"){
					/**
					 * 人车
					 *
					 */ 
					
					const resChoosePhoto= await this.$photo({
											  async success(res) {
											    const tempFilePaths = res.tempFilePaths;
												
												//preview the photos
												// uni.previewImage({
												//             urls: res.tempFilePaths,
												            
												//         });
														
												
											//upload the img
											_self.imgPeopleVehicleUrl = tempFilePaths[0]
											
											//make the tachar img appear
											 _self.tachar_people_vehicle=true
												  
												  //upload
												  	const resPhoto = await _self.$upload({
												  		url:ossLocation.vehicle.rc,
												  		file_path:tempFilePaths[0]
												  		
												  	})	
												
												}
					})
				 }
				
			},
			
			uploadDriverLicense(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								
								 
								 //preview the photos
								 // uni.previewImage({
								 //             urls: res.tempFilePaths,
								 //             longPressActions: {
								 //                 itemList: ['发送给朋友', '保存图片', '收藏'],
								 //                 success: function(data) {
								 //                     console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								 					
								 //                 },
								 //                 fail: function(err) {
								 //                     console.log(err.errMsg);
								 //                 }
								 //             }
								 //         });
							
								 //upload the img 
								_self.imgDriverLicenseUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_driver_license=true
										
				     const uploadTask =uni.uploadFile({
				    url : 'http://182.61.138.90:8081/iscm/dispatch',
				    filePath: tempFilePaths[0],
				    name: 'file',
				    formData: {
				     'user': 'test'
				    },
				    success: function (uploadFileRes) {
				     
								   uni.showToast({
								   	title:"上传成功"
								   })
				    }
				   });
								 
								 uploadTask.onProgressUpdate(function (res) {
								       _self.percent = res.progress;
								       console.log('上传进度' + res.progress);
								       console.log('已经上传的数据长度' + res.totalBytesSent);
								       console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
								      });
							
				  },
				  error : function(e){
				   console.log(e);
				  }
				 });
			},
			
			
			
			uploadDraggingCarPhoto(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								
								 
								 //preview the photos
								 // uni.previewImage({
								 //             urls: res.tempFilePaths,
								 //             longPressActions: {
								 //                 itemList: ['发送给朋友', '保存图片', '收藏'],
								 //                 success: function(data) {
								 //                     console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								 					
								 //                 },
								 //                 fail: function(err) {
								 //                     console.log(err.errMsg);
								 //                 }
								 //             }
								 //         });
								
								 //upload the img 
								_self.imgDraggingCarPhotoUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_dragging_car=true
										
				     const uploadTask =uni.uploadFile({
				    url : 'http://182.61.138.90:8081/iscm/dispatch',
				    filePath: tempFilePaths[0],
				    name: 'file',
				    formData: {
				     'user': 'test'
				    },
				    success: function (uploadFileRes) {
				    
								   uni.showToast({
								   	title:"上传成功"
								   })
								   
								   //此处将下一步 按钮变为可用
								   	_self.disabled= false
								    _self.active= true
								   
				    }
				   });
								 
								 uploadTask.onProgressUpdate(function (res) {
								       _self.percent = res.progress;
								       console.log('上传进度' + res.progress);
								       console.log('已经上传的数据长度' + res.totalBytesSent);
								       console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
								      });
							
				  },
				  error : function(e){
				   console.log(e);
				  }
				 });
			},
			uploadDraggingTransportPhoto(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								 
								 
								 //preview the photos
								 // uni.previewImage({
								 //             urls: res.tempFilePaths,
								 //             longPressActions: {
								 //                 itemList: ['发送给朋友', '保存图片', '收藏'],
								 //                 success: function(data) {
								 //                     console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								 					
								 //                 },
								 //                 fail: function(err) {
								 //                     console.log(err.errMsg);
								 //                 }
								 //             }
								 //         });
								
								 //upload the img 
								_self.imgDraggingTransportPhotoUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_dragging_transport=true
										
				     const uploadTask =uni.uploadFile({
				    url : 'http://182.61.138.90:8081/iscm/dispatch',
				    filePath: tempFilePaths[0],
				    name: 'file',
				    formData: {
				     'user': 'test'
				    },
				    success: function (uploadFileRes) {
				     
								   uni.showToast({
								   	title:"上传成功"
								   })
								   
								   //此处将下一步 按钮变为可用
								   	_self.disabled= false
								    _self.active= true
								   
				    }
				   });
								 
								 uploadTask.onProgressUpdate(function (res) {
								       _self.percent = res.progress;
								       console.log('上传进度' + res.progress);
								       console.log('已经上传的数据长度' + res.totalBytesSent);
								       console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
								      });
							
				  },
				  error : function(e){
				   console.log(e);
				  }
				 });
			},
		
			
			
			cancelHangingCar(){
				this.imgHangingCarPhotoUrl ="/static/vehicle_license.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_hanging_car = false
			},
			
			cancelDraggingCar(){
				this.imgDraggingCarPhotoUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_dragging_car = false
			},
			cancelDraggingTransport(){
				this.imgDraggingTransportPhotoUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_dragging_transport = false
			},
			
			cancelDriverLicense(){
				this.imgDriverLicenseUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_license=false
			},
			
			cancelTransportLicense(){
				this.imgTransportLicenseUrl = "/static/TransportLicense.png"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_transport_license=false
			},
			
			cancelVehicleLicenseFirst(){
				this.imgVehicleLicenseFirstUrl ="/static/vehicle_license.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_vehicle_license_first = false
			},
			
			cancelVehicleLicenseSecond(){
				this.imgVehicleLicenseSecondUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_vehicle_license_second = false
			},
			
			cancelPeopleVehicle(){
				this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_people_vehicle = false
			},
		
			async formSubmit(e){
				/**
				 * 行驶证主副页
				 */
				this.params.vehicleLicensePhotoFirst = uni.getStorageSync("vehicleLicensePhotoFirst")
				
				if (this.params.vehicleLicensePhotoFirst == null || this.params.vehicleLicensePhotoFirst ==""|| this.params.vehicleLicensePhotoFirst.length<1){
					uni.showToast({
						title:"未提交行驶证主副页, 请提交",
						icon:"none"
					})
				 return	 										
				} 
				
				
				
				/**
				 * 道路运输证
				 */
				this.params.vehicleRoadcertPhoto = uni.getStorageSync("vehicleRoadcertPhoto")
				
				if (this.params.vehicleRoadcertPhoto == null || this.params.vehicleRoadcertPhoto ==""|| this.params.vehicleRoadcertPhoto.length<1){
					uni.showToast({
						title:"未提交道路运输证, 请提交",
						icon:"none"
					})
				 return	 										
				} 
				
				
				
				//进行是否新能源检查
				if (this.params.whetherNewEnergy == null || this.params.whetherNewEnergy==""|| this.params.whetherNewEnergy.length<1){
					 	this.params.whetherNewEnergy =	2								
				} 
				
				//进行车辆类型检查
				if (this.params.vehicleSpecies == null || this.params.vehicleSpecies ==""|| this.params.vehicleSpecies.length<1){
					 	this.params.vehicleSpecies =	303								
				} 
				
				//进行牌照类型检查
				if (this.params.vehiclePlateType == null || this.params.vehiclePlateType ==""|| this.params.vehiclePlateType.length<1){
					 	this.params.vehiclePlateType =	"02"							
				} 
				
				//进行车牌颜色检查
				if (this.params.vehiclePlateColor == null || this.params.vehiclePlateColor ==""|| this.params.vehiclePlateColor.length<1){
					 	this.params.vehiclePlateColor =  "2"							
				} 
				
				
				
				
				
				var car_no = this.params.vehiclePlateNumber
				//正则验证车牌号最后一个字不能为“挂”
				
				//正则验证车牌号
				var regExp =  /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/
				//正则验证新能源车牌号
				var regExpNewEnergy= /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF])))$/
				//正则验证非新能源车牌号
				var regExpNOTNewEnergy = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/
				 
				 //通过车牌号最后一位是否为“挂”来判断是否为挂车,禁止挂车车牌
				 var str = car_no.substr(-1)
				 
				  if(str == "挂"){
					  uni.showToast({
					   	title:"请勿输入挂车车牌",
					  	icon:"none"
					   })
					  this.plate_num = ""
					  return
				  }
				
				
				 if(!regExp.test(car_no)){
					         uni.showToast({
					         	title:"车牌号不正确",
								icon:"none"
					         })
				            this.plate_num = ""
							return
							 
				        }else if(regExpNewEnergy.test(car_no)){
							if (this.energy_type=="新能源"){
								console.log("车牌号正确")
								
								
							}else{
								uni.showToast({
									title:"车牌号不正确，请确认是否为新能源车",
									icon:"none"
								})
								this.plate_num = ""
								return
							}
				            
						}else if(regExpNOTNewEnergy.test(car_no)){
							if (this.energy_type=="非新能源"){
								console.log("车牌号正确")
							
							}else{
								uni.showToast({
									title:"车牌号不正确，请确认是否为非新能源车",
									icon:"none"
								})
							    this.plate_num = ""
							    return
							}
						}
						
						
						//进行车辆总质量检查
						if (this.params.vehicleLadenWeight == null || this.params.vehicleLadenWeight==""|| this.params.vehicleLadenWeight.length<1){
							uni.showToast({
								title:"未输入车辆总质量, 请输入",
								icon:"none"
							})
						 return	 										
						} 
						
						//进行核定载质量检查
						if (this.params.vehicleTonnage == null || this.params.vehicleTonnage ==""|| this.params.vehicleTonnage.length<1){
							uni.showToast({
								title:"未输入核定载质量, 请输入",
								icon:"none"
							})
						 return	 										
						} 
						
						
						//进行道路运输证号检查
						if (this.params.vehicleRoadcertNo == null || this.params.vehicleRoadcertNo ==""|| this.params.vehicleRoadcertNo.length<1){
							uni.showToast({
								title:"未输入道路运输证号, 请输入",
								icon:"none"
							})
						 return	 										
						} 
						
						//进行车轴数检查
						if (this.params.vehicleAxlenum == null || this.params.vehicleAxlenum==""|| this.params.vehicleAxlenum.length<1){
							uni.showToast({
								title:"未输入车轴数, 请输入",
								icon:"none"
							})
						 return	 										
						} 
						
						this.params.the_step =4
						this.params.active_one_step= true
						this.params.active_two_step= true
						this.params.active_three_step= true
						this.params.active_four_step= true
						this.params.active_five_step= false
						
						uni.setStorageSync("params_vehicle",this.params)
						this.$emit('register_vehicle_params',this.params)
					
			},
			
			backBusiness(){
				this.params.the_step =2
				this.params.active_one_step= true
				this.params.active_two_step= true
				this.params.active_three_step= false
				this.params.active_four_step= false
				this.params.active_five_step= false
				uni.setStorageSync("params_vehicle",this.params)
				this.$emit('register_vehicle_params',this.params)
			},
			
			
		
		}
		
	}
</script>

<style lang="scss" scoped>
   .current-state{
   		 margin-top:10rpx;
   		 margin-left:10rpx;
   		 margin-bottom: 25rpx;
   		 border-left:3rpx solid blue;
   		 padding-left: 30rpx;
   		 color:#000;
   		 font-size:30rpx;
   		 font-weight: 600;
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 
		 .hand-input{
		 	  color:blue;
			  font-size:20rpx;
			   font-weight: 300;
			   margin-right:10% ;
		 }
   }
   
   .two-photos {
   	   width:90%;
   	   margin-left:5%;
   	   display: flex;
   	   flex-direction: row;
   	   justify-content: space-between;
   	   padding-top: 30rpx;
   	  
   	   .id-front{
   		   width:45%;
   		   height: 200rpx;
   		   text-align: center;
   		    position: relative;
   			.title{
   				position: absolute;
   				width:100%;
   				height: 30rpx;
   				top:0;
   				left:50%;
   				transform: translateX(-50%);
   				
   			}
   			image{
   				position: absolute;
   				width:60%;
   				top:20%;
   				left:20%;
   				height:75%;
   			}
   		  .tachar{
   		  			  position: absolute;
   		  			  width:60rpx;
   		  			  height: 60rpx;
   					  
   		  			  left:80%;
   		  		  }
   	   }
   	  
   }
   .notes{
	   width:100%;
	   padding: 5%;
	   border-bottom:1rpx solid #ddd;
	   
   }
   .picker-view{
	   color:#222;
	   width:calc(100vw - 380rpx);
	    background-color: #fff;
   }
   
   .cu-form-group picker::after {  
       display: none;  
   } 
   
  .truck-type{
	  display: flex;
	  flex-direction: row;
  }
   
   .name{
   		 color:#000;
   }
   .ref-name{
   		 font-size:18rpx;
   	     color:#999;
   }
   .text-name{
	   margin-left: 5%;
	   margin-bottom: 20rpx;
	   
   }
   .note-textarea{
	   margin-left: 5%;
	   width: 90%;
	   height:200rpx;
	   background-color: #eee;
   }
   .cell{
	   margin-right: 10rpx;
   }
   .star{
	   color:#f00;
   }
   
   .img{
	   width: 100rpx;
	   height: 50rpx;
   }
   .tachar{
   			  
   			  width:60rpx;
   			  height: 60rpx;
   					  
   			  left:10%;
   		  }
		  
	.btn-row{
		width: 100%;
		margin-top:200rpx;
		display: flex;
		justify-content: center;
	}	  
   .next-btn{
   		 margin-top:20rpx;
   		 width:30%;
   		
   }
   
   .current-btn{
   		 background-color: #0081FF;
   		 color:#fff;
   }
   
   .disabled-btn{
   		 background-color: #ddd;
   }
  
  
</style>
