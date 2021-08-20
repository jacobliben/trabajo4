<template>
	<view class="content">
		
	  <!-- head section -->
	   <view class="head-sect">
		   <view class="navbar">
		   		  <view v-for ="(item,index) in navList" :key="index"  enable-flex="true"
		   		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		   		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		   		  	     <text>{{item.text}}</text>
		   		  </view>
		   </view>
		   <view class="plus" @click="addRefresh">
		   		<image src="/static/rotate.png" mode="" class="add" :class="{rotate: activeRotate }"></image>
		   </view>
	   </view>
	  
		
		<!-- body section -->
		<view class="shipping-body">
		
				<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
					<!-- {{item.state}} -->
					<despatching-pending :key="refresh_index" :transporte_state="item"/>
					
					
					<!--<task-finished v-if="item.state===4"/>
					<overall v-if="item.state===5"/> -->
				</view>
			
			
		</view>
		<view >
			<tabbar-waybill  class="custom-tab-bar"></tabbar-waybill>
		</view>
	</view>
</template>

<script>
	
	import despatchingPending from "@/pages/despatching_pending/despatching_pending"
     import tabbarWaybill from "@/pages/tabbar_waybill/tabbar_waybill"
	
	import overall from "@/components/overall.vue"
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				refresh_index:0,
				show_shipping_order: true,
				activeRotate:false,
				nav_state:"",  
				navList:[
					{
						state:0,
						text:"待检验",
						btn:"查验",
						orderList:[],
						businessStatus:33
					},
					{
					  state:1,
					  text:"待发车",
					  btn:"发车",
					  orderList:[],
					  businessStatus:this.$waitDepart
					},
					{
					  state:2,
					  text:"待签收",
					  btn:"签收",
					  orderList:[],
					  businessStatus:this.$waitSign
					},
					
					{
					  state:4,
					  text:"已完成",
					  btn:"查看",
					  orderList:[],
					  businessStatus:this.$finished
					},
					{
					  state:5,
					  text:"全部",
					  btn:"查阅",
					  orderList:[]
					},
					
				]
			};
		},
		components:{
			
			
			despatchingPending,
			tabbarWaybill,
			
			overall
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			
			try {
			    const value = uni.getStorageSync('show_shipping_order');
			    if (value) {
			        this.show_shipping_order = value
					if (this.show_shipping_order == true) {
						uni.showTabBar();
					}else{
						
						uni.hideTabBar(); 
					}
			    }
			} catch (e) {
			    // error
			}
		},
		onShow(){
			
			const now_page = getApp().globalData.way_bill_page
			console.log(now_page,"now_page2");
			this.tabClick(now_page)
			
			
			
			
		},
		
		methods:{
			addRefresh(){
				var that = this
				this.activeRotate = true;
				this.refresh_index++;
				setTimeout(()=>{
					that.activeRotate = false
				},3000)
			},
			changeTab(e){
				this.tabCurrentIndex = e.target.current
			},
			
			//点击tab键更改下面的组件
			tabClick(index){
				this.tabCurrentIndex = index
				
			},
			//从后台请求表单数据
			 async getLists(){  
				 var Authorization = uni.getStorageSync("token")
				 
				const res = await this.$request({
					url:"/iscm/dispatch/92",
					
					header:{
						"Authorization":Authorization
					}
				})
				
			},
			
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
		padding-bottom:80rpx;
	}
	
	.content{
		background-color: #fff;
	}
	
	.plus{
		width:10%;
		color:000;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 70rpx;
		margin:15rpx;
		margin-left:670rpx;
	}
	
	@keyframes turnZ{
	
	  0%{transform:rotateZ(0deg);}
	
	  100%{transform:rotateZ(360deg);}
	
	}
	
	.add{
		width:35rpx;
		height:35rpx;
		
	} 
	
	.rotate{
		 animation: turnZ 1s linear infinite;
	}
	
	.custom-tab-bar{
		border: 1rpx solid red;
		width:200rpx;
		height:100rpx;
		position: fixed;
		border: 0;
		left:0;
	}

</style>
