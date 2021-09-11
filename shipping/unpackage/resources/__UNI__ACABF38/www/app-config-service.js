
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/shipping_order/shipping_order","pages/detail/detail","pages/tel_login/tel_login","pages/accounts/accounts","pages/register/register","pages/recover_account/recover_account","pages/upload_images/upload_images","pages/terms/terms","pages/change_identity/change_identity","pages/re_identifying/re_identifying","pages/file_identifying/file_identifying","pages/shipping_order_details/shipping_order_details","pages/map/map","pages/despatching_pending/despatching_pending","pages/vehicle_list/vehicle_list","pages/vehicle_has_approved/vehicle_has_approved","pages/vehicle_in_approving/vehicle_in_approving","pages/vehicle_not_approved/vehicle_not_approved","pages/vehicle_not_accredited/vehicle_not_accredited","pages/info_not_found/info_not_found","pages/add_vehicle/add_vehicle","pages/vehicle_details/vehicle_details","pages/add_car_boss/add_car_boss","pages/personal_info/personal_info","pages/zones/zones","pages/about_car_boss/about_car_boss","pages/driver_home/driver_home","pages/hot_topics/hot_topics","pages/calc_miles/calc_miles","pages/shipping_policy/shipping_policy","pages/emergency_help/emergency_help","pages/article20210313/article20210313","pages/article20210314/article20210314","pages/article20210315/article20210315","pages/smart_warehouse/smart_warehouse","pages/tax_company_news/tax_company_news","pages/ensure_supply/ensure_supply","pages/client_service/client_service","pages/way_bill/way_bill","pages/receiving_shipping_order/receiving_shipping_order","pages/distribute_drivers/distribute_drivers","pages/accept_shippig_order/accept_shippig_order","pages/way_bill_details/way_bill_details","pages/shipping_order_number_detail/shipping_order_number_detail","pages/car_sending_detail/car_sending_detail","pages/carrier_detail/carrier_detail","pages/goods_number_detail/goods_number_detail","pages/carrier_contract_detail/carrier_contract_detail","pages/shipper_detail/shipper_detail","pages/created_person_detail/created_person_detail","pages/chief_driver_detail/chief_driver_detail","pages/sync_detail/sync_detail","pages/way_bill_detail/way_bill_detail","pages/assistent_driver_detail/assistent_driver_detail","pages/vehicle_detail/vehicle_detail","pages/insurance_policy_detail/insurance_policy_detail","pages/choosing_driver/choosing_driver","pages/select_chief_driver/select_chief_driver","pages/select_assistent_driver/select_assistent_driver","pages/select_vehicle/select_vehicle","pages/choose_company/choose_company","pages/choose_identity/choose_identity","pages/personal_business_info/personal_business_info","pages/vehicle/vehicle","pages/company_business_info/company_business_info","pages/company_license/company_license","pages/finish_registering/finish_registering","pages/bank/bank","pages/no_network/no_network","pages/bank_card/bank_card","pages/bank_card_has_approved/bank_card_has_approved","pages/add_bankcard/add_bankcard","pages/change_phone/change_phone","pages/change_password/change_password","pages/profile/profile","pages/bind_vehicle/bind_vehicle","pages/driver_list/driver_list","pages/driver_has_approved/driver_has_approved","pages/add_driver/add_driver","pages/member/member","pages/bind_id/bind_id","pages/dispatch_before/dispatch_before","pages/camera/camera","pages/camera/portrait/portrait","pages/camera/idcard/idcard","pages/camera/idphoto/idphoto","pages/info_center/info_center","pages/message/message","pages/dispatch_before_detail/dispatch_before_detail","pages/order_detail/order_detail","pages/inquiry/inquiry","pages/quote/quote","pages/cada_inquiry/cada_inquiry","pages/hall/hall","pages/cada_quote/cada_quote","pages/hall_opener/hall_opener","pages/tabbar_index/tabbar_index","pages/tabbar_waybill/tabbar_waybill","pages/tabbar_accounts/tabbar_accounts","pages/carrier_contract/carrier_contract","pages/hall_select/hall_select","pages/inquiry_start/inquiry_start"],"window":{"navigationBarTitleText":"徐工智联","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f8f8f8","onReachBottomDistance":200,"enablePullDownRefresh":true},"tabBar":{"custom":true,"list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"/static/home.png","selectedIconPath":"static/home-selected.png"},{"text":"运单","pagePath":"pages/shipping_order/shipping_order","iconPath":"static/shipping-order.png","selectedIconPath":"static/shipping-orders-selected.png"},{"text":"派车单","pagePath":"pages/way_bill/way_bill","iconPath":"static/orders.png","selectedIconPath":"static/orders-selected.png"},{"text":"货源大厅","pagePath":"pages/hall_opener/hall_opener","iconPath":"static/hall.png","selectedIconPath":"static/hall-selected.png"},{"text":"我的","pagePath":"pages/accounts/accounts","iconPath":"/static/me.png","selectedIconPath":"static/me-selected.png"}],"selectedColor":"#fd6801","color":"#c8c7cc","backgroundColor":"#fff"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"徐工智联","compilerVersion":"3.1.12","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#f8f8f8","enablePullDownRefresh":false,"navigationStyle":"custom","titleView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"徐工智联","enablePullDownRefresh":true,"navigationStyle":"custom","titleView":false}},{"path":"/pages/shipping_order/shipping_order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"运单","enablePullDownRefresh":true,"animationType":"pop-in","animationDuration":300}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/tel_login/tel_login","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#f8f8f8","enablePullDownRefresh":false,"navigationStyle":"custom","titleView":false}},{"path":"/pages/accounts/accounts","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"animationType":"zoom-fade-out","animationDuration":300}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册","enablePullDownRefresh":false,"navigationStyle":"custom","animationType":"slide-in-top","animationDuration":300}},{"path":"/pages/recover_account/recover_account","meta":{},"window":{"navigationBarTitleText":"找回账号密码","enablePullDownRefresh":false,"animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/upload_images/upload_images","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"zoom-out","animationDuration":300}},{"path":"/pages/terms/terms","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"fade-in","animationDuration":300}},{"path":"/pages/change_identity/change_identity","meta":{},"window":{"navigationBarTitleText":"注册 请确定您的角色","enablePullDownRefresh":false,"animationType":"zoom-out","animationDuration":300}},{"path":"/pages/re_identifying/re_identifying","meta":{},"window":{"navigationBarTitleText":"身份信息认证","enablePullDownRefresh":false}},{"path":"/pages/file_identifying/file_identifying","meta":{},"window":{"navigationBarTitleText":"个体司机认证","enablePullDownRefresh":false}},{"path":"/pages/shipping_order_details/shipping_order_details","meta":{},"window":{"navigationBarTitleText":"运单详情","enablePullDownRefresh":false}},{"path":"/pages/map/map","meta":{},"window":{"navigationBarTitleText":"地图","enablePullDownRefresh":false}},{"path":"/pages/despatching_pending/despatching_pending","meta":{},"window":{"navigationBarTitleText":"待发货","enablePullDownRefresh":true}},{"path":"/pages/vehicle_list/vehicle_list","meta":{},"window":{"navigationBarTitleText":"车辆管理","enablePullDownRefresh":false,"animationType":"zoom-out","animationDuration":300}},{"path":"/pages/vehicle_has_approved/vehicle_has_approved","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"zoom-fade-out","animationDuration":300}},{"path":"/pages/vehicle_in_approving/vehicle_in_approving","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/vehicle_not_approved/vehicle_not_approved","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/vehicle_not_accredited/vehicle_not_accredited","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/info_not_found/info_not_found","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"zoom-fade-out","animationDuration":300}},{"path":"/pages/add_vehicle/add_vehicle","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"slide-in-top","animationDuration":300}},{"path":"/pages/vehicle_details/vehicle_details","meta":{},"window":{"navigationBarTitleText":"车辆详情","enablePullDownRefresh":false,"animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/add_car_boss/add_car_boss","meta":{},"window":{"navigationBarTitleText":"添加车老板","enablePullDownRefresh":false}},{"path":"/pages/personal_info/personal_info","meta":{},"window":{"navigationBarTitleText":"个人资料","enablePullDownRefresh":false,"animationType":"pop-in","animationDuration":300}},{"path":"/pages/zones/zones","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/about_car_boss/about_car_boss","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/driver_home/driver_home","meta":{},"window":{"navigationBarTitleText":"司机之家","enablePullDownRefresh":false}},{"path":"/pages/hot_topics/hot_topics","meta":{},"window":{"navigationBarTitleText":"热聊话题","enablePullDownRefresh":false}},{"path":"/pages/calc_miles/calc_miles","meta":{},"window":{"navigationBarTitleText":"里程计算","enablePullDownRefresh":false}},{"path":"/pages/shipping_policy/shipping_policy","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/emergency_help/emergency_help","meta":{},"window":{"navigationBarTitleText":"紧急求助","enablePullDownRefresh":false}},{"path":"/pages/article20210313/article20210313","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/article20210314/article20210314","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/article20210315/article20210315","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/smart_warehouse/smart_warehouse","meta":{},"window":{"navigationBarTitleText":"智能立体库","enablePullDownRefresh":false}},{"path":"/pages/tax_company_news/tax_company_news","meta":{},"window":{"navigationBarTitleText":"保税公司","enablePullDownRefresh":false}},{"path":"/pages/ensure_supply/ensure_supply","meta":{},"window":{"navigationBarTitleText":"全力保供","enablePullDownRefresh":false}},{"path":"/pages/client_service/client_service","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"客服-小智","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f9f9f9","softinputNavBar":"none"}},{"path":"/pages/way_bill/way_bill","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"派车单","enablePullDownRefresh":true}},{"path":"/pages/receiving_shipping_order/receiving_shipping_order","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/distribute_drivers/distribute_drivers","meta":{},"window":{"navigationBarTitleText":"分配运力","enablePullDownRefresh":true,"onReachBottomDistance":100,"pullToRefresh":{"support":true,"color":"#fa436a","style":"default"}}},{"path":"/pages/accept_shippig_order/accept_shippig_order","meta":{},"window":{"navigationBarTitleText":"运单接收","enablePullDownRefresh":false,"animationType":"zoom-out","animationDuration":300}},{"path":"/pages/way_bill_details/way_bill_details","meta":{},"window":{"navigationBarTitleText":"派车单详情","enablePullDownRefresh":false,"animationType":"zoom-out","animationDuration":300}},{"path":"/pages/shipping_order_number_detail/shipping_order_number_detail","meta":{},"window":{"navigationBarTitleText":"运单编号详情","enablePullDownRefresh":false}},{"path":"/pages/car_sending_detail/car_sending_detail","meta":{},"window":{"navigationBarTitleText":"派车状态详情","enablePullDownRefresh":false}},{"path":"/pages/carrier_detail/carrier_detail","meta":{},"window":{"navigationBarTitleText":"承运人详情","enablePullDownRefresh":false}},{"path":"/pages/goods_number_detail/goods_number_detail","meta":{},"window":{"navigationBarTitleText":"货源编号详情","enablePullDownRefresh":false}},{"path":"/pages/carrier_contract_detail/carrier_contract_detail","meta":{},"window":{"navigationBarTitleText":"承运合同详情","enablePullDownRefresh":false}},{"path":"/pages/shipper_detail/shipper_detail","meta":{},"window":{"navigationBarTitleText":"托运人名称详情","enablePullDownRefresh":false}},{"path":"/pages/created_person_detail/created_person_detail","meta":{},"window":{"navigationBarTitleText":"创建人详情","enablePullDownRefresh":false}},{"path":"/pages/chief_driver_detail/chief_driver_detail","meta":{},"window":{"navigationBarTitleText":"主驾驶员详情","enablePullDownRefresh":false}},{"path":"/pages/sync_detail/sync_detail","meta":{},"window":{"navigationBarTitleText":"同步详情","enablePullDownRefresh":false}},{"path":"/pages/way_bill_detail/way_bill_detail","meta":{},"window":{"navigationBarTitleText":"派车单编号详情","enablePullDownRefresh":false}},{"path":"/pages/assistent_driver_detail/assistent_driver_detail","meta":{},"window":{"navigationBarTitleText":"副驾驶员详情","enablePullDownRefresh":false}},{"path":"/pages/vehicle_detail/vehicle_detail","meta":{},"window":{"navigationBarTitleText":"车辆详情","enablePullDownRefresh":false}},{"path":"/pages/insurance_policy_detail/insurance_policy_detail","meta":{},"window":{"navigationBarTitleText":"保险单号详情","enablePullDownRefresh":false}},{"path":"/pages/choosing_driver/choosing_driver","meta":{},"window":{"navigationBarTitleText":"选择司机和车辆","enablePullDownRefresh":false,"navigationStyle":"custom","titleView":false}},{"path":"/pages/select_chief_driver/select_chief_driver","meta":{},"window":{"navigationBarTitleText":"选择主驾驶员","enablePullDownRefresh":false,"animationType":"zoom-out","animationDuration":300}},{"path":"/pages/select_assistent_driver/select_assistent_driver","meta":{},"window":{"navigationBarTitleText":"选择副驾驶员","enablePullDownRefresh":false}},{"path":"/pages/select_vehicle/select_vehicle","meta":{},"window":{"navigationBarTitleText":"选择车辆","enablePullDownRefresh":false}},{"path":"/pages/choose_company/choose_company","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","titleView":false}},{"path":"/pages/choose_identity/choose_identity","meta":{},"window":{"navigationBarTitleText":"注册 选定身份角色","enablePullDownRefresh":false}},{"path":"/pages/personal_business_info/personal_business_info","meta":{},"window":{"navigationBarTitleText":"个人经营信息","enablePullDownRefresh":false}},{"path":"/pages/vehicle/vehicle","meta":{},"window":{"navigationBarTitleText":"车辆信息","enablePullDownRefresh":false}},{"path":"/pages/company_business_info/company_business_info","meta":{},"window":{"navigationBarTitleText":"公司经营信息","enablePullDownRefresh":false}},{"path":"/pages/company_license/company_license","meta":{},"window":{"navigationBarTitleText":"公司驾驶证件信息","enablePullDownRefresh":false}},{"path":"/pages/finish_registering/finish_registering","meta":{},"window":{"navigationBarTitleText":"注册完成","enablePullDownRefresh":false}},{"path":"/pages/bank/bank","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/no_network/no_network","meta":{},"window":{"navigationBarTitleText":"网络断开或信号微弱","enablePullDownRefresh":false}},{"path":"/pages/bank_card/bank_card","meta":{},"window":{"navigationBarTitleText":"银行卡信息维护","enablePullDownRefresh":false,"animationType":"slide-in-right","animationDuration":300}},{"path":"/pages/bank_card_has_approved/bank_card_has_approved","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/add_bankcard/add_bankcard","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/change_phone/change_phone","meta":{},"window":{"navigationBarTitleText":"更换手机","enablePullDownRefresh":false}},{"path":"/pages/change_password/change_password","meta":{},"window":{"navigationBarTitleText":"更换密码","enablePullDownRefresh":false,"animationType":"slide-in-right","animationDuration":300}},{"path":"/pages/profile/profile","meta":{},"window":{"navigationBarTitleText":"基本资料","enablePullDownRefresh":false}},{"path":"/pages/bind_vehicle/bind_vehicle","meta":{},"window":{"navigationBarTitleText":"绑定车船牌照号","enablePullDownRefresh":false,"animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/driver_list/driver_list","meta":{},"window":{"navigationBarTitleText":"驾驶员","enablePullDownRefresh":false}},{"path":"/pages/driver_has_approved/driver_has_approved","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/add_driver/add_driver","meta":{},"window":{"navigationBarTitleText":"添加驾驶员","enablePullDownRefresh":false}},{"path":"/pages/member/member","meta":{},"window":{"navigationBarTitleText":"承运人会员信息维护","enablePullDownRefresh":false}},{"path":"/pages/bind_id/bind_id","meta":{},"window":{"navigationBarTitleText":"绑定驾驶员身份证号","enablePullDownRefresh":false}},{"path":"/pages/dispatch_before/dispatch_before","meta":{},"window":{"navigationBarTitleText":"历史派车单","enablePullDownRefresh":false,"animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/camera/camera","meta":{"isNVue":true},"window":{"navigationStyle":"custom","backgroundColor":"#000000"}},{"path":"/pages/camera/portrait/portrait","meta":{"isNVue":true},"window":{"navigationStyle":"custom","backgroundColor":"#000000"}},{"path":"/pages/camera/idcard/idcard","meta":{"isNVue":true},"window":{"navigationStyle":"custom","backgroundColor":"#000000"}},{"path":"/pages/camera/idphoto/idphoto","meta":{"isNVue":true},"window":{"navigationStyle":"custom","backgroundColor":"#000000"}},{"path":"/pages/info_center/info_center","meta":{},"window":{"navigationBarTitleText":"消息中心","enablePullDownRefresh":false,"animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/message/message","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/dispatch_before_detail/dispatch_before_detail","meta":{},"window":{"navigationBarTitleText":"历史派车单详情","enablePullDownRefresh":false,"animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/order_detail/order_detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/inquiry/inquiry","meta":{},"window":{"navigationBarTitleText":"询价单","enablePullDownRefresh":false,"animationType":"fade-in","animationDuration":300}},{"path":"/pages/quote/quote","meta":{},"window":{"navigationBarTitleText":"报价单","enablePullDownRefresh":false,"animationType":"fade-in","animationDuration":300}},{"path":"/pages/cada_inquiry/cada_inquiry","meta":{},"window":{"navigationBarTitleText":"报价","enablePullDownRefresh":false,"animationType":"fade-in","animationDuration":300}},{"path":"/pages/hall/hall","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"animationType":"zoom-fade-out","animationDuration":300}},{"path":"/pages/cada_quote/cada_quote","meta":{},"window":{"navigationBarTitleText":"报价详情","enablePullDownRefresh":false,"animationType":"fade-in","animationDuration":300}},{"path":"/pages/hall_opener/hall_opener","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"货源大厅","enablePullDownRefresh":true,"animationType":"fade-in","animationDuration":300}},{"path":"/pages/tabbar_index/tabbar_index","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/tabbar_waybill/tabbar_waybill","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/tabbar_accounts/tabbar_accounts","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/carrier_contract/carrier_contract","meta":{},"window":{"navigationBarTitleText":"承运电子合同","enablePullDownRefresh":false}},{"path":"/pages/hall_select/hall_select","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/inquiry_start/inquiry_start","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
