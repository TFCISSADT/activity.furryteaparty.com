(window.webpackJsonp=window.webpackJsonp||[]).push([[44,9],{372:function(t,e,n){"use strict";n.r(e);var o=n(132),r=n.n(o),l={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:r.a[this.type].background,color:r.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},c=n(38),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position:relative"},[e("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),t.disabled?e("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(372).default})},380:function(t,e,n){n(105);var o={1:0,2:10,3:29,4:58,5:96,6:143,7:200,8:266,9:341,10:426,11:520,12:623,13:736,14:858,15:990,16:1131,17:1281,18:1441,19:1610,20:1788,21:1976,22:2173,23:2379,24:2595,25:2820,26:3054,27:3298,28:3551,29:3814,30:4086,31:4367,32:4658,33:4958,34:5267,35:5586,36:5914,37:6251,38:6598,39:6954,40:7320,41:7695,42:8079,43:8473,44:8876,45:9288,46:9710,47:10141,48:10581,49:11031,50:11490,51:11958,52:12913,53:13887,54:14880,55:15891,56:16921,57:17970,58:19038,59:20124,60:21229,61:22353,62:23495,63:24656,64:25836,65:27035,66:28252,67:29488,68:30743,69:32016,70:33308,71:34619,72:35949,73:37297,74:38664,75:40050,76:41454,77:42877,78:44319,79:45780,80:47259,81:48757,82:50274,83:51810,84:53364,85:54937,86:56529,87:58139,88:59768,89:61416,90:63083,91:64768,92:66472,93:68195,94:69936,95:71696,96:73475,97:75273,98:77089,99:78924};t.exports={getLevelInfo:function(t){if(null==t)return null;for(var e=99,n=0,r=0;;){var l=o[e+1],c=o[e];if(t>=c){n=t-c,r=l-c,void 0===l&&(r=n);break}e--}return{level:e,currentLevelExp:n,currentLevelCapacity:r}},normalizeImageURL:function(t){return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:image/")||t.startsWith("/")?t:"//"+t}}},406:function(t,e,n){var o=n(2),r=n(242).values;o({target:"Object",stat:!0},{values:function(t){return r(t)}})},427:function(t,e,n){"use strict";n.r(e);n(30);var o=n(81),r=n(3),l=(n(35),n(11),n(406),n(25),n(133)),c=n(380),d=n.n(c),f={mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.commit("app/setTitle",t.$t("activity.toplist.title")),t.getTopList();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!0,topList:null,selectedProfession:null}},methods:{getTopList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/activity/topList").then((function(e){t.topList=e.data.topList;for(var n=0,r=[].concat(Object(o.a)(t.topList.byAttendee),Object(o.a)(Object.values(t.topList.byJob).reduce((function(t,e){return t.concat(e)}),[])));n<r.length;n++){var l,c=r[n];c.levelInfo=d.a.getLevelInfo(c.attendee_points),c.avatar=null!==(l=c.ftp_attendee_avatar_preview_url)&&void 0!==l?l:"/assets/logo.webp"}t.selectedProfession=Object.keys(t.topList.byJob)[0]})).catch((function(t){l.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},v=n(38),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-direction:column flex-center"},[e("Loading",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}}),t._v(" "),t.topList?e("div",{staticClass:"display:grid grid-template-columns:1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:32 w:100%"},[e("div",{staticClass:"flex align-items:center flex-direction:column gap:16"},[e("span",{style:{color:t.$store.state.app.darkMode?"#FFF":"#000"}},[t._v("\n        "+t._s(t.$t("activity.toplist.messages.byAttendee"))+"\n      ")]),t._v(" "),t._l(t.topList.byAttendee,(function(n,o){var r;return e("div",{key:n.attendee_id,staticClass:"position:relative flex gap:16 w:100% bg:white border-radius:8 padding:16 drop-shadow overflow:hidden"},[e("div",{staticClass:"flex flex-center gap:32 z-index:2"},[e("img",{staticClass:"h:auto w:128",attrs:{src:n.avatar}}),t._v(" "),e("div",{staticClass:"flex flex-direction:column gap:12|0 font-size:1.2rem"},[e("span",[t._v(" "+t._s(n.attendee_no))]),t._v(" "),e("span",[t._v(" "+t._s(n.attendee_nickname))]),t._v(" "),e("span"),t._v("\n              "+t._s(t.$t("activity.enums.profession."+(null!==(r=n.ftp_attendee_job_class)&&void 0!==r?r:"none"))))])]),t._v(" "),e("div",{staticClass:"position:absolute bottom:0 right:0 font-size:4rem color:rgba(0,0,0,0.1) z-index:1 font-weight:bold"},[t._v("\n          #"+t._s(o+1)+"\n        ")])])}))],2),t._v(" "),e("div",{staticClass:"flex align-items:center flex-direction:column gap:16"},[e("span",{style:{color:t.$store.state.app.darkMode?"#FFF":"#000"}},[t._v("\n        "+t._s(t.$t("activity.toplist.messages.byJob"))+"\n      ")]),t._v(" "),e("div",{staticClass:"flex gap:8"},t._l(Object.keys(t.topList.byJob),(function(n,o){return e("div",{key:n,staticClass:"flex flex-center gap:16"},[e("Button",{attrs:{type:t.selectedProfession===n?"primary":"secondary"},on:{click:function(e){t.selectedProfession=n}}},[t._v("\n            "+t._s(t.$t("activity.enums.profession."+n))+"\n          ")])],1)})),0),t._v(" "),t._l(t.topList.byJob[t.selectedProfession],(function(n,o){return e("div",{key:n.attendee_id,staticClass:"position:relative flex gap:16 w:100% bg:white border-radius:8 padding:16 drop-shadow overflow:hidden"},[e("div",{staticClass:"flex flex-center gap:32 z-index:2"},[e("img",{staticClass:"h:auto w:128",attrs:{src:n.avatar}}),t._v(" "),e("div",{staticClass:"flex flex-direction:column gap:12|0 font-size:1.2rem"},[e("span",[t._v(" "+t._s(n.attendee_no))]),t._v(" "),e("span",[t._v(" "+t._s(n.attendee_nickname))])])]),t._v(" "),e("div",{staticClass:"position:absolute bottom:0 right:0 font-size:4rem color:rgba(0,0,0,0.1) z-index:1 font-weight:bold"},[t._v("\n          #"+t._s(o+1)+"\n        ")])])}))],2)]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(239).default,Button:n(372).default})}}]);