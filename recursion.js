// Recursion => A function that calls itself is called a recursive function.

 // program to count down numbers to 1
function countDown(number)        // pass value in function
{
console.log(number);              // display pass value

   
    const newNumber = number - 1;    // decrease the number value

    // base case
    if (newNumber > 0)           //the number value is decreased by 1 and function countDown() is called until the number is positive.
                              
     {
        countDown(newNumber);   // Here, newNumber > 0 is the base condition. 
    }
}

countDown(4);