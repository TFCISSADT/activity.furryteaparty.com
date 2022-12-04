(window.webpackJsonp=window.webpackJsonp||[]).push([[45,19],{383:function(e,t,n){"use strict";n.r(t);var r=n(132),o=n.n(r),c={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=n(38),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("select",{style:e.computedStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:n(383).default})},428:function(e,t,n){"use strict";n.r(t);n(17),n(169),n(50),n(40),n(11),n(30),n(20),n(48),n(34),n(49);var r=n(13),o=n(3),c=(n(25),n(35),n(133));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{AttendeeStatus:n(384).default},mounted:function(){this.getStatus(),this.getSchedule()},data:function(){return{status:{},loading:!1,search:null,attendee:null,tasks:[],attendees:{},volunteerRooms:{},selectedVolunteerRoom:null,volunteerTeams:{},selectedVolunteerTeam:null,volunteerJobs:{},volunteerSchedule:[]}},computed:{filteredVolunteerSchedule:function(){var e=this,t=this.volunteerSchedule;return this.selectedVolunteerTeam&&(t=t.filter((function(t){return t.volunteer_team_id==e.selectedVolunteerTeam}))),this.selectedVolunteerRoom&&(t=t.filter((function(t){return t.room_id==e.selectedVolunteerRoom}))),t}},methods:{getStatus:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/activity/me").then((function(t){e.$set(e,"status",d(d({},t.data.attendee),t.data.team))}));case 3:"Z"==e.status.attendee_type||e.status.attendee_is_volunteer||e.$router.push(e.localePath("/")),e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},getSchedule:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/activity/volunteer/schedule").then((function(t){e.attendees=t.data.attendees,e.volunteerJobs=t.data.volunteerJobs,e.volunteerSchedule=t.data.volunteerSchedule,e.volunteerRooms=t.data.volunteerRooms,e.volunteerTeams=t.data.volunteerTeams}));case 3:case"end":return t.stop()}}),t)})))()},searchTasks:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.tasks=[],e.attendee=null,t.next=5,e.$axios.get("/api/activity/volunteer/helper/find/".concat(e.search)).then((function(t){return e.attendee=t.data.attendee,t.data.attendee})).catch((function(e){return c.a.showRequestError(e),null}));case 5:if(null==(n=t.sent)){t.next=11;break}return t.next=9,e.$axios.get("/api/activity/volunteer/helper/".concat(n.attendee_id,"/tasks")).then((function(e){return e.data})).catch((function(e){return c.a.showRequestError(e),null}));case 9:(r=t.sent)&&(e.tasks=r.taskStatus.filter((function(e){return"ACTIVE"==e.ftp_task_status})).map((function(e){return d(d({},e),{},{task:r.tasks[e.task_id]})})));case 11:e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},resolveTask:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.loading=!0,401!=e.task_id){n.next=21;break}if(r=prompt("請輸入分書"),!isNaN(r)){n.next=9;break}return c.a.showSnackbar({message:"請輸入數字",colorType:"negative"}),t.loading=!1,n.abrupt("return");case 9:if(!((r=parseInt(r))<0||r>150)){n.next=16;break}return c.a.showSnackbar({message:"請輸入0-150之間的數字",colorType:"negative"}),t.loading=!1,n.abrupt("return");case 16:return n.next=18,t.$axios.post("/api/activity/volunteer/helper/".concat(t.attendee.attendee_id,"/task/").concat(e.task.task_id,"/resolve"),{points:r}).then((function(e){c.a.showSnackbar({message:t.$t("activity.volunteer.messages.resolveTaskSuccess"),colorType:"positive"}),t.searchTasks()})).catch((function(e){c.a.showRequestError(e)}));case 18:t.loading=!1;case 19:n.next=24;break;case 21:return n.next=23,t.$axios.post("/api/activity/volunteer/helper/".concat(t.attendee.attendee_id,"/task/").concat(e.task.task_id,"/resolve")).then((function(e){c.a.showSnackbar({message:t.$t("activity.volunteer.messages.resolveTaskSuccess"),colorType:"positive"}),t.searchTasks()})).catch((function(e){c.a.showRequestError(e)}));case 23:t.loading=!1;case 24:case"end":return n.stop()}}),n)})))()},failTask:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$axios.post("/api/activity/volunteer/helper/".concat(t.attendee.attendee_id,"/task/").concat(e.task.task_id,"/fail")).then((function(e){c.a.showSnackbar({message:t.$t("activity.volunteer.messages.failTaskSuccess"),colorType:"positive"}),t.searchTasks()})).catch((function(e){c.a.showRequestError(e)}));case 3:t.loading=!1;case 4:case"end":return n.stop()}}),n)})))()}}},v=n(38),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-center flex-direction:column gap:32"},[t("div",{staticClass:"p:32|32 bg:white flex flex-center flex-direction:column gap:32 font-size:1.4rem round drop-shadow border w:100%"},[e._v("\n    請輸入要處理的參加證編號\n    "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"p:8|16 border round",domProps:{value:e.search},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchTasks.apply(null,arguments)},input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),t("Button",{on:{click:e.searchTasks}},[e._v(" 查詢 ")])],1),e._v(" "),t("div",{staticClass:"grid grid-template-columns:1fr|1fr@>sm grid-template-columns:1fr@==sm gap:16 w:100%"},[t("div",{staticClass:"flex align-items:center flex-direction:column gap:16"},[e.attendee?t("div",{staticClass:"font-size:1.2rem",style:{color:e.$store.state.app.darkMode?"#FFF":"#000"}},[e._v("參加者")]):e._e(),e._v(" "),e.attendee?t("AttendeeStatus",{staticClass:"border round drop-shadow bg:white w:100%",attrs:{status:e.attendee,mode:"volunteer"}}):e._e()],1),e._v(" "),t("div",{staticClass:"flex align-items:center flex-direction:column gap:16"},[e.tasks.length>0?t("div",{staticClass:"font-size:1.2rem",style:{color:e.$store.state.app.darkMode?"#FFF":"#000"}},[e._v("任務清單")]):e._e(),e._v(" "),e.tasks.length>0?t("div",{staticClass:"flex gap:16 flex-direction:column w:100%"},e._l(e.tasks,(function(n){return t("div",{key:n.task.task_id,staticClass:"p:16 bg:white flex flex-direction:column gap:8 font-size:1.4rem round drop-shadow border"},[t("div",{staticClass:"font-size:1.4rem max-w:100% word-break:break-all"},[e._v("\n            "+e._s(e.$t("activity.enums.tasks."+n.task.task_code))+"\n          ")]),e._v(" "),t("div",{staticClass:"font-size:1rem mt:8 word-break:break-all"},[e._v("\n            "+e._s(e.$t("activity.enums.tasks."+n.task.task_code+"Description")=="activity.enums.tasks."+n.task.task_code+"Description"?"":e.$t("activity.enums.tasks."+n.task.task_code+"Description"))+"\n          ")]),e._v(" "),t("div",{staticClass:"flex justify-content:flex-end"},[n.task.ftp_task_point_penalty?t("Button",{attrs:{type:"negative"},on:{click:function(t){return e.failTask(n)}}},[e._v("標記為失敗")]):e._e(),e._v(" \n            "),t("Button",{on:{click:function(t){return e.resolveTask(n)}}},[e._v("標記為完成")])],1)])})),0):e._e()])]),e._v(" "),e._e(),e._v(" "),e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(372).default,Select:n(383).default})}}]);