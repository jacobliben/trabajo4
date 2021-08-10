<template>
	<view>
		<form @submit="formSubmit" >
		     <!-- 	take ID photo section -->
			 <view class="current-state margin-top">
			 		<text >证件照片上传</text>
			 		<text class="red-isterisk">*</text>
			 	</view>
				
		     	<view class=" margin-top" >
		     	    <view class="two-photos" v-if="!isPerson">
		     	    	
		     	    	<view class="id-front" @click="takephotoLegal" data-index="legalPersonCerFront">
		     	    		<view class="title">法人身份证正面<text class="red-isterisk">*</text></view>
		     	    		<image :src="imglegalPersonCerFrontUrl" mode="aspectFit"></image>
		     	    		<image src="/static/tachar.png" mode="aspectFit" @click="cancelLicense"
		     	    		 class="tachar" v-if="tachar_legal_person_cer_front" data-index="legal_person_cer_front"></image>
		     	    	</view>
		     	    	
		     	    	<view class="id-front" @click="takephotoLegal" data-index="legalPersonCerReverse">
		     	    		<view class="title">法人身份证背面<text class="red-isterisk">*</text></view>
		     	    		<image :src="imglegalPersonCerReverseUrl" mode="aspectFit"></image>
		     	    		<image src="/static/tachar.png" mode="aspectFit" @click="cancelLicense"
		     	    		 class="tachar" v-if="tachar_legal_person_cer_reverse" data-index="legal_person_cer_reverse"></image>
		     	    	</view>
		     	    </view>  
		     		
		     		<view class="two-photos">
		     			
		     			<view class="id-front" @click="takephoto" data-index="business_license">
		     				<view class="title">{{!isPerson?'营业执照':'身份证正面'}}<text class="red-isterisk">*</text></view>
		     				<image :src="imgBusinessLicenseUrl" mode="aspectFit"></image>
		     				<image src="/static/tachar.png" mode="aspectFit" @click="cancelLicense"
		     				 class="tachar" v-if="tachar_business_license" data-index="business_license"></image>
		     			</view>
		     			
		     			<view class="id-front" v-if="isPerson" @click="takephotoLegal" data-index="carrier_id_reverse">
		     				<view class="title">身份证反面<text class="red-isterisk">*</text></view>
		     				<image :src="imgBackUrl" mode="aspectFit"></image>
		     				<image src="/static/tachar.png" mode="aspectFit" @click="cancelBack"
		     				 class="tachar" v-if="tachar_back"></image>
		     			</view>
		     			
		     			<view class="id-front"  v-if="!isPerson" @click="takephoto" data-index="transport_license">
		     				<view class="title">道路运输经营许可证<text class="red-isterisk">*</text></view>
		     				<image :src="imgTransportLicenseUrl" mode="aspectFit"></image>
		     				<image src="/static/tachar.png" mode="aspectFit" @click="cancelLicense"
		     				 class="tachar" v-if="tachar_transport_license" data-index="transport_license"></image>
		     			</view>
		     		</view>
		     </view>
			
			
			
			<view class="cu-form-group margin-top" >
				<view class="name">{{isPerson?'承运人姓名':'承运企业名称'}}<text class="red-isterisk">*</text></view>
				<input type="text"  name="name" :value="company_name"
				  :placeholder="isPerson?'请输入承运人姓名':'请输入公司全称'" 
				 focus @input="getCompanyName">
			</view>
			<view class="cu-form-group" >
				<view class="name">{{isPerson?'身份证号码':'统一社会信用号码'}}<text class="red-isterisk">*</text></view>
				<input type="text"  name="idcard" maxlength="18" :value="number_front"
				 :placeholder="isPerson?'请输入身份证号码':'请输入统一社会信用号码'" 
				 @input="getBusinessLicenseNum" >
			
			</view>
			
			<view class="cu-form-group"  >
				<view class="name">所属区域<text class="red-isterisk">*</text></view>
			        <!-- 首次选择 -->
					<text  class="place_input text-gray" v-if="!origin_has_input&&!previous_has_input"  @click="selectOrigin">请选择所属区域</text>
					<!-- 跳转后重显 -->
					<text  class="place_input text-gray" v-if="!origin_has_input&&previous_has_input"  @click="selectOrigin">{{pickerTextOrigin}}</text>
					
					
					<text  class=" place_got text-lg" v-if="origin_has_input" @click="selectOrigin"  >{{pickerTextOrigin}} </text>
				
			</view>
			
			<view class="cu-form-group" >
				<view class="name">{{isPerson?'详细地址':'注册地址'}}<text class="red-isterisk">*</text></view>
				<input type="text"  :value="detail_address"
				 :placeholder="isPerson?'请输入详细地址':'请输入注册地址'" 
				 @input="getRegisteringAddress">
			</view>
			
			<!--  个人显示 -->
			<view class="cu-form-group" v-if="isPerson">
				<text class="name">身份证有效期起</text>
				<view >
					 <picker mode="date" v-if="id_begin_date_has_input" :value="id_begin_date"   :end="endDate" @change="bindDateChange" data-index="id_begin_date">
					      <view class="picker-view text-lg">{{id_begin_date}}</view>
					 </picker>
				</view>
				
				<view @click="id_begin_date_has_input = true"  >
					
					 <view  class="picker-view text-lg"  v-if="!id_begin_date_has_input" >选择身份证有效期起</view>
				</view>
			</view>
			
			<view class="cu-form-group" v-if="isPerson">
						     <view class="name">身份证是否永久有效 </view>
						     <view class="ref-name">
								<radio-group class="truck-type" @change="radioValidityChange">
								                <label class="cell" v-for="(item, index) in validity_items" 
														:key="item.value">
								                    <view>
								                        <radio :value="item.value" :checked="index === validity_current" />
								                    </view>
								                    <view>{{item.name}}</view>
								                </label>
								 </radio-group>
							 </view>
			</view>
			
			<view class="cu-form-group" v-if="isPerson&&!forever" >
				<text class="name">身份证有效期至</text>
				<view >
					 <picker mode="date" v-if="id_expiry_date_has_input" :value="id_expiry_date"   :end="endDate" @change="bindDateChange" data-index="id_expiry_date" >
					      <view class="picker-view text-lg">{{id_expiry_date}}</view>
					 </picker>
				</view>
				
				<view @click="id_expiry_date_has_input = true"  >
					
					 <view  class="picker-view text-lg left-more"  v-if="!id_expiry_date_has_input" >选择身份证有效期至</view>
				</view>
			</view>
			
			<!--  企业显示 -->
			
				<view class="cu-form-group" v-if="!isPerson">
					<view class="name">法人代表名称<text class="red-isterisk">*</text></view>
					<input type="text"    :value="legal_person"
					 placeholder="请输入法人代表名称" 
					 @input="getlegalPersonName">
				</view>
				
				<view class="cu-form-group" v-if="!isPerson">
					<view class="name">法人代表身份证号码<text class="red-isterisk">*</text></view>
					<input type="number"  maxlength="18" :value="legal_person_id"
					 placeholder="请输入法人代表身份证号码" 
					 @input="getlegalPersonID">
				</view>
			
			
			
			<view class="cu-form-group" >
				<view class="name">运输经营许可证<text class="red-isterisk">*</text></view>
				<input type="text"   maxlength="20" :value="transport_license_num"
				 placeholder="请输入运输经营许可证号码" 
				 @input="getTransportLicense">
			</view>
			
			<view class="cu-form-group" >
				<view class="name">业务联系人<text class="red-isterisk">*</text></view>
				<input type="text"   maxlength="28" :value="contact_name"
				 placeholder="请输入业务联系人名称" 
				 @input="getContact" >
			</view>
			
			<view class="cu-form-group" >
				<view class="name">业务联系人手机或电话<text class="red-isterisk">*</text></view>
				<input type="number"   maxlength="11" name="cellphone" :value="tel"
				 placeholder="请输入业务联系人手机号码" 
				 @input="getPhoneNumber">
			</view>
			
			<view class="btn-row">
				<button class="next-btn bg-gradual-green round" 
				   @click="backPhoneVerifying">上一步</button>
				<button class="next-btn  round" :class="{'bg-gradual-green':active}"
							  :disabled="disabled" form-type="submit">下一步</button> 
			</view>
		
	</form>
	
		<simple-address-high ref="simpleAddressOrigin" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirmOrigin" themeColor="#007AFF"></simple-address-high>
	</view>
