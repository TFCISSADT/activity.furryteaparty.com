(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{423:function(e,n,t){"use strict";t.r(n);var o=t(3),r=(t(25),{components:{QrcodeStream:t(401).QrcodeStream},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$store.commit("app/setTitle",e.$t("activity.qrcode.title"));case 1:case"end":return n.stop()}}),n)})))()},data:function(){return{loading:!1}},methods:{onDecode:function(content){location.href=content}}}),c=t(38),component=Object(c.a)(r,(function(){var e=this,n=e._self._c;return n("div",[n("Loading",{model:{value:e.loading,callback:function(n){e.loading=n},expression:"loading"}}),e._v(" "),e.loading?e._e():n("QrcodeStream",{attrs:{camera:"auto"},on:{decode:e.onDecode}})],1)}),[],!1,null,"440bed70",null);n.default=component.exports;installComponents(component,{Loading:t(239).default})}}]);