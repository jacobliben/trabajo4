<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="navbar">
		
		  <scroll-view v-for ="(item,index) in navList" :key="index"  enable-flex="true"
		  class="nav-item" :class="{current: tabCurrentIndex === index }" 
		  @click ="tabClick(index)" scroll-x="true"  scroll-left="120">
		  	     <text>{{item.text}}</text>
		  </scroll-view>
		
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
		
				<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
					<!-- {{item.state}} -->
					<despatching-pending :transporte_state="item"/>
					
					
					<!--<task-finished v-if="item.state===4"/>
					<overall v-if="item.state===5"/> -->
				</view>
			
			
		</view>
		
	</view>
</template>

<script>
	
	import despatchingPending from "@/pages/despatching_pending/despatching_pending"

	
	import overall from "@/components/overall.vue"
	
	export default {
		data() {
			return {
				tabCurrentIndex:0,
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
			
			
			overall
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			
		},
		onShow(){
			this.nav_state = uni.getStorageSync("nav_state")
			if (this.nav_state==="receiving"){
				
				
				this.tabClick(2)
			}else if (this.nav_state==="dispatching"){
				
				
				this.tabClick(1)
			}else if (this.nav_state==="loading"){
				
				
				this.tabClick(0)
			}else{
				this.tabClick(0)
			}
			
		},
		
		methods:{
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
	}
	
	.content{
		background-color: #fff;
	}

</style>
