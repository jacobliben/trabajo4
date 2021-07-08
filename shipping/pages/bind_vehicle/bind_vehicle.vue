<template>
	<view>
	<form @submit="formSubmit" >
		<view class="cu-form-group margin-top">
					     <view class="name">车船牌照号
									             <text class="text-green  text-sm margin-left" @click="goQuery">(查资质)</text>
									 </view>
					     <view class="ref-name">
							<input type="text" placeholder="请输入要绑定车船牌照号码" maxlength="10"
										@input ="getCarNo" @blur="enableBind" :value="plate_num">
						 </view>
		</view>
		
		<view class="btn-row">
			<button class="next-btn bg-gradual-green round" 
			   @click="backBusiness">取消</button>
			<button class="next-btn round"  :class="{'bg-gradual-green':active}"
						  :disabled="disabled"
			form-type="submit">确定</button> 
								
		</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled:true,
				active:false,
				//显示车牌号
				vehicleId:"", 
				plate_num:"", 
				vehiclePlateNumber:"", 
			}
		},
		methods: {
			getCarNo(e){
				
				this.vehiclePlateNumber = e.detail.value
				this.plate_num = e.detail.value
			},
			backBusiness(){
				uni.navigateBack({
					delta:1,
				})
			},
			
			async formSubmit(e){
				
				var car_no = this.vehiclePlateNumber
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
							 
				        }
						
						
						var authorization = uni.getStorageSync("token")
						var  vehicleId  = this.vehicleId
						
						
						const res = await this.$request({
							url:"/app/vehicleCarrier/add/" + vehicleId ,
							method: "POST",
							
							header:{
								Authorization:authorization,
								
							},
							
						})
						console.log(res,"绑车")
						if(res.data.msg ="车辆和承运人已存在对应关系"){
							uni.showToast({
								title:"成功," + res.data.msg,
								icon:"none"
							})
							this.plate_num = ""
							this.disabled = true
							this.active = false
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							})
						}
						
						
					
			},
			async enableBind(){
				var authorization = uni.getStorageSync("token")
				
				const plateNumber = this.vehiclePlateNumber
				
				const res_check_plate = await this.$request({
					url:"/app/vehicle/getByPlateNumber/" + plateNumber ,
					method: "GET",
					
					header:{
						Authorization:authorization,
						
					},
					
				})
				 this.vehicleId = res_check_plate.data.data.vehicleId
				
				this.disabled = false
				this.active = true
			},
			
			
			
		}
	}
</script>

<style lang="scss" scoped>
.name{
   		 color:#000;
   }
   .ref-name{
   		 font-size:18rpx;
   	     color:#999;
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
</style>
