<template>
	<view>
	   <view class="take-photo-id" >
		   
			<view class="top-line flex-bar">
						     <view class="name">车牌号码 <text class="star">*</text></view>
						     <view class="ref-name">
								<view>{{received_info.vehicle_no}}</view>
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
						     <view class="name">牵引车道路运输证 <text class="star">*</text></view>
						     <view class="ref-name" @click="uploadTractorTrailerDrivingCertificate">
								<image  :src="imgTractorTrailerDrivingCertificateUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelTractorTrailerDrivingCertificate"
								 class="tachar" v-if="tachar_tractor_trailer_driving_certificate"></image>
							 </view>
			</view>
			
			<view class="top-line flex-bar">
						     <view class="name">牵引车行驶证主副页 <text class="star">*</text></view>
						     <view class="ref-name" @click="uploadTractorDrivingCertificate">
								<image  
								:src="imgTractorDrivingCertificateUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelTractorDrivingCertificate"
								 class="tachar" v-if="tachar_tractor_driving_certificate"></image>
							 </view>
			</view>
			
			
			<view class="top-line flex-bar">
						     <view class="name">挂车行驶证主副页 <text class="star">*</text></view>
						     <view class="ref-name" @click="uploadTrailerDrivingCertificate">
								<image  :src="imgTrailerDrivingCertificateUrl" class="img" mode=""></image>
								<image src="/static/tachar.png" mode="aspectFit" @click="cancelTrailerDrivingCertificate"
								 class="tachar" v-if="tachar_trailer_driving_certificate"></image>
							 </view>
			</view>
					
			<view class="top-line">
						     <view class="text-name">备注说明 </view>
						     <view class="note-textarea">
								  <textarea @blur="bindTextAreaBlur"  
								  placeholder="请输入备注信息"
								   placeholder-style="font-size:20rpx; margin-left:10rpx;margin-top:10rpx;font-weight:200;"/>
							 </view>
			</view>
			
			
			
			<view>
				<button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
										  :disabled="disabled"  @click="goFileIdentifying">保存修改</button> 
									
			</view>
			
		</view>
		
		
		
	<!-- 	buttons section -->
		<view>
			<button plain class="next-btn  line-blue " type="primary" 
									   @click="">删除</button> 
								
		</view>
		
		
		<view class="center">
			
			<view class="red">
				<view @click="callService">
					<image src="../../static/after-sales-service.svg" class="after-sales-service" mode=""></image>
					<text>
						联系客服
					</text>
					
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
				imgTractorTrailerDrivingCertificateUrl:"/static/camera2.png",
				imgTrailerDrivingCertificateUrl:"/static/camera2.png",
				imgTractorDrivingCertificateUrl:"/static/camera2.png",
				imgManCarPhotoUrl:"/static/camera2.png",
				tachar_tractor_trailer_driving_certificate:false,
				tachar_trailer_driving_certificate:false,
				tachar_tractor_driving_certificate:false,
				
				car_no:"",
				plate_color:"",
				list: [ 
				                '黄牌',
				                '蓝牌',
				                '绿牌',
				                '黄绿牌',
				               
				            ],
				
				received_info:{},
							
				car_items: [{
				                    value: 'ordinary',
				                    name: '普通货车'
				                },
				                {
				                    value: 'semi-camion',
				                    name: '半挂车',
				                  
				                },
				                
				            ],
							energy_current: 1,
				            current: 0,
			};
		},
		components:{
			inputId,
			xflSelect
		},
		
		onLoad(options){
		    this.received_info = uni.getStorageSync("vehicle_item")
			
			
		},
		
		methods:{
			
			radioCarChange(e){
				
				
			},
			
			bindTextAreaBlur (e) {
			         
			},
			//get the result from the dropdown
			getPlateColor(e){
				
				this.plate_color = e.newVal
				
			},
			
			getCarNo(e){
				this.car_no = e.detail.value
			},
			
			uploadTractorTrailerDrivingCertificate(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								 
								
							
								 //upload the img 
								_self.imgTractorTrailerDrivingCertificateUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_tractor_trailer_driving_certificate=true
										
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
								 
								
							
				  },
				  
				 });
			},
			
			uploadTrailerDrivingCertificate(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								
							
								
								 //upload the img 
								_self.imgTrailerDrivingCertificateUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_trailer_driving_certificate=true
										
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
								 
								
							
				  },
				  
				 });
			},
			
			uploadTractorDrivingCertificate(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								
								 
							
								 //upload the img 
								_self.imgTractorDrivingCertificateUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_tractor_driving_certificate=true
										
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
								 
								
							
				  },
				  
				 });
			},
			
			
		
			
			
			
			cancelTractorTrailerDrivingCertificate(){
				this.imgTractorTrailerDrivingCertificateUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_tractor_trailer_driving_certificate=false
			},
			
			cancelTrailerDrivingCertificate(){
				this.imgTrailerDrivingCertificateUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_trailer_driving_certificate=false
			},
			
			cancelTractorDrivingCertificate(){
				this.imgTractorDrivingCertificateUrl ="/static/camera2.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_tractor_driving_certificate = false
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
