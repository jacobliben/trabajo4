<template>
	<view >
		<!--  -->
		<view v-for="(item,index) in articles" :key ="index">
			<view class="one-line" @click="goArticle(item)">
				<view class="small-img">
					<image :src="item.img_src" class="article-img" mode=""></image>
				</view>
				
				<view class="content">
					<view class="title">
						{{item.title}}
					</view>
					<view class="date">
						{{item.date}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articles:[
					{
						img_src:"/static/article20210313.png",
						title:"交通运输部：2021年1月公路货物运输量公布",
						date:"2021-02-26",
						url:'/pages/article20210313/article20210313'
					},
					{
						img_src:"/static/article20210313.png",
						title:"《邮件快件包装管理办法》解读",
						date:"2021-02-25",
						url:'/pages/article20210314/article20210314'
					},
					{
						img_src:"/static/article20210313.png",
						title:"邮件快件包装管理办法（中华人民共和国交通运输部令2021年第1号）",
						date:"2021-02-25",
						url:'/pages/article20210315/article20210315'
					},
				]
			};
		},
		methods:{
			goArticle(item){
				
				const {url} = item
					uni.navigateTo({
						url
					})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.one-line{
		padding:15rpx;
		border-bottom:1rpx solid #ddd;
		display: flex;
		flex-direction: row;
	}
    .article-img{
		width: 200rpx;
		height: 150rpx;
	}
	
	.content{
		width: 500rpx;
		margin-left:20rpx;
	}
	
	.title{
		font-size: 30rpx;
		font-weight: 500;
	}
	
	.date{
		color:#aaa;
		font-size: 20rpx;
		margin-top: 30rpx;
	}
	
</style>
