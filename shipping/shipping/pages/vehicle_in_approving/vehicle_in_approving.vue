<template>
	<view>
		<view>
			<info-not-found></info-not-found>
		</view>
	</view>
</template>

<script>
	import infoNotFound from "@/pages/info_not_found/info_not_found.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			infoNotFound
		},
	}
</script>

<style lang="scss" scoped>
   .text{
	   text-align: center;
	   font-weight: 800;
	   font-size: 35rpx;
	   margin: 10rpx;
	   
   }
</style>
