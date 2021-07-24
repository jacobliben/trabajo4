// 常量及校验规则
/**
 * 货源审核
 */
export const sourceAudit = {
    // 货源审核通过
    sourceAuditPass: 1,
    // 货源待审核
    waitSourceAudit: 2,
    //货源审核未通过
    sourceAuditUnpass: 3
};

 /**  货运下单 sourceStatus
     * 业务状态 0.待发布(已改为草稿),10.待审核,11.待处理(待签约),15.待编辑,20待派单(待发布),23询价中,26.抢单中,28.待接收,30待派车,40待发车,50待签收,60已签收,70已审核,80待确认收货,85完成待评价,90完成已评价
     * 0=草稿,10=待审核,11=待签约,15=待编辑,20=待发布,23=询价中,26=抢单中,28=待接收,30=待派车,33=待审核装载信息,40=待发车,50=待签收,60=待审核,65=审核不通过,70=已审核,80=待确认收货,85=完成待评价,90=完成已评价,120=完成询价
     * /
     * /**
     * 0.待发布(已改为草稿)
     */

/**
 * 手机号码正则
 */
export const phonePartten = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;

/**
 * 18位数字验证,身份证或者营业执照
 */
export const num18 = /^\d{17}(\d{1}|[X|x])$/;

/**
 * 车牌正则 已废弃
 */
// export const vehiclePlateForm = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([A-Z0-9]{5,6}))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/;

/**
* 车牌正则 新能源或者普通车牌
*/
export const vehiclePlateForm = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/;

/**
 * 车牌正则 新能源
 */
export const newVehiclePlateForm = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF])))$/;

/**
 * 车牌正则 普通车牌
 */
export const traditionVehiclePlateForm = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/;

/**
 * 数字和字母正则
 */
export const numAm = /^[A-Za-z0-9]+$/;

/**
 * 派单状态
 */
export const sendDispatchStatus = {
    // 已完成
    finish: 1,
    // 未完成
    unFinish: 2,
    //非指派
    notSend: 3
};

/**
 * 业务状态 0.草稿,10待审核，11待签约，15订单待编辑(指派之前)，20待派单(待发布),23询价中,26.抢单中,30待派车,40待发车,50待签收,60已签收,65审核不通过,70已审核,80待确认，90已完成
 */
export const businessStatus = {
    waitRelease: 0,       //草稿
    waitAudit: 10,        //待审核
    waitHandle: 11,       //待签约
    waitEditOrder: 15,    //待编辑 (指派前)
    waitSendWaybill: 20,  //待发布 (待派单)
    waitEnquiry: 23,      //询价中
    waitGrab: 26,         //抢单中
    waitAccept: 28,       //待接收
    waitSendDispatch: 30, //待派车
    waitAuditLoadInfo: 33,//待审核装载信息
    waitDepart: 40,       //待发车
    waitSign: 50,         //待签收
    finishSign: 60,       //待审核
    unAudit: 65,          //审核未通过
    //已废弃：finishAudit: 70,      //(审核通过) 待评价
    waitConfirmReceipt: 80,   //待确认收货
    waitEvaluation: 85,   //待评价
    finished: 90,         //已完成

};

/**
 * 客户类型 1.个人,2.企业
 */
export const customerType = {
    person: 1,
    company: 2,
};

/**
 * 订单类型,1.指派,2.抢单,3.询价.11待处理
 */
export const orderType = {
    assign: 1,
    grab: 2,
    enquiry: 3,
    waitHandle: 11
};

/**
 * 询价单状态
 */
export const enquiryStatus = {
    waitStart: 1,
    waitQuote: 2,
    waitBidding: 3,
    endBidding: 4
};

/**
 * 承运人状态
 */
