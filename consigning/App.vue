<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
/* ==================
        初始化
 ==================== */
body {
	background-color: #fff;
	font-size: 28upx;
	color: #333333;
	font-family: Helvetica Neue, Helvetica, sans-serif;
}

view,
scroll-view,
swiper,
button,
input,
textarea,
label,
navigator,
image {
	box-sizing: border-box;
}

.round {
	border-radius: 5000upx;
}

.radius {
	border-radius: 6upx;
}

/* ==================
          图片
 ==================== */

image {
	max-width: 100%;
	display: inline-block;
	position: relative;
	z-index: 0;
}

.round {
		border-radius: 5000upx;
	}
	
	.radius {
		border-radius: 6upx;
	}
	
.cu-form-group {
		background-color: #ffffff;
		padding: 1upx 30upx;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
		
		border-bottom: 1rpx solid #eee;
	}
	
	.cu-btn {
		position: relative;
		border: 0upx;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 30upx;
		font-size: 28upx;
		height: 64upx;
		line-height: 1;
		text-align: center;
		text-decoration: none;
		overflow: visible;
		margin-left: initial;
		transform: translate(0upx, 0upx);
		margin-right: initial;
	}
	
	.bg-green {
		background-color: #39b54a;
		color: #ffffff;
	}
	
	.bg-gradual-green {
		background-image: linear-gradient(45deg, #39b54a, #8dc63f);
		color: #ffffff;
	}

.margin-top{
		 margin-top: 20rpx;
	 }		
</style>
