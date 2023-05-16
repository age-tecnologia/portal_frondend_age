"use strict";(self["webpackChunkageportal"]=self["webpackChunkageportal"]||[]).push([[944],{6944:function(a,t,e){e.r(t),e.d(t,{default:function(){return ka}});var s=e(3396),l=e(7139);const i=a=>((0,s.dD)("data-v-fa9a6754"),a=a(),(0,s.Cn)(),a),d={key:0,class:"container-dashboard"},n={class:"filters"},r=i((()=>(0,s._)("h1",null,"DASHBOARD",-1))),o={class:"buttons"},c=["disabled"],u=i((()=>(0,s._)("span",null," Penúltimo mês ",-1))),h=[u],p=["disabled"],_=i((()=>(0,s._)("span",null," Último mês ",-1))),g=[_],m={class:"graphs"},f={class:"group-third"},b=i((()=>(0,s._)("div",{class:"card"},[(0,s._)("h2",null,"Cancelamentos"),(0,s._)("div",{class:"table"},[(0,s._)("table",null,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nº do contrato"),(0,s._)("th",null,"Nome do cliente")])])])])],-1))),v={class:"card"},y=i((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-star"})],-1))),C={class:"title-info"},S=i((()=>(0,s._)("h2",null,"Valor da estrela",-1))),k={class:"card"},w=i((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-chevron-double-up"})],-1))),E={class:"title-info"},D=i((()=>(0,s._)("h2",null,"Acelerador",-1))),L=i((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-chevron-double-down"})],-1))),T={class:"title-info"},x=i((()=>(0,s._)("h2",null,"Deflator",-1))),R={class:"card"},z=i((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-rocket-lunch"})],-1))),G={class:"title-info"},M=i((()=>(0,s._)("h2",null,"Meta",-1))),A={class:"card"},I=i((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-chart-line-up"})],-1))),W={class:"title-info"},B=i((()=>(0,s._)("h2",null,"Meta atingida",-1)));function V(a,t,e,i,u,_){const V=(0,s.up)("GraphCards"),F=(0,s.up)("GraphSales");return!0===u.status?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",n,[r,(0,s._)("div",o,[(0,s._)("button",{disabled:!0===u.filters.pending,class:(0,l.C_)({selected:"penultimate-month"===u.filters.dataType}),onClick:t[0]||(t[0]=a=>_.getData("penultimate-month"))},h,10,c),(0,s._)("button",{disabled:!0===u.filters.pending,class:(0,l.C_)({selected:"month"===u.filters.dataType}),onClick:t[1]||(t[1]=a=>_.getData("month"))},g,10,p)])]),(0,s.Wm)(V,{data:u.data},null,8,["data"]),(0,s._)("div",m,[!1===u.updateChart?((0,s.wg)(),(0,s.j4)(F,{key:0,data_sales:u.data.sales,data_stars:u.data.stars},null,8,["data_sales","data_stars"])):(0,s.kq)("",!0),(0,s._)("div",f,[b,(0,s._)("div",v,[y,(0,s._)("div",C,[(0,s._)("h3",null,"R$"+(0,l.zw)(u.data.valueStar.value),1),S])]),(0,s._)("div",k,[u.data.mediator>0?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[w,(0,s._)("div",E,[(0,s._)("h3",null,"R$"+(0,l.zw)(u.data.commission.diff),1),D])],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[L,(0,s._)("div",T,[(0,s._)("h3",null,"R$"+(0,l.zw)(u.data.commission.diff),1),x])],64))]),(0,s._)("div",R,[z,(0,s._)("div",G,[(0,s._)("h3",null,(0,l.zw)(u.data.meta),1),M])]),(0,s._)("div",A,[I,(0,s._)("div",W,[(0,s._)("h3",null,(0,l.zw)(u.data.metaPercent)+"%",1),B])])])])])):(0,s.kq)("",!0)}var F=e(65);const Y=a=>((0,s.dD)("data-v-4100c438"),a=a(),(0,s.Cn)(),a),q={class:"card"},Z=Y((()=>(0,s._)("div",{class:"title-info"},[(0,s._)("h1",null,"Vendas e média de estrelas do período"),(0,s._)("h3",null,"Apenas vendas aprovadas e válidas")],-1))),$=Y((()=>(0,s._)("div",{class:"graph"},[(0,s._)("canvas",{id:"lineSalesDaily"})],-1))),H=[Z,$];function P(a,t,e,l,i,d){return(0,s.wg)(),(0,s.iD)("div",q,H)}e(7658);var N=e(1632),O={name:"GraphSales",props:["data_sales","data_stars"],computed:{...(0,F.Se)(["system"])},methods:{getLineSales:function(){const a=document.getElementById("lineSalesDaily").getContext("2d"),t=["#6C6EF6","#d4d4e1","#6C6EF6","#d4d4e1","#6C6EF6"],e=[],s=[],l=[];this.data_sales.salesForWeek.forEach((a=>{s.push("Sem "+a.week),e.push(a.sales)})),this.data_stars.starsForWeek.forEach((a=>{l.push(a.sales)}));const i={labels:s,datasets:[{type:"bar",data:e,label:"Vendas",borderWidth:0,pointRadius:0,borderRadius:15,backgroundColor:t,borderSkipped:!1,maxBarThickness:50,categoryPercentage:.8,order:2},{type:"line",order:1,data:l,borderWidth:2,pointRadius:4,backgroundColor:"#6A6CF6",fill:!1,label:"Estrelas"}]},d=new N.kL(a,{data:i,options:{scales:{y:{display:!0,grid:{display:!1}},x:{display:!0,grid:{display:!1},border:{display:!1},ticks:{font:{size:8}}}},plugins:{legend:{display:!1}},elements:{line:{tension:.3,borderColor:"rgb(52,140,212)"}}}});return d}},mounted(){this.getLineSales()}},j=e(89);const J=(0,j.Z)(O,[["render",P],["__scopeId","data-v-4100c438"]]);var K=J;const Q=a=>((0,s.dD)("data-v-09b5d5cd"),a=a(),(0,s.Cn)(),a),U={class:"graphs-cards"},X={class:"card"},aa=Q((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-chart-mixed"})],-1))),ta={class:"title-info"},ea=Q((()=>(0,s._)("h2",null,"Total de vendas",-1))),sa={class:"card"},la=Q((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-trophy-star"})],-1))),ia={class:"title-info"},da=Q((()=>(0,s._)("h2",null,"Total de estrelas",-1))),na={class:"card"},ra=Q((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-usd-square"})],-1))),oa={class:"title-info"},ca=Q((()=>(0,s._)("h2",null,"Total em comissão",-1))),ua={class:"card"},ha=Q((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-ban"})],-1))),pa={class:"title-info"},_a=Q((()=>(0,s._)("h2",null,"Total de cancelamentos",-1)));function ga(a,t,e,i,d,n){return(0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("div",X,[aa,(0,s._)("div",ta,[(0,s._)("h3",null,(0,l.zw)(e.data.sales.count),1),ea])]),(0,s._)("div",sa,[la,(0,s._)("div",ia,[(0,s._)("h3",null,(0,l.zw)(e.data.stars.totalStars),1),da])]),(0,s._)("div",na,[ra,(0,s._)("div",oa,[(0,s._)("h3",null,"R$"+(0,l.zw)(e.data.commission.liquid),1),ca])]),(0,s._)("div",ua,[ha,(0,s._)("div",pa,[(0,s._)("h3",null,(0,l.zw)(e.data.cancel.count),1),_a])])])}var ma={name:"GraphCards",props:["data"],methods:{getLineSales:function(){const a=document.getElementById("lineSales").getContext("2d");var t=a.createLinearGradient(0,0,0,30);t.addColorStop(0,"rgb(52,140,212,0)"),t.addColorStop(1,"rgba(9,41,65,0.0)");const e={labels:[1,2,3,4,5,6,7],datasets:[{data:[10,5,8,3,9,1],borderWidth:2,pointRadius:1,backgroundColor:t,fill:!0,label:"Vendas"}]},s=new N.kL(a,{type:"line",data:e,options:{scales:{y:{display:!1},x:{display:!1,grid:{display:!1},border:{display:!1},ticks:{color:"rgba(89, 91, 106, 0.48)"}}},plugins:{legend:{display:!1}},elements:{line:{tension:.5,borderColor:"rgb(52,140,212)"}}}});return s},getLineStars:function(){const a=document.getElementById("lineStars").getContext("2d");var t=a.createLinearGradient(0,0,0,30);t.addColorStop(0,"rgb(238,202,21,0)"),t.addColorStop(1,"rgba(86,73,8,0.0)");const e={labels:[1,2,3,4,5,6,7],datasets:[{data:[3,1,5,1,10,3],borderWidth:2,pointRadius:1,backgroundColor:t,fill:!0,label:"Estrelas"}]},s=new N.kL(a,{type:"line",data:e,options:{scales:{y:{display:!1},x:{display:!1,grid:{display:!1},border:{display:!1},ticks:{color:"rgba(89, 91, 106, 0.48)"}}},plugins:{legend:{display:!1}},elements:{line:{tension:.4,borderColor:"rgb(238,202,21)"}}}});return s},getLineCommission:function(){const a=document.getElementById("lineCommission").getContext("2d");var t=a.createLinearGradient(0,0,0,30);t.addColorStop(0,"rgb(18,161,25,0)"),t.addColorStop(1,"rgba(10,79,13,0.0)");const e={labels:[1,2,3,4,5,6,7],datasets:[{data:[3,7,2,10,6,15],borderWidth:2,pointRadius:1,backgroundColor:t,fill:!0,label:"Comissão"}]},s=new N.kL(a,{type:"line",data:e,options:{scales:{y:{display:!1},x:{display:!1,grid:{display:!1},border:{display:!1},ticks:{color:"rgba(89, 91, 106, 0.48)"}}},plugins:{legend:{display:!1}},elements:{line:{tension:.5,borderColor:"rgb(18,161,25)"}}}});return s},getLineCancels:function(){const a=document.getElementById("lineCancels").getContext("2d");var t=a.createLinearGradient(0,0,0,30);t.addColorStop(0,"rgba(206,5,5,0)"),t.addColorStop(1,"rgba(56,3,3,0)");const e={labels:[1,2,3,4,5,6,7],datasets:[{data:[10,3,2,1,7,1],borderWidth:2,pointRadius:1,backgroundColor:t,fill:!0,label:"Cancelamentos"}]},s=new N.kL(a,{type:"line",data:e,options:{scales:{y:{display:!1},x:{display:!1,grid:{display:!1},border:{display:!1},ticks:{color:"rgba(89, 91, 106, 0.48)"}}},plugins:{legend:{display:!1}},elements:{line:{tension:.5,borderColor:"rgb(206,5,5)"}}}});return s}},mounted(){}};const fa=(0,j.Z)(ma,[["render",ga],["__scopeId","data-v-09b5d5cd"]]);var ba=fa,va=e(8089),ya=e(680),Ca={name:"DashboardSales",components:{GraphSales:K,GraphCards:ba},data(){return{filters:{dataType:"month",pending:!1,month:null,year:null},data:{},status:!1,updateChart:!1}},methods:{...(0,F.OI)(["SAVE_SYSTEM"]),getData:function(a){this.filters.dataType=a,this.filters.pending=!0,this.updateChart=!0,this.getSellers()},getSellers:function(){this.SAVE_SYSTEM({loading:!0}),"penultimate-month"===this.filters.dataType?(this.filters.month=this.filters.month-1,this.filters.month="0"+this.filters.month):this.getMonth(),(0,va.m)({method:"GET",url:"agerv/analytics/payment",headers:{Authorization:"Bearer "+ya.Z.get("token")},params:{dashboard:!0,year:"2023",month:this.filters.month}}).then((a=>{this.data=a.data,this.SAVE_SYSTEM({loading:!1}),this.status=!0,this.filters.pending=!1,this.updateChart=!1}))},getMonth:function(){const a=new Date;a.getMonth()<10?this.filters.month="0"+a.getMonth():this.filters.month=(a.getMonth()+1).toString()}},computed:{...(0,F.Se)(["system"])},mounted(){this.getMonth(),this.getSellers()}};const Sa=(0,j.Z)(Ca,[["render",V],["__scopeId","data-v-fa9a6754"]]);var ka=Sa}}]);
//# sourceMappingURL=944.ae00f357.js.map