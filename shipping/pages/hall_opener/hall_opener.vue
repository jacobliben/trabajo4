<template>
	<view class="content">
		
	  <!-- head section -->
	  <view class="head-sect">
		  <view class="navbar">
		  		  <view v-for ="(item,index) in navList" :key="index" 
		  		  class="nav-item"  
		  		  @click ="tabClick(index)">
		  		  	<text :class="{current: tabCurrentIndex === index }">{{item.text}}</text>
		  		  </view>	  		  
		  </view>
		 
	  </view>
	 
	 <view class="sub-sect">
	 		  <view class="navbar">
	 		  		  <view v-for ="(item,index) in subList" :key="index" 
	 		  		  class="nav-item"  
	 		  		  @click ="subClick(index,item)">
	 		  		  	<text :class="{currentsub: subCurrentIndex === index }" >{{item.text}}</text>
						<image src="/static/down.png" mode="" class="down" ></image>
	 		  		  </view>	  		  
	 		  </view>
	 		  <view class="plus" @click="addRefresh">
	 			  <image src="/static/rotate.png" mode="" class="add" :class="{rotate: activeRotate }"></image>
	 		  </view>
			  
			
	 </view>
	 
	 
	 <!-- 从hall_select页面传来的值的小条 -->
	  <view class="condition-list" v-if ="show_conditions">
		  <view class="sm-bars">
			  <text class="bg-item" v-if ="inquirySelectedBar">
			  			  <text v-for="(item,index) in 	inquiryLabel" :key="index">
			  			      <text class="sm-item"> {{item}}</text>
			  					<text :class="index===inquiryLabel.length-1?'show':'unshow'">/</text>		   
			  			  </text>
			  			  <text class="cuIcon-close text-style margin-left" v-if ="inquiryTypeSelected"
			  			   @click="clearInquirySelectedBar"></text>
			  </text>
			  
			  
			  <text class="bg-item" v-if ="cargoBoxTypeSelectedBar">
			  			  <text v-for="(item,index) in cargoBoxTypeSelectedLabel " :key="index">
			  			      <text class="sm-item"> {{item}}</text>
							   <text :class="index===cargoBoxTypeSelected.length-1?'show':'unshow'">/</text>
			  			  </text>
			  			  <text class="cuIcon-close text-style margin-left" v-if ="cargoBoxTypeSelected"
						   @click="clearCargoBoxTypeSelectedBar"></text>
			  </text>
			  	 				  
			  <text class="bg-item" v-if ="vehicleLengthSelectedBar" >
			  	 					  <text v-for="(item,index) in vehicleLengthSelected " :key="index">
			  	 					       <text class="sm-item">{{item}}米</text>
										   <text :class="index===vehicleLengthSelected.length-1?'show':'unshow'">/</text>
			  	 					  </text>
			  	 					  <text class="cuIcon-close text-style  margin-left" v-if ="vehicleLengthSelected"
									  @click="clearVehicleLengthSelectedBar"></text>
			  </text>
			  			
			  			
			  					 
			  <text class="bg-item" v-if ="loading_start_time_bar">
			              <text>{{loading_start_time}}</text>
						  <text class="cuIcon-close text-style  margin-left" v-if ="loading_start_time_bar"
						  @click="clearLoadingStartTime"></text>
			  </text>
			  
			  <text class="bg-item" v-if ="loading_end_time_bar">
				           <text>{{loading_end_time}}</text>
				           <text class="cuIcon-close text-style  margin-left" v-if ="loading_end_time_bar"
				           @click="clearLoadingEndTime"></text>
			  
			  </text>
		  </view>
		  
			
		<view class="clear-bars" @click="clearBars">清空</view>
	  </view>
		
		<!-- body section -->
		<view class="shipping-body">
			<view class="list" v-for = "(item,index) in navList" :key="index"  v-if="tabCurrentIndex===index">
				<!-- 选择出发地 -->
				
				 <lee-select-city class="lee-city" v-if="choose_start "  @startRegionDone = "startRegionDone" /> 
				<!-- 选择目的地 -->
				<lee-select-city-dest class="lee-city" v-if="choose_destination " @destRegionDone = "destRegionDone"/>
				<!-- 筛选条件 --> 
				 <hall-select  v-if="choose_hall_select " :key="select_key" @hallSelect = "hallSelect"/>
				 
				 
				 <!-- 货源条目 -->
				 <hall :key="refresh_index" :source = "item" v-if="show_items"/> 
				
				
			</view>
		</view>
		<simple-address-high ref="simpleAddressOrigin" :key="key_origin" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirmOrigin" @onCancel="onCancelOrigin" themeColor="#007AFF"></simple-address-high>
		<simple-address-dest ref="simpleAddressDest" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirmDest" @onCancel="onCancelDest" themeColor="#007AFF"></simple-address-dest>
	</view>
