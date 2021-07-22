<template>
	<view>
		<view class="title">请选择身份<text> *</text></view>
		    <radio-group @change="radioChange" class="identities">
		            <label class="list-cell" v-for="(item, index) in items" :key="item.value">
		                              <view class="checked_box">
		                                  <radio :value="item.value" :checked="index === current" />
		                              </view>
		                              <view>{{item.name}}</view>
		             </label>
					
			 </radio-group>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:-1,
				params:{
					disabled:true,
					active:false,
					active_one_step:false,
				},
					
					items:[
						                // {
						                //     value: 'goods_owner',
						                //     name: '货主 (我有货，我找车)'
						                // },
						                {
						                    value: 'logistic_company',
						                    name: '企业车辆承运人  (以公司名义注册，具有运输开票资质的物流公司，可以添加其他个体司机承运业务)',
						                    
						                },
						                // {
						                //     value: 'cars_boss',
						                //     name: '车队老板  (我有车，可承运)'
						                // },
						                {
						                    value: 'individual_driver',
						                    name: '个人车辆承运人  (由个体司机本人驾驶车辆运输，运费结算至本人银行卡)'
						                },
						                
						]
				
			}
		},
		mounted(){
			uni.setNavigationBarTitle({
				title:"注册"
			})
			},
		components:{
		
		},
		methods:{
			 onClickItem(res){
				 this.current=res.currentIndex;
				 },
				 
				 radioChange(e){
					 if(e.detail.value){
						this.params.disabled = false
						 this.params.active = true
						 this.params.active_one_step = true
						 this.$emit('register_params',this.params)
					 }
				 },
				
		}
	}
	
</script>

<style lang="scss" scoped>
	.title{
			 margin-top:20rpx;
			 margin-left:10%;
			 text{
				 color:#f00;
			 }
	}
	
	.identities{
			 margin-left:20%;
	}
	.list-cell{
			 margin-top:15rpx;
			 display:flex;
			 flex-direction: row;
			 .checked_box{
				 
				 margin-right:20rpx;
				 margin-bottom: 20rpx;
				 width:20%;
				 
			 }
	}
	
	
</style>
