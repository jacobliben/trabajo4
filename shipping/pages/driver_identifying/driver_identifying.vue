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
			
			<view class="cu-item " :class="{'text-green':active_three_step,'ordinary':!active_three_step}">
				<text class="num err" data-index="2">
				</text>
			    资料认证
			</view>
			
		</view>
		
		<view class="current-state">
			<text >拍摄身份证</text>
			<text class="hand-input" v-if="photo_id" @click="goInputID">手动输入身份证号 ></text>
			<text class="hand-input" v-if="!photo_id" @click="goPhotoID">去拍身份证照片 ></text>
		</view>
		
	<!-- 	take ID photo section -->
		<view class="take-photo-id" v-if="photo_id">
			<view  class="notes">
				
					拍摄身份证正反面，注意反光，保证身份证的内容清晰
				
			</view>
			
			<view class="two-photos">
				
				<view class="id-front" @click="takephotoFront">
					<text class="title">拍摄身份证正面</text>
					<image :src="imgFrontsUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelFront"
					 class="tachar" v-if="tachar_front"></image>
				</view>
				
				<view class="id-front" @click="takephotoBack">
					<text class="title">拍摄身份证反面</text>
					<image :src="imgBackUrl" mode="aspectFit"></image>
					<image src="/static/tachar.png" mode="aspectFit" @click="cancelBack"
					 class="tachar" v-if="tachar_back"></image>
				</view>
			</view>
			
			<view>
				<button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
										  :disabled="disabled"  @click="goFileIdentifying">下一步</button> 
									
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
				<view @click="callService">
					<image src="../../static/after-sales-service.svg" class="after-sales-service" mode=""></image>
					<text>
						联系客服
					</text>
					
				</view>
				<view>|</view>
				<view>
					<image src="../../static/question.svg" class="after-sales-service" mode=""></image>
					<text>认证遇到问题</text>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import  inputId from "@/components/register/input_id.vue"
	
	var _self;
	
	export default {
		data() {
			return {
				disabled:true,
				active:false,
				active_two_step:false,
				active_three_step:false,
				imgFrontsUrl:"/static/id-front.png",
				imgBackUrl:"/static/id-front.png",
				tachar_front:false,
				tachar_back:false,
				photo_id:true,
			};
		},
		components:{
			inputId
		},
		methods:{
			goInputID(){
				this.photo_id = false
			},
			goPhotoID(){
				this.photo_id = true
			},
			
			takephotoFront(){
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
								_self.imgFrontsUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_front=true
										
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
			takephotoBack(){
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
								_self.imgBackUrl = tempFilePaths[0]
								
								//make the tachar img appear
								    	_self.tachar_back=true
										
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
			cancelFront(){
				this.imgFrontsUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_front=false
			},
			cancelBack(){
				this.imgBackUrl ="/static/id-front.png",
				setTimeout(()=>{
					uni.showToast({
						title:"删除照片成功，请重新选择",
						icon:"none"
					})
				},500)
				this.tachar_back=false
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
				   var uri = Uri.parse("051687739070"); // 这里可修改电话号码  
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
   .two-photos{
	   width:90%;
	   margin-left:5%;
	   display: flex;
	   flex-direction: row;
	   justify-content: space-between;
	   padding-top: 10%;
	  
	   .id-front{
		   width:45%;
		   height: 400rpx;
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
				height:70%;
			}
		  .tachar{
		  			  position: absolute;
		  			  width:60rpx;
		  			  height: 60rpx;
					  
		  			  left:80%;
		  		  }
	   }
	  
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
