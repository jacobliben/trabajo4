<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="head-sect">
		  <view class="navbar">
		  		  <view v-for ="(item,index) in navList" :key="index" 
		  		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  		  @click ="tabClick(index)">
		  		  	{{item.text}}
		  		  </view>	  		  
		  </view>
		  <view class="plus" @click="addBankcard">
			  <image src="/static/add.png" mode="" class="add"></image>
		  </view>
	  </view>
	 
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				
				<bankcard-has-approved :vehicle = "item"/>
				
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import bankcardHasApproved from "@/pages/bank_card_has_approved/bank_card_has_approved.vue"
	
	
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				navList:[
					{
						state:1,
						text:"结算管理",
						orderList:[]
					},
					
				],
			};
		},
		components:{
			bankcardHasApproved,
			
			
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			
		},
		methods:{
			
			tabClick(index){
				this.tabCurrentIndex = index
				
			},
			
			addBankcard(){
				uni.navigateTo({
					url:`/pages/add_bankcard/add_bankcard?btn_title=添加`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.head-sect{
		width:100%;
		display: flex;
		flex-direction: row;
	}
	.navbar{
		width:90%;
		display: flex;
		height:70rpx;
		padding: 0 5rpx;
		background: #fff;
		position: relative;
		z-index:3;
		.nav-item{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
			height:100%;
			font-size:25rpx;
			position:relative;	
		}
		
		/*#ifdef H5*/
		.nav-item{
			font-size:16px;
			font-weight: 400;
		}
		/*#endif*/
	}
	
	.plus{
		width:10%;
		color:000;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 70rpx;
		.add{
			width:100rpx;
			height:80rpx;
		}
	}
	
	.current{
		border-bottom:5rpx solid #09499b;
		color:#09499b;
	}
	
	.shipping-body{
		margin-top:15rpx;
	}
	
	.content{
		background-color: #fff;
	}

</style>
