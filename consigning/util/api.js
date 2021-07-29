// 单独配置url地址，便于以后维护
//正式版
//const BASE_URL = 'https://wl.xcmgzhilian.com' + '/prod-api'
//半测试版

const BASE_URL = 'http://116.62.172.131:88'  + '/stage-api'
//测试版
//const BASE_URL = 'http://10.22.2.138:8080'  
//const BASE_URL = 'http://10.22.0.136:8080'
// 暴露一个方法，用uni.request发送请求，异步处理的封装最好用promise
export const myRequest = (options)=>{
	// resolve（成功之后的回调函数）和reject（失败之后的回调函数）
	return new Promise((resolve,reject)=>{
		// 使用uni.request发送请求
		uni.request({
			// 拼接请求地址
			url:BASE_URL+options.url,
			// 请求方式
			method: options.method || 'GET',
			// 数据
			data: options.data || {},
			
			header:options.header || {},
			
			
			// 请求成功
			success: (res) => {
				
				resolve(res)
			},
			// 请求失败
			fail: (err) => {
				uni.getNetworkType({
						success:function(res){
							
							if(res.networkType=='none'){
								setTimeout(()=>{
									uni.showToast({
										icon:'none',
										title:'网络异常,请检查网络设置!',
										duration:2000,
										position:'bottom'
									})
									
									uni.navigateTo({
										url:"/pages/no_network/no_network"
									})
								},200)
								
							}	
							
						}
					});
				
				uni.showToast({
					title: '请求接口失败!',
					icon: 'none',
				})
				reject(err)
			}
		})
	})
}

