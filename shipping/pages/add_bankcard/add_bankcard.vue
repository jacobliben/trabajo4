<template>
	<view>
		
       <form @submit="formSubmit" >
		
			 <view class="cu-form-group">
			 			     <view class="name">银行类别 <text class="star">*</text></view>
			 			     <view class="date-begin-input">
			 								 <picker @change="bindBankClassPickerChange"  :value="bank_class_index" :range="bank_list">
			 								          <view class="picker-view text-lg">{{bank_list[bank_class_index]}}</view>
			 								 </picker>
			 				 </view>
			 </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">账号类型 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					
								  <picker @change="bindAccountTypePickerChange" :value="account_type_index" :range="account_type_list">
								                        <view class="picker-view text-lg">{{account_type_list[account_type_index]}}</view>
								   </picker>		
										
			  				 </view>
			  </view>
			  
			  
			   
			   <view class="cu-form-group">
			   			     <view class="name">银行卡号 <text class="star">*</text></view>
			   			     <view class="ref-name">
			   					<input type="number" placeholder="请输入银行卡号" :value="bankcardAccount" @input ="getBankcardNumber">
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
			   <!-- #ifndef MP-WEIXIN -->
			   <view class="cu-form-group">
			    			     <view class="name">银行名称<text class="star">*</text></view>
			    			     <view class="ref-name">
			    				      <multiselect class="picker-view text-lg" v-model="value" :value="bank_name" :options="bank_options" track-by="dictLabel" label="dictLabel" @input ="getBank" :placeholder="bank_placeholder">
			   									<template  slot="singleLabel" slot-scope="{ option }" > {{ option.dictLabel }}</template>
			   										  
			   						 </multiselect>
			    				 </view>
			    </view>
			   <!-- #endif -->
			  <!-- <view class="cu-form-group">
			  			     <view class="name">支行联行 <text class="star">*</text></view>
			  			     <view class="ref-name" >
								<picker @change="bindPickerBranchChange" :value="branch_index" :range="branch_list">
								                      <view class="picker-view text-lg">{{branch_list[branch_index]}}</view>
								 </picker>		  
			  				 </view>
			  </view> -->
			  
			    <!-- #ifndef MP-WEIXIN -->
			  <view class="cu-form-group">
			   			     <view class="name">支行联行<text class="star">*</text></view>
			   			     <view class="ref-name">
			   				      <multiselect v-model="branch_value" class="picker-view text-lg" :value="branch_name" :options="branch_options" track-by="paymentBankNumber" label="fullNameOfTheBank" @input ="getBranch" :placeholder="branch_placeholder">
			  									<template  slot="singleLabel" slot-scope="{option }" > {{option.fullNameOfTheBank }}</template>
			  										  
			  						 </multiselect>
			   				 </view>
			   </view>
			   <!-- #endif -->
			  
			 
			  
			  <view class="cu-form-group">
			  			     <view class="name">默认账户 <text class="star">*</text></view>
			  			     <view class="ref-name">
			  					<picker @change="bindPickerDefaultAccountChange" :value="default_account_index" :range="default_list">
			  					                      <view class="picker-view text-lg">{{default_list[default_account_index]}}</view>
			  					 </picker>
			  				 </view>
			  </view>
			  
			  <view class="cu-form-group">
			  			     <view class="name">备注 </view>
			  			     <view class="ref-name">
			  					<input type="text" placeholder="请输入备注" :value="remark"  @input ="getRemark">
			  				 </view>
			  </view>
			  
			  
			  
			
			
			
			<view class="btn-row">
				<button class="next-btn bg-gradual-green round margin-bottom" 
				   @click="backBusiness">返回</button>
				<button class="next-btn round margin-bottom"  :class="{'bg-gradual-green':active}"
							  :disabled="disabled"
				form-type="submit">{{btn_title}}</button> 
									
			</view>
		
	
		</form>
	</view>
</template>

