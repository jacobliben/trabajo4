(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/driver_home/driver_home"],{"0d79":function(t,e,n){"use strict";var i=n("ef54"),a=n.n(i);a.a},"12a6":function(t,e,n){"use strict";n.r(e);var i=n("9664"),a=n("bc2a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("942e");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2cfd7e93",null,!1,i["a"],c);e["default"]=u.exports},"18d0":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"29d5":function(t,e,n){},"29fb":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={simpleAddress:function(){return Promise.all([n.e("common/vendor"),n.e("components/simple-address/simple-address")]).then(n.bind(null,"e3b8"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"33d6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("6f36"));a(n("b14d"));function a(t){return t&&t.__esModule?t:{default:t}}var r,c,o,u,s,l,f,d=function(){Promise.all([n.e("common/vendor"),n.e("components/simple-address/simple-address")]).then(function(){return resolve(n("e3b8"))}.bind(null,n)).catch(n.oe)},p={data:function(){return{cityPickerValueDefault:[0,0,1],pickerTextOrigin:"",pickerTextDesti:"",origin_has_input:!1,desti_has_input:!1,items:[{value:"speed_important",name:"速度最快"},{value:"fee_important",name:"费用最低"},{value:"distance_important",name:"距离最短"}],current:0,short_distance:null,fee_per_km:null,show_choice:!1,modalName:null,total_fee:null,modalNameBottom:null,longitude:117.234135,latitude:34.315564,id:0,covers:[],polyline:[]}},components:{simpleAddress:d},onLoad:function(){},methods:{setData:function(t){var e,n,i=this,a=[];Object.keys(t).forEach((function(r){a=r.split("."),e=t[r],n=i.$data,a.forEach((function(t,r){r+1==a.length?i.$set(n,t,e):n[t]||i.$set(n,t,{}),n=n[t]}))}))},selectOrigin:function(){var t=this.$refs.simpleAddressOrigin.queryIndex(["江苏省","徐州市","云龙区"],"label");this.cityPickerValueDefault=t.index,this.$refs.simpleAddressOrigin.open()},selectDesti:function(){var t=this.$refs.simpleAddressDesti.queryIndex(["江苏省","徐州市","云龙区"],"label");this.cityPickerValueDefault=t.index,this.$refs.simpleAddressDesti.open()},radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.target.value){this.current=e,this.findPath();break}},onConfirmOrigin:function(t){11==t.provinceCode||31==t.provinceCode||12==t.provinceCode||50==t.provinceCode?this.pickerTextOrigin=t.labelArr[0]+t.labelArr[2]:this.pickerTextOrigin=t.labelArr[0]+t.labelArr[1]+t.labelArr[2],this.origin_has_input=!0,o&&u&&s&&l&&this.findPath()},findPath:function(){var e=this;t.request({url:"https://restapi.amap.com/v3/geocode/geo?address=".concat(e.pickerTextOrigin,"&key=ae8b30ff7c227fb962010579230bf568"),success:function(n){c=n.data.geocodes[0].location.split(","),o=parseFloat(c[1]),u=parseFloat(c[0]),t.request({url:"https://restapi.amap.com/v3/geocode/geo?address=".concat(e.pickerTextDesti,"&key=ae8b30ff7c227fb962010579230bf568"),success:function(n){s=n.data.geocodes[0].location.split(","),l=parseFloat(s[1]),f=parseFloat(s[0]),t.request({url:"https://restapi.amap.com/v3/direction/driving?origin=".concat(u,"%2C").concat(o,"&destination=").concat(f,"%2C").concat(l,"&strategy=").concat(e.current||0,"&key=ae8b30ff7c227fb962010579230bf568"),success:function(t){e.short_distance=parseFloat(t.data.route.paths[0].distance)/1e3,e.short_distance=e.short_distance,e.short_distance=e.short_distance.toFixed(2),e.drawRoutes()}})}})}})},onConfirmDesti:function(t){11==t.provinceCode||31==t.provinceCode||12==t.provinceCode||50==t.provinceCode?this.pickerTextDesti=t.labelArr[0]+t.labelArr[2]:this.pickerTextDesti=t.labelArr[0]+t.labelArr[1]+t.labelArr[2],this.desti_has_input=!0,this.findPath(),this.show_choice=!0},calcuFee:function(t){this.modalName="FeeInput"},getTotalFee:function(){this.total_fee=this.fee_per_km*this.short_distance,this.total_fee=this.total_fee.toFixed(2),this.modalName=null,this.modalNameBottom="FeeTotal"},hideModal:function(t){this.modalName=null},getFeePerKm:function(t){this.fee_per_km=t.detail.value},hideModalBottom:function(t){this.modalNameBottom=null},drawRoutes:function(){r=this;var t=u+","+o,e=f+","+l,n=new i.default.AMapWX({key:"91897d2c2d83d2cf1b694feb173e4fc9"});n.getDrivingRoute({origin:t,destination:e,strategy:r.current||0,success:function(t){r.latitude=o,r.longitude=u;var e=[];if(t.paths&&t.paths[0]&&t.paths[0].steps)for(var n=t.paths[0].steps,i=0;i<n.length;i++)for(var a=n[i].polyline.split(";"),c=0;c<a.length;c++)e.push({longitude:parseFloat(a[c].split(",")[0]),latitude:parseFloat(a[c].split(",")[1])});r.covers=[{latitude:o,longitude:u,iconPath:"/static/start-point2.png",width:23,height:23},{latitude:l,longitude:f,iconPath:"/static/end-point2.png",width:23,height:23}],r.polyline=[{points:e,color:"#0000AA",width:6,dottedLine:!0,arrowLine:!0}]},fail:function(t){}})}}};e.default=p}).call(this,n("543d")["default"])},3514:function(t,e,n){"use strict";var i=n("29d5"),a=n.n(i);a.a},"358b":function(t,e,n){"use strict";n.r(e);var i=n("f331"),a=n("8f4b");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("3514");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"55441080",null,!1,i["a"],c);e["default"]=u.exports},5280:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("358b")),a=o(n("8479")),r=o(n("d953")),c=o(n("7042"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){n.e("pages/company_news/company_news").then(function(){return resolve(n("3593"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/overall").then(function(){return resolve(n("245f"))}.bind(null,n)).catch(n.oe)},l={data:function(){return{tabCurrentIndex:0,navList:[{state:1,text:"智联百科",orderList:[]},{state:2,text:"货运政策",orderList:[]},{state:3,text:"紧急求助",orderList:[]},{state:4,text:"里程计算",orderList:[]}]}},components:{hotTopics:i.default,emergencyHelp:a.default,companyNews:u,shippingPolicy:r.default,calcMiles:c.default,overall:s},onLoad:function(t){this.tabCurrentIndex=0},methods:{changeTab:function(t){this.tabCurrentIndex=t.target.current},tabClick:function(t){this.tabCurrentIndex=t,console.log(this.tabCurrentIndex,"1wqw")}}};e.default=l},"674a":function(t,e,n){"use strict";n.r(e);var i=n("c43c"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},7042:function(t,e,n){"use strict";n.r(e);var i=n("29fb"),a=n("abb2");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d4cb");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2c49cdb4",null,!1,i["a"],c);e["default"]=u.exports},"70e8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{phoneCall:function(){t.makePhoneCall({phoneNumber:"051687739070"})}}};e.default=n}).call(this,n("543d")["default"])},"76af":function(t,e,n){},"7e0a":function(t,e,n){"use strict";(function(t){n("c5c7");i(n("66fd"));var e=i(n("12a6"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},8479:function(t,e,n){"use strict";n.r(e);var i=n("d887"),a=n("b0ec");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("ca4f");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3b9a27bc",null,!1,i["a"],c);e["default"]=u.exports},"8f4b":function(t,e,n){"use strict";n.r(e);var i=n("a2b8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"942e":function(t,e,n){"use strict";var i=n("f5cd"),a=n.n(i);a.a},9664:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},a2b8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{articles:[{img_src:"/static/smart-warehouse.jpg",title:"智能立体库助力徐工智联增速加码",date:"2021-03-02 15:47",url:"/pages/smart_warehouse/smart_warehouse"},{img_src:"/static/tax-company-news.jpg",title:"保税公司一季度进口件“保供攻坚战”圆满收官",date:"2021-03-10 13:37",url:"/pages/tax_company_news/tax_company_news"},{img_src:"/static/ensure-supply.jpg",title:"最是一年春好处 全力保供正当时",date:"2021-03-05 19:38",url:"/pages/ensure_supply/ensure_supply"}]}},methods:{goArticle:function(e){var n=e.url;t.navigateTo({url:n})}}};e.default=n}).call(this,n("543d")["default"])},abb2:function(t,e,n){"use strict";n.r(e);var i=n("33d6"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},b0ec:function(t,e,n){"use strict";n.r(e);var i=n("70e8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},bc2a:function(t,e,n){"use strict";n.r(e);var i=n("5280"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c43c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{articles:[{img_src:"/static/article20210313.png",title:"交通运输部：2021年1月公路货物运输量公布",date:"2021-02-26",url:"/pages/article20210313/article20210313"},{img_src:"/static/article20210313.png",title:"《邮件快件包装管理办法》解读",date:"2021-02-25",url:"/pages/article20210314/article20210314"},{img_src:"/static/article20210313.png",title:"邮件快件包装管理办法（中华人民共和国交通运输部令2021年第1号）",date:"2021-02-25",url:"/pages/article20210315/article20210315"}]}},methods:{goArticle:function(e){var n=e.url;t.navigateTo({url:n})}}};e.default=n}).call(this,n("543d")["default"])},ca4f:function(t,e,n){"use strict";var i=n("76af"),a=n.n(i);a.a},cecf:function(t,e,n){},d4cb:function(t,e,n){"use strict";var i=n("cecf"),a=n.n(i);a.a},d887:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},d953:function(t,e,n){"use strict";n.r(e);var i=n("18d0"),a=n("674a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0d79");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7c51ea38",null,!1,i["a"],c);e["default"]=u.exports},ef54:function(t,e,n){},f331:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},f5cd:function(t,e,n){}},[["7e0a","common/runtime","common/vendor"]]]);