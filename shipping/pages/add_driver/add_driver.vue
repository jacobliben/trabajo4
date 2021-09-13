<template>
	<view>
		<form @submit="formSubmit" >
		
		     <view class="two-photos" >
		     	
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
						     <view class="title">从业资格证 </view>
						     <view class="ref-name" >
								<image  
								:src="imgDrivingCertificateUrl" class="img" mode="aspectFit"></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelDrivingCertificate"
								 class="tachar" v-if="tachar_driving_certificate"></image>
							 </view>
			    </view>	
	
			</view>
			
			<view class="current-state">
				<text >驾驶员信息</text>
				<text class="red-isterisk">*</text>
			</view>
			
			<view class="cu-form-group"  >
				<text class="name">姓名<text class="red-isterisk">*</text></text>
				<input type="text"   maxlength="18" :value="driver_name"
				 placeholder="请输入姓名" 
				 @input="getDriverName">
			
			</view>
			
			<view class="cu-form-group" >
				<text class="name">身份证号<text class="red-isterisk">*</text></text>
				<input type="number"   maxlength="18"   :value="driver_id"   
				 placeholder="请输入身份证号" 
				 @input="getDriverID" @blur="checkID">
			
			</view>
			
			<view class=" space-line" >
						     <text class="name-special" >该身份证号已注册？</text>
										         <text><navigator url="/pages/bind_id/bind_id"><text class="text-green text-lg  margin-left-special">绑定身份证号</text></navigator>
										           
							</text>
						     
			</view>
			
			<view class="cu-form-group" >
				<text class="name">手机号码<text class="red-isterisk">*</text></text>
				<input type="number"  name="cellphone" maxlength="11" :value = "driver_tel"
				 placeholder="请输入手机号码" :disabled="disable_phone_change"
				 @input="getDriverCel">
			
			</view>
			
			<view class="cu-form-group" >
				<view class="name">联系地址</view>
				<input type="text"  :value="detail_address"
				 placeholder="请输入联系地址" 
				 @input="getAddress">
			</view>
			
			<view class="cu-form-group" >
				<text class="name">准驾车型<text class="red-isterisk">*</text></text>
				<view class="ref-name " >
					<picker @change="bindPickerChange" :value="index" :range="list">
					                        <view class="picker-view text-lg">{{list[index]}}</view>
					</picker>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<view class="name">驾驶证发证机关</view>
				<input type="text"  
				 placeholder="请输入驾驶证发证机关" :value="issue_organization"
				 @input="getDriverIssuingOrganizations">
			</view>
			
			<view class="cu-form-group" >
				<text class="name">驾驶证有效期起</text>
				<view >
					 <picker mode="date" v-if="driver_cert_begin_date_has_input" :value="driver_cert_begin_date"   :end="endDate" @change="bindDateChange" data-index="driver_cert_begin_date">
					      <view class="picker-view text-lg">{{driver_cert_begin_date}}</view>
					 </picker>
				</view>
				
				<view @click="driver_cert_begin_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!driver_cert_begin_date_has_input" >
						 <text class="dLeft gray">驾驶证有效期起</text>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">驾驶证有效期至</text>
				<view >
					 <picker mode="date" v-if="driver_cert_expiry_date_has_input" :value="driver_cert_expiry_date"   :end="endDate" @change="bindDateChange" data-index="driver_cert_expiry_date">
					      <view class="picker-view text-lg">{{driver_cert_expiry_date}}</view>
					 </picker>
				</view>
				
				<view @click="driver_cert_expiry_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!driver_cert_expiry_date_has_input" >
						 <text class="dLeft gray">驾驶证有效期至</text>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">从业资格号<text class="red-isterisk">*</text></text>
				<input type="text"   maxlength="28"
				 placeholder="请输入从业资格号码" :value="qualificationCertNo"
				 @input="getDrivingCertificateNum">
			
			</view>
			
			<!-- <view class="cu-form-group" >
				<text class="name">资格证开始日期</text>
				<view >
					 <picker mode="date" :value="begin_date"  :end="endDate" @change="bindDateChange" data-index="license_begin_date">
					      <view class="picker-view text-lg" >{{begin_date}}</view>
					 </picker>
				</view>
			</view> -->
			
			<view class="cu-form-group" >
				<text class="name">资格证失效日期</text>
				<view >
					
					 <picker mode="date"  v-if="expiry_date_has_input" :value="expiry_date"   :end="endDate" @change="bindDateChange" data-index="license_expiry_date">
					      <view class="picker-view text-lg">{{expiry_date}}</view>
					 </picker>
				</view>
				
				<view @click="expiry_date_has_input = true"  >
					
					 <view  class="picker-view text-lg  "  v-if="!expiry_date_has_input" >
						 <text class="dLeft gray">资格证失效日期</text>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">身份证有效期起</text>
				<view >
					 <picker mode="date" v-if="id_begin_date_has_input" :value="id_begin_date"   :end="endDate" @change="bindDateChange" data-index="id_begin_date">
					      <view class="picker-view text-lg">
						    <text >{{id_begin_date}}</text>
						  </view>
					 </picker>
				</view>
				
				<view @click="id_begin_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!id_begin_date_has_input" >
						 <text class="dLeft gray">身份证有效期起</text> 
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">身份证有效期至</text>
				<view >
					 <picker mode="date" v-if="id_expiry_date_has_input" :value="id_expiry_date"   :end="endDate" @change="bindDateChange" data-index="id_expiry_date">
					      <view class="picker-view text-lg">{{id_expiry_date}}</view>
					 </picker>
				</view>
				
				<view @click="id_expiry_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!id_expiry_date_has_input" >
						 <text class="dLeft gray">身份证有效期至</text> 
					</view>
				</view>
			</view>
			
			<view class="cu-form-group" >
				<text class="name">备注</text>
				<input type="text"   :value="remark" 
				 placeholder="请输入备注" 
				 @input="getRemark">
			
			</view>
			
			<view class="btn-row">
				<button class="next-btn bg-gradual-green round margin-bottom" 
				   @click="backBusiness">返回</button>
				<button class="next-btn round margin-bottom"  :class="{'bg-gradual-green':active}"
					v-if="btn_title!='查看'"			  :disabled="disabled"
				form-type="submit">{{btn_title}}</button> 
									
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
				
				
			    disabled:true,
			    active:false,
				disable_phone_change:false,
				driver_name:"",
				driver_id:"",
				//显示驾驶员手机
				driver_tel:"",
				detail_address:"",
				issue_organization:"",
				qualificationCertNo:"",
				remark:"",
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
				driver_cert_begin_date: currentDate,
				driver_cert_expiry_date: currentDate,
				id_begin_date: currentDate,
				id_expiry_date: currentDate,
				list: [  
				               'A2',
				               'B2',
				            ],
				index: 0,			 
				params:{},
				re_params:{},
				listed_info: [ ],
				received_info: [ ],
				btn_title:"",
				
				driver_cert_begin_date_has_input:false,
				driver_cert_expiry_date_has_input:false,
				expiry_date_has_input:false,
				id_begin_date_has_input:false,
				id_expiry_date_has_input:false,
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
		async onLoad(options){
			this.btn_title = options.btn_title
			
			if (this.btn_title == "修改" ||this.btn_title == "查看"){
				this.listed_info = uni.getStorageSync("driver_item")
				this.disable_phone_change = true
				
				
				const  driverId = this.listed_info.driverId
				
				var authorization = uni.getStorageSync("token")
				 
									  const res = await this.$request({
									  	 	url:"/app/driver/getByDriverId/" + driverId ,
									  	 	
									  	 	header:{
									  	 		Authorization:authorization,
									  	 	},
									  	 
									  	 })
				
				if (res.data.code ==200){
					this.received_info = res.data.data
				}else{
					uni.showToast({
						title: '请求接口失败!',
						icon: 'none',
					})
				}
				
				//驾驶员身份证正面
				this.imgDriverIDFrontUrl = this.received_info.idcardFront
				
				if (this.imgDriverIDFrontUrl ==''){
					this.imgDriverIDFrontUrl = "/static/id_front.jpg"
				}
				//驾驶员身份证背面
				this.imgDriverIDBackUrl = this.received_info.idcardBack
				if (this.imgDriverIDBackUrl ==''){
					this.imgDriverIDBackUrl = "/static/id-back.jpg"
				}
				//机动车驾驶证主页
				this.imgDriverLicensePhotoUrl = this.received_info.drivingLicensePhotoFirst
				if (this.imgDriverLicensePhotoUrl ==''){
					this.imgDriverLicensePhotoUrl = "/static/driving_license.jpg"
				}
				//从业资格证
				this.imgDrivingCertificateUrl = this.received_info.qualificationCertPhoto
				if (this.imgDrivingCertificateUrl ==''){
					this.imgDrivingCertificateUrl = "/static/roadcert.jpg"
				}
				
				
				
				 this.driver_name = this.received_info.driverName
				 this.driver_id = this.received_info.driverIdNumber
				 this.driver_tel = this.received_info.driverPhone
				 this.detail_address = this.received_info.driverAddress
				
				 if(this.received_info.driverVehicleClass==="A2"){
					 this.index = 0
				
				 }else if (this.received_info.driverVehicleClass==="B2"){
					  this.index = 1
					  
				 }
				 this.issue_organization = this.received_info.driverIssuingOrganizations
				 //驾驶证有效期起
				 if (this.received_info.drivercertValidPeriodFrom){
					 this.driver_cert_begin_date = this.received_info.drivercertValidPeriodFrom||this.getDate({format: true})
					 this.driver_cert_begin_date_has_input = true
				 }
				 //驾驶证有效期至
				  if (this.received_info.drivercertValidPeriodTo){
					  this.driver_cert_expiry_date = this.received_info.drivercertValidPeriodTo||this.getDate({format: true})
					  this.driver_cert_expiry_date_has_input = true
				  }
				  
				 this.qualificationCertNo = this.received_info.qualificationCertNo
				 
				 //资格证失效日期

				  if (this.received_info.qualificationCertExpireDate){
					  this.expiry_date = this.received_info.qualificationCertExpireDate||this.getDate({format: true})
					   this.expiry_date_has_input = true
				  }
				 
				   //身份证有效期起
                  if (this.received_info.idcardValidPeriodFrom){
					  this.id_begin_date = this.received_info.idcardValidPeriodFrom||this.getDate({format: true})
					  this.id_begin_date_has_input = true
				  }
				  
				  //身份证有效期至
				   if (this.received_info.idcardValidPeriodTo){
					   this.id_expiry_date = this.received_info.idcardValidPeriodTo||this.getDate({format: true})
					   this.id_expiry_date_has_input = true
				   }
				   
				  
			      this.remark = this.received_info.remark
				//enable the btn
				this.disabled= false 
				this.active = true
			}
		  
		},	
		created(){
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:`${this.btn_title}驾驶员`
			})
			
		},
		methods:{
			//根据身份证号获取驾驶员 
			async checkID(){
				const driver_id_check = this.params.driverIdNumber
				
				var authorization = uni.getStorageSync("token")
				
				const resID = await this.$request({
					url:"/app/driver/getByIdNumber/" + driver_id_check,
					
					header:{
						Authorization:authorization,
					},
					
				})
				
				if(resID.data.hasOwnProperty("data")){
						uni.showToast({
							title:"该身份证号已被注册过,可直接绑定！",
							icon:"none"
						})
				}else{
					uni.showToast({
						title:"该身份证号尚未被注册过,请继续！",
						icon:"none"
					})
				}
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
			bindPickerChange(e) {
			            
			            this.index = e.target.value
						
						if (this.index == 0){
							this.params.driverVehicleClass = "A2"
						}else if (this.index == 1){
							this.params.driverVehicleClass = "B2"
						}
			        },
			 getDriverName(e){
				this.params.driverName = e.detail.value
				
				this.params.driverCertificateType  = "201";//驾驶员证件类型
			},
			
			getDriverCel(e){
				this.driver_tel = e.detail.value
				this.params.driverPhone = e.detail.value
				
				this.disabled = false
				this.active = true
			},
			getAddress(e){
			
					this.params.driverAddress = e.target.value
				
			},
			//身份证
			getDriverID(e){
				this.driver_id = e.detail.value
				this.params.driverIdNumber = e.detail.value
				//从业资格证编号：默认为驾驶员身份证编号
				this.qualificationCertNo = this.params.driverIdNumber
				this.params.qualificationCertNo = this.params.driverIdNumber
			},
			//驾驶证发证机关

			driverIssuingOrganizations(e){
				this.params.driverIssuingOrganizations = e.detail.value
			},
			
			getDrivingCertificateNum(e){
				
				this.params.qualificationCertNo = e.detail.value
				
				
			},
			 bindDateChange: function(e) {
				  if(e.currentTarget.dataset.index=="license_begin_date"){
					  this.begin_date = e.target.value
					  this.params.qualificationCertStartDate =this.begin_date
					 
				  }else if(e.currentTarget.dataset.index=="license_expiry_date"){
					  //资格证失效日期

					  this.expiry_date = e.target.value
					  this.params.qualificationCertExpireDate =this.expiry_date
					   this.expiry_date_has_input = true
				  }else if(e.currentTarget.dataset.index=="driver_cert_begin_date"){
					  //驾驶证有效期起

					  this.driver_cert_begin_date = e.target.value
					  this.params.drivercertValidPeriodFrom =e.target.value
					   this.driver_cert_begin_date_has_input = true
				  }else if(e.currentTarget.dataset.index=="driver_cert_expiry_date"){
					  //驾驶证有效期至

					  this.driver_cert_expiry_date = e.target.value
					  this.params.drivercertValidPeriodTo = e.target.value
					   this.driver_cert_expiry_date_has_input = true
				  }else if(e.currentTarget.dataset.index=="id_begin_date"){
					  //身份证有效期起

					  this.id_begin_date = e.target.value
					  this.params.idcardValidPeriodFrom = e.target.value
					  this.id_begin_date_has_input = true
				  }else if(e.currentTarget.dataset.index=="id_expiry_date"){
					  //身份证有效期至

					  this.id_expiry_date = e.target.value
					  this.params.idcardValidPeriodTo = e.target.value
					  this.id_expiry_date_has_input = true
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
								_self.detail_address = identify_res.data.data.address
									
								//从业资格证编号：默认为驾驶员身份证编号
								_self.qualificationCertNo = _self.driver_id
								_self.params.qualificationCertNo = _self.qualificationCertNo 	
																					
								//params 的值
								 _self.params.driverName = _self.driver_name 
								 _self.params.driverIdNumber = _self.driver_id
								_self.params.driverAddress = _self.detail_address																			
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
												_self.detail_address = identify_res.data.data.address
													//从业资格证编号：默认为驾驶员身份证编号
													_self.qualificationCertNo = _self.driver_id
													_self.params.qualificationCertNo = _self.qualificationCertNo 																			  
												//params 的值
												 _self.params.driverName = _self.driver_name 
												 _self.params.driverIdNumber = _self.driver_id
												 _self.params.driverAddress = _self.detail_address
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
				 	 error : function(e){
				 	 
				 	 }
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
					 								
					 								 //preview the photos
					 								 // uni.previewImage({
					 								 //             urls: res.tempFilePaths,
					 								             
					 								 //         });
					 							
					 								//upload the img
					 								_self.imgDriverIDBackUrl = tempFilePaths[0]
					 								
					 								//make the tachar img appear
					 								    	_self.tachar_driver_id_back=true
					 								 
					 								const resPhoto = await _self.$upload({
					 									url:ossLocation.driver.reverse,
					 									file_path:tempFilePaths[0]
					 									
					 								})		
					  
					  },
					  error : function(e){
					  
					  }
					 });
				 }else if(e.currentTarget.dataset.index=="driver_license_photo_first"){
					 /**
					  * 驾驶证主页
					  */
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
											_self.issue_organization = identify_res.data.data.issue_organization
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
						 
								 
								 //preview the photos
								 // uni.previewImage({
								 //             urls: res.tempFilePaths,
								             
								 //         });
									
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
							  
							  //preview the photos
							  // uni.previewImage({
							  //             urls: res.tempFilePaths,
							              
							  //         });
									  
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
				this.imgDriverIDFrontUrl ="/static/id_front.jpg"
				try {
				    uni.removeStorageSync('idcardFront');
					
				} catch (e) {
				    // error
				}
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功",
						icon:"none"
					})
				},500)
				this.tachar_driver_id_front=false
			},
			cancelDriverIDBack(){
				this.imgDriverIDBackUrl ="/static/id-back.jpg"
				try {
				    uni.removeStorageSync('idcardBack');
					
				} catch (e) {
				    // error
				}
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功",
						icon:"none"
					})
				},500)
				this.tachar_driver_id_back=false
			},
			
			cancelDriverLicense(){
				this.imgDriverLicensePhotoUrl = "/static/driving_license.jpg"
				try {
				    uni.removeStorageSync('drivingLicensePhotoFirst');
					
				} catch (e) {
				    // error
				}
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功",
						icon:"none"
					})
				},500)
				this.tachar_driver_license = false
			},
			
			cancelDrivingCertificate(){
				this.imgDrivingCertificateUrl ="/static/roadcert.jpg"
				try {
				    uni.removeStorageSync('qualificationCertPhoto');
					
				} catch (e) {
				    // error
				}
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功",
						icon:"none"
					})
				},500)
				this.tachar_driving_certificate = false
			},
			
			getRemark(e){
				
				this.params.remark = e.detail.value
				
			},
			
            backBusiness(){
				uni.navigateBack({
					delta:1,
				})
			
			},
			formSubmit: async function(e) {  
				                   
							if (this.btn_title == "添加"){
								
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
											   
								/**
								 * 从业资格证
								 */			   
								this.params.qualificationCertPhoto = uni.getStorageSync("qualificationCertPhoto")			   
												
																		   //进行驾驶员姓名检查
																		   if (this.params.driverName == null || this.params.driverName ==""|| this.params.driverName.length<1){
																		   	uni.showToast({
																		   		title:"未输入驾驶员姓名, 请输入",
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
																		if (this.params.driverPhone == null || this.params.driverPhone ==""|| this.params.driverPhone.length<1){
																			uni.showToast({
																				title:"未输入驾驶员手机号码, 请输入",
																				icon:"none"
																			})
																		 return	 										
																		}    
																		   
																	   
																	  
																	   
																	    //进行准驾车型检查
																	   if (this.params.driverVehicleClass == null || this.params.driverVehicleClass ==""|| this.params.driverVehicleClass.length<1){
																	   	 this.params.driverVehicleClass = "A2"										
																	   }
																	  
																	   
																	 
																	   
																	   //进行从业资格号检查
																	   if (this.params.qualificationCertNo == null || this.params.qualificationCertNo ==""|| this.params.qualificationCertNo.length<1){
																	   	uni.showToast({
																	   		title:"未输入从业资格号, 请输入",
																	   		icon:"none"
																	   	})
																	    return	 										
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
																			
																				if(checkRes){
																					var authorization = uni.getStorageSync("token")
																					var  form = this.params
																					
																					
																					
																					const res = await this.$request({
																						url:"/app/driver/add",
																						method: "POST",
																						data:form,
																						header:{
																							Authorization:authorization,
																							
																						},
																						
																					})
																					
																					if(res.data.msg =="操作成功"){
																						uni.showToast({
																							title:res.data.msg,
																							
																						})
																						
																						try {
																						    uni.removeStorageSync('idcardFront');
																							uni.removeStorageSync('idcardBack');
																							uni.removeStorageSync('drivingLicensePhotoFirst');
																							uni.removeStorageSync('qualificationCertPhoto');															  
																						} catch (e) {
																						    // error
																						}
																						
																						setTimeout(()=>{
																						   uni.reLaunch({
																						   	url:"/pages/driver_list/driver_list"
																						   })
																						},800)
																					}else{
																						uni.showToast({
																							title:res.data.msg,
																							icon:"none"
																						})
																					}
																					
																				}else{
																					
																						uni.showToast({ title: graceChecker.error, icon: "none" });
																					     this.driver_tel = ""
																				    
																				}
																			
								
								
							}else if (this.btn_title == "修改"){
								//the original data
								var modify_received_info= this.received_info
								//the current data form 
								var modify_form = {}
								
								uni.getStorageInfo({
								    success: function (res) {
								        
								       
								    }
								});
								
								var authorization = uni.getStorageSync("token")
								
								
								//进行驾驶员身份证正面检查
								this.params.idcardFront = uni.getStorageSync("idcardFront")
								if (this.params.idcardFront == null || this.params.idcardFront ==""|| this.params.idcardFront.length<1){
									modify_form.idcardFront = modify_received_info.idcardFront
															
								} else{
									modify_form.idcardFront = this.params.idcardFront
								} 
								
								
								//进行驾驶员身份证背面检查
								this.params.idcardBack = uni.getStorageSync("idcardBack")
								if (this.params.idcardBack == null || this.params.idcardBack ==""|| this.params.idcardBack.length<1){
									 modify_form.idcardBack = modify_received_info.idcardBack										
								} else{
									modify_form.idcardBack = this.params.idcardBack
								} 
								
								/**
								                * 机动车驾驶证主页
								                */
								this.params.drivingLicensePhotoFirst = uni.getStorageSync("drivingLicensePhotoFirst")
								              
								if (this.params.drivingLicensePhotoFirst == null || this.params.drivingLicensePhotoFirst ==""|| this.params.drivingLicensePhotoFirst.length<1){
								      modify_form.drivingLicensePhotoFirst = modify_received_info.drivingLicensePhotoFirst        		 										
								  }else{
									modify_form.drivingLicensePhotoFirst = this.params.drivingLicensePhotoFirst
								} 
											   
								/**
								 * 从业资格证
								 */			   
								this.params.qualificationCertPhoto = uni.getStorageSync("qualificationCertPhoto")
								if (this.params.qualificationCertPhoto == null || this.params.qualificationCertPhoto ==""|| this.params.qualificationCertPhoto.length<1){
								        modify_form.qualificationCertPhoto = modify_received_info.qualificationCertPhoto       		 										
								  }else{
									modify_form.qualificationCertPhoto = this.params.qualificationCertPhoto
								} 
								
								
								
								
								//进行驾驶员身份证正面检查
								
								if (modify_form.idcardFront == null || modify_form.idcardFront ==""|| modify_form.idcardFront.length<1){
									uni.showToast({
										title:"未提交驾驶员身份证正面, 请提交",
										icon:"none"
									})
								 return	 										
								} 
								
								
								//进行驾驶员身份证背面检查
								
								if (modify_form.idcardBack == null || modify_form.idcardBack ==""||modify_form.idcardBack.length<1){
									uni.showToast({
										title:"未提交驾驶员身份证背面, 请提交",
										icon:"none"
									})
								 return	 										
								} 
								
								/**
								                * 机动车驾驶证主页
								                */
								
								              
								 if (modify_form.drivingLicensePhotoFirst == null || modify_form.drivingLicensePhotoFirst ==""|| modify_form.drivingLicensePhotoFirst.length<1){
								               	uni.showToast({
								               		title:"未提交机动车驾驶证主页, 请提交",
								               		icon:"none"
								               	})
								                return	 										
								               }
								
								
								
								//the data params that modified by you this time
								var modify_params= this.params
								
								
								Object.assign(modify_form, modify_received_info, modify_params)
								
								
								uni.showToast({
									title:"正在修改中...",
									icon:"none"
								})
								
								
								
								const resEdit = await this.$request({
									url:"/app/driver/edit",
									method: "PUT",
									data:modify_form,
									header:{
										Authorization:authorization,
										
									},
									
								})
								
								
								
								if(resEdit.data.msg ="操作成功"){
									uni.showToast({
										title:resEdit.data.msg,
										
									})
									
								    try {
								     uni.removeStorageSync('idcardFront');
								    	uni.removeStorageSync('idcardBack');
								    	uni.removeStorageSync('drivingLicensePhotoFirst');
								    	uni.removeStorageSync('qualificationCertPhoto');															  
								    } catch (e) {
								        // error
								    }
								
									setTimeout(()=>{
									   uni.reLaunch({
									   	url:"/pages/driver_list/driver_list"
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
   
   
   .star{
   	   color:#f00;
   }
   
   .margin-top{
	   margin-top:5vh;
   }
    
	.picker-view{
		   color:#222;
		   width:calc(100vw - 380rpx);
		   margin-left:60rpx;
		   padding-left:50rpx;
	} 
	
	.space-line{
		width:70%;
		margin-left:5%;
		 display: flex;
		 justify-content: space-between;
	}
	
	.margin-left-special{
		margin-left:-200rpx;
	}
	.name-special{
 		 color:#000;
 		 width:55%;
 }
 
 .dLeft{
	 
	 margin-left: -60rpx;
 }
 
 .gray{
	 color: #666;
	 font-size: 30rpx;
 }
</style>