export const carrierAudit = {
    /**
     * 承运人 审核通过已经注册
     */
    carrierAuditPass: 1,
    /**
     * 承运人 申请待审核
     */
    waitCarrierAudit: 2,

    /**
     * 承运人 审核未通过
     */
    carrierAuditUnpass: 3,
    /**
     * * 停用
     */
    carrierOutOfService: 15,

    /**
     * 证件资质过期 carrierCertExpired: 10,

     * 禁用 carrierDisabled: -1
     */
};

/**
 * 托运人处理状态
 * */
export const consignorAudit ={
  /**
   * 托运人 审核通过已经注册
   */
  consignorAuditPass: 1,
  /**
   * 托运人 申请待审核
   */
  waitConsignorAudit: 2,
  /**
   * 托运人 审核未通过
   */
  consignorAuditUnpass: 3,
}

/**
 * 车辆状态 1审核通过 2审核中 3审核未通过 10证件过期 15停用
 */
export const vehicleStatus = {
  auditPass: 1,
  auditing: 2,
  auditUnPass: 3,
  certExpired: 10,
  outOfService: 15
}

/**
 * 承运人注册审核状态
 */
export const carrierCompanyAuditStatus = {
  // 待确认
  passToConfirm: 2,
  // 已确认
  confirmed: 3,
};

/**
 * 分配运单状态
 */
export const sendWaybillStatus = {
    // 已完成
    complete: 1,
    // 未完成
    unComplete: 2,
    //非指派
    unAssign: 3
};

/**
* 货源下单计价方式
*/
export const sourceSettlementMethod ={
  // 包车
  byVehicle: 1,
  // 单价
  byUnitPrice: 2
};
/**
 * 承运对账财务审核状态
 */
export const carrierAccountCertAuditStatus ={
  // 待维护
  waitMaintain: 10,
  // 待审核
  waitAudit: 20,
  // 审核通过
  auditPass: 30,
  // 审核未通过
  auditUnPass: 40,

}

/**
 * 证件识别参数：正反面
 */
export const identifyConfigure = {
  // 正面
  face: 'face',
  // 反面
  back: 'back'
};

/**
 * 车辆：类型分类
 */
export const vehicleSpecies = {
  // 货车
  van: 103,
  // 牵引车
  trailer: 303
};

/**
 * 车辆类型
 */
export const vehicleOwnType = {
  person: 1,
  company: 2
}

/**
 * 车辆字段默认值
 */
export const vehicleDefault = {
  vehiclePlateColor: "2",// 车牌颜色，默认黄色 对应vehicle_plate_color(2)
  vehicleSpecies: 303, // 车辆种类，默认半挂车 对应iscm_vehicle_species(303)
  vehicleType: "Q11",    // 车辆类型，默认重新半挂牵引车 对应 vehicle_type(Q11)
  whetherNewEnergy: 2, // 是否新能源，默认非新能源 对应 1新能源 2 非新能源
  vehicleEnergyType:"B", // 车辆能源类型，默认为柴油 对应 vehicle_energy_type(B)

}

/**
 * 车辆：
 */
export const vehicleEnergy = {
  // 新能源
  new: 1,
  // 传统燃油方式
  tradition: 2
};

/**
 * 合同生成方式
 */
export const contractCreateType ={
  // 手动上传
  manualUpload: 1,
  // 系统生成
  systemCreate: 2
}
/**
 * 保险生成方式
 */
export const insuranceCreateType ={
  // 1手动上传
  manualUpload: 1,
  // 2 线上生成
  onLineCreate: 2
}
/**
 * 照片存储路径
 */
