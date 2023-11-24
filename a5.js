
x=[10,20,30,40,50]
max=x[0]
mix=x[0]
for(i=0;i<5;i++)
{
    console.log(x[i])
    if(x[i]>max)
    max=x[i]
     else if(x[i]<min)
    min=x[i]
    }
console.log("Max=",max)
console.log("Min=",min)
