<template>
	<view>         
	        <view class="head-input">
				<view class="place flex">
				      <text class=" cuIcon-title text-blue"></text>
				      <text class="place_input text-gray "  v-if="!origin_has_input" @click="selectOrigin">请选择起始地</text>
				      <!-- <textarea  class="place_input " v-model="pickerTextOrigin"  @click="selectOrigin"  v-if="origin_has_input"></textarea>  --> 
					  <text  class="place_input " v-model="pickerTextOrigin"  @click="selectOrigin"  v-if="origin_has_input">{{pickerTextOrigin}} </text>
				  </view>
				<view class="place flex">
				      <text class=" cuIcon-title text-pink"></text>
				       <text class="place_input text-gray " v-if="!desti_has_input" @click="selectDesti">请选择目的地</text>
				     <!-- <textarea  class="place_input" v-model="pickerTextDesti" @click="selectDesti" v-if="desti_has_input"></textarea> -->
					  <text  class="place_input" v-model="pickerTextDesti" @click="selectDesti" v-if="desti_has_input">{{pickerTextDesti}}</text>
				</view>					
			</view>
			<view class="can-choose" v-show="show_choice">
				<view class="choose-title">路线偏好</view>
				<view >
				                <radio-group @change="radioChange" class="radios">
				                                <label class="radio-items" v-for="(item, index) in items" :key="item.value">
				                                    <view>
				                                        <radio :value="item.value" :checked="index === current" />
				                                    </view>
				                                    <view>{{item.name}}</view>
				                                </label>
				                </radio-group>
				</view>
				<view class="for-distance">
					<view>
						<view>大约里程： {{short_distance}} 公里</view>
					</view>
					
					<button size="mini" @click="calcuFee" class="calc-btn bg-gradual-green"> 运费计算</button>
				</view>
			</view>
			
			<!-- the map -->
	          <view class="body-map">
				  <map style="width: 750rpx; height:400rpx;"
				  :latitude="latitude" :longitude="longitude" 
				  :markers="covers" :polyline="polyline">
				  </map>
			  </view>
				  
				<!--  modal input -->
				   <view class="cu-modal bottom-modal" :class="modalName=='FeeInput'?'show':''">
				              <view class="cu-dialog">
				                  <view class="bg-img" style="height:250rpx;">
									 
									  <view class="cu-bar bg-white topline">
									    <view class="action   text-green flex-sub" style="text-align: left;" @click="hideModal">取消</view>
									          <view class=" cu-bar text-bold flex-sub justify-center"><view>输入运费</view></view>
									      <view class="action flex-sub   text-blue " @click="getTotalFee">确定</view>
									  </view>
				                      <view class="cu-bar justify-center">
				                          <view >
											  <view class=" cu-bar">
												  <text>每公里运费为：</text>
												  <input type="number" placeholder="请输入费率" 
												   @input="getFeePerKm">
												  <text>元</text>
											</view>
				                          </view>
				                      </view>
				                  </view>
				                 
				              </view>
				          </view>
				  
				  <!--  modal Total Fee -->
				     <view class="cu-modal  bottom-modal" :class="modalNameBottom=='FeeTotal'?'show':''">
				                <view class="cu-dialog">
				                    <view class="bg-img" style="height:250rpx;">
										<view class="cu-bar bg-white">
										  <view class="action margin-0 flex-sub text-green solid-left" @click="hideModalBottom">取消</view>
										        <view class=" cu-bar text-bold">总运输费</view>
										    <view class="action margin-0 flex-sub  text-blue solid-left" @click="hideModalBottom">确定</view>
										</view>
										
				                        <view class="cu-bar justify-center">
				  							  <view class="total_fee_vertical">
				  								  <view><text class="one-row">距离为： {{short_distance}} 公里</text></view>
				  								  <view> <text class=" one-row cuIcon-moneybagfill lg ">费用</text></view>
												  <view> <text class=" one-row cuIcon-coin lg total-fee">{{total_fee}} 元</text></view>
				  							</view>
				                        </view>
				                    </view>
				                    
				                </view>
				            </view>
				  
		      
		         <simple-address ref="simpleAddressOrigin" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirmOrigin" themeColor="#007AFF"></simple-address>
				 <simple-address ref="simpleAddressDesti" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirmDesti" themeColor="#007AFF"></simple-address>
	</view>
</template>

