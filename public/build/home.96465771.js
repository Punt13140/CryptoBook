"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{3008:(e,t,a)=>{a(9554),a(4747),a(2222);var o=a(9403),n=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},s=document.getElementById("id-array-positions").dataset.pie,r=JSON.parse(s),c=[],l=[],u=[];r.forEach((function(e){console.log(e),c.push(e.libelle),l.push(String(e.valueUsd));var t=n(0,255),a=n(0,255),o=n(0,255),s="rgb(".concat(t,",").concat(a,",").concat(o,")");u.push(s)})),console.log(l);var d={labels:c,datasets:[{label:"Mes positions",data:l,backgroundColor:u}]},p=document.getElementById("chart-pos").getContext("2d");new o.Z(p,{type:"pie",data:d})}},e=>{e.O(0,[811,890],(()=>{return t=3008,e(e.s=t);var t}));e.O()}]);