<template>
	<view class="shipping-order-body">
		<scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		  lower-threshold="200" enable-flex="true">
		<view v-for="(item,index) in message_list" :key="index" class="one_shipping" >
			<view class="first-row">
				<view>
				<text selectable class="message-title">{{item.title}}</text>
				<text class="copy" @click="copy(item)">复制</text>
				</view>
				
			</view>
			<view class="shipping_details">
				<view class="shipping_content">
					<view class="message-body" style="">
						<text class="cuIcon-message lg text-gray"> </text>
						<text>{{item.messageContent}}</text>
						
					</view>
					<view>
						<view class="goods_name">接收人名称：{{item.receiverBy}}</view>		
						<view>阅读时间：{{item.readingTime}}</view>
						<view>创建人名称：{{item.createBy}}</view>
					</view>
				
				</view>
				
				    <view class="actions">
						<button type="default" 
						data-index=''  class="receive-btn radius" @click="showModal(item)">查看</button>
					</view>	
			</view>
			
			  
			<view class="address">
				<text>创建时间：{{item.createTime}}</text>
			</view>
			
			<!--  the dialog of detailed message -->
			<view class="cu-modal show" v-if="show_modal" >
				
				<view class="cu-dialog" >
					<view class="cu-bar bg-white justify-end">
						<view class="content">{{msg_title}}</view>
						<view @click="hideModal()" class="action">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="msg-time">{{msg_create_time}}</view>
					<view class="padding-xl">
						  {{msg_content}}
					</view>
					<button  type="primary" size="mini" @click="hasSee()">已阅</button>
				</view>
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
			  message_list:[],
			
			  id_token:'',
			  show_modal:false,
			  show_not_found:false,
			  now_state:this.transporte_state,
			  queryParams: {
			            pageNum: 1,
			            pageSize: 7,
			            title: null,
			            messageContent: null,
			            readingTime: null,
			            receiverBy: null,
			            createId: null,
			            receiverId: null,
			            msgStatus: null,       
			          },
				msg_create_time:"",	  
			    msg_title:"",		  
			   msg_content:"",		  
			}
		},
		props:["transporte_state"],
		components:{
			infoNotFound
		},
		created(){
		
			
		},
		mounted(){
			
			uni.setNavigationBarTitle({
				title:`${this.now_state.text}消息`
			})
			
			
		    this.getMessageList()
			
		     
		},
		methods:{
			upper: function(e) {
			           console.log(e,'11111')
			       },
			lower: function(e) {
			           console.log(e,'222222')
									this.queryParams.pageNum += this.queryParams.pageSize
									this.getMessageList()
			       },
			async showModal(item){
				
				//显示modal消息
				this.show_modal = true 
				this.msg_title = item.title
				this.msg_create_time = item.createTime
				this.msg_content = item.messageContent
			    var authorization = uni.getStorageSync("token")
				const msgID = item.msgId
				console.log (msgID,'1v1')
				//将该信息标为“已读”
				let markReadMsg = await this.$request({
					 	url:"/iscm/msg/markRead/" + msgID,
					 	method: 'Put',
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					 
				this.getMessageList()	 
			},
		    hideModal(){
				this.show_modal = false
			},
			hasSee(){
				this.show_modal = false
				
			},
			 
			copy(data){
				var that = this
				uni.setClipboardData({
				    data:data,
				    success: function () {
				        console.log('success');
						uni.showToast({
							title:"copy"
						})
				    }
				});
			},
			 async getMessageList(){
				
				var authorization = uni.getStorageSync("token")
				this.queryParams.msgStatus = this.now_state.msgStatus
				
				const queryParams = this.queryParams
				
				const msgParams = queryParams.msgStatus
				
				
				if (msgParams!=null){
					let resMsg = await this.$request({
						 	url:"/iscm/msg/list?pageNum=1&pageSize=7&msgStatus=" + msgParams,
						 	
						 	header:{
						 		Authorization:authorization,
						 	},
						 	
						 })
					this.message_list = resMsg.data.rows
					console.log(resMsg,'slbgw111')
					
					//如果后台请求消息数为0，直接告知没有消息
					if(resMsg.data.total == 0){
						setTimeout(()=>{
							this.show_not_found = true
						},30)
						return
					}
					//否则一直加载，知道没有更多消息
					if (this.message_list.length<resMsg.data.total){
						this.message_list =[...this.message_list,...resMsg.data.rows]
						this.show_not_found = false
					}else{
						uni.showToast({
							title:"没有更多的信息了",
							icon:"none"
						})
						
					}
				}else{
					let resMsg = await this.$request({
						 	url:"/iscm/msg/list?pageNum=1&pageSize=7",
						 	
						 	header:{
						 		Authorization:authorization,
						 	},
						 	
						 })
					this.message_list = resMsg.data.rows
					console.log(resMsg,'slbgw111')
					
					
					//如果后台请求消息数为0，直接告知没有消息
					if(resMsg.data.total == 0){
						setTimeout(()=>{
							this.show_not_found = true
						},30)
						return
					}
					//否则一直加载，知道没有更多消息
					if (this.message_list.length<resMsg.data.total){
						this.message_list =[...this.message_list,...resMsg.data.rows]
						this.show_not_found = false
					}else{
						uni.showToast({
							title:"没有更多的信息了",
							icon:"none"
						})
						
					}
				}
				
				
				
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.shipping_content{
		width:70%;
		
	}
	.copy{
		font-size: 18rpx;
		border: 1rpx solid #ddd;
		border-radius: 5rpx;
		padding: 5rpx;
		margin-left:20rpx;
		color:#0081FF;
	}
	.shipping-order-body{
		background-color: #fff;
	}
	
	.one-icon-hover{
		transform: scale(1.2);
	}
	
	.scroll-Y{
		height:95vh;
	}
	.one_shipping{
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
			.shipping_state{
				font-size:22rpx;
				color:#aaa;
			}
		}
		.shipping_details{
			border-top:1px solid #ccc;
			padding:20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.cuIcon-message{
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
				width:30%;
				position:relative;
				
			}
			.receive-btn{
				width:200rpx;
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
		
		.message-body{
			text-overflow:ellipsis;
			overflow:hidden;
			white-space:nowrap;
			width:550rpx;
		}
		.msg-time{
			color:#aaa;
		}
		
	}
	
	
.cu-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1110;
	opacity: 0;
	outline: 0;
	text-align: center;
	-ms-transform: scale(1.185);
	transform: scale(1.185);
	backface-visibility: hidden;
	perspective: 2000upx;
	background: rgba(0, 0, 0, 0.6);
	transition: all 0.3s ease-in-out 0s;
	pointer-events: none;
}

.cu-modal::before {
	content: "\200B";
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}
	
	.cu-modal.show {
		opacity: 1;
		transition-duration: 0.3s;
		-ms-transform: scale(1);
		transform: scale(1);
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}
	
	.cu-dialog {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		width: 680upx;
		max-width: 100%;
		background-color: #f8f8f8;
		border-radius: 10upx;
		overflow: hidden;
	}
	
	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}
	
	.padding-xl {
		padding: 50upx;
	}
</style>
