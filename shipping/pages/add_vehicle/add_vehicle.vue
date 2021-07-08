<template>
	<view>
		
		
		<view class="current-state margin-top">
			<text >车辆资料认证</text>
		</view>
       <form @submit="formSubmit" class="margin-bottom" >
		
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
					<view class="title">道路运输证照片 <text class="star">*</text></view>
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
		      			     <view class="name">车辆种类 </view>
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
			  			     <view class="name">车船牌照号<text class="star">*</text>
							             <text class="text-green  text-sm margin-left" @click="goQuery">(查资质)</text>
							 </view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入车船牌照号码" maxlength="10"
								@input ="getCarNo"  @blur="checkCarNo" :value="plate_number">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group" >
			  			     <view class="name space-line" >该车船牌照号已注册？
							                 <navigator url="/pages/bind_vehicle/bind_vehicle"><text class="text-green text-lg  margin-left">绑定车船牌照号</text></navigator>
			  							           
			  				</view>
			  			     
			  </view>
			  
			  <view class="current-state margin-top">
			  				<text >营运车辆信息</text>
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
						
			 <!-- <view class="cu-form-group">
			  			     <view class="name">牌照类型 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					
								  <picker @change="bindPickerChange" :value="plate_type_index" :range="plate_type_list">
								                        <view class="picker-view text-lg">{{plate_type_list[plate_type_index]}}</view>
								   </picker>		
										
			  				 </view>
			  </view> -->
			  
			  <view class="cu-form-group">
			  						     <view class="name">车辆类型 <text class="star">*</text></view>
			  						     <view class="ref-name">
			  								<picker @change="bindPickerCarTypeChange" :value="car_type_index" :range="car_type_list">
			  								                      <view class="picker-view text-lg">{{car_type_list[car_type_index]}}</view>
			  								 </picker>
			  							 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆品牌 </view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入车辆品牌" :value="vehicle_brand" @input ="getCarBrand">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  						     <view class="name">车辆能源类型 <text class="star">*</text></view>
			  						     <view class="ref-name">
			  								<picker @change="bindPickerEnergyTypeChange" :value="energy_type_index" :range="energy_type_list">
			  								                      <view class="picker-view text-lg">{{energy_type_list[energy_type_index]}}</view>
			  								 </picker>
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
			  
			 
			  
			  <view class="cu-form-group">
			  			     <view class="name">道路运输证号 <text class="star">*</text></view>
			  			     <view class="ref-name"> 
			  					<input type="text" placeholder="请输入道路运输证号" :value="vehicleRoadcertNo"   @input ="getRoadTransportNo">
			  				 </view>
			  </view>
			
			  
			  <view class="cu-form-group" >
			  	<text class="name">行驶证注册日期<text  class=" text-sm text-green" v-if = "!received_info.vehicleRegisterDate&&btn_title == '修改'">(未填)</text></text>
			  	<view >
			  		 <picker v-if="driving_cert_register_date_has_input" mode="date" :value="driving_cert_register_date"  :end="endDate" @change="bindDateChange" data-index="driving_cert_register_date">
			  		      <view class="picker-view text-lg" >{{driving_cert_register_date}}</view>
			  		 </picker>
			  	</view>
				
				<view @click="driving_cert_register_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!driving_cert_register_date_has_input" >选择行驶证注册日期</view>
				</view>
			  </view>
			  
			  <view class="cu-form-group" >
			  	<text class="name">行驶证发证日期</text>
			  	<view >
			  		 <picker mode="date" v-if="driving_cert_issuing_date_has_input" :value="driving_cert_issuing_date"   :end="endDate" @change="bindDateChange" data-index="driving_cert_issuing_date">
			  		      <view class="picker-view text-lg">{{driving_cert_issuing_date}}</view>
			  		 </picker>
			  	</view>
				<view @click="driving_cert_issuing_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!driving_cert_issuing_date_has_input" >选择行驶证发证日期</view>
				</view>
			  </view>
			   
			   <view class="cu-form-group" >
			   	<text class="name">行驶证失效日期<text  class=" text-sm text-green" v-if = "!received_info.vehicleLicenseExpireDate&&btn_title == '修改'">(未填)</text></text>
			   	<view >
			   		 <picker mode="date" v-if="driving_cert_expiry_date_has_input" :value="driving_cert_expiry_date"   :end="endDate" @change="bindDateChange" data-index="driving_cert_expiry_date">
			   		      <view class="picker-view text-lg">{{driving_cert_expiry_date}}</view>
			   		 </picker>
			   	</view>
				<view @click="driving_cert_expiry_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!driving_cert_expiry_date_has_input" >选择行驶证失效日期</view>
				</view>
			   </view>
			   
			   <view class="cu-form-group" >
			   	<text class="name">运输证到期日期<text class="star">*</text></text>
			   	<view >
			   		 <picker mode="date" v-if="road_cert_expiry_date_has_input" :value="road_cert_expiry_date"   :end="endDate" @change="bindDateChange" data-index="road_cert_expiry_date">
			   		      <view class="picker-view text-lg">{{road_cert_expiry_date}}</view>
			   		 </picker>
			   	</view>
				<view @click="road_cert_expiry_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!road_cert_expiry_date_has_input" >选择运输证到期日期</view>
				</view>
			   </view>
			  
			  <view class="current-state margin-top">
			  				<text >载货信息</text>
			  </view>
			  
			  
			  <view class="cu-form-group">
			  			     <view class="name">总质量（吨） <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆总质量（吨）"  :value="vehicleLadenWeight" @input ="getVehicleWeight">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆载质量（吨） <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入核定载质量（吨）" :value="vehicleTonnage" @input ="getRatingWeight">
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
			  			     <view class="name">货箱类型<text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<picker @change="bindPickercargoBoxTypeChange" :value="box_type_index" :range="box_type_list">
			  					                      <view class="picker-view text-lg">{{box_type_list[box_type_index]}}</view>
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
			  					<input type="number" placeholder="请输入车辆长度(毫米)" :value="vehicleLength" @input ="getVehicleLength">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆宽度(毫米) </view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆宽度(毫米)"  :value="vehicleWidth" @input ="getVehicleWidth">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆高度(毫米)  </view>
			  			     <view class="ref-name">
			  					<input type="number" placeholder="请输入车辆高度(毫米)"  :value="vehicleHeight"  @input ="getVehicleHeight">
			  				 </view>
			  </view>
			  
			  
			  <view class="cu-form-group">
			  			     <view class="name">挂车牌照号</view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入挂车牌照号" :value="trailerPlateNumber" @input ="getTrailerPlateNumber">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">绑定主驾</view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请绑定主驾" :value="driverId" @input ="getDriverId">
			  				 </view>
			  </view>
			  
			  <view class="current-state margin-top">
			  				<text >总质量4.5吨以下必填</text>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">使用性质</view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入使用性质"  :value="vehicleUserCharacter" @input ="getVehicleUserCharacter">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">行驶证发证机关</view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入行驶证发证机关"  :value="vehicleIssuingOrganizations" @input ="getVehicleIssuingOrganizations">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">车辆识别代号 </view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入车辆识别代号" :value="vin" @input ="getVehicleVinCode">
			  				 </view>
			  </view>
			  
			  
			<view class="btn-row ">
				<button class="next-btn bg-gradual-green round margin-bottom" 
				   @click="backBusiness">返回</button>
				<button class="next-btn round margin-bottom"  :class="{'bg-gradual-green':active}"
						v-if="btn_title!='查看'"	  :disabled="disabled"
				form-type="submit">{{btn_title}}</button> 
									
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
				//接受显示
				received_info : [],
				//显示车牌号
				plate_number:"", 
				vehicleOwnName:"",
				//车品牌
				vehicle_brand:"",
				//道路运输证号
				vehicleRoadcertNo:"",
				vehicleLadenWeight:"",
				vehicleTonnage :"",
				params:{
					
				},
				//行驶证代码提示
				vin:"",
				
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
				list: [
				               '黄牌',
				               // '蓝牌',
				               // '绿牌',
				               // '黄绿牌',
				            ],
				owner_type_index:0,		
				owner_type_list: [ 
								  '个人',
		                           '企业',		               
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
				                    value: 'new',
				                    name: '新能源'
				                },
				                {
				                    value: 'old',
				                    name: '非新能源',
				                  
				                },
				                
				            ],
				//单选是否是“新能源车”
				energy_current: 1,
				energy_type:"非新能源",
				// 车辆类型字典
				vehicleTypeOptions: [],
				 // 车主类型字典
				vehicleOwnTypeOptions: [],
				// 车辆能源类型字典
				vehicleEnergyTypeOptions: [],
				// 车辆能源类型传给后台的值
				vehicleEnergyTypeSendValue: [],
				//车辆类型传给后台的值
				vehicleTypeSendValue: [],
				// 货箱长度字典
				vehicleCargoBoxLengthOptions: [],
	
				// 货箱长度传给后台的值
				vehicleCargoBoxLengthSendValue: [],
				// 货箱类型字典
				vehicleCargoBoxTypeOptions: [],
				// 货箱类型传给后台的值
				vehicleCargoBoxTypeSendValue: [],
				vehicleAxlenum:"",
				vehicleLength:"",
				vehicleWidth:"",
				vehicleHeight:"",
				trailerPlateNumber:"",
				driverId:"",
				vehicleUserCharacter:"",
				vehicleIssuingOrganizations:"",
				btn_title:"",
				car_type_list: [],
				car_type_index:0,	
				energy_type_list: [],
				energy_type_index:0,
				box_length_list: [],
				box_length_index:0,
				box_type_list:[],
				box_type_index:0,
				
				driving_cert_register_date: currentDate,
				driving_cert_issuing_date: currentDate,
				driving_cert_expiry_date: currentDate,
				road_cert_expiry_date: currentDate,
				
				driving_cert_register_date_has_input:false,
				driving_cert_issuing_date_has_input:false,
				driving_cert_expiry_date_has_input:false,
				road_cert_expiry_date_has_input:false,
			};
		},
		computed: {
		      
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		components:{
			
		},
		onLoad(options){
			this.btn_title = options.btn_title
			if (this.btn_title == "修改"||this.btn_title == "查看"){
				this.received_info = uni.getStorageSync("vehicle_item")
				console.log (this.received_info,'111')
			}
			
			
			this.getCarTypes()
			this.getVehicleOwnTypeOptions()
			this.getVehiclePlateTypeOptions()
			this.getVehiclePlateColorOptions()
			this.getVehicleEnergyTypeOptions()
			
			this.getVehicleTypeOptions()
			this.getVehicleCargoBoxLengthOptions()
			this.getCargoBoxType()
		    
			   
				
			 
			
		},
		created(){
			this.isPerson = uni.getStorageSync("in_personal_registering")
			// 默认能源类型 非新能源
			this.params.whetherNewEnergy =2
			
			
			//导入车辆详情
			if (this.btn_title == "修改"||this.btn_title == "查看"){
							  //车辆行驶证主副页 
							  
							   this.imgVehicleLicenseFirstUrl = this.received_info.vehicleLicensePhotoFirst
							   if (this.imgVehicleLicenseFirstUrl ==''){
								   this.imgVehicleLicenseFirstUrl = "/static/vehicle_license.jpg"
							   }
							   //人车合照
							    this.imgPeopleVehicleUrl =this.received_info.peopleVehiclePhoto
								if (this.imgPeopleVehicleUrl ==''){
									this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg"
								}
								//道路运输证照片
								this.imgTransportLicenseUrl =this.received_info.vehicleRoadcertPhoto
								if (this.imgTransportLicenseUrl ==''){
									this.imgTransportLicenseUrl = "/static/TransportLicense.png"
								}
								//挂车行驶证主副页
								this.imgHangingCarPhotoUrl =this.received_info.trailerLicensePhotoFirst
								if (this.imgHangingCarPhotoUrl ==''){
									this.imgHangingCarPhotoUrl = "/static/vehicle_license.jpg"
								}
								
								console.log (this.imgVehicleLicenseFirstUrl,'reew')
								 this.plate_number = this.received_info.vehiclePlateNumber
								 this.vehicleOwnName = this.received_info.vehicleOwnName
								 this.owner_type_index = this.received_info.vehicleOwnType
								 this.vehicle_brand = this.received_info.vehicleBrands
								 this.vehicleRoadcertNo = this.received_info.vehicleRoadcertNo
								 //行驶证注册日期
								 if (this.received_info.vehicleRegisterDate){
									 this.driving_cert_register_date = this.received_info.vehicleRegisterDate||this.getDate({format: true})
									 this.driving_cert_register_date_has_input = true
								 }
								 //行驶证发证日期
								 if (this.received_info.vehicleIssueDate){
									 this.driving_cert_issuing_date = this.received_info.vehicleIssueDate||this.getDate({format: true})
									 this.driving_cert_issuing_date_has_input = true
								 }
								  //行驶证失效日期
								  if (this.received_info.vehicleLicenseExpireDate){
									  this.driving_cert_expiry_date = this.received_info.vehicleLicenseExpireDate||this.getDate({format: true})
									  this.driving_cert_expiry_date_has_input = true
								  }
								  //运输证到期日期
								  if (this.received_info.vehicleRoadcertExpireDate){
									  this.road_cert_expiry_date = this.received_info.vehicleRoadcertExpireDate||this.getDate({format: true})
									  this.road_cert_expiry_date_has_input = true 
								  }
								
								 
								 this.vehicleLadenWeight = this.received_info.vehicleLadenWeight
								  this.vehicleTonnage = this.received_info.vehicleTonnage
								 this.vehicleAxlenum = this.received_info.vehicleAxlenum
								 this.vehicleLength = this.received_info.vehicleLength
								 this.vehicleWidth = this.received_info.vehicleWidth
								 this.vehicleHeight = this.received_info.vehicleHeight
								 this.trailerPlateNumber = this.received_info.trailerPlateNumber
								 this.vehicleUserCharacter = this.received_info.vehicleUserCharacter
								 this.vehicleIssuingOrganizations = this.received_info.vehicleIssuingOrganizations
								this.vin = this.received_info.vehicleVincode
								 //enable the btn
								 this.disabled= false 
								 this.active = true
								 
			}
			
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:`${this.btn_title}车辆`
			})
			
		},
		methods:{
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
			//	车辆所有人						
			getVehicleOwnName(e){
				             this.vehicleOwnName = e.target.value
							this.params. vehicleOwnName = e.target.value
							
						},
			//	车辆能源类型		
			bindPickerEnergyTypeChange(e) {
						            console.log('picker发送选择改变，携带值为EnergyType', e.target.value)
						            this.energy_type_index = e.target.value
									
									var vehicle_energy_type_index = this.energy_type_index
									console.log (this.energy_type_index,"车辆能源类型后台序数")
									 this.params.vehicleEnergyType =this.vehicleEnergyTypeSendValue[vehicle_energy_type_index-1]
									 console.log (this.params.vehicleEnergyType,"车辆能源类型后台值")
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
												
			bindPickercargoBoxTypeChange(e){
						            console.log('picker发送选择改变，携带值为BoxType', e.target.value)
						            this.box_type_index = e.target.value
									this.params.cargoBoxType = e.target.value
						        },	
																	
			getTrailerPlateNumber(e){
				
				this.params.trailerPlateNumber = e.detail.value
				
			}, 	
			//绑定主驾
			getDriverId(e){
				
				this.params.driverId = e.detail.value
				
			}, 
			//使用性质													
			getVehicleUserCharacter(e){
				
				this.params.vehicleUserCharacter = e.detail.value
				
			},
			 //行驶证发证机关
			 getVehicleIssuingOrganizations(e){
				
				this.params.vehicleIssuingOrganizations = e.detail.value
				
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
			},
			
			async getVehiclePlateTypeOptions(){
				const vehiclePlateTypeOptions = await this.$getRegistDicts("vehicle_plate_type")
				
			},
			
			async getVehiclePlateColorOptions(){
				const vehiclePlateColorOptions = await this.$getRegistDicts("vehicle_plate_color")
				
			},
			async getVehicleEnergyTypeOptions(){
				const vehicleEnergyTypeOptions = await this.$getRegistDicts("vehicle_energy_type")
				this.vehicleEnergyTypeOptions = vehicleEnergyTypeOptions.data.data.map(e=>e.dictLabel)
				this.energy_type_list = this.vehicleEnergyTypeOptions
				this.energy_type_list.unshift("请选择车辆能源类型")
				
				this.vehicleEnergyTypeSendValue = vehicleEnergyTypeOptions.data.data.map(e=>e.dictValue)
				
				const vehicleEnergyType = this.received_info.vehicleEnergyType
				this.energy_type_index = this.vehicleEnergyTypeSendValue.findIndex(value=>value == vehicleEnergyType) +1 
				 
			},
			// 车辆类型字典
			async getVehicleTypeOptions(){
				const vehicleTypeOptions = await this.$getRegistDicts("vehicle_type")
				this.vehicleTypeOptions =  vehicleTypeOptions.data.data.map(e=>e.dictLabel)
				this.car_type_list = this.vehicleTypeOptions
				this.car_type_list.unshift("请选择车辆类型")
				
				this.vehicleTypeSendValue = vehicleTypeOptions.data.data.map(e=>e.dictValue)
					
				const vehicleType = this.received_info.vehicleType
				
				this.car_type_index = this.vehicleTypeSendValue.findIndex(value=>value == vehicleType) + 1
				
			},
			//货箱长度
			async getVehicleCargoBoxLengthOptions(){
				const vehicleCargoBoxLengthOptions = await this.$getRegistDicts("vehicle_length")
				
				this.vehicleCargoBoxLengthOptions = vehicleCargoBoxLengthOptions
				this.vehicleCargoBoxLengthOptions = this.vehicleCargoBoxLengthOptions.data.data.map(e=>e.dictLabel)
				this.box_length_list = this.vehicleCargoBoxLengthOptions
				this.box_length_list.unshift("请选择货箱长度")
				
				this.vehicleCargoBoxLengthSendValue = vehicleCargoBoxLengthOptions.data.data.map(e=>e.dictValue)
				const cargoBoxLength = this.received_info.cargoBoxLength
				
				this.box_length_index = this.vehicleCargoBoxLengthSendValue.findIndex(value=>value == cargoBoxLength) +1
				
			},
			
			async getCargoBoxType(){
				const vehicleCargoBoxTypeOptions = await this.$getRegistDicts("vehicle_cargo_box_type")
				this.vehicleCargoBoxTypeOptions = vehicleCargoBoxTypeOptions
				this.vehicleCargoBoxTypeOptions = this.vehicleCargoBoxTypeOptions.data.data.map(e=>e.dictLabel)
				this.vehicleCargoBoxTypeSendValue = vehicleCargoBoxTypeOptions.data.data.map(e=>e.dictValue)
				 this.box_type_list = this.vehicleCargoBoxTypeOptions
				 this.box_type_list.unshift("请选择货箱类型")
				
				const cargoBoxType = this.received_info.cargoBoxType
				
				this.box_type_index = this.vehicleCargoBoxTypeSendValue.findIndex(value=>value == cargoBoxType) +1
			},
			
			radioEnergyChange(e){
				console.log(e.target.value,'energy')
				if(e.target.value==="new"){
					this.energy_type ="新能源"
					this.params.whetherNewEnergy =1
				}else{
					this.energy_type ="非新能源"
					  // 默认能源类型 非新能源
					this.params.whetherNewEnergy =2
				}
				
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
				this.plate_number = e.detail.value
				this.params.vehiclePlateNumber = e.detail.value
				
			},
			//根据车牌获取车辆信息
			async checkCarNo(){
				var authorization = uni.getStorageSync("token")
				
				const plateNumber = this.plate_number
				
				const res_check_plate = await this.$request({
					url:"/app/vehicle/getByPlateNumber/" + plateNumber ,
					method: "GET",
					
					header:{
						Authorization:authorization,
						
					},
					
				})
				if (res_check_plate.data.hasOwnProperty("data")){
					uni.showToast({
						title:"该车牌号已被注册过,可直接绑定！",
						icon:"none"
					})
				}else{
					uni.showToast({
						title:"该车牌号尚未被注册过,请继续！",
						icon:"none"
					})
				}
				
			},
			
			getCarBrand(e){
				this.vehicle_brand = e.detail.value
				this.params.vehicleBrands = e.detail.value
				
			}, 
			getPlateColor(e){
				
				if (e.newVal == "黄牌"){
					this.params.vehiclePlateColor =  "2"
				}
				
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
			
			getVehicleWeight(e){
				this.vehicleLadenWeight = e.detail.value
				this.params.vehicleLadenWeight = e.detail.value
				
			},
			
			getRatingWeight(e){
				this.vehicleTonnage = e.detail.value
				this.params.vehicleTonnage = e.detail.value
				this.disabled = false
				this.active = true
			},
			
			getRoadTransportNo(e){
				
				this.params.vehicleRoadcertNo = e.detail.value
				
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
									_self.vehicle_brand = identify_res.data.data.model
									_self.vehicleOwnName = identify_res.data.data.owner
									_self.vehicleUserCharacter = identify_res.data.data.use_character
									_self.driving_cert_register_date = identify_res.data.data.register_date.substr(0,4) + "-" +identify_res.data.data.register_date.substr(4,2) + "-" +identify_res.data.data.register_date.substr(6,2)
									_self.driving_cert_issuing_date = identify_res.data.data.issue_date.substr(0,4) + "-" +identify_res.data.data.issue_date.substr(4,2) + "-" +identify_res.data.data.issue_date.substr(6,2)
									
									//改变params		
									_self.params.vehicleVincode = _self.vin	
									_self.params.vehiclePlateNumber = _self.plate_number																				
									_self.params.vehicleBrands = _self.vehicle_brand
									_self.params.vehicleOwnName = _self.vehicleOwnName
									_self.params.vehicleUserCharacter = _self.vehicleUserCharacter
									_self.params.vehicleRegisterDate = _self.driving_cert_register_date	
									_self.params.vehicleIssueDate = _self.driving_cert_issuing_date																				
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
														_self.vehicle_brand = identify_res.data.data.model
														_self.vehicleOwnName = identify_res.data.data.owner
														_self.vehicleUserCharacter = identify_res.data.data.use_character
														_self.driving_cert_register_date = identify_res.data.data.register_date.substr(0,4) + "-" +identify_res.data.data.register_date.substr(4,2) + "-" +identify_res.data.data.register_date.substr(6,2)
														_self.driving_cert_issuing_date = identify_res.data.data.issue_date.substr(0,4) + "-" +identify_res.data.data.issue_date.substr(4,2) + "-" +identify_res.data.data.issue_date.substr(6,2)
														
														//改变params		
														_self.params.vehicleVincode = _self.vin	
														_self.params.vehiclePlateNumber = _self.plate_number
														_self.params.vehicleBrands = _self.vehicle_brand
														_self.params.vehicleOwnName = _self.vehicleOwnName
														_self.params.vehicleUserCharacter = _self.vehicleUserCharacter
														_self.params.vehicleRegisterDate = _self.driving_cert_register_date	
														_self.params.vehicleIssueDate = _self.driving_cert_issuing_date		
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
														_self.vehicle_brand = identify_res.data.data.model
														_self.vehicleOwnName = identify_res.data.data.owner
														_self.vehicleUserCharacter = identify_res.data.data.use_character
														_self.driving_cert_register_date = identify_res.data.data.register_date.substr(0,4) + "-" +identify_res.data.data.register_date.substr(4,2) + "-" +identify_res.data.data.register_date.substr(6,2)
														_self.driving_cert_issuing_date = identify_res.data.data.issue_date.substr(0,4) + "-" +identify_res.data.data.issue_date.substr(4,2) + "-" +identify_res.data.data.issue_date.substr(6,2)
														//改变params		
														_self.params.vehicleVincode = _self.vin	
														_self.params.vehiclePlateNumber = _self.plate_number											
														_self.params.vehicleBrands = _self.vehicle_brand
														_self.params.vehicleOwnName = _self.vehicleOwnName
														_self.params.vehicleUserCharacter = _self.vehicleUserCharacter
														_self.params.vehicleRegisterDate = _self.driving_cert_register_date	
														_self.params.vehicleIssueDate = _self.driving_cert_issuing_date																					
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
																			_self.vehicle_brand = identify_res.data.data.model
																			_self.vehicleOwnName = identify_res.data.data.owner
																			_self.vehicleUserCharacter = identify_res.data.data.use_character
																			_self.driving_cert_register_date = identify_res.data.data.register_date.substr(0,4) + "-" +identify_res.data.data.register_date.substr(4,2) + "-" +identify_res.data.data.register_date.substr(6,2)
																			_self.driving_cert_issuing_date = identify_res.data.data.issue_date.substr(0,4) + "-" +identify_res.data.data.issue_date.substr(4,2) + "-" +identify_res.data.data.issue_date.substr(6,2)
																			
																			//改变params		
																			_self.params.vehicleVincode = _self.vin	
																			_self.params.vehiclePlateNumber = _self.plate_number
																			_self.params.vehicleBrands = _self.vehicle_brand
																			_self.params.vehicleOwnName = _self.vehicleOwnName
																			_self.params.vehicleUserCharacter = _self.vehicleUserCharacter
																			_self.params.vehicleRegisterDate = _self.driving_cert_register_date	
																			_self.params.vehicleIssueDate = _self.driving_cert_issuing_date	
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
				this.imgHangingCarPhotoUrl ="/static/vehicle_license.jpg",
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
				this.imgTransportLicenseUrl ="/static/TransportLicense.png"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_transport_license=false
			},
			
			cancelVehicleLicenseFirst(){
				this.imgVehicleLicenseFirstUrl ="/static/vehicle_license.jpg",
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
				this.imgPeopleVehicleUrl ="/static/people_vehicle.jpg",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_people_vehicle = false
			},
			
			goQuery(){
							// #ifdef APP-PLUS
							plus.runtime.openURL("http://ysfw.mot.gov.cn/NetRoadCGSS-web/information/query")
							// #endif
							
							// #ifdef H5
							 window.location.href = "http://ysfw.mot.gov.cn/NetRoadCGSS-web/information/query"
							// #endif
						},
					
		
			async formSubmit(e){
				//添加按钮开始
				if (this.btn_title == "添加"){
					
					//进行车辆行驶证主副页检查
					this.params.vehicleLicensePhotoFirst = uni.getStorageSync("vehicleLicensePhotoFirst")
					if (this.params.vehicleLicensePhotoFirst == null || this.params.vehicleLicensePhotoFirst==""|| this.params.vehicleLicensePhotoFirst.length<1){
						 	uni.showToast({
						 		title:"请提交车辆行驶证主副页",
						 		icon:"none"
						 	})								
					} 
					//进行道路运输证照片检查
					this.params.vehicleRoadcertPhoto = uni.getStorageSync("vehicleRoadcertPhoto")
					if (this.params.vehicleRoadcertPhoto == null || this.params.vehicleRoadcertPhoto==""|| this.params.vehicleRoadcertPhoto.length<1){
						 	uni.showToast({
						 		title:"请提交道路运输证",
						 		icon:"none"
						 	})								
					} 
					//进行是否新能源检查
					if (this.params.whetherNewEnergy == null || this.params.whetherNewEnergy==""|| this.params.whetherNewEnergy.length<1){
						 	this.params.whetherNewEnergy =	2								
					} 
					
					//进行车辆种类检查
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
					//正则验证车牌号
					var regExp =  /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/
					//正则验证新能源车牌号
					var regExpNewEnergy= /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF])))$/
					//正则验证非新能源车牌号
					var regExpNOTNewEnergy = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/
					
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
									
									uni.setStorageSync("params_vehicle",this.params)
									this.$emit('register_vehicle_params',this.params)
								}else{
									uni.showToast({
										title:"车牌号不正确，请确认是否为新能源车",
										icon:"none"
									})
									
								}
					            
							}else if(regExpNOTNewEnergy.test(car_no)){
								if (this.energy_type=="非新能源"){
									console.log("车牌号正确")
									
									uni.setStorageSync("params_vehicle",this.params)
									this.$emit('register_vehicle_params',this.params)
									
								}else{
									uni.showToast({
										title:"车牌号不正确，请确认是否为非新能源车",
										icon:"none"
									})
								    this.plate_num = ""
								    return
								}
							}
							//进行货箱类型检查
							if (this.params.cargoBoxType == null || this.params.cargoBoxType==""|| this.params.cargoBoxType.length<1){
								uni.showToast({
									title:"未输入货箱类型, 请输入",
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
							
							//进行车辆品牌检查
							if (this.params.vehicleBrands == null || this.params.vehicleBrands==""|| this.params.vehicleBrands.length<1){
								uni.showToast({
									title:"未输入车辆品牌, 请输入",
									icon:"none"
								})
							 return	 										
							} 
							
							//进行车辆能源类型检查
							if (this.params.vehicleEnergyType == null || this.params.vehicleEnergyType==""|| this.params.vehicleEnergyType.length<1){
								uni.showToast({
									title:"未输入车辆能源类型, 请输入",
									icon:"none"
								})
							 return	 										
							}
							
							 //总质量4.5吨下必填
							 
							 if (this.params.vehicleLadenWeight<4.5){
								 //进行行驶证发证日期检查
								 if (this.params.vehicleIssueDate == null || this.params.vehicleIssueDate==""|| this.params.vehicleIssueDate.length<1){
								 	uni.showToast({
								 		title:"未输入行驶证发证日期, 请输入",
								 		icon:"none"
								 	})
								  return	 										
								 } 
								 //进行发证机关检查
								 if (this.params.vehicleIssuingOrganizations == null || this.params.vehicleIssuingOrganizations ==""|| this.params.vehicleIssuingOrganizations.length<1){
								 	uni.showToast({
								 		title:"未输入发证机关, 请输入",
								 		icon:"none"
								 	})
								  return	 										
								 } 
								  //进行行驶证注册日期检查
								 if (this.params.vehicleRegisterDate == null || this.params.vehicleRegisterDate ==""|| this.params.vehicleRegisterDate.length<1){
								 	uni.showToast({
								 		title:"未输入行驶证注册日期, 请输入",
								 		icon:"none"
								 	})
								  return	 										
								 } 
								 
								 //进行使用性质检查
								 if (this.params.vehicleUserCharacter == null || this.params.vehicleUserCharacter ==""|| this.params.vehicleUserCharacter.length<1){
								 	uni.showToast({
								 		title:"未输入使用性质, 请输入",
								 		icon:"none"
								 	})
								  return	 										
								 } 
								 
								 //进行车辆识别代号检查
								 if (this.params.vehicleVincode == null || this.params.vehicleVincode ==""|| this.params.vehicleVincode.length<1){
								 	uni.showToast({
								 		title:"未输入车辆识别代号, 请输入",
								 		icon:"none"
								 	})
								  return	 										
								 } 
							 }
							 
							 //进行行驶证失效日期检查
							 if (this.params.vehicleLicenseExpireDate == null || this.params.vehicleLicenseExpireDate==""|| this.params.vehicleLicenseExpireDate.length<1){
							 	uni.showToast({
							 		title:"未输入行驶证失效日期, 请输入",
							 		icon:"none"
							 	})
							  return	 										
							 } 
							 
							 //进行运输证到期日期检查
							 if (this.params.vehicleRoadcertExpireDate == null || this.params.vehicleRoadcertExpireDate==""|| this.params.vehicleRoadcertExpireDate.length<1){
							 	uni.showToast({
							 		title:"未输入运输证到期日期, 请输入",
							 		icon:"none"
							 	})
							  return	 										
							 } 
							 
							
							//进行车辆总质量检查
							if (this.params.vehicleLadenWeight == null || this.params.vehicleLadenWeight==""|| this.params.vehicleLadenWeight.length<1){
								uni.showToast({
									title:"未输入车辆总质量, 请输入",
									icon:"none"
								})
							 return	 										
							} 
							
							//进行车辆载质量检查
							if (this.params.vehicleTonnage == null || this.params.vehicleTonnage ==""|| this.params.vehicleTonnage.length<1){
								uni.showToast({
									title:"未输入车辆载质量, 请输入",
									icon:"none"
								})
							 return	 										
							} 
							
							//进行车辆所有人检查
							if (this.params.vehicleOwnName == null || this.params.vehicleOwnName ==""|| this.params.vehicleOwnName.length<1){
								uni.showToast({
									title:"未输入车辆所有人, 请输入",
									icon:"none"
								})
							 return	 										
							}
							
							//进行车主类型检查
							if (this.params.vehicleOwnType == null || this.params.vehicleOwnType ==""|| this.params.vehicleOwnType.length<1){
								uni.showToast({
									title:"未输入车主类型, 请输入",
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
							
							var authorization = uni.getStorageSync("token")
							var  form = this.params
							
							
							
							const res = await this.$request({
								url:"/app/vehicle/add",
								method: "POST",
								data:form,
								header:{
									Authorization:authorization,
									
								},
								
							})
							console.log(res,"加车")
							if(res.data.msg ="操作成功"){
								uni.showToast({
									title:res.data.msg,
									
								})
								setTimeout(()=>{
								   uni.navigateTo({
								   	url:"/pages/vehicle_list/vehicle_list"
								   })
								},800)
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:"none"
								})
							}
							//"添加"按钮结束
				}else if (this.btn_title == "修改"){
					var authorization = uni.getStorageSync("token")
					var modify_params= this.params
					var modify_received_info= this.received_info
					var modify_form = {}
					Object.assign(modify_form,modify_params,modify_received_info)
					
					const resEdit = await this.$request({
						url:"/app/vehicle/edit",
						method: "PUT",
						data:modify_form,
						header:{
							Authorization:authorization,
							
						},
						
					})
					console.log(resEdit,"改车")
					if(resEdit.data.msg ="操作成功"){
						uni.showToast({
							title:resEdit.data.msg,
							
						})
						setTimeout(()=>{
						   uni.navigateTo({
						   	url:"/pages/vehicle_list/vehicle_list"
						   })
						},800)
					}else{
						uni.showToast({
							title:resEdit.data.msg,
							icon:"none"
						})
					}
				}
						
						
					
			},
			
			backBusiness(){
				uni.navigateBack({
					delta:1,
				})
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
  .picker-view{
  	   color:#222;
  	   width:calc(100vw - 380rpx);
  } 
 
 .space-line{
	 display: flex;
	 justify-content: space-between;
 }
</style>