</template>

<script>
	import Hall from "@/pages/hall/hall.vue"
	import HallSelect from "@/pages/hall_select/hall_select.vue"
	import LeeSelectCity from '@/components/lee-select-city/lee-select-city.vue'
	import LeeSelectCityDest from '@/components/lee-select-city-dest/lee-select-city.vue'
	import SimpleAddressHigh from '@/components/simple-address-high/simple-address.vue';
	import SimpleAddressDest from '@/components/simple-address-high/simple-address.vue';
	
	export default {
		data() {
			return {
				key_origin:0,
				tabCurrentIndex:0,
				subCurrentIndex:0,
				refresh_index:0,
				choose_start:false,
				choose_destination:false,
				choose_hall_select:false,
				//显示筛选小条
				show_conditions:false,
				inquirySelectedBar:false,
				cargoBoxTypeSelectedBar:false,
				vehicleLengthSelectedBar:false,
				loading_start_time_bar:false,
				loading_end_time_bar:false,
				
				
				cargoBoxTypeDictValues:[],
				cargoBoxTypeDictLabels:[],
				 cityPickerValueDefault: [0, 0, 1],
				
				show_items:true,
				select_key:0,
				navList:[
					{
						state:1,
						text:"全部",
						orderList:[]
					},
					{
					  state:2,
					  text:"普通货",
					  orderList:[]
					},
					{
					  state:3,
					  text:"批量货",
					  orderList:[]
					},
					
					
				],
				
				subList:[
					{
						ele_state:1,
						text:"徐州市",
						orderList:[]
					},
					{
					  ele_state:2,
					  text:"全国",
					  orderList:[]
					},
					{
					  ele_state:3,
					  text:"筛选",
					  orderList:[]
					},
					
					
				],
				activeRotate:false,
				
				//hall_select 页传来的筛选值
				inquiryTypeSelected: [],
				cargoBoxTypeSelected: [],
				vehicleLengthSelected: [],
				inquiryTypeSelected: [],
				loading_start_time:"",
				loading_end_time:"",
				
				//hall_select显示的cargoBoxType
				cargoBoxTypeSelectedLabel: [],
				
				//hall_select显示的inquiryType
				inquiryLabel: [],
			};
		},
		computed:{
			dataRange(){
				const {inquirySelectedBar,
				cargoBoxTypeSelectedBar,
				vehicleLengthSelectedBar,
				loading_start_time_bar, 
				loading_end_time_bar} = this
				
				return {inquirySelectedBar,
				cargoBoxTypeSelectedBar,
				vehicleLengthSelectedBar,
				loading_start_time_bar, 
				loading_end_time_bar}
			}
		},
		watch: {
		    dataRange (val) {
		     
			  //get the values of every bars
			  let bar_shown = Object.values(val)
			 
			  //to see if every value are all false, if all false, not shown all the bloc
			  let bars_all_not_show = bar_shown.every(ele=> ele == false)
			  
			  //if all the small filtered bars are not shown, let disappear all this bloc
			  if(bars_all_not_show) {
				  this.show_conditions = false
			  }
		    }
		  },
		components:{
			 Hall,
			 LeeSelectCity,
			 LeeSelectCityDest,
			 HallSelect,
			 SimpleAddressHigh,
			 SimpleAddressDest
		},
		onLoad(options){
			this.tabCurrentIndex = 0
			
		},
		mounted(){
			
			
			
			 //车辆类型字典
			 this.getCargoBoxTypeOptions()
			 this.subList[0].text = uni.getStorageSync("enquiry_start_region")
			 this.subList[1].text = uni.getStorageSync("enquiry_dest_region")
		},		
		
		methods:{
			//车辆类型字典
			async getCargoBoxTypeOptions(){
				
				var authorization = uni.getStorageSync("token")
				
				const res = await this.$request({
					 	url:"/system/dict/data/type/vehicle_cargo_box_type",
					 	
					 	header:{
					 		Authorization:authorization,
					 	},
					 	
					 })
				
					this.cargoBoxTypeOptions = res.data.data
			
				    this.cargoBoxTypeDictValues = this.cargoBoxTypeOptions.map(x => x.dictValue)
					this.cargoBoxTypeDictLabels = this.cargoBoxTypeOptions.map(x => x.dictLabel)
				
				
				
			},
			
			tabClick(index){
				this.tabCurrentIndex = index
				
				
				let designatedStatus =[]
				
				if (index == 0){
					designatedStatus =[1, 2, 3]
				}else if (index == 1){
					designatedStatus =[1, 2]
				}else if (index == 2){
					designatedStatus =[3]
				}
				
				uni.setStorageSync('designatedStatus',designatedStatus)
			},
			
			subClick(index,item){
				this.subCurrentIndex  = index
				
				if (item.ele_state == 1){
					//  this.choose_start = true
					
					// this.choose_destination = false
					
					this.selectOrigin()
					this.show_items = false
				    this.choose_hall_select = false
					this.show_conditions = false
				}else if (item.ele_state == 2){
				  //    this.choose_destination = true
					 // this.choose_start = false
					
					this.selectDest()
					this.show_items = false
					this.choose_hall_select = false
					this.show_conditions = false
				}else if (item.ele_state == 3){
					this.choose_hall_select = true
					this.choose_destination = false
					this.choose_start = false
					this.show_items = false
					this.show_conditions = false
				}
			},
			
			addRefresh(){
				var that = this
				this.activeRotate = true;
				this.refresh_index++;
				setTimeout(()=>{
					that.activeRotate = false
				},3000)
			},
				
			startRegionDone(val){
				
				val =  val.toString ()
				this.subList[0].text = val
				
				if (val.length>0){
					this.choose_start = false
					this.choose_destination = false
					this.choose_hall_select = false
					this.show_items = true
				}
			},
			
			destRegionDone(val){
				
				val =  val.toString ()
				this.subList[1].text = val
				
				if (val.length>0){
					this.choose_start = false
					this.choose_destination = false
					this.choose_hall_select = false
					this.show_items = true
				}
			},
			
			hallSelect(val){
				var that = this
				
				this.choose_hall_select = val.choose_hall_select
				this.show_items = val.show_items
				this.inquiryTypeSelected = val.inquiryTypeSelected
				this.inquiryLabel = val.inquiryLabel
				console.log(this.inquiryLabel, "inquiryLabel");
				//将inquiryLabel显示
				if(this.inquiryLabel.length>0){
					this.inquirySelectedBar = true
					this.show_conditions = true
				}
				//将cargoBoxTypeSelected数值转化为文字
				this.cargoBoxTypeSelected = val.cargoBoxTypeSelected
				if(this.cargoBoxTypeSelected.length>0){
					this.cargoBoxTypeSelectedBar = true
					this.show_conditions = true
					
					const restArr = []
					const cargoBoxTypeSelectedLabel = []
				   const cargoBoxTypeSelected = this.cargoBoxTypeSelected
				   cargoBoxTypeSelected.forEach(
				      obj =>{
						
						  var cargo_selected =that.cargoBoxTypeDictValues.findIndex(value=>value ==obj)
						  restArr.push(cargo_selected)
					  }
				   
				   )
				 
				   restArr.forEach((val)=>{
					   var cargoBoxTypeOptionsTemp = this.cargoBoxTypeOptions
					   var every_cargo_label = cargoBoxTypeOptionsTemp[val].dictLabel
					 
					   cargoBoxTypeSelectedLabel.push(every_cargo_label)
				   })
				
				  this.cargoBoxTypeSelectedLabel = cargoBoxTypeSelectedLabel
				}
				
				this.vehicleLengthSelected = val.vehicleLengthSelected
				if(this.vehicleLengthSelected.length>0){
					this.vehicleLengthSelectedBar = true
					this.show_conditions = true
				}
				
				this.loading_start_time = val.loading_start_time
				if(this.loading_start_time.length>0){
					this.loading_start_time_bar = true
					this.show_conditions = true
				}
				
				this.loading_end_time = val.loading_end_time
				if(this.loading_end_time.length>0){
					this.loading_end_time_bar = true
					this.show_conditions = true
				}
				
				
			},
			clearInquirySelectedBar(){
				try {
				 uni.removeStorageSync('inquiryTypeSelectedLabel');
				 uni.removeStorageSync('inquiryTypeSelected');														  
				} catch (e) {
				    // error
				}
				this.inquirySelectedBar = false
			},
			clearCargoBoxTypeSelectedBar(){
				try {
				 uni.removeStorageSync('cargoBoxTypeSelected');
																		  
				} catch (e) {
				    // error
				}
				this.cargoBoxTypeSelectedBar = false
			},
			clearVehicleLengthSelectedBar(){
				try {
				 uni.removeStorageSync('vehicleLengthSelected');
																		  
				} catch (e) {
				    // error
				} 
				this.vehicleLengthSelectedBar = false
			},
			clearLoadingStartTime(){
				try {
				 uni.removeStorageSync('loading_start_time_filter');
																		  
				} catch (e) {
				    // error   
				} 
				this.loading_start_time_bar = false
			},
			clearLoadingEndTime(){
				try {
				 uni.removeStorageSync('loading_end_time_filter');
																		  
				} catch (e) {
				    // error   
				} 
				this.loading_end_time_bar = false
			},
			clearBars(){
				try {
					uni.removeStorageSync('inquiryTypeSelected');
					uni.removeStorageSync('inquiryTypeSelectedLabel');
				    uni.removeStorageSync('cargoBoxTypeSelected');
					uni.removeStorageSync('vehicleLengthSelected');
					uni.removeStorageSync('loading_start_time_filter');
					uni.removeStorageSync('loading_end_time_filter');															  
				} catch (e) {
				    // error
				}
				this.show_conditions = false
			},
			
			//发货区域
			    selectOrigin() {
			    // 根据 label 获取
				
			    var index = this.$refs.simpleAddressOrigin.queryIndex(['江苏省', '徐州市', '云龙区'], 'label');
			    
			    this.cityPickerValueDefault = index.index;
			    this.$refs.simpleAddressOrigin.open();
			},
			onConfirmOrigin(e) {
				var pickerTextOrigin
				if(e.provinceCode==11
				||e.provinceCode==31
				||e.provinceCode==12||e.provinceCode==50){
					 pickerTextOrigin = e.labelArr[0]+e.labelArr[2]
				}
				else{
					pickerTextOrigin = e.labelArr[0]+e.labelArr[1]+e.labelArr[2]
				}
				
				const enquiry_start_region = e.labelArr[2]
			
				uni.setStorageSync("enquiry_start_region",enquiry_start_region)
				
				
				this.subList[0].text = enquiry_start_region
				const start_region_value = e.areaCode
				uni.setStorageSync("start_region_value",start_region_value)
				uni.reLaunch({
					url:"/pages/hall_opener/hall_opener"
				})
			},
			
			//收货区域
			    selectDest() {
			    // 根据 label 获取
				
			    var index = this.$refs.simpleAddressDest.queryIndex(['江苏省', '徐州市', '云龙区'], 'label');
			    
			    this.cityPickeDestrValueDefault = index.index;
			    this.$refs.simpleAddressDest.open();
			},
			onConfirmDest(e) {
				var pickerTextDest
				if(e.provinceCode==11
				||e.provinceCode==31
				||e.provinceCode==12||e.provinceCode==50){
					pickerTextDest = e.labelArr[0]+e.labelArr[2]
				}
				else{
					pickerTextDest = e.labelArr[0]+e.labelArr[1]+e.labelArr[2]
				}
				
				const enquiry_dest_region = e.labelArr[2]
				
				uni.setStorageSync("enquiry_dest_region",enquiry_dest_region)
				
				
				this.subList[1].text = enquiry_dest_region
				const dest_region_value = e.areaCode
				uni.setStorageSync("dest_region_value",dest_region_value)
				uni.reLaunch({
					url:"/pages/hall_opener/hall_opener"
				})
			},
			
			onCancelOrigin(){
				uni.showToast({
					title:"请确认发货地区",
					icon:"none"
				})
				this.subList[0].text = "未确定"
				return
			},
			
			onCancelDest(){
				uni.showToast({
					title:"请确认收货地区",
					icon:"none"
				})
				this.subList[1].text = "未确定"
				return
			},
		}
	}
