(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiCart-order-main"],{"0ebc":function(t,e,i){var a=i("cb2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7cabb66c",a,!0,{sourceMap:!1,shadowMode:!1})},6770:function(t,e,i){"use strict";i.r(e);var a=i("76ae"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},6853:function(t,e,i){"use strict";var a=i("0ebc"),n=i.n(a);n.a},"76ae":function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),s=i("8502"),r=i("8a19"),o={onLoad:function(t){this.ral=t.ral,this.super=t.super,this.pintuan=t.pintuan,this.spike=t.spike,this.goods_id=t.goods_id},onShow:function(){(0,r.toLogin)(),uni.getStorageSync("addressId")&&(this.addressId=uni.getStorageSync("addressId")),uni.getStorageSync("shipping")&&(this.shipping=uni.getStorageSync("shipping")),uni.getStorageSync("package")?this.package=uni.getStorageSync("package"):this.package.pack_fee=0,uni.getStorageSync("delivery")&&(this.delivery=uni.getStorageSync("delivery")),uni.getStorageSync("shipping_id")&&(this.shipping_id=uni.getStorageSync("shipping_id"),this.shipping_type=uni.getStorageSync("shipping_type")),uni.getStorageSync("tax_type_name")&&(this.tax_type=uni.getStorageSync("tax_type"),this.tax_type_name=uni.getStorageSync("tax_type_name"),this.tax_title=uni.getStorageSync("tax_name"),this.tax_num=uni.getStorageSync("tax_num")),uni.getStorageSync("productId")&&(this.productId=uni.getStorageSync("productId")),uni.getStorageSync("number")&&(this.number=uni.getStorageSync("number")),uni.getStorageSync("bonusName")&&(this.bonusName=uni.getStorageSync("bonusName"),this.bonus_id=uni.getStorageSync("bonus_id"),this.type_money=uni.getStorageSync("bonusMoney")),uni.getStorageSync("point")&&(this.user_point=uni.getStorageSync("point")),uni.getStorageSync("p_type")&&(this.p_type=uni.getStorageSync("p_type")),uni.getStorageSync("k_status")&&(this.k_status=uni.getStorageSync("k_status")),uni.getStorageSync("delivery_name")&&(this.delivery_name=uni.getStorageSync("delivery_name")),uni.getStorageInfoSync("delivery_id"),this.ral=this.ral,this.superpack=this.super,this.pintuan=this.pintuan,this.result_spike=this.spike,this.goods_id=this.goods_id,this.getDetail(),this.getOrder_end()},onUnload:function(){uni.removeStorage({key:"addressId"}),uni.removeStorage({key:"shipping"}),uni.removeStorage({key:"package"}),uni.removeStorage({key:"p_type"}),uni.removeStorage({key:"k_status"}),uni.removeStorage({key:"integralGoodsid"}),uni.removeStorage({key:"delivery"}),uni.removeStorage({key:"goods_status"}),uni.removeStorage({key:"delivery_name"}),uni.removeStorage({key:"productId"}),uni.removeStorage({key:"number"})},created:function(){},mounted:function(){},data:function(){return{addressId:"",costItem:"",finalAmount:"",totalAmount:"",pmtOrder:0,pmtAmount:0,point:0,listData:[],address:{},shipping:[],package:[],delivery:[],productId:"",shipping_id:"",k_status:"",number:"",money:"",bonus:[],bonusName:"",bonus_id:"",pay_app_id:"",tax_type_name:"",tax_type:"n",tax:0,tax_title:"",tax_num:"",max_integral:0,user_point:0,discount:0,size:!1,end_status:"",end_time:"",prompt:"",delivery_name:"",type_money:0,superpack:"false",result_spike:"false",goods_id:"",pintuan:"false",ral:!1,textarea:!0,msg:"",jifennum:""}},components:{},methods:{SetSize:function(t){this.size=t.detail.value},pay:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=t.addressId){e.next=3;break}return uni.showToast({icon:"none",title:"请选择收货地址"}),e.abrupt("return",!1);case 3:if(0!==t.shipping.length){e.next=9;break}return"",uni.showToast({title:"请选择配送方式",duration:2e3,icon:"none",mask:!0,success:function(t){}}),e.abrupt("return",!1);case 9:JSON.stringify(t.shipping);case 10:if(""!=t.tax_type){e.next=13;break}return uni.showToast({title:"请选择是否开取发票",duration:2e3,icon:"none",mask:!0,success:function(t){}}),e.abrupt("return",!1);case 13:if(i=/^(0|[1-9][0-9]*)$/,i.test(t.point)){e.next=17;break}return uni.showToast({title:"积分只能为大于0的整数",duration:2e3,icon:"none",mask:!0,success:function(t){setTimeout((function(){this.point=0}),10)}}),e.abrupt("return",!1);case 17:if(!(t.point>Number(t.user_point))){e.next=20;break}return uni.showToast({title:"用户积分不足",duration:2e3,icon:"none",mask:!0,success:function(e){t.point=0}}),e.abrupt("return",!1);case 20:if(!(t.point>t.max_integral)){e.next=23;break}return uni.showToast({title:"请填写正确的积分数",duration:2e3,icon:"none",mask:!0,success:function(t){}}),e.abrupt("return",!1);case 23:if("succ"!=t.end_status){e.next=27;break}if(0!=t.size){e.next=27;break}return uni.showToast({title:"请同意明天配送",duration:2e3,icon:"none",mask:!0,success:function(t){}}),e.abrupt("return",!1);case 27:return t.pay_app_id="wxpaywxapp",void 0==t.ral&&(t.ral=!1),void 0==t.superpack&&(t.superpack=!1),e.next=32,(0,s.orderSaveCartApi)({address_id:t.addressId,shipping_id:t.shipping_id,productId:t.productId,bonus_id:t.bonus_id,point:t.point,p_type:t.p_type,o_time:t.delivery.o_time,inv_payee:t.tax_title,tax:t.tax,tax_type:t.tax_type,tax_num:t.tax_num,ral:t.ral,superpack:t.superpack,superGoodsid:t.superGoodsid,integralGoodsid:t.integralGoodsid,pack_fee:t.package.pack_fee,pack_name:t.package.pack_name,inv_type:t.tax_type_name,result_spike:t.result_spike,goods_id:t.goods_id,delivery_name:uni.getStorageSync("delivery_name"),delivery_id:uni.getStorageSync("delivery_id"),pintuan:t.pintuan,pintuanGoodsId:t.pintuanGoodsId,pintuanNumber:t.number,pintuanOrderId:t.pintuanOrderId,msg:t.msg,jifennum:uni.getStorageSync("jifennum")});case 32:a=e.sent,a.data.gen_order?(uni.setStorageSync("bonusName",""),uni.setStorageSync("bonus_id",""),uni.setStorageSync("orderId",a.data.info.order_id),uni.navigateTo({url:"/apiCart/pay/main?orderId="+a.data.info.order_id})):uni.showToast({title:a.data.info,icon:"none",duration:2e3});case 34:case"end":return e.stop()}}),e)})))()},toBonus:function(){uni.navigateTo({url:"/apiMember/coupon/main?order=y&money="+this.costItem})},toOrderpackage:function(){"true"==this.ral?uni.navigateTo({url:"/apiCart/orderpackage/main?ral=true"}):"true"==this.superpack?uni.navigateTo({url:"/apiCart/orderpackage/main?superpack=true"}):uni.navigateTo({url:"/apiCart/orderpackage/main"})},toOrderTiem:function(){"true"==this.ral?uni.navigateTo({url:"/apiCart/deliveryTime/main?ral=true"}):"true"==this.superpack?uni.navigateTo({url:"/apiCart/deliveryTime/main?superpack=true"}):uni.navigateTo({url:"/apiCart/deliveryTime/main"})},toAddressList:function(){uni.navigateTo({url:"/apiCart/addressselect/main"})},toAdd:function(){uni.navigateTo({url:"/apiCart/address/main?type=buy"})},toCoupon:function(){uni.navigateTo({url:"/apiMember/coupon/main"})},getAddress:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.addressId){e.next=7;break}return e.next=3,(0,s.addaddressDetailActionApi)({id:t.addressId});case 3:i=e.sent,t.address=i,e.next=13;break;case 7:return e.next=9,(0,s.orderDefaultAddressApi)({});case 9:a=e.sent,t.address=a,t.addressId=a.id,uni.setStorageSync("addressId",t.addressId);case 13:case"end":return e.stop()}}),e)})))()},toTax:function(){if(void 0==this.addressId)return uni.showToast({title:"没有选择收货地址",icon:"none",duration:2e3}),!1;uni.navigateTo({url:"/apiCart/tax/main"})},toOrderdelivery:function(){if(void 0==this.addressId)return uni.showToast({title:"没有选择收货地址",icon:"none",duration:2e3}),!1;"true"==this.ral?uni.navigateTo({url:"/apiCart/orderdelivery/main?ral=true"}):"true"==this.superpack?uni.navigateTo({url:"/apiCart/orderdelivery/main?superpack=true"}):uni.navigateTo({url:"/apiCart/orderdelivery/main"})},getDetail:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0===t.shipping.length?"":JSON.stringify(t.shipping),t.shipping.id&&(t.shipping_id=t.shipping.id),"n"===t.tax_type&&(t.tax_type="n"),"true"==t.ral&&(t.integralGoodsid=uni.getStorageSync("integralGoodsid")),"true"==t.superpack&&(t.superGoodsid=uni.getStorageSync("superGoodsid")),void 0==t.p_type&&(t.p_type="true"),"true"==t.pintuan&&(t.productId=uni.getStorageSync("pt_product_id"),t.number=uni.getStorageSync("pt_num"),t.pintuanGoodsId=uni.getStorageSync("pt_goods_id"),t.pintuanOrderId=uni.getStorageSync("pt_order_id")),e.next=9,(0,s.orderDetailListApi)({address_id:t.addressId,productId:t.productId,number:t.number,shipping:t.shippingData,ral:t.ral,super:t.superpack,integralGoodsid:t.integralGoodsid,superGoodsid:t.superGoodsid,shipping_id:t.shipping_id,p_type:t.p_type,tax_type:t.tax_type,shipping_type:t.shipping_type,pintuan:t.pintuan,pintuanGoodsId:t.pintuanGoodsId,result_spike:t.result_spike,goods_id:t.goods_id,jifennum:uni.getStorageSync("jifennum")});case 9:if(i=e.sent,!1===i.data.info&&uni.switchTab({url:"/pages/my/main"}),0!=i.data.cart_init){e.next=14;break}return uni.showToast({icon:"none",title:i.data.info,success:function(){setTimeout((function(){uni.switchTab({url:"/pages/my/main"})}),1e3)}}),e.abrupt("return",!1);case 14:"true"!=t.ral&&"true"!=t.superpack&&t.getDiscount(),i&&(t.costItem=i.data.info.total.goods_amount,t.finalAmount=i.data.info.total.total_fee,t.totalAmount=i.data.info.total.total_fee,t.max_integral=i.data.info.total.integral,i.data.info.total.pmtOrder&&(t.pmtOrder=i.pmtOrder),i.data.info.total.pmtAmount&&(t.pmtAmount=i.pmtAmount),t.listData=i.data.info.goods_list,t.money=i.data.info.total.shipping_fee,uni.setStorageSync("goods_status",i.data.info.total.goods_status),t.tax=i.data.info.total.tax,t.address=i.data.info.address_list,t.addressId=i.data.info.address_list.address_id,t.finalAmount=t.finalAmount-t.type_money,uni.setStorageSync("addressId",i.data.info.address_list.address_id),t.package&&(t.costItem<t.package.free_money&&(t.finalAmount=Number(t.finalAmount)+Number(t.package.pack_fee)),"true"==t.superpack&&(t.costItem=i.data.info.total.goods_price,t.money=i.data.info.total.shipping_fee,t.finalAmount=t.finalAmount+Number(t.package.pack_fee)),"true"==t.ral&&(t.finalAmount=t.finalAmount-t.discount-i.data.info.total.goods_price+Number(t.package.pack_fee))));case 16:case"end":return e.stop()}}),e)})))()},getDiscount:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"true"==t.pintuan&&(t.goods_id=t.pintuanGoodsId),e.next=3,(0,s.getDiscountApi)({product_id:t.productId,result_spike:t.result_spike,goods_id:t.goods_id});case 3:i=e.sent,i.data.discount&&(t.discount=i.data.discount),t.discount>0&&(t.finalAmount=t.finalAmount-t.discount);case 6:case"end":return e.stop()}}),e)})))()},getOrder_end:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getOrderEndApi)({});case 2:i=e.sent,"fail"==i.data.status?t.end_status=i.data.status:(t.end_status=i.data.status,t.end_time=i.data.response.end_time,t.prompt=i.data.response.prompt);case 4:case"end":return e.stop()}}),e)})))()}}};e.default=o},"7ec6":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("订单确认")])],2),i("div",{staticClass:"order"},[t.address.consignee?i("div",{staticClass:"address",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAddressList.apply(void 0,arguments)}}},[i("div",{staticClass:"item"},[i("div",{staticClass:"list"},[i("div",{staticClass:"addresslist"},[i("div",[i("p",[t._v(t._s(t.address.consignee))]),"true"==t.address.is_default?i("div",{staticClass:"moren"},[t._v("默认")]):t._e()]),i("div",{staticClass:"info"},[i("p",[t._v(t._s(t.address.mobile))]),i("p",[t._v(t._s(t.address.address))])]),i("div")])])])]):i("div",{staticClass:"seladdress",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAdd.apply(void 0,arguments)}}},[t._v("请选择收货地址")]),i("div",{staticClass:"order-itme-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderdelivery.apply(void 0,arguments)}}},[i("div",{staticClass:"order-item"},[i("div",{staticClass:"l"},[i("v-uni-text",{staticClass:"name"},[t._v("配送方式")]),""!=t.delivery_name?i("v-uni-text",{staticClass:"txt"},[t._v(t._s(t.delivery_name))]):i("v-uni-text",{staticClass:"txt"},[t._v("选择配送方式")])],1),i("div",{staticClass:"r"},[i("v-uni-image",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address_right.png"}})],1)])]),i("div",{staticClass:"order-itme-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderpackage.apply(void 0,arguments)}}},[i("div",{staticClass:"order-item"},[i("div",{staticClass:"l"},[i("v-uni-text",{staticClass:"name"},[t._v("商品包装")]),t.package?i("v-uni-text",{staticClass:"txt"},[t._v(t._s(t.package.pack_name))]):i("v-uni-text",{staticClass:"txt"},[t._v("商品包装")])],1),i("div",{staticClass:"r"},[i("v-uni-image",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address_right.png"}})],1)])]),"true"!=t.ral&&"true"!=t.superpack&&"true"==t.k_status?i("div",{staticClass:"order-itme-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderTiem.apply(void 0,arguments)}}},[i("div",{staticClass:"order-item"},[i("div",{staticClass:"l"},[i("v-uni-text",{staticClass:"name"},[t._v("送达时间")]),t.delivery?i("v-uni-text",{staticClass:"txt"},[t._v(t._s(t.delivery.o_time||" "))]):i("v-uni-text",{staticClass:"txt"},[t._v("送达时间")])],1),i("div",{staticClass:"r"},[i("v-uni-image",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address_right.png"}})],1)])]):t._e(),"true"!=t.ral&&"true"!=t.superpack?i("div",{staticClass:"order-itme-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBonus.apply(void 0,arguments)}}},[i("div",{staticClass:"order-item"},[i("div",{staticClass:"l"},[i("v-uni-text",{staticClass:"name"},[t._v("使用红包")]),t.bonusName?i("v-uni-text",{staticClass:"txt"},[t._v(t._s(t.bonusName))]):t._e()],1),i("div",{staticClass:"r"},[i("v-uni-image",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address_right.png"}})],1)])]):t._e(),"true"!=this.ral?i("div",{staticClass:"order-itme-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toTax.apply(void 0,arguments)}}},[i("div",{staticClass:"order-item"},[i("div",{staticClass:"l"},[i("v-uni-text",{staticClass:"name"},[t._v("发票")]),"n"!=t.tax_type?i("v-uni-text",{staticClass:"txt"},[t._v(t._s(t.tax_type_name))]):i("v-uni-text",{staticClass:"txt"},[t._v("不开票")])],1)])]):t._e(),"true"!=this.ral&&"true"!=t.result_spike?i("div",{staticClass:"orderbox"},[i("div",{staticClass:"item"},[i("div",[t._v("使用积分"),i("span",{staticStyle:{"margin-left":"2upx","font-size":"18upx"}},[t._v("(本订单最多可使用"+t._s(t.max_integral)+"积分)")])]),i("div",[i("v-uni-input",{staticStyle:{border:"1upx solid #ccc",width:"120upx",height:"20upx","text-align":"center","border-radius":"6rpx"},attrs:{type:"text"},model:{value:t.point,callback:function(e){t.point=e},expression:"point"}})],1)])]):t._e(),i("div",{staticClass:"orderbox"}),i("div",{staticClass:"orderbox"},[t.ral?t._e():i("div",{staticClass:"item"},[i("div",[t._v("商品合计")]),i("div",[t._v("￥"+t._s(t.costItem))])]),i("div",{staticClass:"item"},[i("div",[t._v("包装费")]),i("div",[t._v("+￥"+t._s(t.package.pack_fee||"0"))])]),0!=t.type_money?i("div",{staticClass:"item"},[i("div",[t._v("红包抵扣")]),i("div",[t._v("-￥"+t._s(t.type_money||"0"))])]):t._e(),i("div",{staticClass:"item"},[i("div",[t._v("运费")]),i("div",[t._v("+￥"+t._s(t._f("priceFormat")(t.money,2)))])]),"n"!=t.tax_type?i("div",{staticClass:"item"},[i("div",[t._v("税费")]),i("div",[t._v("+￥"+t._s(t.tax))])]):t._e(),0!==t.pmtOrder?i("div",{staticClass:"item"},[i("div",[t._v("订单促销")]),i("div",[t._v("-￥"+t._s(t.pmtOrder))])]):t._e(),0!==t.pmtAmount?i("div",{staticClass:"item"},[i("div",[t._v("商品促销")]),i("div",[t._v("-￥"+t._s(t.pmtAmount-t.pmtOrder))])]):t._e(),"succ"==t.end_status?i("div",{staticClass:"item"},[i("div",[t._v("截单时间："+t._s(t.end_time)+"，"+t._s(t.prompt))]),i("div"),i("div",[i("v-uni-view",{staticClass:"action"},[i("v-uni-switch",{staticClass:"sm",class:t.size?"checked":"",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.SetSize.apply(void 0,arguments)}}})],1)],1)]):t._e(),0!=t.discount?i("div",{staticClass:"item"},[i("div",[t._v("优惠活动")]),i("div",[t._v("-￥"+t._s(t.discount))])]):t._e()]),i("div",{staticClass:"cartlist"},[t._l(t.listData,(function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"con"},[i("div",{staticClass:"left"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.goods_thumb,alt:!0}})]),i("div",{staticClass:"info"},[i("p",[t._v(t._s(e.goods_name))]),i("p",{staticClass:"small"},[t._v(t._s(e.sku_str))]),"true"!=t.ral&&"true"!=t.superpack&&"true"!=t.result_spike&&0==t.promote_price?i("p",[t._v("￥"+t._s(e.goods_price))]):t._e(),"true"!=t.ral&&"true"!=t.superpack&&"true"!=t.result_spike&&0!=t.promote_price?i("p",[t._v("￥"+t._s(e.goods_price))]):t._e(),"true"==t.ral?i("p",[t._v(t._s(e.exchange_integral)+"积分")]):t._e(),"true"==t.superpack&&"false"==t.result_spike?i("p",[t._v("￥"+t._s(e.package_price))]):t._e(),"true"==t.result_spike?i("p",[t._v("￥"+t._s(e.package_price))]):t._e()])]),i("div",{staticClass:"right"},["true"!=t.superpack&&"true"!=t.result_spike?i("div",{staticClass:"num"},[t._v("x"+t._s(e.goods_number))]):t._e(),"true"==t.superpack?i("div",{staticClass:"num"},[t._v("x1")]):t._e(),"true"==t.result_spike?i("div",{staticClass:"num"},[t._v("x1")]):t._e()])])])})),i("div",{staticClass:"total"},[i("div",{staticClass:"title"},[t._v("给卖家留言")])]),t.textarea?i("v-uni-textarea",{attrs:{type:"text",placeholder:"给卖家留言"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}):t._e()],2),i("div",{staticClass:"bottom"},[i("div",[t._v("实付 : ￥"+t._s(t._f("priceFormat")(t.finalAmount,2)))]),i("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v("确认订单")])])])],1)},s=[]},"81e2":function(t,e,i){"use strict";i.r(e);var a=i("7ec6"),n=i("6770");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("6853");var r,o=i("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"8a7c4c2e",null,!1,a["a"],r);e["default"]=d.exports},cb2b:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.order[data-v-8a7c4c2e]{overflow-x:hidden}.order .seladdress[data-v-8a7c4c2e]{width:100%;min-height:%?166?%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address-bg-bd.png) 0 0 repeat-x #fff;background-size:%?62?% %?10?%;margin-bottom:%?20?%;padding-top:%?10?%;text-align:center;line-height:%?166?%}.order .address[data-v-8a7c4c2e]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address-bg-bd.png) 0 0 repeat-x #fff;padding:%?50?% 0 %?30?% 0;margin-bottom:%?20?%}.order .address .item[data-v-8a7c4c2e]{padding:0 %?10?% 0 %?30?%}.order .address .item .addresslist[data-v-8a7c4c2e]{width:100%;position:relative;-webkit-transition:all .3s ease;transition:all .3s ease;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .address .item .addresslist div[data-v-8a7c4c2e]:nth-child(1){position:relative;width:%?100?%;left:%?15?%;text-align:center;-webkit-align-self:flex-start;align-self:flex-start}.order .address .item .addresslist div:nth-child(1) p[data-v-8a7c4c2e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.order .address .item .addresslist div:nth-child(1) .moren[data-v-8a7c4c2e]{width:%?60?%;height:%?30?%;font-size:%?24?%;border:%?1?% solid #b4282d;text-align:center;line-height:%?30?%;color:#fff;padding:0 %?5?%;background:#b4282d;margin:%?10?% auto 0 auto;border-radius:%?10?%}.order .address .item .addresslist .info[data-v-8a7c4c2e]{max-width:%?700?%;padding:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;word-break:break-all;white-space:normal;word-wrap:break-word}.order .address .item .addresslist .info p[data-v-8a7c4c2e]:nth-child(2){margin-top:%?5?%;color:#666;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.order .address .item .addresslist div[data-v-8a7c4c2e]:nth-child(3){width:%?50?%;height:%?50?%;margin:0 %?20?%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/address-right.png) no-repeat;background-size:100% 100%}.order .order-itme-box[data-v-8a7c4c2e]{padding:0 %?30?%;overflow:hidden;background:#fff}.order .order-itme-box .order-item[data-v-8a7c4c2e]{width:100%;height:%?108.3?%;overflow:hidden;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #d9d9d9}.order .order-itme-box .l[data-v-8a7c4c2e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?43?%;line-height:%?43?%;padding-top:%?35?%}.order .order-itme-box .l .name[data-v-8a7c4c2e]{float:left}.order .order-itme-box .l .txt[data-v-8a7c4c2e]{float:right}.order .order-itme-box .r[data-v-8a7c4c2e]{margin-top:%?15.5?%;width:%?77?%;height:%?77?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .order-itme-box .r uni-image[data-v-8a7c4c2e]{width:%?52.078?%;height:%?52.078?%}.order .orderbox[data-v-8a7c4c2e]{padding:0 %?30?%;background:#fff}.order .orderbox .item[data-v-8a7c4c2e]{padding:%?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #d9d9d9}.order .orderbox .item[data-v-8a7c4c2e]:last-child{border:none}.order .orderbox uni-input[data-v-8a7c4c2e]{border:1px solid #eee;width:60px;height:15px;line-height:15px;font-size:12px;text-align:center}.order .cartlist[data-v-8a7c4c2e]{background:#fff;margin-bottom:%?110?%;border-top:%?1?% solid #d9d9d9;border-bottom:%?1?% solid #d9d9d9}.order .cartlist .item[data-v-8a7c4c2e]{position:relative;background:#fff;margin:%?10?% 0 %?5?%}.order .cartlist .item .con[data-v-8a7c4c2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-transition:all .3s ease;transition:all .3s ease}.order .cartlist .item .con .left[data-v-8a7c4c2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:90%}.order .cartlist .item .con .left .img[data-v-8a7c4c2e]{height:%?125?%;width:%?125?%;display:block;background:#f4f4f4;margin-left:%?20?%}.order .cartlist .item .con .left .img img[data-v-8a7c4c2e]{width:100%;height:100%}.order .cartlist .item .con .left .info[data-v-8a7c4c2e]{width:73%;padding:%?20?%}.order .cartlist .item .con .left .info p[data-v-8a7c4c2e]{font-size:%?26?%;line-height:%?40?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.order .cartlist .item .con .left .info .small[data-v-8a7c4c2e]{font-size:%?24?%}.order .cartlist .item .con .right[data-v-8a7c4c2e]{font-size:%?26?%;padding-right:%?31.25?%}.order .cartlist .total[data-v-8a7c4c2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?15?% 0 %?15?%;border-bottom:%?1?% solid #f4f4f4}.order .cartlist .total .title[data-v-8a7c4c2e]{padding-left:%?30?%}.order .cartlist .total .bill[data-v-8a7c4c2e]{color:#b4282d;padding-right:%?30?%;text-align:right}.order .cartlist .total .right[data-v-8a7c4c2e]{width:%?40?%;height:%?40?%;margin-right:%?30?%}.order .cartlist .total .right.active[data-v-8a7c4c2e]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.order .cartlist uni-textarea[data-v-8a7c4c2e]{width:%?688?%;height:%?120?%;border:1px solid #666;border-radius:%?10?%;font-size:%?28?%;margin:0 %?30?%;padding:%?10?%}.order .bottom[data-v-8a7c4c2e]{position:fixed;bottom:0;height:%?100?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;font-size:%?32?%;z-index:999}.order .bottom div[data-v-8a7c4c2e]:nth-child(1){font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?100?%;padding-left:%?20?%;background:#f4f4f4}.order .bottom div[data-v-8a7c4c2e]:nth-child(2){width:%?200?%;height:%?100?%;text-align:center;line-height:%?100?%;font-size:%?32?%;background:#b4282d;color:#fff}',""]),t.exports=e}}]);