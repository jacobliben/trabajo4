<template>
	<view>
		<view class="goods-sec ">
			<view class="dispatch-no" >
				<view class="dispatch-title">承运合同</view>
				<view class="dispatch-num">合同编号：CYHT0A210824376660</view>
			</view>
			
			<view class="vehicle-info">
				<view class="first-driver text-black ">甲方：（托运人）</view>
				<view class="first-driver text-white">证件号：</view>
				<view class="goods-weight">联系人：</view>
				<view class="goods-weight">联系电话：</view>
			</view>
			
			<view class="vehicle-info">
				<view class="first-driver text-black">乙方：徐州市聚诚运输有限公司（承运人）</view>
				<view class="first-driver text-white">证件号：</view>
				<view class="goods-weight">联系人：</view>
				<view class="goods-weight">联系电话：13685141842</view>
			</view>
			
			
			<!-- <view class="vehicle-info">
				<view class="goods-nombre"></view>
				<view class="goods-nombre"></view>
				<view class="goods-nombre"></view>
			</view> -->
			
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第1条 运输服务内容
			</view>
			
			<view>
				乙方根据甲方需求，向甲方提供运输服务，具体包括以下服务项目：
			</view>
			
			
			<view>
				供应地：上海市邯郸路220号 发货人：李程(发货) 联系方式：18799990001
			</view>
			
			<view>
				接收地：徐州市铜山路209号 收货人：李程(收货) 联系方式：15806890123
			</view>
			
			
			<view>
				货物信息：测试qqq
			</view>
			
			<view>
				运输方式：公路
			</view>
			
			<view>
				数量：
			</view>
			
			<view>
				吨位：
			</view>
			
			<view>
				计价方式：
			</view>
			
			<view>
				运费单价(元)：
			</view>
			
			
			<view>
				运费金额(元)：99
			</view>
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第2条 服务期限
			</view>
			
			<view>
				乙方为甲方的服务期限自 {{new Date().getFullYear()}}年 {{new Date().getMonth()+1}}月{{new Date().getDate()}}日起生效。
			</view>
			
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第3条 甲方权利和义务
			</view>
			
			<view>
				3.1 在乙方提供服务的过程中，甲方及时向乙方提供本合同标的涉及到的物品、收货方资料等必要的材料、协助及乙方提出的合理配合。
			</view>
			
			<view>
				3.2 甲方按照本合同约定，如期向乙方支付相应的物流服务费用。
			</view>
			
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第4条 乙方权利和义务
			</view>
			
			<view>
				4.1 乙方具备从事本合同各物流服务活动的资质，若甲方要求，乙方应及时提供相关文件。
			</view>
			
			<view>
				4.2 乙方具备或者能够获得完成本合同项下各服务项目所需的物流资源和人力资源。
			</view>
			
			<view>
				4.3 乙方按照本合同约定，及时、有效地提供本合同约定的各项物流服务，并对服务的完成予以必要和充分的关注。
			</view>
			
			<view>
				4.4 乙方根据甲方的特点及对物流运作的要求制定良好的物流运行规范，必要时可要求甲方予以合理的配合。
			</view>
			
		</view>
		
		
		<view class="address-sec ">
			<view class="title">
				第5条 结算方式
			</view>
			
			<view>
				5.1 结算周期：见票后2个月内
			</view>
			
			<view>
				5.2 支付方式：电汇
			</view>
			
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第6条 违约责任
			</view>
			
			<view>
				如因乙方原因造成损失，乙方应承担运输过程风险。
			</view>
			
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第7条 争议的解决
			</view>
			
			<view>
				任何因本合同而产生的争议，双方应首先通过友好协商方式解决，协商不成可以在合同签约地徐州经济开发区人民法院提起诉讼。
			</view>
			
		</view>
		
		<view class="address-sec ">
			<view class="title">
				第8条 其他约定
			</view>
			
			<view>
				
			</view>
			
		</view>
		
		
		<view class="address-sec ">
			<view class="title">甲方：</view>
			
			<view>日期： {{new Date().getFullYear()}}年 {{new Date().getMonth()+1}}月{{new Date().getDate()}}日</view>
		</view>
		
		<view class="address-sec ">
			<view class="title">乙方：徐州市聚诚运输有限公司</view>
			
			<view>日期： {{new Date().getFullYear()}}年 {{new Date().getMonth()+1}}月{{new Date().getDate()}}日</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  .shipping_num{
	  font-size: 30rpx;
	  font-weight: 600;
	  margin:30rpx 10rpx 20rpx 30rpx;
  }
  .first-row{
	  width: 100%;
	  display: flex;
	  flex-direction: row;
  }
  
  .left-first-row{
	  width: 65%;
  }
  .right-first-row{
	  width:30%;
  }
  .details{
	  color:#bababa;
	  margin-left:30rpx;
	  text{
		  margin-right: 20rpx;
	  }	  
  } 
  .detail-btn{
	  margin-top:10%;
	 
  }
  .details_weight{
	  margin-top:10rpx;
	   margin-left:30rpx; 
	   margin-bottom:20rpx;
	   color:#6b8ac0;
	   text{
		   margin-right: 25rpx;
	   }
  }
  .navi{
	  
	  width:80rpx;
	  height:80rpx;
  }
  .navi-text{
	  color:#1296db;
	  align-items: center;
	  margin-left:5rpx;
  }
 
  .address-name{
	  font-size: 20rpx;
  }
  .bars{
	  border-top:1px solid #f4f4f4;
	  display: flex;
	  justify-content: space-evenly;
	  flex-direction: row;
	  width:100%;
	  height:200rpx;
	  
	  view{
		  position: relative;
		  width:50%;
		  text-align: center;
		  .tachar{
			  position: absolute;
			  width:60rpx;
			  height: 60rpx;
			  left:40%;
			  
		  }
		  
		  .zoom{
			  position: absolute;
			  width:60rpx;
			  height: 60rpx;
			  right:0;
			  
		  }
		  
		  .big-image{
		  		  width:50%;
				  height:150rpx;
				  margin-top:30rpx;
				  margin-left:5%;
				  display: inline-block;
				  
		  }
		  .barcode{
			  width:30%;
			
		  }
	       .big-caption {
		  		  width:50%;
				  height:50rpx;
				  margin-left:5%;
				  display: inline-block;
				   color:#b8b8b8;
				  
		  }
		  
	  }
  }
  
  .progress-bar{
	  width:80%;
	  margin-left:20rpx;
	  margin-top:30rpx;
  }
  
  .right-navigate{
	  width:30%;
  }
  
  .btns{
	width:100%;
	display:flex;
	justify-content:center;
	margin-top:30rpx;
  }
  
  .top-gap{
	  margin-top:40rpx;
  }
  .submit-btn{
	  background-color: #3dbf41;
	  margin:30rpx auto;
	  border-radius: 10rpx;
	  color: #fff;
	  width:500rpx;
	  height:100rpx;
	  font-size: 35rpx;
	  line-height: 100rpx;
	  margin-left: 30rpx;
  }
  .details-body{
  	background-color: #fff;
  }
   .current-state{
  	 margin-top:10rpx;
  	 margin-left:10rpx;
  	 margin-bottom: 25rpx;
  	 border-left:3rpx solid orange;
	
  	 padding-left: 30rpx;
  	 color:#000;
  	 font-size:30rpx;
  	 font-weight: 800;
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
   }
   
   .ordinary{
  	 color: #a1a1a1;
   }
   
   .name{
	 font-size:35rpx;
  	 color:#999999;
   }
   .ref-name{
   		 font-size:30rpx;
  		
   }
