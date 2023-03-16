"use strict";(self["webpackChunkageportal"]=self["webpackChunkageportal"]||[]).push([[60],{1101:function(e,t,a){a.d(t,{Z:function(){return f}});var s=a(3396),i=a(7139),d=a(9242);const o=e=>((0,s.dD)("data-v-1ae3b8f6"),e=e(),(0,s.Cn)(),e),r={class:"content-card"},n={class:"filters"},l={key:0,id:"reports",class:"animation-down"},c=["onClick"],u=o((()=>(0,s._)("i",{class:"fi fi-rr-document-signed"},null,-1)));function p(e,t,a,o,p,h){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>h.closePage&&h.closePage(...e))},"Voltar"),(0,s._)("div",r,[(0,s._)("h1",null,"Editar acesso - "+(0,i.zw)(a.data.name),1),(0,s._)("div",n,[(0,s.wy)((0,s._)("input",{type:"text",id:"searchReport",name:"searchReport",placeholder:"Buscar relatório...",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=e=>p.searchReport=e)},null,512),[[d.nr,p.searchReport]]),(0,s._)("button",{onClick:t[2]||(t[2]=e=>h.alternateUserAccess())},(0,i.zw)(p.dataUser.access?"Inativar acesso":"Ativar acesso"),1)]),!0===p.status?((0,s.wg)(),(0,s.iD)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.ReportsFiltered,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"report",key:e.id,onClick:t=>h.alternateReportAccess(p.dataUser.id,e.id)},[(0,s._)("div",null,[u,(0,s._)("span",null,(0,i.zw)(e.report),1)]),(0,s._)("span",null,(0,i.zw)(e.access?"Ativo":"Inativo"),1)],8,c)))),128))])):(0,s.kq)("",!0)])],64)}var h=a(8089),m=a(680),g={name:"EditAccess",props:{data:{required:!0}},data(){return{searchReport:"",dataReport:{},status:!1,dataUser:this.data,loading:!0}},methods:{closePage:function(){this.$emit("close-page")},getReports:function(){this.loading=!0,this.status=!1,this.dataReport={},(0,h.m)({method:"GET",url:`admin/reports-permitteds/${this.data.id}`,headers:{Authorization:"Bearer"+m.Z.get("token")}}).then((e=>{this.dataReport=e.data,this.loading=!1,this.status=!0}))},alternateUserAccess:function(){this.loading=!0,(0,h.m)({method:"PUT",url:`admin/access-systems/alternate/${this.data.id}`,headers:{Authorization:"Bearer"+m.Z.get("token")},params:{system:"agereport"}}).then((e=>{this.dataUser.access=e.data.access,this.loading=!1,alert(e.data.msg)}))},alternateReportAccess:function(e,t){this.loading=!0,(0,h.m)({method:"PUT",url:`admin/reports-permitteds/alternate/${e}/${t}`,headers:{Authorization:"Bearer "+m.Z.get("token")}}).then((e=>{this.loading=!1,alert(e.data.msg),this.getReports()}))}},computed:{ReportsFiltered:function(){let e=[];return e=this.dataReport.filter((e=>e.report.toLowerCase().indexOf(this.searchReport.toLowerCase())>-1)),e}},mounted(){this.getReports()}},v=a(89);const _=(0,v.Z)(g,[["render",p],["__scopeId","data-v-1ae3b8f6"]]);var f=_},9988:function(e,t,a){a.d(t,{Z:function(){return V}});var s=a(3396),i=a(7139),d=a(9242);const o=e=>((0,s.dD)("data-v-224676c8"),e=e(),(0,s.Cn)(),e),r={class:"edit-report"},n={class:"content-edit"},l={action:""},c={class:"inputs-text"},u=o((()=>(0,s._)("label",{for:"name"},"Nome: ",-1))),p={class:"inputs-text"},h=o((()=>(0,s._)("label",{for:"name-archive"},"Nome do arquivo: ",-1))),m={class:"inputs-text"},g=o((()=>(0,s._)("label",{for:"query"},"Query do relatório: ",-1))),v={class:"inputs-text"},_=o((()=>(0,s._)("label",{for:"database"},"Banco de dados disponíveis: ",-1))),f=["selected"],y=["selected"],w=["selected"],R=["selected"],k={class:"inputs-text"},b=o((()=>(0,s._)("label",{for:"period"},"Tipo de filtro",-1))),q=["selected"],P=["selected"],C=["selected"],A={class:"inputs-text"},U=o((()=>(0,s._)("label",{for:"headers"},"Colunas do arquivo: ",-1)));function D(e,t,a,o,D,x){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("h1",null,"Relatório - "+(0,i.zw)(D.data.name),1),(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>x.returnPage&&x.returnPage(...e))},"Voltar"),(0,s._)("div",n,[(0,s._)("form",l,[(0,s._)("div",c,[u,(0,s.wy)((0,s._)("input",{autocomplete:"off",type:"text",name:"name",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>D.data.name=e),required:""},null,512),[[d.nr,D.data.name]])]),(0,s._)("div",p,[h,(0,s.wy)((0,s._)("input",{autocomplete:"off",type:"text",name:"name-archive",id:"name-archive","onUpdate:modelValue":t[2]||(t[2]=e=>D.data.namearchive=e),required:""},null,512),[[d.nr,D.data.namearchive]])]),(0,s._)("div",m,[g,(0,s.wy)((0,s._)("textarea",{autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=e=>D.data.query=e),name:"query",required:""},"\r\n\r\n          ",512),[[d.nr,D.data.query]])]),(0,s._)("div",v,[_,(0,s.wy)((0,s._)("select",{name:"database",id:"database",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>D.data.database=e)},[(0,s._)("option",{value:"",selected:""!==D.data.database,disabled:""},"--- Nenhuma opção selecionada ---",8,f),(0,s._)("option",{value:"pgsql",selected:"pgsql"===D.data.database},"Voalle",8,y),(0,s._)("option",{value:"mysql_take",selected:"mysql_take"===D.data.database},"TakeBlip",8,w),(0,s._)("option",{value:"mysql",selected:"mysql"===D.data.database},"Portal",8,R)],512),[[d.bM,D.data.database]])]),(0,s._)("div",k,[b,(0,s.wy)((0,s._)("select",{name:"period",id:"period",required:"","onUpdate:modelValue":t[5]||(t[5]=e=>D.data.type=e)},[(0,s._)("option",{value:"0",selected:0===D.data.isPeriod||0===D.data.isPeriodHour},"--- Nenhum filtro ---",8,q),(0,s._)("option",{value:"1",selected:1===D.data.isPeriod},"Data",8,P),(0,s._)("option",{value:"2",selected:1===D.data.isPeriodHour},"Data e hora",8,C)],512),[[d.bM,D.data.type]])]),(0,s._)("div",A,[U,(0,s.wy)((0,s._)("input",{autocomplete:"off",type:"text",name:"headers",id:"headers","onUpdate:modelValue":t[6]||(t[6]=e=>D.data.headers=e),required:"",placeholder:"separar com ;"},null,512),[[d.nr,D.data.headers]])]),0!==this.id?((0,s.wg)(),(0,s.iD)("input",{key:0,type:"submit",value:"Alterar",onClick:t[7]||(t[7]=(0,d.iM)(((...e)=>x.editReport&&x.editReport(...e)),["prevent"]))})):((0,s.wg)(),(0,s.iD)("input",{key:1,type:"submit",value:"Cadastrar",onClick:t[8]||(t[8]=(0,d.iM)(((...e)=>x.newReport&&x.newReport(...e)),["prevent"]))}))])])])}var x=a(8089),E=a(680),z={name:"EditReport",props:{id:{type:Number,required:!0}},data(){return{data:{name:"",namearchive:"",query:"",database:"",isPeriod:0,isPeriodHour:0,isCompetence:0,headers:"",type:0},msg:""}},methods:{getReport:function(){0!==this.id&&(0,x.m)({method:"GET",url:"agereport/reports/"+this.id,headers:{Authorization:"Bearer"+E.Z.get("token")}}).then((e=>{this.data.name=e.data.data.nome,this.data.namearchive=e.data.data.nome_arquivo,this.data.query=e.data.data.query,this.data.database=e.data.data.banco_solicitado,this.data.isPeriod=e.data.data.isPeriodo,this.data.isPeriodHour=e.data.data.isPeriodoHora,this.data.headers=e.data.data.cabecalhos}))},editReport:function(){(0,x.m)({method:"GET",url:`agereport/reports/${this.id}/edit`,params:this.data}).then((e=>{this.nameReport=e.data.data.nome,this.data.name=e.data.data.nome,this.data.namearchive=e.data.data.nome_arquivo,this.data.query=e.data.data.query,this.data.database=e.data.data.banco_solicitado,this.data.isPeriod=e.data.data.isPeriodo,this.data.isPeriodHour=e.data.data.isPeriodoHora,this.data.headers=e.data.data.cabecalhos,this.$emit("msg",{status:"sucess",msg:e.data.msg})}))},newReport:function(){(0,x.m)({method:"POST",url:"agereport/reports",headers:{Authorization:"Bearer "+E.Z.get("token")},data:{name:this.data.name,namearchive:this.data.namearchive,query:this.data.query,database:this.data.database,isPeriod:this.data.isPeriod,isPeriodHour:this.data.isPeriodHour,headers:this.data.headers}}).then((e=>{alert(e.data.msg)}))},returnPage:function(){this.$emit("close-page")}},mounted(){this.getReport()}},Z=a(89);const H=(0,Z.Z)(z,[["render",D],["__scopeId","data-v-224676c8"]]);var V=H},7811:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var s=a(3396),i=a(7139),d=a(9242);const o=e=>((0,s.dD)("data-v-51a14727"),e=e(),(0,s.Cn)(),e),r={id:"content-app"},n={id:"layer-app"},l={key:0,class:"management"},c={class:"container-mng"},u={class:"menu-mng"},p=o((()=>(0,s._)("i",{class:"fi fi-rr-users"},null,-1))),h=o((()=>(0,s._)("span",null,"Usuários",-1))),m=[p,h],g=o((()=>(0,s._)("i",{class:"fi fi-rr-search-alt"},null,-1))),v=o((()=>(0,s._)("span",null,"Relatórios",-1))),_=[g,v],f={key:0,class:"content-users animation-down"},y={class:"filters"},w={class:"list"},R=o((()=>(0,s._)("div",{class:"list-header"},[(0,s._)("div",{class:"item-list-header",style:{"text-align":"left",width:"25%"}}," Nome "),(0,s._)("div",{class:"item-list-header",style:{"text-align":"left",width:"25%"}}," E-mail "),(0,s._)("div",{class:"item-list-header",style:{"text-align":"center",width:"25%"}}," Acesso ")],-1))),k={key:0,class:"items-list-body animation-down"},b=["onClick"],q={class:"item-list-body",style:{"text-align":"left",width:"25%"}},P={class:"item-list-body",style:{"text-align":"left",width:"25%"}},C={class:"item-list-body",style:{"text-align":"center",width:"25%"}},A={key:1,class:"content-reports animation-down"},U={class:"filters"},D={key:0,id:"reports",class:"animation-down"},x=["onClick"],E=o((()=>(0,s._)("i",{class:"fi fi-rr-document-signed"},null,-1))),z={key:0,class:"loading-bar"};function Z(e,t,a,o,p,h){const g=(0,s.up)("MenuApp"),v=(0,s.up)("HeaderApp"),Z=(0,s.up)("EditReport"),H=(0,s.up)("EditAccess");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",r,[(0,s.Wm)(g,{mode:p.mode,system:"report"},null,8,["mode"]),(0,s._)("div",n,[(0,s.Wm)(v,{onMode:h.modeView},null,8,["onMode"]),(0,s._)("div",{id:"content-page",class:(0,i.C_)({"mode-l-p":"light"===p.mode||void 0===p.mode,"mode-d-p":"dark"===p.mode})},["Usuários"===p.page||"Relatórios"===p.page?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("h1",null,"Gerenciamento - "+(0,i.zw)(p.page),1),(0,s._)("div",c,[(0,s._)("div",u,[(0,s._)("nav",null,[(0,s._)("ul",null,[(0,s._)("li",{class:(0,i.C_)({selected:"Usuários"===p.page}),onClick:t[0]||(t[0]=e=>p.page="Usuários")},m,2),(0,s._)("li",{class:(0,i.C_)({selected:"Relatórios"===p.page}),onClick:t[1]||(t[1]=e=>p.page="Relatórios")},_,2)])])]),"Usuários"===p.page?((0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("div",y,[(0,s.wy)((0,s._)("input",{type:"text",id:"search",name:"search",placeholder:"Buscar e-mail...",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=e=>p.search=e)},null,512),[[d.nr,p.search]])]),(0,s._)("div",w,[R,!0===p.status?((0,s.wg)(),(0,s.iD)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.UsersFiltered,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"list-body",key:e.id,onClick:t=>h.editAccess(e.id,e.name,e.access)},[(0,s._)("div",q,(0,i.zw)(e.name),1),(0,s._)("div",P,(0,i.zw)(e.email),1),(0,s._)("div",C,(0,i.zw)(e.access?"Ativo":"Inativo"),1)],8,b)))),128))])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0),"Relatórios"===p.page?((0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",U,[(0,s.wy)((0,s._)("input",{type:"text",id:"searchReport",name:"searchReport",placeholder:"Buscar relatório...",autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=e=>p.searchReport=e)},null,512),[[d.nr,p.searchReport]]),(0,s._)("button",{onClick:t[4]||(t[4]=e=>h.editReport(0,""))},"Novo relatório")]),!0===p.status?((0,s.wg)(),(0,s.iD)("div",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.ReportsFiltered,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"report",key:t,onClick:t=>h.editReport(e.id,e.nome)},[E,(0,s._)("span",null,(0,i.zw)(e.nome),1)],8,x)))),128))])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0),"editReport"===p.page?((0,s.wg)(),(0,s.j4)(Z,{key:1,id:p.id,name:p.report,onMsg:h.editMsg,onClosePage:t[5]||(t[5]=e=>h.closePage("reports"))},null,8,["id","name","onMsg"])):(0,s.kq)("",!0)],2)])]),!0===p.loading?((0,s.wg)(),(0,s.iD)("div",z)):(0,s.kq)("",!0),"editAccess"===p.modal?((0,s.wg)(),(0,s.j4)(H,{key:1,onClosePage:t[6]||(t[6]=e=>h.closePage("users")),data:p.dataEdit},null,8,["data"])):(0,s.kq)("",!0)],64)}var H=a(8489),V=a(156),B=a(680),M=a(8089),T=a(9988),$=a(1101),N={name:"DashboardPageReport",components:{MenuApp:H.Z,HeaderApp:V.Z,EditReport:T.Z,EditAccess:$.Z},data(){return{mode:B.Z.get("mode"),page:"Usuários",search:"",data:null,status:!1,dataReport:null,searchReport:"",loading:!0,id:0,report:"",modal:"",dataEdit:{name:"",id:0,access:!1}}},methods:{modeView:function(e){this.mode=e},getUsers:function(){this.status=!1,(0,M.m)({method:"GET",url:"admin/access-systems",params:{system:"agereport"},headers:{Authorization:"Bearer"+B.Z.get("token")}}).then((e=>{this.data=e.data,this.status=!0,this.loading=!1})).catch((e=>{console.log(e)}))},getReports:function(){this.status=!1,(0,M.m)({method:"GET",url:"agereport/report/reports",headers:{Authorization:"Bearer"+B.Z.get("token")}}).then((e=>{this.dataReport=e.data,this.status=!0,this.loading=!1}))},editReport:function(e,t){this.page="editReport",this.id=e,this.report=t},editMsg:function(e){alert(e.msg)},closePage:function(e){"reports"===e&&(this.page="Relatórios",this.id=0,this.report=""),"users"===e&&(this.modal="")},editAccess:function(e,t,a){this.dataEdit.id=e,this.dataEdit.name=t,this.dataEdit.access=a,this.modal="editAccess"}},computed:{UsersFiltered:function(){let e=[];return e=this.data.filter((e=>e.name.toLowerCase().indexOf(this.search.toLowerCase())>-1)),e},ReportsFiltered:function(){let e=[];return e=this.dataReport.filter((e=>e.nome.toLowerCase().indexOf(this.searchReport.toLowerCase())>-1)),e}},mounted(){this.getUsers(),this.getReports()}},F=a(89);const G=(0,F.Z)(N,[["render",Z],["__scopeId","data-v-51a14727"]]);var I=G}}]);
//# sourceMappingURL=60.0f20cbe6.js.map