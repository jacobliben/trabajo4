// 单独配置url地址，便于以后维护
//正式版
 //const BASE_URL = 'https://wl.xcmgzhilian.com' + '/prod-api'
 //半测试版
 const BASE_URL = 'http://116.62.172.131:88'  + '/stage-api'
//测试版
//const BASE_URL = ' http://10.22.2.138:8080' 
//const BASE_URL = ' http://10.22.0.136:8080' 
// 暴露一个方法，用uni.uploadFile发送请求，异步处理的封装最好用promise
export const myRegisterCarrier = (form)=>{
	// resolve（成功之后的回调函数）和reject（失败之后的回调函数）
	return new Promise((resolve,reject)=>{
		// 使用uni.uploadFile发送请求
		uni.request({
			// 拼接请求地址
			url:BASE_URL+ '/registCarrier',
			
		    method:'POST',
			
			data: form||{},
			
			success: (res) => {
			
				resolve(res)
			},
			// 请求失败
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败!',
					icon: 'none',
				})
				reject(err)
			}
		})
	}).then(
	    value=>{
		console.log(value,'221')
		uni.showToast({
			title:value.data.msg,
			 duration: 3000,
			icon:"none",
		})
		
		if (value.data.msg === "操作成功"){
			
			setTimeout(()=>{
				uni.navigateTo({
					url:"/pages/finish_registering/finish_registering"
				})
			},300)
		}
	
	    }
	)
}
