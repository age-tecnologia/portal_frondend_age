"use strict";(self["webpackChunkageportal"]=self["webpackChunkageportal"]||[]).push([[501],{501:function(a,s,i){i.r(s),i.d(s,{default:function(){return ta}});var e=i(3396),t=i(7139);const d={class:"title"},l={key:0,class:"options"},n={key:0,class:"items"},r={key:0,class:"grid animation-up"},o={class:"section"},v=(0,e._)("h2",null,"Informações gerais",-1),c={class:"table-list"},m=(0,e._)("div",{class:"header"},[(0,e._)("div",{class:"data-item"},[(0,e._)("span",null," Canal ")])],-1),p={class:"body"},u=["onClick"],w={class:"data-item"},_={key:1,class:"grid animation-up"},g={class:"button-back"},h={class:"section"},k=(0,e._)("h2",null,"Informações gerais",-1),D={class:"table-list"},f=(0,e.uE)('<div class="header"><div class="data-item"><span> Supervisor </span></div><div class="data-item"><span> Vendas </span></div><div class="data-item"><span> Meta </span></div><div class="data-item"><span> Meta atingida </span></div><div class="data-item"><span> Canceladas </span></div><div class="data-item"><span> Estrelas </span></div><div class="data-item"><span> Valor da estrela </span></div><div class="data-item"><span> Acelerador/Deflator </span></div><div class="data-item"><span> Comissão </span></div><div class="data-item"><span> Competência </span></div></div>',1),y={class:"body"},z=["onClick"],C={class:"data-item"},b={class:"data-item"},M={class:"data-item"},S={class:"data-item"},A={class:"data-item"},E={class:"data-item"},F={class:"data-item"},V={class:"data-item"},Y={class:"data-item"},I={class:"data-item"},q={key:2,class:"grid animation-up"},H={class:"button-back"},N={class:"section"},R=(0,e._)("h2",null,"Informações gerais",-1),T={class:"table-list"},$=(0,e.uE)('<div class="header"><div class="data-item"><span> Vendedor </span></div><div class="data-item"><span> Vendas </span></div><div class="data-item"><span> Meta </span></div><div class="data-item"><span> Meta atingida </span></div><div class="data-item"><span> Canceladas </span></div><div class="data-item"><span> Estrelas </span></div><div class="data-item"><span> Valor da estrela </span></div><div class="data-item"><span> Acelerador/Deflator </span></div><div class="data-item"><span> Comissão </span></div><div class="data-item"><span> Competência </span></div></div>',1),K={class:"body"},J={class:"data-item"},Z={class:"data-item"},B={class:"data-item"},G={class:"data-item"},O={class:"data-item"},P={class:"data-item"},j={class:"data-item"},x={class:"data-item"},L={class:"data-item"},Q={class:"data-item"};function U(a,s,i,U,W,X){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",d,[(0,e._)("span",null,(0,t.zw)(W.title)+" "+(0,t.zw)(W.monthName),1),"view-general"===W.page?((0,e.wg)(),(0,e.iD)("div",l,[(0,e._)("i",{class:"fi fi-rr-caret-down",onClick:s[0]||(s[0]=a=>W.filters.display=!W.filters.display)}),W.filters.display?((0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("ul",null,[(0,e._)("li",{onClick:s[1]||(s[1]=a=>[W.dateFiltered.month="01",X.getAnalytic(),W.filters.display=!1,this.monthName="Janeiro"])},"Janeiro/2023"),(0,e._)("li",{onClick:s[2]||(s[2]=a=>[W.dateFiltered.month="02",X.getAnalytic(),W.filters.display=!1,this.monthName="Fevereiro"])},"Fevereiro/2023"),(0,e._)("li",{onClick:s[3]||(s[3]=a=>[W.dateFiltered.month="03",X.getAnalytic(),W.filters.display=!1,this.monthName="Março"])},"Março/2023")])])):(0,e.kq)("",!0)])):(0,e.kq)("",!0)]),this.monthName.length>0?((0,e.wg)(),(0,e.iD)(e.HY,{key:0},["view-general"===W.page?((0,e.wg)(),(0,e.iD)("div",r,[(0,e._)("div",o,[v,(0,e._)("div",c,[m,(0,e._)("div",p,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(W.dataInfo,((a,s)=>((0,e.wg)(),(0,e.iD)(e.HY,{key:s},[a.supervisors.length>0?((0,e.wg)(),(0,e.iD)("div",{key:0,class:"row-item",onClick:s=>X.viewSupervisors(a.supervisors)},[(0,e._)("div",w,(0,t.zw)(a.channel),1)],8,u)):(0,e.kq)("",!0)],64)))),128))])])])])):(0,e.kq)("",!0),"view-supervisors"===W.page?((0,e.wg)(),(0,e.iD)("div",_,[(0,e._)("div",g,[(0,e._)("button",{onClick:s[4]||(s[4]=a=>W.page="view-general")},"Voltar")]),(0,e._)("div",h,[k,(0,e._)("div",D,[f,(0,e._)("div",y,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(W.supervisorData,((a,s)=>((0,e.wg)(),(0,e.iD)("div",{key:s,class:"row-item",onClick:s=>X.viewSellers(a.sellersData)},[(0,e._)("div",C,(0,t.zw)(a.supervisorData[0].colaborador),1),(0,e._)("div",b,(0,t.zw)(a.supervisorData[0].vendas),1),(0,e._)("div",M,(0,t.zw)(a.supervisorData[0].meta),1),(0,e._)("div",S,(0,t.zw)(a.supervisorData[0].meta_atingida)+"% ",1),(0,e._)("div",A,(0,t.zw)(a.supervisorData[0].vendas_canceladas),1),(0,e._)("div",E,(0,t.zw)(a.supervisorData[0].estrelas),1),(0,e._)("div",F," R$"+(0,t.zw)(a.supervisorData[0].valor_estrela),1),(0,e._)("div",V,(0,t.zw)(a.supervisorData[0].acelerador_deflator)+"% ",1),(0,e._)("div",Y," R$"+(0,t.zw)(a.supervisorData[0].comissao),1),(0,e._)("div",I,(0,t.zw)(a.supervisorData[0].competencia),1)],8,z)))),128))])])])])):(0,e.kq)("",!0),"view-sellers"===W.page?((0,e.wg)(),(0,e.iD)("div",q,[(0,e._)("div",H,[(0,e._)("button",{onClick:s[5]||(s[5]=a=>W.page="view-supervisors")},"Voltar")]),(0,e._)("div",N,[R,(0,e._)("div",T,[$,(0,e._)("div",K,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(W.sellerData,((a,s)=>((0,e.wg)(),(0,e.iD)("div",{key:s,class:"row-item",style:{cursor:"default"}},[(0,e._)("div",J,(0,t.zw)(a.data[0].colaborador),1),(0,e._)("div",Z,(0,t.zw)(a.data[0].vendas),1),(0,e._)("div",B,(0,t.zw)(a.data[0].meta),1),(0,e._)("div",G,(0,t.zw)(a.data[0].meta_atingida)+"% ",1),(0,e._)("div",O,(0,t.zw)(a.data[0].vendas_canceladas),1),(0,e._)("div",P,(0,t.zw)(a.data[0].estrelas),1),(0,e._)("div",j," R$"+(0,t.zw)(a.data[0].valor_estrela),1),(0,e._)("div",x,(0,t.zw)(a.data[0].acelerador_deflator)+"% ",1),(0,e._)("div",L," R$"+(0,t.zw)(a.data[0].comissao),1),(0,e._)("div",Q,(0,t.zw)(a.data[0].competencia),1)])))),128))])])])])):(0,e.kq)("",!0)],64)):(0,e.kq)("",!0)],64)}var W=i(8089),X=i(680),aa=i(65),sa={name:"ManagerCommission",emits:["view-sales"],data(){return{page:"view-general",monthName:"",title:"Painel de comissões - ",data:{},dataInfo:{},supervisorData:{},sellerData:{},filters:{display:!1},dateFiltered:{month:null,year:2023}}},methods:{...(0,aa.OI)(["SAVE_SYSTEM"]),getAnalytic:function(){this.dataInfo={},this.SAVE_SYSTEM({loading:!0}),(0,W.m)({method:"GET",url:"agerv/analytics/payment",headers:{Authorization:"Bearer "+X.Z.get("token")},params:{month:this.dateFiltered.month,year:2023}}).then((a=>{this.dataInfo=a.data,this.SAVE_SYSTEM({loading:!1})})).catch((()=>{}))},getMonth:function(){const a=new Date;return a.getMonth()<10?this.dateFiltered.month="0"+(a.getMonth()-1):this.dateFiltered.month=(a.getMonth()+1).toString(),this.dateFiltered.month},viewSupervisors:function(a){this.supervisorData=a,this.page="view-supervisors"},viewSellers:function(a){this.sellerData=a,this.page="view-sellers"}},beforeMount(){this.getMonth(),this.getAnalytic()}},ia=i(89);const ea=(0,ia.Z)(sa,[["render",U]]);var ta=ea}}]);
//# sourceMappingURL=501.6f73da97.js.map