"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{3008:(e,t,o)=>{o(9554),o(4747),o(2222);var a=o(9403),n=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},s=document.getElementById("id-array-positions").dataset.pie,r=JSON.parse(s),c=[],l=[],p=[];r.forEach((function(e){if(console.log(e),c.push(e.libelle),l.push(String(e.percent)),e.color)p.push(e.color);else{var t=n(0,255),o=n(0,255),a=n(0,255),s="rgb(".concat(t,",").concat(o,",").concat(a,")");p.push(s)}})),console.log(l);var u={labels:c,datasets:[{label:"Mes positions",data:l,backgroundColor:p}]},i=document.getElementById("chart-pos").getContext("2d");new a.Z(i,{type:"pie",data:u})}},e=>{e.O(0,[811,890],(()=>{return t=3008,e(e.s=t);var t}));e.O()}]);