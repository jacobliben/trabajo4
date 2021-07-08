<!-- <template>
	<view>
		<form @submit="formSubmit" >
		<view class="current-state">
			<text >拍摄驾驶证件</text>
			<text class="red-isterisk">*</text>
		</view>
			
			<view class="two-photos">
				
				<view class="id-front" @click="takephotoDriverLicense">
					<text class="title">拍摄驾驶证主页</text>
					<image :src="imgDriverLicenseUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelDriverLicense"
					 class="tachar" v-if="tachar_driver_license"></image>
				</view>
				
				<view class="id-front" @click="takephotoDriverCertificate">
					<text class="title">拍摄驾驶员从业资格证</text>
					<image :src="imgDriverCertificateUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelDriverCertificate"
					 class="tachar" v-if="tachar_driver_certificate"></image>
				</view>
			</view>
			
			
			<view class="one-line" >
				<text class="nombre">准驾车型<text class="red-isterisk">*</text></text>
				<view class="ref-name" >
				     <xfl-select 
				                 :list="list"
				                 :clearable="false"
				                 :showItemNum="6" 
				                 :listShow="false"
				                 :isCanInput="true"  
				                 :style_Container="'height: 50rpx; font-size: 16rpx;'"
				                 :placeholder = "'请选择准驾车型'"
				                @change ="getApprovedVehicle"
				                 :selectHideType="'hideAll'"
				             >
				             </xfl-select>
				</view>
			</view>
			<view class="one-line" >
				<text class="nombre">从业资格号<text class="red-isterisk">*</text></text>
				<input type="idcard"  name="idcard" maxlength="18"
				 placeholder="请输入从业资格号码" placeholder-style="margin-left:5%;font-size:16rpx;color:#999;"
				 @input="getDriverCertificateNum">
			
			</view>
			
			
			<view class="one-line" >
				<text class="nombre">资格证开始日期</text>
				<view style="border:1px solid #ddd;padding-left:20rpx; font-size:20rpx;color:#999;width:400rpx;height: 50rpx;">
					 <picker mode="date" :value="date"  :end="endDate" @change="bindDateChange">
					      <view >{{date}}</view>
					 </picker>
				</view>
			</view>
			
			<view class="one-line" >
				<text class="nombre">资格证失效日期</text>
				<view style="border:1px solid #ddd;padding-left:20rpx; font-size:20rpx;color:#999;width:400rpx;height: 50rpx;">
					 <picker mode="date" :value="date"  :end="endDate" @change="bindDateChange">
					      <view >{{date}}</view>
					 </picker>
				</view>
			</view>
			
			<view class="btn-row">
				<button class="next-btn" type="primary"
				   @click="backPersonBusiness">上一步</button>
				<button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
										  :disabled="disabled"  form-type="submit">下一步</button> 
									
			</view>
		
	</form>
	
		
	</view>
</template>

<script>
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	var _self;
	
	export default {
		data() {
			 const currentDate = this.getDate({
			            format: true
			        })
			return {
				tel:"1111",
				disabled:false,
				active:true,
				active_two_step:false,
				active_three_step:false,
				imgDriverLicenseUrl:"/static/id-front.png",
				imgDriverCertificateUrl:"/static/id-front.png",
				tachar_driver_license:false,
				tachar_driver_certificate:false,
				date: currentDate,
				list: [
				               'A1',
				               'A2',
				               'A3',
				               'B1',
				               'B2',
							   'C1',
				               'C2',
				               'C3',
							    'C4',
				            ],
				params:{
					active_one_step:true,
					active_two_step:true,
					active_three_step:true,
					active_four_step:false,
					the_step:3,
					approved_vehicle:"",
					driver_certificate_num:"",
					
					
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
			this.zone = uni.getStorageSync("zone")
			this.tel = uni.getStorageSync("phone_verifying_cellphone")
		},
		methods:{
			
			 bindDateChange: function(e) {
			            this.date = e.target.value
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
			takephotoDriverLicense(){
				_self=this
				 
				 uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								header:{
									Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ",
								},
				  success: function (res) {
				   const tempFilePaths = res.tempFilePaths;
								 console.log(tempFilePaths,"876")
								 
								 //preview the photos
								 uni.previewImage({
								             urls: res.tempFilePaths,
								             longPressActions: {
								                 itemList: ['发送给朋友', '保存图片', '收藏'],
								                 success: function(data) {
								                     console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								 					
								                 },
								                 fail: function(err) {
								                     console.log(err.errMsg);
								                 }
								             }
								         });
							
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
			takephotoDriverCertificate(){
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
								 uni.previewImage({
								             urls: res.tempFilePaths,
								             longPressActions: {
								                 itemList: ['发送给朋友', '保存图片', '收藏'],
								                 success: function(data) {
								                     console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								 					
								                 },
								                 fail: function(err) {
								                     console.log(err.errMsg);
								                 }
								             }
								         });
								
								 //upload the img 
								_self.imgDriverCertificateUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_driver_certificate=true
										
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
				this.imgDriverLicenseUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_license=false
			},
			cancelDriverCertificate(){
				this.imgDriverCertificateUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_driver_certificate=false
			},
			
			
			getApprovedVehicle(e){
				
				this.params.approved_vehicle = e.newVal
			},
			getDriverCertificateNum(e){
				this.params.driver_certificate_num = e.target.value
			},
			backPersonBusiness(){
				this.params.the_step =2
				this.params.active_three_step= false
				this.$emit('register_license_params',this.params)
			},
			
			formSubmit: function(e) {
										console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
						                //定义表单规则
						  
										
										//进行准驾车型检查
										if (this.params.vehicleRoadcertNo == null || this.params.vehicleRoadcertNo ==""|| this.params.vehicleRoadcertNo.length<1){
											uni.showToast({
												title:"未输入准驾车型, 请输入",
												icon:"none"
											})
										 return	 										
										} 
										
						                this.params.active_four_step=true
										this.params.the_step =4
										this.$emit('register_license_params',this.params)
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
				width:80%;
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
   
   .one-line{
	
   	margin-top:10rpx;
   	display: flex;
   	flex-direction: row;
   	margin-left:5%;
   	.nombre{
   		margin-right:1vw;
   		font-size:20rpx;
   		width:30%;
		
   	}
   	input{
   		border:1rpx solid #ddd;
		width:400rpx;
   	}
   	
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
 --> -->