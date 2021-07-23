<template>
	<view>
		 <view class="page-body">
		            <view class="page-section page-section-gap">
		                <map style="width: 100%; height: 700rpx;" 
						:latitude="latitude" :longitude="longitude" 
						:markers="covers" :polyline="polyline">
		                </map>
						
		            </view>
		        </view>
	</view>
</template>

<script>
	import amap from "js_sdk/js-amap/amap-wx.js"
	import Map from 'js_sdk/ms-openMap/openMap.js'
	import Amap from 'js_sdk/Lyn4ever-gaodeRoutePlanning/lyn4ever-gaode.js';
	
	var that
	var consignor_location//发货人地址
	var consignor_latitude //发货人latitude
	var consignor_longitude //发货人longitude
	var start_location //目前地址
	var start_latitude //目前latitude
	var start_longitude //目前longitude
	 var destiny_location
	var desti_location
	var dest_latitude
	var dest_longitude
	
	export default {
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 34.315564,
				longitude: 117.234135,
				covers: [] ,
				polyline: [],
				received_info:{},
			    lng :null,
				lat :null,
			}
		},
		
				 
		onLoad() {
			this.received_info = uni.getStorageSync("upload_item")
			 
			 var destiny_address = this.received_info.iscmDispatchInformationRecord.consigneeAddress
			 
			 that = this
		    
			//awake the Gaode Map APP
			
			uni.request({
				//传入高德web服务端key和目的地址
				 url: `https://restapi.amap.com/v3/geocode/geo?address=${destiny_address}&key=ae8b30ff7c227fb962010579230bf568`, //请求地名变经纬度
				
				 success:(res)=>{
					//解析出目的地地址的经纬度
						
						 destiny_location = res.data.geocodes[0].location
						
						 desti_location  = destiny_location.split(",")
						
						  dest_latitude =parseFloat(desti_location[1]) 
						  dest_longitude = parseFloat(desti_location[0])
						
						 //打开地图
						 Map.openMap(dest_latitude, dest_longitude, destiny_address, 'gcj02')
			    }
			})
			
			uni.getLocation({
						    type: 'gcj02',
							geocode:true,//设置该参数为true可直接获取经纬度及城市信息
						    success: function (res) {
								
								 start_longitude  =res.longitude
							     start_latitude   = res.latitude
								start_location = res.longitude + res.latitude;
						    },
							fail: function () {
								uni.showToast({
								    title: '获取地址失败',
									icon:'none'
								});
							}
						});
			
			
			
			// make the Gaode Map APP road planning
			
			
			  that = this;
			    var startPoi = start_location;
			    var wayPoi = "";
			    var endPoi = destiny_location;
			
			    Amap.line(startPoi, endPoi, wayPoi,function(res){
			        that.polyline.push(res)
			    });
			
			    Amap.markers(startPoi,endPoi,wayPoi,function(res){
			        that.markers.push.apply(that.markers,res)
			    })
			
			
			
		},
		
		
		methods: {
		    
		   },
		   
	}
</script>

<style>

</style>
