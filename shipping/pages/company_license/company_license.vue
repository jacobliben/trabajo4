<template>
	<view>
		<form @submit="formSubmit" >
		<view class="current-state">
			<text >驾驶员信息</text>
			<text class="red-isterisk">*</text>
		</view>
		     <view class="two-photos" v-if="!isPerson">
		     	
		     	<view class="id-front" @click="takephoto" data-index="driver_id_front">
		     		<text class="title">驾驶员身份证正面<text class="red-isterisk">*</text>
					</text>
		     		<image :src="imgDriverIDFrontUrl" mode="aspectFit"></image>
		     		<image src="/static/tachar.png" mode="aspectFit" @click="cancelDriverIDFront"
		     		 class="tachar" v-if="tachar_driver_id_front"></image>
		     	</view>
		     	
		     	<view class="id-front" @click="takephoto" data-index="driver_id_back">
		     		<text class="title">驾驶员身份证背面<text class="red-isterisk">*</text>
					</text>
		     		<image :src="imgDriverIDBackUrl" mode="aspectFit"></image>
		     		<image src="/static/tachar.png" mode="aspectFit" @click="cancelDriverIDBack"
		     		 class="tachar" v-if="tachar_driver_id_back"></image>
		     	</view>
		     </view>
			
			<view class="two-photos margin-top">                       
				<view class="id-front" @click="takephoto" data-index="driver_license_photo_first">
					<text class="title">机动车驾驶证主页<text class="red-isterisk">*</text>
					</text>
												<image 
												:src="imgDriverLicensePhotoUrl" class="img" mode="aspectFit"></image>
												<image src="/static/tachar.png" mode="aspectFit" @click="cancelDriverLicense"
												 class="tachar" v-if="tachar_driver_license"></image>
			    </view>
				
			    <view class="id-front" @click="takephoto" data-index="driving_certificate">
						     <view class="title">道路运输从业资格证 </view>
						     <view class="ref-name" >
								<image  
								:src="imgDrivingCertificateUrl" class="img" mode="aspectFit"></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelDrivingCertificate"
								 class="tachar" v-if="tachar_driving_certificate"></image>
							 </view>
			    </view>	
	
			</view>
			
			<view class="cu-form-group" v-if="!isPerson" >
				<text class="name">驾驶员姓名<text class="red-isterisk">*</text></text>
				<view class="ref-name">
					<input type="text"   maxlength="18" :value="driver_name"
					 placeholder="请输入驾驶员姓名" 
					 @input="getDriverName">
				</view>
			</view>
			
			
			
			<view class="cu-form-group" >
				<text class="name">准驾车型<text class="red-isterisk">*</text></text>
				<view class="ref-name">
					<picker @change="bindPickerChange" :value="index" :range="list">
					    <view class="picker-view text-lg">{{list[index]}}</view>
					</picker>
				</view>
			</view>
			
			<view class="cu-form-group" v-if="!isPerson">
				<text class="name">驾驶员手机号码<text class="red-isterisk">*</text></text>
				<view class="ref-name">
					<input type="number"  name="cellphone" maxlength="11" :value = "driver_tel"
					 placeholder="请输入驾驶员手机号码" 
					 @input="getDriverCel">
				</view>
			</view>
			
			<view class="cu-form-group" v-if="!isPerson">
				<text class="name">驾驶员身份证号<text class="red-isterisk">*</text></text>
				<view class="ref-name">
					<input type="number"   maxlength="18"   :value="driver_id"
					 placeholder="请输入驾驶员身份证号" 
					 @input="getDriverID">
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">从业资格证号<text class="red-isterisk">*</text></text>
				<view class="ref-name">
					<input type="text"   maxlength="20"
					 placeholder="请输入从业资格证号码"  :value="quali_cert_num"
					 @input="getDrivingCertificateNum">
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">从业资格证起</text>
				<view class="ref-name">
					<view>
						 <picker v-if="begin_date_has_input" mode="date"  :value="begin_date"  :end="endDate" @change="bindDateChange" data-index="license_begin_date">
						      <view class="picker-view text-lg" >{{begin_date}}</view>
						 </picker>
					</view>
					<view @click="begin_date_has_input = true"  >
						
						 <view  class="picker-view text-lg"  v-if="!begin_date_has_input" >选择从业资格证开始日期</view>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">从业资格证有效期至</text>
				<view class="ref-name">
					<view>
						 <picker v-if="expiry_date_has_input" mode="date" :value="expiry_date"   :end="endDate" @change="bindDateChange" data-index="license_expiry_date">
						      <view class="picker-view text-lg">{{expiry_date}}</view>
						 </picker>
					</view>
					
					<view @click="expiry_date_has_input = true"  >
						
						 <view  class="picker-view text-lg"  v-if="!expiry_date_has_input" >选择从业资格证失效日期</view>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">驾驶证有效期至</text>
				<view class="ref-name">
					<view>
						 <picker mode="date" v-if="driver_cert_expiry_date_has_input" :value="driver_cert_expiry_date"   :end="endDate" @change="bindDateChange" data-index="driver_cert_expiry_date">
						      <view class="picker-view text-lg">{{driver_cert_expiry_date}}</view>
						 </picker>
					</view>
					
					<view @click="driver_cert_expiry_date_has_input = true"  >
						
						 <view  class="picker-view text-lg"  v-if="!driver_cert_expiry_date_has_input" >选择驾驶证有效期至</view>
					</view>
				</view>
			</view>
			
			<view class="btn-row">
				<button class="next-btn bg-gradual-green round" 
				   @click="backVehicle">上一步</button> 
				<button class="next-btn round"  :class="{'bg-gradual-green':active}"
							  :disabled="disabled"
				  form-type="submit">下一步</button> 
									
			</view>
		
	</form>
		
	</view>