</script>

<style lang="scss" scoped>
	.head-sect{
		width:100%;
		height:80rpx;
		display: flex;
		margin-top: 50rpx;
		flex-direction: row;
	}
	.navbar{
		width:90%;
		display: flex;
		
		height:70rpx;
		padding: 0 5rpx;
		background: #fff;
		position: relative;
		z-index:3;
		.nav-item{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
			height:100%;
			color: #989a98;
			font-size:25rpx;
			position:relative;	
		}
		
		/*#ifdef H5*/
		.nav-item{
			font-size:16px;
			font-weight: 400;
		}
		/*#endif*/
	}
	
	.plus{
		width:10%;
		color:000;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 70rpx;
		
	}
	
	.current{
		
		width:150rpx;
		border:1rpx solid #e6e6e6;
		border-radius:50rpx;
		color:#000;
		font-size: 35rpx;
		text-align: center;
	}
	
	.shipping-body{
		margin-top:15rpx;
	}
	
	.content{
		background-color: #fff;
	}
	
	
	@keyframes turnZ{
	
	  0%{transform:rotateZ(0deg);}
	
	  100%{transform:rotateZ(360deg);}
	
	}
	
	.add{
		width:35rpx;
		height:35rpx;
		
	} 
	
	.rotate{
		
			
		 animation: turnZ 1s linear infinite;
	}
	
	
	.sub-sect{
		width:100%;
		height:80rpx;
		display: flex;
		margin-top: 50rpx;
		flex-direction: row;
	}
	
	.currentsub{
		
		
			color:#4682cb;
			font-size: 35rpx;
			text-align: center;
		
	}
	
	
	
	
	.lee-city{
		
	}
    
	
	.down{
		width: 23rpx;
		height: 23rpx;
		margin-left: 10rpx;
		
	}
	
	.condition-list{
		width: 90%;
		margin-top: 25rpx;
		margin-left: 5%;
		white-space: nowrap;
		overflow: hidden;
		height:50rpx;
		display: flex;
		justify-content: space-between;
		
	}
	
	.sm-bars{
		width: 85%;
		white-space: nowrap;
		overflow: hidden;
		
		height:40rpx;
	}
	
	.clear-bars{
		width: 10%;
		color: #4a94f7;
		font-size: 30rpx;
	}
	
	.sm-item{
		
		background-color: #ebf5fe;
		color: #4a94f7;
		
		margin-left: 5rpx;
		margin-right: 5rpx;
	}
	
	.bg-item{
		font-size: 30rpx;
		background-color: #ebf5fe;
		color: #4a94f7;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
	
	.show{
		opacity: 0;
	}
	
	.unshow{
		opacity: 1;
	}
</style>
