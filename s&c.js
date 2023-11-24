p=parseInt(prompt("Enter principal..:"))
t=parseInt(prompt("Enter time..:"))
r=parseInt(prompt("Enter Rate of interst..:"))
si=p*t*r/100
console.log("simple interst=",si)
ci=p*Math.pow(1+r/100,t)
console.log("compound interst=",ci)