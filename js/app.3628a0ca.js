(function(){"use strict";var e={3159:function(e,t,s){var o=s(9242),a=s(4275),i=s(1178),l=s(518),r=s(5155),n=(s(9773),s(8957)),u=s(3504),d=s(1850),c=s(8600),p={apiKey:"AIzaSyAgCmN03RlNVSlgHHPi54dZ7oUtlyjlAg8",authDomain:"bookselfapp-6ef1c.firebaseapp.com",projectId:"bookselfapp-6ef1c",storageBucket:"bookselfapp-6ef1c.appspot.com",messagingSenderId:"817918338256",appId:"1:817918338256:web:ba832ae1cae3a8876aaad5",measurementId:"G-WHYX5ZJV71",databaseURL:"https://bookselfapp-6ef1c-default-rtdb.europe-west1.firebasedatabase.app/"},m=s(3396);function h(e,t,s,o,a,i){const l=(0,m.up)("app-header"),r=(0,m.up)("router-view"),n=(0,m.up)("v-main"),u=(0,m.up)("app-footer"),d=(0,m.up)("v-app");return(0,m.wg)(),(0,m.j4)(d,null,{default:(0,m.w5)((()=>[(0,m.Wm)(l),(0,m.Wm)(n,{class:"mx-4"},{default:(0,m.w5)((()=>[(0,m.Wm)(r)])),_:1}),(0,m.Wm)(u)])),_:1})}var w=s(7139);function f(e,t,s,a,i,l){const r=(0,m.up)("v-app-bar-nav-icon"),n=(0,m.up)("v-toolbar-title"),u=(0,m.up)("router-link"),d=(0,m.up)("v-spacer"),c=(0,m.up)("v-btn"),p=(0,m.up)("v-toolbar-items"),h=(0,m.up)("v-app-bar"),f=(0,m.up)("v-list-item"),k=(0,m.up)("v-list"),g=(0,m.up)("v-navigation-drawer"),v=(0,m.up)("v-card-title"),b=(0,m.up)("v-card-actions"),y=(0,m.up)("v-card"),_=(0,m.up)("v-dialog");return(0,m.wg)(),(0,m.iD)("div",null,[(0,m.Wm)(h,{prominent:"",class:"primary"},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{class:"hidden-md-and-up",variant:"text",onClick:t[0]||(t[0]=(0,o.iM)((e=>i.drawer=!i.drawer),["stop"]))}),(0,m.Wm)(u,{to:"/Bookshelf-app/",class:"mx-4",style:{color:"inherit"}},{default:(0,m.w5)((()=>[(0,m.Wm)(n,null,{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(i.title),1)])),_:1})])),_:1}),(0,m.Wm)(d),(0,m.Wm)(p,{class:"hidden-sm-and-down"},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(l.buttons,(({icon:e,route:t,title:s},o)=>((0,m.wg)(),(0,m.j4)(c,{key:`menu-${o}`,to:t,"prepend-icon":e},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(s),1)])),_:2},1032,["to","prepend-icon"])))),128)),l.isUserAuthenticated?((0,m.wg)(),(0,m.j4)(c,{key:0,onClick:t[1]||(t[1]=e=>i.dialog=!0),"prepend-icon":"mdi-logout-variant"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Log Out ")])),_:1})):(0,m.kq)("",!0)])),_:1})])),_:1}),(0,m.Wm)(g,{class:"hidden-md-and-up",temporary:"",modelValue:i.drawer,"onUpdate:modelValue":t[3]||(t[3]=e=>i.drawer=e)},{default:(0,m.w5)((()=>[(0,m.Wm)(k,null,{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(l.buttons,(({icon:e,route:t,title:s},o)=>((0,m.wg)(),(0,m.j4)(f,{key:`drawernav-${o}`,"prepend-icon":e,to:t},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(s),1)])),_:2},1032,["prepend-icon","to"])))),128)),l.isUserAuthenticated?((0,m.wg)(),(0,m.j4)(f,{key:0,onClick:t[2]||(t[2]=e=>i.dialog=!0),title:"Log Out",value:"logout","prepend-icon":"mdi-logout-variant"})):(0,m.kq)("",!0)])),_:1})])),_:1},8,["modelValue"]),(0,m.Wm)(_,{modelValue:i.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>i.dialog=e),"max-width":"400"},{default:(0,m.w5)((()=>[(0,m.Wm)(y,null,{default:(0,m.w5)((()=>[(0,m.Wm)(v,{class:"text-h5"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Would you like to logout? ")])),_:1}),(0,m.Wm)(b,null,{default:(0,m.w5)((()=>[(0,m.Wm)(d),(0,m.Wm)(c,{color:"green darken-1",text:"",onClick:t[4]||(t[4]=e=>i.dialog=!1)},{default:(0,m.w5)((()=>[(0,m.Uk)(" No ")])),_:1}),(0,m.Wm)(c,{color:"red darken-1",text:"",onClick:l.logout},{default:(0,m.w5)((()=>[(0,m.Uk)(" Yes ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}s(7658);var k={data(){return{title:"My Bookshelf",drawer:!1,dialog:!1,isLogout:!1}},computed:{isUserAuthenticated(){return this.$store.getters.getIsUserAuthenticated},buttons(){return this.isUserAuthenticated?[{icon:"mdi-bookshelf",title:"Books",route:"/Bookshelf-app/books"},{icon:"mdi-list-box",title:"Wishlist",route:"/Bookshelf-app/wishlist"},{icon:"mdi-book-variant",title:"Read Books",route:"/Bookshelf-app/read"},{icon:"mdi-account-box",title:"Profile",route:"/Bookshelf-app/profile"}]:[{icon:"mdi-bookshelf",title:"Books",route:"/Bookshelf-app/books"},{icon:"mdi-login-variant",title:"Log In",route:"/Bookshelf-app/login"},{icon:"mdi-login",title:"Sign In",route:"/Bookshelf-app/signin"}]}},methods:{logout(){this.dialog=!1,this.$store.dispatch("LOGOUT"),this.$router.push({path:"/Bookshelf-app/"})}}},g=s(89);const v=(0,g.Z)(k,[["render",f]]);var b=v;const y=e=>((0,m.dD)("data-v-51eb9351"),e=e(),(0,m.Cn)(),e),_=y((()=>(0,m._)("div",{class:"d-block text-center py-4 w-100"},"Bookshelf © 2022-2023",-1)));function U(e,t,s,o,a,i){const l=(0,m.up)("v-footer");return(0,m.wg)(),(0,m.j4)(l,{class:"d-block w-100",fixed:!0},{default:(0,m.w5)((()=>[_])),_:1})}var W={};const R=(0,g.Z)(W,[["render",U],["__scopeId","data-v-51eb9351"]]);var E=R,x={components:{AppHeader:b,AppFooter:E}};const S=(0,g.Z)(x,[["render",h]]);var D=S,L=s(2483),I=s(65),O=s(1992);function C(e,t){const s=(0,i.N8)();(0,i.t8)((0,i.iH)(s,`users/${e}`),{profile:{email:t},"wishlist-books":[],"readlist-books":[]})}function B(e,t){const s=(0,i.N8)(),o=(0,i.iH)(s,`users/${e}/profile`);try{(0,i.jM)(o,(o=>{const a=o.val();if(a){const o={};o[`/users/${e}/profile`]=t,(0,i.Vx)((0,i.iH)(s),o)}}))}catch(a){console.log(a)}}async function $(e){const t=(0,i.N8)(),s=(0,i.iH)(t,`users/${e}/profile`);try{const e=await(0,i.U2)(s);return e.exists()?e.val():null}catch(o){console.error(o)}}function N(e,t){const s=(0,O.cF)(),o=(0,O.iH)(s,`avatars-${e}`);(0,O.KV)(o,t).then((e=>{console.log("Uploaded a file!",e)}))}var V={state:{user:{isAuthenticated:!1,uid:null}},getters:{getIsUserAuthenticated:e=>e.user.isAuthenticated},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}}},actions:{SIGNIN({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();(0,r.Xb)(s,t.email,t.password).then((()=>{e("SET_PROCESSING",!1),C(s.currentUser.uid,t.email)})).catch((({message:t})=>{e("SET_PROCESSING",!1),e("SET_ERROR",t)}))},LOGIN({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();(0,r.e5)(s,t.email,t.password).then((()=>{e("SET_PROCESSING",!1)})).catch((({message:t})=>{e("SET_PROCESSING",!1),e("SET_ERROR",t)}))},LOGOUT(){const e=(0,r.v0)();(0,r.w7)(e)},CHANGE_STAGE({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")},GET_USER_PROFILE(){const e=(0,r.v0)(),t=e.currentUser;return $(t.uid)},UPDATE_USER_PROFILE({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();(0,r.ck)(s.currentUser,{displayName:t.displayName,photoURL:t.photoURL}).then((()=>{console.log("displayName & photoURL updated!",s.currentUser)})).catch((e=>{console.log(e)})),(0,r.s)(s.currentUser,t.email).then((()=>{console.log("Email updated!",s.currentUser)})).catch((e=>{console.log(e)})),B(s.currentUser.uid,t),N(s.currentUser.uid,t.photoURL)}}},j={state:{processing:!1,error:null},getters:{getProcessing:e=>e.processing,getError:e=>e.error},mutations:{SET_PROCESSING(e,t){e.processing=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}};function A(e,t){const s=(0,i.N8)(),o=(0,i.iH)(s,`users/${e}`);(0,i.jM)(o,(o=>{const a=o.val();if(!Object.keys(a).includes("wishlist-books")){const o={};return o[`/users/${e}/wishlist-books/`]={[t.bookID]:t},(0,i.Vx)((0,i.iH)(s),o)}if(!Object.keys(a["wishlist-books"]).includes(t.bookID)){const o={};return o[`/users/${e}/wishlist-books/${t.bookID}`]=t,(0,i.Vx)((0,i.iH)(s),o)}return a}))}async function T(e){const t=(0,i.N8)(),s=(0,i.iH)(t,`users/${e}/wishlist-books`);try{const e=await(0,i.U2)(s);return e.exists()?e.val():null}catch(o){console.error(o)}}async function z(e,t){const s=(0,i.N8)(),o=(0,i.iH)(s,`users/${e}/wishlist-books/${t}`);try{(0,i.Od)(o)}catch(a){console.error(a)}}var H={state:{user:{isAuthenticated:!1,wishlist:[]}},getters:{getStateWishlist:e=>e.user.wishlist},mutations:{GET_WISHLIST(e){const t=(0,r.v0)();e.user.wishlist=T(t.currentUser.uid)}},actions:{ADD_BOOK_WISHLIST({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();A(s.currentUser.uid,t)},DELETE_BOOK({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();z(s.currentUser.uid,t)}}};function P(e,t){const s=(0,i.N8)(),o=(0,i.iH)(s,`users/${e}`);(0,i.jM)(o,(o=>{const a=o.val();if(!Object.keys(a).includes("readlist-books")){const o={};return o[`/users/${e}/readlist-books/`]={[t.bookID]:t},(0,i.Vx)((0,i.iH)(s),o)}if(!Object.keys(a["readlist-books"]).includes(t.bookID)){const o={};return o[`/users/${e}/readlist-books/${t.bookID}`]=t,(0,i.Vx)((0,i.iH)(s),o)}return a}))}async function q(e){const t=(0,i.N8)(),s=(0,i.iH)(t,`users/${e}/readlist-books`);try{const e=await(0,i.U2)(s);return e.exists()?e.val():null}catch(o){console.error(o)}}async function G(e,t){const s=(0,i.N8)(),o=(0,i.iH)(s,`users/${e}/readlist-books/${t}`);try{(0,i.Od)(o)}catch(a){console.error(a)}}var Z={state:{user:{isAuthenticated:!1,readlist:[]}},getters:{getStateReadlist:e=>e.user.readlist},mutations:{GET_READLIST(e){const t=(0,r.v0)();e.user.readlist=q(t.currentUser.uid)}},actions:{ADD_BOOK_READLIST({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();P(s.currentUser.uid,t)},DELETE_READ_BOOK({commit:e},t){e("SET_PROCESSING",!0),e("CLEAR_ERROR");const s=(0,r.v0)();G(s.currentUser.uid,t)}}},M=(0,I.MT)({modules:{userModule:V,generalModule:j,wishlistModule:H,readlistModule:Z}});const K=e=>((0,m.dD)("data-v-f314d860"),e=e(),(0,m.Cn)(),e),F={class:"d-flex flex-column wrap"},Y=K((()=>(0,m._)("h1",{class:""},"Top 5 books for all the Best Sellers lists for specified date",-1))),Q={class:"block-selects d-md-flex wrap align-center"},J={class:"selects d-md-flex wrap align-center"},X=K((()=>(0,m._)("h3",{class:"text-primary"},"Search Results",-1))),ee={class:"card-book-content"},te={class:"image-book-block"},se=["alt","src"],oe={class:"book-descr"},ae={class:"text-surface-variant mt-2"};function ie(e,t,s,a,i,l){const r=(0,m.up)("v-text-field"),n=(0,m.up)("v-btn"),u=(0,m.up)("v-form"),d=(0,m.up)("v-select"),c=(0,m.up)("v-list-item-title"),p=(0,m.up)("v-list-item-subtitle"),h=(0,m.up)("v-divider"),f=(0,m.up)("v-list-item"),k=(0,m.up)("v-list"),g=(0,m.up)("loader-component"),v=(0,m.up)("v-card-title"),b=(0,m.up)("v-avatar"),y=(0,m.up)("v-card"),_=(0,m.up)("v-container");return(0,m.wg)(),(0,m.j4)(_,null,{default:(0,m.w5)((()=>[(0,m._)("div",F,[Y,(0,m._)("div",Q,[(0,m.Wm)(u,{onSubmit:(0,o.iM)(l.addSearchQueryToPath,["prevent"]),method:"GET",class:"search-block d-flex me-auto"},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{onKeyup:(0,o.D2)(l.addSearchQueryToPath,["enter"]),"onClick:clear":l.closeSearchResults,onBlur:l.blurCloseResults,modelValue:e.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),label:"Search",variant:"solo",density:"compact",clearable:""},null,8,["onKeyup","onClick:clear","onBlur","modelValue"]),(0,m.Wm)(n,{type:"submit",class:"mx-2","prepend-icon":"mdi-magnify",density:"default"},{default:(0,m.w5)((()=>[(0,m.Uk)("Search")])),_:1})])),_:1},8,["onSubmit"]),(0,m._)("div",J,[(0,m.Wm)(d,{items:l.listsNamesSelect,modelValue:e.selectedLists,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedLists=t),label:"Select lists",multiple:"",clearable:"",variant:"solo",density:"compact",class:"mr-md-3"},null,8,["items","modelValue"])]),(0,m.Wm)(r,{modelValue:e.date,"onUpdate:modelValue":t[2]||(t[2]=t=>e.date=t),onChange:l.selectedValue,variant:"solo",density:"compact",type:"date",name:"data-list",id:"data-list",label:"Pick the date"},null,8,["modelValue","onChange"])])]),(0,m.Wm)(k,{class:(0,w.C_)(e.isHidden),lines:!1,"item-props":""},{default:(0,m.w5)((()=>[X,((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.searchResults,(e=>((0,m.wg)(),(0,m.j4)(f,{"active-color":"primary",key:e.id,to:{name:"book",params:{id:e.id}}},{default:(0,m.w5)((()=>[(0,m.Wm)(c,null,{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.volumeInfo.title),1)])),_:2},1024),(0,m.Wm)(p,{class:"mb-2"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.volumeInfo.authors?.join(", ")),1)])),_:2},1024),(0,m.Wm)(h)])),_:2},1032,["to"])))),128))])),_:1},8,["class"]),0===l.filteredLists.length?((0,m.wg)(),(0,m.j4)(g,{key:0,class:"d-flex my-6 mx-auto",size:"65",width:"6"})):(0,m.kq)("",!0),((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(l.filteredLists,(e=>((0,m.wg)(),(0,m.j4)(y,{key:e.list_id,class:"book-section my-8 elevation-10"},{default:(0,m.w5)((()=>[(0,m.Wm)(v,{class:"text-primary"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.display_name),1)])),_:2},1024),(0,m.Wm)(h,{color:"primary",role:"presentation"}),(0,m.Wm)(k,{class:"book-cards-section"},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.books,(e=>((0,m.wg)(),(0,m.j4)(f,{key:e.primary_isbn13,to:{name:"book",params:{id:e.primary_isbn13}}},{default:(0,m.w5)((()=>[(0,m.Wm)(b,{class:"rank",size:"32",color:"primary",content:e.rank},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.rank),1)])),_:2},1032,["content"]),(0,m._)("div",ee,[(0,m._)("div",te,[(0,m._)("img",{class:"w-100 rounded-lg",alt:e.title,src:e.book_image},null,8,se)]),(0,m._)("div",null,[(0,m.Wm)(c,{class:"text-primary"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.title),1)])),_:2},1024),(0,m.Wm)(c,null,{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.author),1)])),_:2},1024),(0,m._)("p",oe,(0,w.zw)(e.description),1),(0,m._)("p",ae,"Publisher: "+(0,w.zw)(e?.publisher),1)])])])),_:2},1032,["to"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})}var le=s(2482),re=s(878),ne=s(2633);const ue="Si3mxXDRuV3jYysE1gCnawFbqpi7LGnk",de="AIzaSyAgCmN03RlNVSlgHHPi54dZ7oUtlyjlAg8";var ce=new WeakMap,pe=new WeakMap,me=new WeakMap;class he{constructor(){(0,re.Z)(this,ce,{writable:!0,value:"https://api.nytimes.com/svc/books/v3/lists/overview.json"}),(0,re.Z)(this,pe,{writable:!0,value:"https://api.nytimes.com/svc/books/v3/lists/names.json"}),(0,re.Z)(this,me,{writable:!0,value:"https://www.googleapis.com/books/v1/volumes"}),(0,le.Z)(this,"getAll",(async(e="2023-03-01")=>await fetch(`${(0,ne.Z)(this,ce)}?published_date=${e}&api-key=${ue}`).then((e=>e.json())).then((e=>e.results.lists)))),(0,le.Z)(this,"getOneLastList",(async()=>await fetch(`${(0,ne.Z)(this,ce)}?&api-key=${ue}`).then((e=>e.json())).then((e=>e.results.lists[0].books)))),(0,le.Z)(this,"getListsNames",(async()=>await fetch(`${(0,ne.Z)(this,pe)}?api-key=${ue}`).then((e=>e.json())).then((e=>e.results)))),(0,le.Z)(this,"getDataByISBNFromGoogle",(async e=>await fetch(`${(0,ne.Z)(this,me)}?q=isbn:${e}&key=${de}`).then((e=>e.json())).then((e=>e.items[0].volumeInfo)))),(0,le.Z)(this,"getDataByIDFromGoogle",(async e=>await fetch(`${(0,ne.Z)(this,me)}/${e}&key=${de}`).then((e=>e.json())).then((e=>e.volumeInfo)))),(0,le.Z)(this,"searchByQuery",(async e=>await fetch(`${(0,ne.Z)(this,me)}?q=${e}`).then((e=>e.json())).then((e=>e.items)).catch((e=>console.error(e)))))}}function we(e,t,s,o,a,i){const l=(0,m.up)("v-progress-circular");return(0,m.wg)(),(0,m.j4)(l,{color:"primary",indeterminate:"",size:e.$props.size,width:e.$props.width},null,8,["size","width"])}var fe={props:{size:{type:String,required:!0},width:{type:String,required:!0}}};const ke=(0,g.Z)(fe,[["render",we]]);var ge=ke;const ve=new he;var be={components:{LoaderComponent:ge},created(){this.getList(),this.$router.afterEach((e=>{this.searchQuery=e.query.q})),this.$route.query.q&&(this.searchQuery=this.$route.query.q)},data:()=>({date:null,lists:[],listsNames:[],selectedLists:null,searchQuery:null,searchResults:[],isHidden:"d-none"}),methods:{async getList(){this.lists=await ve.getAll(),this.listsNames=await ve.getListsNames()},async selectedValue(){this.date&&(this.lists=await ve.getAll(this.date))},async search(){this.searchQuery&&(this.searchResults=await ve.searchByQuery(this.searchQuery),this.isHidden="d-grid search-result-block")},blurCloseResults(){0===this.searchQuery.length&&this.closeSearchResults()},closeSearchResults(){this.isHidden="d-none",this.$router.push({path:"/Bookshelf-app/books",query:{q:""}})},addSearchQueryToPath(){this.$router.push({path:"/Bookshelf-app/books",query:{q:this.searchQuery}})}},computed:{reverseYears(){return[...this.years].reverse()},listsNamesSelect(){const e=[];return this.listsNames.forEach((t=>e.push(t.display_name))),e},filteredLists(){return this.selectedLists?.length>0?[...this.lists].filter((e=>this.selectedLists.includes(e.display_name))):this.lists}},watch:{searchQuery(){this.search()}}};const ye=(0,g.Z)(be,[["render",ie],["__scopeId","data-v-f314d860"]]);var _e=ye;const Ue={class:"card-content"},We={class:"cover-book-block"},Re=["alt","src"],Ee={class:"book-info"},xe={class:"text-primary text-h4 book-title"},Se=["innerHTML"],De={key:1,class:"text-surface-variant mt-2"};function Le(e,t,s,o,a,i){const l=(0,m.up)("loader-component"),r=(0,m.up)("v-rating"),n=(0,m.up)("v-chip"),u=(0,m.up)("v-chip-group"),d=(0,m.up)("v-btn"),c=(0,m.up)("v-card-actions"),p=(0,m.up)("v-card"),h=(0,m.up)("v-container");return(0,m.wg)(),(0,m.j4)(h,{class:"book-detail"},{default:(0,m.w5)((()=>[a.book?(0,m.kq)("",!0):((0,m.wg)(),(0,m.j4)(l,{key:0,class:"d-flex my-6 mx-auto",size:"65",width:"6"})),a.book?((0,m.wg)(),(0,m.j4)(p,{key:1,class:"book-page mx-auto pa-6"},{default:(0,m.w5)((()=>[(0,m._)("div",Ue,[(0,m._)("div",We,[(0,m._)("img",{class:"cover-img rounded-lg",alt:a.book.title,src:a.book.imageLinks.thumbnail},null,8,Re)]),(0,m._)("div",Ee,[(0,m._)("h1",xe,(0,w.zw)(a.book.title),1),((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(a.book.authors,((e,t)=>((0,m.wg)(),(0,m.iD)("h2",{class:"text-h5",key:t},(0,w.zw)(e),1)))),128)),a.book.averageRating?((0,m.wg)(),(0,m.j4)(r,{key:0,"model-value":a.book.averageRating,color:"white","active-color":"yellow-accent-4","half-increments":"",readonly:""},null,8,["model-value"])):(0,m.kq)("",!0),(0,m.Wm)(u,{class:"d-flex flex-wrap"},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(a.book.categories,((e,t)=>((0,m.wg)(),(0,m.j4)(n,{key:t,variant:"outlined",class:"text-primary"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e),1)])),_:2},1024)))),128))])),_:1}),(0,m._)("div",{innerHTML:a.book.description,class:"book-descr"},null,8,Se),a.book.publisher?((0,m.wg)(),(0,m.iD)("p",De,"Publisher: "+(0,w.zw)(a.book.publisher),1)):(0,m.kq)("",!0)])]),(0,m.Wm)(c,null,{default:(0,m.w5)((()=>[(0,m.Wm)(d,{modelValue:a.typeOfList,"onUpdate:modelValue":t[0]||(t[0]=e=>a.typeOfList=e),onClick:i.addBookToWishlist,disabled:!i.isUserAuthenticated,class:"mt-2","append-icon":"mdi-list-box-outline",variant:"outlined",color:"primary"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Add to Wishlist ")])),_:1},8,["modelValue","onClick","disabled"]),(0,m.Wm)(d,{modelValue:a.typeOfList,"onUpdate:modelValue":t[1]||(t[1]=e=>a.typeOfList=e),onClick:i.addBookToReadlist,disabled:!i.isUserAuthenticated,class:"mt-2","append-icon":"mdi-book",variant:"outlined",color:"primary"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Mark as Read ")])),_:1},8,["modelValue","onClick","disabled"])])),_:1})])),_:1})):(0,m.kq)("",!0)])),_:1})}const Ie=new he;var Oe={components:{LoaderComponent:ge},props:{id:{type:String,required:!0}},created(){this.getBook()},data(){return{book:null,typeOfList:null}},methods:{async getBook(){this.book=await Ie.getDataByIDFromGoogle(this.$props.id),void 0===this.book&&this.getBookISBN(this.$props.id)},async getBookISBN(){this.book=await Ie.getDataByISBNFromGoogle(this.$props.id)},addBookToList(){const e={bookID:this.$props.id,title:this.book.title,authors:this.book.authors,img:this.book.imageLinks.thumbnail};"wishlist"===this.typeOfList?this.$store.dispatch("ADD_BOOK_WISHLIST",e):"readlist"===this.typeOfList&&this.$store.dispatch("ADD_BOOK_READLIST",e)},addBookToWishlist(){this.typeOfList="wishlist",this.addBookToList()},addBookToReadlist(){this.typeOfList="readlist",this.addBookToList()}},computed:{error(){return this.$store.getters.getError},processing(){return this.$store.getters.getProcessing},isUserAuthenticated(){return this.$store.getters.getIsUserAuthenticated}}};const Ce=(0,g.Z)(Oe,[["render",Le],["__scopeId","data-v-b75f397a"]]);var Be=Ce;const $e=e=>((0,m.dD)("data-v-0e9e2709"),e=e(),(0,m.Cn)(),e),Ne=$e((()=>(0,m._)("h1",null,"Wishlist Books",-1))),Ve={class:"wishlist-content"},je={style:{"white-space":"pre-wrap"},class:"text-primary text-h5"},Ae=$e((()=>(0,m._)("p",{class:"text-body-1 pa-3"}," Would you like to delete this book from Wishlist? ",-1)));function Te(e,t,s,a,i,l){const r=(0,m.up)("loader-component"),n=(0,m.up)("v-img"),u=(0,m.up)("v-btn"),d=(0,m.up)("v-divider"),c=(0,m.up)("v-list-item"),p=(0,m.up)("v-list"),h=(0,m.up)("v-card"),f=(0,m.up)("v-spacer"),k=(0,m.up)("v-card-actions"),g=(0,m.up)("v-dialog");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(h,{class:"wishlist-main"},{default:(0,m.w5)((()=>[Ne,i.list?(0,m.kq)("",!0):((0,m.wg)(),(0,m.j4)(r,{key:0,class:"d-flex my-6 mx-auto",size:"65",width:"6"})),i.list?((0,m.wg)(),(0,m.j4)(p,{key:1},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(i.list,(e=>((0,m.wg)(),(0,m.j4)(c,{key:e.bookID,class:"mt-2 wishlist",to:{name:"book",params:{id:e.bookID}}},{default:(0,m.w5)((()=>[(0,m._)("div",Ve,[(0,m.Wm)(n,{width:100,"aspect-ratio":"9/16",cover:"",src:e.img,class:"wishbook-cover rounded"},null,8,["src"]),(0,m._)("h2",je,(0,w.zw)(e.title),1),((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.authors,((e,t)=>((0,m.wg)(),(0,m.iD)("p",{key:t,class:"mb-2 text-h6"},(0,w.zw)(e),1)))),128))]),(0,m.Wm)(u,{onClick:(0,o.iM)((t=>{i.closeDialog=!0,i.currentBookID=e.bookID}),["stop","prevent"]),variant:"outlined",size:"small",icon:"mdi-close-thick",color:"error",position:"absolute",class:"btn-close"},null,8,["onClick"]),(0,m.Wm)(d)])),_:2},1032,["to"])))),128))])),_:1})):(0,m.kq)("",!0)])),_:1}),(0,m.Wm)(g,{modelValue:i.closeDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>i.closeDialog=e),"min-width":"350","max-width":"600"},{default:(0,m.w5)((()=>[(0,m.Wm)(h,null,{default:(0,m.w5)((()=>[Ae,(0,m.Wm)(k,null,{default:(0,m.w5)((()=>[(0,m.Wm)(f),(0,m.Wm)(u,{color:"green darken-1",text:"",onClick:t[0]||(t[0]=e=>i.closeDialog=!1)},{default:(0,m.w5)((()=>[(0,m.Uk)(" No ")])),_:1}),(0,m.Wm)(u,{color:"red darken-1",text:"",onClick:l.deleteBook},{default:(0,m.w5)((()=>[(0,m.Uk)(" Yes ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var ze={components:{LoaderComponent:ge},created(){this.getBooksWishlist()},data(){return{list:null,closeDialog:!1,currentBookID:""}},methods:{async getBooksWishlist(){await this.$store.commit("GET_WISHLIST");const e=await this.$store.getters.getStateWishlist;this.list=e},async deleteBook(){this.closeDialog=!0,await this.$store.dispatch("DELETE_BOOK",this.currentBookID),this.closeDialog=!1;const e=JSON.parse(JSON.stringify(this.list));delete e[this.currentBookID],this.list=e}}};const He=(0,g.Z)(ze,[["render",Te],["__scopeId","data-v-0e9e2709"]]);var Pe=He;const qe=e=>((0,m.dD)("data-v-669305d8"),e=e(),(0,m.Cn)(),e),Ge=qe((()=>(0,m._)("h1",null,"Read Books",-1))),Ze={class:"readlist-content"},Me={style:{"white-space":"pre-wrap"},class:"text-primary text-h5"},Ke=qe((()=>(0,m._)("p",{class:"text-body-1 pa-3"}," Would you like to delete this book from Wishlist? ",-1)));function Fe(e,t,s,a,i,l){const r=(0,m.up)("loader-component"),n=(0,m.up)("v-img"),u=(0,m.up)("v-btn"),d=(0,m.up)("v-divider"),c=(0,m.up)("v-list-item"),p=(0,m.up)("v-list"),h=(0,m.up)("v-card"),f=(0,m.up)("v-spacer"),k=(0,m.up)("v-card-actions"),g=(0,m.up)("v-dialog");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(h,{class:"readlist-main"},{default:(0,m.w5)((()=>[Ge,i.list?(0,m.kq)("",!0):((0,m.wg)(),(0,m.j4)(r,{key:0,class:"d-flex my-6 mx-auto",size:"65",width:"6"})),i.list?((0,m.wg)(),(0,m.j4)(p,{key:1},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(i.list,(e=>((0,m.wg)(),(0,m.j4)(c,{key:e.bookID,class:"mt-2 readlist",to:{name:"book",params:{id:e.bookID}}},{default:(0,m.w5)((()=>[(0,m._)("div",Ze,[(0,m.Wm)(n,{width:100,"aspect-ratio":"9/16",cover:"",src:e.img,class:"readbook-cover rounded"},null,8,["src"]),(0,m._)("h2",Me,(0,w.zw)(e.title),1),((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.authors,((e,t)=>((0,m.wg)(),(0,m.iD)("p",{key:t,class:"mb-2 text-h6"},(0,w.zw)(e),1)))),128))]),(0,m.Wm)(u,{onClick:(0,o.iM)((t=>{i.closeDialog=!0,i.currentBookID=e.bookID}),["stop","prevent"]),variant:"outlined",size:"small",icon:"mdi-close-thick",color:"error",position:"absolute",class:"btn-close"},null,8,["onClick"]),(0,m.Wm)(d)])),_:2},1032,["to"])))),128))])),_:1})):(0,m.kq)("",!0)])),_:1}),(0,m.Wm)(g,{modelValue:i.closeDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>i.closeDialog=e),"min-width":"350","max-width":"600"},{default:(0,m.w5)((()=>[(0,m.Wm)(h,null,{default:(0,m.w5)((()=>[Ke,(0,m.Wm)(k,null,{default:(0,m.w5)((()=>[(0,m.Wm)(f),(0,m.Wm)(u,{color:"green darken-1",text:"",onClick:t[0]||(t[0]=e=>i.closeDialog=!1)},{default:(0,m.w5)((()=>[(0,m.Uk)(" No ")])),_:1}),(0,m.Wm)(u,{color:"red darken-1",text:"",onClick:l.deleteBook},{default:(0,m.w5)((()=>[(0,m.Uk)(" Yes ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var Ye={components:{LoaderComponent:ge},created(){this.getBooksReadList()},data(){return{list:null,closeDialog:!1,currentBookID:""}},methods:{async getBooksReadList(){await this.$store.commit("GET_READLIST");const e=await this.$store.getters.getStateReadlist;this.list=e},async deleteBook(){this.closeDialog=!0,await this.$store.dispatch("DELETE_READ_BOOK",this.currentBookID),this.closeDialog=!1;const e=JSON.parse(JSON.stringify(this.list));delete e[this.currentBookID],this.list=e}}};const Qe=(0,g.Z)(Ye,[["render",Fe],["__scopeId","data-v-669305d8"]]);var Je=Qe;const Xe=(0,m._)("h1",null,"User Profile",-1),et={key:0,class:"d-flex flex-no-wrap justify-start pa-6"},tt=["src","alt"],st={class:"pl-4"},ot=["href"],at={class:"text--primary text-body-1 mt-3 mb-2"};function it(e,t,s,a,i,l){const r=(0,m.up)("v-avatar"),n=(0,m.up)("v-card-title"),u=(0,m.up)("v-card-subtitle"),d=(0,m.up)("v-card-text"),c=(0,m.up)("v-btn"),p=(0,m.up)("v-card-actions"),h=(0,m.up)("LoaderComponent"),f=(0,m.up)("v-card"),k=(0,m.up)("v-text-field"),g=(0,m.up)("v-file-input"),v=(0,m.up)("v-textarea"),b=(0,m.up)("v-container");return(0,m.wg)(),(0,m.j4)(b,null,{default:(0,m.w5)((()=>[Xe,(0,m.Wm)(f,{theme:"dark",class:"mx-auto","max-width":"70%",variant:"outlined"},{default:(0,m.w5)((()=>[i.isLoading?i.isLoading?((0,m.wg)(),(0,m.j4)(h,{key:1,class:"d-flex my-6 mx-auto",size:"65",width:"6"})):(0,m.kq)("",!0):((0,m.wg)(),(0,m.iD)("div",et,[(0,m.Wm)(r,{class:"ma-3",size:"225",rounded:"0"},{default:(0,m.w5)((()=>[(0,m._)("img",{src:i.photoURL,alt:i.displayName,width:"225"},null,8,tt)])),_:1}),(0,m._)("div",st,[(0,m.Wm)(n,{class:"text-h4 text-purple-darken-1 mb-2"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(i.displayName),1)])),_:1}),(0,m.Wm)(u,{class:"text-h5 mb-2"},{default:(0,m.w5)((()=>[(0,m.Uk)("About User")])),_:1}),(0,m.Wm)(d,null,{default:(0,m.w5)((()=>[(0,m._)("a",{href:"mailto:"+i.email,class:"text--primary text-body-1"},(0,w.zw)(i.email),9,ot),(0,m._)("p",at,(0,w.zw)(i.aboutUserDescr),1)])),_:1}),(0,m.Wm)(p,null,{default:(0,m.w5)((()=>[(0,m.Wm)(c,{onClick:t[0]||(t[0]=e=>i.isEditForm=!0),class:"ms-2",variant:"outlined",color:"primary"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Edit Profile ")])),_:1})])),_:1})])]))])),_:1}),i.isEditForm?((0,m.wg)(),(0,m.j4)(f,{key:0,variant:"outlined",class:"mx-auto mt-10 pa-5","max-width":"70%"},{default:(0,m.w5)((()=>[(0,m._)("form",{onSubmit:t[5]||(t[5]=(0,o.iM)(((...e)=>l.saveUserChanges&&l.saveUserChanges(...e)),["prevent"]))},[(0,m.Wm)(k,{modelValue:i.displayName,"onUpdate:modelValue":t[1]||(t[1]=e=>i.displayName=e),"prepend-icon":"mdi-account-edit",label:"Name",value:i.displayName},null,8,["modelValue","value"]),(0,m.Wm)(k,{modelValue:i.email,"onUpdate:modelValue":t[2]||(t[2]=e=>i.email=e),"prepend-icon":"mdi-email",label:"E-mail",value:i.email},null,8,["modelValue","value"]),(0,m.Wm)(g,{label:"Avatar image",variant:"filled","prepend-icon":"mdi-camera",filename:i.photoURL,onChange:l.onImagePicker,accept:"image/*"},null,8,["filename","onChange"]),(0,m.Wm)(v,{modelValue:i.aboutUserDescr,"onUpdate:modelValue":t[3]||(t[3]=e=>i.aboutUserDescr=e),"prepend-icon":"mdi-pen",label:"Tell about yourself",value:i.aboutUserDescr},null,8,["modelValue","value"]),(0,m.Wm)(p,{class:"d-flex justify-center"},{default:(0,m.w5)((()=>[(0,m.Wm)(c,{class:"me-4",color:"primary",variant:"outlined",type:"submit"},{default:(0,m.w5)((()=>[(0,m.Uk)(" submit ")])),_:1}),(0,m.Wm)(c,{onClick:t[4]||(t[4]=e=>i.isEditForm=!1),color:"warning",variant:"outlined"},{default:(0,m.w5)((()=>[(0,m.Uk)(" cancel ")])),_:1})])),_:1})],32)])),_:1})):(0,m.kq)("",!0)])),_:1})}var lt={components:{LoaderComponent:ge},mounted(){this.getUserDate()},data(){return{displayName:"UserName",email:"username@user.com",photoURL:"./img/Female_avatar.png",aboutUserDescr:"Write about yourself",isEditForm:!1,rules:{required:e=>!!e||"Required field",emailRule:e=>/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e)||"Incorrect email",min:e=>e.length>=20||"Minimum 20 characters"},isLoading:!0}},methods:{saveUserChanges(){this.isEditForm=!1,this.$store.dispatch("UPDATE_USER_PROFILE",{displayName:this.displayName,email:this.email,photoURL:this.photoURL,aboutUser:this.aboutUserDescr})},async getUserDate(){const{displayName:e,email:t,photoURL:s,aboutUser:o}=await this.$store.dispatch("GET_USER_PROFILE");this.displayName=null!==e?e:"UserName",this.email=null!==t?t:"username@user.com",this.photoURL=null!==s?s:"./img/Female_avatar.png",this.aboutUserDescr=null!==o?o:"Write about yourself",this.isLoading=!1},onImagePicker(e){const{files:t}=e.target,s=new FileReader;s.readAsDataURL(t[0]),s.addEventListener("load",(()=>{const e=s.result;this.photoURL=e}))}}};const rt=(0,g.Z)(lt,[["render",it]]);var nt=rt;function ut(e,t,s,a,i,l){const r=(0,m.up)("v-card-title"),n=(0,m.up)("v-text-field"),u=(0,m.up)("v-alert"),d=(0,m.up)("v-container"),c=(0,m.up)("v-divider"),p=(0,m.up)("v-spacer"),h=(0,m.up)("v-icon"),f=(0,m.up)("v-btn"),k=(0,m.up)("v-card-actions"),g=(0,m.up)("v-form"),v=(0,m.up)("v-card");return(0,m.wg)(),(0,m.j4)(v,{class:"mx-auto","max-width":"500"},{default:(0,m.w5)((()=>[(0,m.Wm)(g,{modelValue:i.valid,"onUpdate:modelValue":t[3]||(t[3]=e=>i.valid=e),onSubmit:(0,o.iM)(l.login,["prevent"])},{default:(0,m.w5)((()=>[(0,m.Wm)(d,null,{default:(0,m.w5)((()=>[(0,m.Wm)(r,{class:"text-h5 font-weight-bold d-flex justify-center"},{default:(0,m.w5)((()=>[(0,m.Uk)(" User Log-In")])),_:1}),(0,m.Wm)(n,{modelValue:i.email,"onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),color:"primary",label:"Email",name:"email",variant:"underlined","prepend-inner-icon":"mdi-account-outline",rules:[i.rules.required,i.rules.emailRule]},null,8,["modelValue","rules"]),(0,m.Wm)(n,{modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),color:"primary",label:"Password",name:"password",placeholder:"Enter your password",variant:"underlined","prepend-inner-icon":"mdi-lock-outline","append-icon":i.show1?"mdi-eye":"mdi-eye-off",rules:[i.rules.required,i.rules.min],type:i.show1?"password":"text","onClick:append":t[2]||(t[2]=e=>i.show1=!i.show1),hint:"At least 7 characters"},null,8,["modelValue","append-icon","rules","type"]),l.error?((0,m.wg)(),(0,m.j4)(u,{key:0,color:"warning",theme:"dark",icon:"mdi-message-alert",type:"warning",border:""},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(l.error),1)])),_:1})):(0,m.kq)("",!0)])),_:1}),(0,m.Wm)(c),(0,m.Wm)(k,null,{default:(0,m.w5)((()=>[(0,m.Wm)(p),(0,m.Wm)(f,{color:"success",onClick:l.login,disabled:l.processing||!i.valid,type:"submit"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Login "),(0,m.Wm)(h,{icon:"mdi-chevron-right",end:""})])),_:1},8,["onClick","disabled"])])),_:1})])),_:1},8,["modelValue","onSubmit"])])),_:1})}var dt={data(){return{email:null,password:null,show1:!0,valid:!1,rules:{required:e=>!!e||"Required field",min:e=>e.length>=7||"Minimum 7 characters",emailRule:e=>/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e)||"Incorrect email"}}},methods:{login(){this.$store.dispatch("LOGIN",{email:this.email,password:this.password})}},computed:{error(){return this.$store.getters.getError},processing(){return this.$store.getters.getProcessing},isUserAuthenticated(){return this.$store.getters.getIsUserAuthenticated}},watch:{isUserAuthenticated(e){!0===e&&this.$router.push({path:"/Bookshelf-app/"})}}};const ct=(0,g.Z)(dt,[["render",ut]]);var pt=ct;const mt=(0,m._)("span",{class:"text-caption text-grey-darken-1"}," This is the email you will use to login to your account ",-1),ht=(0,m._)("span",{class:"text-caption text-grey-darken-1"}," Please enter a password for your account ",-1);function wt(e,t,s,a,i,l){const r=(0,m.up)("v-card-title"),n=(0,m.up)("v-text-field"),u=(0,m.up)("v-alert"),d=(0,m.up)("v-checkbox"),c=(0,m.up)("v-container"),p=(0,m.up)("v-divider"),h=(0,m.up)("v-spacer"),f=(0,m.up)("v-icon"),k=(0,m.up)("v-btn"),g=(0,m.up)("v-card-actions"),v=(0,m.up)("v-form"),b=(0,m.up)("v-card");return(0,m.wg)(),(0,m.j4)(b,{class:"mx-auto","max-width":"500"},{default:(0,m.w5)((()=>[(0,m.Wm)(v,{modelValue:i.valid,"onUpdate:modelValue":t[5]||(t[5]=e=>i.valid=e),onSubmit:(0,o.iM)(l.signin,["prevent"])},{default:(0,m.w5)((()=>[(0,m.Wm)(c,null,{default:(0,m.w5)((()=>[(0,m.Wm)(r,{class:"text-h5 font-weight-bold d-flex justify-center"},{default:(0,m.w5)((()=>[(0,m.Uk)(" User Registration")])),_:1}),(0,m.Wm)(n,{modelValue:i.email,"onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),color:"primary",label:"Email",name:"email",variant:"underlined","prepend-inner-icon":"mdi-account-outline",rules:[i.rules.required,i.rules.emailRule]},null,8,["modelValue","rules"]),mt,(0,m.Wm)(n,{modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),color:"primary",label:"Password",name:"password",placeholder:"Enter your password",variant:"underlined","prepend-inner-icon":"mdi-lock-outline","append-icon":i.show1?"mdi-eye":"mdi-eye-off",rules:[i.rules.required,i.rules.min],type:i.show1?"text":"password","onClick:append":t[2]||(t[2]=e=>i.show1=!i.show1),hint:"At least 7 characters"},null,8,["modelValue","append-icon","rules","type"]),(0,m.Wm)(n,{color:"primary",label:"Password",placeholder:"Confirm Password",variant:"underlined","prepend-inner-icon":"mdi-lock","append-icon":i.show2?"mdi-eye":"mdi-eye-off",rules:[i.rules.required,i.rules.min],type:i.show2?"text":"password","onClick:append":t[3]||(t[3]=e=>i.show2=!i.show2),hint:"At least 7 characters"},null,8,["append-icon","rules","type"]),ht,l.error?((0,m.wg)(),(0,m.j4)(u,{key:0,color:"warning",theme:"dark",icon:"mdi-message-alert",type:"warning",border:""},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(l.error),1)])),_:1})):(0,m.kq)("",!0),(0,m.Wm)(d,{modelValue:i.terms,"onUpdate:modelValue":t[4]||(t[4]=e=>i.terms=e),color:"primary",label:"I agree to site terms and conditions"},null,8,["modelValue"])])),_:1}),(0,m.Wm)(p),(0,m.Wm)(g,null,{default:(0,m.w5)((()=>[(0,m.Wm)(h),(0,m.Wm)(k,{color:"success",onClick:l.signin,disabled:l.processing||!i.valid,type:"submit"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Complete Registration "),(0,m.Wm)(f,{icon:"mdi-chevron-right",end:""})])),_:1},8,["onClick","disabled"])])),_:1})])),_:1},8,["modelValue","onSubmit"])])),_:1})}var ft={data(){return{email:null,password:null,terms:!1,show1:!0,show2:!0,valid:!1,rules:{required:e=>!!e||"Required field",min:e=>e.length>=7||"Minimum 7 characters",emailRule:e=>/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e)||"Incorrect email"}}},methods:{signin(){this.$store.dispatch("SIGNIN",{email:this.email,password:this.password})}},computed:{error(){return this.$store.getters.getError},processing(){return this.$store.getters.getProcessing},isUserAuthenticated(){return this.$store.getters.getIsUserAuthenticated}},watch:{isUserAuthenticated(e){!0===e&&this.$router.push({path:"/Bookshelf-app/"})}}};const kt=(0,g.Z)(ft,[["render",wt]]);var gt=kt;const vt=(0,m._)("div",{class:"banner-block"},null,-1),bt=(0,m._)("h2",{class:"text-h4 text-primary text-center"}," Top 5 books for all the Best Sellers ",-1),yt=(0,m._)("h3",{class:"text-h5 text-center mb-3"},"Combined Print & E-Book Fiction",-1),_t={class:"d-flex flex-wrap align-stretch justify-center justify-content-space-between mb-6"};function Ut(e,t,s,o,a,i){const l=(0,m.up)("loader-component"),r=(0,m.up)("v-img"),n=(0,m.up)("v-btn"),u=(0,m.up)("v-card-title"),d=(0,m.up)("v-card"),c=(0,m.up)("v-container");return(0,m.wg)(),(0,m.iD)(m.HY,null,[vt,(0,m.Wm)(c,{fluid:""},{default:(0,m.w5)((()=>[bt,yt,(0,m._)("div",_t,[0===a.list.length?((0,m.wg)(),(0,m.j4)(l,{key:0,class:"d-flex my-6 mx-auto",size:"65",width:"6"})):(0,m.kq)("",!0),((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(a.list,(e=>((0,m.wg)(),(0,m.iD)("div",{key:e.primary_isbn13,class:"d-flex flex-wrap justify-content-space-between align-stretch ma-4"},[(0,m.Wm)(d,{to:{name:"book",params:{id:e.primary_isbn13}}},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{src:e.book_image,class:"bg-grey-lighten-2",alt:"book.book_details.title"},null,8,["src"]),(0,m.Wm)(u,{class:"text-body-2 font-weight-bold text-center"},{default:(0,m.w5)((()=>[(0,m.Wm)(n,{block:"",class:"mt-2",variant:"text",color:"primary"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,w.zw)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])])))),128))])])),_:1})],64)}const Wt=new he;var Rt={name:"HomeView",components:{LoaderComponent:ge},created(){this.getList()},data(){return{list:[]}},methods:{async getList(){this.list=await Wt.getOneLastList()}}};const Et=(0,g.Z)(Rt,[["render",Ut]]);var xt=Et;function St(e,t,s){M.getters.getIsUserAuthenticated?s():s("/Bookshelf-app/signin")}const Dt=[{path:"/Bookshelf-app/",name:"home",component:xt},{path:"/Bookshelf-app/books",name:"books",component:_e},{path:"/Bookshelf-app/books/:id",name:"book",props:!0,component:Be},{path:"/Bookshelf-app/wishlist",name:"wishlist",component:Pe,beforeEnter:St},{path:"/Bookshelf-app/read",name:"read",component:Je,beforeEnter:St},{path:"/Bookshelf-app/profile",name:"profile",component:nt,beforeEnter:St},{path:"/Bookshelf-app/login",name:"login",component:pt},{path:"/Bookshelf-app/signin",name:"signin",component:gt}],Lt=(0,L.p7)({history:(0,L.PO)(),routes:Dt});var It=Lt;const Ot=(0,n.Rd)({theme:{defaultTheme:"dark"},icons:{defaultSet:"mdi",aliases:u.j,sets:{mdi:u.t}},components:d,directives:c});const Ct=(0,a.ZF)(p),Bt=((0,l.ad)(Ct),(0,i.N8)(Ct),(0,r.v0)(Ct));(0,r.Aj)(Bt,(e=>{M.dispatch("CHANGE_STAGE",e)})),(0,o.ri)(D).use(Ot).use(M).use(It).mount("#app")}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,o,a,i){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],i=e[d][2];for(var r=!0,n=0;n<o.length;n++)(!1&i||l>=i)&&Object.keys(s.O).every((function(e){return s.O[e](o[n])}))?o.splice(n--,1):(r=!1,i<l&&(l=i));if(r){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,l=o[0],r=o[1],n=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(n)var d=n(s)}for(t&&t(o);u<l.length;u++)i=l[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},o=self["webpackChunkmy_bookshelf"]=self["webpackChunkmy_bookshelf"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(3159)}));o=s.O(o)})();
//# sourceMappingURL=app.3628a0ca.js.map