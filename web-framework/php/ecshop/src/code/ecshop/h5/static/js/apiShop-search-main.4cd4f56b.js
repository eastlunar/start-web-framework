(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-search-main"],{"1b97":function(t,a,e){"use strict";e.r(a);var i=e("27a0"),s=e("a56c");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("9a3f");var o,r=e("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"a89928f6",null,!1,i["a"],o);a["default"]=c.exports},"23b8":function(t,a,e){var i=e("58d7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("67ea5d44",i,!0,{sourceMap:!1,shadowMode:!1})},"27a0":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("搜索")])],2),e("div",{staticClass:"search"},[e("div",{staticClass:"head"},[e("div",[e("img",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/search.png",alt:""}}),e("v-uni-input",{attrs:{type:"text","confirm-type":"search",focus:"true",placeholder:"商品搜索",maxlength:"13"},on:{focus:function(a){arguments[0]=a=t.$handleEvent(a),t.inputFocus.apply(void 0,arguments)},input:function(a){arguments[0]=a=t.$handleEvent(a),t.tipsearch.apply(void 0,arguments)},confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.searchWords.apply(void 0,arguments)}},model:{value:t.words,callback:function(a){t.words=a},expression:"words"}}),e("img",{staticClass:"del",attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/clearIpt.png",alt:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clearInput.apply(void 0,arguments)}}})],1),e("div",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])]),t.words?e("div",{staticClass:"searchtips"},[t._l(t.tipsData,(function(a,i){return e("div",{key:i,attrs:{"data-value":a.name},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.searchWords.apply(void 0,arguments)}}},[t._v(t._s(a.name))])})),0==t.tipsData.length?e("div",{staticClass:"nogoods"},[t._v("数据库暂无此类商品...")]):t._e()],2):t._e(),0!=t.historyData.length?e("div",{staticClass:"history"},[e("div",{staticClass:"t"},[e("div",[t._v("历史记录")]),e("div",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clearHistory.apply(void 0,arguments)}}})]),e("div",{staticClass:"cont"},t._l(t.historyData,(function(a,i){return e("div",{key:i,attrs:{"data-value":a},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.searchWords.apply(void 0,arguments)}}},[t._v(t._s(a))])})),0)]):t._e(),e("div",{staticClass:"history hotsearch"},[e("div",{staticClass:"t"},[e("div",[t._v("热门搜索")])]),e("div",{staticClass:"cont"},t._l(t.hotData,(function(a,i){return e("div",{key:i,class:{active:0==i},attrs:{"data-value":a.keyword},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.searchWords.apply(void 0,arguments)}}},[t._v(t._s(a.keyword))])})),0)]),0!=t.listData.length?e("div",{staticClass:"goodsList"},[e("div",{staticClass:"sortnav"},[e("div",{class:[0==t.nowIndex?"active":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab(0)}}},[t._v("综合")]),e("div",{staticClass:"price",class:[1==t.nowIndex?t.activeClass:""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab(1)}}},[t._v("价格")]),e("div",{staticClass:"price",class:[2==t.nowIndex?t.activeClass:""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab(2)}}},[t._v("销量")])]),e("div",{staticClass:"sortlist"},t._l(t.listData,(function(a,i){return e("div",{key:i,staticClass:"item",class:[t.listData.length%2==0?"active":"none"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsDetail(a.id)}}},[e("img",{attrs:{src:a.list_pic_url,alt:""}}),e("p",{staticClass:"name"},[t._v(t._s(a.name))]),0==a.promote_price?e("p",{staticClass:"price"},[t._v("￥"+t._s(a.retail_price))]):t._e(),0!=a.promote_price?e("p",{staticClass:"price"},[t._v("￥"+t._s(a.promote_price))]):t._e()])})),0)]):t._e()])],1)},n=[]},"58d7":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.search[data-v-a89928f6]{height:100vh;position:relative}.search .head[data-v-a89928f6]{height:%?91?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?32?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#fff;border-bottom:%?1?% solid rgba(0,0,0,.15)}.search .head div[data-v-a89928f6]:nth-child(1){height:%?59?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f4f4f4}.search .head div:nth-child(1) img[data-v-a89928f6]{display:inline-block;width:%?31?%;height:%?31?%;margin-left:%?20?%}.search .head div:nth-child(1) uni-input[data-v-a89928f6]{display:inline-block;width:%?480?%;margin-left:%?10?%;background:#f4f4f4;font-size:%?28?%;padding:0}.search .head div:nth-child(1) .del[data-v-a89928f6]{width:%?53?%;height:%?53?%;padding:0}.search .head div[data-v-a89928f6]:nth-child(2){-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.search .searchtips[data-v-a89928f6]{position:absolute;width:100%;top:%?91?%;left:0;bottom:0;box-sizing:border-box;padding:0 %?32?%;z-index:9;background:#fff;overflow-y:scroll;-webkit-overflow-scrolling:touch}.search .searchtips div[data-v-a89928f6]{padding:%?20?% 0}.search .searchtips .nogoods[data-v-a89928f6]{text-align:center;margin-top:%?300?%}.search .goodsList[data-v-a89928f6]{position:absolute;width:100%;top:%?91?%;left:0;bottom:0;background:#fff;box-sizing:border-box;z-index:9;overflow-y:scroll;-webkit-overflow-scrolling:touch}.search .goodsList .sortnav[data-v-a89928f6]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?78?%;line-height:%?78?%;background:#fff;border-bottom:%?1?% solid #d9d9d9}.search .goodsList .sortnav div[data-v-a89928f6]{width:%?250?%;height:100%;text-align:center}.search .goodsList .sortnav .active[data-v-a89928f6]{color:#b4282d}.search .goodsList .sortnav .price[data-v-a89928f6]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/no.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.search .goodsList .sortnav .active.desc[data-v-a89928f6]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/down.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.search .goodsList .sortnav .active.asc[data-v-a89928f6]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/up.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.search .goodsList .sortlist[data-v-a89928f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.search .goodsList .sortlist .item[data-v-a89928f6]{box-sizing:border-box;width:50%;text-align:center;background:#fff;padding:%?15?% 0;border-bottom:%?1?% solid #d9d9d9;border-right:%?1?% solid #d9d9d9}.search .goodsList .sortlist .item img[data-v-a89928f6]{display:block;width:%?302?%;height:%?302?%;margin:0 auto}.search .goodsList .sortlist .item .name[data-v-a89928f6]{margin:%?15?% 0 %?22?% 0;text-align:center;padding:0 %?20?%;font-size:%?24?%}.search .goodsList .sortlist .item .name .promotion_type[data-v-a89928f6]{margin-right:3px;background-color:#b4282d;color:#fff}.search .goodsList .sortlist .item .price[data-v-a89928f6]{text-align:center;font-size:%?30?%;color:#b4282d}.search .goodsList .sortlist .item.active[data-v-a89928f6]:nth-last-child(1){border-bottom:none}.search .goodsList .sortlist .item.active[data-v-a89928f6]:nth-last-child(2){border-bottom:none}.search .goodsList .sortlist .item.none[data-v-a89928f6]:last-child{border-bottom:none}.search .history[data-v-a89928f6]{background:#fff;padding:%?32?%}.search .history .t[data-v-a89928f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?30?%}.search .history .t div[data-v-a89928f6]:nth-child(2){width:%?55?%;height:%?55?%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/del.png) no-repeat;background-size:100% 100%}.search .history .cont[data-v-a89928f6]{max-width:%?686?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.search .history .cont div[data-v-a89928f6]{overflow:hidden;text-overflow:ellipsis;padding:%?10?% %?10?%;border:%?1?% solid #999;margin:0 %?30?% %?20?% 0}.search .history .cont .active[data-v-a89928f6]{border:%?1?% solid #b4282d;color:#b4282d}.search .hotsearch[data-v-a89928f6]{margin-top:%?20?%}',""]),t.exports=a},"9a3f":function(t,a,e){"use strict";var i=e("23b8"),s=e.n(i);s.a},a56c:function(t,a,e){"use strict";e.r(a);var i=e("a60f"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},a60f:function(t,a,e){"use strict";var i=e("4ea4");e("99af"),e("c975"),e("a434"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var s=i(e("1da1")),n=e("8502"),o={created:function(){},mounted:function(){this.getHotData(),this.getHistoryData()},onReachBottom:function(){if(this.page=this.page+1,this.page>this.pagetotal)return!1;this.getlistData()},data:function(){return{nowIndex:0,words:"",historyData:[],hotData:[],tipsData:[],listData:[],order:"",isHot:"",isNew:"",activeClass:"",page:1,total_page:1,num:""}},components:{},methods:{goodsDetail:function(t){uni.navigateTo({url:"/apiShop/goods/main?id="+t})},cancel:function(){uni.navigateBack({delta:1})},clearInput:function(){this.page=1,this.words="",this.listData=[],this.tipsData=[],this.getHistoryData()},inputFocus:function(){this.listData=[],this.tipsearch()},getlistData:function(t){var a=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,n.searchHelperApi)({keyword:a.words,order:a.order,page:a.page,num:a.num});case 2:i=e.sent,a.total_page=i.data.res.total_page,a.listData=t?i.data.res:a.listData.concat(i.data.res);case 5:case"end":return e.stop()}}),e)})))()},changeTab:function(t){this.nowIndex=t,this.page=1,1==t?(this.order="asc"==this.order?"desc":"asc",this.activeClass=this.order+" active",this.num=""):2==t?(this.num="asc"==this.num?"desc":"asc",this.activeClass=this.num+" active",this.order=""):this.order="",this.getlistData(!0)},clearHistory:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:uni.removeStorage({key:"history"}),t.historyData=[];case 2:case"end":return a.stop()}}),a)})))()},searchWords:function(t){var a=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=t.currentTarget.dataset.value,a.words=i||a.words,s=uni.getStorageSync("history"),s?(s.length>3&&s.splice(0,1),-1==s.indexOf(a.words)&&uni.setStorage({key:"history",data:s.concat(a.words)})):uni.setStorage({key:"history",data:[a.words]}),a.getHistoryData(),a.getHotData(),a.tipsData=[],a.getlistData(!0);case 8:case"end":return e.stop()}}),e)})))()},getHotData:function(t){var a=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,n.searchIndexActionApi)({});case 2:e=t.sent,a.hotData=e.data.hotKeywordList;case 4:case"end":return t.stop()}}),t)})))()},tipsearch:function(t){var a=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,n.searchHelperApi)({keyword:a.words,page:a.page});case 2:if(e=t.sent,!e.data.msg){t.next=8;break}return uni.showToast({icon:"none",duration:1e3,title:e.data.msg}),t.abrupt("return",!1);case 8:a.tipsData=e.data.res;case 9:case"end":return t.stop()}}),t)})))()},getHistoryData:function(){this.historyData=uni.getStorageSync("history")||[],this.historyData.length>4&&(this.historyData.length=4,this.historyData=this.historyData)},topicDetail:function(t){uni.navigateTo({url:"/apiShop/topicdetail/main?id="+t})}},computed:{}};a.default=o}}]);