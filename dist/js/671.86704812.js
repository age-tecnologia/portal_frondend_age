(self["webpackChunkageportal"]=self["webpackChunkageportal"]||[]).push([[671],{8671:function(A,t,e){"use strict";e.r(t),e.d(t,{default:function(){return ut}});var a=e(3396),s=e(7139);const o=A=>((0,a.dD)("data-v-c453d2a6"),A=A(),(0,a.Cn)(),A),d={class:"calendar"},i={class:"filters"},n={class:"grid-container"},r={class:"header"},l=(0,a.uE)('<div class="capacity" data-v-c453d2a6><div class="box" data-v-c453d2a6><div class="title" data-v-c453d2a6>Capacidade de instalações</div><div class="item" data-v-c453d2a6>Seg a Sex:</div><div class="item" data-v-c453d2a6>Manhã: 116</div><div class="item" data-v-c453d2a6>Tarde: 174</div><div class="item" data-v-c453d2a6>Sábado:</div><div class="item" data-v-c453d2a6>Manhã: 70</div><div class="item" data-v-c453d2a6>Tarde: 106</div></div><div class="box" data-v-c453d2a6><div class="title" data-v-c453d2a6>Capacidade de visitas técnicas</div><div class="item" data-v-c453d2a6>Seg a Sex:</div><div class="item" data-v-c453d2a6>Manhã: 62</div><div class="item" data-v-c453d2a6>Tarde: 57</div><div class="item" data-v-c453d2a6>Sábado:</div><div class="item" data-v-c453d2a6>Manhã: 38</div><div class="item" data-v-c453d2a6>Tarde: 33</div></div><div class="box" data-v-c453d2a6><div class="title" data-v-c453d2a6>Capacidade de MP/PME</div><div class="item" data-v-c453d2a6>Seg a Sex:</div><div class="item" data-v-c453d2a6>Manhã: 10</div><div class="item" data-v-c453d2a6>Tarde: 10</div><div class="item" data-v-c453d2a6>Sábado:</div><div class="item" data-v-c453d2a6>Manhã: 10</div><div class="item" data-v-c453d2a6>Tarde: 10</div></div></div>',1),c={class:"pages"},g=o((()=>(0,a._)("i",{class:"fi fi-rs-filter"},null,-1))),C=[g],u={class:"dashboards"},h={class:"list"},I={key:1,class:"loading"};function Q(A,t,e,o,g,Q){const B=(0,a.up)("CalendarComponent"),D=(0,a.up)("ShortFilters"),p=(0,a.up)("DashboardSchedule"),m=(0,a.up)("ListData"),b=(0,a.up)("LoadingSpinner"),w=(0,a.up)("DashboardPage");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:"modal-filters",style:(0,s.j5)({display:g.modalFilter?"block":"none"})},[(0,a._)("div",d,[(0,a.Wm)(B,{onGetDateFilter:Q.getDateFilter,pendingConsult:g.pendingConsult},null,8,["onGetDateFilter","pendingConsult"])]),(0,a._)("div",i,[(0,a.Wm)(D,{dataFilters:this.filters.typeNote,onFilterData:Q.getData},null,8,["dataFilters","onFilterData"])])],4),(0,a._)("div",n,[(0,a._)("div",r,[(0,a._)("h1",null,(0,s.zw)(g.page)+" - Agenda",1),l,(0,a._)("div",c,[(0,a._)("button",{class:(0,s.C_)({selected:"Painel"===g.page}),onClick:t[0]||(t[0]=A=>g.page="Painel")},"Painel",2),g.dataItems.length>0&&!g.loading?((0,a.wg)(),(0,a.iD)("button",{key:0,class:(0,s.C_)({selected:"Dashboard"===g.page}),onClick:t[1]||(t[1]=A=>g.page="Dashboard")},"Dashboard",2)):(0,a.kq)("",!0),g.filters.typeNote.length>0?((0,a.wg)(),(0,a.iD)("button",{key:1,class:(0,s.C_)({selected:g.modalFilter}),onClick:t[2]||(t[2]=A=>g.modalFilter=!g.modalFilter)},C,2)):(0,a.kq)("",!0)])]),"Painel"===g.page?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"panel",onClick:t[3]||(t[3]=A=>g.modalFilter=!1)},[(0,a._)("div",u,[(0,a.Wm)(p,{dataDashboards:g.dashboardData,onFilterData:Q.filteredData,ref:"dashboardScheduleRef"},null,8,["dataDashboards","onFilterData"])]),(0,a._)("div",h,[g.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,data:this.listData.data,typeFilter:this.listData.typeFilter,onDownloadExcel:Q.download,onGetClientUnique:Q.getNameClient,onExecuteNote:Q.executeNote},null,8,["data","typeFilter","onDownloadExcel","onGetClientUnique","onExecuteNote"])),g.loading?((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)(b)])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),"Dashboard"===g.page?((0,a.wg)(),(0,a.j4)(w,{key:1,dataItems:g.dataItems,ref:"dashboardPageRef"},null,8,["dataItems"])):(0,a.kq)("",!0)])],64)}e(7658);var B=e(65),D=e(8089),p=e(680),m=e(9372);const b=A=>((0,a.dD)("data-v-1a36dd5e"),A=A(),(0,a.Cn)(),A),w={class:"calendar-container"},v={id:"calendar"},E={class:"items"},f=b((()=>(0,a._)("i",{class:"fi fi-sr-angle-left"},null,-1))),k=[f],_=b((()=>(0,a._)("i",{class:"fi fi-sr-angle-right"},null,-1))),y=[_],P=["onClick"],x={key:0,class:"day"},M={key:1};function J(A,t,e,o,d,i){return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",v,[(0,a._)("table",null,[(0,a._)("caption",null,[(0,a._)("div",E,[(0,a._)("button",{onClick:t[0]||(t[0]=(...A)=>i.prevMonth&&i.prevMonth(...A))},k),(0,a._)("span",null,(0,s.zw)(d.monthNames[d.currentMonth])+" "+(0,s.zw)(d.currentYear),1),(0,a._)("button",{onClick:t[1]||(t[1]=(...A)=>i.nextMonth&&i.nextMonth(...A))},y)])]),(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.daysOfWeek,(A=>((0,a.wg)(),(0,a.iD)("th",{key:A},(0,s.zw)(A),1)))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.weeks,((A,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(A,(A=>((0,a.wg)(),(0,a.iD)("td",{key:A.date,onClick:t=>{i.selectDay(A),i.getData(A)}},[A.date===d.daySelected?((0,a.wg)(),(0,a.iD)("div",x,(0,s.zw)(A.date),1)):((0,a.wg)(),(0,a.iD)("div",M,(0,s.zw)(A.date),1))],8,P)))),128))])))),128))])])])])}var N={name:"CalendarComponent",props:["pendingConsult"],emits:["getDateFilter"],data(){return{monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],daysOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],currentYear:null,currentMonth:null,weeks:[],daySelected:""}},mounted(){const A=new Date;this.currentYear=A.getFullYear(),this.currentMonth=A.getMonth(),this.displayCalendar()},methods:{displayCalendar(){const A=new Date(this.currentYear,this.currentMonth+1,0).getDate(),t=new Date(this.currentYear,this.currentMonth,1).getDay(),e=new Date(this.currentYear,this.currentMonth,A).getDay(),a=[];let s=[];for(let o=0;o<t;o++)s.push({});for(let o=1;o<=A;o++)7===s.length&&(a.push(s),s=[]),s.push({date:o});for(let o=e+1;o<=6;o++)s.push({});a.push(s),this.weeks=a,this.selectDay({date:(new Date).getDate()})},isCurrentDay(A){const t=new Date;return A.date===t.getDate()&&this.currentMonth===t.getMonth()&&this.currentYear===t.getFullYear()},isCurrentMonth(){const A=new Date;return this.currentMonth===A.getMonth()&&this.currentYear===A.getFullYear()},prevMonth(){0===this.currentMonth?(this.currentYear--,this.currentMonth=11):this.currentMonth--,this.displayCalendar()},nextMonth(){11===this.currentMonth?(this.currentYear++,this.currentMonth=0):this.currentMonth++,this.displayCalendar()},selectDay(A){this.pendingConsult||(this.daySelected=A.date),this.getData(A)},getData(A){let t=this.currentYear,e=this.currentMonth+1<10?`0${this.currentMonth+1}`:this.currentMonth+1,a=A.date<10?`0${A.date}`:A.date;this.pendingConsult?alert("aguarde a consulta!"):this.$emit("getDateFilter",`${t}-${e}-${a}`)}}},z=e(89);const Y=(0,z.Z)(N,[["render",J],["__scopeId","data-v-1a36dd5e"]]);var F=Y;const H={id:"dashboards"},T=["onClick"],S={class:"container-icon"},G={class:"icon"},L=["src"],O={class:"container-info"},K={class:"info"},j={class:"title"},U={class:"value"};function X(A,t,o,d,i,n){return(0,a.wg)(),(0,a.iD)("div",H,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.dashboards,((A,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"dashboard",onClick:t=>n.filterData(A.typeFilter),key:t},[(0,a._)("div",S,[(0,a._)("div",G,[(0,a._)("img",{src:e(7647)("./"+A.img_src),alt:"icone"},null,8,L)])]),(0,a._)("div",O,[(0,a._)("div",K,[(0,a._)("div",j,[(0,a._)("span",null,(0,s.zw)(A.label),1)]),(0,a._)("div",U,[(0,a._)("span",null,(0,s.zw)(A.value),1)])])])],8,T)))),128))])}var W={name:"DashboardSchedule",props:["dataDashboards"],emits:["filterData"],data(){return{dashboards:[],dashboardData:null}},methods:{filterData(A){this.$emit("filterData",A)},updateDashboard:function(){console.log("updateDashboard"),this.dashboards=[{img_src:"servico-tecnico.png",label:"Total do dia",value:this.dataDashboards.total,typeFilter:"all"},{img_src:"manha.png",label:"Período da manhã",value:this.dataDashboards.turn.morning,typeFilter:"morning"},{img_src:"tarde.png",label:"Período da tarde",value:this.dataDashboards.turn.afternoon,typeFilter:"afternoon"},{img_src:"suporte-tecnico.png",label:"Sem téc. atribuído",value:this.dataDashboards.notAtt,typeFilter:"notAtt"},{img_src:"agendado.png",label:"Executada",value:this.dataDashboards.executed,typeFilter:"executed"},{img_src:"nao-agendado.png",label:"Não Executada",value:this.dataDashboards.notExecuted,typeFilter:"notExecuted"}]}},beforeMount(){this.dashboards=[{img_src:"servico-tecnico.png",label:"Total do dia",value:this.dataDashboards.total,typeFilter:"all"},{img_src:"manha.png",label:"Período da manhã",value:this.dataDashboards.turn.morning,typeFilter:"morning"},{img_src:"tarde.png",label:"Período da tarde",value:this.dataDashboards.turn.afternoon,typeFilter:"afternoon"},{img_src:"suporte-tecnico.png",label:"Sem téc. atribuído",value:this.dataDashboards.notAtt,typeFilter:"notAtt"},{img_src:"agendado.png",label:"Executada",value:this.dataDashboards.executed,typeFilter:"executed"},{img_src:"nao-agendado.png",label:"Não Executada",value:this.dataDashboards.notExecuted,typeFilter:"notExecuted"}]}};const R=(0,z.Z)(W,[["render",X],["__scopeId","data-v-5b760b7a"]]);var Z=R,q=e(9242);const V=A=>((0,a.dD)("data-v-7eb4838e"),A=A(),(0,a.Cn)(),A),$={class:"container-list-data"},AA={class:"options-list-data"},tA={class:"search"},eA={key:0,class:"buttons"},aA={key:0,id:"list-data"},sA={class:"headers-list"},oA={class:"body-list"},dA={class:"body",style:{display:"flex","align-items":"center",gap:".5vw","justify-content":"center"}},iA=["onClick"],nA=V((()=>(0,a._)("i",{class:"fi fi-rs-comment-alt-check"},null,-1))),rA=[nA],lA=["onClick"],cA=V((()=>(0,a._)("i",{class:"fi fi-rs-redo"},null,-1))),gA=[cA],CA={class:"body"},uA={class:"body"},hA={class:"body"},IA={class:"body"},QA={class:"body"},BA={class:"body"},DA={class:"body"},pA={class:"body"},mA={class:"body"},bA={class:"body"},wA={class:"body"},vA={class:"body"},EA={class:"body"},fA={class:"body"},kA={class:"body"},_A={class:"body"},yA={class:"body"};function PA(A,t,e,o,d,i){return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",AA,[(0,a._)("div",tA,[(0,a.wy)((0,a._)("input",{type:"text",name:"search",id:"search",placeholder:"Buscar cliente...",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=A=>d.search=A),onKeyup:t[1]||(t[1]=(0,q.D2)(((...A)=>i.getClientUnique&&i.getClientUnique(...A)),["enter"]))},null,544),[[q.nr,d.search]])]),e.data.length>0?((0,a.wg)(),(0,a.iD)("div",eA,[(0,a._)("button",{onClick:t[2]||(t[2]=(...A)=>i.downloadExcel&&i.downloadExcel(...A))},"Download excel")])):(0,a.kq)("",!0)]),e.data.length>0?((0,a.wg)(),(0,a.iD)("div",aA,[(0,a._)("div",sA,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.table.headers,((A,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"header",key:t},[(0,a._)("span",null,(0,s.zw)(A),1)])))),128))]),(0,a._)("div",oA,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.ClientFiltered,((A,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"body-row"},[(0,a._)("div",dA,[!1===A.executed?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"checked",onClick:t=>i.executeNote(A.protocol,A.date_start_attendance,A.date_end_attendance,A.date_start_schedule,A.date_end_schedule)},rA,8,iA)):(0,a.kq)("",!0),(0,a._)("button",{onClick:t=>i.searchInVoalle(A.protocol)},gA,8,lA)]),(0,a._)("div",CA,[(0,a._)("span",null,(0,s.zw)(A.type_note),1)]),(0,a._)("div",uA,[(0,a._)("span",null,(0,s.zw)(A.protocol),1)]),(0,a._)("div",hA,[(0,a._)("span",null,(0,s.zw)(A.name_client),1)]),(0,a._)("div",IA,[(0,a._)("span",null,(0,s.zw)(A.turnName),1)]),(0,a._)("div",QA,[(0,a._)("span",null,(0,s.zw)(A.region),1)]),(0,a._)("div",BA,[(0,a._)("span",null,(0,s.zw)(A.contract_id),1)]),(0,a._)("div",DA,[(0,a._)("span",null,(0,s.zw)(A.team),1)]),(0,a._)("div",pA,[(0,a._)("span",null,(0,s.zw)(A.technical),1)]),(0,a._)("div",mA,[(0,a._)("span",null,(0,s.zw)(A.date_start_attendance),1)]),(0,a._)("div",bA,[(0,a._)("span",null,(0,s.zw)(A.date_end_attendance),1)]),(0,a._)("div",wA,[(0,a._)("span",null,(0,s.zw)(A.date_start_schedule),1)]),(0,a._)("div",vA,[(0,a._)("span",null,(0,s.zw)(A.date_end_schedule),1)]),(0,a._)("div",EA,[(0,a._)("span",null,(0,s.zw)(A.status),1)]),(0,a._)("div",fA,[(0,a._)("span",null,(0,s.zw)(A.stage_contract),1)]),(0,a._)("div",kA,[(0,a._)("span",null,(0,s.zw)(A.status_contract),1)]),(0,a._)("div",_A,[(0,a._)("span",null,(0,s.zw)(A.context),1)]),(0,a._)("div",yA,[(0,a._)("span",null,(0,s.zw)(A.problem),1)])])))),128))])])):(0,a.kq)("",!0)])}var xA={name:"ListData",props:["data","typeFilter"],emits:["downloadExcel","getClientUnique"],data(){return{search:"",table:{headers:["Ações","Tipo de solicitação","Protocolo","Cliente","Turno","Região","Nº do contrato","Equipe","Técnico","Data inicio Att.","Data fim att.","Data inicio agendamento","Data fim agendamento","Status","Situação do contrato","Status do contrato","Contexto","Problema"],body:["","type_note","protocol","name_client","turnName","region","contract_id","team","technical","date_start_attendance","date_end_attendance","date_start_schedule","date_end_schedule","status","stage_contract","status_contract","context","problem"]}}},methods:{downloadExcel(){this.$emit("downloadExcel")},copyProtocol:function(A){const t=A,e=document.createElement("input");e.setAttribute("value",t),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},searchInVoalle:function(A){const t="https://erp.agetelecom.com.br/service_dashboard#list";this.copyProtocol(A),window.open(t,"_blank")},getClientUnique:function(){this.$emit("getClientUnique",this.search)},executeNote:function(A,t,e,a,s){this.$emit("executeNote",A);const o={protocol:A,date_start_attendance:t,date_end_attendance:e,date_start_schedule:a,date_end_schedule:s};(0,D.m)({method:"POST",url:"agetools/tools/schedule/notes/new-executed",headers:{Authorization:"Bearer "+p.Z.get("token")},data:{payload:o}}).then((A=>{console.log(A)}))}},computed:{ClientFiltered:function(){let A=[];return A=this.data.filter((A=>A.name_client.toLowerCase().indexOf(this.search.toLowerCase())>-1)),A}}};const MA=(0,z.Z)(xA,[["render",PA],["__scopeId","data-v-7eb4838e"]]);var JA=MA;const NA=A=>((0,a.dD)("data-v-799b4e15"),A=A(),(0,a.Cn)(),A),zA={id:"filters"},YA={class:"top"},FA={class:"title"},HA=NA((()=>(0,a._)("h2",null,"Filtrar tipo de solicitação",-1))),TA={class:"filter-items"},SA={class:"items"},GA={class:"checkbox"},LA={class:"container-checkbox"},OA=["name","id","value"],KA=NA((()=>(0,a._)("span",{class:"checkmark"},null,-1))),jA={class:"title-item"},UA=["onClick"];function XA(A,t,e,o,d,i){return(0,a.wg)(),(0,a.iD)("div",zA,[(0,a._)("div",YA,[(0,a._)("div",FA,[HA,(0,a._)("div",TA,[(0,a.wy)((0,a._)("input",{type:"text",name:"filter-item",id:"filter-item","onUpdate:modelValue":t[0]||(t[0]=A=>d.search=A),autocomplete:"off",placeholder:"Filtrar tipo de solicitação..."},null,512),[[q.nr,d.search]])])]),(0,a._)("div",SA,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.FiltersFiltered,(A=>((0,a.wg)(),(0,a.iD)("div",{class:"item",key:A.id},[(0,a._)("div",GA,[(0,a._)("label",LA,[(0,a.wy)((0,a._)("input",{type:"checkbox",name:`filter${A.id}`,id:A.id,"onUpdate:modelValue":t[1]||(t[1]=A=>d.checkboxId=A),value:A.id},null,8,OA),[[q.e8,d.checkboxId]]),KA])]),(0,a._)("div",jA,[(0,a._)("span",{onClick:t=>i.pushCheckboxId(A.id)},(0,s.zw)(A.title),9,UA)])])))),128))])]),(0,a._)("button",{onClick:t[2]||(t[2]=(...A)=>i.filterData&&i.filterData(...A))},"Filtrar")])}var WA={name:"ShortFilters",props:["dataFilters"],emits:["filterData"],data(){return{checkboxId:[],search:""}},methods:{filterData(){this.$emit("filterData",this.checkboxId)},pushCheckboxId(A){this.checkboxId.includes(A)?this.checkboxId=this.checkboxId.filter((t=>t!==A)):this.checkboxId.push(A)}},computed:{FiltersFiltered:function(){let A=[];return this.dataFilters.length>0&&(A=this.dataFilters.filter((A=>A.title.toLowerCase().indexOf(this.search.toLowerCase())>-1))),A}},beforeMount(){}};const RA=(0,z.Z)(WA,[["render",XA],["__scopeId","data-v-799b4e15"]]);var ZA=RA;const qA=A=>((0,a.dD)("data-v-7be6df8a"),A=A(),(0,a.Cn)(),A),VA={class:"container-dashboard"},$A={class:"item"},At={class:"info"},tt=qA((()=>(0,a._)("div",{class:"title"},[(0,a._)("h2",null,"Técnicos")],-1))),et={class:"item"},at={class:"info"},st=qA((()=>(0,a._)("div",{class:"title"},[(0,a._)("h2",null,"Equipes")],-1))),ot={class:"item"},dt={class:"info"},it=qA((()=>(0,a._)("div",{class:"title"},[(0,a._)("h2",null,"Cidades")],-1)));function nt(A,t,e,o,d,i){return(0,a.wg)(),(0,a.iD)("div",VA,[(0,a.wy)((0,a._)("input",{type:"text",name:"search",id:"search","onUpdate:modelValue":t[0]||(t[0]=A=>d.searchTerm=A),placeholder:"Buscar técnico, Equipe ou Cidade...",autocomplete:"off"},null,512),[[q.nr,d.searchTerm]]),(0,a._)("div",$A,[(0,a._)("div",At,[tt,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredTechnicals,((A,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"data",key:t},[(0,a._)("span",null,(0,s.zw)(A.technical)+":",1),(0,a._)("span",null,[(0,a._)("b",null,(0,s.zw)(A.count),1)])])))),128))])]),(0,a._)("div",et,[(0,a._)("div",at,[st,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredTeams,((A,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"data",key:t},[(0,a._)("span",null,(0,s.zw)(A.team)+":",1),(0,a._)("span",null,[(0,a._)("b",null,(0,s.zw)(A.count),1)])])))),128))])]),(0,a._)("div",ot,[(0,a._)("div",dt,[it,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredRegions,((A,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"data",key:t},[(0,a._)("span",null,(0,s.zw)(A.region)+":",1),(0,a._)("span",null,[(0,a._)("b",null,(0,s.zw)(A.count),1)])])))),128))])])])}var rt={name:"DashboardPage",props:["dataItems"],data(){return{regions:null,technicals:null,teams:null,searchTerm:""}},methods:{mountDashboard:function(){function A(A,t){const e=A.reduce(((A,e)=>{const a=e[t];return A[a]=(A[a]||0)+1,A}),{}),a=Object.entries(e).map((([A,e])=>({[t]:A,count:e}))).sort(((A,t)=>t.count-A.count));return a}this.regions=A(this.dataItems,"region"),this.technicals=A(this.dataItems,"technical"),this.teams=A(this.dataItems,"team")}},computed:{filteredRegions(){return this.searchTerm?this.regions.filter((A=>A.region.toLowerCase().includes(this.searchTerm.toLowerCase()))):this.regions},filteredTechnicals(){return this.searchTerm?this.technicals.filter((A=>A.technical.toLowerCase().includes(this.searchTerm.toLowerCase()))):this.technicals},filteredTeams(){return this.searchTerm?this.teams.filter((A=>A.team.toLowerCase().includes(this.searchTerm.toLowerCase()))):this.teams}},beforeMount(){this.mountDashboard()}};const lt=(0,z.Z)(rt,[["render",nt],["__scopeId","data-v-7be6df8a"]]);var ct=lt,gt={name:"HomeSchedule",components:{LoadingSpinner:m.Z,CalendarComponent:F,DashboardSchedule:Z,ListData:JA,ShortFilters:ZA,DashboardPage:ct},data(){return{page:"Painel",searchClient:"",filtered:!1,modal:!1,filters:{typeNote:{},region:{}},payload:{typeNote:null,dateSchedule:null,region:0},loading:!1,dataItems:{},orders:{protocol:"no-order",turn:"no-order",technical:"no-order",region:"no-order"},countTurns:{morning:0,afternoon:0,night:0},options:[],selectedOptions:[],pendingConsult:!1,dashboardData:{turn:{morning:0,afternoon:0,night:0},total:0,notAtt:0,executed:0,notExecuted:0},listData:{typeFilter:"all",data:{}},modalFilter:!1}},methods:{...(0,B.OI)(["SAVE_SYSTEM"]),modalAction(){this.modal=!this.modal},getFilters:function(){(0,D.m)({method:"GET",url:"agetools/tools/schedule/dashboard/filters",headers:{Authorization:"Bearer "+p.Z.get("token")}}).then((A=>{this.filters.typeNote=A.data.typeNotes,this.filters.typeNote.forEach((A=>{this.options.push({label:A.title,value:A.id})})),this.filters.region=A.data.regions}))},getData:function(A){this.page="Painel",this.modalFilter=!1,this.loading=!0,this.modal=!1,this.pendingConsult=!0,this.payload.typeNote=A,this.dashboardData.total=0,this.dashboardData.turn.morning=0,this.dashboardData.turn.afternoon=0,this.dashboardData.notAtt=0,this.dashboardData.executed=0,this.dashboardData.notExecuted=0,this.listData.typeFilter="all",(0,D.m)({method:"GET",url:"agetools/tools/schedule/dashboard/data",params:{dateSchedule:this.payload.dateSchedule,typeNote:this.payload.typeNote},headers:{Authorization:"Bearer "+p.Z.get("token")}}).then((A=>{this.loading=!1,this.dataItems=A.data,this.listData.data=A.data,this.pendingConsult=!1,this.dataItems.forEach((A=>{let t=new Date(A.date_start_schedule),e=t.getHours(),a="";e>=6&&e<12?(a="Manhã",this.dashboardData.turn.morning++):e>=12&&e<18?(a="Tarde",this.dashboardData.turn.afternoon++):(a="Noite",this.dashboardData.turn.night++),A["turnName"]=a,null===A.technical&&this.dashboardData.notAtt++,A.executed?this.dashboardData.executed++:this.dashboardData.notExecuted++})),this.dashboardData.total=this.dataItems.length,this.$refs.dashboardScheduleRef.updateDashboard(),this.$refs.dashboardPageRef.mountDashboard()}))},getNameClient:function(A){this.page="Painel",this.modalFilter=!1,this.loading=!0,this.modal=!1,this.pendingConsult=!0,this.dashboardData.total=0,this.dashboardData.turn.morning=0,this.dashboardData.turn.afternoon=0,this.dashboardData.notAtt=0,this.dashboardData.executed=0,this.dashboardData.notExecuted=0,this.listData.typeFilter="all",(0,D.m)({method:"GET",url:"agetools/tools/schedule/dashboard/data",params:{dateSchedule:this.payload.dateSchedule,name:A},headers:{Authorization:"Bearer "+p.Z.get("token")}}).then((A=>{this.loading=!1,this.dataItems=A.data,this.listData.data=A.data,this.pendingConsult=!1,this.dataItems.forEach((A=>{let t=new Date(A.date_start_schedule),e=t.getHours(),a="";e>=6&&e<12?(a="Manhã",this.dashboardData.turn.morning++):e>=12&&e<18?(a="Tarde",this.dashboardData.turn.afternoon++):(a="Noite",this.dashboardData.turn.night++),A["turnName"]=a,null===A.technical&&this.dashboardData.notAtt++,A.executed?this.dashboardData.executed++:this.dashboardData.notExecuted++})),this.dashboardData.total=this.dataItems.length,this.page="Painel",this.modalFilter=!1,this.$refs.dashboardScheduleRef.updateDashboard(),this.$refs.dashboardPageRef.mountDashboard()}))},download:function(){const A=["Protocolo","Status","Tipo de solicitação","Equipe","Técnico","Data inicio att.","Data fim att.","Data inicio agendamento","Data fim agendamento","id_client","Nome do cliente","Nº do contrato","Situacao do contrato","Status do contrato","Contexto","Problema","Região","Turno"],t=this.dataItems;(0,D.m)({method:"POST",url:"agetools/tools/schedule/dashboard/download-excel",data:{headersExcel:A,data:t},responseType:"blob",headers:{Authorization:"Bearer "+p.Z.get("token")}}).then((A=>{let t=new Blob([A.data],{type:"vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),e=document.createElement("a");e.href=window.URL.createObjectURL(t),e.download="agenda.xlsx",e.click()}))},ordenateData:function(A,t){let e=()=>{this.orders.turn="no-order",this.orders.technical="no-order",this.orders.protocol="no-order",this.orders.region="no-order"};switch(A){case"turn":e(),this.orders.turn=t,"up"!==t&&"down"!==t||this.dataItems.sort(((A,e)=>A.turnName>e.turnName?"up"===t?1:-1:A.turnName<e.turnName?"down"===t?1:-1:void 0)),"no-order"===t&&this.dataItems.sort(((A,t)=>A.protocol>t.protocol?-1:A.protocol<t.protocol?1:void 0));break;case"protocol":e(),this.orders.protocol=t,"up"!==t&&"down"!==t||this.dataItems.sort(((A,e)=>A.protocol>e.protocol?"up"===t?1:-1:A.protocol<e.protocol?"down"===t?1:-1:void 0)),"no-order"===t&&this.dataItems.sort(((A,t)=>A.protocol>t.protocol?-1:A.protocol<t.protocol?1:void 0));break;case"technical":e(),this.orders.technical=t,"up"!==t&&"down"!==t||this.dataItems.sort(((A,e)=>A.technical>e.technical?"up"===t?1:-1:A.technical<e.technical?"down"===t?1:-1:void 0)),"no-order"===t&&this.dataItems.sort(((A,t)=>A.protocol>t.protocol?-1:A.protocol<t.protocol?1:void 0));break;case"region":e(),this.orders.region=t,"up"!==t&&"down"!==t||this.dataItems.sort(((A,e)=>A.region>e.region?"up"===t?1:-1:A.region<e.region?"down"===t?1:-1:void 0)),"no-order"===t&&this.dataItems.sort(((A,t)=>A.protocol>t.protocol?-1:A.protocol<t.protocol?1:void 0));break}},getDateFilter:function(A){this.payload.dateSchedule=A},filteredData:function(A){switch(A){case"all":this.listData.data=this.dataItems;break;case"morning":this.listData.data=this.dataItems.filter((A=>"Manhã"===A.turnName));break;case"afternoon":this.listData.data=this.dataItems.filter((A=>"Tarde"===A.turnName));break;case"notAtt":this.listData.data=this.dataItems.filter((A=>null===A.technical));break;case"executed":this.listData.data=this.dataItems.filter((A=>!0===A.executed));break;case"notExecuted":this.listData.data=this.dataItems.filter((A=>!1===A.executed));break;default:this.listData.data=this.dataItems;break}},executeNote:function(A){this.dataItems.map((t=>{t.protocol===A&&(t.executed=!0)})),this.dashboardData.executed++,this.dashboardData.notExecuted--,this.$refs.dashboardScheduleRef.updateDashboard()}},computed:{...(0,B.Se)(["system"])},beforeMount(){this.SAVE_SYSTEM({loading:!1}),this.getFilters(),this.loading=!1}};const Ct=(0,z.Z)(gt,[["render",Q],["__scopeId","data-v-c453d2a6"]]);var ut=Ct},7647:function(A,t,e){var a={"./agendado.png":4518,"./bug.png":9905,"./manha.png":9247,"./nao-agendado.png":1583,"./servico-tecnico.png":5125,"./suporte-tecnico.png":3777,"./tarde.png":2587};function s(A){var t=o(A);return e(t)}function o(A){if(!e.o(a,A)){var t=new Error("Cannot find module '"+A+"'");throw t.code="MODULE_NOT_FOUND",t}return a[A]}s.keys=function(){return Object.keys(a)},s.resolve=o,A.exports=s,s.id=7647},4518:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAYAAACk6Ai5AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnBgYQNDTrBo/UAAASnElEQVR42u3cu8tlZxnG4XeNlQgWamHnHyAqqSwEg1qLpJlJJcQijIMMwcIqaUSmSWURrdIEO22ChYV4ChgIiKTJGLAJASvBESFTBMZtMU4yh29/e6+911rv4b6udh946x8891QA9vjWtNv9/KlXXtl9o5Ty/I0btd8DAHTkr2U3ffnpp3//7+nK9a+98Ubt5wClXKn9AAAAAGB9AgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAAAAAAQAABAAAAAAIIAAAAABBAAAAAAIAAAgAAAAAEEAAAAAAggAAAAAAAAQQAAAAACCAA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"},9905:function(A,t,e){"use strict";A.exports=e.p+"img/bug.4b8ed362.png"},9247:function(A,t,e){"use strict";A.exports=e.p+"img/manha.827e41c4.png"},1583:function(A){"use strict";A.exports="data:image/png;base64,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"},5125:function(A,t,e){"use strict";A.exports=e.p+"img/servico-tecnico.a22c6d74.png"},3777:function(A,t,e){"use strict";A.exports=e.p+"img/suporte-tecnico.05f9f4e8.png"},2587:function(A,t,e){"use strict";A.exports=e.p+"img/tarde.d9c26579.png"}}]);
//# sourceMappingURL=671.86704812.js.map