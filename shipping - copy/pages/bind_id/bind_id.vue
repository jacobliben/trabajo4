<template>
	<view>
	<form @submit="formSubmit" >
		<view class="cu-form-group margin-top">
					     <view class="name">身份证号</view>
					     <view class="ref-name">
							<input type="text" placeholder="请输入要绑定的驾驶员身份证号码" maxlength="18"
										@input ="getIDNo" @blur="enableBind" :value="id_num">
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
				driverId:"", 
				driverIdNumber:"", 
				id_num:"", 
			}
		},
		methods: {
			getIDNo(e){
				
				this.driverIdNumber = e.detail.value
				this.id_num = e.detail.value
			},
			backBusiness(){
				uni.navigateBack({
					delta:1,
				})
			},
			
			async enableBind(){
				var authorization = uni.getStorageSync("token")
				
				const driverIdNumber = this.driverIdNumber
				
				const res_check_id = await this.$request({
					url:"/app/driver/getByIdNumber/" + driverIdNumber ,
					method: "GET",
					
					header:{
						Authorization:authorization,
						
					},
					
				})
				 this.driverId = res_check_id.data.data.driverId
				
				this.disabled = false
				this.active = true
			},
			
			async formSubmit(e){
						var authorization = uni.getStorageSync("token")
						var  driverId  = this.driverId
						
						const res = await this.$request({
							url:"/app/driverCarrier/add/" + driverId ,
							method: "POST",
							header:{
								Authorization:authorization,
							},
							
						})
						
						if(res.data.msg ="司机和承运人已存在对应关系"){
							uni.showToast({
								title:"成功," + res.data.msg,
								icon:"none"
							})
							this.id_num = ""
							this.disabled = true
							this.active = false
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							})
						}
					
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
