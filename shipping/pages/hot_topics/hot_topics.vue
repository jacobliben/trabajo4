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
						img_src:"/static/smart-warehouse.jpg",
						title:"智能立体库助力徐工智联增速加码",
						date:"2021-03-02 15:47",
						url:'/pages/smart_warehouse/smart_warehouse'
					},
					{
						img_src:"/static/tax-company-news.jpg",
						title:"保税公司一季度进口件“保供攻坚战”圆满收官",
						date:"2021-03-10 13:37",
						url:'/pages/tax_company_news/tax_company_news'
					},
					{
						img_src:"/static/ensure-supply.jpg",
						title:"最是一年春好处 全力保供正当时",
						date:"2021-03-05 19:38",
						url:'/pages/ensure_supply/ensure_supply'
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
