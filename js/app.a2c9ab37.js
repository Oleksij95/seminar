(function(e){function t(t){for(var n,s,o=t[0],l=t[1],a=t[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],n=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},c=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/seminar/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var d=l;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"129d":function(e,t,i){"use strict";i("e57c")},1771:function(e,t,i){var n={"./chevron.svg":"ac6d","./grid.svg":"47c5","./list.svg":"e7e9","./logo.png":"cf05","./menu.png":"2c36","./right-thin-chevron.png":"71be","./search.svg":"51f2","./video.svg":"8e0f","./view-list.svg":"18a6"};function r(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="1771"},"18a6":function(e,t,i){e.exports=i.p+"img/view-list.268e9fca.svg"},"2c36":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKBAMAAAB293L0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRF////////////////AAAA////////mnrBTAAAAAd0Uk5T4f8hMAB9kHJjht0AAAAkSURBVHicY2AUBAEBBmVjEDBicIEAOB2WBgKpcBpdHqYPag4AjNAQV4pUPAYAAAAASUVORK5CYII="},"3a4e":function(e,t,i){},"47c5":function(e,t,i){e.exports=i.p+"img/grid.4b02604a.svg"},"51f2":function(e,t,i){e.exports=i.p+"img/search.1cb5bd2d.svg"},5443:function(e,t,i){"use strict";i("cb40")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("b-container",{staticClass:"bv-example-row"},[i("b-row",[i("b-col",{staticClass:"menu_wrapper",attrs:{"col-12":"",lg:"3"}},[i("Aside")],1),i("b-col",{attrs:{"col-12":"",xl:"9","offset-xl":"0",lg:"8","offset-lg":"1",md:"7","offset-md":"5"}},[i("Page")],1)],1)],1)],1)},c=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"aside"},[i("div",{staticClass:"mobile_menu",on:{click:e.changeMobileMenuVisible}},[i("button",[e._v("МЕНю")])]),i("div",{staticClass:"aside-menu",class:{active:e.showMobileMenu}},e._l(e.ACCORDIONS,(function(e){return i("Accordion",{key:e.accordion_id,attrs:{accordion:e}})})),1)])},o=[],l=i("5530"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion"},[n("b-card",{staticClass:"mb-1 accordion-wrapper",attrs:{"no-body":""}},[n("b-card-header",{staticClass:"accordion-head",attrs:{"header-tag":"header",role:"tab"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+e.accordion.accordion_id,expression:"'accordion-' + accordion.accordion_id"}],attrs:{block:"",variant:"info"}},[n("img",{attrs:{src:i("1771")("./"+e.accordion.icon)}}),e._v(" "+e._s(e.accordion.accordion_name)+" ")])],1),n("b-collapse",{attrs:{id:"accordion-"+e.accordion.accordion_id,visible:"",role:"tabpanel"}},[n("b-card-body",["filter"===e.accordion.type?n("b-card-text",e._l(e.accordion.accordion_filters,(function(e){return n("FilterSelectItem",{key:e.id,attrs:{filter:e}})})),1):e._e(),"links"===e.accordion.type?n("b-card-text",e._l(e.accordion.accordion_filters,(function(e){return n("FilterLinksItem",{key:e.id,attrs:{filter:e}})})),1):e._e()],1)],1)],1)],1)},d=[],u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filter-item_wrapper"},[i("div",{staticClass:"filter-item"},[i("input",{attrs:{type:"checkbox",id:e.filter.id},on:{input:function(t){return e.setSelectFilter(t,e.filter)}}}),i("label",{staticClass:"filter",attrs:{for:e.filter.id}},[e._v(" "+e._s(e.filter.name)+" ("+e._s(e.filter.quantity)+") ")])])])},f=[],h=i("53ca"),m=(i("4de4"),i("2f62")),p={props:{filter:{type:Object}},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["addSelectFilter","removeSelectFilter","getFilteredItem","toggleMobileMenu","setDateFilter"])),{},{setSelectFilter:function(e,t){var i=this;if(e.target.checked)if("new"===t.value)this.getFilteredItem(this.filteredVideoList.filter((function(e){var t=new Date(Date.parse(e.date)).getMonth();return t>5}))),this.setDateFilter(!0);else{this.addSelectFilter(t.value);for(var n=function(e){var t=i.selectedFilter[e];i.getFilteredItem(i.filteredVideoList.filter((function(e){return!0===e.options[t]})))},r=0;r<this.selectedFilter.length;r++)n(r)}else{this.removeSelectFilter(t.value);var c=this.VIDEOS;if("new"===t.value&&this.setDateFilter(!1),""===this.selectedTheme&&0===this.selectedFilter.length)this.getFilteredItem(this.VIDEOS);else if("object"===Object(h["a"])(this.selectedTheme)&&0===this.selectedFilter.length)"all"===this.selectedTheme.theme?this.getFilteredItem(this.VIDEOS):this.getFilteredItem(this.VIDEOS.filter((function(e){return e.theme===i.selectedTheme.theme})));else if("object"===Object(h["a"])(this.selectedTheme)&&this.selectedFilter.length>0){if("all"===this.selectedTheme.theme)for(var s=function(e){var t=i.selectedFilter[e];c=i.VIDEOS.filter((function(e){return!0===e.options[t]}))},o=0;o<this.selectedFilter.length;o++)s(o);else for(var l=function(e){var t=i.selectedFilter[e];c=i.VIDEOS.filter((function(e){return!0===e.options[t]&&e.theme===i.selectedTheme.theme}))},a=0;a<this.selectedFilter.length;a++)l(a);this.getFilteredItem(c)}else if(this.selectedFilter.length>0)for(var d=function(e){var t=i.selectedFilter[e];c=c.filter((function(e){return!0===e.options[t]})),i.getFilteredItem(c)},u=0;u<this.selectedFilter.length;u++)d(u)}this.toggleMobileMenu(!1)}}),computed:Object(l["a"])({},Object(m["c"])(["filteredVideoList","selectedFilter","selectedTheme","VIDEOS","dateFilter"]))},v=p,g=(i("69f30"),i("2877")),b=Object(g["a"])(v,u,f,!1,null,null,null),A=b.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filter-item_wrapper"},[i("div",{staticClass:"filter-item"},[i("a",{class:{active:e.filter.theme===e.selectedTheme.theme},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.selectTheme(e.filter)}}},[e._v(" "+e._s(e.filter.name)+" ("+e._s(e.filter.quantity)+") ")])])])},_=[],w={props:{filter:{type:Object}},computed:Object(l["a"])({},Object(m["c"])(["VIDEOS","filteredVideoList","selectedTheme","selectedFilter","dateFilter"])),methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["setSelectedTheme","getFilteredItem","toggleMobileMenu"])),{},{selectTheme:function(e){var t=this,i=null;if(this.setSelectedTheme(e),"all"===e.theme)this.getFilteredItem(this.VIDEOS);else if(0!==this.selectedFilter.length||this.dateFilter)if(0===this.selectedFilter.length&&this.dateFilter)i=this.VIDEOS.filter((function(t){return t.theme===e.theme})),i=i.filter((function(e){var t=new Date(Date.parse(e.date)).getMonth();return t>5})),this.getFilteredItem(i);else{var n=this.VIDEOS.filter((function(t){return t.theme===e.theme}));i=n;for(var r=function(e){var n=t.selectedFilter[e];i=i.filter((function(e){return 1==e.options[n]})),t.getFilteredItem(i)},c=0;c<this.selectedFilter.length;c++)r(c)}else i=this.VIDEOS.filter((function(t){return t.theme===e.theme})),this.getFilteredItem(i);this.toggleMobileMenu(!1)}})},F=w,y=(i("daee"),Object(g["a"])(F,O,_,!1,null,null,null)),V=y.exports,S={props:{accordion:{type:Object}},components:{FilterSelectItem:A,FilterLinksItem:V}},M=S,j=(i("5443"),Object(g["a"])(M,a,d,!1,null,null,null)),I=j.exports,T={methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["toggleMobileMenu"])),{},{changeMobileMenuVisible:function(){this.toggleMobileMenu(!this.showMobileMenu)}}),components:{Accordion:I},computed:Object(l["a"])({},Object(m["c"])(["ACCORDIONS","showMobileMenu"]))},C=T,x=(i("c555"),Object(g["a"])(C,s,o,!1,null,null,null)),E=x.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_wrapper"},[i("div",{staticClass:"top_line"},[i("div",{staticClass:"page-title"},[e.selectedTheme?i("h2",[e._v(e._s(e.selectedTheme.name)+" ("+e._s(e.filteredVideoList.length)+") / "+e._s(e.VIDEOS.length))]):i("h2",[e._v("усі відео")])]),i("div",{staticClass:"btn_wrapper"},[i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeSearch,expression:"closeSearch"}],staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"term",attrs:{type:"text"},domProps:{value:e.term},on:{input:[function(t){t.target.composing||(e.term=t.target.value)},e.searchVideo]}}),i("span",{staticClass:"search_btn"}),e.searchVideos&&e.searchVideos.length>0?i("div",{staticClass:"search_results"},e._l(e.searchVideos,(function(t,n){return i("a",{key:n,attrs:{href:t.options.link},domProps:{innerHTML:e._s(t.title)}})})),0):e._e()]),i("div",{staticClass:"views_type_wrapper"},[i("button",{staticClass:"view_btn grid",on:{click:function(t){return e.changeView("4")}}}),i("button",{staticClass:"view_btn list",on:{click:function(t){return e.changeView("12")}}})])])]),i("VideoList")],1)},D=[],L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video_wrapper"},[i("b-row",e._l(e.filteredVideoList,(function(t){return i("b-col",{key:t.id,attrs:{"col-12":"",lg:e.viewType}},[i("div",{staticClass:"video_item",class:{list:"12"==e.viewType}},[i("div",{staticClass:"img_wrapper"},[i("img",{attrs:{src:t.covers.main,alt:t.title}})]),i("div",{staticClass:"text_wrapper"},[i("div",{staticClass:"video_name",domProps:{innerHTML:e._s(t.title)}}),i("div",{staticClass:"link"},[t.access?i("a",{staticClass:"to_video",attrs:{href:t.options.link}},[e._v(" ДИВИТИСЯ ")]):i("a",{staticClass:"to_pay_video",attrs:{href:t.options.link}},[e._v(" Придбати ")])])])])])})),1)],1)},B=[],U={data:function(){return{videoList:null}},computed:Object(l["a"])({},Object(m["c"])(["VIDEOS","filteredVideoList","viewType"])),methods:Object(l["a"])({},Object(m["b"])(["getVideoList"])),mounted:function(){this.getVideoList()}},N=U,P=(i("b77b"),Object(g["a"])(N,L,B,!1,null,"2a42039e",null)),q=P.exports,R={components:{VideoList:q},data:function(){return{term:"",searchVideos:null}},computed:Object(l["a"])({},Object(m["c"])(["selectedTheme","VIDEOS","filteredVideoList"])),methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["getViewType"])),{},{changeView:function(e){this.getViewType(e);var t={viewType:e};window.localStorage.setItem("seminarOptions",JSON.stringify(t))},searchVideo:function(){var e=this;this.searchVideos=this.VIDEOS.filter((function(t){return t.theme.indexOf(e.term)>-1}))},closeSearch:function(){this.searchVideos=null}}),beforeMount:function(){window.localStorage.getItem("seminarOptions")&&this.getViewType(JSON.parse(window.localStorage.getItem("seminarOptions")).viewType)}},Q=R,G=(i("129d"),Object(g["a"])(Q,k,D,!1,null,null,null)),H=G.exports,K={name:"App",components:{Aside:E,Page:H}},Y=K,$=(i("5c0b"),Object(g["a"])(Y,r,c,!1,null,null,null)),J=$.exports;i("a434"),i("d3b7");n["default"].use(m["a"]);var z=new m["a"].Store({state:{selectedTheme:"",accordions:[{accordion_id:1,accordion_name:"ВІДЕО",type:"filter",icon:"video.svg",accordion_filters:[{id:"1",name:"Акція",value:"sale",quantity:"4"},{id:"2",name:"Популярнi",quantity:"6",value:"popular"},{id:"3",name:"Новинки",quantity:"8",value:"new"}]},{accordion_id:2,accordion_name:"теми",type:"links",icon:"list.svg",accordion_filters:[{id:"4",name:"Всі теми",quantity:"18",theme:"all"},{id:"5",name:"Акцизний податок",quantity:"5",theme:"excise_tax"},{id:"6",name:"Валюта",quantity:"4",theme:"currency"},{id:"7",name:"Виробництво і собівартість",quantity:"3",theme:"production"},{id:"8",name:"Відпустки",quantity:"2",theme:"vacation"},{id:"9",name:"Відрядження",quantity:"4",theme:"business_trips"}]}],videos:null,filteredVideoList:null,viewType:"4",selectedFilter:[],showMobileMenu:!1,dateFilter:!1},mutations:{setSelectedTheme:function(e,t){e.selectedTheme=t},setVideoList:function(e,t){e.videos=t,e.filteredVideoList=t},setFilteredItem:function(e,t){e.filteredVideoList=t},setViewType:function(e,t){e.viewType=t},addSelectFilter:function(e,t){e.selectedFilter.push(t)},removeSelectFilter:function(e,t){e.selectedFilter.indexOf(t)>-1&&e.selectedFilter.splice(e.selectedFilter.indexOf(t),1)},toggleMobileMenu:function(e,t){e.showMobileMenu=t},setDateFilter:function(e,t){e.dateFilter=t}},actions:{setSelectedTheme:function(e,t){var i=e.commit;i("setSelectedTheme",t)},getVideoList:function(e){var t=e.commit;fetch("https://storage.7eminar.ua/content/test_task_front/data.json").then((function(e){return e.json()})).then((function(e){t("setVideoList",e)}))},getFilteredItem:function(e,t){var i=e.commit;i("setFilteredItem",t)},getViewType:function(e,t){var i=e.commit;i("setViewType",t)},addSelectFilter:function(e,t){var i=e.commit;i("addSelectFilter",t)},removeSelectFilter:function(e,t){var i=e.commit;i("removeSelectFilter",t)},toggleMobileMenu:function(e,t){var i=e.commit;i("toggleMobileMenu",t)},setDateFilter:function(e,t){var i=e.commit;i("setDateFilter",t)}},getters:{ACCORDIONS:function(e){return e.accordions},VIDEOS:function(e){return e.videos},selectedTheme:function(e){return e.selectedTheme},filteredVideoList:function(e){return e.filteredVideoList},viewType:function(e){return e.viewType},selectedFilter:function(e){return e.selectedFilter},showMobileMenu:function(e){return e.showMobileMenu},dateFilter:function(e){return e.dateFilter}}}),X=i("5f5b");i("f9e3"),i("2dd8");n["default"].use(X["a"]),n["default"].directive("click-outside",{bind:function(e,t){e.addEventListener("click",(function(e){return e.stopPropagation()})),document.body.addEventListener("click",t.value)},unbind:function(e,t){document.body.removeEventListener("click",t.value)}}),n["default"].config.productionTip=!1,new n["default"]({store:z,render:function(e){return e(J)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"69f30":function(e,t,i){"use strict";i("3a4e")},"71be":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAMAAABoQAyvAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRF////////////AAAA////////////////////////////////////////////////////////////////////////////////////upw6QQAAABl0Uk5Tu7QQAG/92CNO9Ow9MeP6XRrN/4UBCq6fPHDvf7gAAAA8SURBVHicY2BgZGIGAQYWVjZ2MIOZg5OLG8xg5uHl4wczmAUEhYRFQAxmUTEhcRQGTAqmGKhdAsVAmBUAmLMC5IU/K0AAAAAASUVORK5CYII="},"8e0f":function(e,t,i){e.exports=i.p+"img/video.3683e3a5.svg"},"9c0c":function(e,t,i){},ac6d:function(e,t,i){e.exports=i.p+"img/chevron.a7fede03.svg"},b77b:function(e,t,i){"use strict";i("d8bc")},c555:function(e,t,i){"use strict";i("c788")},c788:function(e,t,i){},cb40:function(e,t,i){},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},d8bc:function(e,t,i){},daee:function(e,t,i){"use strict";i("ec50")},e57c:function(e,t,i){},e7e9:function(e,t,i){e.exports=i.p+"img/list.973475ac.svg"},ec50:function(e,t,i){}});
//# sourceMappingURL=app.a2c9ab37.js.map