<template>
	<view>
		<view class="current-state margin-top">
				<text >车型要求</text>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActivedafault}" @click="isActive = true">不限</button>
			<button type="default" size="mini" :class="{active:isActivecriteria}" @click="isActive = true">标箱</button>
			<button type="default" size="mini" :class="{active:isActiveHigh}" @click="isActive = true">高栏</button>
			<button type="default" size="mini" :class="{active:isActiveFlat}" @click="isActive = true">平板</button>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActiveBox}" @click="isActive = true">厢式</button>
			<button type="default" size="mini" :class="{active:isActiveContainer}" @click="isActive = true">集装箱</button>
			<button type="default" size="mini" :class="{active:isActiveFly}" @click="isActive = true">飞翼</button>
			<button type="default" size="mini" :class="{active:isActiveSelfDismantle}" @click="isActive = true">自卸载</button>
		</view>
		
		<view class="half-bar">
			<button type="default" size="mini" :class="{active:isActiveLow}" @click="isActive = true">低平板</button>
			<button type="default" size="mini" :class="{active:isActiveAxis}" @click="isActive = true">轴线车</button>
			
		
		</view>
		
		
		<view class="current-state margin-top">
				<text >车长要求(米)</text>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">不限</button>
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">3.8</button>
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">4.2</button>
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">6.8</button>
		</view>
		
		<view class="one-bar">
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">9.6</button>
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">13</button>
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">13.7</button>
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">16</button>
		</view>
		
		<view class="quater-bar">
			<button type="default" size="mini" :class="{active:isActive}" @click="isActive = true">17.5</button>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive:false,
			}
		},
		methods: {
			
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
		margin-bottom:15rpx ;
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
	
	.quater-bar{
		width:25%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