</template>

<script>
	import {ossLocation} from "@/util/pattern.js"
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
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
				active_two_step:false,
				active_three_step:false,
				driver_name:"",
				driver_id:"",
				//显示驾驶员手机
				driver_tel:"",
				//显示驾驶员从业资格号
				quali_cert_num:"",
				imgDriverIDFrontUrl:"/static/id_front.jpg",
				imgDriverIDBackUrl:"/static/id-back.jpg",
				imgDriverLicensePhotoUrl:"/static/driving_license.jpg",
				imgDrivingCertificateUrl:"/static/roadcert.jpg",
				tachar_driver_id_front:false,
				tachar_driver_id_back:false,
				tachar_driver_license:false,
				tachar_driving_certificate:false,
				begin_date: currentDate,
				expiry_date: currentDate,
				driver_cert_expiry_date: currentDate,
				list: [
				               // 'A1',
				               'A2',
				               // 'A3',
				               // 'B1',
				               'B2',
							   // 'C1',
				      //          'C2',
				      //          'C3',
							   //  'C4',
				            ],
				index: 0,
				begin_date_has_input:false,	
				expiry_date_has_input:false,
				driver_cert_expiry_date_has_input:false,
				params:{
					active_one_step:true,
					active_two_step:true,
					active_three_step:true,
					active_four_step:true,
					the_step:4,
					
				},
			};
		},
		components:{
			xflSelect
		},
		computed: {
		      
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		created(){
			this.isPerson = uni.getStorageSync("in_personal_registering")
		     //个人用户从业资格证编号：默认为驾驶员身份证编号
			
			 //用于跳转后回显
			 this.params_license = uni.getStorageSync("params_license")
		},
		mounted(){
			if (!this.isPerson){  
			  //加载 驾驶员身份证正面
			  this.imgDriverIDFrontUrl = uni.getStorageSync("idcardFront_reshow")
			  if(this.imgDriverIDFrontUrl == ""){
			  	this.imgDriverIDFrontUrl = "/static/id_front.jpg"
			  }
			  
			  //加载 驾驶员身份证背面
			  this.imgDriverIDBackUrl = uni.getStorageSync("idcardBack_reshow")
			  if(this.imgDriverIDBackUrl == ""){
			  	this.imgDriverIDBackUrl = "/static/id-back.jpg"
			  }
			}
			
			//加载 机动车驾驶证主页
			this.imgDriverLicensePhotoUrl = uni.getStorageSync("drivingLicensePhotoFirst_reshow")
			if(this.imgDriverLicensePhotoUrl == ""){
				this.imgDriverLicensePhotoUrl = "/static/driving_license.jpg"
			}
			
			//加载 道路运输从业资格证
			this.imgDrivingCertificateUrl = uni.getStorageSync("qualificationCertPhoto_reshow")
			if(this.imgDrivingCertificateUrl == ""){
				this.imgDrivingCertificateUrl = "/static/roadcert.jpg"
			}
			
			
			
			//跳转时显示
			const driverVehicleClass = this.params_license.driverVehicleClass ||"A2"
			this.index = this.list.findIndex(value=>value == driverVehicleClass)
			if(this.isPerson){
			this.quali_cert_num = uni.getStorageSync("driver_id_num")
			}
			
			if(!this.isPerson){
				this.quali_cert_num = this.params_license.driverIdNumber ||""
				this.quali_cert_num = this.params_license.qualificationCertNo||""
			}
			
			if (this.params_license.qualificationCertStartDate){
				this.begin_date = this.params_license.qualificationCertStartDate ||this.getDate({format: true})
				this.begin_date_has_input = true
			}
			
			if (this.params_license.qualificationCertExpireDate){
				this.expiry_date = this.params_license.qualificationCertExpireDate ||this.getDate({format: true})
				this.expiry_date_has_input = true
			}
			
			if (this.params_license.drivercertValidPeriodTo){
				this.driver_cert_expiry_date = this.params_license.drivercertValidPeriodTo ||this.getDate({format: true})
				this.driver_cert_expiry_date_has_input = true
			}
			
			if(!this.isPerson){
				this.driver_name  = this.params_license.driverName
				this.driver_id  = this.params_license.driverIdNumber
				this.driver_tel = this.params_license.driverPhone
				
			}
			
			
			//如果之前已经有params输入，就直接用storage里的params,否则this.params 为{}
			this.params = this.params_license||{}
			if (this.params_license.drivingLicensePhotoFirst){
				this.disabled = false
				this.active = true
			}
		},
		methods:{
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
			bindPickerChange(e) {
			           
			            this.index = e.target.value
						if (this.index == 0){
							this.params.driverVehicleClass = "A2"
						}else if (this.index == 1){
							this.params.driverVehicleClass = "B2"
						}
			        },
			 getDriverName(e){
				 this.driver_name  = e.detail.value
				this.params.driverName = e.detail.value
				this.params.driverCertificateType  = "201";//驾驶员证件类型
			},
			getDriverApprovedVehicleType(e){
				this.params.driverVehicleClass = e.newVal
				
			},
			getDriverCel(e){
				this.driver_tel = e.detail.value
				this.params.driverPhone = e.detail.value
			},
			
			getDriverID(e){
				this.driver_id  = e.detail.value
				this.params.driverIdNumber = e.detail.value
				if(!this.isPerson){
					this.quali_cert_num = e.detail.value
					this.params.qualificationCertNo = e.detail.value
				}
				
			},
			getDrivingCertificateNum(e){
				this.quali_cert_num = e.detail.value
				this.params.qualificationCertNo = e.detail.value
				
				
			},
			 bindDateChange: function(e) {
				  if(e.currentTarget.dataset.index=="license_begin_date"){
					  this.begin_date = e.target.value
					  this.params.qualificationCertStartDate =this.begin_date
					  this.begin_date_has_input = true
				  }else if(e.currentTarget.dataset.index=="license_expiry_date"){
					  this.expiry_date = e.target.value
					  this.params.qualificationCertExpireDate =this.expiry_date
					  this.expiry_date_has_input = true
				  }else if(e.currentTarget.dataset.index=="driver_cert_expiry_date"){
					  //驾驶证有效期至

					  this.driver_cert_expiry_date = e.target.value
					  this.params.drivercertValidPeriodTo = e.target.value
					   this.driver_cert_expiry_date_has_input = true
				  }
			    
			        },
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
			async  takephoto(e){
				_self=this
				 if(e.currentTarget.dataset.index=="driver_id_front"){
					 
				 	uni.chooseImage({
				 	 count: 1,
				 	 sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				 						
				 						/**
				 						 * 驾驶员身份证正面
				 						 */
				 						
				 	 async success(res) {
				 	  const tempFilePaths = res.tempFilePaths;
				 	
				 	//识别	
					
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
							    url:"/iscm/identify/idCard",
								method: "POST",
								data:params,
								header: {
									'content-type': 'application/x-www-form-urlencoded', 
										},
												  																	
											})
												  																
								
								//input 显示的值
								 _self.driver_name = identify_res.data.data.name 
								_self.driver_id = identify_res.data.data.num
								_self.quali_cert_num = identify_res.data.data.num																				
								//params 的值
								 _self.params.driverName = _self.driver_name 
								 _self.params.driverIdNumber = _self.driver_id
								_self.params.qualificationCertNo =_self.quali_cert_num																				
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
													url:"/iscm/identify/idCard",
													method: "POST",
													data:params,
													header: {
														'content-type': 'application/x-www-form-urlencoded', 
													},
													
												})
												
												
												//input 显示的值
												 _self.driver_name = identify_res.data.data.name 
												_self.driver_id = identify_res.data.data.num
												_self.quali_cert_num = identify_res.data.data.num																			
												//params 的值
												 _self.params.driverName = _self.driver_name 
												 _self.params.driverIdNumber = _self.driver_id
												 _self.params.qualificationCertNo =_self.quali_cert_num
					                        })
							
					//#endif												 
													 
												 
													 
													 
				 								
				 									 //upload the img 
				 									_self.imgDriverIDFrontUrl = tempFilePaths[0]
				 									
				 									//make the tachar img appear
				 									 _self.tachar_driver_id_front=true
													 
				 									const resPhoto = await _self.$upload({
				 										url:ossLocation.driver.front,
				 										file_path:tempFilePaths[0]
				 										
				 									})		
				 	 
				 	 },
				 	
				 	});
				 }else if(e.currentTarget.dataset.index=="driver_id_back"){
					 uni.chooseImage({
					  count: 1,
					  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					 					
					 					/**
					 					 * 驾驶员身份证背面
					 					 */
					 					
					  async success(res) {
					   const tempFilePaths = res.tempFilePaths;
					 								
					 								 
					 							
					 							
					 								//upload the img
					 								_self.imgDriverIDBackUrl = tempFilePaths[0]
					 								
					 								//make the tachar img appear
					 								    	_self.tachar_driver_id_back=true
					 								 
					 								const resPhoto = await _self.$upload({
					 									url:ossLocation.driver.reverse,
					 									file_path:tempFilePaths[0]
					 									
					 								})		
					  
					  },
					  
					 });
				 }else if(e.currentTarget.dataset.index=="driver_license_photo_first"){
					 /**
					  * 驾驶证主页
					  */_self.disabled = false
					 _self.active = true
					 const resChoosePhoto= await this.$photo({
						 async success(res) {
						        
								 const tempFilePaths = res.tempFilePaths;
								 
								 //驾驶证识别
								 
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
								 			url:"/iscm/identify/driverLicense",
								 			method: "POST",
								 			data:params,
								 			header: {
								 						'content-type': 'application/x-www-form-urlencoded', 
								 						},
								 							  																	
								 							})
											
								 																							
								 																							 
								 			_self.params.driverVehicleClass = identify_res.data.data.vehicle_type
								 			if (_self.params.driverVehicleClass === "A2"){
											     _self. index = 0
											}else if (_self.params.driverVehicleClass === "B2"){
												_self. index = 1
											}
																															
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
								 								url:"/iscm/identify/driverLicense",
								 								method: "POST",
								 								data:params,
								 								header: {
								 									'content-type': 'application/x-www-form-urlencoded', 
								 								},
								 								
								 							})
								 							
								 							
								 							_self.params.driverVehicleClass = identify_res.data.data.vehicle_type
								 							if (_self.params.driverVehicleClass === "A2"){
								 							     _self. index = 0
								 							}else if (_self.params.driverVehicleClass === "B2"){
								 								_self. index = 1
								 							}
								                         })
								 		
								 //#endif	
						 
								 
								
									//upload the img
									_self.imgDriverLicensePhotoUrl = tempFilePaths[0]
									
									//make the tachar img appear
									    	_self.tachar_driver_license=true
									//upload		
										const resPhoto = await _self.$upload({
											url:ossLocation.driver.first,
											file_path:tempFilePaths[0]
											
										})		 
												 
						     }
					 })
                      
				 }else if(e.currentTarget.dataset.index=="driving_certificate"){
					 /**
					  * 从业资格证
					  */
					  const resChoosePhoto= await this.$photo({
						  async success(res) {
							  const tempFilePaths = res.tempFilePaths;
							  
							  
									  
								//upload the img
								_self.imgDrivingCertificateUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_driving_certificate=true
											  
								//upload
									const resPhoto = await _self.$upload({
										url:ossLocation.driver.cert,
										file_path:tempFilePaths[0]
										
									})				  
									  
						  }
					  })
				 }
				
			},
			
			
			
			cancelDriverIDFront(){
				this.imgDriverIDFrontUrl = "/static/id_front.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_id_front=false
			},
			cancelDriverIDBack(){
				this.imgDriverIDBackUrl = "/static/id-back.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_id_back=false
			},
			
			cancelDriverLicense(){
				this.imgDriverLicensePhotoUrl = "/static/driving_license.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_license = false
			},
			
			cancelDrivingCertificate(){
				this.imgDrivingCertificateUrl ="/static/roadcert.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driving_certificate = false
			},
			
			
			
			backVehicle(){
				this.params.the_step =3
				this.params.active_one_step= true
				this.params.active_two_step= true
				this.params.active_three_step= true
				this.params.active_four_step= false
				this.params.active_five_step= false
				uni.setStorageSync("params_license",this.params)
				this.$emit('register_license_params',this.params)
			},
			formSubmit: function(e) {  
				                      /**
				                       * 机动车驾驶证主页
				                       */
									  this.params.drivingLicensePhotoFirst = uni.getStorageSync("drivingLicensePhotoFirst")
				                     
				                      if (this.params.drivingLicensePhotoFirst == null || this.params.drivingLicensePhotoFirst ==""|| this.params.drivingLicensePhotoFirst.length<1){
				                      	uni.showToast({
				                      		title:"未提交机动车驾驶证主页, 请提交",
				                      		icon:"none"
				                      	})
				                       return	 										
				                      }
									  
				                       //企业类检查
				                       if (!this.isPerson){
										   //进行驾驶员身份证正面检查
										   this.params.idcardFront = uni.getStorageSync("idcardFront")
										   if (this.params.idcardFront == null || this.params.idcardFront ==""|| this.params.idcardFront.length<1){
										   	uni.showToast({
										   		title:"未提交驾驶员身份证正面, 请提交",
										   		icon:"none"
										   	})
										    return	 										
										   } 
										   
										   
										   //进行驾驶员身份证背面检查
										   this.params.idcardBack = uni.getStorageSync("idcardBack")
										   if (this.params.idcardBack == null || this.params.idcardBack ==""|| this.params.idcardBack.length<1){
										   	uni.showToast({
										   		title:"未提交驾驶员身份证背面, 请提交",
										   		icon:"none"
										   	})
										    return	 										
										   } 
										   
										   
										   //进行驾驶员姓名检查
										   if (this.params.driverName == null || this.params.driverName ==""|| this.params.driverName.length<1){
										   	uni.showToast({
										   		title:"未输入驾驶员姓名号码, 请输入",
										   		icon:"none"
										   	})
										    return	 										
										   } 
										   
										//进行驾驶员身份证号检查
										if (this.params.driverIdNumber == null || this.params.driverIdNumber ==""|| this.params.driverIdNumber.length<18){
											uni.showToast({
												title:"驾驶员身份证号不正确, 请重输",
												icon:"none"
											})
										 return	 										
										}    
										   
										//进行驾驶员手机号码检查
										if (this.params.driverPhone == null || this.params.driverPhone ==""|| this.params.driverPhone.length<11){
											uni.showToast({
												title:"驾驶员手机号码不正确, 请修改",
												icon:"none"
											})
										 return	 										
										}    
										   
									   }
									  
									   
									    //进行准驾车型检查
									   if (this.params.driverVehicleClass == null || this.params.driverVehicleClass ==""|| this.params.driverVehicleClass.length<1){
									   	 this.params.driverVehicleClass = "A2"										
									   }
									  
									   
										
						                //定义表单规则
						                var rule = [
						                                       {name:"cellphone",
																checkType : "phoneno",
						                                        
						                                          errorMsg:"手机号格式不正确"
						                                       },
						                                  
						                ];
						                //进行表单检查
										
											var formData = e.detail.value;
											var checkRes = graceChecker.check(formData, rule);
											
												if(checkRes || this.isPerson){
													
												    //uni.showToast({title:"验证通过!", icon:"none"});
													
													
													this.params.the_step =5
													this.params.active_one_step= true
													this.params.active_two_step= true
													this.params.active_three_step= true
													this.params.active_four_step= true
													this.params.active_five_step= true
													uni.setStorageSync("params_license",this.params)
													this.$emit('register_license_params',this.params)
													
												}else{
													
														uni.showToast({ title: graceChecker.error, icon: "none" });
													     this.driver_tel = ""
												    
												}
											
											
										
						                
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
   		 padding-left: 10rpx;
   		 color:#000;
   		 font-size:30rpx;
   		 font-weight: 600;
		 display: flex;
		 flex-direction: row;
		
		 
		 .hand-input{
		 	  color:blue;
			  font-size:20rpx;
			   font-weight: 300;
			   margin-right:10% ;
		 }
   }
   .notes{
	   
	   width:100%;
	   padding: 1%;
	   border-bottom:1rpx solid #ddd;
	   
   }
   
   .red-isterisk{
	   color: #f00;
	   
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
				width:90%;
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

 .name{
 		 color:#000;
 		 width:45%;
 }
 
 .ref-name{
 		 font-size:35rpx;
 	     color:#000;
 		 width:450rpx;
 		
 }
 
 .btn-row{
   	width: 100%;
   	margin-top:50rpx;
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
   
   
   .star{
   	   color:#f00;
   }
   
   .margin-top{
	   margin-top:5vh;
   }
    
	.picker-view{
		   color:#222;
		   width:calc(100vw - 380rpx);
	} 
</style>
