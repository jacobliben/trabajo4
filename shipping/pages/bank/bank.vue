<template>
	<view>
		
		
		<view class="current-state">
			<text >银行卡资料认证</text>
		</view>
       <form @submit="formSubmit" >
		<view >
			
			  
			  <view class="cu-form-group">
			  			     <view class="name">银行卡持有人 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入银行卡持有人姓名" :value="holder_name" focus @input ="getHolderName">
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">银行行别 <text class="star">*</text></view>
			  			     <view >
								 <picker @change="bindBankClassPickerChange"  :value="bank_class_index" :range="bank_list">
								          <view class="picker-view text-lg">{{bank_list[bank_class_index]}}</view>
								 </picker>
			  				 </view>
			  </view>
			  
			  
			  
			
			 <!-- <view class="cu-form-group">
			   			     <view class="name">银行名称 <text class="star">*</text></view>
			   			     <view >
			   				      <picker @change="bindPickerChange"   :value="index" :range="array">
			   				             <view class="picker-view text-lg">{{array[index]}}</view>
			   				    </picker>
			   				    
			   				 </view>
			   </view> -->
			   <view class="cu-form-group">
			   			     <view class="name">银行账号 <text class="star">*</text></view>
			   			     <view class="ref-name">
			   					<input type="text" maxlength="25" placeholder="请输入银行账号" :value="bank_account"  @input ="getBankAccount">
			   				 </view>
			   </view>
			   
			   <!-- #ifndef MP-WEIXIN -->
			   <view class="cu-form-group">
			    			     <view class="name">银行名称<text class="star">*</text></view>
			    			     <view class="ref-name">
			    				      <multiselect class="picker-view text-lg" v-model="value" :value="bank_name" :options="options" track-by="dictLabel" label="dictLabel" @input ="getBank" :placeholder="bank_placeholder">
										  <template slot="singleLabel" slot-scope="{ option }" > {{ option.dictLabel }}</template>
										  
									  </multiselect>
			    				 </view>
			    </view>
			    <!-- #endif -->
			 
			  
			 
			  <view class="cu-form-group">
			  			     <view class="name">银行卡联系方式<text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<input type="number" name="cellphone" :value = "bank_holder_tel"
								 maxlength="11" placeholder="请输入银行卡联系方式" @input ="getBankContact">
			  				 </view>
			  </view>
			  
			 
			
			<!-- <view class="top-line">
						     <view class="text-name">备注说明 </view>
						     <view class="note-textarea">
								  <textarea @blur="bindTextAreaBlur"  
								  placeholder="请输入您认证过程中的特殊说明"
								   placeholder-style="font-size:20rpx; margin-left:10rpx;margin-top:10rpx;font-weight:200;"/>
							 </view>
			</view> -->
			
			
			
			<view class="btn-row">
				<button class="next-btn bg-gradual-green round"
				   @click="backLicense()">上一步</button>
				<button class="next-btn round"  :class="{'bg-gradual-green':active}"
							  :disabled="disabled"
				form-type="submit">确认提交</button> 
									
			</view>
		</view>
	
		</form>
	</view>
</template>

