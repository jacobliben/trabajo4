 <template>
	<view>
		<!--<form @submit="formSubmit" >
		
			
			<view class="one-line" @click="goZones" >
				<text class="nombre">所属区域<text class="red-isterisk">*</text></text>
				<view  class="select-zones" >
					<text v-if="!zone">请选择所属区域</text>
					<text class="set-zones" v-if="zone"> {{zone}}</text>
					<text class="cuIcon-right lg text-gray"></text>
				</view>
			</view>
			
			<view class="one-line" >
				
				
				<text class="nombre">承运人姓名<text class="red-isterisk">*</text></text>
				<input type="text"  name="name" 
				  placeholder="请输入姓名" placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
				 focus @input="getPersonName">
			</view>
			<view class="one-line" >
				<text class="nombre">承运人身份证号<text class="red-isterisk">*</text></text>
				<input type="idcard"  name="idcard" maxlength="18"
				 placeholder="请输入身份证号码" placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
				 @input="getID">
			
			</view>
			
			
			
			<view class="one-line" >
				<text class="nombre">承运人联系地址<text class="red-isterisk">*</text></text>
				<input type="text"  maxlength="58"
				 placeholder="请输入联系地址" placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
				 @input="getContactAddress">
			</view>
			
			<view class="one-line" >
				<text class="nombre">运输经营许可证号<text class="red-isterisk">*</text></text>
				<input type="text"   maxlength="38"
				 placeholder="请输入运输经营许可证号码" placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
				 @input="getTransportLicenseNum">
			</view>
			
			<view class="one-line" >
				<text class="nombre">业务联系人<text class="red-isterisk">*</text></text>
				<input type="text"   maxlength="38"
				 placeholder="请输入业务联系人名称" placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
				 @input="getContactPerson">
			</view>
			
			<view class="one-line" >
				<text class="nombre">业务联系人手机<text class="red-isterisk">*</text></text>
				<input type="number"   maxlength="11" name="cellphone" :value="tel"
				 placeholder="请输入业务联系人手机号码" placeholder-style="margin-left:5%;font-size:16rpx;color:#ddd;"
				 @input="getPhoneNumber">
			</view>
			
			<view class="current-state">
					<text >拍摄身份证</text>
					<text class="red-isterisk">*</text>
				</view>
				
			<!-- 	take ID photo section -->
				<!-- <view class="take-photo-id" v-if="photo_id">
					<view  class="notes">
						
							拍摄身份证正反面，注意反光，保证身份证的内容清晰
						
					</view>
					
					<view class="two-photos">
						
						<view class="id-front" @click="takephoto" data-index="carrier_id_front">
							<text class="title">拍摄身份证正面</text>
							<image :src="imgFrontsUrl" mode="aspectFit"></image>
							<image src="/static/tachar.png" mode="aspectFit" @click="cancelFront"
							 class="tachar" v-if="tachar_front"></image>
						</view>
						
						<view class="id-front" @click="takephoto" data-index="carrier_id_reverse">
							<text class="title">拍摄身份证反面</text>
							<image :src="imgBackUrl" mode="aspectFit"></image>
							<image src="/static/tachar.png" mode="aspectFit" @click="cancelBack"
							 class="tachar" v-if="tachar_back"></image>
						</view>
					</view>
			
			<view class="btn-row">
				<button class="next-btn" type="primary"
				   @click="backPhoneVerifying">上一步</button>
				<button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
										  :disabled="disabled"  form-type="submit">下一步</button> 
									
			</view>
		</view>
	</form>-->
		
	
	</view> 
</template> 

<script>
	import {ossLocation} from "@/util/pattern.js"
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js")
	var _self;
	
	export default {
		data() {
			return {
				tel:"1111",
				disabled:false,
				active:true,
				active_two_step:false,
				active_three_step:false,
				imgFrontsUrl:"/static/id-front.png",
				imgBackUrl:"/static/id-front.png",
				tachar_front:false,
				tachar_back:false,
				photo_id:true,
				zone:"",
				params:{
					active_one_step:true,
					active_two_step:true,
					the_step:2,
					
					person_name:"",
					id_num:"",
					contact_address:"",
					transport_license_num:"",
					contact_person:"",
				},
			};
		},
		components:{
			
		},
		created(){
			this.zone = uni.getStorageSync("zone")
			this.tel = uni.getStorageSync("phone_verifying_cellphone")
		},
		methods:{
			getPhoneNumber(e){
				this.tel = e.target.value
				
				uni.setStorageSync("phone_verifying_cellphone", this.tel)
			},
			
			async takephoto(e){
				_self=this
				 /**
				  * 身份证正面或营业执照
				  */
				  if(e.currentTarget.dataset.index=="carrier_id_front"){
					  const resChoosePhoto= await this.$photo({
					  						  async success(res) {
					  						    const tempFilePaths = res.tempFilePaths;
					  							
					  							//preview the photos
					  							uni.previewImage({
					  							            urls: res.tempFilePaths,
					  							            
					  							        });
					  									
					  							
					  							//upload the img
					  							_self.imgFrontsUrl = tempFilePaths[0]
					  							
					  							//make the tachar img appear
					  							_self.tachar_front=true
					  							  
					  							  //upload
					  							  	const resPhoto = await _self.$upload({
					  							  		url:ossLocation.carrier.front,
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
					  							
					  							//preview the photos
					  							uni.previewImage({
					  							            urls: res.tempFilePaths,
					  							            
					  							        });
					  									
					  							
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
			
			
			goZones(){
				uni.navigateTo({
					url:"/pages/zones/zones"
				})
			},
			getPersonName(e){
				this.params.person_name = e.target.value
			},
			getID(e){
				this.params.id_num = e.target.value
			},
			getContactAddress(e){
				this.params.contact_address = e.target.value
			},
			getTransportLicenseNum(e){
				this.params.transport_license_num = e.target.value
			},
			getContactPerson(e){
				this.params.contact_person = e.target.value
			},
			backPhoneVerifying(){
				this.params.the_step =1
				this.params.active_two_step= false
				this.$emit('register_business_params',this.params)
			},
			
			formSubmit: function(e) {
							
										
						                this.params.active_three_step=true
										this.params.the_step =3
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
  
  
   .select-zones{
	   border:1px solid #ddd;
	   padding-left:5%;
	   font-size:16rpx;
	   color:#ddd;
	   width:400rpx;
	   .set-zones{
		   color:#000;
	   }
   }

</style>
