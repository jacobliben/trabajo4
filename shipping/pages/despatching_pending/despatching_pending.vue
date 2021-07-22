<template>
	<view class="waybill-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true" >
		  
		<view v-for="(item,index) in despatching_pending_list" :key="index" class="one_waybill " >
			<view class="first-row">
				<view>
				<text selectable>{{item.dispatchNo}}</text>
				<text class="copy" @click="copy(item.dispatchNo)">复制</text>
				<!-- <text>{{now_state.state}}</text> -->
				</view>
				<text class="waybill_state" v-if="item.dispatchStatus==$waitAuditLoadInfo">待装货</text>
				<text class="waybill_state" v-if="item.dispatchStatus==$waitDepart">待发车</text>
				<text class="waybill_state" v-if="item.dispatchStatus==$waitSign">待签收</text>
				<text class="waybill_state" v-if="item.dispatchStatus==$finished">已完成</text>
				<text class="waybill_state" v-if="item.dispatchStatus==60">待审核</text>
				<text class="waybill_state" v-if="item.dispatchStatus==65">审核未通过</text>
				<text class="waybill_state" v-if="item.dispatchStatus==80">待确认收货</text>
				<text class="waybill_state" v-if="item.dispatchStatus==85">待评价</text>
				
			</view>
			<view class="waybill_details">
				<view class="shipping_content">
					<!-- 收发货双方地址 -->
					<view>
						<text>
						  <text>{{item.iscmDispatchInformationRecord.shipperProvinceName}}</text>
						  <!-- 判断是否为“直辖市” -->
						   <text v-if ="item.iscmDispatchInformationRecord.shipperCityName!=='市辖区'">{{item.iscmDispatchInformationRecord.shipperCityName}}</text>
						   <text v-if ="item.iscmDispatchInformationRecord.shipperCityName==='市辖区'">{{item.iscmDispatchInformationRecord.shipperRegionName}}</text>
						</text> 
						<text class="cuIcon-pullright lg text-gray"> </text>
						 <text>
							<text>{{item.iscmDispatchInformationRecord.consigneeProvinceName}}</text>
							<!-- 判断是否为“直辖市” -->
							<text v-if ="item.iscmDispatchInformationRecord.consigneeCityName!=='市辖区'">{{item.iscmDispatchInformationRecord.consigneeCityName}}</text>
							<text v-if ="item.iscmDispatchInformationRecord.consigneeCityName==='市辖区'">{{item.iscmDispatchInformationRecord.consigneeRegionName}}</text>
						</text>
					</view> 
					<view>
						<text class="goods_name">{{item.goodsName}}</text>		
						<text>{{item.dispatchGoodsWeight}}吨</text>
					</view>
				
					<view>
						<text class="shipper">{{item.iscmDispatchInformationRecord.shipper}}</text>
								<text class="cuIcon-move"></text>
						<text>{{item.iscmDispatchInformationRecord.consigneeName}}</text>
					</view>
					<view>
						<text class="create_time">创建时间:{{item.createTime}}</text>		
					</view>
					<view>
						<text class="carrier">承运司机:{{item.firstDriverName}}</text>		
					</view>
					<view>
						<text class="carrier">承运车辆:{{item.vehiclePlateNumber}}</text>		
					</view>
				</view>
				
				    <view class="actions">
						<view hover-class="one-icon-hover">
						  <image src="/static/phone.png"  class="phone-img"  @click="phoneCall(item.iscmDispatchInformationRecord.consigneePhone)"></image>	
						</view>
						<button type="default" size="default" 
						 class="receive-btn radius"
						  @click="goUploadFiles(item)" v-if ="canDispatch">{{btn_text}}</button>
					</view>
				
			</view>
			
			<view class="address">
				<text>收货地址：{{item.iscmDispatchInformationRecord.consigneeAddress}}</text>
			</view>
		</view>
		<info-not-found v-if ="show_not_found"/>
		</scroll-view>
		
	</view>
</template>
    
