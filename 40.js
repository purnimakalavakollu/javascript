class MyCalci
{
    constructor(a,b)
    {
        this.a=a
        this.b=b
    }
            dispvals()
            {
                console.log("value of a=",this.a)
                console.log("value of b=",this.b)
}
mysum()
{
    return this.a+this.b
}
}
MC=new MyCalci(20,10)
MC.dispvals()
console.log("sum=",MC.mysum())
