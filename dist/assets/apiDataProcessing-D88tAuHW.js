import{v as e,aR as o,i as a}from"./index-CsZsZZ8H.js";function u(r){try{if(e(r).equals(0))return"0";const t=e(r).mul(60).mul(60).mul(24).toDP(2,o.ROUND_HALF_UP).toString();return t?a(t,4):"--"}catch(t){return console.log("getRewardAmountDay Error: ",t),"--"}}function i(r){return`${e(r).div(Math.pow(10,4)).toString()}%`}export{u as a,i as g};
