<template>
	<view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#09499b"></uni-segmented-control>
		        <view class="content">
		            <view v-show="current === 0">
		                <detail :passed_info="detailed_info" :btn_title = "btn_title"></detail>
		            </view>
		           <!-- <view v-show="current === 1">
		                <shipping-current-state :btn_title = "btn_title"></shipping-current-state>
		            </view>
					<view v-show="current === 2">
					    <accounts-detail></accounts-detail>
					</view> -->
		        </view>
	</view>
</template>

<script>
	import uniSegmentedControl from "uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"
	import  detail from "@/pages/detail/detail"
	import  shippingCurrentState from "@/components/shipping_state/shipping_current_state.vue"
	import  accountsDetail from "@/components/shipping_state/accounts_detail.vue"
	
	export default {
		data() {
			return {
				current:0,
				// items:["派车单详情",
				// // "派车单状态","账单明细",
				// ],
				btn_title:'',
				detailed_info:{},
			};
		},
		
		components:{
			uniSegmentedControl,
			detail,
			shippingCurrentState,
			accountsDetail
		},
		onLoad(options){
			 this.detailed_info = uni.getStorageSync("upload_item")
			 console.log(this.detailed_info,"777")
			 this.btn_title = options.btn_title
			console.log(this.btn_title,"mm")
		},
		methods:{
			 onClickItem(res){
				 this.current=res.currentIndex;
				 }
		}
	}
</script>
 
<style lang="scss" scoped>

</style>