<script>
    import Multiselect from '@/node_modules/vue-multiselect/src/Multiselect.vue' 
	
	var _self;
	
	export default {
		data() {
			return {
				//是否个人
				isPerson: false,
				disabled:true,
				active:false,
				queryParams: {
				          pageNum: 1,
				          pageSize: 10,
				          
				        },
				bank_name:"",
				bank_placeholder:"请输入银行名称",	
				branch_name:"",
				branch_placeholder:"请输入支行联行名称",		
				bankcardAccount:"",		
				params:{},
				//提示
				remark:"",
				received_info: [ ],
				bank_list: [ ],
				bank_class_index: 0,
				account_type_index:0,
				account_type_list: [
					           "请选择账号类型",
					           '个人',
				               '企业',
				               
				            ],			
				default_list: ["请选择是否默认账户",
					           '是',
				               '否',
				            ],
				fullNameOfTheBank:"",								
				default_account_index: 0,	
				array: [],
				index: 0,
				list_code: [ ],
				list_name: [ ],
				branch_list	: [],
				branch_code_list: [],
				branch_index: 0,		
						
				btn_title:"",
				value: null,
				branch_value: null,
				bank_options: [],
				branch_options: []
			};
		},
		components:{
			Multiselect,
			 
		},
		onLoad(options){
			this.btn_title = options.btn_title
			
			if (this.btn_title == "修改"){
				this.received_info = uni.getStorageSync("bankcard_item")
				this.bankcardAccount = this.received_info.bankcardAccount
				this.default_account_index = this.received_info.carrierBankcardIsDefault
				this.remark = this.received_info.remark
				this.bank_placeholder = this.received_info.bankName
				this.branch_placeholder = this.received_info.branchBankName
			}
			console.log(this.received_info,'777')
			
			  
		},
		created(){
			
			//导入银行卡详情
			if (this.btn_title == "修改"){
				this.account_type_index = this.received_info.carrierAccountType
				//enable the btn
				this.disabled= false 
				this.active = true
			}
			
			this.getBankName()
			
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:`${this.btn_title}承运人银行卡`
			})
			
		},
		methods:{
			//搜索框取得银行名称
			getBank(e){
				this.bank_name = e.dictLabel
				this.params.bankCode = e.dictValue
				this.params.bankName = e.dictLabel
				
				this.fullNameOfTheBank = this.bank_name
				
				//清空之前的支行的显示
				this.branch_value = null
				//请求支行联行
				this.getBranchNameNew()
			},
			//搜索框取得支行联行名称
			getBranch(e){
				this.branch_name = e.fullNameOfTheBank
			    this.params.branchBankNo = e.paymentBankNumber
			     this.params.branchBankName = e.fullNameOfTheBank
				
				
			},
			bindBankClassPickerChange(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.bank_class_index = e.target.value
						this.params.carrierBankcardCategory = 1
			        },
			bindAccountTypePickerChange(e) {
			            console.log('picker发送选择改变01，携带值为', e.target.value)
			            this.account_type_index = e.target.value
						if(e.target.value== 0){
							
						} else if (e.target.value== 1){
							this.params.carrierAccountType = 1
						}else if (e.target.value== 2){
							this.params.carrierAccountType =  2
						}
			        },
			bindPickerDefaultAccountChange(e) {
			            console.log('picker发送选择改变，携带值为Default', e.target.value)
			            this.default_account_index = e.target.value
						this.params.carrierBankcardIsDefault = e.target.value
						//enable the btn
						this.disabled= false 
						this.active = true
			        },
			//get the bank name list 是取得银行列表，不是选择！！！！！！！
			async getBankName(){
				//银行名称
				const res = await this.$getRegistDicts("bank_code")
				
				 //array 就是银行名称的列表
				this.array = res.data.data.map(e =>e=e.dictLabel)
				this.bank_options = res.data.data
				this.array.unshift("请选择银行名称")
				
				this.list_code= res.data.data.map(e =>e=e.dictValue)
				
			    if(this.btn_title == "修改"){
					const bankName = this.received_info.bankName
					this.index = this.array.findIndex(value=>value == bankName)
					this.getBranchNameNew()
				}
				
				 //银行卡类别
				const resBankCategory = await this.$getRegistDicts("carrier_bankcard_category")
				
				this.bank_list = resBankCategory.data.data.map(e =>e=e.dictLabel)
				 
				
			},
			//获取支行的名称列表
			async getBranchNameNew(){
				
				var authorization = uni.getStorageSync("token")
				var queryParams= this.queryParams 
				var fullNameOfTheBank
				if(this.btn_title == "修改"){
					fullNameOfTheBank = this.received_info.bankName
				}else if(this.btn_title == "添加"){
					fullNameOfTheBank = this.fullNameOfTheBank
				}
				
				//data:queryParams
				const resBranchName = await this.$request({
					url:`/iscm/bankBranchList/likeByFullNameOfTheBank?fullNameOfTheBank=` + fullNameOfTheBank ,
					method: "GET",
					
					header:{
						Authorization:authorization,
						
					},
					
				})
				
				this.branch_options = resBranchName.data.rows
				
				 this.branch_list = resBranchName.data.rows.map(e=>e.fullNameOfTheBank)
				 this.branch_code_list = resBranchName.data.rows.map(e=>e.paymentBankNumber)
				 this.branch_list.unshift("请选择支行联行名称")
			     
				 if(this.btn_title == "修改"){
				 	 this.bindPickerBranchChange()
				 }
			},
			//银行选择 已经不用！！！！
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为bank', e.target.value)
			            this.index = e.target.value
					
						this.params.bankCode=this.list_code[this.index-1]
						this.params.bankName=this.array[this.index]
						this.fullNameOfTheBank = this.array[this.index]
						
						//请求支行联行
						this.getBranchName()
			 },
			//支行选择 已经不用！！！！
			bindPickerBranchChange: function(e) {
			            
						if(this.btn_title == "修改"){
							const branchBankName = this.received_info.branchBankName
							this.branch_index = this.branch_list.findIndex(value=>value == branchBankName)
							
						}else if(this.btn_title == "添加"){
							console.log('picker发送选择改变，携带值为branch', e.target.value)
							this.branch_index = e.target.value
							
							this.params.branchBankName = this.branch_list[this.branch_index]
							
							this.params.branchBankNo = this.branch_code_list[this.branch_index -1]
							this.params.branchBankNo = parseInt(this.params.branchBankNo)
							
						}
						
					
			 },
			getBankcardNumber(e){
				this.bankcardAccount = e.detail.value
				this.params.bankcardAccount =parseInt(e.detail.value) 
				
			},
			
			//get the branch name list 已经不用！！！！
			async getBranchName(){
				
				var authorization = uni.getStorageSync("token")
				var queryParams= this.queryParams 
				var fullNameOfTheBank
				if(this.btn_title == "修改"){
					fullNameOfTheBank = this.received_info.bankName
				}else if(this.btn_title == "添加"){
					fullNameOfTheBank = this.fullNameOfTheBank
				}
				 
				
				const resBranchName = await this.$request({
					url:`/iscm/bankBranchList/likeByFullNameOfTheBank?fullNameOfTheBank=` + fullNameOfTheBank ,
					method: "GET",
					
					header:{
						Authorization:authorization,
					},
					
				})
				
				 this.branch_list = resBranchName.data.rows.map(e=>e.fullNameOfTheBank)
				 this.branch_code_list = resBranchName.data.rows.map(e=>e.paymentBankNumber)
				 this.branch_list.unshift("请选择支行联行名称")
			    
				 if(this.btn_title == "修改"){
				 	 this.bindPickerBranchChange()
				 }
			},
			
			
			getRemark(e){
				this.remark = e.detail.value
				this.params.remark = e.detail.value
				
			},
			
			async formSubmit(e){
				        if(this.btn_title == "添加"){
				        	 //银行类别
				        	 	if (this.params.carrierBankcardCategory == null || this.params.carrierBankcardCategory==""|| this.params.carrierBankcardCategory.length<1){
				        	 		this.params.carrierBankcardCategory = 1 										
				        	 	} 
				        	 	
				        	 	//进行账号类型检查
				        	 	if (this.params.carrierAccountType == null || this.params.carrierAccountType ==""|| this.params.carrierAccountType<1){
				        	 		uni.showToast({
				        	 			title:"未输入账号类型, 请输入",
				        	 			icon:"none"
				        	 		})
				        	 	 return	 										
				        	 	} 
				        	 	
				        	 	
				        	 	//进行银行名称检查
				        	 	if (this.params.bankCode == null || this.params.bankCode ==""|| this.params.bankCode.length<1){
				        	 		uni.showToast({
				        	 			title:"未输入银行名称, 请输入",
				        	 			icon:"none"
				        	 		})
				        	 	 return	 										
				        	 	} 
				        	 	
				        	 	//进行支行联行检查
				        	 	if (this.params.branchBankName == null || this.params.branchBankName ==""|| this.params.branchBankName.length<1){
				        	 		uni.showToast({
				        	 			title:"未输入支行联行, 请输入",
				        	 			icon:"none"
				        	 		})
				        	 	 return	 										
				        	 	} 
				        	 	
				        	 	//进行银行卡号检查
				        	 	if (this.params.bankcardAccount == null || this.params.bankcardAccount ==""|| this.params.bankcardAccount.length<1){
				        	 		uni.showToast({
				        	 			title:"未输入银行卡号, 请输入",
				        	 			icon:"none"
				        	 		})
				        	 	 return	 										
				        	 	}
								
				        	 	var authorization = uni.getStorageSync("token")
				        	 	var  form = this.params
				        	 	
				        	 	const res = await this.$request({
				        	 		url:"/app/carrierBankcard/add",
				        	 		method: "POST",
				        	 		data:form,
				        	 		header:{
				        	 			Authorization:authorization,
				        	 			
				        	 		},
				        	 		
				        	 	})
				        	 	
				        	 if(res.data.msg ="操作成功"){
				        	 	uni.showToast({
				        	 		title:res.data.msg,
				        	 		
				        	 	})
				        	 	setTimeout(()=>{
				        	 	   uni.navigateTo({
				        	 	   	url:"/pages/bank_card/bank_card"
				        	 	   })
				        	 	},800)
				        	 }else{
				        	 	uni.showToast({
				        	 		title:res.data.msg,
				        	 		icon:"none"
				        	 	})
				        	 }
				        }else if (this.btn_title == "修改"){
				        	 var authorization = uni.getStorageSync("token")
				        	 var modify_params= this.params
				        	 var modify_received_info= this.received_info
				        	 var modify_form = {}
				        	 Object.assign(modify_form,modify_params,modify_received_info)
				        	 
				        	 const resEdit = await this.$request({
				        	 	url:"/app/carrierBankcard/edit",
				        	 	method: "POST",
				        	 	data:modify_form,
				        	 	header:{
				        	 		Authorization:authorization,
				        	 		
				        	 	},
				        	 	
				        	 })
				        	
				        	 if(resEdit.data.msg ="操作成功"){
				        	 	uni.showToast({
				        	 		title:resEdit.data.msg,
				        	 		
				        	 	})
				        	 	setTimeout(()=>{
				        	 	   uni.navigateTo({
				        	 	   url:"/pages/bank_card/bank_card"
				        	 	   })
				        	 	},80)
				        	 }else{
				        	 	uni.showToast({
				        	 		title:resEdit.data.msg,
				        	 		icon:"none"
				        	 	})
				        	 }
				        }
						
			},
			
			backBusiness(){
				uni.navigateBack({
					delta:1,
				})
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
   .notes{
	   width:100%;
	   padding: 5%;
	   border-bottom:1rpx solid #ddd;
	   
   }
   .picker-view{
	   color:#222;
	   width:calc(100vw - 380rpx);
   }
   
   .cu-form-group picker::after {
       display: none;  
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
  
 
</style>
