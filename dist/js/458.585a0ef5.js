"use strict";(self["webpackChunkageportal"]=self["webpackChunkageportal"]||[]).push([[458],{9988:function(e,a,t){t.d(a,{Z:function(){return A}});var d=t(3396),o=t(7139),i=t(9242);const r=e=>((0,d.dD)("data-v-224676c8"),e=e(),(0,d.Cn)(),e),s={class:"edit-report"},n={class:"content-edit"},l={action:""},u={class:"inputs-text"},c=r((()=>(0,d._)("label",{for:"name"},"Nome: ",-1))),p={class:"inputs-text"},h=r((()=>(0,d._)("label",{for:"name-archive"},"Nome do arquivo: ",-1))),m={class:"inputs-text"},g=r((()=>(0,d._)("label",{for:"query"},"Query do relatório: ",-1))),v={class:"inputs-text"},f=r((()=>(0,d._)("label",{for:"database"},"Banco de dados disponíveis: ",-1))),_=["selected"],y=["selected"],R=["selected"],b=["selected"],q={class:"inputs-text"},w=r((()=>(0,d._)("label",{for:"period"},"Tipo de filtro",-1))),k=["selected"],P=["selected"],C=["selected"],x={class:"inputs-text"},D=r((()=>(0,d._)("label",{for:"headers"},"Colunas do arquivo: ",-1)));function E(e,a,t,r,E,H){return(0,d.wg)(),(0,d.iD)("div",s,[(0,d._)("h1",null,"Relatório - "+(0,o.zw)(E.data.name),1),(0,d._)("button",{onClick:a[0]||(a[0]=(...e)=>H.returnPage&&H.returnPage(...e))},"Voltar"),(0,d._)("div",n,[(0,d._)("form",l,[(0,d._)("div",u,[c,(0,d.wy)((0,d._)("input",{autocomplete:"off",type:"text",name:"name",id:"name","onUpdate:modelValue":a[1]||(a[1]=e=>E.data.name=e),required:""},null,512),[[i.nr,E.data.name]])]),(0,d._)("div",p,[h,(0,d.wy)((0,d._)("input",{autocomplete:"off",type:"text",name:"name-archive",id:"name-archive","onUpdate:modelValue":a[2]||(a[2]=e=>E.data.namearchive=e),required:""},null,512),[[i.nr,E.data.namearchive]])]),(0,d._)("div",m,[g,(0,d.wy)((0,d._)("textarea",{autocomplete:"off","onUpdate:modelValue":a[3]||(a[3]=e=>E.data.query=e),name:"query",required:""},"\r\n\r\n          ",512),[[i.nr,E.data.query]])]),(0,d._)("div",v,[f,(0,d.wy)((0,d._)("select",{name:"database",id:"database",required:"","onUpdate:modelValue":a[4]||(a[4]=e=>E.data.database=e)},[(0,d._)("option",{value:"",selected:""!==E.data.database,disabled:""},"--- Nenhuma opção selecionada ---",8,_),(0,d._)("option",{value:"pgsql",selected:"pgsql"===E.data.database},"Voalle",8,y),(0,d._)("option",{value:"mysql_take",selected:"mysql_take"===E.data.database},"TakeBlip",8,R),(0,d._)("option",{value:"mysql",selected:"mysql"===E.data.database},"Portal",8,b)],512),[[i.bM,E.data.database]])]),(0,d._)("div",q,[w,(0,d.wy)((0,d._)("select",{name:"period",id:"period",required:"","onUpdate:modelValue":a[5]||(a[5]=e=>E.data.type=e)},[(0,d._)("option",{value:"0",selected:0===E.data.isPeriod||0===E.data.isPeriodHour},"--- Nenhum filtro ---",8,k),(0,d._)("option",{value:"1",selected:1===E.data.isPeriod},"Data",8,P),(0,d._)("option",{value:"2",selected:1===E.data.isPeriodHour},"Data e hora",8,C)],512),[[i.bM,E.data.type]])]),(0,d._)("div",x,[D,(0,d.wy)((0,d._)("input",{autocomplete:"off",type:"text",name:"headers",id:"headers","onUpdate:modelValue":a[6]||(a[6]=e=>E.data.headers=e),required:"",placeholder:"separar com ;"},null,512),[[i.nr,E.data.headers]])]),0!==this.id?((0,d.wg)(),(0,d.iD)("input",{key:0,type:"submit",value:"Alterar",onClick:a[7]||(a[7]=(0,i.iM)(((...e)=>H.editReport&&H.editReport(...e)),["prevent"]))})):((0,d.wg)(),(0,d.iD)("input",{key:1,type:"submit",value:"Cadastrar",onClick:a[8]||(a[8]=(0,i.iM)(((...e)=>H.newReport&&H.newReport(...e)),["prevent"]))}))])])])}var H=t(8089),U=t(680),V={name:"EditReport",props:{id:{type:Number,required:!0}},data(){return{data:{name:"",namearchive:"",query:"",database:"",isPeriod:0,isPeriodHour:0,isCompetence:0,headers:"",type:0},msg:""}},methods:{getReport:function(){0!==this.id&&(0,H.m)({method:"GET",url:"agereport/reports/"+this.id,headers:{Authorization:"Bearer"+U.Z.get("token")}}).then((e=>{this.data.name=e.data.data.nome,this.data.namearchive=e.data.data.nome_arquivo,this.data.query=e.data.data.query,this.data.database=e.data.data.banco_solicitado,this.data.isPeriod=e.data.data.isPeriodo,this.data.isPeriodHour=e.data.data.isPeriodoHora,this.data.headers=e.data.data.cabecalhos}))},editReport:function(){(0,H.m)({method:"GET",url:`agereport/reports/${this.id}/edit`,params:this.data}).then((e=>{this.nameReport=e.data.data.nome,this.data.name=e.data.data.nome,this.data.namearchive=e.data.data.nome_arquivo,this.data.query=e.data.data.query,this.data.database=e.data.data.banco_solicitado,this.data.isPeriod=e.data.data.isPeriodo,this.data.isPeriodHour=e.data.data.isPeriodoHora,this.data.headers=e.data.data.cabecalhos,this.$emit("msg",{status:"sucess",msg:e.data.msg})}))},newReport:function(){(0,H.m)({method:"POST",url:"agereport/reports",headers:{Authorization:"Bearer "+U.Z.get("token")},data:{name:this.data.name,namearchive:this.data.namearchive,query:this.data.query,database:this.data.database,isPeriod:this.data.isPeriod,isPeriodHour:this.data.isPeriodHour,headers:this.data.headers}}).then((e=>{alert(e.data.msg)}))},returnPage:function(){this.$emit("close-page")}},mounted(){this.getReport()}},M=t(89);const Z=(0,M.Z)(V,[["render",E],["__scopeId","data-v-224676c8"]]);var A=Z},6458:function(e,a,t){t.r(a),t.d(a,{default:function(){return q}});var d=t(3396),o=t(9242),i=t(7139);const r=e=>((0,d.dD)("data-v-4b0a9747"),e=e(),(0,d.Cn)(),e),s={key:0,class:"management"},n=r((()=>(0,d._)("h1",null,"Gerenciamentos - Relatórios",-1))),l={class:"container-mng"},u={key:0,class:"content-reports animation-down"},c={class:"filters"},p={key:0,id:"reports",class:"animation-down"},h=["onClick"],m=r((()=>(0,d._)("i",{class:"fi fi-rr-document-signed"},null,-1)));function g(e,a,t,r,g,v){const f=(0,d.up)("EditReport");return(0,d.wg)(),(0,d.iD)(d.HY,null,["Relatórios"===g.page?((0,d.wg)(),(0,d.iD)("div",s,[n,(0,d._)("div",l,["Relatórios"===g.page?((0,d.wg)(),(0,d.iD)("div",u,[(0,d._)("div",c,[(0,d.wy)((0,d._)("input",{type:"text",id:"searchReport",name:"searchReport",placeholder:"Buscar relatório...",autocomplete:"off","onUpdate:modelValue":a[0]||(a[0]=e=>g.searchReport=e)},null,512),[[o.nr,g.searchReport]]),(0,d._)("button",{onClick:a[1]||(a[1]=e=>v.editReport(0,""))},"Novo relatório")]),!0===g.status?((0,d.wg)(),(0,d.iD)("div",p,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(v.ReportsFiltered,((e,a)=>((0,d.wg)(),(0,d.iD)("div",{class:"report",key:a,onClick:a=>v.editReport(e.id,e.nome)},[m,(0,d._)("span",null,(0,i.zw)(e.nome),1)],8,h)))),128))])):(0,d.kq)("",!0)])):(0,d.kq)("",!0)])])):(0,d.kq)("",!0),"editReport"===g.page?((0,d.wg)(),(0,d.j4)(f,{key:1,id:g.id,name:g.report,onMsg:v.editMsg,onClosePage:a[2]||(a[2]=e=>v.closePage("reports"))},null,8,["id","name","onMsg"])):(0,d.kq)("",!0)],64)}var v=t(680),f=t(8089),_=t(9988),y={name:"ReportReportsManagement",components:{EditReport:_.Z},data(){return{mode:v.Z.get("mode"),page:"Relatórios",search:"",data:null,status:!1,dataReport:null,searchReport:"",loading:!0,id:0,report:"",modal:"",dataEdit:{name:"",id:0,access:!1}}},methods:{modeView:function(e){this.mode=e},getUsers:function(){this.status=!1,(0,f.m)({method:"GET",url:"admin/access-systems",params:{system:"agereport"},headers:{Authorization:"Bearer"+v.Z.get("token")}}).then((e=>{this.data=e.data,this.status=!0,this.loading=!1})).catch((e=>{console.log(e)}))},getReports:function(){this.status=!1,(0,f.m)({method:"GET",url:"agereport/report/reports",headers:{Authorization:"Bearer"+v.Z.get("token")}}).then((e=>{this.dataReport=e.data,this.status=!0,this.loading=!1}))},editReport:function(e,a){this.page="editReport",this.id=e,this.report=a},editMsg:function(e){alert(e.msg)},closePage:function(e){"reports"===e&&(this.page="Relatórios",this.id=0,this.report=""),"users"===e&&(this.modal="")},editAccess:function(e,a,t){this.dataEdit.id=e,this.dataEdit.name=a,this.dataEdit.access=t,this.modal="editAccess"}},computed:{UsersFiltered:function(){let e=[];return e=this.data.filter((e=>e.name.toLowerCase().indexOf(this.search.toLowerCase())>-1)),e},ReportsFiltered:function(){let e=[];return e=this.dataReport.filter((e=>e.nome.toLowerCase().indexOf(this.searchReport.toLowerCase())>-1)),e}},mounted(){this.getUsers(),this.getReports()}},R=t(89);const b=(0,R.Z)(y,[["render",g],["__scopeId","data-v-4b0a9747"]]);var q=b}}]);
//# sourceMappingURL=458.585a0ef5.js.map