<template>
	<view>
		<view>
			<ss-select-city :hotCitys="hotCitys" v-model="locationValue" :value="locationValue" @on-select="selectValue" />
		</view>
	</view>
</template>

<script>
	import ssSelectCity from '@/components/ss-select-city/index.vue'
	export default {
		data() {
			return {
				hotCitys: ['徐州','杭州', '天津', '北京', '上海', '深圳', '广州', '成都',  '厦门'],
				locationValue: '正在定位...',
			}
		},
		components:{
			
			ssSelectCity
		},
		methods: {
			selectValue(city) {
			    
				uni.setStorageSync("zone", city)
			    this.locationValue = city
			        uni.showToast({
			        title:city,
			        icon: 'none'
			    })
				uni.setStorageSync("have_zone",true)
				var in_personal_registering = uni.getStorageSync("in_personal_registering")
				var in_company_registering = uni.getStorageSync("in_company_registering")
				if (in_personal_registering===true){
					uni.navigateTo({
						url:"/pages/register_driver/register_driver"
					})
					
				}else if(in_company_registering===true){
					uni.navigateTo({
						url:"/pages/register/register"
					})
				}
				
			},
		},
		onLoad(){
			var that = this
			uni.getLocation({
						    type: 'gcj02',
							geocode:true,//设置该参数为true可直接获取经纬度及城市信息
						    success: function (res) {
								
								
								that.locationValue = res.address.province + res.address.city;
						    },
							fail: function () {
								uni.showToast({
								    title: '获取地址失败',
									icon:'none'
								});
							}
						});
			
			
			
						 
						
						
		
		},
	}
</script>

<style>

</style>
