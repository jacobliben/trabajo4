(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{3707:function(i,t,e){"use strict";e.r(t);var n=e("5484"),s=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,(function(){return n[i]}))}(a);t["default"]=s.a},"3ec5":function(i,t,e){"use strict";var n;e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"details-body"},["查阅"!=this.btn_title?e("v-uni-view",{staticClass:"current-state"},[e("v-uni-text",[i._v("当前状态")])],1):e("v-uni-view"),"查阅"!=this.btn_title?e("v-uni-view",{staticClass:"cu-steps"},[e("v-uni-view",{staticClass:"cu-item text-green"},[e("v-uni-text",{class:"发车"==this.btn_title||"签收"==this.btn_title||"查看"==this.btn_title?"cuIcon-roundcheckfill":"cuIcon-title"}),i._v("待发车")],1),e("v-uni-view",{staticClass:"cu-item ",class:"签收"==this.btn_title||"查看"==this.btn_title?"text-green":"ordinary"},[e("v-uni-text",{class:"签收"==this.btn_title||"查看"==this.btn_title?"cuIcon-roundcheckfill":"cuIcon-title"}),i._v("待签收")],1),e("v-uni-view",{staticClass:"cu-item",class:"查看"==this.btn_title?"text-green":"ordinary"},[e("v-uni-text",{class:"查看"==this.btn_title?"cuIcon-roundcheckfill":"cuIcon-title"}),i._v("已完成")],1)],1):e("v-uni-view"),(i.passed_info.dispatchNo=null)?e("v-uni-view",[e("v-uni-view",{staticClass:"current-state"},[i._v("派车单信息")]),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goWayBillDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("派车单编号")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.dispatchNo))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goCarSendingDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("派车状态")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.dispatchStatus))])],1)],1)],1):e("v-uni-view"),(i.passed_info.waybillNo=null)?e("v-uni-view",[e("v-uni-view",{staticClass:"current-state"},[i._v("运单信息")]),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goShippingOrderNumberDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("运单编号")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.waybillNo))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("运单状态")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v("待接收")]),e("v-uni-text",{staticClass:"cuIcon-right lg text-gray"})],1)],1)],1):e("v-uni-view"),e("v-uni-view",{staticClass:"current-state"},[i._v("货物信息")]),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("货物名称")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name margin-right"},[i._v(i._s(i.passed_info.goodsName))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goGoodsWeightDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("货物重量")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.dispatchGoodsWeight||i.passed_info.goodsWeight)+"吨")])],1)],1),e("v-uni-view",{staticClass:"current-state"},[i._v("承运信息")]),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goCarrierDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("承运人")])],1),e("v-uni-view")],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goCreatedPersonDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("创建人")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.createBy))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("创建时间")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.createTime))])],1)],1),e("v-uni-view",{staticClass:"current-state"},[i._v("发货人信息")]),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("发货人(公司)")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmConsignee.consignorName))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goShipperDetail.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("托运人")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmShipper.companyName))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("发货联系人")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.shipper))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("发货联系人电话")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmShipper.shipperPhone))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("发货地址")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmShipper.shipperAddress))])],1)],1),e("v-uni-view",{staticClass:"current-state"},[i._v("收货人信息")]),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("收货人(公司)")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmConsignee.consignee))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("收货联系人")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.consignee))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("收货联系人电话")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmConsignee.consigneePhone))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name"},[i._v("收货地址")])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"ref-name"},[i._v(i._s(i.passed_info.iscmConsignee.consigneeAddress))])],1)],1)],1)},a=[]},5484:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},props:["passed_info","btn_title"],mounted:function(){console.log(this.passed_info,"fff")},methods:{goWayBillDetail:function(){},goCarSendingDetail:function(){},goShippingOrderNumberDetail:function(){},goGoodsWeightDetail:function(){},goCarrierDetail:function(){},goCarrierContractDetail:function(){},goVehicleDetail:function(){},goChiefDriverDetail:function(){},goAssistentDriverDetail:function(){},goSyncDetail:function(){},goCreatedPersonDetail:function(){},goGoodsNumberDetail:function(){},goShipperDetail:function(){},goInsurancePolicyDetail:function(){}}};t.default=n},"718d":function(i,t,e){"use strict";var n=e("ad94a"),s=e.n(n);s.a},"93a5":function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,"body[data-v-d132e830]{background-color:#fff}.details-body[data-v-d132e830]{background-color:#fff}.current-state[data-v-d132e830]{margin-top:%?10?%;margin-left:%?10?%;margin-bottom:%?25?%;border-left:%?3?% solid orange;padding-left:%?30?%;color:#000;font-size:%?30?%;font-weight:800}.top-line[data-v-d132e830]{border-top:%?1?% solid #d5d5d8}.flex-bar[data-v-d132e830]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:5%;padding-right:5%;padding-top:%?15?%;padding-bottom:%?15?%}.ordinary[data-v-d132e830]{color:#a1a1a1}.name[data-v-d132e830]{color:#999}.ref-name[data-v-d132e830]{font-size:%?25?%;color:#999}",""]),i.exports=t},9519:function(i,t,e){"use strict";e.r(t);var n=e("3ec5"),s=e("3707");for(var a in s)"default"!==a&&function(i){e.d(t,i,(function(){return s[i]}))}(a);e("718d");var v,u=e("f0c5"),o=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"d132e830",null,!1,n["a"],v);t["default"]=o.exports},ad94a:function(i,t,e){var n=e("93a5");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var s=e("4f06").default;s("dfad6736",n,!0,{sourceMap:!1,shadowMode:!1})}}]);