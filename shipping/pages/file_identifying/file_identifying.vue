<template>
	<view>
		<view class="cu-steps">
			<view class="cu-item text-blue">
				<text class="num right " data-index="1">
				</text>
				身份认证
			</view>
			
		<!-- 	<view class="cu-item " :class="{'text-green':active_two_step,'ordinary':!active_two_step}">
				<text class="num err" data-index="2">
				</text>
				人脸识别
			</view> -->
			
			<view class="cu-item text-blue " >
				<text class="num right" data-index="2">
				</text>
			    资料认证
			</view>
			
		</view>
		
		<view class="current-state">
			<text >资料认证</text>
		</view>
		
	<!-- 	take ID photo section -->
		<view class="take-photo-id" v-if="photo_id">
			<view  class="notes">
				
					请上传相关证件照片
				
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">驾驶证照片 <text class="star">*</text></view>
						     <view class="ref-name" @click="uploadDriverLicense">
								<image  :src="imgDriverLicenseUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelDriverLicense"
								 class="tachar" v-if="tachar_driver_license"></image>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">道路运输证照片 <text class="star">*</text></view>
						     <view class="ref-name" @click="uploadTransportLicense">
								<image  :src="imgTransportLicenseUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelTransportLicense"
								 class="tachar" v-if="tachar_transport_license"></image>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">车辆类型 <text class="star">*</text></view>
						     <view class="ref-name">
								<radio-group class="truck-type" @change="radioCarChange">
								                <label class="cell" v-for="(item, index) in car_items" 
														:key="item.value">
								                    <view>
								                        <radio :value="item.value" :checked="index === energy_current" />
								                    </view>
								                    <view>{{item.name}}</view>
								                </label>
								            </radio-group>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">车牌颜色 <text class="star">*</text></view>
						     <view class="ref-name" >
							      <xfl-select 
							                  :list="list"
							                  :clearable="false"
							                  :showItemNum="6" 
							                  :listShow="false"
							                  :isCanInput="true"  
							                  :style_Container="'height: 50rpx; font-size: 16rpx;'"
							                  :placeholder = "'选择颜色'"
							                 @change ="getPlateColor"
							                  :selectHideType="'hideAll'"
							              >
							              </xfl-select>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">行驶证主副页 <text class="star">*</text></view>
						     <view class="ref-name" @click="uploadDrivingCertificate">
								<image  
								:src="imgDrivingCertificateUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelDrivingCertificate"
								 class="tachar" v-if="tachar_driving_certificate"></image>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">人车合照 </view>
						     <view class="ref-name" @click="uploadManCarPhoto">
								<image 
								:src="imgManCarPhotoUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelManCar"
								 class="tachar" v-if="tachar_man_car"></image>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">车牌号码 </view>
						     <view class="ref-name">
								<input type="text" placeholder="请输入车牌号码" @input ="getCarNo">
							 </view>
			</view>
			
			<view class="top-line">
						     <view class="text-name">备注说明 </view>
						     <view class="note-textarea">
								  <textarea @blur="bindTextAreaBlur"  
								  placeholder="请输入您认证过程中的特殊说明"
								   placeholder-style="font-size:20rpx; margin-left:10rpx;margin-top:10rpx;font-weight:200;"/>
							 </view>
			</view>
			
			
			
			<view>
				<button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
										  :disabled="disabled"  @click="goFileIdentifying">确认提交</button> 
									
			</view>
		</view>
		
		<input-id v-if="!photo_id"></input-id>
		
	<!-- 	buttons section -->
		
		
		<view>
			<button plain class="next-btn  line-blue " type="primary" 
									   @click="">暂不认证</button> 
								
		</view>
		<view class="center">
			<view class="change-identity">
				<text class="wrong-identity">角色选错了？</text>
				<text @click="goChangeIdentity">变更角色</text>
			</view>
			
			<view class="red">
				<view @click="callService"  >
					<image src="../../static/after-sales-service.png" class="after-sales-service" mode=""></image>
					<text>
						联系客服
					</text>
					
				</view>
				<view>|</view>
				<view>
					<image src="../../static/question.png" class="after-sales-service" mode=""></image>
					<text>认证遇到问题</text>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import  inputId from "@/components/register/input_id.vue"
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	var _self;
	
	export default {
		data() {
			return {
				disabled:true,
				active:false,
				active_two_step:false,
				active_three_step:false,
				imgDriverLicenseUrl:"/static/camera2.png",
				imgTransportLicenseUrl:"/static/camera2.png",
				imgDrivingCertificateUrl:"/static/camera2.png",
				imgManCarPhotoUrl:"/static/camera2.png",
				tachar_driver_license:false,
				tachar_transport_license:false,
				tachar_driving_certificate:false,
				tachar_man_car:false,
				photo_id:true,
				
				car_no:"",
				plate_color:"",
				list: [ 
				               '黄牌',
				               '蓝牌',
				               '绿牌',
				               '黄绿牌',
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
				           energy_current: 0
			};
		},
		components:{
			inputId,
			xflSelect
		},
		methods:{
			radioCarChange(e){
				
				
			},
			goInputID(){
				this.photo_id = false
			},
			goPhotoID(){
				this.photo_id = true
			},
			
			bindTextAreaBlur (e) {
			            console.log(e.detail.value)
			},
			//get the result from the dropdown
			getPlateColor(e){
				
				this.plate_color = e.newVal
				
			},
			
			getCarNo(e){
				
				this.car_no = e.detail.value
				
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
			
			uploadTransportLicense(){
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
								_self.imgTransportLicenseUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_transport_license=true
										
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
			
			uploadDrivingCertificate(){
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
								_self.imgDrivingCertificateUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_driving_certificate=true
										
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
			
			
		
			uploadManCarPhoto(){
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
								_self.imgManCarPhotoUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_man_car=true
										
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
			
			
			cancelDriverLicense(){
				this.imgDriverLicenseUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_license=false
			},
			
			cancelTransportLicense(){
				this.imgTransportLicenseUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_transport_license=false
			},
			
			cancelDrivingCertificate(){
				this.imgDrivingCertificateUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driving_certificate = false
			},
			
			cancelManCar(){
				this.imgManCarPhotoUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_man_car = false
			},
			
			goChangeIdentity(){
				uni.navigateTo({
					url:"/pages/change_identity/change_identity"
				})
			},
			callService(){
				var Intent = plus.android.importClass("android.content.Intent");
				   var Uri = plus.android.importClass("android.net.Uri");  
				   // 获取主Activity对象的实例  
				   var main = plus.android.runtimeMainActivity();  
				   // 创建Intent  
				   var uri = Uri.parse("13783712192"); // 这里可修改电话号码  
				   var call = new Intent("android.intent.action.CALL",uri);  
				   // 调用startActivity方法拨打电话  
				   main.startActivity( call );  
			},
			
			goFileIdentifying(){
				uni.navigateTo({
					url:"/pages/file_identifying/file_identifying"
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
   .center{
   	   margin-top:30rpx;
   	   text-align: center;
   	   color:#999;
   	   .change-identity{
   		   color: #0081FF;
   		   font-weight: 700;
   		   .wrong-identity{
   			    color:#999;
   				 font-weight: 400;
   		   }
   	   }
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
  
   .red{
	   color: #f00;
	   display: flex;
	   flex-direction: row;
	   justify-content: center;
	   view{
		   margin-left: 10rpx;
	   }
   }
   
   .after-sales-service{
	   width:20rpx;
	   height:20rpx ;
	   margin-right:10rpx ;
   }
</style>
