<template>
	<view>
		<view  class="notes">
			
				拍摄身份证正反面，注意反光，保证身份证的内容清晰
			
		</view>
		
		<form @submit="formSubmit" >
				<view class="one-line" >
					<text>姓名</text>
					<input type="text"  name="name"  focus @input="getName">
				</view>
				<view class="one-line" >
					<text>身份证号</text>
					<input type="idcard"  name="idcard" maxlength="18" @input="getID">
				
				</view>
				
				<view class="btn-row">
					            
									 <button class="next-btn" :class="{'current-btn':active,'disabled-btn':!active}"
									  :disabled="disabled" form-type="submit">下一步</button> 
				</view>
		 </form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				disabled:true,
				active:false,
				params:{
					
					name:"",
					id:"",
				},	
			}
		},
		
		methods:{
			getName(e){
				this.params.name = e.target.value
			},
			getID(e){
				this.params.id = e.target.value
				
			},
			
			formSubmit: function(e) {
										console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
						                //定义表单规则
						                var rule = [
						                                       {name:"name",
																checkType : "string",
						                                        
						                                          errorMsg:"姓名格式有误"
						                                       },
						                                       {
																   name:"idcard",
																   checkType: "int",
						                                           checkRule: "18,18",
						                                           errorMsg:"验证码格式有误"
						                                       }
						                                  
						                ];
						                //进行表单检查
										
											var formData = e.detail.value;
											var checkRes = graceChecker.check(formData, rule);
											if(checkRes){
												
											    uni.showToast({title:"验证通过!", icon:"none"});
												
											
												
												 
											}else{
											    uni.showToast({ title: graceChecker.error, icon: "none" });
											}
										
						                
										
										this.$emit(register_phone_params,  this.params)
									},
		}
	}
</script>

<style lang="scss" scoped>
	.notes{
		   width:100%;
		   padding: 5%;
		   border-bottom:1rpx solid #ddd;
		   
	}
	
	.one-line{
		margin-top:20rpx;
		display: flex;
		flex-direction: row;
		margin-left:5%;
		text{
			margin-right:1vw;
			font-size:20rpx;
			width:15%;
		}
		input{
			border:1rpx solid #ddd
		}
		
	}
	
	.next-btn{
		     margin-top:2vh;
			 width:30%;
			
	}
</style>
