import {ossLocation} from "@/util/pattern.js"
// 单独配置url地址，便于以后维护
//正式版
 //const BASE_URL = 'https://wl.xcmgzhilian.com'+ '/prod-api' + '/common/registUploadOSS/'
//半测试版
const BASE_URL = 'http://116.62.172.131:88'  + '/stage-api' + '/common/registUploadOSS/'
//测试版
//const BASE_URL = ' http://10.22.2.138:8080' + '/common/registUploadOSS/'
 //const BASE_URL = 'http://10.22.0.136:8080'+ '/common/registUploadOSS/'
// 暴露一个方法，用uni.uploadFile发送请求，异步处理的封装最好用promise
export const myPhoto = (options)=>{
	// resolve（成功之后的回调函数）和reject（失败之后的回调函数）
	return new Promise((resolve,reject)=>{
		// 使用uni.uploadFile发送请求
		uni.uploadFile({
			// 拼接请求地址
			url:BASE_URL+options.url,
			
			// 要上传文件资源的路径
			filePath: options.file_path,
			//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
			name: 'file',
			
		  //header:options.header || {},
			// 请求成功
			success: (res) => {
			    uni.showToast({
			    	title: '保存照片成功!',
			    	icon: 'none',
			    })
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
			
		
		
		
		var photo_reshow = JSON.parse(value.data).url  //仅用于注册时回显
		var photo_file =JSON.parse(value.data).fileName
		
		
		
		if (options.url == "dispatch-receipt-"){
			//签收 单据
			uni.setStorageSync("receipt_pending_photo", photo_file)
			
		}else if (options.url == "dispatch-leave-"){
			//发车 单据
			uni.setStorageSync("dispatch_pending_photo", photo_file)
			
		}else if (options.url == "dispatch-packing-list-"){
			//发货单据
			uni.setStorageSync("packing_list_photo", photo_file)
			
		}else if (options.url == "dispatch-group-"){
			//人车货 合照
			uni.setStorageSync("people_vehicle_photo", photo_file)
			
		}else if (options.url == "legal_front-"){
			/*注册类
			 * 法人证件身份证正面*/	
			 uni.setStorageSync("legalPersonCerFront", photo_file)
			uni.setStorageSync("legalPersonCerFront_reshow", photo_reshow)
		}else if (options.url == "legal_back-"){
			/*
			 * 法人证件身份证背面*/
		    uni.setStorageSync("legalPersonCerReverse", photo_file)
			uni.setStorageSync("legalPersonCerReverse_reshow", photo_reshow)
		}else if (options.url == "carrier-carrier_card_front-"){
			/**
			 * 身份证正面或营业执照
			 */
			uni.setStorageSync("carrierCardFront", photo_file)
			uni.setStorageSync("carrierCardFront_reshow", photo_reshow)
		}else if (options.url == "carrier-road_transport_business_license-"){
			/**
			 * 道路运输经营许可证
			 */
			uni.setStorageSync("carrierRoadTransportBusinessLicense", photo_file)
			uni.setStorageSync("carrierRoadTransportBusinessLicense_reshow", photo_reshow)
		}else if (options.url == ossLocation.vehicle.first){
			/**
			 * 行驶证主页
			 */
			uni.setStorageSync("vehicleLicensePhotoFirst", photo_file)
			uni.setStorageSync("vehicleLicensePhotoFirst_reshow", photo_reshow)
		}else if (options.url == ossLocation.vehicle.second){
			/**
			 * 行驶证副页
			 */
			uni.setStorageSync("vehicleLicensePhotoSecond", photo_file)
			
		}else if (options.url == ossLocation.vehicle.road){
			/**
			 * 道路运输证
			 */
			uni.setStorageSync("vehicleRoadcertPhoto", photo_file)
			uni.setStorageSync("vehicleRoadcertPhoto_reshow", photo_reshow)
		}else if (options.url == ossLocation.trailer.first){
			/**
			 * 挂车行驶证主页
			 */
			uni.setStorageSync("trailerLicensePhotoFirst", photo_file)
			uni.setStorageSync("trailerLicensePhotoFirst_reshow", photo_reshow)
		}else if (options.url == ossLocation.vehicle.rc){
			/**
			 * 人车
			 *
			 */
			uni.setStorageSync("peopleVehiclePhoto", photo_file)
			uni.setStorageSync("peopleVehiclePhoto_reshow", photo_reshow)
		}else if (options.url == ossLocation.driver.front){
			/**
			 * 驾驶员身份证正面
			 *
			 */
			uni.setStorageSync("idcardFront", photo_file)
			uni.setStorageSync("idcardFront_reshow", photo_reshow)
		}else if (options.url == ossLocation.driver.reverse){
			/**
			 * 驾驶员身份证背面
			 *
			 */
			uni.setStorageSync("idcardBack", photo_file)
			uni.setStorageSync("idcardBack_reshow", photo_reshow)
		}else if (options.url == ossLocation.driver.first){
			/**
			 * 驾驶证主页
			 */
			uni.setStorageSync("drivingLicensePhotoFirst", photo_file)
			uni.setStorageSync("drivingLicensePhotoFirst_reshow", photo_reshow)
		}else if (options.url == ossLocation.driver.cert){
			/**
			 * 从业资格证
			 */
			uni.setStorageSync("qualificationCertPhoto", photo_file)
			uni.setStorageSync("qualificationCertPhoto_reshow", photo_reshow)
		}else if (options.url == ossLocation.carrier.reverse){
			/**
			 * 身份证背面
			 */
			uni.setStorageSync("carrierCardReverse", photo_file)
			uni.setStorageSync("carrierCardReverse_reshow", photo_reshow)
		}
		
	}
	)
}
