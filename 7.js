//program to write count ,sum,average
i=1,s=0,c=0
se=0, ce=0
so=0 ,co=0
while(i<=5)
{
  console.log(i)
  c=c+1
  s=s+i
  if(i%2==0)
{
  ce=ce+1
  se=se+i
}
 else if(i%2!=0)
{
  co=co+1
  so=so+i
}
i=i+1
}
console.log("----------------")
console.log("count=",c)
console.log("sum=",s)
console.log("average=",s/5)
console.log("----------------")
console.log("count=",ce)
console.log("sum=",se)
console.log("average=",se/5)
console.log("----------------")
console.log("count=",co)
console.log("sum=",so)
console.log("average=",so/5)
console.log("----------------")