export const ossLocation = {
    /**
     * 承运人相关
     *
     * -替换为/  即可
     */
    carrier: {
        /**
         * 身份证正面或营业执照
         */
        front: "carrier-carrier_card_front-",
        /**
         * 身份证背面
         */
        reverse: "carrier-carrier_card_reverse-",
        /**
         * 道路运输经营许可证
         */
        road: "carrier-road_transport_business_license-",

        /**
         * 承运合同
         */
        contract: "carrier-carrier_contract-",
        /**
         * 承运对账
         */
        dzpz: "carrier-dzpz-",

        /**
         * 付款申请
         */
        fksq: "carrier-fksq-"

    },
   
   
    
  /** 法人证件*/
    legal: {
      /**
       * 身份证正面
       */
      front: "legal_front-",

      /**
       * 身份证背面
       */
      reverse: "legal_back-",
    },

    consignor: {
        /**
         * 托运人营业执照或身份证
         */
        front: "consignor-uscc_front-",
        /**
         * 托运人身份证反面
         */
        reverse: "consignor-idcard_reverse-",
        /**
         * 托运合同
         */
        contract: "consignor-consignor_contract-",
        /**
         * 托运对账凭证
         */
        dzpz: "consignor-dzpz-",
        /**
         * 托运开票申请
         */
        kpsq: "consignor-kpsq-"
    },
    /**
       * 保险单
       */
    insurance: { i: "insurance-" },
    /**
     * 注册
     */
    regist: {
        first: "regist-first-",
        second: "regist-second-",
        reverse: "regist-reverse-"
    }
    , dispatch: {
        rch: "dispatch-group-",//人车货（装货时）
        fhd: "dispatch-packing-list-",//发货单（装货时）
		 leave: "dispatch-leave-",//出厂照片（发车时）
        receive: "dispatch-receipt-",//回单（签收时）
       
    }

}

/**
 * 示例图片
 *
 */
export const demoImg = {
    /**
     * 身份证正面
     */
    sfz_1: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/sfz_1.png",
    /**
     * 身份证反面
     */
    sfz_2: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/sfz_2.png",
    /**
     * 营业执照
     */
    yyzz: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/yyzz.jpg",
    /**
     * 道路运输经营许可证
     */
    dl: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/dl.jpg",
    /**
     * 道路运输证
     */
    ys: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/dl.png",
    /**
     * 人车合照
     */
    rc: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/rc.jpg",

    /**
     * 承运合同
     */
    cyht: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/hetong.png",
    /**
     * 托运合同
     */
    tyht: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/hetong.png",
    /**
     * 人车货
     */
    renchehuo: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/renchehuo.jpg",
    /**
     * 出厂
     */
    chuchang: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/chuchang.jpg",
    /**
     * 回单
     */
    hd: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/hd.png",
    /**
     * 发货单
     */
    fahuodan: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/hd.png",
    /**
     * 驾驶证主页
     */
    jsz_1: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E9%A9%BE%E9%A9%B6%E8%AF%81%E6%AD%A3%E9%A1%B5.jpg",
    /**
     * 驾驶证副页
     */
    jsz_2: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E9%A9%BE%E9%A9%B6%E8%AF%81%E5%89%AF%E9%A1%B5.jpg",
    /**
     * 从业资格证
     */
    cy: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E4%BB%8E%E4%B8%9A.jpg",
    /**
     * 行驶证主页
     */
    xsz_1: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E8%A1%8C%E9%A9%B6%E8%AF%81%E6%AD%A3%E9%9D%A2.jpg",
    /**
     * 行驶证副页
     */
    xsz_2: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E8%A1%8C%E9%A9%B6%E8%AF%81%E5%8F%8D%E9%9D%A2.jpg",
    /**
     * 行驶证正副页
     */
    xsz_3: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E8%A1%8C%E9%A9%B6%E8%AF%81%E6%AD%A3%E5%89%AF%E9%A1%B5.jpg",
    /**
     * 保单
     */
    bxd: "",
    /**
     * 托运对账凭证
     */
    tydz: "",
    /**
     * 托运开票申请
     */
    kpsq: "",
    /**
     * 承运对账
     */
    cydz: "",
    /**
     * 付款申请
     */
    fksq: "",
    // 图片预览
    tpyl: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/%E9%A2%84%E8%A7%883.png",

  // 未上传回显图片
    not_upload_img: "https://xgzl-iscm.oss-cn-hangzhou.aliyuncs.com/demoImg/%E6%9C%AA%E4%B8%8A%E4%BC%A0.png"

}

