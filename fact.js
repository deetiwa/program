// recursive function  (factorial)
function factorial(x) 
{
    if (x === 0)             // if number is 0
    {
        return 1;
    }
 else                                  // if number is positive
     {
        return x * factorial(x - 1); 
    }
}

const num = 3;
if (num > 0)                            // calling factorial() if num is non-negative
 {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}


// useing for loop

function fact(num)
{
    var i, f;
    f = 1;
    for(i = 1; i <= num; i++)  
    {
    f = f * i;
    }
    i = i - 1;  
    console.log("The factorial of the number " + i + " is: " + f );
    }
    fact(5);