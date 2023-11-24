class MyCalci
{
    constructor(a,b)
    {
        this.a=a
        this.b=b
    }
    dispvals()
    {
        console.log("values of a=",this.a)
        console.log("values of b=",this.b)
    }
mysum()
{
    return this.a+this.b
}
}
MC=new MyCalci(20,10)
MC.dispvals()
console.log("Sum=",MC.mysum())
console.log("===================")
MC1=new MyCalci(100,150)
MC1.dispvals()
console.log("Sum=",MC1.mysum())