<script>
	
	import xflSelect from '@/components/xfl-select/xfl-select.vue';//使用宽松式的下拉框
	import {ossLocation} from "@/util/pattern.js"
	import Multiselect from '@/node_modules/vue-multiselect/src/Multiselect.vue' 
	var _self;
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	
	export default {
		data() {
			return {
				
				//是否个人
				isPerson: false,
				disabled:true,
				active:false,
				//显示银行卡联系人电话
				bank_holder_tel:"",
				holder_name:"",
				bank_name:"",
				bank_placeholder:"请输入银行名称",
				bank_account:"",
				array: [],
				index: 0,
				params:{
					the_step:5,
					active_one_step:true,
					active_two_step:true,
					active_three_step:true,
					active_four_step:true,
					active_five_step:true,
					carrierBankcardCategory : 1,
				},
				params_bank:{},
				form:{},
				bank_list: [ ],
				bank_class_index: 0,
				list: [ ],
				list_code: [ ],
				
				value: null,
				options: []
			};
		},
		components:{
			Multiselect,
			 
		},
		created(){
			this.isPerson = uni.getStorageSync("in_personal_registering")
			
			
			//用于跳转后回显
			this.params_bank = uni.getStorageSync("params_bank")
			
			//获取银行名称列表
			this.getBankName()
			  // 承运人类型change
			 this.userTypeChange();
			
			
			
			//如果之前已经有params输入，就直接用storage里的params,否则this.params 为{}
			this.params = this.params_bank||{}
			if (this.params_bank.bankcardAccount){
				this.disabled = false
				this.active = true
			}
		}, 
		mounted() {
			
			 
			 //跳转时显示
			 if (this.isPerson){
			 	this.holder_name = uni.getStorageSync("holder_name")
			 	this.params.holderName = this.holder_name
			 	
			 	this.bank_holder_tel = uni.getStorageSync("holder_phone")
			 	this.params.holderPhone = this.bank_holder_tel
			 }
			 
			 this.bank_placeholder = this.params_bank.bank_name ||"请输入银行名称"
			
			 this.bank_account = this.params_bank.bankcardAccount ||""
			 
			
		},
		
		methods:{
			
			bindBankClassPickerChange(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.bank_class_index = e.target.value
						this.params.carrierBankcardCategory = 1
			        },
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
						
						this.params.bankCode=this.list_code[this.index-1]
			 },
			getHolderName(e){
				this.holder_name = e.target.value
				this.params.holderName = e.target.value
				uni.setStorageSync("holder_name",this.holder_name)
			},
			//get the bank name list
			async getBankName(){
				//银行名称
				const res = await this.$getRegistDicts("bank_code")
				
				this.array = res.data.data.map(e =>e=e.dictLabel)
				this.array.unshift("请选择银行名称")
				
				this.options = res.data.data
				this.list_code= res.data.data.map(e =>e=e.dictValue)
				
				//this.list = res.data.data
				 // 银行卡类别
				const resBankCategory = await this.$getRegistDicts("carrier_bankcard_category")
				
				this.bank_list = resBankCategory.data.data.map(e =>e=e.dictLabel)
				
				//跳转时显示
				const bankCode = this.params_bank.bankCode ||""
				 this.index = this.list_code.findIndex(value=>value == bankCode) +1
				 
			},
			
			
			
			getBankType(e){
				
				this.params.carrierBankcardCategory = 1
				
			},
			
			getBankList(e){
				
				this.params.bankCode = e.newVal.dictLabel
				
			},
			
			getBankAccount(e){
				this.bank_account = e.detail.value
				this.params.bankcardAccount = e.detail.value
				this.disabled = false
				this.active = true
				
				if (this.bank_account.substr(0,6) == "436742"
				||this.bank_account.substr(0,6) == "436745"
				||this.bank_account.substr(0,6) == "622280"
				){
					this.bank_name = "建设银行"
				}
				
			},
			getBank(e){
				this.bank_name = e.dictLabel
				this.params.bankCode = e.dictValue
				this.params.bank_name = e.dictLabel
				
			},
			getBankContact(e){
				this.bank_holder_tel = e.detail.value 
				this.params.holderPhone = e.detail.value
				uni.setStorageSync("holder_phone",this.bank_holder_tel)
			},
			
			// 承运人类型change
			    userTypeChange() {
			      //企业
			      if(!this.isPerson){//企业类型
				  this.params.carrierType = 2;//企业承运人
			        this.params.carrierCertificateType = "102";// 企业类型
			        this.params.legalPersonCerType ="201"; //法人证件
			        this.params.driverCertificateType = "201";//驾驶员证件类型
			      }else{
					  this.params.carrierType = 1
			        this.params.carrierCertificateType = "201"
					
					 this.params.driverIdNumber = this.params.carrierCertNum; // 司机身份证号 = 承运人号码
					this.params.driverPhone = this.params.phonenumber;       // 司机手机号 = 承运人手机号
					this.params.userName = this.params.phonenumber;          // 用户名 = 承运人手机号
					this.params.driverName = this.params.carrierName;        // 司机名称 = 承运人名称
					this.params.idcardFront = this.params.carrierCardFront;  // 司机身份信息 = 承运人信息
					this.params.idcardBack = this.params.carrierCardReverse; // 司机身份信息 = 承运人信息            
			      }
				  
			    },
			
			async formSubmit(e){
						console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
						//定义表单规则
						var rule = [
						                       {name:"cellphone",
												checkType : "phoneno",
						                        
						                          errorMsg:"电话号码格式有误"
						                       },
						                     
						];
						//进行表单检查
						
							var formData = e.detail.value;
							var checkRes = graceChecker.check(formData, rule);
							if(checkRes){
								
							    uni.showToast({title:"验证通过,正在注册中!", icon:"none"});
								
							}else{
								
							    uni.showToast({ title: graceChecker.error, icon: "none" });
								 this.bank_holder_tel = ""
								return
							}
							
						//进行银行卡持有人检查
										if (this.params.holderName == null || this.params.holderName ==""|| this.params.holderName.length<1){
											uni.showToast({
												title:"未输入银行卡持有人, 请输入",
												icon:"none"
											})
										 return	 										
										}  
						//进行银行行别检查
										if (this.params.carrierBankcardCategory == null || this.params.carrierBankcardCategory ==""|| this.params.carrierBankcardCategory.length<1){
											this.params.carrierBankcardCategory = 1 										
										}				
										
						
						//进行银行名称检查
										if (this.params.bankCode == null || this.params.bankCode ==""|| this.params.bankCode.length<1){
											uni.showToast({
																							title:"未选择银行名称, 请选择",
																							icon:"none"
																						})
											return										
										}				
						
						//进行银行账号检查
										if (this.params.bankcardAccount == null || this.params.bankcardAccount ==""|| this.params.bankcardAccount.length<1){
											uni.showToast({
																							title:"未输入银行账号, 请输入",
																							icon:"none"
																						})
											return										
										}	
						uni.setStorageSync("params_bank",this.params)
			           // this.$emit('register_bank_params',this.params)	
					   
						
						
						
						var params_phone = uni.getStorageSync("params_phone")
						var params_business = uni.getStorageSync("params_business")
						var params_vehicle = uni.getStorageSync("params_vehicle")
						var params_license = uni.getStorageSync("params_license")
						var params_bank = uni.getStorageSync("params_bank")
						 var params_photos = uni.getStorageSync("params_photos")
						
						this.form ={...params_phone,...params_business,...params_photos,
						...params_vehicle,...params_license,...params_bank,}
						
						if(!this.isPerson){//企业类型
						this.form.carrierType = 2;//企业承运人
						  this.form.carrierCertificateType = "102";// 企业类型
						  this.form.legalPersonCerType ="201"; //法人证件
						  this.form.driverCertificateType = "201";//驾驶员证件类型
						}else{
                          this.form.carrierType = 1
						  this.form.carrierCertificateType = "201"
						this.form.driverIdNumber = this.form.carrierCertNum; // 司机身份证号 = 承运人号码
						this.form.driverPhone = this.form.phonenumber;       // 司机手机号 = 承运人手机号
						this.form.userName = this.form.phonenumber;          // 用户名 = 承运人手机号
						this.form.driverName = this.form.carrierName;        // 司机名称 = 承运人名称
						this.form.idcardFront = this.form.carrierCardFront;  // 司机身份信息 = 承运人信息
						this.form.idcardBack = this.form.carrierCardReverse; // 司机身份信息 = 承运人信息            					
											
						}
						
						//图片提交
						this.form.legalPersonCerFront = uni.getStorageSync("legalPersonCerFront")
						this.form.legalPersonCerReverse = uni.getStorageSync("legalPersonCerReverse")
						this.form.carrierCardFront = uni.getStorageSync("carrierCardFront")
						this.form.carrierRoadTransportBusinessLicense = uni.getStorageSync("carrierRoadTransportBusinessLicense")
						this.form.vehicleLicensePhotoFirst = uni.getStorageSync("vehicleLicensePhotoFirst")
						this.form.vehicleLicensePhotoSecond = uni.getStorageSync("vehicleLicensePhotoSecond")
						this.form.vehicleRoadcertPhoto = uni.getStorageSync("vehicleRoadcertPhoto")
						this.form.trailerLicensePhotoFirst = uni.getStorageSync("trailerLicensePhotoFirst")
						this.form.peopleVehiclePhoto = uni.getStorageSync("peopleVehiclePhoto")
						this.form.idcardFront = uni.getStorageSync("idcardFront")
						this.form.idcardBack = uni.getStorageSync("idcardBack")
						this.form.drivingLicensePhotoFirst = uni.getStorageSync("drivingLicensePhotoFirst")
						this.form.qualificationCertPhoto = uni.getStorageSync("qualificationCertPhoto")
						this.form.carrierCardReverse = uni.getStorageSync("carrierCardReverse")
						
						
						var form = this.form
						console.log( form, "form")
						form = JSON.stringify(form)
						
					
					   //#ifdef APP-PLUS
					   var xhr = new plus.net.XMLHttpRequest()
					   //正式库,危险！！！
					  // xhr.open('POST',' https://wl.xcmgzhilian.com/prod-api/registCarrier')
					  //半测试版
					   xhr.open('POST',' http://116.62.172.131:88/stage-api/registCarrier')
					   //测试库
					  //xhr.open('POST',' http://10.22.2.138:8080/registCarrier')
					   // xhr.open('POST','http://10.22.0.136:8080/registCarrier')
					   xhr.setRequestHeader('Content-Type','application/json')
					   xhr.send(form)
					   
					   xhr.onreadystatechange = function(){
						   //this.mm = xhr
						   if (xhr.status!=200){
							   uni.showToast({
							   	title:"信息不完整,请修改",
								icon:"none",
							   })
							   
							   return
						   }else{
							var data_json = JSON.parse(xhr.responseText)
							if (data_json.code!= 200){
															 uni.showToast({
															 	title:data_json.msg,
															 	icon:"none",
															 }) 
							}else{
															  uni.showToast({
															  	title:"注册成功！"
															  })
															  
															 uni.reLaunch({
															 		url:"/pages/finish_registering/finish_registering"
															 	}) 
															  
							}
							
						   }
					   }
					   //#endif
                      
					  
					  //#ifdef H5
					   const resRegister= await this.$registCarrier(form)
					 
					  //#endif
					  
			},
			
			backLicense(){
				this.params.the_step =4
				this.params.active_one_step= true
				this.params.active_two_step= true
				this.params.active_three_step= true
				this.params.active_four_step= true
				this.params.active_five_step= false
				
				uni.setStorageSync("params_bank",this.params)
				this.$emit('register_bank_params',this.params)
			},
			
			
		
		}
		
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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
   .notes{
	   width:100%;
	   padding: 5%;
	   border-bottom:1rpx solid #ddd;
	   
   }
   .top-line{
   		 border-top:1rpx solid #d5d5d8;
   }
   
   .flex-bar{
   		 display: flex;
   		 justify-content: space-between;
   		 padding-left: 5%;
   		 padding-right: 5%;;
   		 padding-top:15rpx;
   		 padding-bottom:15rpx;
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
  
  .cu-form-group picker::after {
      display: none;  
  } 
  
</style>