<script>
	import infoNotFound from "@/pages/info_not_found/info_not_found.vue"
	export default{
		data(){
			return{
			  load_more:true,//继续加载列表
			  
			  despatching_pending_list:[],
			  show_not_found:false,
		      now_state:this.transporte_state,
			  state_text:"",
			  btn_text:"",
			  //是否可以“发车”，“签收”等
			  canDispatch:null,
			   queryParams: {
			             pageNum: 1,
			             pageSize: 7,
			             
			           },
			}
		},
		props:["transporte_state"],
		components:{
			infoNotFound
		},
		
		mounted(){
			
				this.now_state = this.transporte_state
				this.state_text =this.now_state.text
				this.btn_text =this.now_state.btn
				if (this.now_state.state!=0){
					this.queryParams.dispatchStatus= this.now_state.businessStatus
				}
				
				uni.setNavigationBarTitle({
					title:`${this.now_state.text}`
				})
			
			const user_permissions= uni.getStorageSync("user_info").data.permissions
			
			//确定“发车”等按钮是否可以显示
			if (this.btn_text ==="查阅" ||this.btn_text ==="查看"){
				this.canDispatch = true
			}else if (this.btn_text ==="发车"&& user_permissions.includes("iscm:dispatch:depart") ){
						  this.canDispatch = true
			}else if (this.btn_text ==="签收"&& user_permissions.includes("iscm:dispatch:sign") ){
						  this.canDispatch = true
			}else if (this.btn_text ==="装货"&& user_permissions.includes("iscm:dispatch:sign") ){
						  this.canDispatch = true
			}
			
			this.getDespatchingPendingList()
			
			
		},
		methods:{
			 upper: function(e) {
				  
			        },
			 lower: function(e) {
				
						setTimeout(() => {
						
						//TODO这里填写你加载数据的方法
						
						this.queryParams.pageNum += 1
						if (this.load_more){
						  this.getDespatchingPendingList()
						}
											  
						
						}, 1000)
						
						
						
						
			        },
			        
			goUploadFiles(item){
				var that = this
					uni.setStorageSync('upload_item',item)
					uni.navigateTo({
						url:`/pages/upload_images/upload_images?btn_title=${that.now_state.btn}`
					})
				
				
			},
			copy(data){
				var that = this
				uni.setClipboardData({
				    data:data,
				    success: function () {
				       
						uni.showToast({
							title:"copy"
						})
				    }
				});
			},
			phoneCall(tel){
				uni.makePhoneCall({
				    phoneNumber: tel ,
					
				});
				      },
					  
			async getDespatchingPendingList(){
				if (this.now_state.state==0){
					this.queryParams.designatedStatus= 33
				}
				//this.queryParams.designatedStatus= 33+','+ 40
			     var queryParams= this.queryParams 
				
				 var authorization = uni.getStorageSync("token")
				  
					  const res = await this.$request({
					  	 	url:"/app/dispatch/getDispatchListForAPP",
					  	 	
					  	 	header:{
					  	 		Authorization:authorization,
					  	 	},
					  	 	data:queryParams
					  	 })
				
					    
					  if(res.data.total == 0){
					  	setTimeout(()=>{
					  		this.show_not_found = true
					  	},30)
					  	return
					  }
					  
					  //stop sending request
					  if (this.queryParams.pageNum*this.queryParams.pageSize>=res.data.total){
					  	this.load_more = false
					  }
					  
					  if (this.despatching_pending_list.length<res.data.total){
					  	this.despatching_pending_list =[...this.despatching_pending_list,...res.data.rows]
					  	this.show_not_found = false
					  }else{
					  	uni.showToast({
					  		title:"没有更多的信息了",
					  		icon:"none"
					  	})
						
					  }
				 
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.copy{
		font-size: 18rpx;
		border: 1rpx solid #ddd;
		border-radius: 5rpx;
		padding: 5rpx;
		margin-left:20rpx;
		color:#0081FF;
	}
	.waybill-body{
		background-color: #fff;
	}
	
	.one-icon-hover{
		transform: scale(1.2);
	}
	.scroll-Y{
		height:95vh;
	}
	.one_waybill{
		background-color: #fff;
		border:1rpx solid #c8c7cc;
		border-radius: 10rpx;
		width:90%;
		margin-left:5%;
		margin-bottom:20rpx;
		.first-row{
			padding:20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.waybill_state{
				font-size:22rpx;
				color:#aaa;
			}
		}
		.waybill_details{
			border-top:1px solid #ccc;
			padding:20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.cuIcon-pullright{
				margin-left:10rpx;
				margin-right:10rpx;
			}
			.goods_name{
				margin-right:180rpx
			}
			.cuIcon-move{
				margin:0 10rpx 0 10rpx;
			}
			
			.actions{
				width:20%;
				position:relative;
				.cuIcon-phone{
					transform: scale(8);
				}
				
			}
			.receive-btn{
				width:100%;
				position:absolute;
				bottom:0;
				color:#fff;
				background-color: #f00;
				display:flex;
				justify-content: center;
				align-items: center;
				font-size:18rpx ;
			}
			
			.phone-img{
				width:100%;
				height:100rpx;	
			}
			
			/* #ifdef H5 */
			.phone-img{
				width:50%;
				height: 50%;
					margin:0 auto;
					display: block;
					
			}
			/* #endif */
		}
		.address{
			border-top:1rpx solid #ccc;
			padding:20rpx;
			color:#aaa;
		}
		
	}
</style>
