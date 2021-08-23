
// 暴露一个方法，用uni.chooseImage发送请求，异步处理的封装最好用promise
export const myImage = (options)=>{
	// resolve（成功之后的回调函数）和reject（失败之后的回调函数）
	return new Promise((resolve,reject)=>{
		// 使用uni.uploadFile发送请求
		uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['camera','album'], 
			    success: options.success,
			// 请求失败
			   fail: (err) => {
				uni.showToast({
					title: "拍照失败",
					icon: 'none',
				})
				reject(err)
			}
		})
	})
}
