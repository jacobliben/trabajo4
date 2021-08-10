<template>
	<view>
		<view class="title">选择关联车老板账号</view>
		
		<view class="">
					    <checkbox-group @change="checkboxChange">
					                    <label class=" top-line flex-bar flex" hover-class="icon-hover"
										 v-for="item in items" :key="item.value">
					                        <view class="name">{{item.name}}</view>
											<view>{{item.tel}}</view>
											<view>
					                            <checkbox :value="item.value" :checked="item.checked" />
					                        </view>
					                        
					                    </label>
					                </checkbox-group>
		</view>
		
		<view class="btns">
			<button type="primary" size="mini" @click="requestAddCarBoss">请求关联车老板</button>
		</view>
		<view class="notes">
			<view>对方登录本软件后会接收到您发出的"关联车老板"请求信息,
			并决定"接受"或者"拒绝"您的请求。对方接受请求后，您就自动和他关联了。</view>
		</view>
		
		<view class="notes">
			<view>{{received_msg}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				received_msg:"",
				items: [{
				                        value: '123',
										tel: '',
				                        name: '自己承运'
				                    },
					
					{
				                        value: 'USA',
										tel: '139XXXX6153',
				                        name: '张大明'
				                    },
				                    {
				                        value: 'CHN',
										tel: '133XXXX2187',
				                        name: '李小赵',
				                        
				                    },
				                    {
				                        value: 'BRA',
										tel: '133XXXX2187',
				                        name: '王自钱'
				                    },
				                 
				                  
				                ]
			}
		},
		methods: {
			 checkboxChange: function (e) {
			                var items = this.items,
			                    values = e.detail.value;
								
			                for (var i = 0, lenI = items.length; i < lenI; ++i) {
			                    const item = items[i]
			                    if(values.includes(item.value)){
			                        this.$set(item,'checked',true)
			                    }else{
			                        this.$set(item,'checked',false)
			                    }
			                }
			            },
						
						requestAddCarBoss(){
							var msg="dada"
							var socketOpen = false;
							var socketMsgQueue = [];
							
							uni.connectSocket({
							  url: 'ws://echo.websocket.org'
							});
							
							uni.onSocketOpen(function (res) {
							  socketOpen = true;
							  uni.sendSocketMessage({
							        data: "您好，黄贤勇现在添加您为车老板，您可以接受或者拒绝"
							      });
								uni.onSocketMessage(function (res) {
								 
								});  
								  
							});
							
							
							
						},
		}
	}
</script>

<style lang="scss" scoped>
    .title{
		width: 100%;
		height:150rpx;
		line-height::150rpx ;
		font-size: 40rpx;
		background-color:#deeaf4 ;
		color:#138be7;
		margin:20rpx;
		font-weight:600;
		text-align: center;
	}
	
	.icon-hover{
		color: #0081FF;
	}
	
	.top-line{
	 		 border-top:1rpx solid #d5d5d8;
	 }
	 
	 .flex-bar{
	 		 display: flex;
	 		 justify-content: space-between;
	 		 padding-left: 5%;
	 		 padding-right: 5%;;
	 		 padding-top:15rpx;
	 		 padding-bottom:15rpx;
			 
			 .name{
				 border-left:3rpx solid #0081FF;
				 padding-left: 10rpx;
			 }
	 }
	 
	 
	 .name{
	 		 color:#000;
	 }
	 .ref-name{
	 		 font-size:18rpx;
	 			 color:#999;
	 }
	 
	 .btns{
		 width:90%;
		 margin-left:5%;
		 display: flex;
		 flex-direction: row;
	 }
	 
	 .notes{
		 width:80%;
		 margin-left:10%;
		 font-size: 20rpx;
		 color:#999;
		 text-align: center;
		 margin-top:10rpx;
	 }
</style>
