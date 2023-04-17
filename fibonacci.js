// Using for loop 
function fib()
{
    var x=0;              // initial value of x is 0
    var y=1;              // initial value of y is 1
    var z;                // initial value of z not decleared
    console.log(x);        // O/P 0
    console.log(y);        // O/P 1
    console.log(z);        // O/P undefined
for(i=0; i<num; i++)      // loop continue when i<num
{
    z=x+y;                // z=0+1, z=1+1
    //console.log( z);
    x=y;
    y=z;
    }
return y;
}
var num = 2;
var answer = fib(num);
console.log(answer);



