<template>
	<view>
		<uni-segmented-control :current="current"  @clickItem="onClickItem" styleType="text" activeColor="#09499b"></uni-segmented-control>
		        <view class="content">
		         
		                <detail :passed_info="detailed_info"></detail>
		          
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
			 this.detailed_info = uni.getStorageSync("accepted_shipping_orders")
			
			
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
