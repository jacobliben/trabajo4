<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="navbar">
		  <view v-for ="(item,index) in navList" :key="index" 
		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  @click ="tabClick(index)">
		  	{{item.text}}
		  </view>
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				<!-- {{item.state}} -->
				<!-- <hot-topics v-if="item.state===0"/> -->
				<company-news v-if="item.state===1"/>
				<shipping-policy v-if="item.state===2"/>
				<emergency-help v-if="item.state===3"/>
				<calc-miles v-if="item.state===4"/>
				<overall v-if="item.state===5"/>
			</view>
		</view>
		
	</view>
</template>

<script>
	import hotTopics from "@/pages/hot_topics/hot_topics"
	import emergencyHelp from "@/pages/emergency_help/emergency_help"
	import shippingPolicy from "@/pages/shipping_policy/shipping_policy"
	 import companyNews from "@/pages/company_news/company_news"
	import calcMiles from "@/pages/calc_miles/calc_miles.vue"
	import overall from "@/components/overall.vue"
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				navList:[
					// {
					// 	state:0,
					// 	text:"热聊话题",
					// 	orderList:[]
					// },
					{
					  state:1,
					  text:"智联百科",
					  orderList:[]
					},
					{
					  state:2,
					  text:"货运政策",
					  orderList:[]
					},
					{
					  state:3,
					  text:"紧急求助",
					  orderList:[]
					},
					{
					  state:4,
					  text:"里程计算",
					  orderList:[]
					},
					// {
					//   state:5,
					//   text:"全部",
					//   orderList:[]
					// },
					
				]
			};
		},
		components:{
			hotTopics,
			emergencyHelp,
			 companyNews,
		    shippingPolicy,
			calcMiles,
			overall
		},
		onLoad(options){
			this.tabCurrentIndex = 0
		},
		methods:{
			changeTab(e){
				this.tabCurrentIndex = e.target.current
			},
			tabClick(index){
				this.tabCurrentIndex = index
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.navbar{
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
			font-size:25px;
			font-weight: 400;
		}
		/*#endif*/
	}
	
	.current{
		border-bottom:5rpx solid #1e9fff;
		color:#1e9fff;
	}
	
	.shipping-body{
		margin-top:15rpx;
	}
	
	.content{
		background-color: #fff;
	}

</style>
