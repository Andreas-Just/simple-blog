(this["webpackJsonpreact-redux-blank"]=this["webpackJsonpreact-redux-blank"]||[]).push([[0],{51:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),s=a(13),c=(a(56),a(58),a(17)),m=a(18),i=a(10),d=a(24),u=a(9),p=a(42),E=a.n(p),b="TOGGLE_IS_FETCHING",g="LOAD_POSTS",f="INPUT_ADD_HANDLER",v="CREATE_POST",h="DELETE_POST",N="SAVE_ID",_={posts:[],isFetching:!1,isRedirect:!1,isReload:!1,post:{title:"",body:""},deleteId:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),console.log(e),t.type){case b:return Object(u.a)({},e,{isFetching:t.isFetching});case g+"_SUCCESS":return Object(u.a)({},e,{posts:Object(d.a)(t.payload.data),isFetching:!0,isRedirect:!1,isReload:!1});case f:return Object(u.a)({},e,{post:Object(u.a)({},e.post,Object(i.a)({},t.name,t.value))});case v:return Object(u.a)({},e,{post:{title:"",body:""}});case v+"_SUCCESS":return Object(u.a)({},e,{isRedirect:!0});case h+"_SUCCESS":return Object(u.a)({},e,{isReload:!0});case N:return Object(u.a)({},e,{deleteId:t.id});default:return e}},w=a(43),x=a(44),j=a.n(x),O=m.c,P=w.create({baseURL:"https://simple-blog-api.crew.red/",responseType:"json"}),S=Object(m.d)(y,O(Object(m.a)(j()(P)))),T=a(94),A=a(95),C=a(96),I=a(97),k=function(){return l.a.createElement("header",{className:"header row row-cols-1"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-info py-3"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("p",{className:"header__brand navbar-brand py-1"},l.a.createElement(T.a,{className:"header__brand-icon mr-2"}),"Simple Blog"),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarTogglerDemo03"},l.a.createElement("div",{className:"header__nav navbar-nav flex-row justify-content-around"},l.a.createElement(s.b,{className:"header__nav-item nav-item nav-link py-1",to:"/home"},l.a.createElement(A.a,{className:"header__nav-icon"}),"Home"),l.a.createElement(s.b,{className:"header__nav-item nav-item nav-link py-1",to:"/posts"},l.a.createElement(C.a,{className:"header__nav-icon"}),"Posts"),l.a.createElement(s.b,{className:"header__nav-item nav-item nav-link py-1",to:"/add"},l.a.createElement(I.a,{className:"header__nav-icon"}),"Add post")))))},R=a(98),D=a(99),F=a(100),L=function(){return l.a.createElement("footer",{className:"footer row row-cols-1 row-cols-sm-2 justify-content-between"},l.a.createElement("div",{className:"footer__auth col-12 d-flex flex-column align-items-sm-start"},l.a.createElement("p",null,"\xa9 Andreas Just. All Rights Reserved."),l.a.createElement("p",null,"Posts data provided by SIMPLE BLOG API")),l.a.createElement("div",{className:"footer__social col-12 d-flex justify-content-sm-end align-items-center"},l.a.createElement("a",{href:"https://github.com/Andreas-Just",target:"_blank",rel:"noreferrer noopener"},l.a.createElement(R.a,{className:"footer__icon",viewBox:"-3 -3 30 30"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/andreas-just/",target:"_blank",rel:"noreferrer noopener"},l.a.createElement(D.a,{className:"footer__icon"})),l.a.createElement("a",{href:"https://join.skype.com/invite/ndowTtpYxB1B",target:"_blank",rel:"noreferrer noopener"},l.a.createElement(F.a,{className:"footer__icon"}))))},B=(a(83),a(14)),H=function(){return l.a.createElement("div",{className:"home row justify-content-center align-items-center flex-grow-1 no-gutters"},l.a.createElement("h3",{className:"home__salutation col-10 col-md-8 col-lg-6 col-xl-4"},"Welcome to my Blog. ",l.a.createElement("br",null),"Here you can download all existing posts, edit them and add comments to them. ",l.a.createElement("br",null),"You can also create your own posts."))},M=a(46),U=a(19),G=a(47),J=a(48),q=a(49),Y=a(101),V=a(102),W=function(){return l.a.createElement("div",{className:"spinner row flex-column justify-content-center align-items-center flex-grow-1 no-gutters"},l.a.createElement("h2",{className:"text-info mb-3"},"Loa",l.a.createElement("span",{className:"d"},"d"),"ing..."),l.a.createElement("div",{className:"circle"},l.a.createElement("span",{className:"line"}),l.a.createElement("span",{className:"line"}),l.a.createElement("span",{className:"line"}),l.a.createElement("span",{className:"line"})))},z=function(e){var t=e.title,a=e.body,n=e.deletePosts,r=e.id,o=e.createPosts,s=e.post;return l.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalCenterTitle"},t),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},a),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-secondary","data-dismiss":"modal"},"No"),l.a.createElement("button",{className:"btn btn-info",onClick:r?function(){return n(r)}:s?function(){return o(s)}:null,"data-dismiss":"modal"},"Yes")))))},K=function(e){function t(){return Object(M.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.props.toggleIsFetching(!1),this.props.loadPosts()}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.isFetching,n=e.deletePosts,r=e.isReload,o=e.loadPosts,s=e.toggleIsFetching,c=e.deleteId,m=e.saveId;return r&&(s(!1),o()),l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{className:"posts row no-gutters flex-column align-items-center"},l.a.createElement(z,{title:"Delete post",body:"Are you sure you want to delete this post?",deletePosts:n,id:c}),l.a.createElement("ul",{className:"posts__list row no-gutters justify-content-center"},t.map((function(e){return l.a.createElement("li",{key:e.id,className:"posts__item col-sm-11 col-md-9 col-lg-7 my-2"},l.a.createElement("div",{className:"row justify-content-between flex-nowrap no-gutters"},l.a.createElement("h3",{className:"posts__title mb-2"},e.title),l.a.createElement("div",{className:"row align-items-center flex-nowrap no-gutters"},l.a.createElement("button",{className:"posts__btn btn btn-outline-info"},l.a.createElement(Y.a,null)),l.a.createElement("button",{className:"posts__btn btn btn-outline-info","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:function(){return m(e.id)}},l.a.createElement(V.a,null)))),e.body?e.body.split("\n").map((function(e,t){return l.a.createElement("p",{key:t,className:"posts__body"},e)})):e.body)})))):l.a.createElement(W,null))}}]),t}(n.Component),Q=Object(c.b)((function(e){return{posts:e.posts,isFetching:e.isFetching,isReload:e.isReload,deleteId:e.deleteId}}),{loadPosts:function(){return{type:"LOAD_POSTS",payload:{request:{method:"get",url:"posts"}}}},toggleIsFetching:function(e){return{type:b,isFetching:e}},deletePosts:function(e){return{type:"DELETE_POST",payload:{request:{method:"delete",url:"posts/".concat(e,"/")}}}},saveId:function(e){return{type:"SAVE_ID",id:e}}})(K),X=Object(c.b)((function(e){return{post:e.post,isRedirect:e.isRedirect}}),{inputAddHandler:function(e,t){return{type:"INPUT_ADD_HANDLER",name:e,value:t}},createPosts:function(e){return{type:"CREATE_POST",payload:{request:{method:"post",url:"posts",headers:{"content-type":"application/x-www-form-urlencoded"},data:E.a.stringify(Object(u.a)({},e))}}}}})((function(e){var t=e.post,a=e.isRedirect,n=e.inputAddHandler,r=e.createPosts;return a?l.a.createElement(B.a,{to:"/posts"}):l.a.createElement("div",{className:"add-post row flex-column align-items-center flex-grow-1 no-gutters"},l.a.createElement("h3",{className:"add-post__title mt-5"},"Add new post"),l.a.createElement("div",{className:"add-post__form row justify-content-end flex-grow-1 align-items-start mt-4 w-75 no-gutters"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"Title post")),l.a.createElement("input",{className:"form-control add-post__input",name:"title",value:t.title,type:"text",onChange:function(e){return n(e.target.name,e.target.value)}})),l.a.createElement("div",{className:"input-group mb-3 h-50"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"Post text")),l.a.createElement("textarea",{className:"form-control add-post__textarea",name:"body",value:t.body,onChange:function(e){return n(e.target.name,e.target.value)}})),l.a.createElement("div",{className:"input-group-prepend mb-3"},l.a.createElement("button",{className:"btn btn-outline-info mr-3","data-toggle":"modal","data-target":"#exampleModalCenter"},"Submit"),l.a.createElement(z,{title:"Add new post",body:"Are you sure you want to add this post?",createPosts:r,post:t}))))})),Z=function(e){return l.a.createElement(B.d,null,l.a.createElement(B.a,{exact:!0,from:"/",to:"/home"}),l.a.createElement(B.b,{path:"/home",component:H}),l.a.createElement(B.b,{path:"/posts",component:Q}),l.a.createElement(B.b,{path:"/add",component:X}),l.a.createElement(B.b,null),l.a.createElement(B.b,null))};o.a.render(l.a.createElement(s.a,null,l.a.createElement((function(){return l.a.createElement(c.a,{store:S},l.a.createElement("div",{className:"app container-fluid d-flex flex-column"},l.a.createElement(k,null),l.a.createElement("main",{className:"row"},l.a.createElement(Z,null)),l.a.createElement(L,null)))}),null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c58ff86d.chunk.js.map