</template>

<script>
	import simpleAddressHigh from '@/components/simple-address-high/simple-address.vue';
	import {ossLocation} from "@/util/pattern.js"
	import { pathToBase64, base64ToPath } from '@/js_sdk/mmmm-image-tools'
	import { Base64 } from '@/js_sdk/js-base64'
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
				tel:"1111",
				number_front:"",
				detail_address:"",
				legal_person:"",
				legal_person_id:"",
				company_name:"",
				transport_license_num :"",
				contact_name:"",
				 cityPickerValueDefault: [0, 0, 1],
				disabled:true,
				active:false,
				origin_has_input:false,
				previous_has_input:false,
				pickerTextOrigin: '',
				imglegalPersonCerFrontUrl:"/static/id_front.jpg",
				imglegalPersonCerReverseUrl:"/static/id-back.jpg",
				imgBusinessLicenseUrl:"/static/id-front.png",
				imgTransportLicenseUrl:"/static/transport_license.jpg",
				imgBackUrl:"/static/id-back.jpg",
				tachar_legal_person_cer_front:false,
				tachar_legal_person_cer_reverse:false,
				tachar_business_license:false,
				tachar_transport_license:false,
				tachar_back:false,
				photo_id:true,
				id_begin_date: currentDate,
				id_expiry_date: currentDate,
				params:{
					active_one_step:true,
					active_two_step:true,
					the_step:2,
					
				},
				params_business:{},
				validity_items: [{
				                   value: "1",
				                   name: '永久有效'
				               },
				               {
				                   value: "2",
				                   name: '有截止日期',
				                 
				               },
				               
				           ],
				validity_current: 1,
				forever:false,		   
				id_begin_date_has_input:false,
				id_expiry_date_has_input:false,
			};
		},
		components:{
			simpleAddressHigh,
		},
		computed: {
		      
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		created(){
			this.isPerson = uni.getStorageSync("in_personal_registering")
			
			//用于跳转后回显
			this.params_business = uni.getStorageSync("params_business")
			
			this.params.carrierContactsPhone = uni.getStorageSync("contact_phone")
			
		},
		mounted(){
			
			//加载身份证或者营业执照图例
			if (this.isPerson){  
				this.imgBusinessLicenseUrl = uni.getStorageSync("carrierCardFront_reshow")
				if(this.imgBusinessLicenseUrl == ""){
					this.imgBusinessLicenseUrl = "/static/id_front.jpg"
				}
				
			}else{
				this.imgBusinessLicenseUrl = uni.getStorageSync("carrierCardFront_reshow")
				if(this.imgBusinessLicenseUrl == ""){
					this.imgBusinessLicenseUrl = "/static/business_license.jpg"
				}
				
			}
			
			
			//加载身份证反面
			if (this.isPerson){  
				this.imgBackUrl = uni.getStorageSync("carrierCardReverse_reshow")
				if(this.imgBackUrl == ""){
					this.imgBackUrl = "/static/id-back.jpg"
				}
				
			}
			
			
			if (!this.isPerson){
				//加载道路运输经营许可证
				this.imgTransportLicenseUrl = uni.getStorageSync("carrierRoadTransportBusinessLicense_reshow")
				if(this.imgTransportLicenseUrl == ""){
					this.imgTransportLicenseUrl = "/static/transport_license.jpg"
				}
				
				//加载法人身份证正面
				this.imglegalPersonCerFrontUrl = uni.getStorageSync("legalPersonCerFront_reshow")
				if(this.imglegalPersonCerFrontUrl == ""){
					this.imglegalPersonCerFrontUrl = "/static/id_front.jpg"
				}
				
				//加载法人身份证背面
				this.imglegalPersonCerReverseUrl = uni.getStorageSync("legalPersonCerReverse_reshow")
				if(this.imglegalPersonCerReverseUrl == ""){
					this.imglegalPersonCerReverseUrl = "/static/id-back.jpg"
				}
			}
			
			
			
			
			
			
			
			
			//跳转时显示
			const show_validity_current = this.params_business.whetherValidForever ||2
			this.validity_current = show_validity_current - 1
			if (show_validity_current ==1){
				this.forever = true
			}
			this.company_name = this.params_business.carrierName ||""
			this.number_front = this.params_business.carrierCertNum ||""
			this.detail_address = this.params_business.carrierAddress ||""
			this.transport_license_num = this.params_business.carrierRoadTransportBusinessLicenseNo ||""
			this.contact_name = this.params_business.carrierContacts ||""
			
			//身份证有效期起
			if (this.params_business.idcardValidPeriodFrom){
								  this.id_begin_date = this.params_business.idcardValidPeriodFrom||this.getDate({format: true})
								  this.id_begin_date_has_input = true
			}
			
			//身份证有效期至
			 if (this.params_business.idcardValidPeriodTo){
								   this.id_expiry_date = this.params_business.idcardValidPeriodTo||this.getDate({format: true})
								   this.id_expiry_date_has_input = true
			 }
			
			
			this.legal_person = this.params_business.legalPersonName ||""
			this.legal_person_id = this.params_business.legalPersonCer ||""
			
			this.pickerTextOrigin = this.params_business.pickerTextOrigin ||""
			this.previous_has_input = this.params_business.previous_has_input ||false
			//如果之前已经有params输入，就直接用storage里的params,否则this.params 为{}
			this.params = this.params_business||{}
			if (this.params_business.carrierRoadTransportBusinessLicenseNo){
				this.disabled = false
				this.active = true
			}
			
			this.tel = uni.getStorageSync("contact_phone")
		},
		methods:{
			   //身份证是否有截止日期
			   radioValidityChange(e){
			   	this.params.whetherValidForever = parseInt(e.target.value)
			  
				if (this.params.whetherValidForever ==1){
					this.forever = true
					this.params_business.idcardValidPeriodTo =  "2080-01-01"
				}else{
					this.forever = false
				}
			   },
			
				//所在区域
			    selectOrigin() {
			    // 根据 label 获取
				
			    var index = this.$refs.simpleAddressOrigin.queryIndex(['江苏省', '徐州市', '云龙区'], 'label');
			    
			    this.cityPickerValueDefault = index.index;
			    this.$refs.simpleAddressOrigin.open();
			},
			onConfirmOrigin(e) {
				if(e.provinceCode==11
				||e.provinceCode==31
				||e.provinceCode==12||e.provinceCode==50){
					this.pickerTextOrigin = e.labelArr[0]+e.labelArr[2]
				}
				else{
					this.pickerTextOrigin = e.labelArr[0]+e.labelArr[1]+e.labelArr[2]
				}
				//为了跳转后显示，加入params.pickerTextOrigin这个参数
				this.params.pickerTextOrigin = this.pickerTextOrigin
				
				this.params.carrierProvinceId = e.provinceCode
				 this.params.carrierCityId = e.cityCode
				 this.params.carrierDistrictId = e.areaCode
				 
				 this.params.carrierRegionName =  e.labelArr[2]
				 this.params.carrierCityName =  e.labelArr[1]
				 this.params.carrierProvinceName = e.labelArr[0]
				this.origin_has_input = true
				//previous_has_input参数通知页面是否该在跳转页面后显示
				this.previous_has_input = true
				this.params.previous_has_input = this.previous_has_input
				
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
			getCompanyName(e){
				
					this.params.carrierName = e.target.value
					this.company_name = e.target.value
					//个人用户业务联系人：应默认为承运人
				     if (this.isPerson){
						  this.contact_name  =  this.company_name
						  this.params.carrierContacts = this.company_name
						  //个人用户银行卡持有人：个体司机默认为驾驶员名称
						   uni.setStorageSync("holder_name",this.company_name )
					 }
			},
			bindDateChange: function(e) {
				
							   if(e.currentTarget.dataset.index=="id_begin_date"){
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
			//提供日期picker,勿删！！！
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
			getBusinessLicenseNum(e){
				this.number_front = e.target.value
				this.params.carrierCertNum = e.target.value
				uni.setStorageSync("driver_id_num",this.params.carrierCertNum )
			},
			getRegisteringAddress(e){
			        this.detail_address = e.target.value  
					this.params.carrierAddress = e.target.value
				
			},
			getlegalPersonName(e){
				     this.legal_person = e.target.value
					this.params.legalPersonName = e.target.value
				
				
				this.params.legalPersonCerType = "201" //法人证件（企业）
			},
			
			getlegalPersonID(e){
				
				     this.legal_person_id = e.target.value
					this.params.legalPersonCer = e.target.value
				
				
			},
			getTransportLicense(e){
				this.transport_license_num = e.target.value
				this.params.carrierRoadTransportBusinessLicenseNo = e.target.value
				this.disabled = false
				this.active = true
			},
			getContact(e){
				this.contact_name = e.target.value
				this.params.carrierContacts = e.target.value
				
			},
			getPhoneNumber(e){
				this.tel = e.target.value 
				this.params.carrierContactsPhone = e.target.value
			
			},
			async takephotoLegal(e){
				_self=this
				if(e.currentTarget.dataset.index=="legalPersonCerFront"){
						/**
						 * 法人证件身份证正面*/	
						const resChoosePhoto= await this.$photo({
							count: 1,
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							 sourceType: ['camera','album'], //从摄像头选择
							async success(res) {
							  const tempFilePaths = res.tempFilePaths;
							//ID 识别
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
											
											
											
											 
											 _self.legal_person_id = identify_res.data.data.num
											_self.params.legalPersonCer = _self.legal_person_id
														  																			
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
														
														
														//改变input 显示
														_self.legal_person_id = identify_res.data.data.num							
														//改变params					
														_self.params.legalPersonCer = _self.legal_person_id
							                        })
									
							//#endif													
																									 
													
															
													
													 //upload the img 
													_self.imglegalPersonCerFrontUrl = tempFilePaths[0]
													
													//make the tachar img appear
													  _self.tachar_legal_person_cer_front=true
													  
													  //upload
													  	const resPhoto = await _self.$upload({
													  		url:ossLocation.legal.front,
													  		file_path:tempFilePaths[0]
													  		
													  	})	
													 
													}
						})	
						
							 
				}else if(e.currentTarget.dataset.index=="legalPersonCerReverse"){
										  /**
										   * 法人证件身份证背面*/
										 const resChoosePhoto= await this.$photo({
										 						  async success(res) {
										 						    const tempFilePaths = res.tempFilePaths;
										 							
										 							
										  						  							
										  	  //upload the img 
										  	_self.imglegalPersonCerReverseUrl = tempFilePaths[0]
										  						  								
										  		//make the tachar img appear
										  	_self.tachar_legal_person_cer_reverse=true
										  				
														
														//upload
															const resPhoto = await _self.$upload({
																url:ossLocation.legal.reverse,
																file_path:tempFilePaths[0]
																
															})	
				                              }
						})
							}else if (e.currentTarget.dataset.index=="carrier_id_reverse"){
					  /**
					   * 身份证背面
					   */
					  const resChoosePhoto= await this.$photo({
					  						  async success(res) {
					  						    const tempFilePaths = res.tempFilePaths;
					  							
												
					  							//upload the img
					  							_self.imgBackUrl = tempFilePaths[0]
					  							
					  							//make the tachar img appear
					  							    	_self.tachar_back=true
					  							  
					  							  //upload
					  							  	const resPhoto = await _self.$upload({
					  							  		url:ossLocation.carrier.reverse,
					  							  		file_path:tempFilePaths[0]
					  							  		
					  							  	})	
					  							
					  							}
					  })
				  }
				},
			takephoto(e){
				_self=this
				
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				   sourceType: ['camera','album'], //从摄像头选择
				  async success(res) {
					
					  if(e.currentTarget.dataset.index=="business_license"){
						  if (!_self.isPerson){
							  //business_license photo uploading 企业上传营业执照
							  const tempFilePaths = res.tempFilePaths;
							  //营业执照 识别
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
							  		
							  		var params = _self.params
							  		const identify_res = await _self.$request({
							  			url:"/iscm/identify/businessLicense",
							  			method: "POST",
							  			data:params,
							  			header: {
							  				'content-type': 'application/x-www-form-urlencoded', 
							  			},
							  			
							  		})
							  		
							  		
							  		//input 显示的值
							  		_self.number_front = identify_res.data.data.reg_num 
							  		_self.detail_address = identify_res.data.data.address
							  		_self.legal_person = identify_res.data.data.person
							  		_self.company_name = identify_res.data.data.name
							  		  
							  		//params 的值
							  		_self.params.carrierCertNum = _self.number_front 
							  		_self.params.carrierAddress = _self.detail_address
							  		_self.params.legalPersonName = _self.legal_person 
							  		_self.params.carrierName = _self.company_name
																														 
							  	}
							  })															
							  //#endif
							  
							  //#ifdef APP-PLUS
							  
							  _self.detailImage( res.tempFilePaths[0], async(data)=>{
							                              //base64 图片内容就是  data
							  							
							  							var base64 = data  
							  							var fileUrl
							  							
							  							_self.params.fileUrl = base64 
							  							
							  							var params = _self.params
							  							const identify_res = await _self.$request({
							  								url:"/iscm/identify/businessLicense",
							  								method: "POST",
							  								data:params,
							  								header: {
							  									'content-type': 'application/x-www-form-urlencoded', 
							  								},
							  								
							  							})
							  							
							  							
							  							//改变input 显示
							  							_self.number_front = identify_res.data.data.reg_num
							  							_self.detail_address = identify_res.data.data.address
							  							_self.legal_person = identify_res.data.data.person
							  							_self.company_name = identify_res.data.data.name							
							  							//改变params					
							  							_self.params.carrierCertNum = _self.number_front
							  							_self.params.carrierAddress = _self.detail_address
							  							_self.params.legalPersonName = _self.legal_person 
							  							_self.params.carrierName = _self.company_name
							                          })
							  		
							  //#endif		
																					   
							  														 
							  								
							  							
							  								 //upload the img 
							  								_self.imgBusinessLicenseUrl = tempFilePaths[0]
							  								
							  								//make the tachar img appear
							  								 _self.tachar_business_license=true
							  								 
							  					             
							  											 
							  											 const resPhoto = await _self.$upload({
							  											 	url:ossLocation.carrier.front,
							  											 	file_path:tempFilePaths[0]
							  											 	
							  											 })	    
						  }else{
							  //个人上传身份证正面
							  const tempFilePaths = res.tempFilePaths;
							 //identifying the ID 
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
											
											
											//改变input 显示
																		_self.company_name = identify_res.data.data.name
																		 _self.number_front = identify_res.data.data.num
																	     _self.detail_address = identify_res.data.data.address
																		 //个人用户业务联系人：应默认为承运人
																		 if ( _self.isPerson){
																		  _self.contact_name  =  identify_res.data.data.name
																		 }
											//改变params					
																		_self.params.carrierName = _self.company_name
																		_self.params.carrierCertNum = _self.number_front
																		_self.params.carrierAddress = _self.detail_address
																		//个人用户业务联系人：应默认为承运人
																		if ( _self.isPerson){
																		 _self.params.carrierContacts  = _self.contact_name
																		 //个人用户从业资格证编号：默认为驾驶员身份证编号
																		 uni.setStorageSync("driver_id_num",_self.params.carrierCertNum )
																		 //个人用户银行卡持有人：个体司机默认为驾驶员名称
																		 uni.setStorageSync("holder_name",_self.company_name )
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
																url:"/iscm/identify/idCard",
																method: "POST",
																data:params,
																header: {
																	'content-type': 'application/x-www-form-urlencoded', 
																},
																
															})
															
															
															//改变input 显示
																						_self.company_name = identify_res.data.data.name
																						 _self.number_front = identify_res.data.data.num
																					     _self.detail_address = identify_res.data.data.address
																						 //个人用户业务联系人：应默认为承运人
																						 if ( _self.isPerson){
																						  _self.contact_name  =  identify_res.data.data.name
																						 }
															//改变params					
																						_self.params.carrierName = _self.company_name
																						_self.params.carrierCertNum = _self.number_front
																						_self.params.carrierAddress = _self.company_name
																						//个人用户业务联系人：应默认为承运人
																						if ( _self.isPerson){
																						 _self.params.carrierContacts  = _self.contact_name
																						//个人用户从业资格证编号：默认为驾驶员身份证编号
																						uni.setStorageSync("driver_id_num",_self.params.carrierCertNum )
																						//个人用户银行卡持有人：个体司机默认为驾驶员名称
																						uni.setStorageSync("holder_name",_self.company_name )
																						
																						
																						}
								                        })
										
								//#endif
								
																																		                   
							  								
							  							
							  								 //upload the img 
							  								_self.imgBusinessLicenseUrl = tempFilePaths[0]
							  								
							  								//make the tachar img appear
							  								 _self.tachar_business_license=true
							  								 
							  					             
							  											 
							  											 const resPhoto = await _self.$upload({
							  											 	url:ossLocation.carrier.front,
							  											 	file_path:tempFilePaths[0]
							  											 	
							  											 })	    
						  }
						  
																			 
					                 }else if (e.currentTarget.dataset.index=="transport_license"){
						                             /**
						                              * 道路运输经营许可证
						                              */
													 const tempFilePaths = res.tempFilePaths;
						  								 
						  							
						  								 //upload the img 
						  								_self.imgTransportLicenseUrl = tempFilePaths[0]
						  								
						  								//make the tachar img appear
						  								 _self.tachar_transport_license=true
						  					
											 
											 const resPhoto = await _self.$upload({
											 	url:ossLocation.carrier.road,
											 	file_path:tempFilePaths[0]
											 	
											 })	
					  }
				  			
							
				  },
				 
				 });
			},
			
			cancelLicense(e){
				
				if(e.currentTarget.dataset.index=="legal_person_cer_front"){
					this.imglegalPersonCerFrontUrl ="/static/id_front.jpg",
					setTimeout(()=>{
						uni.showToast({
							title:"删除照片成功，请重新选择",
							icon:"none"
						})
					},500)
					this.tachar_legal_person_cer_front=false
				}else if(e.currentTarget.dataset.index=="legal_person_cer_reverse"){
					this.imglegalPersonCerReverseUrl ="/static/id-back.jpg",
					setTimeout(()=>{
						uni.showToast({
							title:"删除照片成功，请重新选择",
							icon:"none"
						})
					},500)
					this.tachar_legal_person_cer_reverse=false
				}else if(e.currentTarget.dataset.index=="business_license"){
					
					if (this.isPerson){
						this.imgBusinessLicenseUrl = "/static/id_front.jpg"
					}else{
						this.imgBusinessLicenseUrl = "/static/business_license.jpg"
					}
					setTimeout(()=>{
						uni.showToast({
							title:"删除照片成功，请重新选择",
							icon:"none"
						})
					},500)
					this.tachar_business_license=false
				}else if (e.currentTarget.dataset.index=="transport_license"){
					
					this.imgTransportLicenseUrl = "/static/transport_license.jpg"
					
					
					setTimeout(()=>{
						uni.showToast({
							title:"删除照片成功，请重新选择",
							icon:"none"
						})
					},500)
					this.tachar_transport_license=false
				}
				
			},
			cancelBack(){
				this.imgBackUrl ="/static/id-back.jpg"
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_back=false
			},
			
			
		
			backPhoneVerifying(){
				this.params.the_step =1
				this.params.active_one_step= true
				this.params.active_two_step= false
				this.params.active_three_step= false
				this.params.active_four_step= false
				this.params.active_five_step= false
				
				uni.setStorageSync("params_business",this.params)
				this.$emit('register_business_params',this.params)
			},
			formSubmit: function(e) {
				//企业类检查
				if (!this.isPerson){
					/**
					 * 法人身份证正面检查
					 */
					this.params.legalPersonCerFront = uni.getStorageSync("legalPersonCerFront")
					
					if (this.params.legalPersonCerFront == null || this.params.legalPersonCerFront ==""|| this.params.legalPersonCerFront.length<1){
						uni.showToast({
							title:"未提交法人身份证正面, 请提交",
							icon:"none"
						})
					 return	 										
					} 
					
					/**
					 * 法人证件身份证背面
					 */
					this.params.legalPersonCerReverse = uni.getStorageSync("legalPersonCerReverse")
					if (this.params.legalPersonCerReverse == null || this.params.legalPersonCerReverse ==""|| this.params.legalPersonCerReverse.length<1){
						uni.showToast({
							title:"未提交法人证件身份证背面, 请提交",
							icon:"none"
						})
					 return	 										
					} 
					
					
					/**
					 * 道路运输经营许可证
					 */
					
					this.params.carrierRoadTransportBusinessLicense = uni.getStorageSync("carrierRoadTransportBusinessLicense")
					if (this.params.carrierRoadTransportBusinessLicense == null || this.params.carrierRoadTransportBusinessLicense ==""|| this.params.carrierRoadTransportBusinessLicense.length<1){
						uni.showToast({
							title:"未提交道路运输经营许可证, 请提交",
							icon:"none"
						})
					 return	 										
					} 
				}
				
				
				/**
				 * 身份证正面或营业执照检查
				 */
				
				this.params.carrierCardFront = uni.getStorageSync("carrierCardFront")
				if (this.params.carrierCardFront == null || this.params.carrierCardFront==""|| this.params.carrierCardFront.length<1){
					if (this.isPerson){
						uni.showToast({
							title:"未提交身份证正面, 请提交",
							icon:"none"
						})
						
					}else{
						uni.showToast({
							title:"未提交营业执照, 请提交",
							icon:"none"
						})
					}
					
				 return	 										
				}
				
				
				/**
				 * 身份证背面检查
				 */
				this.params.carrierCardReverse = uni.getStorageSync("carrierCardReverse")
				if (this.isPerson){
					if (this.params.carrierCardReverse == null || this.params.carrierCardReverse ==""|| this.params.carrierCardReverse.length<1){
						uni.showToast({
							title:"未提交身份证背面, 请提交",
							icon:"none"
						})
					 return	 										
					}
				}
				
				
				
				//进行承运人姓名检查
				if (this.params.carrierName == null || this.params.carrierName==""|| this.params.carrierName.length<1){
					if (this.isPerson){
						uni.showToast({
							title:"未输入承运人姓名, 请输入",
							icon:"none"
						})
					}else{
						uni.showToast({
							title:"未输入承运企业名称, 请输入",
							icon:"none"
						})
					}
					
				 return	 										
				} 
				
				//进行承运人身份证号检查
				if (this.params.carrierCertNum == null || this.params.carrierCertNum==""|| this.params.carrierCertNum.length<18){
					if (this.isPerson){
						uni.showToast({
							title:"承运人身份证号不正确, 请重输",
							icon:"none"
						})
						this.number_front = ""
					}else{
						uni.showToast({
							title:"承运企业营业执照号码不正确, 请重输",
							icon:"none"
						})
						this.number_front = ""
					}
					
				 return	 										
				} 
				
				//进行所属区域检查
				if (this.params.carrierDistrictId == null || this.params.carrierDistrictId==""|| this.params.carrierDistrictId.length<1){
					uni.showToast({
						title:"未选择所属区域, 请选择",
						icon:"none"
					})
				 return	 										
				} 
				
				//进行详细地址检查
				if (this.params.carrierAddress == null || this.params.carrierAddress==""|| this.params.carrierAddress.length<1){
					if (this.isPerson){
						uni.showToast({
							title:"未输入详细地址, 请输入",
							icon:"none"
						})
					}else{
						uni.showToast({
							title:"未输入注册地址, 请输入",
							icon:"none"
						})
					}
				 return	 										
				} 
				
				
				
				//企业类检查
				if (!this.isPerson){
					//进行法人代表名称检查
					if (this.params.legalPersonName == null || this.params.legalPersonName==""|| this.params.legalPersonName.length<1){
						uni.showToast({
							title:"未输入法人代表名称, 请输入",
							icon:"none"
						})
					 return	 										
					} 
					
					//进行法人代表身份证号码检查
					if (this.params.legalPersonCer == null || this.params.legalPersonCer==""|| this.params.legalPersonCer.length<18){
						uni.showToast({
							title:"法人代表身份证号码不正确, 请重输",
							icon:"none"
						})
					 return	 										
					} 
				}
				
					 //进行运输经营许可证检查
					 if (this.params.carrierRoadTransportBusinessLicenseNo == null || this.params.carrierRoadTransportBusinessLicenseNo ==""|| this.params.carrierRoadTransportBusinessLicenseNo.length<1){
					 	uni.showToast({
					 		title:"未输入运输经营许可证号码, 请输入",
					 		icon:"none"
					 	})
					  return	 										
					 } 
					 
					 //进行业务联系人检查
					 if (this.params.carrierContacts == null || this.params.carrierContacts==""|| this.params.carrierContacts.length<1){
					 	uni.showToast({
					 		title:"未输入业务联系人, 请输入",
					 		icon:"none"
					 	})
					  return	 										
					 }
					 
					
					 this.params.carrierContactsPhone = this.tel
				
										
						               uni.setStorageSync("params_business",this.params)
						                
										this.params.the_step =3
										this.params.active_one_step= true
										this.params.active_two_step= true
										this.params.active_three_step= true
										this.params.active_four_step= false
										this.params.active_five_step= false
										
										this.$emit('register_business_params',this.params)
										
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
   .place_input{
	   color:#777;
	   font-size:30rpx;
	   margin-left:5%; 
	   width:calc(100vw - 300rpx);
   }
   
   .place_got{
	   color:#555;
	   font-size:30rpx;
	   margin-left:5%; 
	   width:calc(100vw - 300rpx);
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
   
   .picker-view{
   	   color:#222;
   	   width:calc(100vw - 380rpx);
   	   margin-left:60rpx;
   	   padding-left:50rpx;
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
   
   .select-zones{
   	   border:1px solid #ddd;
   	   padding-left:0%;
   	   font-size:16rpx;
   	   color:#ddd;
   	   width:400rpx;
   	   .set-zones{
   		   color:#000;
   	   }
   }
  
  .name{
  		 color:#000;
		 width:45%;
  }
  .ref-name{
  		 font-size:18rpx;
  	     color:#999;
		 width:55%;
  }
  .truck-type{
  	  display: flex;
  	  flex-direction: row;
  }
  .cell{
  	   margin-right: 20rpx;
  }
  
  .left-more{
	  margin-left: -50rpx;
  }
</style>
