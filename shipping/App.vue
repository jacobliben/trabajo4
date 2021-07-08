<script>
	export default {
		
		onLaunch: function() {
		 // #ifdef APP-PLUS 
			plus.screen.lockOrientation('portrait-primary'); //锁定竖屏 
		// #endif	
		},
		onShow: function() {
			//console.log('App Show')
			
			//if there is no network
			uni.getNetworkType({
					success:function(res){
						let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
						let curRoute = routes[routes.length - 1].route //获取当前页面路由
						uni.setStorageSync("current_page",curRoute)
						if(res.networkType=='none'){
							setTimeout(()=>{
								uni.showToast({
									icon:'none',
									title:'网络异常,请检查网络设置!',
									duration:2000,
									position:'bottom'
								})
								
								uni.reLaunch({
									url:"/pages/no_network/no_network"
								})
							},20)
							
						}
						
					}
				});
				
				//listen to the network change 
				uni.onNetworkStatusChange(function(res) {
								if(!res.isConnected){
									uni.showToast({
										title:"当前网络异常！",
										icon:'none',
										duration:2000,
										position:'bottom'
									})
								} //当前是否有网络连接
							});
							
				
				//listen if the wifi is weak
				// #ifdef APP-PLUS
				 
				  var wifiManager, wifiInfo;  
				            var Context = plus.android.importClass("android.content.Context");  
				            var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");  
				            var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");  
				            wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);  
				            wifiInfo = wifiManager.getConnectionInfo(); 
							var wifi = wifiInfo.getRssi()		
						    
							if (wifi > -50 && wifi < 0) {//最强  满格信号 4格
							    //            uni.showToast({
							    //            	title:"wifi信号最强",
											// icon:"none"
							    //            })
							            } else if (wifi > -70 && wifi < -50) {//较强  3格
							               // uni.showToast({
							               // 	title:"wifi信号较强",
							               // 	icon:"none"
							               // })
							            } else if (wifi > -80 && wifi < -70) {//较弱  2格
										setTimeout(()=>{
							               uni.showToast({
							               	title:"wifi信号较弱, 将影响APP功能",
							               	icon:"none",
											duration:2000,
											position:'bottom'
							               })
										   uni.reLaunch({
										   		url:"/pages/no_network/no_network"
										   	})
										   },20)
							            } else if (wifi > -100 && wifi < -80) {//微弱 1格
										setTimeout(()=>{
							                uni.showToast({
							                	title:"wifi信号微弱, 将影响APP功能",
							                	icon:"none",
												duration:2000,
												position:'bottom'
							                })
											uni.reLaunch({
													url:"/pages/no_network/no_network"
												})
											},20)
							            }
										
						// #endif				

		},
		onHide: function() {
			//console.log('App Hide')
		},
		globalData:{
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	@import url("~@/colorui/animation.css");
	@import url("~@/colorui/icon.css");
	@import url("~@/colorui/main.css");
	/* #endif */
</style>
