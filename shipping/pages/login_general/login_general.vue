<template>
	<view>
		<!-- <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#09499b"></uni-segmented-control>
		        <view class="content">
		            <view v-show="current === 0"> -->
		                <login></login>
		      <!--      </view>
		            <view v-show="current === 1">
		                <login></login>
		            </view>
		        </view> -->
	</view>
</template>

<script>
	import uniSegmentedControl from "uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"
	import  login from "@/pages/login/login"
	export default {
		data() {
			return {
				current:0,
				//items:["公司账号登录","个人账号登录"]
			};
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:"登录"
			})
			},
		components:{
			uniSegmentedControl,
			login
		},
		methods:{
			 onClickItem(res){
				 this.current=res.currentIndex;
				 }
		}
	}
</script>

<style lang="scss">

</style>
