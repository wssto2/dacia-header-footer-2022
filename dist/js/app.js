(function(t){function e(e){for(var n,s,l=e[0],r=e[1],c=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,l=1;l<i.length;l++){var r=i[l];0!==a[r]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"03e9":function(t,e,i){"use strict";i("84e1")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"plugin-helios-header-footer"},[i("div",{staticClass:"helios-special-elements",attrs:{id:"helios-header"}},[i("nav",{staticClass:"top-nav",attrs:{"data-fplugin":"expand-menu","data-fres":'["md", "lg"]',"data-fopts":'{"triggerSelector":".dropdown", "containerSelector":".expand-container", "grouped" : true}'}},[i("nav",{staticClass:"top-nav"},[i("ul",{staticClass:"module-container"},t._l(t.topNavigation,(function(e,n){return i("li",{key:n,staticClass:"text-uppercase"},[i("a",{staticClass:"gtm-button",attrs:{"data-tracking-name":t.topNavIndexClass,"data-tracking-location":"Menu top navigation",href:e.url,title:"",target:"_self",rel:"nofollow noreferrer"}},[i("span",[t._v(t._s(e.title))])])])})),0)])]),i("div",{attrs:{"data-fplugin":"expand-menu","data-fopts":'{"triggerSelector":".dropdown", "containerSelector":".expand-container", "grouped" : true}'}},[i("div",{staticClass:"page-header--helios",attrs:{"data-fplugin":"menu"}},[i("header",{staticClass:"module-container"},[i("div",{staticClass:"header-part brand-logo"},[i("a",{attrs:{href:t.basicInformation.site_url,title:t.basicInformation.site_title}},[i("img",{attrs:{src:"https://unpkg.com/@wssto2/rv-dacia-header-footer-cg-bih-new-main/dist/img/dacia-logo.svg",alt:"Dacia Logo"}})])]),i("nav",{staticClass:"header-part menu hidden-xs"},[i("ul",{staticClass:"main-navigation"},[i("li",{staticClass:"visible-xs visible-sm"},[i("a",{staticClass:"home",attrs:{href:t.basicInformation.site_url,title:"Početna"}},[i("span",{staticClass:"text-uppercase"},[t._v("Početna")])])]),t._l(t.mainNavigation,(function(e,n){return i("DropdownLink",{key:n,attrs:{item:e,itemIndex:n,isActive:t.dropdownActive===n},on:{toggleDropdown:t.toggleDropdown}})}))],2)]),i("div",{staticClass:"header-part menu-trigger ico-before-menu",attrs:{"data-phf-ico-before":""},on:{click:t.toggleMobileDropdown}})]),i("nav",{class:["mobile-menu",{"is-active":t.mobileDropdown}]},[i("div",{staticClass:"close-button-container"},[i("div",{staticClass:"close-button menu-trigger",on:{click:t.toggleMobileDropdown}},[i("span",[i("svg",{staticClass:"eecaeth8 header-t0hq5a e3bhxjg0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30",height:"30",fill:"#FFF"}},[i("path",{attrs:{d:"M29.999 2.512L27.5.012 14.999 12.504 2.498.012l-2.497 2.5L12.5 15.001.001 27.488l2.497 2.5 12.501-12.49L27.5 29.988l2.497-2.5-12.499-12.487z"}})])])])]),i("div",{staticClass:"mobile-menu-container"},[i("div",{staticClass:"mobile-menu-heading"},[i("span",[t._v(t._s(t.basicInformation.site_title))])]),i("div",[i("MobileDropdown",{attrs:{navigation:t.mainNavigation},on:{toggleSubDropdown:t.toggleSubDropdown}})],1),null===t.subContentMobileMenu?i("div",{staticClass:"mobile-menu-bottom-links"},[i("ul",t._l(t.topNavigation,(function(e,n){return i("li",{key:n,staticClass:"padding-left-5"},[i("a",{staticClass:" gtm-button ",attrs:{"data-tracking-name":t.topNavIndexClass,"data-tracking-location":"Menu top navigation",href:e.url,title:"",target:"_self",rel:"nofollow noreferrer"}},[i("span",[e.meta.bold?i("span",{style:e.meta.yellow?"color: #000 !important; background-color: #efdf00;":""},[i("b",[t._v(t._s(e.title))])]):i("span",{style:e.meta.yellow?"color: #000 !important; background-color: #efdf00;":""},[t._v(t._s(e.title))])])])])})),0)]):t._e()])]),i("div",{staticClass:"nav-mask"})]),i("div",{class:["menu-popup",{"is-active":Number.isInteger(t.activeCarCategory)}],staticStyle:{"min-height":"938px"}},[i("div",{staticClass:"menu-popup_close",attrs:{"data-phf-ico-before":"","data-phf-ico-active-before":""}}),0!=t.mainNavFirst?i("div",{staticClass:"menu-popup_inner"},t._l(t.mainNavFirst,(function(e,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.activeCarCategory===n,expression:"activeCarCategory === carPickerIndex"}],key:n,staticClass:"menu-popup_vehicles-container  is-active",staticStyle:{left:"390px"},attrs:{"data-popup":"595468798"}},[i("a",{staticClass:"menu-popup_vehicle-block",attrs:{href:e.url}},[i("span",{staticClass:"menu-popup_icon",attrs:{"data-phf-ico-after":e.icon}}),i("span",{staticClass:"menu-popup_vehicle-name"},[t._v(t._s(e.title))])]),t._l(e.children,(function(e,n){return i("a",{key:n,staticClass:"menu-popup_vehicle-block",attrs:{href:e.url,target:"_self"}},[i("span",{staticClass:"menu-popup_img"},[i("img",{attrs:{src:e.icon}})]),i("span",{staticClass:"menu-popup_vehicle-name"},[t._v(t._s(e.title))])])}))],2)})),0):t._e()]),i("div",{staticClass:"menu-popup_mask"})]),i("nav",{staticClass:"progress-nav helios-special-elements"}),t._l(t.mainNavigation,(function(e,n){return i("Dropdown",{key:n,attrs:{item:e,itemIndex:n,dropdownActiveType:t.dropdownActive}})}))],2)])},o=[],s=i("bc3a"),l=i.n(s),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!==t.dropdownActiveType?i("div",[0!==t.itemIndex||t.item.url||0==t.item||0!==t.dropdownActiveType?t._e():i("div",{class:["expand-container",{"is-active":t.dropdownActive}]},[i("div",{staticClass:"expand grid-row"},[i("div",{staticClass:"sub-nav sub-nav_vehicles"},[i("ul",t._l(t.item.children,(function(e,n){return i("li",{key:n},[i("a",{class:["sub-nav_link",n===t.vehicleDropdownActive?"active":""],attrs:{href:"#",target:"_self",title:"Renault SELECTION"},on:{click:function(e){return t.toggleCarCategory(n)}}},[i("span",[t._v(t._s(e.title))])])])})),0),t._l(t.item.children,(function(e,n){return i("div",{key:n,class:["vehicle-list",n===t.vehicleDropdownActive?"active":""]},[t._l(e.children,(function(e,n){return i("div",{key:n,staticClass:"sub-nav_image_container_vehicle"},[i("a",{attrs:{href:e.url}},[e.icon?i("img",{attrs:{src:e.icon,alt:e.title}}):t._e(),i("span",[t._v(t._s(e.title))])])])})),i("div",{staticClass:"sub-nav_image_container_vehicle last-link"},[i("a",{attrs:{href:e.url}},[t._m(0,!0),i("span",[t._v(t._s(e.title))])])])],2)}))],2)])]),0===t.itemIndex||t.item.url||0==t.item||t.itemIndex!==t.dropdownActiveType?t._e():i("div",{class:["expand-container",{"is-active":t.dropdownActive}]},[i("div",{staticClass:"expand grid-row"},[i("div",{staticClass:"sub-nav dropdown-content"},[i("ul",{style:{flexDirection:"column"===t.item.meta.direction?"column":"row"}},t._l(t.item.children,(function(e,n){return i("li",{key:n},[i("a",{staticClass:"sub-nav_link",attrs:{href:e.url,target:"_self",title:"Renault SELECTION"}},[i("span",[t._v(t._s(e.title))])]),e.meta.image?t._e():i("ul",{staticClass:"sub-nav_children"},t._l(t.item.children[n].children,(function(e,n){return i("li",{key:n,staticClass:"sub-nav_children-item"},[i("a",{staticClass:"sub-nav_link_children",attrs:{href:e.url,target:null!=e.target?e.target:"_self",title:e.title}},[i("span",[t._v(t._s(e.title))])])])})),0),i("div",{staticClass:"sub-nav_image_container"},[i("a",{attrs:{href:e.url,target:"_self",title:"Renault SELECTION"}},[e.meta.image?i("img",{attrs:{src:e.meta.image,alt:e.title}}):t._e()])])])})),0)])])])]):t._e()},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yellow-cube-container"},[i("span",{staticClass:"yellow-cube-plus"},[t._v("+")])])}],u=(i("a9e3"),{name:"Dropdown",props:{item:Object,itemIndex:Number,dropdownActiveType:Number},data:function(){return{dropdownActive:!1,vehicleDropdownActive:0}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggleCarCategory:function(t){this.vehicleDropdownActive=t},close:function(t){this.$el.contains(t.target)||(this.dropdownActive&&this.$emit("showModal",null),this.dropdownActive=!1)}}}),d=u,p=i("2877"),v=Object(p["a"])(d,r,c,!1,null,null,null),m=v.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{class:{"expand-box":!t.item.url}},[i("a",{class:["dropdown","ico--text",t.isActive?"active":""],attrs:{href:t.item.url?t.item.url:"#","data-phf-ico-after":t.item.url?"":t.item.icon,"data-phf-ico-active-after":"",title:"Nova vozila",target:"_self"},on:{click:t.toggleDropdown}},[i("span",[t._v(t._s(t.item.title))])])])},g=[],h={name:"DropdownLink",props:{item:Object,itemIndex:Number,isActive:Boolean},data:function(){return{}},methods:{toggleDropdown:function(){this.$emit("toggleDropdown",this.itemIndex)}}},_=h,b=Object(p["a"])(_,f,g,!1,null,null,null),w=b.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[null===t.contentIndex?i("div",{staticClass:"mobile-dropdown"},[i("ul",{staticClass:"mobile-dropdown-list"},t._l(t.navigation,(function(e,n){return i("li",{key:n,on:{click:function(e){return t.toggleDropdown(n)}}},[i("a",{attrs:{href:e.url}},[i("span",[t._v(t._s(e.title))]),i("span",[i("svg",{staticClass:"eyqfg0d0 header-puqv16 e3bhxjg0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.343 185.343",width:"13",height:"13",fill:"#000"}},[i("path",{attrs:{d:"M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"}})])])])])})),0)]):t._e(),null!==t.contentIndex?i("div",[i("div",{staticClass:"mobile-dropdown-list-expanded"},[i("a",{attrs:{href:"#"},on:{click:function(e){return t.toggleDropdown(null)}}},[i("span",[i("svg",{staticClass:"eyqfg0d0 header-1o4s0u5 e3bhxjg0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.343 185.343",width:"13",height:"13",fill:"#000"}},[i("path",{attrs:{d:"M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"}})])]),i("span",[t._v(t._s(t.navigation[t.contentIndex].title))])])]),i("div",{class:["expanded-list",{vehicle:0===t.contentIndex}]},[i("ul",[0===t.contentIndex?t._l(t.navigation[t.contentIndex].children,(function(e,n){return i("li",{key:n},[i("div",{staticClass:"subnavigation-item-container mobile-vehicle",on:{click:function(i){return t.toggleSubDropdown(e,n)}}},[i("span",{class:["mobile-vehicle-title",{active:t.contentSubIndex===n}]},[t._v(" "+t._s(e.title)+" ")]),i("span",[i("svg",{staticClass:"e1ciq8xl0 header-j58oa1 e3bhxjg0",class:{"rotate-180":t.contentSubIndex===n},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.343 185.343",width:"13",height:"13",fill:"#000"}},[i("path",{attrs:{d:"M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"}})])])]),null!==t.contentSubIndex&&t.contentSubIndex===n?i("div",{staticClass:"mobile-subdropdown mobile-vehicle"},[i("ul",t._l(e.children,(function(e,n){return i("li",{key:n},[i("a",{attrs:{href:e.url}},[i("img",{attrs:{src:e.icon,alt:e.title}}),i("span",[t._v(t._s(e.title))])])])})),0),i("div",{staticClass:"vehicle-list active"},[i("div",{staticClass:"sub-nav_image_container_vehicle last-link"},[i("a",{attrs:{href:t.navigation[t.contentIndex].children[t.contentSubIndex].url}},[t._m(0,!0),i("span",[t._v(t._s(t.navigation[t.contentIndex].children[t.contentSubIndex].title))])])])])]):t._e()])})):t._e(),0!==t.contentIndex?t._l(t.navigation[t.contentIndex].children,(function(e,n){return i("li",{key:n},[e.meta.image?t._e():i("div",{staticClass:"subnavigation-item-container"},[i("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")]),e.children.length>0?i("span",{on:{click:function(i){return t.toggleSubDropdown(e,n)}}},[i("svg",{staticClass:"e1ciq8xl0 header-j58oa1 e3bhxjg0",class:{"rotate-90":t.contentSubIndex===n},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.343 185.343",width:"13",height:"13",fill:"#000"}},[i("path",{attrs:{d:"M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"}})])]):t._e()]),e.meta.image?i("div",[i("a",{staticStyle:{"padding-bottom":"8px"},attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")]),e.meta.image?i("div",{staticClass:"subnavigation-item-image-container"},[i("img",{attrs:{src:e.meta.image,alt:"",width:"auto",height:"120px"}})]):t._e()]):t._e(),null!==t.contentSubIndex&&t.contentSubIndex===n?i("div",{staticClass:"mobile-subdropdown"},[i("ul",t._l(e.children,(function(e,n){return i("li",{key:n},[i("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")])])})),0)]):t._e()])})):t._e()],2)])]):t._e()])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yellow-cube-container"},[i("span",{staticClass:"yellow-cube-plus"},[t._v("+")])])}],y={name:"MobileDropdown",props:{navigation:Array},data:function(){return{contentIndex:null,contentSubIndex:null}},computed:{},methods:{toggleDropdown:function(t){this.contentIndex=this.contentIndex===t?null:t,null===this.contentIndex&&(this.contentSubIndex=null),this.$emit("toggleSubDropdown",this.contentIndex)},toggleSubDropdown:function(t,e){this.contentSubIndex=this.contentSubIndex===e?null:e}}},I=y,k=(i("bd8b"),Object(p["a"])(I,x,C,!1,null,null,null)),N=k.exports,D={components:{Dropdown:m,DropdownLink:w,MobileDropdown:N},name:"Header",created:function(){"HEADER_FOOTER_SETTINGS"in window?this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri):this.url&&this.fetchNavigation(this.url),window.addEventListener("click",this.del)},data:function(){return{image:i("f18d"),expanded:!1,mobileDropdown:!1,activeCarCategory:null,basicInformation:[],topNavigation:[],mainNavigation:[],dropdownActive:null,subContentMobileMenu:null}},beforeDestroy:function(){window.removeEventListener("click",this.del)},computed:{topNavIndexClass:function(){return!0},mainNavFirst:function(){return this.mainNavigation&&this.mainNavigation[0]&&this.mainNavigation[0].children}},methods:{toggleDropdown:function(t){this.dropdownActive=this.dropdownActive===t?null:t},toggleSubDropdown:function(t){this.subContentMobileMenu=t},fetchNavigation:function(t){var e=this;l.a.get(t).then((function(t){e.basicInformation=t.data,e.topNavigation=t.data.top_navigation.schema,e.mainNavigation=t.data.main_navigation.schema}))},toggleMobileDropdown:function(){this.mobileDropdown=!this.mobileDropdown}}},S=D,E=(i("7e3b"),Object(p["a"])(S,a,o,!1,null,"58751ecb",null)),O=E.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"plugin-helios-header-footer"},[i("div",{staticClass:"helios-footer helios-special-elements",attrs:{id:"helios-footer"}},[i("div",{staticClass:"page-footer"},[i("footer",[i("div",{staticClass:"module-container",staticStyle:{"padding-bottom":"70px"}},[i("div",{staticClass:"container-fluid"},[0!=t.mainFooter?i("ul",{staticClass:"row footer-menu",attrs:{"data-fplugin":"expand-content","data-fres":'["xs"]',"data-fopts":'{"expandTriggerClass": "open", "collapsedDisplay" : "", "grouped" : "true", "collapsedDisplay" : ""}'}},[t._l(t.mainFooter,(function(e,n){return i("li",{key:n,staticClass:"col-xs-12 col-sm-4 col-md-3 expand-box"},["no-show"!=e.title?i("div",{class:["menu-group-name","trigger",{open:t.isVisible(n)}],attrs:{"data-phf-ico-active-after":"","data-phf-ico-after":""},on:{click:function(e){return e.preventDefault(),t.toggle(n)}}},[t._v(t._s(e.title))]):t._e(),"no-show"!=e.title?i("ul",{class:["footer-menu","container-show",{displayBlock:t.isVisible(n)}]},t._l(e.children,(function(e,n){return i("li",{key:n},[i("a",{attrs:{title:e.title,href:e.url}},[i("span",[t._v(t._s(e.title))])])])})),0):t._e()])})),0!=t.socialNavigation[0]?i("li",{staticClass:"col-xs-12 col-sm-12 col-md-3 social-menu"},[i("div",{staticClass:"menu-group-name"},[t._v(t._s(t.socialNavigation[0].title))]),i("div",{staticClass:"social-links"},t._l(t.socialNavigation[0].children,(function(e,n){return i("a",{key:n,staticClass:"ico-before",attrs:{href:e.url,title:e.title,target:"_blank",rel:"nofollow"}},[i("span",{domProps:{innerHTML:t._s(e.icon)}})])})),0)]):t._e()],2):t._e()])]),i("div",{staticClass:"bottom-menu"},[t.basicInformation&&t.basicInformation.legal_navigation&&t.basicInformation.legal_navigation.meta&&"true"===t.basicInformation.legal_navigation.meta.two_column?i("div",{staticClass:"module-container row"},[0!=t.legalNavigation?i("ul",{staticClass:"footer-links footer-options col-xs-12 col-md-6 "},t._l(t.legalNavigation[0].children,(function(e,n){return i("li",{key:n},[i("a",{attrs:{title:e.title,href:e.url}},[i("span",[t._v(" "+t._s(e.title)+" ")])])])})),0):t._e(),i("ul",{staticClass:"footer-links footer-legal col-xs-12 col-md-6 "},[t._l(t.legalNavigation[1].children,(function(e,n){return i("li",{key:n},[i("a",{attrs:{title:e.title,href:e.url}},[i("span",[t._v(" "+t._s(e.title)+" ")])])])})),i("li",{staticClass:"footer-legal_item"},[i("span",{staticClass:"copyright",attrs:{title:"© Renault 2021"}},[t._v(t._s(t.footer_trademark))])])],2)]):i("div",{staticClass:"module-container row"},[0!=t.legalNavigation?i("ul",{staticClass:"footer-links footer-options col-xs-12 col-md-6 "},t._l(t.legalNavigation,(function(e,n){return i("li",{key:n},[i("a",{attrs:{title:e.title,href:e.url}},[i("span",[t._v(" "+t._s(e.title)+" ")])])])})),0):t._e(),i("ul",{staticClass:"footer-links footer-legal col-xs-12 col-md-6 "},[i("li",{staticClass:"footer-legal_item"},[i("span",{staticClass:"copyright",attrs:{title:"© Renault 2021"}},[t._v(t._s(t.footer_trademark))])])])])])])])])])},A=[],M={name:"Footer",created:function(){"HEADER_FOOTER_SETTINGS"in window?this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri):this.url&&this.fetchNavigation(this.url)},data:function(){return{visibleIndex:null,mainFooter:[],basicInformation:[],socialNavigation:[],legalNavigation:[]}},computed:{footer_trademark:function(){return this.basicInformation&&this.basicInformation.meta&&this.basicInformation.meta.footer_trademark},passion:function(){return this.basicInformation&&this.basicInformation.meta&&this.basicInformation.meta.passion}},methods:{fetchNavigation:function(t){var e=this;l.a.get(t).then((function(t){e.basicInformation=t.data,e.mainFooter=t.data.mainfooter.schema,e.socialNavigation=t.data.social_navigation.schema,e.legalNavigation=t.data.legal_navigation.schema}))},isVisible:function(t){return this.visibleIndex===t},toggle:function(t){this.visibleIndex===t?this.visibleIndex=null:this.visibleIndex=Number(t)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},j=M,L=(i("03e9"),Object(p["a"])(j,T,A,!1,null,"6791b7b3",null)),F=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#rna-header"),new n["a"]({render:function(t){return t(F)}}).$mount("#rna-footer")},"7e3b":function(t,e,i){"use strict";i("b7b0")},"84e1":function(t,e,i){},"9a1e":function(t,e,i){},b7b0:function(t,e,i){},bd8b:function(t,e,i){"use strict";i("9a1e")},f18d:function(t,e,i){t.exports=i.p+"img/dacia-logo.svg"}});
//# sourceMappingURL=app.js.map