.red{
	color:#f00;
}
 
 
 
 .ref-name-m{
 	
 	padding-left:40%;
 	padding-right:0;
 }
 
 .remark{
 	
 	padding-left:60%;
 	padding-right:0;
 }
 
 
 .goods-sec{
	 padding: 30rpx;
	 margin:20rpx;
	 height: 650rpx;
	 background-color: #5fcf6f;
	 border-radius: 25rpx;
	 box-shadow: 5rpx 5rpx 5rpx #ccc;
 }
 
 
 .dispatch-no{
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 color: #fff;
 }
  
  
  .dispatch-title{
	  font-weight: 600;
	  font-size: 40rpx;
	  
  } 
  
  
  .vehicle-info{
	  margin: 10rpx;
	  margin-top: 30rpx;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
  }
  
  .first-driver{
	  margin-top:10rpx ;
	  font-weight: 600;
	  font-size: 35rpx;
	 
  }
  
  .goods-weight{
	    margin-top:10rpx ;
	  color: #fff;
	  font-weight: 600;
	  font-size: 30rpx;
  }
  
  .goods-nombre{
	    margin-top:10rpx ;
	  color: #fff;
	  border:1rpx solid #ccc;
	  font-size: 25rpx;
	  border-radius: 5rpx;
	  padding: 5rpx;
  }
  
  .address-sec{
	   
	  padding: 30rpx;
	  margin:20rpx;
	 
	  border: 1rpx solid #bfbfbf;
	  background-color: #fff;
	  border-radius: 25rpx;
	  box-shadow: 5rpx 5rpx 5rpx #ccc;
	  
	  .title{
		  font-weight: 600;
	  }
	  
	  view{
		  margin-top:10rpx ;
	  }
  }
  
  .address-no{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  color: #000;
  }
  
  
  .address-title{
  	  font-weight: 600;
  	  font-size: 40rpx;
  	  
  } 
  
  .dispatch-num{
	  font-weight: 600;
	  font-size: 25rpx;
  }
  
  
  .circle{
  	   width: 25rpx;
  	   height:20rpx ;
  }
  
  .start-point{
  	   padding: 20rpx;
  	   text{
  		   margin-left: 40rpx;
  		   font-size: 38rpx;
  		   font-weight: 600;
  	   }
  }
  .addr{
  	   margin: 10rpx;
  	   margin-left: 60rpx;
  	   .addr-input{
  		  color: #8ca2b5; 
  	   }
  	   
  	   
  }
  
  .vertical-line{
  	   margin-top: -50rpx;
  	   margin-left:30rpx;
  	   height: 40rpx;
  	   border-left:1rpx solid #cbcbcb;
  }
  
  .red{
  	color: #f00;
  }
  
  
  .shipper-name-new{
	  margin: 10rpx;
	  padding-left: 20rpx;
	  
  }
  
  .telephone{
	 color: #1366d7; 
  }
  
  .load{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  padding-left: 20rpx;
	  margin-left: 50rpx;
	  font-size:25rpx;
	  font-weight:400;
	 
  }
  
  .load-info{
	 
  	  .load-title{
		 color: #1f89d7; 
		 background-color: #f0f0f0;
		 padding: 10rpx;
		 border-radius: 5rpx;
		 margin-right: 20rpx;
	  }
  }
  
  .flex-group{
	 
	  display: flex;
	  flex-direction: row;
	  justify-content: cneter;
  }
  
  .action{
	
	  margin-right: 30rpx;
  }
  
  
</style>

