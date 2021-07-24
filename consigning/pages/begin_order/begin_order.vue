<template>
	<view class="content">
		
	   <!-- head section -->
	  <view class="navbar">
		  <scroll-view v-for ="(item,index) in navList" :key="index" enable-flex="true"
		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		  	<text>{{item.text}}</text>
		  </scroll-view>
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				<!-- {{item.state}} -->
				<begin-shipping-order  :transporte_state="item" :index_key='indexKey'/>
				
				
			</view>
		</view> 
		
	</view>
</template>

<script>
	
	 import beginShippingOrder from "@/pages/begin_shipping_order/begin_shipping_order"
	
	
	
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				nav_state:0,//记录tab状态
				indexKey: 0  ,// 只需要通过操作如点击事件改变这个值，child子组件就会刷新
				navList:[
					
					{
						state:0,
						text:"批量货模式",
						
						btn:"待审核",
					},
				
					{
					  state:1,
					  text:"普通货模式",
					 
					  btn:"审核不通过",
					},
					
				]
			};
		},
		components:{
			beginShippingOrder,
		
		},
		created(){
			
			//发货联系人
			let consignor_contact = uni.getStorageSync("consignor_contact")
			consignor_contact=JSON.parse(consignor_contact)
			
			
			
			if (consignor_contact){
				this.consignor_contact_choosen =consignor_contact.shipperName
				this.consignor_contact_id = consignor_contact.shipperId
			
				this.consignor_contact_address = consignor_contact.shipperAddress
				this.consignor_contact_phone = consignor_contact.shipperPhone
				
				this.params.shipperId = this.consignor_contact_id
				this.has_consignor_contact = true
			}else{
				this.has_consignor_contact = false//尚未选择发货联系人
			}
			
			
			//收货联系人
			 let consignee_contact = uni.getStorageSync("consignee_contact")
			 consignee_contact=JSON.parse(consignee_contact)
			 console.log( consignee_contact,'2997');
			 
			 if (consignee_contact){
			 	this.consignee_contact_choosen =consignee_contact.consigneeName
			 	this.consignee_contact_id = consignee_contact.consigneeId
			 	this.consignee_contact_address = consignee_contact.consigneeAddress
			 	this.consignee_contact_phone = consignee_contact.consigneePhone
			 	
				this.params.consigneeId = this.consignee_contact_id
			 	this.has_consignee_contact = true
			 }else{
			 	this.has_consignee_contact = false//尚未选择收货联系人
			 }
		},
		onLoad(options){
			this.tabCurrentIndex = 0
		
		},
		onShow(){
			
			this.nav_state = uni.getStorageSync("nav_state")
			if (this.nav_state=="1"){
				
				this.indexKey++
				this.tabClick(1)
				
			}else if (this.nav_state=="0"){
				
				this.indexKey++
				this.tabClick(0)
				
			}else{
				this.indexKey++
				this.tabClick(0)
				
			}
		},
		
		methods:{
			changeTab(e){
				this.tabCurrentIndex = e.target.current
			},
			tabClick(index){
				this.tabCurrentIndex = index
				uni.setStorageSync("nav_state",index)
				console.log(index,'mmm')
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.navbar{
		display: flex;
		height:80rpx;
		width:100%;
		padding: 15rpx 5rpx;
		position: sticky;
		top:10rpx;
		z-index:3;
		background-color: #fff;
		.nav-item{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
			height:100%;
			font-size:30rpx;
			position:relative;	
			text-align: center;
		}
		
		/*#ifdef H5*/
		.nav-item{
			font-size:16px;
			font-weight: 400;
			height:30px;
		}
		/*#endif*/
	}
	
	.current{
		border-bottom:5rpx solid #09499b;
		color:#09499b;
	}
	
	.shipping-body{
		margin-top:55rpx;
	}
	
	.content{
		background-color: #fff;
	}

</style>
