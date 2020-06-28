(function(t){function s(s){for(var a,i,n=s[0],c=s[1],l=s[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(s);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],a=!0,n=1;n<e.length;n++){var c=e[n];0!==o[c]&&(a=!1)}a&&(r.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},o={app:0},r=[];function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=s,n=n.slice();for(var l=0;l<n.length;l++)s(n[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("navbar"),e("router-view")],1)},r=[],i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:{name:"home"}}},[a("div",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticStyle:{transform:"rotate(-90deg)",width:"25px"},attrs:{alt:"Vue logo",src:e("cf05")}}),a("img",{staticStyle:{transform:"rotate(-90deg)",width:"25px","margin-top":"-10px"},attrs:{alt:"Vue logo",src:e("cf05")}})]),a("div",[a("h3",{staticClass:"text-warning"},[t._v("oreds")])])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My Boreds")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c=e("bc3a"),l=e.n(c);l.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=d,m=e("2877"),p=Object(m["a"])(u,i,n,!1,null,null,null),h=p.exports,b=e("335d"),f={name:"App",async beforeCreate(){try{await Object(b["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},v=f,g=(e("5c0b"),Object(m["a"])(v,o,r,!1,null,null,null)),w=g.exports,C=e("8c4f"),y=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home container-fluid"},[e("div",{staticClass:"row top-pad"}),e("div",{staticClass:"row banner"},[e("div",{staticClass:"col-7 card shadow m-auto"},[e("div",{staticClass:"row bubble-boy"},[e("div",{staticClass:"col-6 shadow mx-auto bg-warning rounded-pill text-center text-white"},[e("h1",[t._v("Welcome to Boreds")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-5 text-center"},[e("h4",[t._v("You can use Boreds to create and manage Boards, lists, and tasks")])]),e("div",{staticClass:"col-12 my-4 text-center"})])])])])}],_={name:"home",data(){return{}},computed:{},methods:{},components:{}},x=_,B=(e("9979"),Object(m["a"])(x,y,k,!1,null,"5a64d354",null)),$=B.exports,I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boards container-fluid"},[e("div",{staticClass:"row top-pad"}),e("div",{staticClass:"row banner"},[e("div",{staticClass:"col-7 card shadow m-auto"},[t._m(0),e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col-12 mb-4 text-center"},[e("div",{staticClass:"row"},[e("form",{staticClass:"form-inline col-12",on:{submit:function(s){return s.preventDefault(),t.createBoard(s)}}},[e("div",{staticClass:"col-12 pb-3 border-bottom border-success"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"form-control col-10 m-2",attrs:{type:"text",name:"",id:"",placeholder:"New Board Title...","aria-describedby":"helpId"},domProps:{value:t.newBoard.title},on:{input:function(s){s.target.composing||t.$set(t.newBoard,"title",s.target.value)}}}),t._m(2)])])])])]),t._l(t.boards,(function(s){return e("div",{key:s.id,staticClass:"col-12 text-left pl-5 my-2"},[e("router-link",{staticClass:"my-2",attrs:{to:{name:"board",params:{boardId:s.id}}}},[t._v(" "+t._s(s.title)+" ")])],1)}))],2)])]),t._l(t.boards,(function(s){return e("div",{key:s.id},[e("router-link",{attrs:{to:{name:"board",params:{boardId:s.id}}}},[t._v(t._s(s.title))])],1)}))],2)},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row bubble-boy"},[e("div",{staticClass:"col-6 shadow mx-auto bg-warning rounded-pill text-center text-white"},[e("h1",[t._v("My Boreds")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12 mt-5 text-center"},[e("h6",[t._v("Create a new board or navigate to an existing one")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"m-2 btn btn-warning",attrs:{type:"submit"}},[e("i",{staticClass:"text-success fas fa-plus"})])}],T={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:""}}},computed:{boards(){return this.$store.state.boards}},methods:{createBoard(){this.$store.dispatch("createBoard",this.newBoard),this.newBoard={title:""}}},components:{}},P=T,E=(e("94a7"),Object(m["a"])(P,I,L,!1,null,"8c309e5c",null)),O=E.exports,j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board container-fluid"},[e("div",{staticClass:"row top-pad"}),e("div",{staticClass:"row banner"},[e("div",{staticClass:"col-12 card long-boy shadow"},[e("div",{staticClass:"row bubble-boy"},[e("div",{staticClass:"col-6 shadow mx-auto bg-warning rounded-pill text-center text-white"},[e("div",[e("h1",[t._v(t._s(t.board.title))]),e("button",{staticClass:"btn btn-danger float-right",on:{click:t.deleteBoard}},[t._v("DELETE")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 my-5 text-center"},[e("div",{staticClass:"row"},[e("form",{staticClass:"form-inline col-12",on:{submit:function(s){return s.preventDefault(),t.createList(s)}}},[e("div",{staticClass:"col-12 pb-3 border-bottom border-success"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control col-11 m-2",attrs:{type:"text",name:"title",id:"title",placeholder:"New List Column...","aria-describedby":"helpId"},domProps:{value:t.newList.title},on:{input:function(s){s.target.composing||t.$set(t.newList,"title",s.target.value)}}}),t._m(0)])])])])])]),e("div",{staticClass:"row"},t._l(t.lists,(function(t){return e("ListComponent",{key:t.id,attrs:{listProp:t}})})),1)])])])},F=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"ml-5 my-2 btn btn-warning",attrs:{type:"submit"}},[e("i",{staticClass:"text-success fas fa-plus"})])}],A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ListComponent col-4 text-left"},[e("div",{staticClass:"shadow p-3 mx-1 list-container rounded border border-danger bg-secondary"},[e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-7"},[e("p",[t._v(t._s(t.listProp.title))])]),e("div",{staticClass:"col-5"},[e("span",[e("i",{staticClass:"pointer text-warning fas fa-plus mx-2",on:{click:function(s){t.taskForm=!t.taskForm}}}),e("i",{staticClass:"pointer ml-2 fas fa-trash-alt text-warning",on:{click:t.deleteList}})])]),t.taskForm?e("div",{staticClass:"col-12"},[e("form",{staticClass:"form col-12 d-flex flex-column",on:{submit:function(s){return s.preventDefault(),t.createTask(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"form-control shadow",attrs:{type:"text",name:"title",id:"title",placeholder:"new task.."},domProps:{value:t.newTask.title},on:{input:function(s){s.target.composing||t.$set(t.newTask,"title",s.target.value)}}})]),e("div",{staticClass:"form-group align-self-center"},[t._m(0),e("button",{staticClass:"border border-success text-success shadow ml-1 btn btn-warning",attrs:{type:"button"},on:{click:function(s){t.taskForm=!1}}},[e("i",{staticClass:"fas fa-times"}),t._v(" Cancel ")])])])]):t._e()]),e("hr"),t._l(t.tasks,(function(t){return e("TaskComponent",{key:t.id,attrs:{tasksProp:t}})}))],2)])},S=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"border border-success text-success shadow mr-1 ml-2 btn btn-warning",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-plus"}),t._v(" Add Task ")])}],N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row",attrs:{id:"this is for the tasks"}},[e("div",{staticClass:"col-10 card shadow mx-auto my-2 pt-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("p",[t._v(t._s(t.tasksProp.title))])]),e("div",{staticClass:"col-4"},[e("span",[e("i",{staticClass:"pointer text-warning fas fa-comment-dots mx-2",on:{click:function(s){t.commentForm=!t.commentForm}}}),e("i",{staticClass:"pointer mx-2 fas fa-chevron-circle-right text-warning"}),e("i",{staticClass:"pointer text-warning fas fa-trash-alt",on:{click:t.deleteTask}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("small",[t._v(t._s(t.tasksProp.creatorEmail))]),e("hr")])]),t.commentForm?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("form",{staticClass:"form col-12 d-flex flex-column",on:{submit:function(s){return s.preventDefault(),t.createComment(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.body,expression:"newComment.body"}],staticClass:"form-control ",attrs:{type:"text",name:"title",id:"title",placeholder:"new comment.."},domProps:{value:t.newComment.body},on:{input:function(s){s.target.composing||t.$set(t.newComment,"body",s.target.value)}}})]),e("div",{staticClass:"form-group align-self-center"},[t._m(0),e("button",{staticClass:"border border-warning text-warning shadow m-auto btn btn-success",attrs:{type:"button"},on:{click:function(s){t.commentForm=!1}}},[e("i",{staticClass:"fas fa-times"}),t._v(" Cancel ")])])])])]):t._e(),e("div",{staticClass:"row"},t._l(t.tasksProp.comments,(function(s){return e("div",{key:s._id},[e("b",[t._v(t._s(s.body)),e("i",{staticClass:"pointer text-warning fas fa-trash-alt float-right",on:{click:function(e){return t.deleteComment(s._id)}}})])])})),0)])])},M=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"border border-warning text-warning shadow m-auto btn btn-success",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-plus"}),t._v(" Comment ")])}],U={name:"TaskComponent",props:["tasksProp"],data(){return{commentForm:!1,newComment:{taskId:this.tasksProp.id}}},computed:{},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.tasksProp)},createComment(){this.$store.dispatch("createComment",this.newComment),this.newComment={task:this.tasksProp.id}},deleteComment(t){let s={taskId:this.tasksProp.id,commentId:t};console.log(s),this.$store.dispatch("deleteComment",s)}},components:{}},D=U,R=(e("ee14"),Object(m["a"])(D,N,M,!1,null,"56db1202",null)),J=R.exports,z={name:"ListComponent",props:["listProp"],mounted(){this.$store.dispatch("getTasksByListId",this.listProp.id)},data(){return{taskForm:!1,newTask:{listId:this.listProp.id}}},computed:{tasks(){return this.$store.state.tasks[this.listProp.id]}},methods:{deleteList(){this.$store.dispatch("deleteList",this.listProp)},createTask(){this.$store.dispatch("createTask",this.newTask),this.newTask={listId:this.listProp.id}}},components:{TaskComponent:J}},V=z,H=(e("8896"),Object(m["a"])(V,A,S,!1,null,"a11779f0",null)),W=H.exports,Y={name:"board",data(){return{newList:{boardId:this.$route.params.boardId}}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{createList(){console.log(this.newList),this.$store.dispatch("createList",this.newList),this.newList={boardId:this.$route.params.boardId}},deleteBoard(){this.$store.dispatch("deleteBoard",this.$route.params.boardId)}},mounted(){this.$store.dispatch("getBoardById",this.$route.params.boardId),this.$store.dispatch("getListsByBoardId",this.$route.params.boardId)},props:["boardId"],components:{ListComponent:W}},G=Y,Q=(e("6127"),Object(m["a"])(G,j,F,!1,null,"1f888b6a",null)),X=Q.exports;a["a"].use(C["a"]);var Z=new C["a"]({routes:[{path:"/",name:"home",component:$},{path:"/boards",name:"boards",component:O,beforeEnter:b["b"]},{path:"/boards/:boardId",name:"board",component:X,beforeEnter:b["b"]},{path:"*",redirect:"/"}]}),q=e("2f62");a["a"].use(q["a"]);let K=window.location.host.includes("localhost")?"//localhost:3000/":"/",tt=l.a.create({baseURL:K+"api/",timeout:3e3,withCredentials:!0});var st=new q["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:[]},mutations:{setUser(t,s){t.user=s},setLists(t,s){t.lists=s},setBoards(t,s){t.boards=s},addBoard(t,s){t.boards.push(s)},setActiveBoard(t,s){t.activeBoard=s},deleteBoard(t,s){t.boards=t.boards.filter(t=>t.id!=s)},addList(t,s){console.log(t.lists),t.lists.push(s)},deleteList(t,s){t.lists=t.lists.filter(t=>t.id!=s)},setTasks(t,s){a["a"].set(t.tasks,s.listId,s.tasks)}},actions:{setBearer({},t){tt.defaults.headers.authorization=t},resetBearer(){tt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let s=await tt.get("/profile");t("setUser",s.data)}catch(s){console.error(s)}},getBoards({commit:t,dispatch:s}){tt.get("boards").then(s=>{t("setBoards",s.data)})},createBoard({commit:t,dispatch:s},e){tt.post("boards",e).then(t=>{s("getBoards")})},async getBoardById({commit:t,dispatch:s},e){try{let s=await tt.get("boards/"+e);t("setActiveBoard",s.data)}catch(a){console.error(a)}},async deleteBoard({commit:t,dispatch:s},e){try{let s=await tt.delete("boards/"+e);t("deleteBoard",s.data),Z.push({name:"boards"})}catch(a){console.log(a)}},async getListsByBoardId({commit:t,dispatch:s},e){try{let s=await tt.get("boards/"+e+"/lists");t("setLists",s.data)}catch(a){console.log(a)}},async createList({commit:t,dispatch:s},e){try{await tt.post("lists/",e);s("getListsByBoardId",e.boardId)}catch(a){console.error(a)}},async deleteList({commit:t,dispatch:s},e){try{let a=await tt.delete("lists/"+e.id);t("deleteList",a.data),s("getListsByBoardId",e.boardId)}catch(a){console.log(a)}},async getTasksByListId({commit:t,dispatch:s},e){try{let s=await tt.get("lists/"+e+"/tasks");console.log(s.data),t("setTasks",{listId:e,tasks:s.data,comments:s.data.comments})}catch(a){console.error(a)}},async createTask({commit:t,dispatch:s},e){try{await tt.post("tasks/",e);s("getTasksByListId",e.listId)}catch(a){console.error(a)}},async deleteTask({commit:t,dispatch:s},e){try{let a=await tt.delete("tasks/"+e.id);t("setTasks",a.data),s("getTasksByListId",e.listId)}catch(a){console.log(a)}},async createComment({commit:t,dispatch:s},e){try{let t=await tt.post("tasks/"+e.taskId+"/comments",e);s("getTasksByListId",t.data.listId)}catch(a){console.log(a)}},async deleteComment({commit:t,dispatch:s},e){try{let t=await tt.delete("tasks/"+e.taskId+"/comments/"+e.commentId);s("getTasksByListId",t.data.listId)}catch(a){console.log(a)}}}});const et="mack-demo.auth0.com",at="https://BoredsApi",ot="U5MPJ3vAJLnVvR3PBSYAF2HnGzrQbXRZ";a["a"].use(b["a"],{domain:et,clientId:ot,audience:at,onRedirectCallback:t=>{Z.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:Z,store:st,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";var a=e("9c0c"),o=e.n(a);o.a},"5cc0":function(t,s,e){},6127:function(t,s,e){"use strict";var a=e("d2be"),o=e.n(a);o.a},"70a6":function(t,s,e){},8896:function(t,s,e){"use strict";var a=e("c64a"),o=e.n(a);o.a},"94a7":function(t,s,e){"use strict";var a=e("ac01"),o=e.n(a);o.a},9979:function(t,s,e){"use strict";var a=e("5cc0"),o=e.n(a);o.a},"9c0c":function(t,s,e){},ac01:function(t,s,e){},c64a:function(t,s,e){},cf05:function(t,s,e){t.exports=e.p+"img/logo.82b9c7a5.png"},d2be:function(t,s,e){},ee14:function(t,s,e){"use strict";var a=e("70a6"),o=e.n(a);o.a}});