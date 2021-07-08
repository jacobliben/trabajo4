<template>
	<view class="page">
		<view style="height: 80rpx;"></view>
		<navigator class="buttons" url="../camera/camera"><button type="primary">打开自定义相机</button></navigator>
		<!-- <view style="height: 20rpx;"></view>
		<navigator class="buttons" url="../camera/portrait/portrait"><button type="primary">打开人像采集相机</button></navigator> -->
		<view style="height: 60rpx;"></view>
		<navigator class="buttons" url="../camera/idcard/idcard?dotype=face"><button type="primary">打开身份证人像面采集相机</button></navigator>
		<view style="height: 20rpx;"></view>
		<navigator class="buttons" url="../camera/idcard/idcard?dotype=badge"><button type="primary">打开身份证国徽面采集相机</button></navigator>
		<view style="height: 60rpx;"></view>
		<navigator class="buttons" url="../camera/idphoto/idphoto"><button type="primary">打开证件照采集相机</button></navigator>
		<view style="height: 80rpx;"></view>
		<image  class="preview" :src="imagesrc" :style="{ width: windowWidth, height: windowHeight }"></image>
		
		<view>拍摄结果预览图，见下方</view>
		<image  class="preview" :src="imagesrc" mode="aspectFit" style="width:710rpx:height:710rpx;margin: 20rpx;"></image>
		
		<canvas id="canvas-clipper" canvas-id="canvas-clipper" type="2d" style="width: 188px;height: 273px;position: absolute;left:-500000px;top: -500000px;" />
		
		
		
		<!-- <button @click="chooseImage()">选择图片</button> -->
		        <image class="image" :src="path"></image>
		        <kps-image-cutter @ok="onok" @cancel="oncancle" :url="url" :fixed="false" :maxWidth="500" :minHeight="300"></kps-image-cutter>
	</view>
</template>

<script>
import {ossLocation} from "@/util/pattern.js"

import kpsImageCutter from "@/components/ksp-image-cutter/ksp-image-cutter.vue";

export default {
	data() {
		return {
			windowWidth:'',
			windowHeight:'',
			imagesrc: null,
			 imageUrl: '',
			 show: false,
			 url: '',
			 path: ""
		};
	},
	onLoad() {
		this.init();
	},
	components: {kpsImageCutter},
	methods: {
		chooseImage() {
			var _this = this
		                uni.chooseImage({
		                    success: (res) => {
		                        // 设置url的值，显示控件
		                        _this.url = res.tempFilePaths[0];
		                    }
		                });
		            },
					
		            onok(ev) {
		                this.path = ev.path;
		                this.url = "";
		            },
		            oncancle() {
		                // url设置为空，隐藏控件
		                this.url = "";
		            },
		//设置图片
		// setImage(e) {
		// 	var _this = this
		// 	//显示在页面
		// 	//this.imagesrc = e.path;
			
		// 	//保存到相册
		// 	uni.saveImageToPhotosAlbum({
		// 		filePath: e.path,
		// 		success: () => {
		// 			uni.showToast({
		// 				title: '已保存至相册',
		// 				duration: 2000
		// 			});
					
		// 			uni.chooseImage({
		// 			    count: 1, //上传图片的数量，默认是9
		// 			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		// 			    sourceType: ['album'], //从相册选择
		// 			    success: function (res) {
		// 			        const tempFilePaths = res.tempFilePaths;    //拿到选择的图片，是一个数组
		// 					_this.imagesrc = tempFilePaths[0]
		// 			    }
		// 			});
					
					
					
					
		// 		}
		// 	});
			
		// },
		
		setImage(e) {
			this.url =  e.path
		},
		
		
		//证件照裁切
		zjzClipper(path) {
			var _this = this
			uni.getImageInfo({
				src: path.path,
				success: function(image) {
					console.log(image);
					let canvas = uni.createCanvasContext('canvas-clipper', _this);
					canvas.drawImage(
						path.path,
						parseInt(0.15 * image.width),
						parseInt(0.17 * image.height),
						parseInt(0.69 * image.width),
						parseInt(0.65 * image.height),
						0,
						0,
						188,
						273
					);
					canvas.draw(false, () => {
						uni.canvasToTempFilePath(
							{
								destWidth: 188,
								destHeight: 273,
								canvasId: 'canvas-clipper',
								fileType: 'jpg',
								success: function(res) {
									//_this.savePhoto(res.tempFilePath);
									
									uni.showToast({
										title: '已保存至相册111',
										duration: 2000
									});
								}
							},
						
						);
					});
				}
			});
		},
		
		//保存图片到相册，方便核查
		savePhoto(path){
			this.imagesrc = path;
			//保存到相册
			uni.saveImageToPhotosAlbum({
				filePath: path,
				success: () => {
					uni.showToast({
						title: '已保存至相册了',
						duration: 2000
					});
				}
			});
		},
		
		//初始化
		init(){
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					_this.windowWidth = res.windowWidth;
					_this.windowHeight = res.windowHeight;
				}
			});
		}
		
	}
};
</script>

<style lang="scss">
.page {
	width: 750rpx; 
	justify-content: center;
	align-items: center;
	
	
	.buttons {
		width: 600rpx;
	}
}

.image {
    width: 200px;
    height: 200px;
}
</style>
