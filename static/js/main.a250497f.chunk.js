(this.webpackJsonpuserprofile=this.webpackJsonpuserprofile||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=(a(79),a(80),a(22)),u=a(71),o=a(18),i=a(15),d={};var m=Object(o.c)({userProfileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ALL_USERS":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"LOAD_ALL_USERS_COMPLETE":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,usersList:t.payload});case"LOAD_ALL_USERS_ERROR":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,usersList:void 0});case"LOAD_USER":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"LOAD_USER_COMPLETE":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,userDetails:t.payload});case"LOAD_USER_ERROR":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,userDetails:void 0});default:return e}}}),p=a(12),f=a.n(p),v=a(70),E=a(16),O=a(44),b=a(60),y=a.n(b).a.create({baseURL:"https://reqres.in/api/users",timeout:1e4});function L(e){return h.apply(this,arguments)}function h(){return(h=Object(O.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{err:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return(x=Object(O.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{err:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var _=f.a.mark(R),g=f.a.mark(S),w=f.a.mark(A);function R(e){var t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(E.b)(L,e.payload);case 3:if(!((t=n.sent).status>=200&&t.status<300)){n.next=12;break}return n.next=7,t.data;case 7:return a=n.sent,n.next=10,Object(E.c)({type:"LOAD_ALL_USERS_COMPLETE",payload:a});case 10:n.next=13;break;case 12:throw t;case 13:n.next=19;break;case 15:return n.prev=15,n.t0=n.catch(0),n.next=19,Object(E.c)({type:"LOAD_ALL_USERS_ERROR",payload:n.t0});case 19:case"end":return n.stop()}}),_,null,[[0,15]])}function S(e){var t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(E.b)(j,e.payload);case 3:if(!((t=n.sent).status>=200&&t.status<300)){n.next=12;break}return n.next=7,t.data;case 7:return a=n.sent,n.next=10,Object(E.c)({type:"LOAD_USER_COMPLETE",payload:a});case 10:n.next=13;break;case 12:throw t;case 13:n.next=19;break;case 15:return n.prev=15,n.t0=n.catch(0),n.next=19,Object(E.c)({type:"LOAD_USER_ERROR",payload:n.t0});case 19:case"end":return n.stop()}}),g,null,[[0,15]])}function A(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.d)("LOAD_ALL_USERS",R),Object(E.d)("LOAD_USER",S)]);case 2:case"end":return e.stop()}}),w)}var D=[A()],U=f.a.mark(k);function k(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)(Object(v.a)(D));case 2:case"end":return e.stop()}}),U)}var C=Object(u.a)(),T=o.d,I=Object(o.e)(m,T(Object(o.a)(C)));C.run(k);var F=I,P=a(109),B=(a(58),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"600px",flexDirection:"column"}},r.a.createElement("h2",null,"Loading"),r.a.createElement(P.a,{animation:"border",variant:"primary"},r.a.createElement("span",{className:"sr-only"},"Loading"))))}),N=a(47),M=a(24),W=a(111),J=a(110),K=a(69),q=function(e){var t=e.setSort;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{onSelect:function(e){return t(e)},title:"Sort By",style:{marginBottom:"2rem"}},r.a.createElement(K.a.Item,{eventKey:"option-1"},"First Name"),r.a.createElement(K.a.Item,{eventKey:"option-2"},"Last Name")))},H=function(e){var t,a=e.usersList,c=Object(n.useState)(a.data),l=Object(N.a)(c,2),s=l[0],u=l[1],o=Object(n.useState)(),i=Object(N.a)(o,2),d=i[0],m=i[1];return Object(n.useEffect)((function(){t="option-1"===d?null===s||void 0===s?void 0:s.sort((function(e,t){return e.last_name.toLowerCase()>t.last_name.toLowerCase()?1:-1})):null===s||void 0===s?void 0:s.sort((function(e,t){return e.first_name.toLowerCase()>t.first_name.toLowerCase()?1:-1})),u(t)}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement("h2",null,"Users"),r.a.createElement(q,{setSort:m}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},s.map((function(e){return r.a.createElement(M.b,{to:"/user/".concat(e.id),key:e.id},r.a.createElement("div",{style:{padding:20}},r.a.createElement(W.a,{border:"secondary",style:{width:"15rem"},text:"secondary"},r.a.createElement(W.a.Img,{variant:"top",src:e.avatar,alt:"Avatar"}),r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Title,null,null===e||void 0===e?void 0:e.first_name," ",null===e||void 0===e?void 0:e.last_name),r.a.createElement(W.a.Text,null,null===e||void 0===e?void 0:e.email)))))})))))},$=Object(s.b)((function(e){return{usersList:e.userProfileReducer.usersList}}),(function(e){return{fetchAllUsers:function(t){return e(function(e){return{type:"LOAD_ALL_USERS",payload:e}}(t))}}}))((function(e){var t=e.fetchAllUsers,a=e.usersList;return Object(n.useEffect)((function(){t("?delay=3")}),[]),r.a.createElement(r.a.Fragment,null,void 0!==a&&a.data?r.a.createElement(H,{usersList:a}):r.a.createElement(B,null))})),z=a(7),G=Object(s.b)((function(e){return{userDetails:e.userProfileReducer.userDetails}}),(function(e){return{fetchUser:function(t){return e(function(e){return{type:"LOAD_USER",payload:e}}(t))}}}))((function(e){var t,a,c,l,s,u,o=e.fetchUser,i=e.userDetails,d=Object(z.e)().id;return Object(n.useEffect)((function(){o("".concat(d))}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2rem"}},r.a.createElement(W.a,{style:{width:"30rem",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(W.a.Header,null,null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.first_name," ",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.last_name),r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Img,{src:null===i||void 0===i||null===(c=i.data)||void 0===c?void 0:c.avatar,style:{width:"15rem"}}),r.a.createElement(W.a.Text,null,"First Name : ",null===i||void 0===i||null===(l=i.data)||void 0===l?void 0:l.first_name," "),r.a.createElement(W.a.Text,null,"Last Name : ",null===i||void 0===i||null===(s=i.data)||void 0===s?void 0:s.last_name),r.a.createElement(W.a.Text,null,"Email : ",null===i||void 0===i||null===(u=i.data)||void 0===u?void 0:u.email)))))})),Q=function(){return r.a.createElement(s.a,{store:F},r.a.createElement(M.a,null,r.a.createElement(z.a,{exact:!0,path:"/",component:$}),r.a.createElement(z.a,{path:"/user/:id",component:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(105)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.a250497f.chunk.js.map