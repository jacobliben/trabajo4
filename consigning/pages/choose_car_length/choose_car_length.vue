<template>
	<view>
		<view class="current-state margin-top">
				<text >车型要求</text>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActivedafault}" @click="getActivedafault">不限</button>
			<button type="default" size="mini" :class="{active:isActivecriteria}" @click="getActivecriteria">标箱</button>
			<button type="default" size="mini" :class="{active:isActiveHigh}" @click="getActiveHigh">高栏</button>
			<button type="default" size="mini" :class="{active:isActiveFlat}" @click="getActiveFlat">平板</button>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActiveBox}" @click="getActiveBox">厢式</button>
			<button type="default" size="mini" :class="{active:isActiveContainer}" @click="getActiveContainer">集装箱</button>
			<button type="default" size="mini" :class="{active:isActiveFly}" @click="getActiveFly">飞翼</button>
			<button type="default" size="mini" :class="{active:isActiveSelfDismantle}" @click="getActiveSelfDismantle">自卸车</button>
		</view>
		
		<view class="half-bar">
			<button type="default" size="mini" :class="{active:isActiveLow}" @click="getActiveLow">低平板</button>
			<button type="default" size="mini" :class="{active:isActiveAxis}" @click="getActiveAxis">轴线车</button>
			
		
		</view>
		
		
		<view class="current-state margin-top">
				<text >车长要求(米)</text>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActiveNoLimit}" @click="getActiveNoLimit">不限</button>
			<button type="default" size="mini" :class="{active:isActive13}" @click="getActive13">13</button>
			<button type="default" size="mini" :class="{active:isActive1375}" @click="getActive1375">13.75</button>
			<button type="default" size="mini" :class="{active:isActive16}" @click="getActive16">16</button>
			
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActive42}" @click="getActive42">4.2</button>
			<button type="default" size="mini" :class="{active:isActive68}" @click="getActive68">6.8</button>
			<button type="default" size="mini" :class="{active:isActive96}" @click="getActive96">9.6</button>
		    <button type="default" size="mini" :class="{active:isActive175}" @click="getActive175">17.5</button>
			
			
		</view>
		
		<view class="one-bar ">
			<button  class="confirm-btn" @click="confirm">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActivedafault:false,
				isActivecriteria:false,
				isActiveHigh:false,
				isActiveFlat:false,
				
				isActiveBox:false,
				isActiveContainer:false,
				isActiveFly:false,
				isActiveSelfDismantle:false,
				
				isActiveLow:false,
				isActiveAxis:false,
				
				isActiveNoLimit:false,
				isActive38:false,
				isActive42:false,
				isActive68:false,
				
				isActive96:false,
				isActive13:false,
				isActive1375:false,
				isActive16:false,
				
				isActive175:false,
				
				
				//车辆类型字典
				 cargoBoxTypeOptions: [],
				 cargoBoxTypeLabel: [],
				
				 //车长字典
				 vehicleLengthOptions: [],
				 vehicleLengthLabel: [],
			}
		},
		created(){
			//车辆类型字典
			this.getCargoBoxTypeOptions()
			//车长字典
			this.getVehicleLengthOptions()
		},
		methods: {
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_cargo_box_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
			},
			
			//车长字典
			async getVehicleLengthOptions(){
				var that = this
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_length",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
					
			},
			//不限
			getActivedafault(){
				this.isActivedafault = !this.isActivedafault
				if (this.isActivedafault){
					this.cargoBoxTypeOptions = []
					this.cargoBoxTypeLabel = []
				}else{
					
				}
			},
			//标箱
			getActivecriteria(){
				this.isActivecriteria = !this.isActivecriteria
				if (this.isActivecriteria){
					this.cargoBoxTypeOptions.push("5")
					this.cargoBoxTypeLabel.push("标箱")
				}else{
					this.cargoBoxTypeOptions.pop("5")
					this.cargoBoxTypeLabel.pop("标箱")
				}
				
			},
			//高栏
			getActiveHigh(){
				this.isActiveHigh = !this.isActiveHigh
				if (this.isActiveHigh){
					this.cargoBoxTypeOptions.push("2")
					this.cargoBoxTypeLabel.push("高栏")
				}else{
					this.cargoBoxTypeOptions.pop("2")
					this.cargoBoxTypeLabel.pop("高栏")
				}
			},
			//平板
			getActiveFlat(){
				this.isActiveFlat = !this.isActiveFlat
				if (this.isActiveFlat){
					this.cargoBoxTypeOptions.push("1")
					this.cargoBoxTypeLabel.push("平板")
				}else{
					this.cargoBoxTypeOptions.pop("1")
					this.cargoBoxTypeLabel.pop("平板")
				}
			},
			//厢式
			getActiveBox(){
				this.isActiveBox = !this.isActiveBox
				if (this.isActiveBox){
					this.cargoBoxTypeOptions.push("4")
					this.cargoBoxTypeLabel.push("厢式")
				}else{
					this.cargoBoxTypeOptions.pop("4")
					this.cargoBoxTypeLabel.pop("厢式")
				}
			},
			//集装箱
			getActiveContainer(){
				this.isActiveContainer = !this.isActiveContainer
				if (this.isActiveContainer){
					this.cargoBoxTypeOptions.push("1028")
					this.cargoBoxTypeLabel.push("集装箱")
				}else{
					this.cargoBoxTypeOptions.pop("1028")
					this.cargoBoxTypeLabel.pop("集装箱")
				}
			},
			//飞翼
			getActiveFly(){
				this.isActiveFly = !this.isActiveFly
				if (this.isActiveContainer){
					this.cargoBoxTypeOptions.push("7")
					this.cargoBoxTypeLabel.push("飞翼")
				}else{
					this.cargoBoxTypeOptions.pop("7")
					this.cargoBoxTypeLabel.pop("飞翼")
				}
			},
			//自卸车
			getActiveSelfDismantle(){
				this.isActiveSelfDismantle = !this.isActiveSelfDismantle
				if (this.isActiveSelfDismantle){
					this.cargoBoxTypeOptions.push("8")
					this.cargoBoxTypeLabel.push("自卸车")
				}else{
					this.cargoBoxTypeOptions.pop("8")
					this.cargoBoxTypeLabel.pop("自卸车")
				}
			},
			//低平板
			getActiveLow(){
				this.isActiveLow = !this.isActiveLow
				if (this.isActiveLow){
					this.cargoBoxTypeOptions.push("3")
					this.cargoBoxTypeLabel.push("低平板")
				}else{
					this.cargoBoxTypeOptions.pop("3")
					this.cargoBoxTypeLabel.pop("低平板")
				}
			},
			//轴线车
			getActiveAxis(){
				this.isActiveAxis = !this.isActiveAxis
				if (this.isActiveAxis){
					this.cargoBoxTypeOptions.push("6")
					this.cargoBoxTypeLabel.push("轴线车")
				}else{
					this.cargoBoxTypeOptions.pop("6")
					this.cargoBoxTypeLabel.pop("轴线车")
				}
			},
			
			//不限
			getActiveNoLimit(){
				this.isActiveNoLimit = !this.isActiveNoLimit
				if (this.isActiveNoLimit){
					this.vehicleLengthOptions = []
				
				}else{
					
				}
			},
			
			getActive42(){
				this.isActive42 = !this.isActive42
				if (this.isActive42){
					this.vehicleLengthOptions.push("4.2")
			
				}else{
					this.vehicleLengthOptions.pop("4.2")
				}
			},
			getActive68(){
				this.isActive68 = !this.isActive68
				if (this.isActive68){
					this.vehicleLengthOptions.push("6.8")
				}else{
					this.vehicleLengthOptions.pop("6.8")
				}
			},
			
			getActive96(){
				this.isActive96 = !this.isActive96
				if (this.isActive96){
					this.vehicleLengthOptions.push("9.6")
				}else{
					this.vehicleLengthOptions.pop("9.6")
				}
			},
			getActive13(){
				this.isActive13 = !this.isActive13
				if (this.isActive13){
					this.vehicleLengthOptions.push("13")
				}else{
					this.vehicleLengthOptions.pop("13")
				}
			},
			getActive1375(){
				this.isActive1375 = !this.isActive1375
				if (this.isActive1375){
					this.vehicleLengthOptions.push("13.75")
				}else{
					this.vehicleLengthOptions.pop("13.75")
				}
			},
			getActive16(){
				this.isActive16 = !this.isActive16
				if (this.isActive16){
					this.vehicleLengthOptions.push("16")
				}else{
					this.vehicleLengthOptions.pop("16")
				}
			},
			
			getActive175(){
				this.isActive175 = !this.isActive175
				if (this.isActive175){
					this.vehicleLengthOptions.push("17.5")
				}else{
					this.vehicleLengthOptions.pop("17.5")
				}
			},
			
			confirm(){
				
				uni.setStorageSync("ordinary_cargo_box_type_chosen",this.cargoBoxTypeOptions)
				uni.setStorageSync("ordinary_cargo_box_label",this.cargoBoxTypeLabel)
				uni.setStorageSync("ordinary_vehicle_length_chosen",this.vehicleLengthOptions)
				uni.navigateTo({
					url:"/pages/ordinary_ordering/ordinary_ordering"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
    .current-state{
    		 margin-top:10rpx;
    		 margin-left:10rpx;
    		 margin-bottom: 25rpx;
    		
    		 padding-left: 10rpx;
    		 color:#000;
    		 font-size:30rpx;
    		 font-weight: 600;
    		 display: flex;
    		 flex-direction: row;
    		
    		 
    		 .hand-input{
    		 	  color:blue;
    			  font-size:20rpx;
    			   font-weight: 300;
    			   margin-right:10% ;
    		 }
    }
	
	.one-bar{
		margin-top:15rpx;
		margin-bottom:45rpx ;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	
	.half-bar{
		width:50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.active{
		background-color: #157cec;
		color:#fff;
	}
	
	.confirm-btn{
		width:95%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		color:#fff;
		background-color: #157cec;
	}
</style>