<script>
	import amapFile from "js_sdk/Lyn4ever-gaodeRoutePlanning/amap-uni.js"
	import simpleAddress from '@/components/simple-address/simple-address.vue';
	import Amap from 'js_sdk/Lyn4ever-gaodeRoutePlanning/lyn4ever-gaode.js';
	var that
	var origin_location
	var origin_latitude
	var origin_longitude
	var destiny_location
	var destiny_latitude
	var destiny_longitude
   
	
	export default{
		data(){
			return{
			   cityPickerValueDefault: [0, 0, 1],
			    pickerTextOrigin: '',
				pickerTextDesti: '',
				origin_has_input:false,
				desti_has_input:false,
				items: [{
				                    value: 'speed_important',
				                    name: '速度最快'
				                },
				                {
				                    value: 'fee_important',
				                    name: '费用最低',
				                    
				                },
				                {
				                    value: 'distance_important',
				                    name: '距离最短'
				                },
				                
				            ],
				  current: 0,
				  short_distance:null,
				  fee_per_km:null,
				  show_choice:false,
				  modalName: null,
				  total_fee:null,
				  modalNameBottom: null,		  
				    longitude: 117.234135,//经度
				    latitude: 34.315564, //纬度	
				  
					id:0,	 
				  covers: [],
				  polyline: [],
				  
				  
			}
		},
		components: {
		        simpleAddress,
				
				
		    },
        onLoad(){
			// #ifdef APP-PLUS 
			plus.screen.lockOrientation('portrait-primary'); 
			// #endif
		},
		
		methods:{
			        setData:function(obj){
			        	let that = this;    
			        	let keys = [];    
			        	let val,data;    
			        	Object.keys(obj).forEach(function(key){    
			        	 keys = key.split('.');    
			        	 val = obj[key];    
			        	 data = that.$data;    
			        	 keys.forEach(function(key2,index){    
			        	     if(index+1 == keys.length){    
			        	         that.$set(data,key2,val);    
			        	     }else{    
			        	         if(!data[key2]){    
			        	            that.$set(data,key2,{});    
			        	         }    
			        	     }    
			        	     data = data[key2];    
			        	 })    
			        	});    
			        },
			        selectOrigin() {
			            // 根据 label 获取
						
			            var index = this.$refs.simpleAddressOrigin.queryIndex(['江苏省', '徐州市', '云龙区'], 'label');
			            
			            this.cityPickerValueDefault = index.index;
			            this.$refs.simpleAddressOrigin.open();
			        },
					selectDesti() {
					    // 根据 label 获取
					    var index = this.$refs.simpleAddressDesti.queryIndex(['江苏省', '徐州市', '云龙区'], 'label');
					    
					    this.cityPickerValueDefault = index.index;
					    this.$refs.simpleAddressDesti.open();
					},
					radioChange: function(evt) {
					           for (let i = 0; i < this.items.length; i++) {
					               if (this.items[i].value === evt.target.value) {
					                   this.current = i;
										
										//for calcating distance of delivery
										this.findPath()
					                   break;
															
					               }
					           }
					       },
			       
			        onConfirmOrigin(e) {
						
						if(e.provinceCode==11
						||e.provinceCode==31
						||e.provinceCode==12||e.provinceCode==50){
							this.pickerTextOrigin = e.labelArr[0]+e.labelArr[2]
						}
						else{
							this.pickerTextOrigin = e.labelArr[0]+e.labelArr[1]+e.labelArr[2]
						}
						
						this.origin_has_input = true
						
						if( origin_latitude&&origin_longitude&&destiny_location&&destiny_latitude){
							 this.findPath()
						}
						
			        },
					findPath(){
						var that = this
						//for calcating distance of delivery
						uni.request({
							//传入高德web服务端key和发货地址
							 url: `https://restapi.amap.com/v3/geocode/geo?address=${that.pickerTextOrigin}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
							
							success:(res)=>{
									origin_location  = res.data.geocodes[0].location.split(",")
									  origin_latitude =parseFloat(origin_location[1]) 
									  origin_longitude = parseFloat(origin_location[0])
																   
									 uni.request({
									 	//传入高德web服务端key和目的地址
									 	 url: `https://restapi.amap.com/v3/geocode/geo?address=${that.pickerTextDesti}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
									 	
									 	success:(res)=>{
									 		
									 			 destiny_location  = res.data.geocodes[0].location.split(",")
									 			  destiny_latitude =parseFloat(destiny_location[1]) 
									 			  destiny_longitude = parseFloat(destiny_location[0])
												
												 uni.request({
												 	//传入高德web服务端key和规划线路
												 	// url: `https://restapi.amap.com/v4/direction/truck?origin=${origin_longitude}%2C${origin_latitude}&destination=${destiny_longitude}%2C${destiny_latitude}&size=3&key=ae8b30ff7c227fb962010579230bf568`, //货车规划
												 	url: `https://restapi.amap.com/v3/direction/driving?origin=${origin_longitude}%2C${origin_latitude}&destination=${destiny_longitude}%2C${destiny_latitude}&strategy=${that.current||0}&key=ae8b30ff7c227fb962010579230bf568`,
												 	success:(res)=>{
												 			 
															  that.short_distance=parseFloat(res.data.route.paths[0].distance)/1000
															   that.short_distance= that.short_distance
															    that.short_distance= that.short_distance.toFixed(2)
																
															 //console.log( res.data.data.route.paths.duration,"货车规划")	
																//draw the route
																that.drawRoutes()										  
												     }
												 })
												 
									 			 
									     }
									 })	 
						    }
						})
						
					},
					onConfirmDesti(e) {
						var that = this
						
						if(e.provinceCode==11
						||e.provinceCode==31
						||e.provinceCode==12||e.provinceCode==50){
							this.pickerTextDesti = e.labelArr[0]+e.labelArr[2]
						}
						else{
							this.pickerTextDesti = e.labelArr[0]+e.labelArr[1]+e.labelArr[2]
						}
	
						this.desti_has_input = true
					
						//for calcating distance of delivery
					    this.findPath()
						this.show_choice = true
						
						
						// make the Gaode Map APP road planning
						 
						
					},
					calcuFee(e){
						
						this.modalName ='FeeInput'
						
				     },
					getTotalFee(){
						this.total_fee = this.fee_per_km * this.short_distance
						this.total_fee = this.total_fee.toFixed(2)
						
						this.modalName = null
						this.modalNameBottom = 'FeeTotal'
					},
					
					hideModal(e) {
					                this.modalName = null
					            },
					getFeePerKm(e){
					               
									this.fee_per_km = e.detail.value
									
					            },		
					
					hideModalBottom(e) {
					                this.modalNameBottom = null
					            },
								
					// draw the routes between the origin and the destination in map			
					drawRoutes(){
						 that = this;
						var origin_place = origin_longitude +","+ origin_latitude
						var destiny_place = destiny_longitude +","+ destiny_latitude
						
						    let myAmapFun = new amapFile.AMapWX({key:'91897d2c2d83d2cf1b694feb173e4fc9'});//高德微信小程序SDK的key
						    myAmapFun.getDrivingRoute({
								origin: origin_place,
								destination: destiny_place,
								strategy:that.current||0,
						      success: function(data){
								  that.latitude=origin_latitude
				                  that.longitude= origin_longitude
						        //成功回调
								var points = [];
								
								 if(data.paths && data.paths[0] && data.paths[0].steps){
								          var steps = data.paths[0].steps;
								          for(var i = 0; i < steps.length; i++){
								            var poLen = steps[i].polyline.split(';');
								            for(var j = 0;j < poLen.length; j++){
								             points.push({
								                longitude: parseFloat(poLen[j].split(',')[0]),
								                latitude: parseFloat(poLen[j].split(',')[1])
								              })
								            } 
								          }
								        }
									that.covers= [
														  {
									    latitude: origin_latitude,
									    longitude: origin_longitude,
									    iconPath: '/static/start-point2.png',
														  width: 23,
														  height: 23
									}, {
									    latitude: destiny_latitude,
									    longitude: destiny_longitude,
									    iconPath: '/static/end-point2.png',
														  width: 23,
														  height: 23
									},
									]
									that.polyline= [{
									            points: points,
												color:"#0000AA",//线的颜色
												 width:6,//线的宽度
												 dottedLine:true,//是否虚线
												 arrowLine:true,    //带箭头的线 开发者工具暂不支持该属性		       
									            
									          }]	
					           
						      },
						      fail: function(info){
						        //失败回调
								
						      }
						})
						
					},
								
				
					
		}
	}
</script>

<style lang="scss" scoped>
	
	.place_input{
		width:100%;
		border-bottom:1px solid #ddd;
		height: 50rpx;
		margin-left: 20rpx;
		
	}
	.body-map{
		width:750rpx;
		
	}
	
	.can-choose{
		width: 100%;
		margin:5rpx 0;
		
		.choose-title{
			width: 90%;
			margin-left:5%;
			padding-left:5%;
			margin-bottom:5rpx;
			border-left:2rpx solid #007AFF;
		}
		.radios{
			display: flex;
			flex-direction: row;
			width: 100%;
			padding:5rpx;
			color:#1f1698;
			justify-content: space-evenly;
			.radio-items{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
		.for-distance{
			display: flex;
			flex-direction: row;
			
			width: 90%;
			color:#1f1698;
			margin-left: 5%;
			align-items: center;
			
			
		}
		.calc-btn{
			margin-left:25%;
		}
		.total_fee_vertical{
			display: flex;
			flex-direction: column;
			.one-row{
				border-top:1rpx solid #ddd;
				margin:20rpx auto;
			}
		}
		.total-fee{
			font-size:50rpx;
		}
		.topline{
			border:1rpx solid red;
		}
	}
</style>
