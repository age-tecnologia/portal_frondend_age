(function(){"use strict";var e={710:function(e,a,t){var l=t(9242),n=t(3396);function o(e,a){const t=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(t)}var s=t(89);const i={},d=(0,s.Z)(i,[["render",o]]);var r=d,c=t(5431);(0,c.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=t(2483),m=t(7139);const p=e=>((0,n.dD)("data-v-e809e8ca"),e=e(),(0,n.Cn)(),e),_={id:"welcome"},v=["src"],h=p((()=>(0,n._)("h1",null,"Portal Age Telecom",-1))),g=p((()=>(0,n._)("p",null,[(0,n.Uk)(" Acesse os principais sistemas internos, "),(0,n._)("br"),(0,n.Uk)(" ferramentas, relatórios, dashboards e mais! ")],-1))),f={id:"content-login"},w={key:0,id:"card-login"},k=p((()=>(0,n._)("h1",null," Bem-vindo(a) ;) ",-1))),b=p((()=>(0,n._)("p",null,"Acesse com seu usuário Age Telecom",-1))),y={id:"msg"},D={key:0,class:"trigger"},C={class:"inputs"},A=p((()=>(0,n._)("i",{class:"fi fi-sr-user"},null,-1))),z={class:"inputs"},M=p((()=>(0,n._)("i",{class:"fi fi-sr-lock"},null,-1))),Z={key:0},S={key:1,class:"loader"},V={key:1,id:"card-login"},j=(0,n.uE)('<h1 data-v-e809e8ca> Cadastre-se </h1><p data-v-e809e8ca>Utilize seus dados Age telecom</p><form action="#" data-v-e809e8ca><div class="inputs" data-v-e809e8ca><i class="fi fi-sr-envelope" data-v-e809e8ca></i><input type="email" name="email" id="email" autocomplete="off" placeholder="E-mail" required data-v-e809e8ca><span data-v-e809e8ca> @agetelecom.com.br </span></div><div class="inputs" data-v-e809e8ca><i class="fi fi-sr-user" data-v-e809e8ca></i><input type="text" name="email" id="email" autocomplete="off" placeholder="Nome de usuário" required data-v-e809e8ca></div><div class="inputs" data-v-e809e8ca><i class="fi fi-sr-lock" data-v-e809e8ca></i><input type="password" name="password" id="password" autocomplete="off" placeholder="Senha" required data-v-e809e8ca></div><button data-v-e809e8ca><span data-v-e809e8ca> Cadastrar </span></button></form>',3),x=[j],q={key:0,class:"loading-bar"};function R(e,a,o,s,i,d){return(0,n.wg)(),(0,n.iD)("div",{id:"container-login",class:(0,m.C_)({"mode-l":"light"===i.mode||void 0===i.mode,"mode-d":"dark"===i.mode})},[(0,n._)("div",_,[(0,n._)("img",{src:t(4642),alt:""},null,8,v),h,g,"discontinued"===i.page?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:a[0]||(a[0]=e=>i.page="discontinued")}," Cadastre-se ")):(0,n.kq)("",!0),"register"===i.page?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:a[1]||(a[1]=e=>i.page="login")}," Conecte-se ")):(0,n.kq)("",!0)]),(0,n._)("div",f,["login"===i.page?((0,n.wg)(),(0,n.iD)("div",w,[k,b,(0,n._)("form",{action:"#",onSubmit:a[5]||(a[5]=(0,l.iM)((()=>{}),["prevent"])),class:(0,m.C_)({trigger:!0===i.error})},[(0,n._)("div",y,[null!==i.msg?((0,n.wg)(),(0,n.iD)("span",D,(0,m.zw)(i.msg),1)):(0,n.kq)("",!0)]),(0,n._)("div",C,[A,(0,n.wy)((0,n._)("input",{type:"text",name:"username",id:"username",autocomplete:"off",placeholder:"Usuário",required:"","onUpdate:modelValue":a[2]||(a[2]=e=>i.inputs.username=e)},null,512),[[l.nr,i.inputs.username]])]),(0,n._)("div",z,[M,(0,n.wy)((0,n._)("input",{type:"password",name:"password",id:"password",autocomplete:"off",placeholder:"Senha",required:"","onUpdate:modelValue":a[3]||(a[3]=e=>i.inputs.password=e)},null,512),[[l.nr,i.inputs.password]])]),(0,n._)("button",{onClick:a[4]||(a[4]=(...e)=>d.authenticate&&d.authenticate(...e))},[!1===i.loading?((0,n.wg)(),(0,n.iD)("span",Z," Entrar ")):(0,n.kq)("",!0),!0===i.loading?((0,n.wg)(),(0,n.iD)("span",S)):(0,n.kq)("",!0)])],34)])):(0,n.kq)("",!0),"register"===i.page?((0,n.wg)(),(0,n.iD)("div",V,x)):(0,n.kq)("",!0)]),!0===i.loading?((0,n.wg)(),(0,n.iD)("div",q)):(0,n.kq)("",!0)],2)}var W=t(680),U=t(6265),H=t.n(U);const P=H().create({baseURL:"http://v1.portal.tote.local/api/"});var E={name:"LoginPage",data(){return{mode:W.Z.get("mode"),page:"login",loading:!1,inputs:{username:null,password:null},functions:{authenticate:!1},msg:null,error:!1}},methods:{authenticate:function(){null!==this.inputs.username&&null!==this.inputs.password&&!1===this.functions.authenticate&&(this.loading=!0,this.functions.authenticate=!0,P({method:"POST",url:"auth/login_ad",headers:{"Content-Type":"application/json",Access:"application/json"},data:{email:this.inputs.username,password:this.inputs.password}}).then((e=>{this.msg=null,this.error=!1,this.functions.authenticate=!1,W.Z.set("token",e.data.access_token,{expires:1}),W.Z.set("name",e.data.name,{expires:1}),this.$router.replace("/sistemas")})).catch((e=>{401===e.response.status&&(this.loading=!1,this.error=!0,this.functions.authenticate=!1,this.msg="Usuário ou senha incorretos!")})))}}};const T=(0,s.Z)(E,[["render",R],["__scopeId","data-v-e809e8ca"]]);var O=T;const I={id:"content-app"},B={id:"layer-app"};function N(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp");return(0,n.wg)(),(0,n.iD)("div",I,[(0,n.Wm)(i,{mode:o.mode,system:"portal-mng"},null,8,["mode"]),(0,n._)("div",B,[(0,n.Wm)(d,{onMode:s.modeView},null,8,["onMode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},null,2)])])}const L=e=>((0,n.dD)("data-v-29e23bdf"),e=e(),(0,n.Cn)(),e),Y={id:"logo-name"},F=["src"],$=L((()=>(0,n._)("i",{class:"fi fi-rr-angle-small-left"},null,-1))),K=L((()=>(0,n._)("i",{class:"fi fi-rr-menu-burger"},null,-1))),G=[$,K],J={key:0},Q=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-apps-add"})]),(0,n._)("span",null,"Sistemas")],-1))),X=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-settings-sliders"})]),(0,n._)("span",null,"Gerenciamento")],-1))),ee=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-sign-out-alt"})]),(0,n._)("span",null,"Logout")],-1))),ae={key:1},te=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-users-alt"})]),(0,n._)("span",null,"Usuários")],-1))),le=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-arrow-left"})]),(0,n._)("span",null,"Voltar ao portal")],-1))),ne=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-sign-out-alt"})]),(0,n._)("span",null,"Logout")],-1))),oe={key:2},se=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-document"})]),(0,n._)("span",null,"Relatórios")],-1))),ie=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-arrow-left"})]),(0,n._)("span",null,"Voltar ao portal")],-1))),de=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-sign-out-alt"})]),(0,n._)("span",null,"Logout")],-1))),re={key:3},ce=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-home"})]),(0,n._)("span",null,"Home")],-1))),ue=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-chart-histogram"})]),(0,n._)("span",null,"Minhas vendas")],-1))),me=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-arrow-left"})]),(0,n._)("span",null,"Voltar ao portal")],-1))),pe=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-settings-sliders"})]),(0,n._)("span",null,"Analítico")],-1))),_e=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-arrow-left"})]),(0,n._)("span",null,"Voltar ao portal")],-1))),ve=L((()=>(0,n._)("li",null,[(0,n._)("div",null,[(0,n._)("i",{class:"fi fi-rr-sign-out-alt"})]),(0,n._)("span",null,"Logout")],-1))),he={key:0,class:"loading-bar"};function ge(e,a,l,o,s,i){const d=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{id:"menu",class:(0,m.C_)({"mode-l":"light"===l.mode||void 0===l.mode,"mode-d":"dark"===l.mode,"decrease-menu":"decrease"===s.menu})},[(0,n._)("div",Y,[(0,n._)("img",{src:t(4642),alt:"age"},null,8,F),(0,n._)("div",{onClick:a[0]||(a[0]=e=>i.closeMenu())},G)]),"portal"===l.system?((0,n.wg)(),(0,n.iD)("nav",J,[(0,n._)("ul",null,[(0,n.Wm)(d,{to:"/sistemas","active-class":"active-li",onClick:a[1]||(a[1]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[Q])),_:1}),"Admin"===s.permissions.portal||"Master"===s.permissions.portal?((0,n.wg)(),(0,n.j4)(d,{key:0,to:"/gerenciamento/usuarios","active-class":"active-li",onClick:a[2]||(a[2]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[X])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(d,{to:"/","active-class":"active-li",style:{position:"absolute",bottom:"1vh"},onClick:a[3]||(a[3]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[ee])),_:1})])])):(0,n.kq)("",!0),"portal-mng"===l.system?((0,n.wg)(),(0,n.iD)("nav",ae,[(0,n._)("ul",null,[(0,n.Wm)(d,{to:"/gerenciamento/usuarios","active-class":"active-li",onClick:a[4]||(a[4]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[te])),_:1}),(0,n.Wm)(d,{to:"/sistemas","active-class":"active-li",style:{position:"absolute",bottom:"7vh"},onClick:a[5]||(a[5]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[le])),_:1}),(0,n.Wm)(d,{to:"/","active-class":"active-li",style:{position:"absolute",bottom:"1vh"},onClick:a[6]||(a[6]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[ne])),_:1})])])):(0,n.kq)("",!0),"report"===l.system?((0,n.wg)(),(0,n.iD)("nav",oe,[(0,n._)("ul",null,[(0,n.Wm)(d,{to:"/ageReport/home","active-class":"active-li",onClick:a[7]||(a[7]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[se])),_:1}),(0,n.Wm)(d,{to:"/sistemas","active-class":"active-li",style:{position:"absolute",bottom:"7vh"},onClick:a[8]||(a[8]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[ie])),_:1}),(0,n.Wm)(d,{to:"/","active-class":"active-li",style:{position:"absolute",bottom:"1vh"}},{default:(0,n.w5)((()=>[de])),_:1})])])):(0,n.kq)("",!0),"ageRv"===l.system?((0,n.wg)(),(0,n.iD)("nav",re,[(0,n._)("ul",null,[(0,n.Wm)(d,{to:"/ageRv/home","active-class":"active-li",onClick:a[9]||(a[9]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[ce])),_:1}),"Vendedor"===s.permissions.agerv.function||"Supervisor"===s.permissions.agerv.function?((0,n.wg)(),(0,n.j4)(d,{key:0,to:"/ageRv/comercial/vendas/dashboard","active-class":"active-li",onClick:a[10]||(a[10]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[ue])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(d,{to:"/sistemas","active-class":"active-li",style:{position:"absolute",bottom:"7vh"},onClick:a[11]||(a[11]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[me])),_:1}),(0,n.Wm)(d,{to:"/ageRv/comercial/analitico","active-class":"active-li",onClick:a[12]||(a[12]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[pe])),_:1}),(0,n.Wm)(d,{to:"/sistemas","active-class":"active-li",style:{position:"absolute",bottom:"7vh"},onClick:a[13]||(a[13]=e=>s.loading=!0)},{default:(0,n.w5)((()=>[_e])),_:1}),(0,n.Wm)(d,{to:"/","active-class":"active-li",style:{position:"absolute",bottom:"1vh"}},{default:(0,n.w5)((()=>[ve])),_:1})])])):(0,n.kq)("",!0)],2),!0===s.loading?((0,n.wg)(),(0,n.iD)("div",he)):(0,n.kq)("",!0)],64)}var fe={name:"MenuApp",props:{mode:{type:String},system:{type:String,required:!0}},data(){return{menu:W.Z.get("menu"),loading:!1,permissions:{agerv:{function:W.Z.get("agerv_function"),level:W.Z.get("agerv_permission")},portal:W.Z.get("portal_permission")}}},methods:{closeMenu:function(){switch(W.Z.get("menu")){case"decrease":W.Z.set("menu","increase",{expires:7}),this.menu="light";break;case"increase":W.Z.set("menu","decrease",{expires:7}),this.menu="decrease";break;case void 0:W.Z.set("menu","decrease",{expires:7}),this.menu="decrease";break}}}};const we=(0,s.Z)(fe,[["render",ge],["__scopeId","data-v-29e23bdf"]]);var ke=we;const be=e=>((0,n.dD)("data-v-dffa5814"),e=e(),(0,n.Cn)(),e),ye={id:"profile"},De={key:0,class:"fi fi-rr-sun"},Ce=be((()=>(0,n._)("div",null,null,-1))),Ae={key:1,class:"fi fi-rr-moon-stars"};function ze(e,a,t,l,o,s){return(0,n.wg)(),(0,n.iD)("div",{id:"header-top",class:(0,m.C_)({"mode-l":"light"===o.mode||void 0===o.mode,"mode-d":"dark"===o.mode})},[(0,n._)("div",ye,[(0,n._)("span",null,"Olá, "+(0,m.zw)(o.username),1)]),(0,n._)("div",{id:"darkmode",onClick:a[0]||(a[0]=(...e)=>s.modeView&&s.modeView(...e))},["light"===o.mode||void 0===o.mode?((0,n.wg)(),(0,n.iD)("i",De)):(0,n.kq)("",!0),Ce,"dark"===o.mode?((0,n.wg)(),(0,n.iD)("i",Ae)):(0,n.kq)("",!0)])],2)}var Me={name:"HeaderApp",data(){return{mode:W.Z.get("mode"),username:W.Z.get("name")}},methods:{modeView:function(){switch(W.Z.get("mode")){case"dark":W.Z.set("mode","light",{expires:7}),this.$emit("mode","light"),this.mode="light";break;case"light":W.Z.set("mode","dark",{expires:7}),this.$emit("mode","dark"),this.mode="dark";break;case void 0:W.Z.set("mode","dark",{expires:7}),this.$emit("mode","dark"),this.mode="dark";break}}}};const Ze=(0,s.Z)(Me,[["render",ze],["__scopeId","data-v-dffa5814"]]);var Se=Ze,Ve={name:"PanelDashboard",components:{MenuApp:ke,HeaderApp:Se},data(){return{mode:W.Z.get("mode")}},methods:{modeView:function(e){this.mode=e}},mounted(){}};const je=(0,s.Z)(Ve,[["render",N],["__scopeId","data-v-e6500a7c"]]);var xe=je;const qe=e=>((0,n.dD)("data-v-489062e5"),e=e(),(0,n.Cn)(),e),Re={id:"content-app"},We={id:"layer-app"},Ue=qe((()=>(0,n._)("div",{class:"systems-on"},[(0,n._)("h1",null,"Sistemas"),(0,n._)("div",{id:"systems"})],-1))),He={class:"systems-on"},Pe=qe((()=>(0,n._)("h1",null,"Em desenvolvimento",-1))),Ee={id:"systems"},Te=qe((()=>(0,n._)("div",{class:"system"},[(0,n._)("div",{class:"img-title"},[(0,n._)("i",{class:"fi fi-rr-document"}),(0,n._)("span",null,"Relatórios")]),(0,n._)("p",null," Relatórios e planilhas. ")],-1))),Oe=qe((()=>(0,n._)("div",{class:"system"},[(0,n._)("div",{class:"img-title"},[(0,n._)("i",{class:"fi fi-rr-star"}),(0,n._)("span",null,"AgeRV")]),(0,n._)("p",null," Vendas e comissionamento. ")],-1))),Ie=qe((()=>(0,n._)("div",{class:"system"},[(0,n._)("div",{class:"img-title"},[(0,n._)("i",{class:"fi fi-rr-stats"}),(0,n._)("span",null,"Indicadores")]),(0,n._)("p",null," Dashboards. ")],-1))),Be={key:0,class:"loading-bar"};function Ne(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp"),r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Re,[(0,n.Wm)(i,{mode:o.mode,system:"portal"},null,8,["mode"]),(0,n._)("div",We,[(0,n.Wm)(d,{onMode:s.modeView},null,8,["onMode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},[Ue,(0,n._)("div",He,[Pe,(0,n._)("div",Ee,[(0,n.Wm)(r,{to:"/ageReport/home",onClick:a[0]||(a[0]=e=>o.loading=!0)},{default:(0,n.w5)((()=>[Te])),_:1}),(0,n.Wm)(r,{to:"/ageRv/home",onClick:a[1]||(a[1]=e=>o.loading=!0)},{default:(0,n.w5)((()=>[Oe])),_:1}),(0,n.Wm)(r,{to:"/sistemas",onClick:a[2]||(a[2]=e=>o.loading=!0)},{default:(0,n.w5)((()=>[Ie])),_:1})])])],2)])]),!0===o.loading?((0,n.wg)(),(0,n.iD)("div",Be)):(0,n.kq)("",!0)],64)}var Le={name:"SystemApp",components:{MenuApp:ke,HeaderApp:Se},data(){return{mode:W.Z.get("mode"),loading:!1}},methods:{modeView:function(e){this.mode=e}},mounted(){}};const Ye=(0,s.Z)(Le,[["render",Ne],["__scopeId","data-v-489062e5"]]);var Fe=Ye;const $e=e=>((0,n.dD)("data-v-6be97542"),e=e(),(0,n.Cn)(),e),Ke={id:"content-app"},Ge={id:"layer-app"},Je=$e((()=>(0,n._)("h1",null," Relatórios disponíveis ",-1))),Qe={id:"reports"},Xe=$e((()=>(0,n._)("i",{class:"fi fi-rr-document-signed"},null,-1))),ea=$e((()=>(0,n._)("span",null,[(0,n.Uk)("Lista de "),(0,n._)("br"),(0,n.Uk)(" conexões")],-1))),aa=[Xe,ea],ta=$e((()=>(0,n._)("i",{class:"fi fi-rr-document-signed"},null,-1))),la=$e((()=>(0,n._)("span",null,"DICI",-1))),na=[ta,la];function oa(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp");return(0,n.wg)(),(0,n.iD)("div",Ke,[(0,n.Wm)(i,{mode:o.mode,system:"report"},null,8,["mode"]),(0,n._)("div",Ge,[(0,n.Wm)(d,{onMode:s.modeView},null,8,["onMode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},[Je,(0,n._)("div",Qe,[(0,n._)("div",{class:"report",onClick:a[0]||(a[0]=e=>s.downloadReport("list-connections","lista_conexoes.xlsx"))},aa),(0,n._)("div",{class:"report",onClick:a[1]||(a[1]=e=>s.downloadReport("dici","dici.xlsx"))},na)])],2)])])}var sa={name:"ReportPage",components:{MenuApp:ke,HeaderApp:Se},data(){return{mode:W.Z.get("mode")}},methods:{modeView:function(e){this.mode=e},downloadReport:function(e,a){P({method:"GET",url:"report/"+e,headers:{Authorization:"Bearer "+W.Z.get("token")},responseType:"blob"}).then((e=>{let t=new Blob([e.data],{type:"vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),l=document.createElement("a");l.href=window.URL.createObjectURL(t),l.download=a,l.click()}))}},mounted(){}};const ia=(0,s.Z)(sa,[["render",oa],["__scopeId","data-v-6be97542"]]);var da=ia,ra={auth(e,a,t){const l=W.Z.get("token");P({method:"get",url:"validatedToken",headers:{Authorization:"Bearer "+l}}).then((e=>{if(!0===e.data.status)return W.Z.set("portal_permission",e.data.levelAccess,{expires:1}),t()})).catch((()=>t({path:"/"})))},management_portal(e,a,t){const l=W.Z.get("portal_permission");return"Admin"===l||"Master"===l?t():t({path:"/sistemas"})},permission_report(e,a,t){const l=W.Z.get("token");P({method:"get",url:"agerreport/Access",headers:{Authorization:"Bearer"+l}}).then((()=>t())).catch((()=>(alert("Você não pode acessar o sistema AgeReport."),t({path:"/sistemas"}))))},permission_rv(e,a,t){const l=W.Z.get("token");P({method:"get",url:"agerv/Access",headers:{Authorization:"Bearer"+l}}).then((e=>(W.Z.set("agerv_permission",e.data.levelAccess,{expires:1}),W.Z.set("agerv_function",e.data.function,{expires:1}),t()))).catch((()=>(alert("Você não pode acessar o sistema AgeRv."),t({path:"/sistemas"}))))}};const ca={id:"content-app"},ua={id:"layer-app"};function ma(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp");return(0,n.wg)(),(0,n.iD)("div",ca,[(0,n.Wm)(i,{mode:o.mode,system:"ageRv"},null,8,["mode"]),(0,n._)("div",ua,[(0,n.Wm)(d,{onMode:s.modeView},null,8,["onMode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},null,2)])])}var pa={name:"SalesAnalytics",components:{MenuApp:ke,HeaderApp:Se},data(){return{mode:W.Z.get("mode")}},methods:{modeView:function(e){this.mode=e}},mounted(){}};const _a=(0,s.Z)(pa,[["render",ma],["__scopeId","data-v-8840c200"]]);var va=_a;const ha=e=>((0,n.dD)("data-v-7c919112"),e=e(),(0,n.Cn)(),e),ga={key:0,class:"loading-bar"},fa={id:"content-app"},wa={id:"layer-app"},ka={key:0,class:"section-1"},ba={class:"dashboard-commercial"},ya=ha((()=>(0,n._)("h1",null,"Dashboard de vendas",-1))),Da={class:"dashboards"},Ca={class:"type-value"},Aa=ha((()=>(0,n._)("span",null,"Estrelas",-1))),za=ha((()=>(0,n._)("i",{class:"fi fi-ss-star"},null,-1))),Ma={class:"type-value"},Za=ha((()=>(0,n._)("span",null,"Vendas totais",-1))),Sa=ha((()=>(0,n._)("i",{class:"fi fi-ss-rocket-lunch"},null,-1))),Va={class:"dashboard",style:{"background-color":"#932b91"}},ja={class:"type-value"},xa=ha((()=>(0,n._)("span",null,"Meta",-1))),qa=ha((()=>(0,n._)("i",{class:"fi fi-rr-chart-histogram"},null,-1))),Ra={class:"dashboard",style:{"background-color":"#F44336"}},Wa={class:"type-value"},Ua=ha((()=>(0,n._)("span",null,[(0,n.Uk)("Cancelamentos"),(0,n._)("br"),(0,n.Uk)("Totais")],-1))),Ha=ha((()=>(0,n._)("i",{class:"fi fi-ss-delete-document"},null,-1))),Pa={class:"dashboard",style:{"background-color":"#FECA1D"}},Ea={class:"type-value"},Ta=ha((()=>(0,n._)("span",null,"Valor da estrela",-1))),Oa=ha((()=>(0,n._)("i",{class:"fi fi-sr-grin-stars"},null,-1))),Ia={class:"type-value"},Ba=ha((()=>(0,n._)("span",null,[(0,n.Uk)("Vendas em "),(0,n._)("br"),(0,n.Uk)("Aprovação")],-1))),Na=ha((()=>(0,n._)("i",{class:"fi fi-rr-time-twenty-four"},null,-1))),La={class:"dashboard",style:{"background-color":"#983FB5"}},Ya={class:"type-value"},Fa=ha((()=>(0,n._)("span",null,"Meta mínima ",-1))),$a=ha((()=>(0,n._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),Ka={class:"type-value"},Ga=ha((()=>(0,n._)("span",null,[(0,n.Uk)("Cancelamento "),(0,n._)("br"),(0,n.Uk)(" -7 Dias")],-1))),Ja=ha((()=>(0,n._)("i",{class:"fi fi-sr-ban"},null,-1))),Qa={class:"dashboard",style:{"background-color":"#24A527"}},Xa={class:"type-value"},et=ha((()=>(0,n._)("span",null,"Comissão",-1))),at=ha((()=>(0,n._)("i",{class:"fi fi-sr-sack-dollar"},null,-1))),tt={class:"type-value"},lt=ha((()=>(0,n._)("span",null,[(0,n.Uk)("Vendas "),(0,n._)("br"),(0,n.Uk)(" comissionáveis")],-1))),nt=ha((()=>(0,n._)("i",{class:"fi fi-rr-trophy"},null,-1))),ot={class:"dashboard",style:{"background-color":"#c571e1"}},st={class:"type-value"},it=ha((()=>(0,n._)("span",null,"Meta atingida",-1))),dt=ha((()=>(0,n._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),rt={class:"dashboard",style:{"background-color":"#B3B4B5"}},ct={class:"type-value"},ut=ha((()=>(0,n._)("span",null,"Deflator",-1))),mt=ha((()=>(0,n._)("i",{class:"fi fi-sr-settings-sliders"},null,-1))),pt={class:"filters"},_t=ha((()=>(0,n._)("span",null,"Selecione o mês",-1))),vt={class:"buttons-filter"},ht={class:"section-2"},gt={key:0,id:"card-modal",class:"stars"},ft={id:"close-button"},wt={id:"table"},kt=ha((()=>(0,n._)("h1",null,"Extrato de planos e estrelas",-1))),bt=ha((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"left",width:"50%"}},"Plano"),(0,n._)("th",null,"Quantidade"),(0,n._)("th",null,"Valor da estrela"),(0,n._)("th",null,"Total de estrelas")])],-1))),yt={style:{"text-align":"left",width:"50%"}},Dt={key:1,id:"card-modal",class:"stars salesTotals"},Ct={id:"close-button"},At={id:"table"},zt=ha((()=>(0,n._)("h1",null,"Extrato de todas as vendas realizadas",-1))),Mt=ha((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nº contrato"),(0,n._)("th",null,"Nome do cliente"),(0,n._)("th",null,"Plano"),(0,n._)("th",null,"Status"),(0,n._)("th",null,"Situação"),(0,n._)("th",null,"Data do cadastro"),(0,n._)("th",null,"Data da aprovação"),(0,n._)("th",null,"Data da vigência"),(0,n._)("th",null,"Data do cancelamento")])],-1))),Zt={key:2,id:"card-modal",class:"stars salesTotals"},St={id:"close-button"},Vt={id:"table"},jt=ha((()=>(0,n._)("h1",null,"Extrato de cancelamentos antes dos 7 dias",-1))),xt=ha((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nº contrato"),(0,n._)("th",null,"Nome do cliente"),(0,n._)("th",null,"Plano"),(0,n._)("th",null,"Status"),(0,n._)("th",null,"Situação"),(0,n._)("th",null,"Data do cadastro"),(0,n._)("th",null,"Data da aprovação"),(0,n._)("th",null,"Data da vigência"),(0,n._)("th",null,"Data do cancelamento")])],-1))),qt={key:3,id:"card-modal",class:"stars salesAprovation"},Rt={id:"close-button"},Wt={id:"table"},Ut=ha((()=>(0,n._)("h1",null,"Extrato de vendas em aprovação",-1))),Ht=ha((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nº contrato"),(0,n._)("th",null,"Nome do cliente"),(0,n._)("th",null,"Plano"),(0,n._)("th",null,"Status"),(0,n._)("th",null,"Situação"),(0,n._)("th",null,"Data do cadastro")])],-1))),Pt={key:4,id:"card-modal",class:"stars salesTotals"},Et={id:"close-button"},Tt={id:"table"},Ot=ha((()=>(0,n._)("h1",null,"Extrato de todas as vendas válidas para o comissionamento",-1))),It=ha((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nº contrato"),(0,n._)("th",null,"Nome do cliente"),(0,n._)("th",null,"Plano"),(0,n._)("th",null,"Status"),(0,n._)("th",null,"Situação"),(0,n._)("th",null,"Data do cadastro"),(0,n._)("th",null,"Data da aprovação"),(0,n._)("th",null,"Data da vigência")])],-1)));function Bt(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp"),r=(0,n.up)("ProjectionSection");return(0,n.wg)(),(0,n.iD)(n.HY,null,[!0===o.loading?((0,n.wg)(),(0,n.iD)("div",ga)):(0,n.kq)("",!0),(0,n._)("div",fa,[(0,n.Wm)(i,{mode:o.mode,system:"ageRv"},null,8,["mode"]),(0,n._)("div",wa,[(0,n.Wm)(d,{onMode:s.modeView,mode:o.mode},null,8,["onMode","mode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},[!0===o.dashStatus?((0,n.wg)(),(0,n.iD)("div",ka,[(0,n._)("div",ba,[ya,(0,n._)("div",Da,[(0,n._)("div",{class:"dashboard",style:{"background-color":"#FEA11D",cursor:"pointer"},onClick:a[0]||(a[0]=e=>s.modalView("stars"))},[(0,n._)("div",Ca,[(0,n._)("span",null,(0,m.zw)(o.data.stars),1),Aa]),za]),(0,n._)("div",{class:"dashboard",style:{"background-color":"#2fa1d0",cursor:"pointer"},onClick:a[1]||(a[1]=e=>s.modalView("salesTotals"))},[(0,n._)("div",Ma,[(0,n._)("span",null,(0,m.zw)(o.data.salesTotals),1),Za]),Sa]),(0,n._)("div",Va,[(0,n._)("div",ja,[(0,n._)("span",null,(0,m.zw)(o.data.meta),1),xa]),qa]),(0,n._)("div",Ra,[(0,n._)("div",Wa,[(0,n._)("span",null,(0,m.zw)(o.data.cancelTotals),1),Ua]),Ha]),(0,n._)("div",Pa,[(0,n._)("div",Ea,[(0,n._)("span",null,"R$"+(0,m.zw)(o.data.valueStars),1),Ta]),Oa]),(0,n._)("div",{class:"dashboard",style:{"background-color":"#6892d0",cursor:"pointer"},onClick:a[2]||(a[2]=e=>s.modalView("salesAprovation"))},[(0,n._)("div",Ia,[(0,n._)("span",null,(0,m.zw)(o.data.salesAprovation),1),Ba]),Na]),(0,n._)("div",La,[(0,n._)("div",Ya,[(0,n._)("span",null,(0,m.zw)(o.data.minMeta)+"%",1),Fa]),$a]),(0,n._)("div",{class:"dashboard",style:{"background-color":"#911515",cursor:"pointer"},onClick:a[3]||(a[3]=e=>s.modalView("cancelD7"))},[(0,n._)("div",Ka,[(0,n._)("span",null,(0,m.zw)(o.data.cancelD7),1),Ga]),Ja]),(0,n._)("div",Qa,[(0,n._)("div",Xa,[(0,n._)("span",null,"R$"+(0,m.zw)(o.data.commission),1),et]),at]),(0,n._)("div",{class:"dashboard",style:{"background-color":"#009688",cursor:"pointer"},onClick:a[4]||(a[4]=e=>s.modalView("salesValid"))},[(0,n._)("div",tt,[(0,n._)("span",null,(0,m.zw)(o.data.sales),1),lt]),nt]),(0,n._)("div",ot,[(0,n._)("div",st,[(0,n._)("span",null,(0,m.zw)(o.data.metaPercent)+"%",1),it]),dt]),(0,n._)("div",rt,[(0,n._)("div",ct,[(0,n._)("span",null,(0,m.zw)(o.data.deflator)+"%",1),ut]),mt])])]),(0,n._)("div",pt,[_t,(0,n._)("div",vt,[(0,n._)("span",{class:(0,m.C_)({active:"07"===o.filter.month}),onClick:a[5]||(a[5]=e=>s.getSellers("07"))},"Julho",2),(0,n._)("span",{class:(0,m.C_)({active:"08"===o.filter.month}),onClick:a[6]||(a[6]=e=>s.getSellers("08"))},"Agosto",2)])])])):(0,n.kq)("",!0),(0,n._)("div",ht,[o.filter.month===o.filter.actualMonth&&!0===o.projection?((0,n.wg)(),(0,n.j4)(r,{key:0,mode:o.mode,projection:o.data.projection},null,8,["mode","projection"])):(0,n.kq)("",!0)])],2)])]),!0===o.modal?((0,n.wg)(),(0,n.iD)("div",{key:1,id:"modal",class:(0,m.C_)({"mode-d-m":"dark"===o.mode})},["stars"===o.dashboard?((0,n.wg)(),(0,n.iD)("div",gt,[(0,n._)("div",ft,[(0,n._)("i",{class:"fi fi-rr-cross-small",onClick:a[7]||(a[7]=e=>this.modal=!1)})]),(0,n._)("div",wt,[kt,(0,n._)("table",null,[bt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.data.extractStars,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.valueStar},[(0,n._)("td",yt,(0,m.zw)(e.plan),1),(0,n._)("td",null,(0,m.zw)(e.qntd),1),(0,n._)("td",null,(0,m.zw)(e.valueStar),1),(0,n._)("td",null,(0,m.zw)(e.totals),1)])))),128))])])])])):(0,n.kq)("",!0),"salesTotals"===o.dashboard?((0,n.wg)(),(0,n.iD)("div",Dt,[(0,n._)("div",Ct,[(0,n._)("i",{class:"fi fi-rr-cross-small",onClick:a[8]||(a[8]=e=>this.modal=!1)})]),(0,n._)("div",At,[zt,(0,n._)("table",null,[Mt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.data.extractSalesTotals,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,m.zw)(e.id_contrato),1),(0,n._)("td",null,(0,m.zw)(e.nome_cliente),1),(0,n._)("td",null,(0,m.zw)(e.plano),1),(0,n._)("td",null,(0,m.zw)(e.status),1),(0,n._)("td",null,(0,m.zw)(e.situacao),1),(0,n._)("td",null,(0,m.zw)(e.data_contrato),1),(0,n._)("td",null,(0,m.zw)(e.data_ativacao),1),(0,n._)("td",null,(0,m.zw)(e.data_vigencia),1),(0,n._)("td",null,(0,m.zw)(e.data_cancelamento),1)])))),128))])])])])):(0,n.kq)("",!0),"cancelD7"===o.dashboard?((0,n.wg)(),(0,n.iD)("div",Zt,[(0,n._)("div",St,[(0,n._)("i",{class:"fi fi-rr-cross-small",onClick:a[9]||(a[9]=e=>this.modal=!1)})]),(0,n._)("div",Vt,[jt,(0,n._)("table",null,[xt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.data.extractCancelsD7,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,m.zw)(e.id_contrato),1),(0,n._)("td",null,(0,m.zw)(e.nome_cliente),1),(0,n._)("td",null,(0,m.zw)(e.plano),1),(0,n._)("td",null,(0,m.zw)(e.status),1),(0,n._)("td",null,(0,m.zw)(e.situacao),1),(0,n._)("td",null,(0,m.zw)(e.data_contrato),1),(0,n._)("td",null,(0,m.zw)(e.data_ativacao),1),(0,n._)("td",null,(0,m.zw)(e.data_vigencia),1),(0,n._)("td",null,(0,m.zw)(e.data_cancelamento),1)])))),128))])])])])):(0,n.kq)("",!0),"salesAprovation"===o.dashboard?((0,n.wg)(),(0,n.iD)("div",qt,[(0,n._)("div",Rt,[(0,n._)("i",{class:"fi fi-rr-cross-small",onClick:a[10]||(a[10]=e=>this.modal=!1)})]),(0,n._)("div",Wt,[Ut,(0,n._)("table",null,[Ht,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.data.extractSalesAprovation,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,m.zw)(e.id_contrato),1),(0,n._)("td",null,(0,m.zw)(e.nome_cliente),1),(0,n._)("td",null,(0,m.zw)(e.plano),1),(0,n._)("td",null,(0,m.zw)(e.status),1),(0,n._)("td",null,(0,m.zw)(e.situacao),1),(0,n._)("td",null,(0,m.zw)(e.data_contrato),1)])))),128))])])])])):(0,n.kq)("",!0),"salesValid"===o.dashboard?((0,n.wg)(),(0,n.iD)("div",Pt,[(0,n._)("div",Et,[(0,n._)("i",{class:"fi fi-rr-cross-small",onClick:a[11]||(a[11]=e=>this.modal=!1)})]),(0,n._)("div",Tt,[Ot,(0,n._)("table",null,[It,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.data.extractSalesValids,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,m.zw)(e.id_contrato),1),(0,n._)("td",null,(0,m.zw)(e.nome_cliente),1),(0,n._)("td",null,(0,m.zw)(e.plano),1),(0,n._)("td",null,(0,m.zw)(e.status),1),(0,n._)("td",null,(0,m.zw)(e.situacao),1),(0,n._)("td",null,(0,m.zw)(e.data_contrato),1),(0,n._)("td",null,(0,m.zw)(e.data_ativacao),1),(0,n._)("td",null,(0,m.zw)(e.data_vigencia),1)])))),128))])])])])):(0,n.kq)("",!0)],2)):(0,n.kq)("",!0)],64)}const Nt=e=>((0,n.dD)("data-v-7850fc95"),e=e(),(0,n.Cn)(),e),Lt=Nt((()=>(0,n._)("h1",null,"Projeção de vendas para o mês atual",-1))),Yt={class:"data-projection"},Ft=(0,n.Uk)(" Hoje é o dia útil "),$t=(0,n.Uk)(", falta(m) "),Kt=(0,n.Uk)(" dia(s) para acabar seu mês e caso mantenha esse desempenho, terminará o mês com: "),Gt={class:"table-projection"},Jt={class:"item-table"},Qt=Nt((()=>(0,n._)("i",{class:"fi fi-ss-stars"},null,-1))),Xt=Nt((()=>(0,n._)("span",null,"Estrelas:",-1))),el={class:"item-table",style:{color:"#009688"}},al=Nt((()=>(0,n._)("i",{class:"fi fi-ss-rocket-lunch"},null,-1))),tl=Nt((()=>(0,n._)("span",null,"Vendas:",-1))),ll={class:"item-table",style:{color:"#C571E1"}},nl=Nt((()=>(0,n._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),ol=Nt((()=>(0,n._)("span",null,"Meta atingida:",-1))),sl={class:"item-table",style:{border:"none",color:"#24A527"}},il=Nt((()=>(0,n._)("i",{class:"fi fi-sr-sack-dollar"},null,-1))),dl=Nt((()=>(0,n._)("span",null,"Comissão:",-1)));function rl(e,a,t,l,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,m.C_)(["projection",{"mode-l":"light"===t.mode||void 0===t.mode,"mode-d":"dark"===t.mode}])},[Lt,(0,n._)("div",Yt,[(0,n._)("p",null,[Ft,(0,n._)("b",null,(0,m.zw)(t.projection.dateActual),1),$t,(0,n._)("b",null,(0,m.zw)(t.projection.daysMissing),1),Kt]),(0,n._)("div",Gt,[(0,n._)("div",Jt,[Qt,Xt,(0,n._)("span",null,(0,m.zw)(t.projection.stars),1)]),(0,n._)("div",el,[al,tl,(0,n._)("span",null,(0,m.zw)(t.projection.sales),1)]),(0,n._)("div",ll,[nl,ol,(0,n._)("span",null,(0,m.zw)(t.projection.metaPercent)+"%",1)]),(0,n._)("div",sl,[il,dl,(0,n._)("span",null,"R$"+(0,m.zw)(t.projection.commission),1)])])])],2)}var cl={name:"ProjectionSection",props:{mode:{required:!0},projection:{type:Object}}};const ul=(0,s.Z)(cl,[["render",rl],["__scopeId","data-v-7850fc95"]]);var ml=ul,pl={name:"SalesPage",components:{MenuApp:ke,HeaderApp:Se,ProjectionSection:ml},data(){return{mode:W.Z.get("mode"),data:{},filter:{month:"08",actualMonth:null,typeUser:W.Z.get("agerv_function")},modal:!1,dashboard:"",dashStatus:!1,loading:!1,projection:!1}},methods:{modeView:function(e){this.mode=e},getSellers:function(e){this.loading=!0,this.filter.month=e,this.data=null,this.projection=!1,this.dashStatus=!1,P({method:"GET",url:"agerv/dashboard/seller",headers:{Authorization:"Bearer "+W.Z.get("token")},params:{year:"2022",month:this.filter.month}}).then((e=>{this.data=e.data,this.loading=!1,this.projection=!0,this.dashStatus=!0}))},modalView:function(e){this.modal=!0,this.dashboard=e},getMonth:function(){const e=new Date;e.getMonth()<10?this.filter.actualMonth="0"+(e.getMonth()+1):this.filter.actualMonth=(e.getMonth()+1).toString(),this.getSellers(this.filter.actualMonth)}},mounted(){this.getMonth()}};const _l=(0,s.Z)(pl,[["render",Bt],["__scopeId","data-v-7c919112"]]);var vl=_l;const hl={id:"content-app"},gl={id:"layer-app"};function fl(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp");return(0,n.wg)(),(0,n.iD)("div",hl,[(0,n.Wm)(i,{mode:o.mode,system:"ageRv"},null,8,["mode"]),(0,n._)("div",gl,[(0,n.Wm)(d,{onMode:s.modeView},null,8,["onMode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},null,2)])])}var wl={name:"HomePage",components:{MenuApp:ke,HeaderApp:Se},data(){return{mode:W.Z.get("mode")}},methods:{modeView:function(e){this.mode=e}},mounted(){}};const kl=(0,s.Z)(wl,[["render",fl],["__scopeId","data-v-ae94d290"]]);var bl=kl;const yl=e=>((0,n.dD)("data-v-0be932f5"),e=e(),(0,n.Cn)(),e),Dl={id:"content-app"},Cl={id:"layer-app"},Al=yl((()=>(0,n._)("div",{class:"section"},[(0,n._)("h1",null,"Usuários"),(0,n._)("table",null,[(0,n._)("thead",null,[(0,n._)("tr",null," th*5 ")])])],-1))),zl=[Al];function Ml(e,a,t,l,o,s){const i=(0,n.up)("MenuApp"),d=(0,n.up)("HeaderApp");return(0,n.wg)(),(0,n.iD)("div",Dl,[(0,n.Wm)(i,{mode:o.mode,system:"portal-mng"},null,8,["mode"]),(0,n._)("div",Cl,[(0,n.Wm)(d,{onMode:s.modeView},null,8,["onMode"]),(0,n._)("div",{id:"content-page",class:(0,m.C_)({"mode-l-p":"light"===o.mode||void 0===o.mode,"mode-d-p":"dark"===o.mode})},zl,2)])])}var Zl={name:"PanelUsers",components:{MenuApp:ke,HeaderApp:Se},data(){return{mode:W.Z.get("mode")}},methods:{modeView:function(e){this.mode=e}},mounted(){}};const Sl=(0,s.Z)(Zl,[["render",Ml],["__scopeId","data-v-0be932f5"]]);var Vl=Sl;const jl=[{path:"/",name:"login",component:O},{path:"/sistemas",name:"SystemApp",component:Fe,beforeEnter:[ra.auth]},{path:"/gerenciamento/dashboard",name:"PanelDashboard",component:xe,beforeEnter:[ra.auth,ra.management_portal]},{path:"/gerenciamento/usuarios",name:"PanelUsers",component:Vl,beforeEnter:[ra.auth,ra.management_portal]},{path:"/ageReport/home",name:"ReportPage",component:da,beforeEnter:[ra.auth,ra.permission_report]},{path:"/ageRv/comercial/analitico",name:"SalesAnalytics",component:va,beforeEnter:[ra.auth,ra.permission_rv]},{path:"/ageRv/comercial/vendas/dashboard",name:"SalesPage",component:vl,beforeEnter:[ra.auth,ra.permission_rv]},{path:"/ageRv/home",name:"HomePage",component:bl,beforeEnter:[ra.auth,ra.permission_rv]}],xl=(0,u.p7)({history:(0,u.PO)(),routes:jl});var ql=xl,Rl=t(65),Wl=(0,Rl.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,l.ri)(r).use(Wl).use(ql).mount("#app")},4642:function(e,a,t){e.exports=t.p+"img/age_orange.57916d66.png"}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var i=!0,d=0;d<l.length;d++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[d])}))?l.splice(d--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var r=n();void 0!==r&&(a=r)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,s=l[0],i=l[1],d=l[2],r=0;if(s.some((function(a){return 0!==e[a]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(d)var c=d(t)}for(a&&a(l);r<s.length;r++)o=s[r],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},l=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(710)}));l=t.O(l)})();
//# sourceMappingURL=app.20834873.js.map